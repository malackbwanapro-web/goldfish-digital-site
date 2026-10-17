import assert from 'node:assert';
import { test } from 'node:test';

// Import pure modules
import { SITE_CONFIG } from '../lib/constants.ts';
import { buildWhatsAppUrl } from '../lib/whatsapp.ts';
import {
  isValidContactName,
  isValidPhoneNumber,
  isValidEmail,
  hasMinimumDraftLength,
} from '../lib/validators.ts';
import {
  formatWhatsAppDirectMessage,
  formatStrategyCallMessage,
  formatDiagnosticMessage,
  formatTypebotScopeMessage,
} from '../lib/formatters.ts';

test('Clean Code: SITE_CONFIG Invariants', () => {
  assert.strictEqual(SITE_CONFIG.WHATSAPP_NUMBER, '254711404755');
  assert.strictEqual(SITE_CONFIG.PHONE_DISPLAY, '+254 711 404 755');
  assert.strictEqual(SITE_CONFIG.PRIMARY_NOTIFICATION_EMAIL, 'goldfishprojex@gmail.com');
  assert.strictEqual(SITE_CONFIG.BRAND_NAME, 'Goldfish Marketing');
  assert.ok(SITE_CONFIG.SITE_URL.startsWith('https://'));
});

test('Clean Code: WhatsApp Boundary Adapter (buildWhatsAppUrl)', () => {
  const url = buildWhatsAppUrl('Hello World');
  assert.strictEqual(url, 'https://wa.me/254711404755?text=Hello%20World');

  const emptyUrl = buildWhatsAppUrl();
  assert.strictEqual(emptyUrl, 'https://wa.me/254711404755');

  const customUrl = buildWhatsAppUrl('Custom Msg', '+254 700 123 456');
  assert.strictEqual(customUrl, 'https://wa.me/254700123456?text=Custom%20Msg');
});

test('Clean Code: Validation Predicates', () => {
  // Name Validation
  assert.strictEqual(isValidContactName('Malack'), true);
  assert.strictEqual(isValidContactName('M'), false);
  assert.strictEqual(isValidContactName('   '), false);
  assert.strictEqual(isValidContactName(null), false);

  // Phone Validation
  assert.strictEqual(isValidPhoneNumber('0711404755'), true);
  assert.strictEqual(isValidPhoneNumber('+254 711 404 755'), true);
  assert.strictEqual(isValidPhoneNumber('12345'), false);
  assert.strictEqual(isValidPhoneNumber(''), false);

  // Email Validation
  assert.strictEqual(isValidEmail('goldfishprojex@gmail.com'), true);
  assert.strictEqual(isValidEmail('invalid-email'), false);
  assert.strictEqual(isValidEmail(''), false);

  // Draft Length Validation
  assert.strictEqual(hasMinimumDraftLength('Short message', 50), false);
  assert.strictEqual(
    hasMinimumDraftLength('This message is definitely longer than fifty characters in total length.', 50),
    true
  );
});

