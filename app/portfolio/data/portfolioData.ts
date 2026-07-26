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
  isHero: boolean;
  metrics: ProjectMetric[];
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
      'High-speed web platforms, intuitive mobile user experiences, and sales conversion funnels built to generate revenue.',
  },
  {
    name: 'Advanced Visibility Engineering',
    slug: 'advanced-visibility-engineering',
    description:
      'Generative engine optimization (GEO), local search authority, and SEO strategies that get you found on Google and AI search tools.',
  },
  {
    name: 'Brand Identity & Content Creation',
    slug: 'brand-identity-content-creation',
    description:
      'Premium brand identity systems, video production, and authority content designed to elevate credibility and command higher pricing.',
  },
  {
    name: 'Digital Presence & Paid Growth',
    slug: 'digital-presence-paid-growth',
    description:
      'High-ROAS Meta & Google Ad campaigns and B2B lead generation funnels engineered to lower your customer acquisition cost.',
  },
  {
    name: 'AI Automation for SMEs',
    slug: 'ai-automation-sme',
    description:
      'Practical AI agents, 24/7 WhatsApp lead assistants, and CRM automation loops that save your team 20+ hours per week.',
  },
  {
    name: 'Strategic Analytics & Audits',
    slug: 'strategic-analytics-audits',
    description:
      'GA4 event tracking, conversion audit reports, and decision-ready dashboards that eliminate wasted marketing ad spend.',
  },
];

