import { SITE_CONFIG } from './constants';

/**
 * Boundary Service: WhatsApp Deep-Link Builder
 * Clean Code (Chapter 8: Boundaries): Isolates third-party URL structure
 * and ensures robust parameter sanitization across the entire system.
 */
export function buildWhatsAppUrl(
  message: string = '',
  phoneNumber: string = SITE_CONFIG.WHATSAPP_NUMBER
): string {
  const sanitizedPhone = phoneNumber.replace(/[^\d]/g, '');
  const trimmed = message.trim();
  return trimmed
    ? `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(trimmed)}`
    : `https://wa.me/${sanitizedPhone}`;
}

