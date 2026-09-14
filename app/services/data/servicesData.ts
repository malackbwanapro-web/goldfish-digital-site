export interface ServiceCapabilityRow {
  title: string;
  deepDive: string;
  impact: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  titleH1: string;
  metaTitle: string;
  metaDescription: string;
  hookLine: string;
  description: string;
  capabilities: string[];
  capabilitiesBreakout: ServiceCapabilityRow[];
  techStack: string[];
  caseStudy: {
    eyebrow?: string;
    text: string;
    resultText?: string;
    metrics: string[];
  };
  faqs: ServiceFAQ[];
  footerCtaHeadline?: string;
  footerCtaSubtext?: string;
  footerCtaButton?: string;
  heroAuditCta?: string;
  geoSummary?: string;
  // Extended properties for premium layout personalization
  hookTitle?: string;
  hookText?: string;
  whoIsThisFor?: {
    title: string;
    description: string;
  }[];
  technicalSuperiority?: string;
  proofSection?: {
    title: string;
    subheading: string;
    points: {
      title: string;
      text: string;
    }[];
  };
}

export const servicesData: Record<string, ServiceDetail> = {
  "smart-web-app-ecosystems": {
    slug: "smart-web-app-ecosystems",
    title: "Smart Web & App Ecosystems",
    titleH1: "Engineered Web Systems Built for Measurable Commercial Return",
    metaTitle: "Smart Web & App Ecosystems | High-Performance Web Development Kenya",
    metaDescription: "We engineer lightning-fast Next.js web applications, high-converting booking engines, and robust digital systems for Kenyan SMEs and hospitality brands.",
    hookLine: "Your digital presence is either a high-velocity revenue engine or an expensive liability. There is no middle ground.",
    description: "If your business lacks a high-performance website, or if your current site is an underperforming digital brochure, you are losing qualified inquiries every day. In today’s competitive market, your digital ecosystem must be engineered as an active, high-yield revenue asset.",
    hookTitle: "The Real Cost of Fragmented Web Systems",
    hookText: "When your digital platform is slow, fragmented, or unoptimized for mobile checkout, commercial opportunities leak at every touchpoint. In a mobile-first market, customers expect instant page loads and seamless transactional flows. We engineer web infrastructure that eliminates technical friction and converts traffic into verified revenue.",
    whoIsThisFor: [
      {
        title: "The Offline Powerhouses",
        description: "You have an established brand and product, but your lack of a professional digital footprint is stalling your growth. We build fast, mobile-responsive ecosystems that turn offline reputation into online dominance."
      },
      {
        title: "The \"Under-Performing\" Sites",
        description: "You have traffic, but your conversion rate is non-existent. We diagnose the technical rot and re-engineer your funnels to stop the bleed and start the growth."
      },
      {
        title: "The Visionaries",
        description: "You need a bespoke, custom-coded solution—built by senior developers—that isn't reliant on bloated, slow-loading templates."
      }
    ],
    technicalSuperiority: "We don't use \"quick-fix\" builders. Our senior development team utilizes a custom-engineered stack (React, modern JavaScript, and lean CSS) to ensure your digital ecosystem is technically flawless. We prioritize core web vitals, indexable technical SEO architecture, and conversion-psychology-driven UI/UX. We don't just build websites; we build scalable machines designed to rank, capture, and convert.",
    proofSection: {
      title: "The Proof: By the Numbers",
      subheading: "We don't deal in fluff. We deal in measurable impact.",
      points: [
        {
          title: "Technical SEO Mastery",
          text: "By correcting structural technical SEO, we move your site from \"invisible\" to \"discoverable.\""
        },
        {
          title: "Conversion Engineering",
          text: "We have taken under-performing sites and increased conversion rates from 1% to 4% in just 90 days by auditing and repairing broken user funnels."
        }
      ]
    },
    capabilities: [
      "Conversion-Focused Web Architecture",
      "Mobile App Development (iOS & Android)",
      "CRM & API Integration Layer",
    ],
    capabilitiesBreakout: [
      {
        title: "Conversion-Focused Web Architecture",
        deepDive:
          "We design and engineer high-performance websites built around a single goal: turning visitors into customers. Every layout decision, content hierarchy, and interactive element is deliberate. We combine luxury visual aesthetics — generous white space, refined typography, premium motion — with a conversion architecture that guides users through a structured psychological journey from awareness to action.",
        impact:
          "Clients consistently report significant uplifts in lead-to-contact form conversion rates within the first 90 days of launch.",
      },
      {
        title: "Mobile App Development (iOS & Android)",
        deepDive:
          "We build native and cross-platform mobile applications that feel premium and perform flawlessly. Whether you need a client-facing app, an internal operations tool, or a customer loyalty platform, we engineer mobile products that are fast, intuitive, and deeply integrated with your business backend — CRM, inventory systems, and automation workflows included.",
        impact:
          "Extends your digital touchpoint to mobile-first audiences, increasing engagement and reducing friction in the customer journey.",
      },
      {
        title: "CRM & API Integration Layer",
        deepDive:
          "A beautiful website that doesn't talk to your business systems is a missed opportunity. We build the technical integration layer that connects your web ecosystem to your CRM (HubSpot, Salesforce, or custom), marketing automation tools, payment processors, and AI workflows — ensuring every form submission, purchase, or user action flows automatically into your operational stack.",
        impact:
          "Eliminates manual data entry and ensures every lead is captured, tagged, and actioned without human intervention.",
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "TailwindCSS",
      "Stripe",
    ],
    caseStudy: {
      eyebrow: "Client Highlight: The 300% Turnaround",
      text: "The Challenge: A legacy SME had a beautiful, high-traffic website that functioned as a decorative element rather than a revenue tool. They had near-zero conversion on qualified leads due to a fragmented, non-existent funnel structure.\n\nThe Solution: We tore down the conversion-killing architecture and rebuilt the funnel based on intent-driven data, implemented a rigorous technical SEO framework, and streamlined the user path.",
      resultText: "The Result: Within 3 months, we drove a 300% increase in conversion rates (1% to 4%), transforming their digital presence from a cost center into their #1 lead generation asset.",
      metrics: [
        "300% Increase in Conversion Rates",
        "1% to 4% Conversion Over 90 Days",
        "100% Turnaround of Lead Generation Asset",
      ],
    },
    faqs: [
      {
        question: "Do you build custom websites or use templates?",
        answer:
          "Everything we build is custom-engineered from the ground up. We don't use page builders or pre-made themes. Every element is purposefully designed to reflect your brand's identity and engineered to perform at the highest technical level.",
      },
      {
        question: "How long does a full web build typically take?",
        answer:
          "It depends on the scope of each project. Simple sites can be developed and delivered within 1-2 days. A standard marketing website with integrations can take 1–2 weeks from signed brief to launch. Complex web applications or platforms with custom functionality can take 4–8 weeks. We provide a precise timeline during the scoping phase.",
      },
      {
        question: "Can you integrate with our existing CRM and tools?",
        answer:
          "Yes. We build the integration layer that connects your website to your existing operational stack — whether that's HubSpot, Salesforce, Xero, a payment gateway, or a bespoke internal system. We don't require you to change your tools.",
      },
    ],
    footerCtaHeadline: "Your Path to Market Dominance",
    footerCtaSubtext:
      "You can continue to watch your competitors dominate your search landscape, or you can take control of your digital future.",
    footerCtaButton: "Book Your Free Strategy Consultation",
    heroAuditCta: "Request a Free Website Audit",
    geoSummary: "Advanced Web & App Ecosystems by Goldfish Marketing is an enterprise web architecture and mobile app engineering service built with Next.js, React, and native APIs. It delivers sub-second Core Web Vitals, conversion-focused user funnels, and integrated CRM data synchronization for high-growth businesses.",
  },

  "advanced-visibility-engineering": {
    slug: "advanced-visibility-engineering",
    title: "Advanced Visibility Engineering",
    titleH1: "Search Architecture & Generative Engine Optimization (GEO)",
    metaTitle: "Advanced Visibility Engineering | Technical SEO & AI Search Kenya",
    metaDescription: "We engineer structured entity graphs, schema architecture, and technical SEO so your brand is cited by Google AI, Perplexity, and high-intent buyers.",
    hookLine: "Search has evolved. Your visibility architecture must command both human searches and AI engine citations.",
    description: "Traditional keyword stuffing and generic directory links no longer move the needle. Search engines and Large Language Models (ChatGPT, Gemini, Perplexity) rely on structured knowledge graphs, entity relationships, and digital provenance to determine who gets cited. We engineer your brand as the definitive authority in your vertical.",
    hookTitle: "The High Cost of Organic Invisibility",
    hookText: "Most businesses assume a lack of leads is a traffic problem. In reality, it is an authority and entity recognition problem. When search engines cannot unambiguously verify your services, location, and credentials, your competitors capture the high-intent inquiries. We build the semantic schema architecture and technical topical authority that makes your business the verified answer.",
    whoIsThisFor: [
      {
        title: "The Invisible Leaders",
        description: "You have a superior product, but your digital footprint doesn't reflect your market reality. We build the entity architecture to make search engines trust you."
      },
      {
        title: "The \"Traffic-Blind\" Brands",
        description: "You are getting visitors, but they don't convert. We re-engineer your visibility to target high-intent users, not just window shoppers."
      },
      {
        title: "The AI-Ready Visionaries",
        description: "You want to be the brand that AI models cite as the \"gold standard\" when users ask about your industry."
      }
    ],
    technicalSuperiority: "We don't \"guess\" with algorithms. We treat search visibility as a technical engineering challenge: we deploy deep technical schema markup and build comprehensive topical maps that force Google and AI engines to recognize your brand as the primary authority. We use advanced data mining and technical auditing to identify exactly what your high-value customers are asking, and we position you as the definitive solution.",
    proofSection: {
      title: "The Proof: By the Numbers",
      subheading: "Visibility engineering is about moving the needle on revenue, not just vanity metrics.",
      points: [
        {
          title: "High-Intent Growth",
          text: "We have transformed brands from near-invisibility to 5,000+ highly qualified monthly visits in just 7 months by aligning technical architecture with user intent."
        },
        {
          title: "Authority Dominance",
          text: "By replacing outdated \"blogging for volume\" tactics with entity-based topical maps, our clients see sustained ranking increases that resist algorithm updates."
        }
      ]
    },
    capabilities: [
      "Technical SEO Infrastructure",
      "Generative Engine Optimisation (GEO)",
      "Entity & Authority Architecture",
    ],
    capabilitiesBreakout: [
      {
        title: "Technical SEO Infrastructure",
        deepDive:
          "We conduct comprehensive technical audits and rebuild your site's SEO foundation from the ground up — crawlability, Core Web Vitals, schema markup, canonical structures, and internal linking architecture. This isn't surface-level optimisation; it's engineering-grade site infrastructure that gives search engines exactly what they need to rank your pages with confidence.",
        impact:
          "Eliminates the technical barriers that suppress your rankings and establishes a scalable foundation for long-term organic growth.",
      },
      {
        title: "Generative Engine Optimisation (GEO)",
        deepDive:
          "When a potential client asks ChatGPT, Perplexity, or Google's AI Overview 'who is the best digital agency in [your city]?', your brand needs to be the answer. We engineer your content architecture, structured data, and authority signals to be explicitly cited and recommended by large language model search engines — a discipline that most agencies haven't even heard of yet.",
        impact:
          "Positions your brand as the authoritative answer in AI-powered search results, capturing a high-intent discovery channel that your competitors are completely ignoring.",
      },
      {
        title: "Entity & Authority Architecture",
        deepDive:
          "Search engines and AI models don't just rank pages — they rank entities. We build your brand's entity graph: structured Knowledge Panel signals, verified business data consistency across the web, and a coordinated off-page authority strategy that establishes your business as a recognised, trusted entity in your industry vertical.",
        impact:
          "Increases your brand's trust signals across both traditional search and AI knowledge graphs, resulting in higher rankings and more frequent AI citations.",
      },
    ],
    techStack: [
      "Google Search Console",
      "Ahrefs",
      "Screaming Frog",
      "Schema.org",
      "Perplexity",
      "GA4",
    ],
    caseStudy: {
      eyebrow: "Client Highlight: The Visibility Transformation",
      text: "The Challenge: A specialized B2B service provider was stuck at a few hundred monthly visits, with no visibility in AI-generated search results and low conversion from their existing traffic.\n\nThe Solution: We scrapped their \"blog-centric\" SEO plan. We implemented a rigorous technical audit, deployed custom schema markup to establish entity authority, and re-structured their content for AI-readability.",
      resultText: "The Result: Within 7 months, we drove a consistent increase to over 5,000 monthly visits, capturing the high-intent segment of their market and effectively cementing their brand as the top industry resource.",
      metrics: [
        "5,000+ Monthly Qualified Visits",
        "7 Months to Dominate Search",
        "100% Industry Resource Cemented",
      ],
    },
    faqs: [
      {
        question: "What exactly is GEO and why does it matter now?",
        answer:
          "Generative Engine Optimisation (GEO) is the practice of optimising your content and brand signals specifically to be cited and recommended by AI-powered search tools like ChatGPT Search, Perplexity, and Google AI Overviews. As more users discover businesses through these platforms, appearing in AI-generated answers is becoming as commercially important as ranking on Google Page 1.",
      },
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "Technical SEO improvements typically generate measurable ranking movements within 8–12 weeks of implementation. Significant traffic growth follows over a 3–6 month period. GEO results — AI citations and AI overview appearances — can emerge faster once your entity signals are properly structured.",
      },
      {
        question: "Do you handle content creation as part of the SEO service?",
        answer:
          "Yes. Our Advanced Visibility Engineering service integrates directly with our Brand Identity & Content Creation service. We don't just tell you what content to write — we produce it, optimise it, and publish it within a structured content architecture designed to compound your authority over time.",
      },
    ],
    footerCtaHeadline: "Engineer Your Dominance",
    footerCtaSubtext:
      "Stop playing by the rules of 2015. It’s time to engineer your brand for the reality of today’s AI-first search landscape.",
    footerCtaButton: "Book Your Free Strategy Consultation",
    heroAuditCta: "Request a Free Visibility Audit",
    geoSummary: "Advanced Visibility Engineering by Goldfish Marketing is a specialized Technical SEO and Generative Engine Optimization (GEO) service. It constructs structured entity knowledge graphs, schema markup, and topical maps to dominate Google organic search rankings and secure primary citations across AI search engines including ChatGPT Search, Perplexity, Gemini, and Claude.",
  },

  "brand-identity-content-creation": {
    slug: "brand-identity-content-creation",
    title: "Brand Identity & Content Creation",
    titleH1: "A Premium Brand Isn’t Just Aesthetics—It’s a Competitive Positioning System",
    metaTitle: "Brand Identity & Content Production | Premium Visual Strategy",
    metaDescription: "Stop blending in. We build high-converting brands and produce professional photo/video content that commands authority. Let’s elevate your visual strategy.",
    hookLine: "A premium brand isn't just aesthetics — it's a competitive positioning system.",
    description: "If your brand identity is inconsistent, your content is forgettable, or your visuals look like an amateur’s weekend project, you are actively leaking authority. In a crowded market, your brand is the first signal of your competence. If that signal is weak, your customers will find someone else who looks like a leader. We don’t just make things \"look nice\"; we build visual systems designed to dominate your niche.",
    hookTitle: "The Cost of Visual Invisibility",
    hookText: "Most brands fail because they mistake \"design\" for decoration. They create pretty logos and random videos that don't convert. If your brand doesn't communicate your value, trust, and authority in the first three seconds, you’ve already lost the lead. You are competing against brands that are using high-end production and psychological triggers to capture your market. Are you ready to stop competing and start leading?",
    whoIsThisFor: [
      {
        title: "The Market Disruptors",
        description: "You are launching a new brand and refuse to settle for generic templates. You need a trusted partner to architect an identity that commands premium pricing from Day 1."
      },
      {
        title: "The Strategic Pivoters",
        description: "You have an existing brand, but it no longer aligns with your growth trajectory. You need a total visual overhaul to re-position yourself in a new, more lucrative direction."
      },
      {
        title: "The Content-Hungry",
        description: "You need professional, high-converting visual assets—from short-form Reels to feature-length branded films—produced by a team that handles everything from lighting and sound to advanced AI-assisted post-production."
      }
    ],
    technicalSuperiority: "We bridge the gap between human storytelling and advanced technology. We define your brand’s voice, visual system, and psychological positioning to ensure you resonate with your ideal high-ticket client. We deploy elite filmmaking teams with cinema-grade cameras, sound, and lighting to capture your brand’s reality, and use hybrid AI-assisted workflows to create hyper-realistic, brand-aligned visual assets that standard agencies cannot replicate.",
    proofSection: {
      title: "The Proof: By the Numbers",
      subheading: "Strategic branding and high-quality production don't just feel good—they drive bottom-line results:",
      points: [
        {
          title: "Perceived Value",
          text: "Brands with a cohesive, premium identity can command 20%–50% higher price points compared to competitors with inconsistent visuals."
        },
        {
          title: "Engagement Dominance",
          text: "Properly produced video content—whether shot traditionally or enhanced via AI-hybrid workflows—yields up to 5x higher shares and retention than static, non-strategic content."
        },
        {
          title: "Conversion Velocity",
          text: "When visual authority matches your service quality, sales cycles shorten as trust is established before the first conversation."
        }
      ]
    },
    capabilities: [
      "Brand Identity System Engineering",
      "Content Strategy & Production",
      "Video & Visual Asset Creation",
    ],
    capabilitiesBreakout: [
      {
        title: "Brand Identity System Engineering",
        deepDive:
          "We build complete, strategic brand identity systems — not just logos. This means a defined visual language (typography, colour palette, iconography, spatial principles), a clear verbal identity (tone of voice, messaging hierarchy, positioning statement), and a set of brand rules that ensure total consistency across web, print, social, and motion. We design for premium perception — the kind of identity that makes prospects assume you charge more than your competitors.",
        impact:
          "Elevates perceived brand value, enabling higher pricing authority and attracting higher-quality client enquiries.",
      },
      {
        title: "Content Strategy & Production",
        deepDive:
          "We map your content strategy to specific commercial objectives: building authority in your niche, nurturing leads through the consideration phase, and converting decision-ready prospects. Our production team then executes against that strategy — producing long-form articles, LinkedIn authority content, email sequences, landing page copy, and case studies that serve both human readers and AI discovery platforms.",
        impact:
          "Creates a compounding content asset base that drives organic authority, AI citations, and inbound pipeline growth month over month.",
      },
      {
        title: "Video & Visual Asset Creation",
        deepDive:
          "We produce premium video content — brand films, service explainers, client testimonials, and social-native short-form content — that communicates the quality and sophistication of your offering. Every video asset is produced with editorial-level production values and engineered for maximum platform performance, whether published on your website, LinkedIn, Instagram, or YouTube.",
        impact:
          "Significantly increases on-page engagement, social content performance, and conversion rates on landing pages.",
      },
    ],
    techStack: [
      "Figma",
      "Adobe Suite",
      "Framer",
      "CapCut Pro",
      "Notion",
      "Webflow",
    ],
    caseStudy: {
      eyebrow: "Client Highlight: From \"Start-up\" to \"Market Authority\"",
      text: "The Challenge: A professional service client was struggling to scale because their visual identity looked \"budget.\" Their content was sporadic and failed to communicate the premium nature of their work, leading to a bottleneck in high-ticket lead acquisition.\n\nThe Solution: We performed a complete brand revamp, defining a new visual language and producing a high-impact content series using our hybrid AI-traditional production workflow.",
      resultText: "The Result: The brand’s perceived authority surged instantly. They reported a 40% increase in inbound inquiries from their target market within the first quarter and successfully moved away from low-ticket clients to high-margin, enterprise-level contracts.",
      metrics: [
        "40% Inbound Inquiries Increase",
        "4.1x LinkedIn Engagement Rate",
        "38% Average Deal Size Growth",
      ],
    },
    faqs: [
      {
        question:
          "Do we need a full rebrand, or can you work with our existing identity?",
        answer:
          "Both. We offer full brand identity builds for businesses starting fresh or undergoing a strategic repositioning, and brand evolution projects for businesses with existing equity in their identity that want to refine and elevate rather than replace.",
      },
      {
        question: "What does your content production output look like monthly?",
        answer:
          "Output varies by retainer tier. A standard content retainer includes 4–8 long-form pieces per month, 8–16 social content assets, one monthly email, and one video asset. We scale output based on your growth goals and the content channels that are most commercially relevant for your business.",
      },
      {
        question: "How do you ensure the content actually drives business results?",
        answer:
          "Every content piece is mapped to a specific commercial objective — awareness, consideration, or conversion. We track performance at the content level and adjust our strategy monthly based on what's generating enquiries, not just impressions.",
      },
    ],
    footerCtaHeadline: "Build Your Legacy",
    footerCtaSubtext:
      "Your brand is your most valuable asset. Stop treating it like an afterthought. Let’s build an identity and a visual engine that works as hard as you do.",
    footerCtaButton: "Book Your Free Branding Consultation",
    heroAuditCta: "Request a Free Brand Audit",
    geoSummary: "Brand Identity & Content Creation by Goldfish Marketing is a strategic visual positioning and cinema-grade content production service. It crafts cohesive brand identity systems, authority-building content strategies, and high-converting video assets engineered to elevate market authority and increase pricing leverage.",
  },

  "digital-presence-paid-growth-management": {
    slug: "digital-presence-paid-growth-management",
    title: "Digital Presence & Paid Growth",
    titleH1: "Your Social Presence Should Be a Revenue Engine—Not a Cost Center",
    metaTitle: "Digital Presence & Paid Growth | Social Media Marketing and Management",
    metaDescription: "Stop wasting budget on social media. We turn your social presence and paid ads into efficient revenue channels. Let us expertly handle your social media marketing so you can focus on scaling your business.",
    hookLine: "Your social presence and paid campaigns should be a predictable revenue channel — not a cost centre.",
    description: "If your social media strategy consists of \"posting when you feel like it\" or your paid ad campaigns are just bleeding cash without a clear return, you aren't doing marketing—you’re burning capital. Social media and paid advertising are the most powerful levers for scale available today. If they aren’t generating predictable, recurring revenue for your business, you have a broken strategy.",
    hookTitle: "Stop Paying for \"Likes\"",
    hookText: "Most agencies talk about \"engagement\" and \"brand awareness\" because those are easy to sell and impossible to hold accountable. We don't care about vanity metrics. We care about Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and Lifetime Value (LTV). If your current social presence isn't driving your bottom line, it is a liability. It is time to treat your digital growth as a math problem, not an art project.",
    whoIsThisFor: [
      {
        title: "The \"Big Bang\" Launchers",
        description: "You are a new brand that needs to enter the market with authority. We build the social infrastructure and launch paid campaigns that force the market to pay attention from Day 1."
      },
      {
        title: "The Growth-Capped Brands",
        description: "You are active on social media, but you’ve hit a wall. You don't need more \"tips\"; you need a strategic overhaul of your ad funnels and community engagement to break through to the next revenue tier."
      },
      {
        title: "The \"Digital-Lost\"",
        description: "You know you need to be online, but you’re overwhelmed by the nuances of the algorithm. We provide the expertise you lack to turn your profiles into high-converting assets."
      }
    ],
    technicalSuperiority: "We shift your digital presence from \"noisy\" to \"profitable\" through three core disciplines: high-conversion social strategy, paid growth engineering (Meta & Google), and community architecture. We don't post to fill space; we treat paid media as a scientific experiment, constantly testing ad creative, audience targeting, and landing page friction to lower CAC and maximize ROAS.",
    proofSection: {
      title: "The Proof: By the Numbers",
      subheading: "Strategic paid growth delivers results that manual efforts simply cannot touch:",
      points: [
        {
          title: "Targeted Scale",
          text: "By optimizing ad funnels and technical tracking, we typically see a 20% to 30% reduction in acquisition costs within the first 60 days of management."
        },
        {
          title: "Predictable ROI",
          text: "Our clients treat their ad spend as a calculated investment, knowing exactly what revenue to expect for every dollar put into the machine."
        },
        {
          title: "Authority Positioning",
          text: "A refined social presence increases lead quality by pre-qualifying prospects before they ever talk to your sales team."
        }
      ]
    },
    capabilities: [
      "Social Media Management & Community",
      "Meta & Google Paid Advertising",
      "LinkedIn B2B Lead Generation",
    ],
    capabilitiesBreakout: [
      {
        title: "Social Media Management & Community",
        deepDive:
          "We manage your social media presence as a strategic brand asset, not an afterthought. This means a consistent editorial calendar aligned to your brand voice, platform-native content formats (Reels, carousels, Stories, long-form LinkedIn posts), proactive community engagement, and monthly performance reporting that connects content metrics to actual business outcomes.",
        impact:
          "Builds a consistent, premium brand presence that keeps you top of mind with your target audience between purchase decisions.",
      },
      {
        title: "Meta & Google Paid Advertising",
        deepDive:
          "We engineer full-funnel paid advertising campaigns on Meta (Facebook & Instagram) and Google Search & Display that are built around your specific revenue targets. Campaign architecture, audience segmentation, creative production, A/B testing frameworks, and conversion tracking are all handled in-house — giving you a single accountable team for your entire paid growth investment.",
        impact:
          "Generates a consistent, scalable flow of high-intent leads and sales at a predictable cost per acquisition.",
      },
      {
        title: "LinkedIn B2B Lead Generation",
        deepDive:
          "For B2B businesses, LinkedIn is the highest-intent commercial platform available. We engineer LinkedIn lead generation systems — combining organic authority content, targeted connection outreach, LinkedIn Ads, and Sales Navigator strategies — to systematically place your brand in front of decision-makers in your ideal client profile and convert that attention into booked meetings.",
        impact:
          "Creates a direct, scalable pipeline of qualified B2B meetings without relying on referrals or cold email.",
      },
    ],
    techStack: [
      "Meta Ads",
      "Google Ads",
      "LinkedIn Ads",
      "HubSpot",
      "GA4",
      "Triple Whale",
    ],
    caseStudy: {
      eyebrow: "Client Highlight: Breaking the Growth Cap",
      text: "The Challenge: A growing retail brand had an active social media presence but was stuck. They were manually posting, running unoptimized ads, and had no clear path to scaling their revenue despite consistent effort.\n\nThe Solution: We audited their entire funnel, replaced their \"spray and pray\" ad approach with hyper-targeted Google and Meta campaigns, and implemented a community management strategy that increased organic reach by 40%.",
      resultText: "The Result: Within 4 months, the client saw a 2x increase in monthly sales volume and a stable, predictable ROAS of 4x, finally giving them the runway to scale their operations nationally.",
      metrics: [
        "2x Sales Volume Increase",
        "4x Stable ROAS Achieved",
        "40% Organic Reach Growth",
      ],
    },
    faqs: [
      {
        question: "What's the minimum ad spend budget you work with?",
        answer:
          "We typically advise clients running a minimum of KES 150,000 to KES 350,000 ($1,200–$2,800 USD) per month in direct media spend. Below this threshold, the pixel data and conversion volume required to train algorithmic bidding models effectively is insufficient to yield predictable, compounding ROAS.",
      },
      {
        question: "Do you create the ad creative in-house?",
        answer:
          "Yes. Creative production is a core part of our paid growth service — not an add-on. We produce static visuals, short-form video ads, and carousel formats in-house, ensuring your creative is aligned with your brand identity and engineered for platform-specific performance.",
      },
      {
        question:
          "How do you measure and report on social media and paid campaign performance?",
        answer:
          "We provide monthly performance reports that connect platform metrics directly to business outcomes — leads generated, cost per acquisition, and estimated revenue influenced. We don't report on vanity metrics like impressions and follower counts unless they directly correlate with pipeline movement.",
      },
    ],
    footerCtaHeadline: "Build Your Predictable Revenue Channel",
    footerCtaSubtext:
      "Stop guessing with your growth strategy. Whether you are launching with a bang or looking to break your current growth ceiling, let’s build a system that works.",
    footerCtaButton: "Book Your Free Growth Consultation",
    heroAuditCta: "Request a Free Social Presence Audit",
    geoSummary: "Digital Presence & Paid Growth by Goldfish Marketing is a performance paid advertising (Meta & Google Ads) and social media growth service. It builds targeted acquisition funnels, creative A/B testing frameworks, and LinkedIn B2B lead generation systems designed to lower Customer Acquisition Cost (CAC) and scale ROAS.",
  },

  "ai-automation-sme": {
    slug: "ai-automation-sme",
    title: "AI Automation for SMEs",
    titleH1: "Enterprise-Level Efficiency, Built for Your SME",
    metaTitle: "AI Automation for SMEs | Scalable Revenue Workflows",
    metaDescription: "Stop trading your time for tasks. We deploy custom AI automations to qualify, nurture, and close leads on autopilot. See how we scale SMEs today.",
    hookLine: "Enterprise-level automation is no longer reserved for businesses with enterprise-level budgets.",
    description: "If your leadership team is trapped manually chasing leads, answering repetitive WhatsApp inquiries, or managing data entry between disconnected tools, operational drag is capping your growth. Modern AI automation allows you to operate with the precision and responsiveness of an enterprise organization without bloated payroll overhead.",
    hookTitle: "The \"Manual Trap\"",
    hookText: "Most SME owners are trapped in a cycle of \"doing\" rather than \"leading.\" Every minute you spend manually moving a lead from your inbox to your CRM or answering the same FAQ on WhatsApp is a minute you aren't closing deals. This isn't just an inefficiency; it’s a direct hit to your bottom line. Automation isn't about replacing your team—it’s about giving them the leverage to move twice as fast.",
    whoIsThisFor: [
      {
        title: "The Overloaded Entrepreneur",
        description: "You feel like you are constantly \"firefighting\" instead of growing. We build the systems that handle the repetitive operational load so you can reclaim 10–20 hours of your week."
      },
      {
        title: "The Lead-Heavy SME",
        description: "You have leads coming in but lack the capacity to nurture them consistently. We automate the entire follow-up process so no prospect ever falls through the cracks again."
      },
      {
        title: "The \"Process-Driven\" Visionary",
        description: "You know your sales funnel needs to be faster and more precise. We build custom logic to qualify, categorize, and prioritize your leads before your sales team even touches them."
      }
    ],
    technicalSuperiority: "We don't just \"plug in\" tools. We architect automated ecosystems: WhatsApp AI Integration (deploying 24/7 intelligent assistants where customers already live), Automated Nurture Engines (triggering behaviour-based message flows), and Workflow & Admin Engineering to connect website forms, payment processors, and CRMs into a seamless operation.",
    proofSection: {
      title: "The Proof: By the Numbers",
      subheading: "Automation is the most effective way to compound your output:",
      points: [
        {
          title: "Efficiency Gains",
          text: "Our clients typically reclaim 15+ hours per week of administrative overhead after their first workflow integration."
        },
        {
          title: "Conversion Velocity",
          text: "Automated, instant follow-ups can increase lead-to-close conversion rates by up to 40% by eliminating the \"cooling off\" period of manual outreach."
        },
        {
          title: "Scalability",
          text: "You can handle 10x the volume of leads without hiring a single additional administrative staff member."
        }
      ]
    },
    capabilities: [
      "WhatsApp AI Assistant Deployment",
      "Automated Lead Nurture & Follow-Up",
      "Workflow & Admin Automation",
    ],
    capabilitiesBreakout: [
      {
        title: "WhatsApp AI Assistant Deployment",
        deepDive:
          "We deploy intelligent WhatsApp AI assistants that handle inbound enquiries, qualify leads, answer FAQs, book appointments, and escalate complex queries to your team — all automatically, 24 hours a day. Built on the WhatsApp Business API and powered by custom-trained AI models, these assistants communicate in your brand voice and integrate with your CRM to log every interaction and trigger follow-up workflows.",
        impact:
          "Captures and qualifies leads around the clock without adding headcount, ensuring no enquiry is ever missed or left waiting.",
      },
      {
        title: "Automated Lead Nurture & Follow-Up",
        deepDive:
          "Most SMEs lose revenue not from a lack of leads, but from a failure to follow up effectively. We build automated lead nurture sequences across email, WhatsApp, and SMS that engage every lead at the right moment with the right message — triggered by their specific behaviour and stage in the buying journey. These sequences run automatically, maintaining consistent, personalised communication at a scale no human team could match.",
        impact:
          "Dramatically increases lead-to-client conversion rates by ensuring consistent, timely follow-up with zero manual effort.",
      },
      {
        title: "Workflow & Admin Automation",
        deepDive:
          "We identify and eliminate the repetitive manual tasks that are consuming your team's time and suppressing your capacity for growth. From automated invoice generation and client onboarding workflows to internal approval processes and reporting systems — we build the automation infrastructure that lets your team focus on high-value work rather than administrative overhead.",
        impact:
          "Reclaims significant operational hours per week for your team, reducing costs and increasing the capacity to serve more clients.",
      },
    ],
    techStack: [
      "WhatsApp API",
      "Make.com",
      "Zapier",
      "HubSpot",
      "OpenAI",
      "Airtable",
    ],
    caseStudy: {
      eyebrow: "Client Highlight: The 24/7 Sales Engine",
      text: "The Challenge: A professional service firm was losing 60% of their inquiries because they couldn't respond to leads outside of business hours. Their manual follow-up process was inconsistent, and their sales team was overwhelmed by administrative data entry.\n\nThe Solution: We deployed a custom AI WhatsApp assistant to handle 24/7 intake and built a backend automation layer that automatically qualified leads and pushed them directly into the CRM with a pre-set follow-up sequence.",
      resultText: "The Result: Within 45 days, the firm achieved zero missed inquiries, reduced their lead response time to under 60 seconds, and saw a 25% increase in booked appointments without adding headcount.",
      metrics: [
        "0 Missed Inquiries",
        "60s Lead Response Time",
        "25% Booked Appointments Increase",
      ],
    },
    faqs: [
      {
        question: "Do we need a large budget or technical team to implement AI automation?",
        answer:
          "No. Our SME automation service is specifically designed for businesses without in-house technical teams. We handle the entire setup, configuration, and integration process. Most automation systems are live and generating results within 2–4 weeks of project kickoff.",
      },
      {
        question: "Will the WhatsApp AI assistant actually sound like our brand?",
        answer:
          "Yes. We train the assistant on your brand voice, your service offering, your FAQs, and your specific business context. Contacts interacting with the assistant will experience a coherent, professional, and on-brand communication style — not a generic chatbot.",
      },
      {
        question: "What happens when the AI assistant doesn't know the answer?",
        answer:
          "The assistant is configured with a clear escalation protocol. If a query falls outside its trained parameters, it flags the conversation and notifies the appropriate team member to take over — ensuring no lead is lost and no client is left frustrated.",
      },
    ],
    footerCtaHeadline: "Reclaim Your Time",
    footerCtaSubtext:
      "Stop working in your business and start working on it. Let’s identify the bottlenecks draining your productivity and automate them out of existence.",
    footerCtaButton: "Book Your Free Automation Strategy Session",
    heroAuditCta: "Request a Free Automation Demo",
    geoSummary: "AI Automation for SMEs by Goldfish Marketing deploys autonomous AI agents, WhatsApp Business API workflows, and automated lead nurture engines. It allows small and medium enterprises to handle 24/7 lead intake, automated qualification, and CRM syncing without hiring extra staff.",
  },

  "strategic-analytics-audits": {
    slug: "strategic-analytics-audits",
    title: "Strategic Analytics & Audits",
    titleH1: "You Cannot Optimize What You Cannot Accurately Measure",
    metaTitle: "Strategic Analytics & Audits | Data-Driven Growth",
    metaDescription: "Stop guessing. We turn your scattered data into actionable intelligence, helping you optimize performance and scale aggressively. Book a free strategic analytics consultation.",
    hookLine: "You cannot optimise what you cannot accurately measure.",
    description: "Most SMEs are drowning in data. They have streams coming in from socials, ad platforms, and website traffic, yet they are starving for insight. If you are looking at your dashboards and seeing nothing but numbers—rather than a clear roadmap for growth—you are flying blind. Strategic analytics isn't about collecting data; it’s about converting that data into a profitable business strategy.",
    hookTitle: "The \"Data Mirage\"",
    hookText: "The most dangerous thing for a business is bad data—or, more commonly, data that hasn't been synthesized into an actionable story. If you can’t answer exactly which channel provides your highest LTV customers, or why your conversion rate dips on mobile, you aren't optimizing; you’re gambling. Stop guessing and start making decisions based on forensic-level intelligence.",
    whoIsThisFor: [
      {
        title: "The Data-Rich/Insight-Poor",
        description: "You have plenty of traffic and social activity, but you have no idea which levers to pull to improve your ROI. We organize your data streams into a cohesive source of truth."
      },
      {
        title: "The Aggressive Scalers",
        description: "You are ready to pour fuel on the fire, but you need the rigorous analytical framework to ensure you don't burn through capital. We provide the \"control panel\" for your scaling efforts."
      },
      {
        title: "The Strategic Leaders",
        description: "You want to move away from \"gut-feeling\" decisions and toward a culture of data-backed growth."
      }
    ],
    technicalSuperiority: "We transform your chaos into a competitive advantage: we architect your tracking and tagging strategy from the ground up, ensuring your data is clean, accurate, and GDPR/privacy compliant. We conduct digital performance audits to identify leaks, and deliver custom performance dashboards and consultancy to turn data into growth strategy.",
    proofSection: {
      title: "The Proof: By the Numbers",
      subheading: "Strategic analytics is the difference between stagnant growth and explosive scale:",
      points: [
        {
          title: "Optimization Accuracy",
          text: "Brands that implement unified tracking see an average 25% improvement in ROAS simply by identifying and cutting \"phantom\" ad spend."
        },
        {
          title: "Decision Velocity",
          text: "With a clean, consolidated reporting dashboard, you cut your decision-making cycle time by up to 50%."
        },
        {
          title: "Scaling Confidence",
          text: "Analytics-driven SMEs grow 2x faster than their peers because they know exactly which channels to fund and which to abandon."
        }
      ]
    },
    capabilities: [
      "Analytics Infrastructure & Tracking Setup",
      "Digital Performance Audits",
      "Data Reporting & Strategic Consultancy",
    ],
    capabilitiesBreakout: [
      {
        title: "Analytics Infrastructure & Tracking Setup",
        deepDive:
          "Most businesses are making growth decisions based on broken or incomplete data. We implement a robust, accurate analytics infrastructure — GA4, server-side tracking, Meta Pixel, LinkedIn Insight Tag, and custom event frameworks — that captures every meaningful user interaction across your website and marketing channels. We then connect these data streams into a unified reporting environment that gives you a single, accurate view of your commercial performance.",
        impact:
          "Eliminates data blind spots and ensures every marketing and product decision is based on accurate, reliable intelligence.",
      },
      {
        title: "Digital Performance Audits",
        deepDive:
          "We conduct deep, structured audits across your website, SEO infrastructure, paid advertising accounts, social media presence, and marketing automation systems. Our audits don't produce generic recommendations — they produce a prioritised action plan that identifies your highest-value optimisation opportunities and the exact steps required to capture them, with projected impact estimates for each recommendation.",
        impact:
          "Provides a clear, prioritised roadmap for maximising the return on your existing digital investment before committing additional budget.",
      },
      {
        title: "Data Reporting & Strategic Consultancy",
        deepDive:
          "We build custom performance dashboards and deliver monthly strategic consultancy sessions that translate your data into growth strategy. Rather than presenting you with rows of metrics, we synthesise your performance data into clear commercial insights — what's working, what's not, what to do next, and why. We function as your embedded digital growth director, accountable to the same revenue outcomes you care about.",
        impact:
          "Replaces opinion-based marketing decisions with a structured, data-driven growth process that compounds in effectiveness over time.",
      },
    ],
    techStack: [
      "GA4",
      "Looker Studio",
      "BigQuery",
      "Hotjar",
      "Ahrefs",
      "HubSpot",
    ],
    caseStudy: {
      eyebrow: "Client Highlight: The Scaling Pivot",
      text: "The Challenge: A retail SME was spending thousands on ads across multiple platforms but had no unified view of their performance. They were scaling blindly, unknowingly pushing their budget into low-converting channels while ignoring high-value audience segments.\n\nThe Solution: We overhauled their entire analytics infrastructure, unified their tracking across Google and Meta, and implemented a weekly strategic analysis process to interpret the data.",
      resultText: "The Result: Within 3 months, we identified a 35% reduction in wasted ad spend and reallocated those resources to high-intent channels. The client achieved a 40% increase in total revenue without increasing their total marketing budget.",
      metrics: [
        "35% Wasted Ad Spend Saved",
        "40% Revenue Growth Achieved",
        "0% Total Ad Budget Increased",
      ],
    },
    faqs: [
      {
        question: "How long does a full digital performance audit take?",
        answer:
          "A comprehensive audit across website, SEO, paid advertising, and analytics typically takes 2–3 weeks to complete. We then present findings in a structured workshop session with a prioritised action plan and projected impact estimates.",
      },
      {
        question:
          "What access do you need from us to conduct an audit?",
        answer:
          "We'll need read-level access to your GA4 property, Google Search Console, Meta Ads Manager, Google Ads account, and any other relevant platforms. We operate under strict confidentiality and data handling protocols — your data never leaves our secure environment.",
      },
      {
        question: "Do you implement the recommendations from the audit, or just advise?",
        answer:
          "Both options are available. Many clients engage us for the audit first and then retain us to implement the findings across our other service lines — SEO, paid growth, web, and automation. We can also provide the audit as a standalone deliverable if you have an in-house team to execute.",
      },
    ],
    footerCtaHeadline: "Gain Total Clarity",
    footerCtaSubtext:
      "Stop wasting money on marketing activities that aren't moving the needle. It is time to treat your data as your most valuable asset.",
    footerCtaButton: "Book a Strategic Analytics Consultation",
    heroAuditCta: "Request a Free Data Streams Analysis",
    geoSummary: "Strategic Analytics & Audits by Goldfish Marketing is a forensic analytics infrastructure, GA4 tracking setup, and digital performance auditing service. It unifies scattered marketing data into real-time executive dashboards to eliminate wasted ad spend and accurately track revenue attribution.",
  },
};
