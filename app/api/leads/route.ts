import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export interface LeadSubmission {
  requestId: string;
  timestamp: string;
  intent: 'audit' | 'strategy_call' | 'diagnostic' | 'contact';
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  website?: string;
  spend?: string;
  budget?: string;
  selectedTimeSlot?: string;
  selectedDay?: string;
  painPoints?: string[];
  message?: string;
  status: 'received' | 'processed';
}

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

function generateRequestId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = 'GFM-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      intent = 'contact',
      name = '',
      email = '',
      phone = '',
      companyName = '',
      website = '',
      spend = '',
      budget = '',
      selectedTimeSlot = '',
      selectedDay = '',
      painPoints = [],
      message = '',
      serviceInterest = '',
    } = body;

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { code: 'VALIDATION_ERROR', message: 'Name and at least one contact method (email or phone) are required.' },
        { status: 422 }
      );
    }

    const requestId = generateRequestId();
    const timestamp = new Date().toISOString();

    const newLead: LeadSubmission = {
      requestId,
      timestamp,
      intent,
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      companyName: String(companyName).trim(),
      website: String(website).trim(),
      spend: String(spend).trim(),
      budget: String(budget).trim(),
      selectedTimeSlot: String(selectedTimeSlot).trim(),
      selectedDay: String(selectedDay).trim(),
      painPoints: Array.isArray(painPoints) ? painPoints : [],
      message: String(message).trim(),
      status: 'received',
    };

    // 1. Durable Server Persistence
    try {
      ensureDataFile();
      const existingData = fs.readFileSync(LEADS_FILE, 'utf-8');
      const leads: LeadSubmission[] = JSON.parse(existingData || '[]');
      leads.unshift(newLead);
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    } catch (err) {
      console.error('Error persisting lead to storage:', err);
    }

    // 2. Auto-Send Email Safeguard to goldfishprojex@gmail.com
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        let emailSubject = `⚡ NEW LEAD RECEIVED [${requestId}]: ${name} (${intent})`;
        if (intent === 'whatsapp_quick_chat_draft') {
          emailSubject = `⚡ [DRAFT CAPTURE] WhatsApp Lead [${requestId}]: ${name} (${phone}) - ${serviceInterest || 'General'}`;
        } else if (intent === 'whatsapp_quick_chat') {
          emailSubject = `⚡ NEW WHATSAPP LEAD [${requestId}]: ${name} (${phone}) - ${serviceInterest || 'General'}`;
        } else if (intent === 'strategy_call') {
          emailSubject = `📅 STRATEGY CALL REQUEST [${requestId}]: ${name} (${phone}) - ${selectedDay}`;
        } else if (intent === 'diagnostic') {
          emailSubject = `🛡️ 24H DIAGNOSTIC REQUEST [${requestId}]: ${name} (${companyName || phone})`;
        }

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Goldfish Marketing Leads <leads@goldfishmarketing.co.ke>',
            to: ['goldfishprojex@gmail.com'],
            subject: emailSubject,
            html: `
              <h2>NEW GOLDFISH MARKETING LEAD RECORDED</h2>
              <p><strong>Reference ID:</strong> ${requestId}</p>
              <p><strong>Timestamp:</strong> ${timestamp}</p>
              <p><strong>Status:</strong> ${intent === 'whatsapp_quick_chat_draft' ? 'Draft Auto-Captured (User typed >50 chars or prefill)' : 'Submitted / WhatsApp Launched'}</p>
              <p><strong>Intent:</strong> ${intent}</p>
              ${serviceInterest ? `<p><strong>Service / Focus:</strong> ${serviceInterest}</p>` : ''}
              <hr />
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email || 'N/A (WhatsApp Direct)'}</p>
              <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
              <p><strong>Website:</strong> ${website || 'N/A'}</p>
              <p><strong>Requested Date/Slot:</strong> ${selectedDay} ${selectedTimeSlot}</p>
              <p><strong>Budget/Spend:</strong> ${budget || spend || 'N/A'}</p>
              <p><strong>Pain Points:</strong> ${painPoints.join(', ') || 'N/A'}</p>
              <p><strong>Message / Requirement:</strong><br />${message || 'N/A'}</p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('Background email dispatch failed:', emailErr);
      }
    }

    return NextResponse.json(
      {
        requestId,
        status: 'received',
        message: 'Lead recorded durably and notification dispatched.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/leads Error:', error);
    return NextResponse.json(
      { code: 'INTERNAL_ERROR', message: 'Failed to process lead.' },
      { status: 500 }
    );
  }
}
