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
      'High-performance web applications, bespoke user experiences, and technical setups built for conversion speed.',
  },
  {
    name: 'Advanced Visibility Engineering',
    slug: 'advanced-visibility-engineering',
    description:
      'Generative engine optimization (GEO), authority architecture, and SEO frameworks designed for modern discoverability.',
  },
  {
    name: 'Brand Identity & Content Creation',
    slug: 'brand-identity-content-creation',
    description:
      'Premium visual identity systems, authority content campaigns, and custom high-fidelity media production.',
  },
  {
    name: 'Digital Presence & Paid Growth',
    slug: 'digital-presence-paid-growth',
    description:
      'Predictable paid media strategies, funnel optimization, and precision-targeted campaigns that scale ROI.',
  },
  {
    name: 'AI Automation for SMEs',
    slug: 'ai-automation-sme',
    description:
      'Operational automation frameworks, custom AI agents, and WhatsApp lead-handling integrations.',
  },
  {
    name: 'Strategic Analytics & Audits',
    slug: 'strategic-analytics-audits',
    description:
      'Advanced event taxonomy tracking, performance auditing, and decision-ready data infrastructure.',
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
    tagLabel: 'E-COMMERCE / SYSTEMS ENGINEERING',
    title: 'Replatforming a Global Retailer: Eradicating Core Web Vital Debt to Scale Conversions',
    description:
      'A complete architectural rebuild of a legacy monolith web store into a highly optimized Headless Next.js ecosystem. By rewriting the CSS layout, lazy-loading heavy media, and restructuring the API caching layer, we cut page loading times by 74%, resulting in an immediate boost in organic checkout conversion rates.',
    isHero: true,
    metrics: [
      { value: '-74% LCP', label: 'Largest Contentful Paint Reduction' },
      { value: '3.4x', label: 'Conversion Rate Multiplier' },
      { value: '£280K', label: 'Annual Infrastructure Costs Recovered' },
    ],
  },
  {
    slug: 'b2b-saas-onboarding-rebuild',
    category: 'Smart Web & App Ecosystems',
    categorySlug: 'smart-web-app-ecosystems',
    tagLabel: 'SaaS / USER EXPERIENCE DESIGN',
    title: 'Redesigning the SaaS Onboarding Flow: Eliminating Drop-offs in a Complex Registration Funnel',
    description:
      'We reconstructed the multi-step user ingestion funnel for a B2B project management platform, simplifying input validation, building persistent state loaders, and smoothing UI transition delays to improve registration velocity.',
    isHero: false,
    metrics: [
      { value: '+44%', label: 'Trial-to-Paid Conversion Lift' },
      { value: '-12m', label: 'Average Account Setup Time' },
      { value: '98%', label: 'Ingestion Pipeline Data Sync Rate' },
    ],
  },

  // ───────────────────────────────────────────────
  // Advanced Visibility Engineering
  // ───────────────────────────────────────────────
  {
    slug: 'ai-search-citation-rebuild',
    category: 'Advanced Visibility Engineering',
    categorySlug: 'advanced-visibility-engineering',
    tagLabel: 'GEO / GENERATIVE ENGINE SEARCH',
    title: 'Generative Engine Optimization (GEO): Securing Brand Citations in ChatGPT & Gemini Answers',
    description:
      'Our team engineered a structured data and schema footprint mapping the client\'s technical intellectual property directly to the entity nodes referenced by large language models. This system ensured the brand became the primary cited source for all related high-intent industry queries.',
    isHero: true,
    metrics: [
      { value: '+340%', label: 'Increase in AI-Generated Citations' },
      { value: '12.8K', label: 'High-Intent Monthly Organic Visits' },
      { value: '4.2x', label: 'Pipeline Growth from AI Referrals' },
    ],
  },
  {
    slug: 'multi-location-service-entity-seo',
    category: 'Advanced Visibility Engineering',
    categorySlug: 'advanced-visibility-engineering',
    tagLabel: 'SEO / ENTITY AUTHORITY SYSTEMS',
    title: 'Local Authority Blueprint: Dominating Search Results for a Multi-Tier Service Group',
    description:
      'A structural SEO sweep mapping local offices to corresponding Wikidata entries, deploying localized FAQ schema, and cleaning up crawl budget paths to capture and convert regional search traffic.',
    isHero: false,
    metrics: [
      { value: 'Top 3', label: 'Maps Pack Entry Across All Districts' },
      { value: '+180%', label: 'Organic Phone Call Actions Generated' },
      { value: '0.0%', label: 'Crawl Errors Detected Post-Audit' },
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
    title: 'NexaFlow Rebrand: Designing a Premium Identity System to Unlock Venture Capital Interest',
    description:
      'We redesigned the entire brand presence of a scaling logistics provider, crafting a modern logo, HSL-based color tokens, and custom UI design components. This visual repositioning projected institutional stability, helping the client successfully secure their Series A round within two weeks of launch.',
    isHero: true,
    metrics: [
      { value: '3.0x', label: 'Series A Funding Goal Achieved' },
      { value: '+120%', label: 'Brand Recipient Awareness Score' },
      { value: '+300%', label: 'Lead Ingestion Rate Post-Redesign' },
    ],
  },
  {
    slug: 'authority-content-velocity-campaign',
    category: 'Brand Identity & Content Creation',
    categorySlug: 'brand-identity-content-creation',
    tagLabel: 'CONTENT / AUTHORITY WRITING',
    title: 'Quality Over Volume: Deploying an Authority Content Engine for Enterprise Cybersecurity',
    description:
      'Instead of high-volume generic posts, we crafted four strategic, data-heavy research briefings that solved pressing technical compliance problems for C-level operators, positioning the brand as a top industry authority.',
    isHero: false,
    metrics: [
      { value: '+80%', label: 'Increase in High-Quality Backlinks' },
      { value: '4.2M', label: 'Organic Impressions Reached' },
      { value: '100%', label: 'Original Content Verification Score' },
    ],
  },

  // ───────────────────────────────────────────────
  // Digital Presence & Paid Growth
  // ───────────────────────────────────────────────
  {
    slug: 'pmax-migration-roas-recovery',
    category: 'Digital Presence & Paid Growth',
    categorySlug: 'digital-presence-paid-growth-management',
    tagLabel: 'PAID MEDIA / PPC OPTIMIZATION',
    title: 'Google Ads Rescue: Rebuilding Campaign Architecture After a Failed PMax Migration',
    description:
      'After an automated Google Ads migration led to cannibalized brand searches and a massive drop in return on ad spend, we implemented negative keyword matrices and custom audience parameters to recover and scale campaign profitability.',
    isHero: true,
    metrics: [
      { value: '3.8x', label: 'ROAS Performance Recovered' },
      { value: '-40%', label: 'Cost Per Conversion Reduced' },
      { value: '+120%', label: 'Average Cart Value Improvement' },
    ],
  },
  {
    slug: 'linkedin-b2b-account-ingestion',
    category: 'Digital Presence & Paid Growth',
    categorySlug: 'digital-presence-paid-growth-management',
    tagLabel: 'B2B / LINKEDIN LEAD GENERATION',
    title: 'B2B Sales Pipeline: Reaching Enterprise Technology Buyers via Authority Outreach',
    description:
      'We built a personalized B2B outreach pipeline focused on sharing high-value technical documentation with verified decision-makers, bypassing standard cold pitches to book meetings with qualified leads.',
    isHero: false,
    metrics: [
      { value: '18.4%', label: 'Outreach Conversation Response Rate' },
      { value: '42', label: 'Enterprise Demos Booked in 30 Days' },
      { value: '-30%', label: 'Customer Acquisition Cost Shift' },
    ],
  },

  // ───────────────────────────────────────────────
  // AI Automation for SMEs
  // ───────────────────────────────────────────────
  {
    slug: 'multi-agent-ops-whatsapp-scheduling',
    category: 'AI Automation for SMEs',
    categorySlug: 'ai-automation-sme',
    tagLabel: 'AI OPS / WORKFLOW AUTOMATION',
    title: 'Bespoke AI Ingestion: Replacing Manual Administrative Workloads with a WhatsApp Agent',
    description:
      'We developed and deployed a custom WhatsApp AI assistant for a high-volume service provider. Using structured database endpoints and LLM reasoning loops, the agent answers general client queries, checks calendar availability, schedules bookings, and processes invoices autonomously.',
    isHero: true,
    metrics: [
      { value: '-94%', label: 'Reduction in Manual Booking Admin' },
      { value: '240h', label: 'Operational Staff Hours Saved Monthly' },
      { value: '£8,400', label: 'Monthly Overhead Spending Eliminated' },
    ],
  },
  {
    slug: 'crm-pipeline-lead-sync-automation',
    category: 'AI Automation for SMEs',
    categorySlug: 'ai-automation-sme',
    tagLabel: 'AUTOMATION / DATABASE INTEGRATION',
    title: 'Autonomous Nurture Pipelines: Linking Web Capture Forms with Dynamic Follow-up Loops',
    description:
      'We set up autonomous multi-channel triggers that catch new incoming website leads, sync user details to CRM lists, evaluate client budgets, and issue custom follow-up materials within three seconds of submission.',
    isHero: false,
    metrics: [
      { value: '3 Sec', label: 'Average Lead Contact Response Speed' },
      { value: '+62%', label: 'Increase in Qualified Sales Demos' },
      { value: '100%', label: 'Data Accuracy across Integrated CRM' },
    ],
  },

  // ───────────────────────────────────────────────
  // Strategic Analytics & Audits
  // ───────────────────────────────────────────────
  {
    slug: 'ga4-funnel-measurement-audit',
    category: 'Strategic Analytics & Audits',
    categorySlug: 'strategic-analytics-audits',
    tagLabel: 'ANALYTICS / TECHNICAL DATA AUDITS',
    title: 'Attribution Audit: Fixing Broken E-Commerce Funnel Tracking & Data Discrepancies',
    description:
      'We audited the GA4 and Facebook Pixel integrations of a major platform, cleaning up duplicate trigger events, resolving tag firing order conflicts, and defining clear customer attribution models to guide future ad spending decisions.',
    isHero: true,
    metrics: [
      { value: '100%', label: 'Attribution Tracking Accuracy Achieved' },
      { value: '3 Core', label: 'Primary Metrics Isolated for Dashboard' },
      { value: '+40%', label: 'Increase in Decision-Making Velocity' },
    ],
  },
  {
    slug: 'pre-scale-infrastructure-vulnerability-audit',
    category: 'Strategic Analytics & Audits',
    categorySlug: 'strategic-analytics-audits',
    tagLabel: 'AUDITS / TECHNICAL ARCHITECTURE',
    title: 'Pre-Scale Infrastructure Assessment: Mapping Systems Redundancies for a 2x Growth Spurt',
    description:
      'An exhaustive server audit identifying load capacity thresholds, potential single points of failure, and security risks ahead of a major growth phase, ensuring stable operation under higher user volumes.',
    isHero: false,
    metrics: [
      { value: '7 Major', label: 'Technical Vulnerabilities Fixed' },
      { value: '100%', label: 'Server Stability Rating Maintained' },
      { value: '-50%', label: 'Unnecessary Hosting Costs Trimmed' },
    ],
  },
];

export function getProjectsByCategory(categorySlug: string): ProjectCaseStudy[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === categorySlug);
}

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}
