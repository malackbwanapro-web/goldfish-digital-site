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

  // Physical Location
  HQ_CITY: 'Diani Beach',
  HQ_ADDRESS: 'Diani Beach Road, Diani Bazaar',
  HQ_REGION: 'Kwale County',
  HQ_COUNTRY: 'Kenya',
  HQ_POSTAL_CODE: '80401',

  // Geolocation
  GEO_COORDINATES: {
    latitude: -4.2797,
    longitude: 39.5947,
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
