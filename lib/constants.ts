/**
 * Centralized Site and Contact Configuration
 * Clean Code: Eliminates magic literals and provides a single source of truth across the application.
 */

export const SITE_CONFIG = {
  BRAND_NAME: 'Goldfish Marketing',
  FOUNDER_NAME: 'Malack Bwana',
  TAGLINE: 'Custom AI Systems & Enterprise Automation Infrastructure',
  SITE_URL: 'https://www.goldfishmarketing.co.ke',

  // Contact Invariants
  WHATSAPP_NUMBER: '254711404755',
  PHONE_DISPLAY: '+254 711 404 755',
  PRIMARY_NOTIFICATION_EMAIL: 'goldfishprojex@gmail.com',
  OFFICIAL_INFO_EMAIL: 'info@goldfishmarketing.co.ke',

  // Operating Base & Physical Location
  BASE_CITY: 'Diani Beach',
  BASE_REGION: 'Kwale County',
  BASE_COUNTRY: 'Kenya',
  POSTAL_CODE: '80401',

  // Truthful Operating Arrangements
  LOCATION_LINE: 'Based in Diani, Kwale County. Working with businesses across Kenya. Client meetings by appointment.',
  CONTACT_EXPLANATION:
    'Work with Malack remotely from anywhere in Kenya. On-site visits and photography/video shoots are arranged according to location, travel requirements and availability. Meetings at Sizzlers, Diani Bazaar, can also be arranged in advance. Please contact us to agree a time and location.',

  // Backwards compatibility for existing imports
  HQ_CITY: 'Diani Beach',
  HQ_REGION: 'Kwale County',
  HQ_COUNTRY: 'Kenya',
  HQ_POSTAL_CODE: '80401',
} as const;

export type SiteConfig = typeof SITE_CONFIG;
