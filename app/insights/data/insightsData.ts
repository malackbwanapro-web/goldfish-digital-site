export interface InsightArticle {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  excerpt: string;
  readTime: string;
  isFeatured: boolean;
  tags: string[];
  coverImage?: string;
}

export interface InsightCategory {
  name: string;
  slug: string;
  description: string;
}

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  {
    name: 'Smart Web & App Ecosystems',
    slug: 'smart-web-app-ecosystems',
    description:
      'Architecture teardowns, conversion engineering, and the technical DNA of high-performance digital properties.',
  },
  {
    name: 'Advanced Visibility Engineering',
    slug: 'advanced-visibility-engineering',
    description:
      'AI search optimization, entity architecture, and the new rules of discoverability in a post-blue-link era.',
  },
  {
    name: 'Brand Identity & Content Creation',
    slug: 'brand-identity-content-creation',
    description:
      'Strategic identity systems, content authority frameworks, and the science of brand differentiation.',
  },
  {
    name: 'Digital Presence & Paid Growth',
    slug: 'digital-presence-paid-growth',
    description:
      'Paid media strategy, social architecture, and precision-targeted campaigns that compound ROI.',
  },
  {
    name: 'AI Automation for SMEs',
    slug: 'ai-automation-sme',
    description:
      'Operational automation playbooks, AI agent deployments, and the ROI of replacing manual workflows.',
  },
  {
    name: 'Strategic Analytics & Audits',
    slug: 'strategic-analytics-audits',
    description:
      'Data infrastructure design, performance auditing frameworks, and decision-ready analytics stacks.',
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  // ───────────────────────────────────────────────
  // Smart Web & App Ecosystems
  // ───────────────────────────────────────────────
  {
    slug: 'site-speed-killing-revenue',
    category: 'Smart Web & App Ecosystems',
    categorySlug: 'smart-web-app-ecosystems',
    title:
      "Your Website Loads in 6 Seconds — Here's Exactly How Much Revenue That's Costing You",
    excerpt:
      "Every additional second of load time beyond 2.5s destroys conversion rates by 12-20%. We dissect the technical anatomy of a slow site — bloated third-party scripts, unoptimized CLS, and server-side rendering failures — and map the exact engineering fixes that recovered £340K in annual revenue for one client.",
    readTime: '10 Min Read',
    isFeatured: true,
    tags: ['Core Web Vitals', 'Performance', 'Conversion Rate'],
    coverImage: '/images/services/web-conversion.png',
  },
  {
    slug: 'high-converting-landing-page-teardown',
    category: 'Smart Web & App Ecosystems',
    categorySlug: 'smart-web-app-ecosystems',
    title:
      'The Anatomy of a High-Converting Landing Page: Technical Teardown of a 340% ROI Rebuild',
    excerpt:
      "We strip a real client rebuild down to its skeleton — from the CTA hierarchy and scroll-depth heatmaps to the lazy-loaded asset pipeline — and show you exactly why the old page bled leads while the new one prints them.",
    readTime: '8 Min Read',
    isFeatured: false,
    tags: ['Landing Pages', 'CRO', 'UX Engineering'],
    coverImage: '/images/services/technical-seo.png',
  },

  // ───────────────────────────────────────────────
  // Advanced Visibility Engineering
  // ───────────────────────────────────────────────
  {
    slug: 'google-ai-overviews-killing-organic-traffic',
    category: 'Advanced Visibility Engineering',
    categorySlug: 'advanced-visibility-engineering',
    title:
      "Why Google's AI Overviews Are Killing Your Organic Traffic — And How to Get Cited Instead",
    excerpt:
      "AI Overviews now answer 40%+ of informational queries before a single click happens. If your content isn't structured to be the cited source inside those AI-generated panels, you're watching your traffic evaporate. This briefing documents the exact schema, entity, and content architecture required to become the answer.",
    readTime: '12 Min Read',
    isFeatured: true,
    tags: ['GEO', 'AI Overviews', 'Organic Traffic'],
    coverImage: '/images/services/geo-ai.png',
  },
  {
    slug: 'entity-seo-vs-keyword-seo',
    category: 'Advanced Visibility Engineering',
    categorySlug: 'advanced-visibility-engineering',
    title:
      "Entity SEO vs. Keyword SEO: The Technical Shift Most Agencies Haven't Made Yet",
    excerpt:
      "Google's Knowledge Graph doesn't rank keywords — it ranks entities. We break down how to engineer your brand's entity footprint across Wikidata, Schema.org, and structured data so that search engines understand what you are, not just what you write about.",
    readTime: '9 Min Read',
    isFeatured: false,
    tags: ['Entity SEO', 'Knowledge Graph', 'Schema'],
    coverImage: '/images/services/entity-graph.png',
  },

  // ───────────────────────────────────────────────
  // Brand Identity & Content Creation
  // ───────────────────────────────────────────────
  {
    slug: 'template-brand-identity-strategic-cost',
    category: 'Brand Identity & Content Creation',
    categorySlug: 'brand-identity-content-creation',
    title:
      "Your Brand Looks Like Everyone Else's — The Strategic Cost of Template-Based Identity",
    excerpt:
      "Canva templates and stock photography aren't branding — they're camouflage. This briefing quantifies the revenue impact of undifferentiated visual identity and maps the psychological triggers that make premium brand systems convert at 2-4x the rate of generic alternatives.",
    readTime: '7 Min Read',
    isFeatured: true,
    tags: ['Brand Strategy', 'Visual Identity', 'Differentiation'],
    coverImage: '/images/services/brand-identity.png',
  },
  {
    slug: 'content-velocity-vs-content-authority',
    category: 'Brand Identity & Content Creation',
    categorySlug: 'brand-identity-content-creation',
    title:
      'Content Velocity vs. Content Authority: Why Publishing More Is Making You Less Visible',
    excerpt:
      "Publishing 30 blog posts a month is not a content strategy — it's a dilution strategy. We analyse the authority signals that determine whether Google treats your content as noise or gospel, and why 4 strategic pieces outperform 40 generic ones every time.",
    readTime: '8 Min Read',
    isFeatured: false,
    tags: ['Content Strategy', 'Authority', 'SEO Content'],
    coverImage: '/images/services/content-strategy-production.png',
  },

  // ───────────────────────────────────────────────
  // Digital Presence & Paid Growth
  // ───────────────────────────────────────────────
  {
    slug: 'google-ads-ctr-performance-max-migration',
    category: 'Digital Presence & Paid Growth',
    categorySlug: 'digital-presence-paid-growth',
    title:
      "Your Google Ads CTR Dropped 40% After Performance Max — Here's What Actually Went Wrong",
    excerpt:
      "Performance Max campaigns promise AI-driven optimisation but deliver opaque reporting and cannibalised brand spend. We tear apart a real account migration, show where Google's automation failed, and document the hybrid manual-plus-AI strategy that recovered ROAS within 6 weeks.",
    readTime: '11 Min Read',
    isFeatured: true,
    tags: ['Google Ads', 'Performance Max', 'ROAS'],
    coverImage: '/images/services/paid-advertising-dashboard.png',
  },
  {
    slug: 'linkedin-lead-gen-b2b-connection-requests',
    category: 'Digital Presence & Paid Growth',
    categorySlug: 'digital-presence-paid-growth',
    title:
      "LinkedIn Lead Gen for B2B: Why Your Connection Requests Are Getting Ignored (And the Fix)",
    excerpt:
      "The average LinkedIn outreach sequence gets a 2% response rate because it reads like spam. We document the authority-first engagement framework that generates 15-22% acceptance rates and converts cold connections into booked discovery calls within 14 days.",
    readTime: '7 Min Read',
    isFeatured: false,
    tags: ['LinkedIn', 'B2B', 'Lead Generation'],
    coverImage: '/images/services/linkedin-b2b-lead-generation.png',
  },

  // ───────────────────────────────────────────────
  // AI Automation for SMEs
  // ───────────────────────────────────────────────
  {
    slug: 'whatsapp-ai-agent-replaced-admin-team',
    category: 'AI Automation for SMEs',
    categorySlug: 'ai-automation-sme',
    title:
      "We Replaced a 3-Person Admin Team with a WhatsApp AI Agent — Here's the ROI Breakdown",
    excerpt:
      "A service-based SME was spending £8,400/month on admin staff to handle enquiries, bookings, and follow-ups. We deployed a WhatsApp-native AI agent that handles 94% of inbound volume autonomously. This is the full cost, deployment, and results breakdown.",
    readTime: '13 Min Read',
    isFeatured: true,
    tags: ['WhatsApp AI', 'Automation ROI', 'SME Ops'],
    coverImage: '/images/services/whatsapp-ai-assistant.png',
  },
  {
    slug: 'sme-automation-playbook-5-workflows',
    category: 'AI Automation for SMEs',
    categorySlug: 'ai-automation-sme',
    title:
      'The SME Automation Playbook: 5 Workflows You Should Automate Before You Hire Anyone Else',
    excerpt:
      "Before you post another job ad, read this. Lead capture, invoice chasing, appointment scheduling, review requests, and onboarding sequences — these five workflows cost the average SME 60+ hours per month and can be fully automated for less than one employee's weekly wage.",
    readTime: '9 Min Read',
    isFeatured: false,
    tags: ['Workflow Automation', 'SME Growth', 'Cost Reduction'],
    coverImage: '/images/services/crm-integration.png',
  },

  // ───────────────────────────────────────────────
  // Strategic Analytics & Audits
  // ───────────────────────────────────────────────
  {
    slug: 'dashboard-47-metrics-zero-insights',
    category: 'Strategic Analytics & Audits',
    categorySlug: 'strategic-analytics-audits',
    title:
      'Your Dashboard Has 47 Metrics and Zero Insights — How to Build a Decision-Ready Data Stack',
    excerpt:
      "Vanity metrics are the comfort food of underperforming businesses. This briefing maps the exact analytics infrastructure — from GA4 event taxonomy to Looker Studio templating — that transforms raw data into boardroom-grade strategic intelligence.",
    readTime: '10 Min Read',
    isFeatured: true,
    tags: ['Analytics', 'Data Strategy', 'GA4'],
    coverImage: '/images/services/social-media-management.png',
  },
  {
    slug: 'pre-scale-audit-7-technical-red-flags',
    category: 'Strategic Analytics & Audits',
    categorySlug: 'strategic-analytics-audits',
    title:
      'The Pre-Scale Audit: 7 Technical Red Flags That Will Break Your Business at 2x Growth',
    excerpt:
      "Scaling a broken system doesn't create growth — it creates expensive chaos. We document the 7 infrastructure failure points we find in 90% of pre-scale audits: from misconfigured conversion tracking to single-point-of-failure hosting architectures.",
    readTime: '8 Min Read',
    isFeatured: false,
    tags: ['Audits', 'Scaling', 'Technical Debt'],
    coverImage: '/images/services/mobile-app.png',
  },
];

/** Get all articles for a specific category */
export function getArticlesByCategory(categorySlug: string): InsightArticle[] {
  return INSIGHT_ARTICLES.filter((a) => a.categorySlug === categorySlug);
}

/** Get a single article by slug */
export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return INSIGHT_ARTICLES.find((a) => a.slug === slug);
}

/** Get the category object by slug */
export function getCategoryBySlug(slug: string): InsightCategory | undefined {
  return INSIGHT_CATEGORIES.find((c) => c.slug === slug);
}
