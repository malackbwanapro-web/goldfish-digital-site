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
  /** Full HTML body content — if present, renders full article instead of "Coming Soon" */
  content?: string;
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
      'Sub-second mobile architecture, direct booking engines, M-Pesa checkout integrations, and conversion funnels built for the Kenyan economy.',
  },
  {
    name: 'Advanced Visibility Engineering',
    slug: 'advanced-visibility-engineering',
    description:
      'Generative engine optimization (GEO), Google Maps 3-pack dominance, and local search authority across Coastal Kenya and national markets.',
  },
  {
    name: 'Brand Identity & Content Creation',
    slug: 'brand-identity-content-creation',
    description:
      'High-status visual systems, authority editorial frameworks, and video storytelling designed to command premium pricing and investor trust.',
  },
  {
    name: 'Digital Presence & Paid Growth',
    slug: 'digital-presence-paid-growth',
    description:
      'Precision paid Meta & Google ad campaigns, WhatsApp click-to-chat funnels, and high-ROAS acquisition structures for regional SMEs.',
  },
  {
    name: 'AI Automation for SMEs',
    slug: 'ai-automation-sme',
    description:
      '24/7 conversational WhatsApp AI booking agents, automated lead triage, and CRM integrations that reclaim 20+ staff hours weekly.',
  },
  {
    name: 'Strategic Analytics & Audits',
    slug: 'strategic-analytics-audits',
    description:
      'Server-side GA4 tracking, KDPA 2019 compliance diagnostics, and revenue attribution models that stop wasted marketing spend.',
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  // ───────────────────────────────────────────────
  // 1. Smart Web & App Ecosystems
  // ───────────────────────────────────────────────
  {
    slug: 'web-design-hotels-diani-beach-kenya',
    category: 'Smart Web & App Ecosystems',
    categorySlug: 'smart-web-app-ecosystems',
    title:
      'Web Design for Hotels & Villas in Diani Beach: Reclaiming Direct Bookings from OTAs',
    excerpt:
      'Every confirmed booking on Booking.com costs a Diani property 15–25% in commission fees. Here is the exact mobile-first architecture, M-Pesa STK push integration, and multi-currency system that converts browsers into direct guests.',
    readTime: '9 Min Read',
    isFeatured: true,
    tags: ['Diani Beach', 'Hotel Web Design', 'M-Pesa STK', 'Direct Bookings'],
    coverImage: '/images/services/web-conversion.png',
  },
  {
    slug: 'web-design-company-mombasa-south-coast-kenya',
    category: 'Smart Web & App Ecosystems',
    categorySlug: 'smart-web-app-ecosystems',
    title:
      'Web Design for Mombasa & South Coast Businesses: What to Look for in a Local Agency',
    excerpt:
      'Why generic desktop templates fail on Safaricom 4G connections. What Coastal Kenyan businesses need: local CDN edge caching, sub-3-second mobile speed, and localized conversion architecture.',
    readTime: '8 Min Read',
    isFeatured: false,
    tags: ['Mombasa', 'South Coast', 'Mobile-First', 'Web Architecture'],
    coverImage: '/images/services/technical-seo.png',
  },
  {
    slug: 'website-design-cost-kenya-pricing-guide',
    category: 'Smart Web & App Ecosystems',
    categorySlug: 'smart-web-app-ecosystems',
    title: 'Website Design Prices at Goldfish Marketing: Scope and Costs in Kenya',
    excerpt: 'Plan a website with Goldfish Marketing: KShs 50,000–80,000 for typical business projects, smaller scopes and custom applications quoted to fit.',
    readTime: '11 Min Read',
    isFeatured: false,
    tags: ['Kenya Web Pricing', 'SME Budgets', 'M-Pesa Daraja', 'ROI'],
    coverImage: '/images/services/web-conversion.png',
  },

  // ───────────────────────────────────────────────
  // 2. Advanced Visibility Engineering
  // ───────────────────────────────────────────────
  {
    slug: 'rank-google-diani-beach-tourism',
    category: 'Advanced Visibility Engineering',
    categorySlug: 'advanced-visibility-engineering',
    title:
      'How to Rank on Google for Diani Beach Tourism & Safari Inquiries: A Local Authority Blueprint',
    excerpt:
      'Targeting international holiday planners 6 months ahead vs Nairobi weekenders booking on Friday afternoon. How to dominate Google Local 3-Packs and earn high-intent safari bookings.',
    readTime: '10 Min Read',
    isFeatured: true,
    tags: ['Diani SEO', 'Tourism Search', 'Google Maps 3-Pack', 'Hospitality'],
    coverImage: '/images/services/geo-ai.png',
  },
  {
    slug: 'seo-services-kenyan-coast-businesses',
    category: 'Advanced Visibility Engineering',
    categorySlug: 'advanced-visibility-engineering',
    title:
      'SEO for Kenyan Coast Businesses: Why Coastal Search Strategy Is Different from Nairobi',
    excerpt:
      'Bilingual search behavior, extreme seasonal tourism swings, and geo-targeted service entities across Mombasa, Kilifi, and Kwale. How to build search authority that lasts year-round.',
    readTime: '8 Min Read',
    tags: ['Coastal SEO', 'Mombasa', 'Entity Search', 'Local SEO'],
    isFeatured: false,
    coverImage: '/images/services/entity-graph.png',
  },
  {
    slug: 'how-to-rank-first-on-google-in-kenya',
    category: 'Advanced Visibility Engineering',
    categorySlug: 'advanced-visibility-engineering',
    title:
      'How to Rank First on Google in Kenya: The Technical Blueprint for Growing Businesses',
    excerpt:
      'Why traditional keyword stuffing fails in modern search engines. How to structure schema markup, secure authoritative East African citations, and optimize for AI search overviews.',
    readTime: '12 Min Read',
    isFeatured: false,
    tags: ['Kenya SEO', 'Search Rankings', 'Schema JSON-LD', 'AI Overviews'],
    coverImage: '/images/services/geo-ai.png',
  },

  // ───────────────────────────────────────────────
  // 3. Brand Identity & Content Creation
  // ───────────────────────────────────────────────
  {
    slug: 'brand-identity-content-diani-beach-businesses',
    category: 'Brand Identity & Content Creation',
    categorySlug: 'brand-identity-content-creation',
    title:
      'Brand Identity & Content for Diani Businesses: Balancing European Luxury & Kenyan Authenticity',
    excerpt:
      'How hospitality and lifestyle brands in Diani avoid generic Canva templates and build timeless visual identities that command 35% higher nightly rates and international guest trust.',
    readTime: '8 Min Read',
    isFeatured: true,
    tags: ['Brand Identity', 'Diani Beach', 'Visual Systems', 'Luxury Travel'],
    coverImage: '/images/services/brand-identity.png',
  },
  {
    slug: 'content-creation-tourism-businesses-kenya-coast',
    category: 'Brand Identity & Content Creation',
    categorySlug: 'brand-identity-content-creation',
    title:
      'Content Creation for Kenya Coast Tourism: The Two-Engine Authority Framework',
    excerpt:
      'Balancing inspirational drone video storytelling for international travelers with practical, frictionless WhatsApp-friendly guides for domestic Kenyan weekenders.',
    readTime: '9 Min Read',
    isFeatured: false,
    tags: ['Tourism Content', 'Video Production', 'Kenya Coast', 'Storytelling'],
    coverImage: '/images/services/content-strategy-production.png',
  },
  {
    slug: 'branding-agencies-kenya-what-to-look-for',
    category: 'Brand Identity & Content Creation',
    categorySlug: 'brand-identity-content-creation',
    title:
      'Branding Agencies in Kenya: What Growing SMEs Must Evaluate Before Hiring',
    excerpt:
      'The difference between paying KES 15,000 for a cosmetic logo file and investing in a cohesive brand identity system that positions your company for commercial contracts and pricing power.',
    readTime: '10 Min Read',
    isFeatured: false,
    tags: ['Branding Kenya', 'Agency Selection', 'Brand Equity', 'SME Growth'],
    coverImage: '/images/services/brand-identity.png',
  },

  // ───────────────────────────────────────────────
  // 4. Digital Presence & Paid Growth
  // ───────────────────────────────────────────────
  {
    slug: 'social-media-marketing-hotels-diani-kenya',
    category: 'Digital Presence & Paid Growth',
    categorySlug: 'digital-presence-paid-growth',
    title:
      'Social Media Marketing for Hotels & Villas in Diani: Turning Likes into Confirmed Direct Guests',
    excerpt:
      'Why pretty Instagram sunset photos don’t pay bills. The exact paid Meta ad funnels, WhatsApp click-to-chat targeting, and retargeting loops that generate real villa deposits.',
    readTime: '8 Min Read',
    isFeatured: true,
    tags: ['Social Media', 'Meta Ads', 'Diani Hotels', 'WhatsApp Funnel'],
    coverImage: '/images/services/performance-media.png',
  },
  {
    slug: 'social-media-management-mombasa-south-coast',
    category: 'Digital Presence & Paid Growth',
    categorySlug: 'digital-presence-paid-growth',
    title:
      'Social Media Management for Mombasa & South Coast: Why Most Retainers Disappoint & What Works',
    excerpt:
      'Moving beyond hollow vanity follower counts to revenue-producing social systems: high-intent paid social campaigns, lead generation funnels, and authentic coastal storytelling.',
    readTime: '8 Min Read',
    isFeatured: false,
    tags: ['Mombasa Social', 'Paid Social', 'ROAS', 'Lead Generation'],
    coverImage: '/images/services/performance-media.png',
  },
  {
    slug: 'social-media-management-packages-kenya-pricing',
    category: 'Digital Presence & Paid Growth',
    categorySlug: 'digital-presence-paid-growth',
    title:
      'Social Media Management Packages in Kenya (2025/2026): What Realistic SME Budgets Deliver',
    excerpt:
      'Transparent pricing breakdown of social media packages in Kenya from KES 25,000 to KES 120,000+. Deliverables, ad spend management, video content frequency, and expected ROI.',
    readTime: '9 Min Read',
    isFeatured: false,
    tags: ['Social Media Pricing', 'Kenya SME', 'Ad Spend', 'Retainers'],
    coverImage: '/images/services/performance-media.png',
  },

  // ───────────────────────────────────────────────
  // 5. AI Automation for SMEs
  // ───────────────────────────────────────────────
  {
    slug: 'whatsapp-automation-diani-beach-hotels',
    category: 'AI Automation for SMEs',
    categorySlug: 'ai-automation-sme',
    title:
      'WhatsApp Automation for Diani Beach Hotels: 24/7 Conversational AI That Books Rooms',
    excerpt:
      'How automated WhatsApp AI agents answer late-night European guest inquiries in 15 seconds, check room availability, send quotes, and trigger M-Pesa STK pushes while your desk sleeps.',
    readTime: '9 Min Read',
    isFeatured: true,
    tags: ['WhatsApp AI', 'Diani Hospitality', 'Booking Bot', '24/7 Automation'],
    coverImage: '/images/services/growth-ai.png',
  },
  {
    slug: 'automate-customer-service-coastal-kenya',
    category: 'AI Automation for SMEs',
    categorySlug: 'ai-automation-sme',
    title:
      'Automating Customer Service for Coastal Kenya SMEs: Reclaiming 20+ Hours of Weekly Admin',
    excerpt:
      'Eliminating manual response delays across WhatsApp, Instagram DM, and email. Integrating instant FAQ resolution, automated booking confirmations, and CRM lead logging.',
    readTime: '8 Min Read',
    isFeatured: false,
    tags: ['Customer Automation', 'Coastal Kenya', 'SME Operations', 'Time Savings'],
    coverImage: '/images/services/growth-ai.png',
  },
  {
    slug: 'whatsapp-ai-chatbot-pricing-kenya',
    category: 'AI Automation for SMEs',
    categorySlug: 'ai-automation-sme',
    title:
      'WhatsApp AI Chatbots in Kenya: Setup Costs, Monthly Subscriptions & Measurable SME ROI',
    excerpt:
      'What does an intelligent WhatsApp AI assistant actually cost in Kenya? Meta Cloud API conversation fees, webhook engineering, CRM sync, and operational cost savings explained in KES.',
    readTime: '10 Min Read',
    isFeatured: false,
    tags: ['WhatsApp Chatbot Pricing', 'Kenya AI', 'Cloud API', 'SME ROI'],
    coverImage: '/images/services/growth-ai.png',
  },

  // ───────────────────────────────────────────────
  // 6. Strategic Analytics & Audits
  // ───────────────────────────────────────────────
  {
    slug: 'digital-marketing-audit-diani-beach',
    category: 'Strategic Analytics & Audits',
    categorySlug: 'strategic-analytics-audits',
    title:
      'The Diani Beach Digital Marketing Audit: 7 Red Flags That Leak Revenue Every Season',
    excerpt:
      'From unverified Google Business Profiles and missing M-Pesa STK options to slow mobile load speeds and OTA dependence. The 7 critical fixes that protect hotel and villa revenue.',
    readTime: '9 Min Read',
    isFeatured: true,
    tags: ['Digital Audit', 'Diani Beach', 'Revenue Protection', 'OTA Recovery'],
    coverImage: '/images/services/intelligence-audit.png',
  },
  {
    slug: 'digital-marketing-roi-tracking-mombasa-coast-kenya',
    category: 'Strategic Analytics & Audits',
    categorySlug: 'strategic-analytics-audits',
    title:
      'Digital Marketing ROI Tracking for Coastal Kenya: Solving the Two-Journey Attribution Problem',
    excerpt:
      'How to connect Google and Meta ad spend to actual bank deposits and M-Pesa merchant statements when customer inquiries move between web forms, phone calls, and WhatsApp chats.',
    readTime: '8 Min Read',
    isFeatured: false,
    tags: ['ROI Tracking', 'Mombasa', 'GA4 Attribution', 'M-Pesa Tracking'],
    coverImage: '/images/services/intelligence-audit.png',
  },
  {
    slug: 'digital-marketing-audit-small-businesses-kenya',
    category: 'Strategic Analytics & Audits',
    categorySlug: 'strategic-analytics-audits',
    title:
      'Digital Marketing Audit for Kenyan Small Businesses: Stopping Wasted Spend & Boosting ROI',
    excerpt:
      'Breaking the "Boost Post" habit. How to diagnose tracking errors, evaluate true customer acquisition cost (CAC), and establish KDPA 2019-compliant customer data systems.',
    readTime: '10 Min Read',
    isFeatured: false,
    tags: ['Small Business Audit', 'Kenya SME', 'KDPA 2019', 'Ad Spend Audit'],
    coverImage: '/images/services/intelligence-audit.png',
  },
];

export function getArticlesByCategory(categorySlug: string): InsightArticle[] {
  return INSIGHT_ARTICLES.filter((a) => a.categorySlug === categorySlug);
}

export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return INSIGHT_ARTICLES.find((a) => a.slug === slug);
}

export function getCategoryBySlug(slug: string): InsightCategory | undefined {
  return INSIGHT_CATEGORIES.find((c) => c.slug === slug);
}
