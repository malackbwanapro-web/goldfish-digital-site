import { NextRequest, NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/lib/constants';
import { isValidContactName, isValidEmail, isValidPhoneNumber } from '@/lib/validators';
import { validBooking } from '@/lib/booking';

// ─────────────────────────────────────────────────────────────
// DOMAIN CONSTANTS (Clean Code Chapter 2: Zero Magic Literals)
// ─────────────────────────────────────────────────────────────
const MAX_REQUEST_BODY_BYTES = 16_000;
const MAX_STANDARD_FIELD_LENGTH = 300;
const MAX_MESSAGE_FIELD_LENGTH = 4_000;
const MAX_PAIN_POINTS_COUNT = 12;
const EXTERNAL_DELIVERY_TIMEOUT_MS = 10_000;

const ALLOWED_LEAD_INTENTS = [
  'contact',
  'audit',
  'whatsapp_quick_chat',
  'strategy_call',
  'diagnostic',
  'typebot_assistant',
  'typebot_estimator',
] as const;

const LEAD_STRING_FIELDS = [
  'intent',
  'name',
  'email',
  'phone',
  'companyName',
  'website',
  'spend',
  'budget',
  'selectedDay',
  'selectedTimeSlot',
  'serviceInterest',
  'message',
] as const;

type LeadField = typeof LEAD_STRING_FIELDS[number];
type SanitizedLead = Record<LeadField, string>;

interface ValidationFailure {
  valid: false;
  statusCode: number;
  code: string;
  message?: string;
}

interface ValidationSuccess {
  valid: true;
  lead: SanitizedLead;
  painPoints: string[];
}

type ValidationResult = ValidationSuccess | ValidationFailure;

// ─────────────────────────────────────────────────────────────
// HIGH-LEVEL ORCHESTRATOR (The Stepdown Rule - Clean Code Chapter 3)
// ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1. Origin & Idempotency Guards
  const origin = req.headers.get('origin');
  if (!isAllowedOrigin(origin, req.url)) {
    return NextResponse.json({ code: 'INVALID_ORIGIN' }, { status: 403 });
  }

  const idempotencyKey = req.headers.get('idempotency-key');
  if (!isValidIdempotencyKey(idempotencyKey)) {
    return NextResponse.json({ code: 'INVALID_REQUEST_KEY' }, { status: 422 });
  }

  try {
    // 2. Stream Ingestion with Strict Size Limit
    const streamResult = await readStreamWithinByteLimit(req.body, MAX_REQUEST_BODY_BYTES);
    if (!streamResult.success) {
      const status = streamResult.code === 'BODY_TOO_LARGE' ? 413 : 400;
      return NextResponse.json({ code: streamResult.code }, { status });
    }

    // 3. JSON Parsing & Object Shape Verification
    let parsedBody: Record<string, unknown>;
    try {
      parsedBody = JSON.parse(streamResult.buffer.toString('utf8'));
    } catch {
      return NextResponse.json({ code: 'INVALID_JSON' }, { status: 400 });
    }

    if (!parsedBody || typeof parsedBody !== 'object' || Array.isArray(parsedBody)) {
      return NextResponse.json({ code: 'INVALID_BODY' }, { status: 422 });
    }

    // 4. Domain Validation & Sanitization
    const validationResult = validateAndSanitizeLead(parsedBody);
    if (!validationResult.valid) {
      return NextResponse.json(
        { code: validationResult.code, ...(validationResult.message && { message: validationResult.message }) },
        { status: validationResult.statusCode }
      );
    }

    // 5. External Email Provider Delivery
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json({ code: 'DELIVERY_UNAVAILABLE' }, { status: 503 });
    }

    const clientRequestId = `GFM-${idempotencyKey}`;
    const deliverySuccess = await deliverLeadNotification(
      resendApiKey,
      idempotencyKey!,
      clientRequestId,
      validationResult.lead,
      validationResult.painPoints
    );

    if (!deliverySuccess) {
      return NextResponse.json({ code: 'DELIVERY_UNAVAILABLE' }, { status: 502 });
    }

    return NextResponse.json(
      { requestId: clientRequestId, status: 'notification_accepted' },
      { status: 202 }
    );
  } catch {
    // Do not log request body or upstream responses containing sensitive contact data.
    return NextResponse.json({ code: 'DELIVERY_UNAVAILABLE' }, { status: 503 });
  }
}

// ─────────────────────────────────────────────────────────────
// MID-LEVEL STEPDOWN HELPERS
// ─────────────────────────────────────────────────────────────

function isAllowedOrigin(originHeader: string | null, requestUrl: string): boolean {
  if (!originHeader) return true;
  return originHeader === new URL(requestUrl).origin || originHeader === SITE_CONFIG.SITE_URL;
}

