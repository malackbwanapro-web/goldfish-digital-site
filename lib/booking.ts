// Preference windows in Africa/Nairobi (UTC+3); these are not live reservations.
const WINDOWS = [
  ['09:00 AM - 09:15 AM', 540], ['10:00 AM - 10:15 AM', 600],
  ['11:30 AM - 11:45 AM', 690], ['02:00 PM - 02:15 PM', 840],
  ['03:30 PM - 03:45 PM', 930], ['04:45 PM - 05:00 PM', 1005],
] as const;
export function bookingOptions(now = new Date()) {
  const eat = new Date(now.getTime() + 3 * 3600000);
  const today = eat.toISOString().slice(0, 10);
  const options = [];
  for (let offset = 0; offset < 8; offset++) {
    const date = new Date(`${today}T00:00:00Z`);
    date.setUTCDate(date.getUTCDate() + offset);
    const day = date.getUTCDay();
    if (day === 0) continue;
    const slots = WINDOWS.filter(([, minutes]) =>
      (day !== 6 || minutes + 15 <= 780) &&
      (offset !== 0 || minutes > eat.getUTCHours() * 60 + eat.getUTCMinutes())
    ).map(([label]) => label);
    if (slots.length) options.push({ id: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' }),
      sub: 'EAT · request only', badge: 'Preferred day', slots });
    if (options.length === 3) break;
  }
  return options;
}
export function validBooking(day: string, slot: string, now = new Date()) {
  return bookingOptions(now).some(option => option.id === day && option.slots.includes(slot as typeof option.slots[number]));
}
