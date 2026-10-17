/**
 * Strategic Consultation Slot Booking Logic
 * Clean Code (Chapter 2: Meaningful Names / Chapter 7: Encapsulate Conditionals)
 * Preference windows in Africa/Nairobi (UTC+3); non-binding intake requests.
 */

export const EAT_TIMEZONE_OFFSET_HOURS = 3;
export const MILLISECONDS_PER_HOUR = 3_600_000;
export const SUNDAY_DAY_INDEX = 0;
export const SATURDAY_DAY_INDEX = 6;
export const SATURDAY_CLOSING_MINUTE = 780; // 13:00 (1:00 PM) EAT
export const SLOT_DURATION_MINUTES = 15;
export const MAX_LOOKAHEAD_DAYS = 8;
export const REQUIRED_SCHEDULE_DAYS = 3;

export interface BookingWindow {
  label: string;
  startMinute: number;
}

export const BOOKING_WINDOWS: readonly BookingWindow[] = [
  { label: '09:00 AM - 09:15 AM', startMinute: 540 },
  { label: '10:00 AM - 10:15 AM', startMinute: 600 },
  { label: '11:30 AM - 11:45 AM', startMinute: 690 },
  { label: '02:00 PM - 02:15 PM', startMinute: 840 },
  { label: '03:30 PM - 03:45 PM', startMinute: 930 },
  { label: '04:45 PM - 05:00 PM', startMinute: 1005 },
] as const;

export interface DailyBookingOption {
  id: string;
  label: string;
  sub: string;
  badge: string;
  slots: string[];
}

/**
 * Encapsulates slot qualification logic into an intention-revealing predicate.
 * Excludes Saturday slots ending past 1:00 PM EAT and past slots on the current day.
 */
export function isSlotAvailable(
  dayOfWeek: number,
  slotStartMinute: number,
  isToday: boolean,
  currentEatMinutes: number
): boolean {
  const isPastSaturdayClosing =
    dayOfWeek === SATURDAY_DAY_INDEX &&
    slotStartMinute + SLOT_DURATION_MINUTES > SATURDAY_CLOSING_MINUTE;

  if (isPastSaturdayClosing) return false;

  const isPastSlotToday = isToday && slotStartMinute <= currentEatMinutes;
  if (isPastSlotToday) return false;

  return true;
}

/**
 * Calculates candidate booking dates and available slots in Africa/Nairobi (EAT).
 */
export function bookingOptions(now = new Date()): DailyBookingOption[] {
  const eatTime = new Date(now.getTime() + EAT_TIMEZONE_OFFSET_HOURS * MILLISECONDS_PER_HOUR);
  const todayIsoDate = eatTime.toISOString().slice(0, 10);
  const currentEatMinutes = eatTime.getUTCHours() * 60 + eatTime.getUTCMinutes();
  const scheduleOptions: DailyBookingOption[] = [];

  for (let dayOffset = 0; dayOffset < MAX_LOOKAHEAD_DAYS; dayOffset++) {
    const candidateDate = new Date(`${todayIsoDate}T00:00:00Z`);
    candidateDate.setUTCDate(candidateDate.getUTCDate() + dayOffset);

    const dayOfWeek = candidateDate.getUTCDay();
    if (dayOfWeek === SUNDAY_DAY_INDEX) continue;

    const isToday = dayOffset === 0;
    const availableSlots = BOOKING_WINDOWS.filter(({ startMinute }) =>
      isSlotAvailable(dayOfWeek, startMinute, isToday, currentEatMinutes)
    ).map(({ label }) => label);

    if (availableSlots.length > 0) {
      scheduleOptions.push({
        id: candidateDate.toISOString().slice(0, 10),
        label: candidateDate.toLocaleDateString('en-GB', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          timeZone: 'UTC',
        }),
        sub: 'EAT · request only',
        badge: 'Preferred day',
        slots: availableSlots,
      });
    }

    if (scheduleOptions.length === REQUIRED_SCHEDULE_DAYS) break;
  }

  return scheduleOptions;
}

/**
 * Validates whether a requested date and slot are valid and currently bookable.
 */
export function validBooking(day: string, slot: string, now = new Date()): boolean {
  return bookingOptions(now).some(
    (option) => option.id === day && option.slots.includes(slot)
  );
}
