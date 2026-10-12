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
    sector: 'Restaurant & Dining',
    url: 'https://www.sizzlerssteakhousediani.co.ke/',
    tagline: 'High-Visibility Coastal Dining Web Platform & Local Discovery',
    description:
      'A dedicated restaurant web platform and local discovery asset for Sizzlers at Diani Bazaar on the Kenyan south coast.',
    context:
      'A restaurant website gives prospective diners, tourists, and resident foodies a place to explore menus, confirm location and hours, and make enquiries or reservations directly.',
    evidence:
      'Project delivery confirmed by Goldfish Marketing founder Malack Bwana. Built with fast mobile loading and local Diani search presence.',
    tags: ['Restaurant Web Design', 'Local Discovery', 'Menu Architecture', 'Diani Bazaar'],
    metrics: [
      { value: 'Sub-1s', label: 'Mobile Menu Load' },
      { value: '100%', label: 'Diani Search Entity Discovery' },
    ],
    isFlagship: false,
  },
] as const;
