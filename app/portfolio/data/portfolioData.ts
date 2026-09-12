export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectCaseStudy {
  slug: string;
  category: string;
  categorySlug: string;
  tagLabel: string;
  title: string;
  description: string;
  provenanceTag: string;
  objectiveSlug: 'revenue' | 'visibility' | 'automation' | 'branding' | 'efficiency';
  isHero: boolean;
  metrics: ProjectMetric[];
  bottleneck: string;
  solution: string;
  techStack: string[];
  keyActionableTakeaway: string;
  beforeAfterComparison?: {
    beforeMetric: string;
    beforeLabel: string;
    afterMetric: string;
    afterLabel: string;
    context: string;
  };
}

export interface PortfolioCategory {
  name: string;
  slug: string;
  description: string;
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    name: 'Smart Web & App Ecosystems',
    slug: 'smart-web-app-ecosystems',
    description:
      'Sub-second Next.js web platforms, intuitive booking engines, and conversion funnels engineered to convert traffic directly.',
  },
  {
    name: 'Advanced Visibility Engineering',
    slug: 'advanced-visibility-engineering',
    description:
      'Generative engine optimization (GEO), Google Maps pack dominance, and local search authority that get you cited in AI answers and search results.',
  },
  {
    name: 'Brand Identity & Content Creation',
    slug: 'brand-identity-content-creation',
    description:
      'Premium visual identity systems, authority whitepapers, and video storytelling designed to command premium pricing in competitive markets.',
  },
  {
    name: 'Digital Presence & Paid Growth',
    slug: 'digital-presence-paid-growth',
    description:
      'High-ROAS Meta & Google Ad campaigns and localized WhatsApp lead generation funnels engineered to reduce acquisition costs for regional SMEs.',
  },
  {
    name: 'AI Automation for SMEs',
    slug: 'ai-automation-sme',
    description:
      '24/7 WhatsApp AI reservation assistants, instant lead-response loops, and automated CRM pipelines that reclaim 20+ staff hours weekly.',
  },
  {
    name: 'Strategic Analytics & Audits',
    slug: 'strategic-analytics-audits',
    description:
      'Server-side GA4 tracking, conversion leak diagnostics, and KDPA 2019-compliant infrastructure audits that eliminate wasted ad spend.',
  },
];

export const BUSINESS_OBJECTIVES = [
  { slug: 'all', label: 'All Objectives' },
  { slug: 'revenue', label: 'Direct Bookings & Revenue' },
  { slug: 'visibility', label: 'Local Search & AI Citations' },
  { slug: 'automation', label: 'WhatsApp & AI Automation' },
  { slug: 'branding', label: 'Brand & Pricing Power' },
  { slug: 'efficiency', label: 'Analytics & Audited Efficiency' },
];

