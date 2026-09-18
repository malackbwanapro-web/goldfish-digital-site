const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createRequire } = require('node:module');
const root = process.env.GFM_TEST_ROOT || path.resolve(__dirname, '..');
const projectRequire = createRequire(path.join(root, 'package.json'));
const ts = projectRequire('typescript');
const { NextRequest } = projectRequire('next/server');
function load(relative, fetchMock, env = {}) {
  const filename = path.join(root, relative);
  const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const module = { exports: {} };
  const localRequire = spec => spec.startsWith('@/') ? load(spec.slice(2) + '.ts', fetchMock, env) : projectRequire(spec);
  vm.runInNewContext(source, { module, exports: module.exports, require: localRequire, process: { env }, Buffer, Date, URL, AbortSignal, fetch: fetchMock }, { filename });
  return module.exports;
}
const booking = load('lib/booking.ts');
test('EAT: Friday after closing skips to Saturday; Sunday excluded', () => {
  const dates = booking.bookingOptions(new Date('2026-09-18T16:00:00Z'));
  assert.equal(dates[0].id, '2026-09-19');
  assert.equal(dates[0].slots.length, 3);
  assert.equal(dates[1].id, '2026-09-21');
});
test('EAT: Saturday after noon offers no afternoon slots', () => {
  assert.equal(booking.bookingOptions(new Date('2026-09-19T09:00:00Z'))[0].id, '2026-09-21');
});
test('EAT date boundary and past slot rejection', () => {
  const now = new Date('2026-09-17T22:00:00Z');
  assert.equal(booking.bookingOptions(now)[0].id, '2026-09-18');
  assert.equal(booking.validBooking('2026-09-18', '09:00 AM - 09:15 AM', new Date('2026-09-18T06:00:00Z')), false);
});
const key = 'aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee';
const valid = { intent: 'whatsapp_quick_chat', name: 'Test Person', phone: '+254700000000', message: '<script>example</script>' };
function request(body, headers = {}) {
  return new NextRequest('https://www.goldfishmarketing.co.ke/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Idempotency-Key': key, ...headers }, body: typeof body === 'string' ? body : JSON.stringify(body) });
}
test('missing mail configuration fails rather than reporting a captured lead', async () => {
  const { POST } = load('app/api/leads/route.ts', () => { throw new Error('Unexpected network'); });
  assert.equal((await POST(request(valid))).status, 503);
});
test('provider rejection, timeout and malformed acknowledgement never succeed', async () => {
  for (const mock of [async () => new Response('{}', { status: 401 }), async () => { throw new Error('timeout'); }, async () => new Response('{}')]) {
    const { POST } = load('app/api/leads/route.ts', mock, { RESEND_API_KEY: 'test-only' });
    assert.ok((await POST(request(valid))).status >= 500);
  }
});
test('provider acceptance returns truthful state and stable retry payload', async () => {
  const calls = [];
  const { POST } = load('app/api/leads/route.ts', async (url, options) => { calls.push(options); return new Response(JSON.stringify({ id: 'test-provider-id' })); }, { RESEND_API_KEY: 'test-only' });
  const first = await POST(request(valid));
  assert.equal(first.status, 202);
  assert.equal((await first.json()).status, 'notification_accepted');
  await POST(request(valid));
  assert.equal(calls[0].headers['Idempotency-Key'], `lead/${key}`);
  assert.equal(calls[0].body, calls[1].body);
  assert.equal(JSON.parse(calls[0].body).html, undefined);
});
test('invalid input, draft capture, oversized body and foreign origin rejected before sending', async () => {
  const { POST } = load('app/api/leads/route.ts', () => { throw new Error('Unexpected network'); });
  for (const [body, expected] of [[{ ...valid, name: ' ' }, 422], [{ ...valid, phone: {} }, 422], [{ ...valid, intent: 'whatsapp_quick_chat_draft' }, 422], ['{bad', 400], ['x'.repeat(16001), 413]]) {
    assert.equal((await POST(request(body))).status, expected);
  }
  assert.equal((await POST(request(valid, { Origin: 'https://example.org' }))).status, 403);
});
test('server rejects a Sunday booking preference', async () => {
  const { POST } = load('app/api/leads/route.ts', () => { throw new Error('Unexpected network'); });
  assert.equal((await POST(request({ ...valid, intent: 'strategy_call', email: 'test@example.org', selectedDay: '2026-09-20', selectedTimeSlot: '10:00 AM - 10:15 AM (EAT)' }))).status, 422);
});