export const PORTFOLIO_PROJECTS: ProjectCaseStudy[] = [
  // ───────────────────────────────────────────────
  // Smart Web & App Ecosystems
  // ───────────────────────────────────────────────
  {
    slug: 'ecommerce-speed-replatforming',
    category: 'Smart Web & App Ecosystems',
    categorySlug: 'smart-web-app-ecosystems',
    tagLabel: 'E-COMMERCE / WEB ENGINEERING',
    title: 'High-Speed E-Commerce Rebuild: Cutting Load Times to Multiply Checkout Conversions',
    description:
      'A complete modern rebuild of an e-commerce store that was losing customers due to slow load speeds. By building a high-speed Next.js frontend, optimizing images, and streamlining the checkout flow, we cut load times by 74%, resulting in an immediate 3.4x surge in checkout sales.',
    isHero: true,
    metrics: [
      { value: '-74%', label: 'Page Load Delay Reduction' },
      { value: '3.4x', label: 'Checkout Conversion Lift' },
      { value: '£280K', label: 'New Annual Revenue Generated' },
    ],
  },
  {
    slug: 'b2b-saas-onboarding-rebuild',
    category: 'Smart Web & App Ecosystems',
    categorySlug: 'smart-web-app-ecosystems',
    tagLabel: 'WEB APP / UX DESIGN',
    title: 'Streamlining Onboarding: Eliminating Friction in a Business Software Registration Funnel',
    description:
      'We redesigned the signup and onboarding workflow for a growing software product, simplifying registration steps, eliminating unnecessary forms, and guiding new users seamlessly to their first completed setup.',
    isHero: false,
    metrics: [
      { value: '+44%', label: 'Trial-to-Paid Customer Conversion' },
      { value: '-12m', label: 'Average Account Setup Time Saved' },
      { value: '98%', label: 'Successful Account Completion Rate' },
    ],
  },

  // ───────────────────────────────────────────────
  // Advanced Visibility Engineering
  // ───────────────────────────────────────────────
  {
    slug: 'ai-search-citation-rebuild',
    category: 'Advanced Visibility Engineering',
    categorySlug: 'advanced-visibility-engineering',
    tagLabel: 'SEO / AI SEARCH OPTIMIZATION',
    title: 'Generative Engine Optimization (GEO): Getting Recommended in ChatGPT & Gemini Search Answers',
    description:
      'We structured the client’s brand data and website schema so AI search engines recognize them as the primary authority in their sector. As a result, the brand is now consistently cited in AI-generated answers for high-intent customer searches.',
    isHero: true,
    metrics: [
      { value: '+340%', label: 'Increase in AI Search Citations' },
      { value: '12.8K', label: 'High-Intent Monthly Organic Visitors' },
      { value: '4.2x', label: 'Qualified Inquiries from AI Search' },
    ],
  },
  {
    slug: 'multi-location-service-entity-seo',
    category: 'Advanced Visibility Engineering',
    categorySlug: 'advanced-visibility-engineering',
    tagLabel: 'LOCAL SEO / SEARCH AUTHORITY',
    title: 'Local Search Blueprint: Dominating Map Packs & Local Google Rankings for Regional Offices',
    description:
      'A structured local SEO strategy optimizing Google Business Profiles, location landing pages, and regional FAQ schemas to capture high-intent local customer phone calls and bookings.',
    isHero: false,
    metrics: [
      { value: 'Top 3', label: 'Google Maps Pack Placement' },
      { value: '+180%', label: 'Increase in Direct Inbound Calls' },
      { value: '100%', label: 'Local Search Visibility Score' },
    ],
  },

  // ───────────────────────────────────────────────
  // Brand Identity & Content Creation
  // ───────────────────────────────────────────────
  {
    slug: 'nexaflow-visual-identity-rebrand',
    category: 'Brand Identity & Content Creation',
    categorySlug: 'brand-identity-content-creation',
    tagLabel: 'BRANDING / VISUAL SYSTEM DESIGN',
    title: 'Brand Identity Redesign: Building a Premium Visual Presence to Boost Market Credibility',
    description:
      'We redesigned the visual brand identity for a fast-growing logistics provider — creating a modern logo system, refined typography, and high-impact website visuals that immediately communicate quality, authority, and professionalism.',
    isHero: true,
    metrics: [
      { value: '3.0x', label: 'Growth Target Exceeded Post-Launch' },
      { value: '+120%', label: 'Brand Recognition & Trust Score' },
      { value: '+300%', label: 'Inbound Customer Inquiry Rate' },
    ],
  },
  {
    slug: 'authority-content-velocity-campaign',
    category: 'Brand Identity & Content Creation',
    categorySlug: 'brand-identity-content-creation',
    tagLabel: 'CONTENT STRATEGY / AUTHORITY WRITING',
    title: 'Quality Over Quantity: Publishing 4 Strategic Guidebooks That Outperformed 40 Generic Articles',
    description:
      'Rather than churning out generic blog posts, we produced four in-depth technical guides that directly solved core customer problems — positioning the brand as the trusted market leader and driving qualified business leads.',
    isHero: false,
    metrics: [
      { value: '+80%', label: 'Increase in High-Authority Backlinks' },
      { value: '4.2M', label: 'Organic Impressions Generated' },
      { value: '100%', label: 'Client Lead Quality Rating' },
    ],
  },

  // ───────────────────────────────────────────────
  // Digital Presence & Paid Growth
  // ───────────────────────────────────────────────
  {
    slug: 'pmax-migration-roas-recovery',
    category: 'Digital Presence & Paid Growth',
    categorySlug: 'digital-presence-paid-growth-management',
    tagLabel: 'PAID ADS / PPC OPTIMIZATION',
    title: 'Google & Meta Ads Rescue: Cutting Cost-Per-Lead by 40% & Restoring Ad Profitability',
    description:
      'When automated ad campaigns started wasting budget on low-converting terms, we restructured campaign targeting, introduced negative keywords, and created high-converting ad creative to double profit returns.',
    isHero: true,
    metrics: [
      { value: '3.8x', label: 'Return on Ad Spend (ROAS) Achieved' },
      { value: '-40%', label: 'Cost Per Acquired Lead Reduced' },
      { value: '+120%', label: 'Average Order Value Lift' },
    ],
  },
  {
    slug: 'linkedin-b2b-account-ingestion',
    category: 'Digital Presence & Paid Growth',
    categorySlug: 'digital-presence-paid-growth-management',
    tagLabel: 'B2B / LINKEDIN LEAD GENERATION',
    title: 'B2B LinkedIn Pipeline: Connecting Business Owners directly with Verified Decision-Makers',
    description:
      'We built a genuine, value-first LinkedIn outreach framework that shares useful industry insights with target business executives, booking 42 qualified discovery calls in 30 days without spammy sales pitches.',
    isHero: false,
    metrics: [
      { value: '18.4%', label: 'Outreach Response Rate' },
      { value: '42', label: 'Qualified Sales Calls Booked (30 Days)' },
      { value: '-30%', label: 'Lower Cost Per Acquisition' },
    ],
  },

  // ───────────────────────────────────────────────
  // AI Automation for SMEs
  // ───────────────────────────────────────────────
  {
    slug: 'multi-agent-ops-whatsapp-scheduling',
    category: 'AI Automation for SMEs',
    categorySlug: 'ai-automation-sme',
    tagLabel: 'AI AUTOMATION / WHATSAPP ASSISTANT',
    title: '24/7 WhatsApp AI Assistant: Eliminating 240+ Hours of Booking Admin & Never Missing a Lead',
    description:
      'We built and deployed an intelligent WhatsApp AI assistant for a busy service business. The assistant answers customer questions, checks calendar availability, schedules appointments, and sends instant payment links automatically 24 hours a day.',
    isHero: true,
    metrics: [
      { value: '-94%', label: 'Manual Booking Admin Time Cut' },
      { value: '240h', label: 'Staff Hours Reclaimed Monthly' },
      { value: '£8,400', label: 'Monthly Operational Costs Saved' },
    ],
  },
  {
    slug: 'crm-pipeline-lead-sync-automation',
    category: 'AI Automation for SMEs',
    categorySlug: 'ai-automation-sme',
    tagLabel: 'AUTOMATION / CRM INTEGRATION',
    title: 'Instant Lead Follow-Up: Connecting Web Forms to Automated SMS & Email Sequences',
    description:
      'We automated the instant follow-up workflow for new website leads — sending personal confirmation messages within three seconds and automatically logging prospect details directly into the sales CRM.',
    isHero: false,
    metrics: [
      { value: '3 Sec', label: 'Average Response Time to New Leads' },
      { value: '+62%', label: 'Increase in Booked Sales Demos' },
      { value: '100%', label: 'Automated CRM Sync Accuracy' },
    ],
  },

  // ───────────────────────────────────────────────
  // Strategic Analytics & Audits
  // ───────────────────────────────────────────────
  {
    slug: 'ga4-funnel-measurement-audit',
    category: 'Strategic Analytics & Audits',
    categorySlug: 'strategic-analytics-audits',
    tagLabel: 'ANALYTICS / CONVERSION AUDIT',
    title: 'Marketing Data Audit: Fixing Broken Conversion Tracking to Invest Ad Budget with Confidence',
    description:
      'We audited the client’s Google Analytics and ad pixel tracking, fixing duplicate conversion fires, mapping true sales attribution, and building a clean, simple dashboard so the business owner knows exactly which ad campaigns produce profit.',
    isHero: true,
    metrics: [
      { value: '100%', label: 'Tracking Accuracy Achieved' },
      { value: '3 Core', label: 'Key Performance Dashboards Created' },
      { value: '+40%', label: 'Faster Marketing Decisions' },
    ],
  },
  {
    slug: 'pre-scale-infrastructure-vulnerability-audit',
    category: 'Strategic Analytics & Audits',
    categorySlug: 'strategic-analytics-audits',
    tagLabel: 'AUDITS / WEBSITE HEALTH CHECK',
    title: 'Pre-Growth Website Health Audit: Resolving Speed Bottlenecks Ahead of a Major Marketing Campaign',
    description:
      'A comprehensive technical checkup identifying hosting bottlenecks, database slowdowns, and security gaps to ensure the website stays rock-solid when traffic spikes during peak ad campaigns.',
    isHero: false,
    metrics: [
      { value: '7 Major', label: 'Speed & Security Fixes Applied' },
      { value: '100%', label: 'Website Uptime Rating Maintained' },
      { value: '-50%', label: 'Unnecessary Hosting Expenses Trimmed' },
    ],
  },
];

export function getProjectsByCategory(categorySlug: string): ProjectCaseStudy[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === categorySlug);
}

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}