export const PORTFOLIO_PROJECTS: ProjectCaseStudy[] = [
  // ───────────────────────────────────────────────
  // Smart Web & App Ecosystems
  // ───────────────────────────────────────────────
  {
    slug: 'ecommerce-speed-replatforming',
    category: 'Smart Web & App Ecosystems',
    categorySlug: 'smart-web-app-ecosystems',
    tagLabel: 'HOSPITALITY / WEB ENGINEERING',
    provenanceTag: 'Diani Beach, Kenya • Boutique Luxury Resort',
    objectiveSlug: 'revenue',
    title: 'Direct Booking Engine Rebuild: Cutting Load Delay to 0.7s to Reclaim KES 3.2M in Direct Guest Bookings',
    description:
      'A complete modern rebuild of a coastal luxury resort platform suffering from a sluggish legacy CMS and 18% OTA commission leak. By deploying a headless Next.js architecture with edge-rendered room availability and an M-Pesa / Card checkout flow, direct reservations surged by 58%.',
    isHero: true,
    metrics: [
      { value: '-74%', label: 'Mobile Latency Reduction' },
      { value: '+58%', label: 'Direct Booking Lift' },
      { value: 'KES 3.2M', label: 'Direct Booking Revenue Protected' },
    ],
    bottleneck:
      'Mobile visitors on regional 3G/4G connections waited 5.4 seconds for room rates to load. Over 62% abandoned checkout to book on Booking.com, bleeding 18% in booking commissions per reservation.',
    solution:
      'Migrated to Next.js on edge infrastructure with real-time room availability caching, instant image optimization, and a frictionless 2-step direct checkout integrated with localized M-Pesa STK push and international card processing.',
    techStack: ['Next.js 14 App Router', 'Tailwind CSS', 'Vercel Edge Network', 'M-Pesa Daraja API', 'Stripe'],
    keyActionableTakeaway:
      'Every second of mobile latency costs boutique hospitality 20% in direct booking drop-off. Sub-second load speeds turn OTA browsers into direct guests without middleman fees.',
    beforeAfterComparison: {
      beforeMetric: '5.4s',
      beforeLabel: 'Initial Mobile Load Time',
      afterMetric: '0.7s',
      afterLabel: 'Edge-Rendered Speed',
      context: 'Measured on standard East African 4G networks across mobile devices.',
    },
  },
  {
    slug: 'b2b-saas-onboarding-rebuild',
    category: 'Smart Web & App Ecosystems',
    categorySlug: 'smart-web-app-ecosystems',
    tagLabel: 'B2B LOGISTICS / UX ARCHITECTURE',
    provenanceTag: 'Nairobi & Mombasa • Supply Chain Platform',
    objectiveSlug: 'revenue',
    title: 'SME Logistics Onboarding Engine: Eliminating Friction in Mombasa-to-Nairobi Fleet Dispatch',
    description:
      'We redesigned the carrier registration and dispatch onboarding workflow for an East African logistics platform, replacing complex desktop forms with mobile-first stepper intake, automated document OCR, and instant driver validation.',
    isHero: false,
    metrics: [
      { value: '+44%', label: 'Onboarding Completion Rate' },
      { value: '-18m', label: 'Dispatch Setup Time Saved' },
      { value: '99.4%', label: 'First-Week Platform Adoption' },
    ],
    bottleneck:
      'Independent fleet operators faced a 14-field registration barrier requiring desktop scanners, causing 55% of drivers to abandon registration and stick with informal broker calls.',
    solution:
      'Created a progressive mobile web app with instant camera document capture, phone-number OTP login, and automated WhatsApp status notifications upon vehicle verification.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js Microservices', 'WhatsApp Business API'],
    keyActionableTakeaway:
      'When building software for Kenyan operations, desktop assumptions fail. Designing touch-first for Android screens with instant phone authentication unlocks 90%+ adoption.',
    beforeAfterComparison: {
      beforeMetric: '28 min',
      beforeLabel: 'Average Manual Sign-up Time',
      afterMetric: '4 min',
      afterLabel: 'Automated Mobile Intake',
      context: 'Complete driver verification and fleet vehicle induction cycle.',
    },
  },

  // ───────────────────────────────────────────────
  // Advanced Visibility Engineering
  // ───────────────────────────────────────────────
  {
    slug: 'ai-search-citation-rebuild',
    category: 'Advanced Visibility Engineering',
    categorySlug: 'advanced-visibility-engineering',
    tagLabel: 'GEO / AI SEARCH OPTIMIZATION',
    provenanceTag: 'Kenya & Tanzania • Eco-Luxury Safari Operator',
    objectiveSlug: 'visibility',
    title: 'Generative Engine Optimization (GEO): Getting Recommended in ChatGPT & Perplexity Safari Inquiries',
    description:
      'We structured the safari operator’s digital footprint with comprehensive semantic entity markup, verified wildlife encounter itineraries, and authoritative citation graph data so AI search engines cite them as the authoritative choice for East African safari expeditions.',
    isHero: true,
    metrics: [
      { value: '+340%', label: 'AI Search Recommendation Lift' },
      { value: '14.2K', label: 'Monthly High-Intent Organic Visitors' },
      { value: '4.2x', label: 'Qualified Inquiry Volume' },
    ],
    bottleneck:
      'While legacy competitors spent heavily on standard Google Ads, international travelers asking ChatGPT and Perplexity for "best ethical luxury safari camp in Masai Mara" received zero mentions of this camp.',
    solution:
      'Engineered nested JSON-LD schema (TouristAttraction, Lodge, OfferCatalog), structured regional conservation data points, and secured digital citations across respected wildlife research publications.',
    techStack: ['Schema.org JSON-LD', 'Semantic Entity Graph', 'Next.js Dynamic Metadata', 'Google Search Console'],
    keyActionableTakeaway:
      'AI search engines synthesize structured data and consensus citations rather than traditional keyword density. Entities with verified knowledge graphs win the recommendation.',
    beforeAfterComparison: {
      beforeMetric: '0',
      beforeLabel: 'ChatGPT & Perplexity Mentions',
      afterMetric: 'Top 3',
      afterLabel: 'Featured in AI Safari Queries',
      context: 'Verified across 12 high-intent prompt clusters targeting East African luxury travel.',
    },
  },
  {
    slug: 'multi-location-service-entity-seo',
    category: 'Advanced Visibility Engineering',
    categorySlug: 'advanced-visibility-engineering',
    tagLabel: 'LOCAL SEO / SEARCH AUTHORITY',
    provenanceTag: 'Mombasa, Diani & Kilifi • Healthcare & Specialized Services',
    objectiveSlug: 'visibility',
    title: 'Regional Local Search Dominance: Capturing High-Intent Emergency & Clinic Calls Across 4 Branches',
    description:
      'A comprehensive local SEO overhaul optimizing Google Business Profiles, localized medical clinic landing pages, and regional emergency schema to capture patients searching for verified care along the Kenyan coast.',
    isHero: false,
    metrics: [
      { value: 'Top 3', label: 'Google Maps Pack Placement' },
      { value: '+180%', label: 'Increase in Direct Phone Calls' },
      { value: '100%', label: 'GBP Audit & Compliance Rating' },
    ],
    bottleneck:
      'Inconsistent clinic addresses, duplicate map pins, and unoptimized categories caused 70% of local searchers to call competing facilities even though this group had superior equipment and availability.',
    solution:
      'Consolidated Google Business Profiles, implemented precise geo-coordinate tagging, localized Swahili and English search terms, and established automated review acquisition workflows via WhatsApp.',
    techStack: ['Google Business Profile API', 'LocalBusiness Schema', 'CallRail Tracking', 'GeoSitemap'],
    keyActionableTakeaway:
      'Local map packs drive over 60% of immediate phone calls for service businesses. Consistent branch metadata and steady localized reviews outperform costly display ads.',
    beforeAfterComparison: {
      beforeMetric: '#14 Avg',
      beforeLabel: 'Map Rank for Urgent Terms',
      afterMetric: '#1 - #2',
      afterLabel: 'Map Pack Placement Across 4 Towns',
      context: 'Rankings verified on mobile GPS radius within 15km of each facility.',
    },
  },

  // ───────────────────────────────────────────────
  // Brand Identity & Content Creation
  // ───────────────────────────────────────────────
  {
    slug: 'nexaflow-visual-identity-rebrand',
    category: 'Brand Identity & Content Creation',
    categorySlug: 'brand-identity-content-creation',
    tagLabel: 'BRAND ARCHITECTURE / VISUAL SYSTEM',
    provenanceTag: 'Nairobi & Kenyan Coast • Commercial & Residential Property',
    objectiveSlug: 'branding',
    title: 'Brand System Redesign: Repositioning a Regional Property Developer to Command 35% Premium Pricing',
    description:
      'We redesigned the visual brand system and investor marketing collateral for an ambitious Kenyan property developer — establishing minimalist typographic discipline, cohesive property brochures, and a high-status digital experience that communicates trust to diaspora investors.',
    isHero: true,
    metrics: [
      { value: '+35%', label: 'Off-Plan Price Premium Achieved' },
      { value: '+120%', label: 'Diaspora Investor Inbound Growth' },
      { value: '3.0x', label: 'Sales Velocity Acceleration' },
    ],
    bottleneck:
      'The developer was building exceptional architectural villas but using generic marketing templates and fragmented social graphics, leading diaspora buyers to negotiate steep discounts.',
    solution:
      'Architected a Swiss-grid visual identity, developed bespoke 3D-informed editorial brochures, and built a curated digital project showcase highlighting construction milestones and title deed verification.',
    techStack: ['Figma Design System', 'Custom Typography Tokens', 'Next.js Showcase', 'Interactive Project Floorplans'],
    keyActionableTakeaway:
      'In high-ticket investments like real estate, visual quality directly dictates perceived risk. High-status design eliminates buyer hesitation and protects price premiums.',
    beforeAfterComparison: {
      beforeMetric: '8 Months',
      beforeLabel: 'Average Unit Close Cycle',
      afterMetric: '2.5 Months',
      afterLabel: 'Off-Plan Sellout Speed',
      context: 'Evaluated across phase one and phase two residential villa developments.',
    },
  },
  {
    slug: 'authority-content-velocity-campaign',
    category: 'Brand Identity & Content Creation',
    categorySlug: 'brand-identity-content-creation',
    tagLabel: 'AUTHORITY EDITORIAL / MARKET INTELLIGENCE',
    provenanceTag: 'Nairobi • Commercial Legal & Advisory SME',
    objectiveSlug: 'branding',
    title: 'Authority Content Framework: 4 Strategic Market Briefings That Drove KES 14M in Advisory Deals',
    description:
      'Rather than churning out generic AI blog posts, we researched and published four comprehensive regulatory briefs on Kenyan foreign investment compliance, Data Protection (KDPA 2019), and renewable energy incentives — securing prime corporate clients.',
    isHero: false,
    metrics: [
      { value: 'KES 14M', label: 'Attributed Deal Value' },
      { value: '82%', label: 'Corporate Executive Read Rate' },
      { value: '4 Strategic', label: 'Briefings Outperforming 50 Posts' },
    ],
    bottleneck:
      'The firm had spent months posting surface-level LinkedIn tips that attracted zero corporate retainers, failing to showcase their deep cross-border structuring expertise.',
    solution:
      'Conducted primary regulatory analysis, synthesized complex legal statutes into executive summaries with clear decision matrices, and distributed them directly to managing directors.',
    techStack: ['Editorial Research', 'PDF Executive Whitepapers', 'Substack Publication', 'C-Suite Direct Outreach'],
    keyActionableTakeaway:
      'One definitive, rigorously researched briefing that solves an executive’s regulatory headache will generate more commercial revenue than years of shallow social posts.',
    beforeAfterComparison: {
      beforeMetric: '0 Retainers',
      beforeLabel: 'Attributed to Digital Content',
      afterMetric: 'KES 14M',
      afterLabel: 'Signed Advisory Mandates',
      context: 'Directly sourced from executive readership of regulatory compliance briefings.',
    },
  },

  // ───────────────────────────────────────────────
  // Digital Presence & Paid Growth (FIXED SLUG)
  // ───────────────────────────────────────────────
  {
    slug: 'pmax-migration-roas-recovery',
    category: 'Digital Presence & Paid Growth',
    categorySlug: 'digital-presence-paid-growth',
    tagLabel: 'PAID PERFORMANCE / HIGH-ROAS FUNNELS',
    provenanceTag: 'Central Kenya & Rift • Clean Energy & Solar SME',
    objectiveSlug: 'revenue',
    title: 'Paid Ads Optimization: Cutting Cost-Per-Lead by 42% for Regional Solar & Off-Grid Systems',
    description:
      'When automated Google Performance Max campaigns began burning ad spend on low-intent inquiries, we rebuilt the account structure with localized intent terms, disciplined negative lists, and WhatsApp direct consultation click-to-chat ads.',
    isHero: true,
    metrics: [
      { value: '4.6x', label: 'Return on Ad Spend (ROAS)' },
      { value: '-42%', label: 'Cost Per Qualified Inquiry' },
      { value: '+85%', label: 'Installation Consultation Rate' },
    ],
    bottleneck:
      'Ad budget was being drained by broad search matches for "free solar training" and consumer DIY inquiries, yielding almost zero commercial agricultural installations.',
    solution:
      'Implemented exact negative keyword shields, structured ad copy addressing commercial kilowatt ROI, and sent high-intent mobile searchers straight into a 1-tap WhatsApp consultation with a solar engineer.',
    techStack: ['Google Ads API', 'Meta Conversion API (CAPI)', 'WhatsApp Click-to-Chat', 'GA4 Attribution'],
    keyActionableTakeaway:
      'In East African markets, routing paid ad clicks into a responsive WhatsApp consultation channel converts at triple the rate of conventional multi-step web forms.',
    beforeAfterComparison: {
      beforeMetric: 'KES 2,450',
      beforeLabel: 'Cost Per Unqualified Lead',
      afterMetric: 'KES 1,420',
      afterLabel: 'Cost Per Verified Commercial Lead',
      context: 'Verified against completed site assessments and solar installation quotes.',
    },
  },
  {
    slug: 'linkedin-b2b-account-ingestion',
    category: 'Digital Presence & Paid Growth',
    categorySlug: 'digital-presence-paid-growth',
    tagLabel: 'B2B PIPELINE / OUTREACH ARCHITECTURE',
    provenanceTag: 'Nairobi Corporate Hub • B2B SaaS & Tech SME',
    objectiveSlug: 'revenue',
    title: 'B2B Client Acquisition Engine: Securing 42 Enterprise Inquiries in 30 Days Without Cold Spam',
    description:
      'We engineered a peer-level LinkedIn outreach framework for an enterprise software provider, delivering tailored compliance assessments to financial controllers and operations leaders across East Africa.',
    isHero: false,
    metrics: [
      { value: '22.4%', label: 'Executive Response Rate' },
      { value: '42', label: 'Strategy Calls Booked (30 Days)' },
      { value: '-35%', label: 'Customer Acquisition Cost' },
    ],
    bottleneck:
      'The client was relying on broad trade show sponsorships costing KES 800,000 per event with unpredictable returns and lengthy sales lead times.',
    solution:
      'Built a targeted account list of 400 vetted enterprise leaders, shared actionable regulatory compliance checklists, and scheduled executive discovery calls without aggressive sales pitches.',
    techStack: ['LinkedIn Sales Navigator', 'Custom CRM Pipeline', 'Calendly Sync', 'Automated Email Validation'],
    keyActionableTakeaway:
      'Corporate executives respond to diagnostic value, not sales pitches. Giving away actionable diagnostic insight earns immediate trust with senior leadership.',
    beforeAfterComparison: {
      beforeMetric: '2.8%',
      beforeLabel: 'Cold Email Response Rate',
      afterMetric: '22.4%',
      afterLabel: 'Diagnostic Outreach Response',
      context: 'Evaluated across managing directors and finance heads in Kenya.',
    },
  },

  // ───────────────────────────────────────────────
  // AI Automation for SMEs
  // ───────────────────────────────────────────────
  {
    slug: 'multi-agent-ops-whatsapp-scheduling',
    category: 'AI Automation for SMEs',
    categorySlug: 'ai-automation-sme',
    tagLabel: 'AI AUTOMATION / WHATSAPP ASSISTANT',
    provenanceTag: 'Diani Beach, Kenya • Hospitality Management SME',
    objectiveSlug: 'automation',
    title: '24/7 WhatsApp AI Reservation Assistant: Automating KES 1.8M/Mo Bookings for Coastal Luxury Villa',
    description:
      'We designed and deployed an intelligent WhatsApp AI booking assistant connected directly to real-time property calendars and payment gateways. The assistant answers inquiries in English, French, and Swahili, provides instant quotes, and collects booking deposits 24 hours a day.',
    isHero: true,
    metrics: [
      { value: '-92%', label: 'Manual Booking Admin Time Cut' },
      { value: '240h', label: 'Staff Hours Reclaimed / Month' },
      { value: 'KES 1.8M', label: 'Monthly Reservations Handled' },
    ],
    bottleneck:
      'High-spending European and diaspora travelers messaged the villa outside Kenyan business hours. Delayed responses of 6 to 12 hours resulted in 40% booking abandonment to competing beachfront resorts.',
    solution:
      'Constructed a multi-lingual AI agent powered by Claude/GPT that understands nuanced guest requests (private chef, airport pickup, child beds), checks iCal reservation feeds, and sends instant payment links.',
    techStack: ['WhatsApp Cloud API', 'FastAPI Webhook Engine', 'OpenAI / Claude API', 'Google Calendar Sync', 'M-Pesa STK'],
    keyActionableTakeaway:
      'Speed to lead is everything in hospitality. Responding intelligently within 10 seconds captures bookings that would otherwise vanish during late-night time zone gaps.',
    beforeAfterComparison: {
      beforeMetric: '7.5 Hours',
      beforeLabel: 'Average Inquiry Response Delay',
      afterMetric: '12 Seconds',
      afterLabel: '24/7 AI Conversational Booking',
      context: 'Measured across inquiries arriving between 8 PM and 8 AM East Africa Time.',
    },
  },
  {
    slug: 'crm-pipeline-lead-sync-automation',
    category: 'AI Automation for SMEs',
    categorySlug: 'ai-automation-sme',
    tagLabel: 'AUTOMATION / CRM INTEGRATION',
    provenanceTag: 'Nairobi • Premier Residential Real Estate',
    objectiveSlug: 'automation',
    title: 'Instant Lead Follow-Up Engine: Sub-5-Second Inquiry Response for Nairobi Property Brokerage',
    description:
      'We automated the end-to-end follow-up workflow for a fast-moving property brokerage. Web inquiries instantly trigger personalized WhatsApp introductions, send relevant PDF floor plans, and alert the assigned agent with buyer qualification data.',
    isHero: false,
    metrics: [
      { value: '3.2s', label: 'Average Lead Contact Speed' },
      { value: '+68%', label: 'Increase in Scheduled Viewings' },
      { value: '100%', label: 'Automated CRM Sync Accuracy' },
    ],
    bottleneck:
      'Web inquiries from property portals sat in unread email inboxes for hours before being manually assigned to sales reps, leading to cold leads and frustrated buyers.',
    solution:
      'Constructed instant webhook connections between website lead forms, HubSpot CRM, and WhatsApp Business API, delivering instant brochures and booking viewing slots automatically.',
    techStack: ['Make.com / Zapier', 'HubSpot CRM', 'WhatsApp Cloud API', 'Webhooks / Node.js'],
    keyActionableTakeaway:
      'Buyers inquiring about property are at peak intent during the first 5 minutes. Instant automated delivery of floor plans secures viewing appointments before competitors even open the email.',
    beforeAfterComparison: {
      beforeMetric: '4.2 Hours',
      beforeLabel: 'Manual Agent Contact Time',
      afterMetric: '3.2 Seconds',
      afterLabel: 'Automated Instant Delivery',
      context: 'Measured from form submission to buyer receiving WhatsApp brochure.',
    },
  },

  // ───────────────────────────────────────────────
  // Strategic Analytics & Audits
  // ───────────────────────────────────────────────
  {
    slug: 'ga4-funnel-measurement-audit',
    category: 'Strategic Analytics & Audits',
    categorySlug: 'strategic-analytics-audits',
    tagLabel: 'ANALYTICS / REVENUE ATTRIBUTION',
    provenanceTag: 'Nairobi & Regional • E-Commerce & Retail SME',
    objectiveSlug: 'efficiency',
    title: 'Precision Analytics Audit: Uncovering KES 450K in Misallocated Monthly Ad Spend',
    description:
      'We conducted a deep audit of the client’s Google Analytics 4, Meta Pixel, and server-side tracking, identifying broken conversion events and duplicate transaction fires that were distorting marketing decisions.',
    isHero: true,
    metrics: [
      { value: '100%', label: 'Attribution Accuracy Restored' },
      { value: 'KES 450K', label: 'Wasted Monthly Spend Stopped' },
      { value: '+52%', label: 'Faster Executive Decisions' },
    ],
    bottleneck:
      'Browser privacy filters and broken tag triggers resulted in 45% of completed purchases not being attributed to ad sources, leading the team to cut profitable campaigns while funding underperforming ones.',
    solution:
      'Implemented server-side Google Tag Manager (sGTM) on custom subdomains, configured CAPI with first-party cookies, and built an executive Looker Studio dashboard detailing true ROAS by product SKU.',
    techStack: ['Server-Side GTM', 'Meta Conversions API', 'Google Analytics 4', 'Looker Studio', 'BigQuery'],
    keyActionableTakeaway:
      'Client-side tracking is broken by default on modern mobile browsers. Server-side measurement reveals true campaign profitability and eliminates wasteful budget decisions.',
    beforeAfterComparison: {
      beforeMetric: '45% Gap',
      beforeLabel: 'Unreported Purchases in GA4',
      afterMetric: '99.2%',
      afterLabel: 'Server-Verified Match Rate',
      context: 'Reconciled against bank and M-Pesa merchant statement transaction records.',
    },
  },
  {
    slug: 'pre-scale-infrastructure-vulnerability-audit',
    category: 'Strategic Analytics & Audits',
    categorySlug: 'strategic-analytics-audits',
    tagLabel: 'INFRASTRUCTURE / SPEED & SECURITY',
    provenanceTag: 'Nairobi • Regional Financial Services Provider',
    objectiveSlug: 'efficiency',
    title: 'Pre-Growth Infrastructure Health Audit: Hardening a Regional Platform for 10x Surge Volume',
    description:
      'A full technical stress test, security scan, and KDPA 2019 data compliance review ahead of a major nationwide marketing campaign, ensuring high stability, sub-second response times, and airtight data governance.',
    isHero: false,
    metrics: [
      { value: '99.99%', label: 'Uptime Maintained Through Campaign' },
      { value: '-65%', label: 'Database Response Latency' },
      { value: '0 Breaches', label: 'Airtight KDPA Compliance Rating' },
    ],
    bottleneck:
      'Unindexed database queries and unoptimized third-party scripts were causing 8-second page timeouts whenever concurrent users exceeded 200.',
    solution:
      'Optimized database indexing, replaced blocking JavaScript with asynchronous bundles, implemented Cloudflare Enterprise edge caching, and conducted a thorough data protection review.',
    techStack: ['Cloudflare Enterprise', 'PostgreSQL Query Analyzer', 'Next.js Dynamic Splitting', 'Lighthouse CI'],
    keyActionableTakeaway:
      'Never scale marketing spend on unhardened infrastructure. Fixing database query bottlenecks prior to ad spend guarantees maximum conversion efficiency under heavy load.',
    beforeAfterComparison: {
      beforeMetric: '8.2s',
      beforeLabel: 'Response Time Under 200 Users',
      afterMetric: '0.4s',
      afterLabel: 'Edge-Cached Response Under 2,000 Users',
      context: 'Validated during synthetic load testing simulating national peak traffic.',
    },
  },
];

export function getProjectsByCategory(categorySlug: string): ProjectCaseStudy[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === categorySlug);
}

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}
