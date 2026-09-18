import { NextRequest, NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/lib/constants';
import { isValidContactName, isValidEmail, isValidPhoneNumber } from '@/lib/validators';
import { validBooking } from '@/lib/booking';

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (origin && origin !== new URL(req.url).origin && origin !== SITE_CONFIG.SITE_URL) {
    return NextResponse.json({ code: 'INVALID_ORIGIN' }, { status: 403 });
  }
  const key = req.headers.get('idempotency-key');
  if (!key || !/^[0-9a-f-]{36}$/i.test(key)) {
    return NextResponse.json({ code: 'INVALID_REQUEST_KEY' }, { status: 422 });
  }
  try {
    // Limit the stream rather than relying on a client-supplied Content-Length.
    const reader = req.body?.getReader();
    if (!reader) return NextResponse.json({ code: 'INVALID_BODY' }, { status: 400 });
    let size = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16000) {
        await reader.cancel();
        return NextResponse.json({ code: 'BODY_TOO_LARGE' }, { status: 413 });
      }
      chunks.push(value);
    }
    let body;
    try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); }
    catch { return NextResponse.json({ code: 'INVALID_JSON' }, { status: 400 }); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ code: 'INVALID_BODY' }, { status: 422 });
    }
    const fields = ['intent', 'name', 'email', 'phone', 'companyName', 'website', 'spend', 'budget', 'selectedDay', 'selectedTimeSlot', 'serviceInterest', 'message'];
    const lead: Record<string, string> = {};
    for (const field of fields) {
      if (body[field] !== undefined && typeof body[field] !== 'string') {
        return NextResponse.json({ code: 'INVALID_FIELD' }, { status: 422 });
      }
      lead[field] = (body[field] || '').trim();
      if (lead[field].length > (field === 'message' ? 4000 : 300)) {
        return NextResponse.json({ code: 'FIELD_TOO_LONG' }, { status: 422 });
      }
    }
    if (!['contact', 'audit', 'whatsapp_quick_chat', 'strategy_call', 'diagnostic'].includes(lead.intent) ||
        !isValidContactName(lead.name) || (!lead.email && !lead.phone) ||
        (lead.email && !isValidEmail(lead.email)) || (lead.phone && !isValidPhoneNumber(lead.phone))) {
      return NextResponse.json({ code: 'VALIDATION_ERROR' }, { status: 422 });
    }
    if (lead.intent === 'strategy_call' && (!lead.email || !lead.phone ||
        !validBooking(lead.selectedDay, lead.selectedTimeSlot.replace(/ \(EAT\)$/, '')))) {
      return NextResponse.json({ code: 'INVALID_SLOT', message: 'Choose a future business-hours preference.' }, { status: 422 });
    }
    if (lead.intent === 'diagnostic' && (!lead.companyName || !lead.email || !lead.phone)) {
      return NextResponse.json({ code: 'VALIDATION_ERROR' }, { status: 422 });
    }
    if (body.painPoints !== undefined && (!Array.isArray(body.painPoints) || body.painPoints.length > 12 ||
        body.painPoints.some((item: unknown) => typeof item !== 'string' || item.length > 300))) {
      return NextResponse.json({ code: 'INVALID_PAIN_POINTS' }, { status: 422 });
    }
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ code: 'DELIVERY_UNAVAILABLE' }, { status: 503 });
    const requestId = `GFM-${key}`;
    // Provider idempotency makes retries of the same client request safe. No local
    // serverless filesystem is presented as a durable lead database.
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST', signal: AbortSignal.timeout(10000),
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}`, 'Idempotency-Key': `lead/${key}` },
      body: JSON.stringify({
        from: 'Goldfish Marketing Leads <leads@goldfishmarketing.co.ke>',
        to: [SITE_CONFIG.PRIMARY_NOTIFICATION_EMAIL],
        subject: `Goldfish enquiry ${requestId} (${lead.intent})`,
        text: [`Reference: ${requestId}`, ...Object.entries(lead).map(([field, value]) => `${field}: ${value}`),
          `painPoints: ${(body.painPoints || []).join(', ')}`, 'Appointment requests require manual confirmation.'].join('\n'),
      }),
    });
    if (!response.ok) return NextResponse.json({ code: 'DELIVERY_UNAVAILABLE' }, { status: 502 });
    const result = await response.json();
    if (typeof result.id !== 'string' || !result.id) return NextResponse.json({ code: 'DELIVERY_UNAVAILABLE' }, { status: 502 });
    return NextResponse.json({ requestId, status: 'notification_accepted' }, { status: 202 });
  } catch {
    // Do not log the request body or upstream responses containing contact data.
    return NextResponse.json({ code: 'DELIVERY_UNAVAILABLE' }, { status: 503 });
  }
}
