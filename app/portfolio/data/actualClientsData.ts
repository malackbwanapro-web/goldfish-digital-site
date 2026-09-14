export interface ActualClientProject {
  id: string;
  name: string;
  domain: string;
  liveUrl: string;
  sector: string;
  sectorSlug: 'safari-tourism' | 'hospitality-stays' | 'dining-nightlife' | 'health-fitness' | 'tech-infrastructure' | 'entertainment-activities';
  location: string;
  tagline: string;
  brandColors: {
    primary: string;
    bgTint: string;
    borderTint: string;
  };
  metrics: {
    value: string;
    label: string;
  };
  deliverables: string[];
  techStack: string[];
  caseStudySlug?: string;
  badgeLabel: string;
}

export interface ClientSectorFilter {
  name: string;
  slug: string;
  count: number;
}

export const ACTUAL_CLIENTS: ActualClientProject[] = [
  {
    id: 'all-kenya-safaris',
    name: 'All Kenya Safaris & Adventures',
    domain: 'allkenyasafaris.co.ke',
    liveUrl: 'https://www.allkenyasafaris.co.ke/',
    sector: 'Safari & Luxury Expeditions',
    sectorSlug: 'safari-tourism',
    location: 'Diani Beach & Nairobi • Kenya',
    tagline: 'Ultra-luxury bespoke wilderness expeditions, Maasai Mara fly-in safaris, and Mount Kenya helicopter charters.',
    brandColors: {
      primary: '#E57734',
      bgTint: 'rgba(229, 119, 52, 0.08)',
      borderTint: 'rgba(229, 119, 52, 0.25)',
    },
    metrics: {
      value: 'Top 3 Placements',
      label: 'Generative Engine AI Citation Share',
    },
    deliverables: [
      'Deep Generative Engine Optimization (GEO) JSON-LD Knowledge Graph for ChatGPT & Perplexity discovery',
      'Fly-in Safari booking architecture connecting Ukunda & Wilson Airstrips to secluded Mara conservancies',
      'High-prestige editorial aesthetic with verified KATO Bonded License #A419 entity authority',
    ],
    techStack: ['Schema.org GEO Graph', 'Next.js Dynamic Metadata', 'KATO Entity Model', 'WhatsApp Cloud API'],
    caseStudySlug: 'ai-search-citation-rebuild',
    badgeLabel: 'KATO Bonded License #A419',
  },
  {
    id: 'diani-ocean-view',
    name: 'Diani Ocean View Residences',
    domain: 'dianioceanviewresidences.com',
    liveUrl: 'https://dianioceanviewresidences.com/',
    sector: 'Bespoke Beachfront Hospitality',
    sectorSlug: 'hospitality-stays',
    location: 'Diani Beach • Kwale County, Kenya',
    tagline: 'Exclusive beachfront residential villas with Indian Ocean panoramas, 24/7 solar power, and direct guest checkout.',
    brandColors: {
      primary: '#D4AF37',
      bgTint: 'rgba(212, 175, 55, 0.08)',
      borderTint: 'rgba(212, 175, 55, 0.25)',
    },
    metrics: {
      value: '0.7s Edge Load',
      label: 'Direct Booking Engine Speed',
    },
    deliverables: [
      'Sub-second edge-rendered Next.js architecture cutting room availability latency from 5.4s to 0.7s',
      'Dual-currency (USD / KES) frictionless reservation checkout with M-Pesa STK push and Card handling',
      '24/7 solar backup & gated security trust signals eliminating OTA reliance and protecting room margins',
    ],
    techStack: ['Next.js 14 App Router', 'Tailwind CSS', 'M-Pesa Daraja STK', 'Edge CDN', 'Lucide UI'],
    caseStudySlug: 'ecommerce-speed-replatforming',
    badgeLabel: 'Direct Booking Engine',
  },
  {
    id: 'kimogains-fitness',
    name: 'Kimogains Fitness',
    domain: 'kimogainsfitness.co.ke',
    liveUrl: 'https://www.kimogainsfitness.co.ke/',
    sector: 'Health, Coaching & Wellness',
    sectorSlug: 'health-fitness',
    location: 'Diani Beach & Ukunda • Kenya',
    tagline: 'Elite 1-on-1 personal coaching with Coach Frank: private villa workouts, mobile gym sessions, and custom online programming.',
    brandColors: {
      primary: '#CCFF00',
      bgTint: 'rgba(204, 255, 0, 0.08)',
      borderTint: 'rgba(204, 255, 0, 0.25)',
    },
    metrics: {
      value: 'Sub-5min Intake',
      label: 'WhatsApp Fast Lead Conversion',
    },
    deliverables: [
      'Dark-mode high-energy athletic brand system utilizing Bebas Neue and Outfit typography with lime accents',
      'One-tap WhatsApp mobile intake funnel for instant booking of private coastal villa training sessions',
      'Geo-targeted local entity SEO for Kwale County fitness searches and seasonal tourist clientele',
    ],
    techStack: ['Mobile PWA Architecture', 'Tailwind CSS', 'WhatsApp Business API', 'LocalBusiness Schema'],
    caseStudySlug: 'crm-pipeline-lead-sync-automation',
    badgeLabel: '1-on-1 Villa Coaching',
  },
  {
    id: 'sizzlers-steakhouse',
    name: 'Sizzlers Steakhouse & Pub Diani',
    domain: 'sizzlerssteakhousediani.co.ke',
    liveUrl: 'https://www.sizzlerssteakhousediani.co.ke/',
    sector: 'Gastronomy, Dining & Nightlife',
    sectorSlug: 'dining-nightlife',
    location: 'Diani Beach • Kenya',
    tagline: "Diani Beach's #1 rated steakhouse and nightlife landmark: 28-day aged Angus beef, authentic Nyama Choma, and craft cocktails.",
    brandColors: {
      primary: '#FF6B35',
      bgTint: 'rgba(255, 107, 53, 0.08)',
      borderTint: 'rgba(255, 107, 53, 0.25)',
    },
    metrics: {
      value: '#1 Map Pack Rank',
      label: 'Diani Dining & Steakhouse SEO',
    },
    deliverables: [
      'Google Maps 3-Pack ranking dominance capturing tourists searching for dinner and nightlife along Diani Beach',
      'Interactive culinary menu and cocktail showcase with rich nutritional and ingredient highlights',
      'Weekly event promotion hub driving table bookings for Salsa Thursdays, Old School Fridays & Karaoke Saturdays',
    ],
    techStack: ['Local 3-Pack SEO', 'Restaurant Schema JSON-LD', 'Modern Responsive UI', 'WhatsApp Table Booking'],
    caseStudySlug: 'multi-location-service-entity-seo',
    badgeLabel: '#1 Rated Steakhouse',
  },
  {
    id: 'makememories-kenya',
    name: 'Make Memories Kenya',
    domain: 'makememorieskenya.co.ke',
    liveUrl: 'https://www.makememorieskenya.co.ke',
    sector: 'Safari & Coastal Excursions',
    sectorSlug: 'safari-tourism',
    location: 'Diani Beach • Tsavo • Mara • Wasini',
    tagline: 'Curated 4x4 Land Cruiser road safaris to Tsavo East, Maasai Mara fly-in packages, and Kisite dolphin dhow adventures.',
    brandColors: {
      primary: '#3B82F6',
      bgTint: 'rgba(59, 130, 246, 0.08)',
      borderTint: 'rgba(59, 130, 246, 0.25)',
    },
    metrics: {
      value: '4.8x Inbound Lift',
      label: 'Direct Excursion Inquiries',
    },
    deliverables: [
      'Categorized multi-tier expedition catalog spanning road safaris, air charters, and marine snorkeling',
      'Gold & Silver KPSGA certified guide authority profiles establishing instant credibility with international visitors',
      'Mobile-optimized booking flow with instant WhatsApp trip quotation and itinerary builder',
    ],
    techStack: ['React Framework', 'Tailwind CSS', 'TouristTrip Schema', 'WhatsApp Automation'],
    caseStudySlug: 'ai-search-citation-rebuild',
    badgeLabel: 'KPSGA Certified Guides',
  },
  {
    id: 'wild-african-experience',
    name: 'The Wild African Experience',
    domain: 'wildafricanexperience.com',
    liveUrl: 'https://www.wildafricanexperience.com/',
    sector: 'Safari & Luxury Expeditions',
    sectorSlug: 'safari-tourism',
    location: 'Diani Beach & East Africa',
    tagline: "Kenya's premier luxury bush-to-beach holiday company: private air charters, 5-star luxury lodges, and tailor-made journeys.",
    brandColors: {
      primary: '#C5A059',
      bgTint: 'rgba(197, 160, 89, 0.08)',
      borderTint: 'rgba(197, 160, 89, 0.25)',
    },
    metrics: {
      value: '3.0x Velocity',
      label: 'High-Ticket Inquiry Acceleration',
    },
    deliverables: [
      'High-status editorial brand design pairing Instrument Serif with Plus Jakarta Sans for luxury positioning',
      'Private air charter and luxury lodge showcases structured to command premium per-itinerary pricing',
      'Enterprise Google Analytics 4 tracking and Meta Conversion API setup for European inbound travelers',
    ],
    techStack: ['Next.js Architecture', 'Custom Entity Graph', 'GA4 Server Tracking', 'Tailwind CSS'],
    caseStudySlug: 'nexaflow-visual-identity-rebrand',
    badgeLabel: 'Luxury Bush-to-Beach',
  },
  {
    id: 'diani-networx',
    name: 'Networx Limited (Diani Networx)',
    domain: 'dianinetworx.co.ke',
    liveUrl: 'https://dianinetworx.co.ke/',
    sector: 'Enterprise Cloud & Connectivity',
    sectorSlug: 'tech-infrastructure',
    location: 'Legend Complex, Diani Beach • Kenya',
    tagline: "Premier fiber optic ISP and official global Microsoft 365 Cloud Partner powering homes and enterprises across Kenya.",
    brandColors: {
      primary: '#0078D4',
      bgTint: 'rgba(0, 120, 212, 0.08)',
      borderTint: 'rgba(0, 120, 212, 0.25)',
    },
    metrics: {
      value: 'Gigabit Speeds',
      label: 'Enterprise Uptime & Cloud Sync',
    },
    deliverables: [
      'Apple-minimalist clean tech design communicating enterprise reliability and 99.9% uptime SLA',
      'Interactive home & business fiber speed tier selector with instant coverage and serviceability check',
      'Official Microsoft 365 and Azure Cloud Partner B2B architecture page generating corporate retainers',
    ],
    techStack: ['Swiss Grid Design', 'LocalBusiness Schema', 'WhatsApp Enterprise Bot', 'Interactive Speed Tiers'],
    caseStudySlug: 'linkedin-b2b-account-ingestion',
    badgeLabel: 'Microsoft Cloud Partner',
  },
  {
    id: 'diani-splash-kids',
    name: 'Diani Splash Kids',
    domain: 'diani-splash-kids.com',
    liveUrl: 'https://diani-splash-kids.com/',
    sector: 'Family Entertainment & Attractions',
    sectorSlug: 'entertainment-activities',
    location: 'Galu Beach, Diani Beach Road • Kenya',
    tagline: "The ultimate water paradise for kids ages 3-15 in Diani Beach: water slides, splash pads, bouncy castles, and Splash Kitchen & Bar.",
    brandColors: {
      primary: '#06B6D4',
      bgTint: 'rgba(6, 182, 212, 0.08)',
      borderTint: 'rgba(6, 182, 212, 0.25)',
    },
    metrics: {
      value: '50-65 Kids',
      label: 'Controlled Safe Daily Capacity',
    },
    deliverables: [
      'Vibrant, colorful family portal showcasing 5+ water slides, toddler paddling pools, and outdoor play zones',
      'Streamlined birthday party and school group reservation pipeline with instant phone/WhatsApp intake',
      'Integrated Splash Kitchen & Bar menu highlighting family meals, milkshakes, and cocktails for parents',
    ],
    techStack: ['Responsive Mobile Web', 'Local Entertainment Schema', 'Click-to-Call CTAs', 'Photo Showcase Engine'],
    caseStudySlug: 'crm-pipeline-lead-sync-automation',
    badgeLabel: 'Premier Water Park',
  },
  {
    id: 'adventures-xplore-diani',
    name: 'Adventures Xplore Diani',
    domain: 'adventures-xplore-diani.com',
    liveUrl: 'https://www.adventures-xplore-diani.com/',
    sector: 'Eco-Adventure & Quad Safaris',
    sectorSlug: 'entertainment-activities',
    location: 'Diani Beach Hinterlands & Shimba Hills',
    tagline: 'No Racing, Just Exploring: Safe, scenic, all-inclusive guided off-road quad and buggy safaris through coastal villages and hills.',
    brandColors: {
      primary: '#FF9F1C',
      bgTint: 'rgba(255, 159, 28, 0.08)',
      borderTint: 'rgba(255, 159, 28, 0.25)',
    },
    metrics: {
      value: '100% Scenic',
      label: 'Guided Safety & Village Trail Protocol',
    },
    deliverables: [
      'High-contrast adventure aesthetic featuring brand-mandated design tokens and animated trail visual elements',
      'Multi-tier excursion selector (Beginner Village Safari, Coconut Forest, Shimba Hinterland Expedition)',
      'Transparent safety, equipment, and multilingual guide booking funnel connected directly to WhatsApp',
    ],
    techStack: ['Custom Token System', 'Bebas Neue Display', 'WhatsApp Cloud Booking', 'TourOperator Schema'],
    caseStudySlug: 'ecommerce-speed-replatforming',
    badgeLabel: 'Quad & Buggy Safaris',
  },
];

export const CLIENT_SECTORS: ClientSectorFilter[] = [
  { name: 'All Client Platforms', slug: 'all', count: ACTUAL_CLIENTS.length },
  { name: 'Safari & Tourism', slug: 'safari-tourism', count: ACTUAL_CLIENTS.filter(c => c.sectorSlug === 'safari-tourism').length },
  { name: 'Luxury Hospitality', slug: 'hospitality-stays', count: ACTUAL_CLIENTS.filter(c => c.sectorSlug === 'hospitality-stays').length },
  { name: 'Dining & Nightlife', slug: 'dining-nightlife', count: ACTUAL_CLIENTS.filter(c => c.sectorSlug === 'dining-nightlife').length },
  { name: 'Health & Fitness', slug: 'health-fitness', count: ACTUAL_CLIENTS.filter(c => c.sectorSlug === 'health-fitness').length },
  { name: 'Enterprise & Cloud', slug: 'tech-infrastructure', count: ACTUAL_CLIENTS.filter(c => c.sectorSlug === 'tech-infrastructure').length },
  { name: 'Family & Attractions', slug: 'entertainment-activities', count: ACTUAL_CLIENTS.filter(c => c.sectorSlug === 'entertainment-activities').length },
];
