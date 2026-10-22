/**
 * Domain Message Formatters
 * Clean Code (Chapter 3: SRP & Decoupling): Pure message formatting functions
 * decoupled from UI rendering and network I/O.
 */

export interface WhatsAppDirectPayload {
  name: string;
  phone: string;
  topic: string;
  message: string;
}

export function formatWhatsAppDirectMessage({
  name,
  phone,
  topic,
  message,
}: WhatsAppDirectPayload): string {
  return [
    'Hi Malack,',
    `👤 *Name:* ${name.trim()}`,
    `📱 *Phone:* ${phone.trim()}`,
    `🎯 *Priority Focus:* ${topic.trim()}`,
    '',
    message.trim(),
    '',
    '— Sent via Goldfish Marketing WhatsApp Desk',
  ].join('\n');
}

export interface StrategyCallPayload {
  refId: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  topic: string;
}

export function formatStrategyCallMessage({
  refId,
  name,
  phone,
  email,
  date,
  timeSlot,
  topic,
}: StrategyCallPayload): string {
  return [
    '📅 *NEW STRATEGY CALL REQUEST* 📅',
    `🔖 *Ref ID:* ${refId || 'GFM-PENDING'}`,
    '',
    `👤 *Name:* ${name.trim()}`,
    `📱 *Phone:* ${phone.trim()}`,
    `📧 *Email:* ${email.trim()}`,
    `🗓️ *Requested Date:* ${date}`,
    `⏰ *Time Slot:* ${timeSlot} (EAT / UTC+3)`,
    `🎯 *Priority Focus:* ${topic}`,
    '',
    '— Submitted via Goldfish Marketing Strategy Booking Hub',
  ].join('\n');
}

export interface DiagnosticPayload {
  refId: string;
  name: string;
  company: string;
  website?: string;
  phone: string;
  email: string;
  budget: string;
  currency: string;
  hurdles: string[];
  notes?: string;
}

export function formatDiagnosticMessage({
  refId,
  name,
  company,
  website,
  phone,
  email,
  budget,
  currency,
  hurdles,
  notes,
}: DiagnosticPayload): string {
  const hurdleLines =
    hurdles && hurdles.length > 0
      ? hurdles.map((h) => `• ${h}`).join('\n')
      : '• General Operational Audit';

  const sections = [
    '🛡️ *CONFIDENTIAL 3-PAGE DIAGNOSTIC REQUEST* 🛡️',
    `🔖 *Ref ID:* ${refId || 'GFM-PENDING'}`,
    '',
    `👤 *Name:* ${name.trim()}`,
    `🏢 *Company:* ${company.trim()}`,
    `🌐 *Website:* ${website?.trim() || 'Not provided'}`,
    `📱 *Phone / WhatsApp:* ${phone.trim()}`,
    `📧 *Email:* ${email.trim()}`,
    `💰 *SME Budget Band:* ${budget} (${currency})`,
    '',
    '🎯 *Key Operational Hurdles:*',
    hurdleLines,
  ];

  if (notes && notes.trim()) {
    sections.push('', `📝 *Context / Notes:* ${notes.trim()}`);
  }

  sections.push('', '— Submitted via Goldfish Marketing 24h Diagnostic Engine');

  return sections.join('\n');
}
