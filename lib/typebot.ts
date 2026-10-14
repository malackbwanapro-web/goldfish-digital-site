/**
 * Typebot Conversational Automation Configuration & Invariants
 * Clean Code: Centralized configuration for the Goldfish Marketing conversational assistant.
 */

export const TYPEBOT_CONFIG = {
  // Public Bot Identifier (Configurable via environment variable or default)
  BOT_ID: process.env.NEXT_PUBLIC_TYPEBOT_ID || 'goldfish-growth-concierge',

  // API Host (Defaults to Typebot Cloud viewer, or local self-hosted instance e.g. http://localhost:8081)
  API_HOST: process.env.NEXT_PUBLIC_TYPEBOT_API_HOST || 'https://viewer.typebot.io',

  // CDN script bundle URL for zero-dependency native Web Components
  CDN_URL: 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js',

  // Brand Design Tokens
  THEME: {
    button: {
      backgroundColor: '#D4A017', // Goldfish accent gold
      iconColor: '#0D0D0D',
    },
    previewMessage: {
      backgroundColor: '#141414',
      textColor: '#FFFFFF',
      closeButtonBackgroundColor: '#262626',
      closeButtonIconColor: '#D4A017',
    },
  },

  // Proactive Preview Message Configuration
  PREVIEW: {
    message: '👋 Jambo! Planning a luxury villa, dining, or business website? Tap here to get a tailored estimate in 60s.',
    autoShowDelay: 5000,
  },

  // Interactive Estimator Archetypes for instant offline/direct qualification
  ESTIMATOR_INDUSTRIES: [
    {
      id: 'hospitality',
      label: '🏨 Luxury Villa, Resort or Cottages',
      subtitle: 'Beachfront villas, holiday cottages & boutique resorts',
      features: [
        'Direct Booking FinTech (PesaPal / M-Pesa / Card)',
        'Beds24 Two-Way Calendar Sync (0% collisions)',
        'In-Villa PWA Digital Concierge',
        '4K Drone & Master Video Shoot (90-day media)',
        'Enterprise Next.js 14 PMS CRM',
      ],
    },
    {
      id: 'dining',
      label: '🍽️ Restaurant, Pub or Nightlife Venue',
      subtitle: 'Steakhouses, beach bars, bistros & late-night lounges',
      features: [
        'WhatsApp Table Reservation Engine (1–10 seats)',
        'Real-Time Operating Hours Engine (9 AM–3 AM sync)',
        'Sub-Second Instant-Search Digital Menu',
        'In-Venue 1-Click Google Review QR Accelerator',
        'Weekly Signature Event Video Reels (Salsa/Karaoke)',
      ],
    },
    {
      id: 'safari',
      label: '🦁 Safari Lodge or Coastal Tour Operator',
      subtitle: 'Game drives, diving schools & coastal excursions',
      features: [
        'Interactive Tour & Excursion Booking Engine',
        'Seasonal Rate Matrix & Itinerary Architect',
        'Multilingual SEO (English, German, French, Italian)',
        'Inquiry-to-WhatsApp Instant Confirmation',
        'Google Local Pack & Map Dominance',
      ],
    },
    {
      id: 'sme',
      label: '🏢 High-Growth SME or E-Commerce',
      subtitle: 'Professional services, healthcare & retail brands',
      features: [
        'Sub-Second Next.js Responsive Web Platform',
        '24/7 Conversational AI Lead Qualifier',
        'Meta & Google Ads Conversion Tracking (GA4)',
        'Automated Invoice & WhatsApp Notification Pipeline',
        'Generative Engine Optimization (ChatGPT / Gemini)',
      ],
    },
  ],
} as const;