function isValidIdempotencyKey(keyHeader: string | null): boolean {
  if (!keyHeader) return false;
  return /^[0-9a-f-]{36}$/i.test(keyHeader);
}

async function readStreamWithinByteLimit(
  bodyStream: ReadableStream<Uint8Array> | null,
  maxBytes: number
): Promise<{ success: true; buffer: Buffer } | { success: false; code: 'INVALID_BODY' | 'BODY_TOO_LARGE' }> {
  const reader = bodyStream?.getReader();
  if (!reader) return { success: false, code: 'INVALID_BODY' };

  let totalBytes = 0;
  const chunks: Uint8Array[] = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > maxBytes) {
      await reader.cancel();
      return { success: false, code: 'BODY_TOO_LARGE' };
    }
    chunks.push(value);
  }

  return { success: true, buffer: Buffer.concat(chunks) };
}

function validateAndSanitizeLead(body: Record<string, unknown>): ValidationResult {
  const sanitizedLead: Partial<SanitizedLead> = {};

  // Verify and sanitize string fields
  for (const field of LEAD_STRING_FIELDS) {
    const rawValue = body[field];
    if (rawValue !== undefined && typeof rawValue !== 'string') {
      return { valid: false, statusCode: 422, code: 'INVALID_FIELD' };
    }
    const trimmedValue = (typeof rawValue === 'string' ? rawValue : '').trim();
    const maxLength = field === 'message' ? MAX_MESSAGE_FIELD_LENGTH : MAX_STANDARD_FIELD_LENGTH;
    if (trimmedValue.length > maxLength) {
      return { valid: false, statusCode: 422, code: 'FIELD_TOO_LONG' };
    }
    sanitizedLead[field] = trimmedValue;
  }

  const lead = sanitizedLead as SanitizedLead;

  // Intent & Contact Identification Guards
  if (
    !ALLOWED_LEAD_INTENTS.includes(lead.intent as typeof ALLOWED_LEAD_INTENTS[number]) ||
    !isValidContactName(lead.name) ||
    (!lead.email && !lead.phone) ||
    (lead.email && !isValidEmail(lead.email)) ||
    (lead.phone && !isValidPhoneNumber(lead.phone))
  ) {
    return { valid: false, statusCode: 422, code: 'VALIDATION_ERROR' };
  }

  // Strategy Call Specific Slot Guard
  if (lead.intent === 'strategy_call') {
    const timeSlotClean = lead.selectedTimeSlot.replace(/ \(EAT\)$/, '');
    if (!lead.email || !lead.phone || !validBooking(lead.selectedDay, timeSlotClean)) {
      return {
        valid: false,
        statusCode: 422,
        code: 'INVALID_SLOT',
        message: 'Choose a future business-hours preference.',
      };
    }
  }

  // Diagnostic Specific Field Guard
  if (lead.intent === 'diagnostic' && (!lead.companyName || !lead.email || !lead.phone)) {
    return { valid: false, statusCode: 422, code: 'VALIDATION_ERROR' };
  }

  // Pain Points Array Guard
  const rawPainPoints = body.painPoints;
  if (rawPainPoints !== undefined) {
    if (
      !Array.isArray(rawPainPoints) ||
      rawPainPoints.length > MAX_PAIN_POINTS_COUNT ||
      rawPainPoints.some((item: unknown) => typeof item !== 'string' || item.length > MAX_STANDARD_FIELD_LENGTH)
    ) {
      return { valid: false, statusCode: 422, code: 'INVALID_PAIN_POINTS' };
    }
  }

  const painPoints = Array.isArray(rawPainPoints) ? (rawPainPoints as string[]) : [];
  return { valid: true, lead, painPoints };
}

async function deliverLeadNotification(
  apiKey: string,
  idempotencyKey: string,
  requestId: string,
  lead: SanitizedLead,
  painPoints: string[]
): Promise<boolean> {
  const plainTextEmailContent = [
    `Reference: ${requestId}`,
    ...Object.entries(lead).map(([fieldName, fieldValue]) => `${fieldName}: ${fieldValue}`),
    `painPoints: ${painPoints.join(', ')}`,
    'Appointment requests require manual confirmation.',
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    signal: AbortSignal.timeout(EXTERNAL_DELIVERY_TIMEOUT_MS),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      'Idempotency-Key': `lead/${idempotencyKey}`,
    },
    body: JSON.stringify({
      from: 'Goldfish Marketing Leads <leads@goldfishmarketing.co.ke>',
      to: [SITE_CONFIG.PRIMARY_NOTIFICATION_EMAIL],
      subject: `Goldfish enquiry ${requestId} (${lead.intent})`,
      text: plainTextEmailContent,
    }),
  });

  if (!response.ok) return false;

  const result = await response.json();
  return typeof result.id === 'string' && Boolean(result.id);
}