test('Clean Code: Domain Message Formatters', () => {
  // Direct WhatsApp Formatter
  const waMsg = formatWhatsAppDirectMessage({
    name: 'Jane Doe',
    phone: '+254700000000',
    topic: 'Booking Engine',
    message: 'We want to reduce OTA fees.',
  });
  assert.ok(waMsg.includes('👤 *Name:* Jane Doe'));
  assert.ok(waMsg.includes('📱 *Phone:* +254700000000'));
  assert.ok(waMsg.includes('🎯 *Priority Focus:* Booking Engine'));
  assert.ok(waMsg.includes('We want to reduce OTA fees.'));

  // Strategy Call Formatter
  const stratMsg = formatStrategyCallMessage({
    refId: 'GFM-TEST01',
    name: 'John Doe',
    phone: '+254711111111',
    email: 'john@example.com',
    date: 'Today',
    timeSlot: '10:00 AM - 10:15 AM',
    topic: 'Web Replatforming',
  });
  assert.ok(stratMsg.includes('🔖 *Ref ID:* GFM-TEST01'));
  assert.ok(stratMsg.includes('👤 *Name:* John Doe'));
  assert.ok(stratMsg.includes('⏰ *Time Slot:* 10:00 AM - 10:15 AM (EAT / UTC+3)'));

  // Diagnostic Formatter
  const diagMsg = formatDiagnosticMessage({
    refId: 'GFM-DIAG01',
    name: 'Alice Smith',
    company: 'Diani Safari Ltd',
    phone: '+254722222222',
    email: 'alice@diani.com',
    budget: 'KShs 150,000 – 350,000',
    currency: 'KES',
    hurdles: ['High OTA Commissions', 'Slow 4G Speed'],
  });
  assert.ok(diagMsg.includes('🔖 *Ref ID:* GFM-DIAG01'));
  assert.ok(diagMsg.includes('🏢 *Company:* Diani Safari Ltd'));
  assert.ok(diagMsg.includes('• High OTA Commissions'));
  assert.ok(diagMsg.includes('• Slow 4G Speed'));

  // Typebot Scope Formatter
  const scopeMsg = formatTypebotScopeMessage({
    industry: 'Luxury Villa / Resort',
    scopeItems: ['Direct Booking FinTech', 'Beds24 Two-Way Calendar Sync'],
    name: 'Sarah Connor',
    company: 'Diani Beachfront Villas',
    phone: '+254711404755',
    email: 'sarah@example.com',
    timeline: 'Standard (14–21 days)',
    notes: 'Require M-Pesa integration with PesaPal',
  });
  assert.ok(scopeMsg.includes('⚡ *INTERACTIVE PROJECT SCOPE ESTIMATE* ⚡'));
  assert.ok(scopeMsg.includes('🏢 *Industry / Archetype:* Luxury Villa / Resort'));
  assert.ok(scopeMsg.includes('👤 *Contact Name:* Sarah Connor'));
  assert.ok(scopeMsg.includes('• Direct Booking FinTech'));
  assert.ok(scopeMsg.includes('• Beds24 Two-Way Calendar Sync'));
  assert.ok(scopeMsg.includes('⏱️ *Target Timeline:* Standard (14–21 days)'));
  assert.ok(scopeMsg.includes('Require M-Pesa integration with PesaPal'));
});

// Import refactored modules for new verification
import { isSlotAvailable, validBooking, bookingOptions } from '../lib/booking.ts';
import { DEFAULT_LEAD_SUBMISSION_TIMEOUT_MS, submitLead } from '../lib/leads-api.ts';
import { WA_PROMPT_CHIPS } from '../app/contact/components/WhatsAppTab.tsx';
import { HURDLE_OPTIONS } from '../app/contact/components/DiagnosticTab.tsx';

test('Clean Code: Booking Domain Predicates & Options', () => {
  // Saturday after 1:00 PM (780 min) is non-operational
  const saturdayAfternoon = isSlotAvailable(6, 14 * 60, false, 0);
  assert.strictEqual(saturdayAfternoon, false);

  // Past slot today is non-operational
  const pastSlotToday = isSlotAvailable(1, 10 * 60, true, 11 * 60);
  assert.strictEqual(pastSlotToday, false);

  // Weekday regular business hours slot in future is operational
  const weekdayMorning = isSlotAvailable(1, 10 * 60, false, 0);
  assert.strictEqual(weekdayMorning, true);

  // Sunday is excluded from booking options
  // 2026-10-18 is a Sunday
  const isSundayBookable = validBooking('2026-10-18', '10:00 AM - 10:15 AM', new Date('2026-10-17T07:00:00Z'));
  assert.strictEqual(isSundayBookable, false);

  // Options return populated slots
  const options = bookingOptions(new Date('2026-10-19T07:00:00Z'));
  assert.ok(Array.isArray(options));
  assert.ok(options.length > 0);
  assert.ok(options[0].slots.length > 0);
});

test('Clean Code: Lead Submission Boundary Adapter Contract', async () => {
  assert.strictEqual(DEFAULT_LEAD_SUBMISSION_TIMEOUT_MS, 15_000);

  // Network failure / mock rejection test
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => {
    throw new Error('Connection refused');
  };

  try {
    const result = await submitLead(
      { intent: 'test_lead', name: 'Tester' },
      'test-idempotency-key-001'
    );
    assert.strictEqual(result.success, false);
    assert.strictEqual(result.error, 'Connection refused');
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('Clean Code: Component Domain Constants Integrity', () => {
  assert.ok(Array.isArray(WA_PROMPT_CHIPS));
  assert.ok(WA_PROMPT_CHIPS.length >= 8);
  assert.ok(WA_PROMPT_CHIPS.every((chip) => chip.label && chip.text));

  assert.ok(Array.isArray(HURDLE_OPTIONS));
  assert.ok(HURDLE_OPTIONS.length >= 6);
});


