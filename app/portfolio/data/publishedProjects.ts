export interface PublishedProjectMetric {
  value: string;
  label: string;
}

export interface PublishedProject {
  slug: string;
  name: string;
  sector: string;
  url: string;
  tagline?: string;
  description: string;
  context: string;
  evidence: string;
  tags?: readonly string[];
  metrics?: readonly PublishedProjectMetric[];
  isFlagship?: boolean;
}

export const PUBLISHED_PROJECTS: readonly PublishedProject[] = [
  {
    slug: 'diani-ocean-view-residences',
    name: 'Diani Ocean View Residences',
    sector: 'Luxury Beachfront Hospitality',
    url: 'https://dianioceanviewresidences.com/',
    tagline: 'Autonomous Luxury Hospitality Flagship, Direct-Booking FinTech & 90-Day Social Engine',
    description:
      'Complete end-to-end digital transformation for a premier Kenyan coastal estate: full-funnel market research, 4K master media shoot, 90-day social media strategy, bespoke PesaPal v3 direct booking, Beds24 two-way channel sync, in-villa PWA digital concierge, GA4 telemetry, and multimodal AI tax compliance.',
    context:
      'Prior to our engagement, the property relied completely on third-party OTAs (Airbnb, Booking.com), losing 15%–20% per stay in commissions while managing calendars across manual spreadsheets. Goldfish Marketing engineered an autonomous hospitality ecosystem with full brand identity, verified omnichannel search/social footprint, 4K media vault, and sub-second direct booking.',
    evidence:
      'Live in production at dianioceanviewresidences.com with integrated PesaPal v3 M-Pesa/Card rails, bi-directional Beds24 channel sync, GA4 analytics (G-TQPRDGQKZN), Google Business Profile geo-embed, in-villa QR concierge PWA, and active social media presence.',
    tags: [
      'Market Research',
      '4K Master Shoot',
      '90-Day Social Engine',
      'Direct FinTech',
      'Beds24 2-Way Sync',
      'GA4 Analytics',
      'In-Villa PWA',
      'KRA eTIMS AI',
    ],
    metrics: [
      { value: '15%–20%', label: 'Net Margin Reclaimed vs OTAs' },
      { value: '0%', label: 'Calendar Collisions (Beds24 Sync)' },
      { value: '90 Days', label: 'Evergreen 4K Media Runway' },
      { value: '100%', label: 'KRA eTIMS Audit Readiness' },
    ],
    isFlagship: true,
  },
  {
    slug: 'sizzlers-steakhouse-diani',
    name: 'Sizzlers Steakhouse & Pub Diani',
    sector: 'Restaurant & Nightlife',
    url: 'https://www.sizzlerssteakhousediani.co.ke/',
    tagline: 'High-Converting Dining Flagship, WhatsApp Booking Engine & Local Google Review Flywheel',
    description:
      'Complete digital transformation for Diani Beach’s premier steakhouse and late-night venue: an ultra-fast web flagship, frictionless WhatsApp table booking engine, real-time operating hours sync (9 AM–3 AM), instant-search digital menu, in-venue Google Review acceleration, 90-day short-form video reels engine, and GA4 conversion telemetry.',
    context:
      'Prior to our engagement, Sizzlers relied on an outdated, slow legacy website that produced zero online reservations, had no conversion tracking, and left late-night diners guessing kitchen hours. Goldfish Marketing engineered an autonomous direct-booking ecosystem, eliminated third-party aggregator commissions, and created an in-venue review flywheel that propelled the venue to top search rankings across coastal Kenya.',
    evidence:
      'Live in production at sizzlerssteakhousediani.co.ke with GA4 telemetry (G-FM29F5EBMR). Captured 50+ direct table reservations via WhatsApp, 123 Google organic key events (33.1% conversion rate), 296 direct sessions, 204 total funnel events, and a verified 4.8/5-star rating across 200+ Google reviews.',
    tags: [
      'WhatsApp Booking Engine',
      'In-Venue Review Accelerator',
      '33.1% Organic Conv.',
      '50+ Direct Bookings',
      '90-Day Social Reels',
      'Instant Digital Menu',
      'GEO & Local Schema',
      'GA4 Telemetry',
    ],
    metrics: [
      { value: '50+', label: 'Confirmed Table Bookings' },
      { value: '33.1%', label: 'Google Organic Conv. Rate' },
      { value: '4.8 / 5', label: 'Google Rating (200+ Reviews)' },
      { value: 'Sub-1s', label: 'Mobile Menu Load Speed' },
    ],
    isFlagship: true,
  },
] as const;
