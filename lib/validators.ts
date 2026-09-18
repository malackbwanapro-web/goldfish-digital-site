/**
 * Domain Validation Predicates
 * Clean Code (Chapter 7 / G28): Encapsulates compound conditionals into
 * expressive, intention-revealing pure boolean predicates.
 */

export function isValidContactName(name?: string | null): boolean {
  if (!name) return false;
  return name.trim().length >= 2;
}

export function isValidPhoneNumber(phone?: string | null): boolean {
  if (!phone) return false;
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 9 && digitsOnly.length <= 15;
}

export function isValidEmail(email?: string | null): boolean {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function hasMinimumDraftLength(message?: string | null, minLength = 50): boolean {
  if (!message) return false;
  return message.trim().length >= minLength;
}
