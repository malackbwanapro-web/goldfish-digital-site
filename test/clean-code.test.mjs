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
});
