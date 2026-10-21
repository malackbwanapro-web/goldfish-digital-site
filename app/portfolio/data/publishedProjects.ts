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
  {
    slug: 'beakim-hospitality-group',
    name: 'Beakim Hospitality Group',
    sector: 'Multi-Property Hospitality & Enterprise PMS',
    url: 'https://www.beakimhospitalitygroup.co.ke/',
    tagline: 'Multi-Property Hospitality Web Platform, Direct FinTech & Next.js 14 Enterprise PMS',
    description:
      'Complete digital infrastructure for a premier 4-property coastal hospitality portfolio: unified luxury web flagship, 4 dedicated property microsites, inquiry-to-WhatsApp direct booking, Dongo Kundu Bypass SGR logistics guidance, >90% media payload reduction, and an enterprise Next.js 14 Property Management System with fail-closed encrypted storage and double-booking collision prevention.',
    context:
      'Beakim operates 65+ accommodation units across 4 distinct properties in Diani Beach and Ukunda. Prior to engagement, the properties lacked a central digital umbrella, relied on manual spreadsheets vulnerable to calendar collisions, and suffered from 50MB+ uncompressed raw media. Goldfish Marketing engineered a unified booking engine, cut media payload weights by over 90%, and built an enterprise-grade 4-role PMS CRM.',
    evidence:
      'Delivered full architecture comprising public flagship hub, 4 dedicated microsites (Darad, Diani Darling, Tower Cottages, Beakim Apartments), dynamic pricing engine, inquiry-to-WhatsApp funnel, PesaPal payment gateway rails, and an enterprise Next.js 14 PMS featuring 4-tier RBAC, AES-256-CBC fail-closed encrypted storage, and automated regression verification.',
    tags: [
      '4 Unified Properties',
      'Next.js 14 Enterprise PMS',
      'AES-256 Encrypted Datastore',
      '4-Role RBAC',
      'WhatsApp Booking Engine',
      'PesaPal FinTech',
      'Dongo Kundu SGR SEO',
      'WebP Pipeline',
    ],
    metrics: [
      { value: '65+', label: 'Accommodation Units' },
      { value: '15%–20%', label: 'OTA Margin Reclaimed' },
      { value: '>90%', label: 'Media Payload Reduced' },
      { value: '0%', label: 'Double-Booking Collisions' },
    ],
    isFlagship: true,
  },
  {
    slug: 'holiday-illumination-las-vegas',
    name: 'Holiday Illumination LLC ("Highlights")',
    sector: 'Luxury Estate Contracting & Geo-Smart Field Dispatch CRM (Las Vegas, USA)',
    url: 'https://holiday-illumination.vercel.app',
    tagline: 'Next.js 16 Luxury Conversion Platform, 4-Quadrant LV Valley Dispatch CRM, Retell AI Voice Receptionist & 107-Test Suite',
    description:
      'For Las Vegas’s premier residential estate and commercial holiday lighting company (serving guard-gated communities in Summerlin and Henderson since 1998), Goldfish Marketing engineered a dual-platform Next.js 16 ecosystem: a luxury public conversion website and a private role-based Operations & Dispatch CRM. By replacing legacy static pages and manual scheduling with a ZIP-code quadrant routing engine, a Retell AI Voice Receptionist desk, 2-person bank deposit custody verification, and automated crew capacity locks, we eliminated 50-mile cross-valley driving bottlenecks and unified every touchpoint from initial estate walkthrough to January climate-vault storage.',
    context:
      'Operating from a permanent headquarters at 3030 Westwood Drive for 28+ seasons, Holiday Illumination LLC suffered from cross-valley routing bottlenecks between Summerlin and Henderson, peak-season October–December call overflow, dated digital perception, and fragmented field-to-office handshakes across estimators, warranty runners, and installation trucks.',
    evidence:
      'Engineered an interconnected Next.js 16 + React 19 + Supabase + Retell AI monorepo ecosystem comprising a Midnight Luxe 60-30-10 public conversion web app (interactive Day/Night slider, Haute Halloween spotlight, 20-question UHNW/Commercial persona FAQ, Geo-Smart 3-step intake wizard, Weibull hesitation concierge) and a private zero-indexed 5-role Operations & Dispatch CRM verified by 107 zero-dependency automated tests. Official domain cutover to www.holidayillumination.com scheduled upon registrar handoff.',
    tags: [
      'Next.js 16 & React 19',
      'Geo-Smart ZIP Routing',
      '5-Role Operations CRM',
      'Retell AI Receptionist',
      'Day/Night Estate Slider',
      '2-Person Bank Custody',
      'Weibull UX Telemetry',
      '107 Automated Tests',
    ],
    metrics: [
      { value: '4 Quadrants', label: 'Automated LV Valley ZIP Clustering' },
      { value: '5 Role Consoles', label: 'Custom Dark-Mode RBAC CRM Workspaces' },
      { value: '24/7 AI Voice', label: 'Retell AI Call Triage & Overflow' },
      { value: '107 Tests', label: 'Automated Code, Math & RBAC Suite' },
    ],
    isFlagship: true,
  },
] as const;
