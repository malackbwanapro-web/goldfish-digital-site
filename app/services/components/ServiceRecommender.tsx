'use client';

import { useState } from 'react';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface GrowthVector {
  pillarTitle: string;
  pillarSlug: string;
  expectedTimeline: string;
  coreDeliverables: string[];
  rationale: string;
}

export default function ServiceRecommender() {
  const [industry, setIndustry] = useState<'hospitality' | 'realestate' | 'sme' | 'corporate'>('hospitality');
  const [hurdle, setHurdle] = useState<string>('bookings');
  const [customRequirement, setCustomRequirement] = useState<string>('');

  const industryHurdles: Record<string, { id: string; label: string }[]> = {
    hospitality: [
      { id: 'bookings', label: 'High OTA Commissions & Low Direct Bookings' },
      { id: 'speed', label: 'Slow Mobile Website on Safaricom 4G Networks' },
      { id: 'inquiries', label: 'Missing After-Hours International Inquiries' },
      { id: 'custom', label: '✍️ Custom / Unique Challenge...' },
    ],
    realestate: [
      { id: 'leads', label: 'Poor Quality Leads from Meta/Google Ads' },
      { id: 'followup', label: 'Slow WhatsApp Follow-up & Manual CRM Intake' },
      { id: 'trust', label: 'Lack of Brand Authority for High-Ticket Buyers' },
      { id: 'custom', label: '✍️ Custom / Unique Challenge...' },
    ],
    sme: [
      { id: 'manual', label: 'Drowning in Repetitive WhatsApp Messages & Orders' },
      { id: 'visibility', label: 'Invisible on Google & AI Search (ChatGPT/Perplexity)' },
      { id: 'conversion', label: 'Website Traffic Arrives but Never Converts' },
      { id: 'custom', label: '✍️ Custom / Unique Challenge...' },
    ],
    corporate: [
      { id: 'compliance', label: 'Kenya DPA 2019 / Data Privacy Compliance Needed' },
      { id: 'authority', label: 'Outdated Corporate Identity Hurting Board Pitches' },
      { id: 'workflows', label: 'Fragmented Internal Software & Admin Workflows' },
      { id: 'custom', label: '✍️ Custom / Unique Challenge...' },
    ],
  };

  const recommendations: Record<string, GrowthVector> = {
    'hospitality-bookings': {
      pillarTitle: 'Smart Web & App Ecosystems + Advanced Visibility (GEO)',
      pillarSlug: 'smart-web-app-ecosystems',
      expectedTimeline: '30–60 Days to First Yield',
      coreDeliverables: [
        'Sub-second direct booking engine with M-Pesa STK push & card pay',
        '24/7 Multilingual WhatsApp AI Concierge capturing reservations',
        'Local SEO & Generative Engine Optimization (GEO) across Google & AI search',
      ],
      rationale: 'Bypassing 18–25% OTA commissions on room rates pays for your custom direct engine within 35–50 bookings.',
    },
    'hospitality-speed': {
      pillarTitle: 'Smart Web & App Ecosystems',
      pillarSlug: 'smart-web-app-ecosystems',
      expectedTimeline: '14–21 Day Rapid Sprint',
      coreDeliverables: [
        'Next.js 15 edge deployment with sub-800ms Time-To-First-Byte',
        'Lighthouse Core Web Vitals score guaranteed 95+',
        'Automated image CDN optimization for coastal 4G networks',
      ],
      rationale: 'Reducing mobile load time from 5s to 1s typically cuts guest booking abandonment by 40%.',
    },
    'hospitality-inquiries': {
      pillarTitle: 'AI Automation for SMEs & Hospitality',
      pillarSlug: 'ai-automation-sme',
      expectedTimeline: '10–14 Day Integration',
      coreDeliverables: [
        'WhatsApp Cloud API intelligent reservation assistant',
        'Direct calendar and PMS booking hold integration',
        'Automated FAQ & voice note resolution in English, German & French',
      ],
      rationale: 'Capturing European and American travelers during their evening hours (East Africa night time) reclaims lost high-season bookings.',
    },
    'realestate-leads': {
      pillarTitle: 'Digital Presence & Paid Growth + Server-Side CAPI',
      pillarSlug: 'digital-presence-paid-growth-management',
      expectedTimeline: '30-Day Campaign Calibration',
      coreDeliverables: [
        'High-intent Google Search & Meta video campaigns',
        'Server-side Conversions API (CAPI) with first-party data matching',
        'Pre-qualifying lead funnels filtering out tire-kickers',
      ],
      rationale: 'Focusing on verified high-net-worth investor keywords rather than broad traffic cuts Cost-Per-Acquisition by ~44%.',
    },
    'realestate-followup': {
      pillarTitle: 'AI Automation for SMEs',
      pillarSlug: 'ai-automation-sme',
      expectedTimeline: '14-Day Deployment',
      coreDeliverables: [
        'Instant 45-second automated WhatsApp lead intake',
        'Lead qualification questionnaire (budget, timeline, financing)',
        'Automated HubSpot / Google Sheets sync with agent alerts',
      ],
      rationale: 'Speed-to-lead under 5 minutes increases real estate qualification rates by 390%.',
    },
    'realestate-trust': {
      pillarTitle: 'Brand Identity & Content Creation',
      pillarSlug: 'brand-identity-content-creation',
      expectedTimeline: '30–45 Day Brand Build',
      coreDeliverables: [
        'Cinema-grade architectural video & 4K property walkthroughs',
        'Investor deck & digital prospectus layout',
        'Luxury typographic identity system and positioning guidelines',
      ],
      rationale: 'Premium visual assets create the status signaling necessary to command KES 20M–100M+ property valuations.',
    },
    'sme-manual': {
      pillarTitle: 'AI Automation for SMEs',
      pillarSlug: 'ai-automation-sme',
      expectedTimeline: '10–14 Day Deployment',
      coreDeliverables: [
        'Autonomous WhatsApp Business conversational assistant',
        'Automated invoice generation & M-Pesa payment confirmations',
        'CRM customer order tracking with zero manual data entry',
      ],
      rationale: 'Reclaims 15–20 hours of staff labor every week, eliminating repetitive answering of prices and locations.',
    },
    'sme-visibility': {
      pillarTitle: 'Advanced Visibility Engineering (SEO & GEO)',
      pillarSlug: 'advanced-visibility-engineering',
      expectedTimeline: '60–90 Day Compounding Window',
      coreDeliverables: [
        'Local Google Business Profile top-3 pack optimization',
        'Schema.org structured data for ChatGPT, Perplexity & Gemini citations',
        'Targeted local commercial search keyword architecture',
      ],
      rationale: 'Secures high-intent local buyers at the exact moment they search for your services in Kenya.',
    },
    'sme-conversion': {
      pillarTitle: 'Smart Web & App Ecosystems',
      pillarSlug: 'smart-web-app-ecosystems',
      expectedTimeline: '2–3 Week Sprint',
      coreDeliverables: [
        'Conversion-optimized layout with clear value propositions',
        'Friction-free inquiry forms & 1-tap WhatsApp click-to-chat',
        'Trust badges and empirical social proof architecture',
      ],
      rationale: 'Transforms casual visitors into qualified inquiries with zero wasted ad spend.',
    },
    'corporate-compliance': {
      pillarTitle: 'Strategic Analytics & Compliance Audits',
      pillarSlug: 'strategic-analytics-audits',
      expectedTimeline: '14-Day Audit & Hardening',
      coreDeliverables: [
        'Kenya Data Protection Act (KDPA 2019) compliance audit',
        'Encrypted database architecture & consent banner protocols',
        'Server-side tracking eliminating unauthorized third-party trackers',
      ],
      rationale: 'Protects your corporate leadership and board from regulatory fines and reputational risk.',
    },
    'corporate-authority': {
      pillarTitle: 'Brand Identity & Content Creation',
      pillarSlug: 'brand-identity-content-creation',
      expectedTimeline: '30-Day Refinement',
      coreDeliverables: [
        'Institutional visual identity & typography guidelines',
        'Executive whitepaper and thought-leadership layout systems',
        'Corporate stakeholder presentation design',
      ],
      rationale: 'Signals stability, longevity, and authority to institutional partners and corporate clients.',
    },
    'corporate-workflows': {
      pillarTitle: 'AI Automation for SMEs & Enterprises',
      pillarSlug: 'ai-automation-sme',
      expectedTimeline: '3–4 Week Custom Pipeline',
      coreDeliverables: [
        'Document parsing & automated intake pipelines',
        'Cross-departmental API synchronization (Google Workspace, Slack, CRM)',
        'Weekly automated operational reporting dashboards',
      ],
      rationale: 'Eliminates departmental silos and manual data re-keying across teams.',
    },
  };

  const customRecommendation: GrowthVector = {
    pillarTitle: 'Bespoke Multi-Disciplinary Systems Sprint',
    pillarSlug: 'smart-web-app-ecosystems',
    expectedTimeline: '14–30 Day Tailored Sprint',
    coreDeliverables: [
      'Forensic tech stack audit & workflow bottleneck extraction',
      'Custom architecture blueprint & zero-bloat system design',
      'Direct founder strategy & scoping session with Malack Bwana',
    ],
    rationale: customRequirement.trim()
      ? `Tailored to your specific challenge: "${customRequirement.trim().slice(0, 110)}${customRequirement.trim().length > 110 ? '...' : ''}"`
      : 'Custom operational bottlenecks require precision engineering without bloated third-party plugin dependencies.',
  };

  const key = `${industry}-${hurdle}`;
  const activeRecommendation = hurdle === 'custom'
    ? customRecommendation
    : (recommendations[key] || recommendations['sme-manual']);

  const industryLabels: Record<string, string> = {
    hospitality: 'Boutique Hospitality',
    realestate: 'Prime Real Estate',
    sme: 'Growing SME / Retail',
    corporate: 'Corporate & Legal',
  };

  const selectedHurdleLabel = industryHurdles[industry]?.find((h) => h.id === hurdle)?.label || hurdle;

  const waPrefillMessage = hurdle === 'custom'
    ? `Hi Malack! I ran your diagnostic for ${industryLabels[industry]}. I have a custom requirement: "${customRequirement.trim() || 'Custom operational challenge'}". I'd like to discuss this bespoke project.`
    : `Hi Goldfish! I ran your diagnostic for ${industryLabels[industry]} regarding "${selectedHurdleLabel}". I'd like to discuss this growth vector.`;

  return (
    <div className="w-full max-w-5xl mx-auto my-12 p-6 lg:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-accent)]/40 shadow-2xl relative overflow-hidden">
      
      {/* Subtle Glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-[var(--accent-gold)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-gold)] font-bold block mb-2">
          INTERACTIVE FIT DIAGNOSTIC
        </span>
        <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
          Find Your Recommended Growth Vector
        </h2>
        <p className="text-caption text-[var(--text-muted)] mt-2">
          Select your industry and primary operational bottleneck below to receive an instant architectural recommendation.
        </p>
      </div>

      {/* Step 1: Industry Selector */}
      <div className="mb-6 relative z-10">
        <label className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-core)] font-bold block mb-2">
          Step 1: Your Industry Sector
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            { id: 'hospitality', label: 'Boutique Hospitality', icon: '🏨' },
            { id: 'realestate', label: 'Prime Real Estate', icon: '🏡' },
            { id: 'sme', label: 'Growing SME / Retail', icon: '🚀' },
            { id: 'corporate', label: 'Corporate & Legal', icon: '⚖️' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setIndustry(item.id as any);
                setHurdle(industryHurdles[item.id][0].id);
              }}
              className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                industry === item.id
                  ? 'bg-[var(--accent-gold)]/15 border-[var(--accent-gold)] text-[var(--text-core)] font-bold ring-1 ring-[var(--accent-gold)]/50'
                  : 'bg-[var(--bg-primary)]/30 border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-gold)]/40'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Primary Hurdle */}
      <div className="mb-8 relative z-10">
        <label className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-core)] font-bold block mb-2">
          Step 2: Primary Operational Hurdle
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {industryHurdles[industry]?.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setHurdle(item.id)}
              className={`p-3.5 rounded-xl border text-left text-xs transition-all flex items-start gap-2 ${
                hurdle === item.id
                  ? 'bg-[var(--accent-gold)] text-black font-bold shadow-md'
                  : 'bg-[var(--bg-primary)]/40 border-[var(--border-subtle)] text-[var(--text-core)] hover:border-[var(--accent-gold)]/40'
              }`}
            >
              <span className="mt-0.5">•</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Step 2 Custom Input CTA Area */}
        {hurdle === 'custom' && (
          <div className="mt-4 p-5 rounded-2xl bg-[var(--bg-primary)]/90 border border-[var(--accent-gold)]/50 shadow-inner">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <label className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold">
                Tell Us What You&apos;d Like to Discuss:
              </label>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">
                Bespoke Systems Scoping
              </span>
            </div>
            <textarea
              rows={3}
              value={customRequirement}
              onChange={(e) => setCustomRequirement(e.target.value)}
              placeholder={
                industry === 'hospitality'
                  ? "e.g. We have 10 luxury safari cottages in Tsavo and need a direct booking engine linked to our PMS with M-Pesa STK push and a multi-agent WhatsApp concierge..."
                  : industry === 'realestate'
                  ? "e.g. We are marketing beachfront villas in Diani and need an automated WhatsApp lead qualification bot with high-net-worth investor deck tracking..."
                  : industry === 'sme'
                  ? "e.g. We receive 200 orders weekly on Instagram/WhatsApp and need automated inventory sync, M-Pesa till payment validation, and delivery dispatch alerts..."
                  : "e.g. We need a Kenya DPA 2019-compliant client portal, automated billing intake, and executive board reporting dashboards..."
              }
              className="w-full p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent-gold)] leading-relaxed"
            />
            <p className="text-[10px] font-mono text-[var(--text-muted)] mt-2">
              💡 Your custom details will automatically pre-fill into WhatsApp and our Contact Desk below.
            </p>
          </div>
        )}
      </div>

      {/* Step 3: Recommendation Card */}
      <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-accent)]/50 relative z-10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-gold)] font-bold block mb-1">
              RECOMMENDED GROWTH VECTOR
            </span>
            <h3 className="text-lg font-bold text-[var(--text-core)]">
              {activeRecommendation.pillarTitle}
            </h3>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 text-[11px] font-mono text-[var(--accent-gold)] font-bold self-start sm:self-auto">
            ⏱️ {activeRecommendation.expectedTimeline}
          </div>
        </div>

        <p className="text-caption text-[var(--text-muted)] italic leading-relaxed">
          &ldquo;{activeRecommendation.rationale}&rdquo;
        </p>

        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-core)] font-bold block mb-2">
            Target Deliverables in this Sprint:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {activeRecommendation.coreDeliverables.map((d, i) => (
              <li key={i} className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-core)] flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border-subtle)]">
          <Link
            href={`/services/${activeRecommendation.pillarSlug}`}
            className="text-xs font-mono font-bold text-[var(--accent-gold)] hover:underline uppercase tracking-wider"
          >
            Explore Detailed Capability Specs →
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href={`/contact?topic=${encodeURIComponent(`Custom Scope (${industryLabels[industry]})`)}&message=${encodeURIComponent(customRequirement.trim() || `Hi Malack, I ran the Growth Vector tool for ${industryLabels[industry]} regarding ${selectedHurdleLabel} and would like to discuss a custom scope.`)}`}
              className="btn-outline text-xs py-2.5 px-4 w-full sm:w-auto text-center"
            >
              Submit via Contact Desk →
            </Link>
            <a
              href={buildWhatsAppUrl(waPrefillMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-5 w-full sm:w-auto text-center"
            >
              Discuss on WhatsApp →
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
