import type { Metadata } from 'next';
import Link from 'next/link';
import FooterCloser from '../components/FooterCloser';
import CapabilityVisual from '../components/CapabilityVisual';
import ServiceRecommender from './components/ServiceRecommender';
import { servicesData } from './data/servicesData';

export const metadata: Metadata = {
  title: 'Our Services — Web Ecosystems, SEO/GEO, Paid Ads & AI Automation | Goldfish Marketing',
  description:
    'Explore our six core capability engines engineered for growing SMEs, boutique hospitality, and regional market leaders across Kenya and East Africa.',
};

export default function ServicesHub() {
  const servicesList = Object.values(servicesData);

  const sprintPhases = [
    {
      num: '01',
      title: 'Diagnostic & Architecture (Days 1–14)',
      text: 'Forensic extraction of your technical bottlenecks, OTA commission leaks, and local search visibility. You receive an actionable architecture blueprint before any code is deployed.',
    },
    {
      num: '02',
      title: 'Rapid Agile Sprints (Weeks 3–6)',
      text: 'Bi-weekly async demo sprints via private walkthrough videos and live staging environments. High-velocity builds with zero endless corporate meeting marathons.',
    },
    {
      num: '03',
      title: 'Multi-System Integration & Launch',
      text: 'Rigorous Core Web Vitals audit (Lighthouse 95+), M-Pesa STK push & payment testing, WhatsApp AI assistant calibration, and server-side tracking validation.',
    },
    {
      num: '04',
      title: 'Compounding Scale & Optimization',
      text: 'Weekly micro-experiments, continuous AI search citation monitoring, and monthly attribution reporting directly tied to revenue and hours saved.',
    },
  ];

  const comparisonMatrix = [
    {
      dimension: 'Web Architecture',
      commodity: 'Bloated WordPress/Elementor themes, 5s load times, vulnerable plugins, breaks on mobile',
      goldfish: 'Custom Next.js 15 & React full-stack engines, sub-800ms load times, zero plugins, 98/100 Core Web Vitals',
    },
    {
      dimension: 'Search & Visibility',
      commodity: 'Generic keyword stuffing and directory links ignored by modern search engines',
      goldfish: 'Schema.org entity graphs & Generative Engine Optimization (GEO) cited by Google AI, Perplexity & ChatGPT',
    },
    {
      dimension: 'Paid Advertising',
      commodity: '"Boosted posts", vanity follower counts, broken pixel tracking, untracked spend',
      goldfish: 'Full-funnel Meta & Google Ads, Server-Side CAPI tracking, ruthless focus on CAC and verified booking yield',
    },
    {
      dimension: 'Customer Intake',
      commodity: 'Manual typing on WhatsApp, missed evening/weekend inquiries, leads going cold',
      goldfish: '24/7 WhatsApp AI conversational assistant answering FAQs, checking availability, and capturing orders instantly',
    },
    {
      dimension: 'Contract Terms',
      commodity: '12-month lock-in contracts with hidden termination fees and proprietary code hostage',
      goldfish: 'Quarterly milestone sprints, month-to-month retainers, 100% IP ownership on Day 1 with zero lock-in',
    },
  ];

  return (
    <main className="w-full flex flex-col bg-[var(--bg-primary)]">
      
      {/* SECTION 1: CONTEXT HERO */}
      <section className="section-padding px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-eyebrow text-[var(--accent-gold)] mb-4 block">
            LOCAL EXPERTS · GLOBAL STANDARDS
          </span>
          <h1 className="text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 leading-tight">
            High-Velocity Digital Ecosystems &amp; AI Infrastructure Engineered to Dominate.
          </h1>
          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-3xl mx-auto font-light">
            From Diani to Nairobi and beyond: We build high-converting web applications, establish search &amp; AI authority (GEO), run high-ROAS ad campaigns, and deploy autonomous WhatsApp workflows for Kenya&apos;s growing SMEs and hospitality brands.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE INTERACTIVE GROWTH VECTOR RECOMMENDER */}
      <section className="px-6 pb-6">
        <ServiceRecommender />
      </section>

      {/* SECTION 3: THE 6 CORE SERVICE ENGINES (WITH CAPABILITY VISUALS) */}
      <section className="py-16 px-6 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-eyebrow text-[var(--accent-gold)] mb-2 block">THE CORE ENGINES</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Six Specialized Capability Practices
            </h2>
            <p className="text-caption text-[var(--text-muted)] mt-2">
              Each discipline operates as a dedicated engineering unit—standalone or integrated into a full commercial growth engine.
            </p>
          </div>

          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="card-brand p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/40 transition-all duration-300"
            >
              {/* Left Column: Details & Capabilities (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-gold)] font-bold px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                      ENGINE 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      Production Tier
                    </span>
                  </div>

                  <h3 className="text-h2 font-black tracking-tight text-[var(--text-core)] leading-snug mb-3">
                    {service.title}
                  </h3>

                  <p className="text-body text-[var(--text-muted)] leading-relaxed mb-6 font-light">
                    {service.hookLine}
                  </p>

                  <div className="bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-xl p-6 mb-8">
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                      Core Deliverables &amp; Infrastructure
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
                      {service.capabilities.map((capability, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-caption leading-relaxed text-[var(--text-core)]">
                          <span className="text-[var(--accent-gold)] font-bold font-mono">✓</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-primary text-xs py-3 px-6 shadow-sm"
                  >
                    Explore {service.title} →
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-outline text-xs py-3 px-5"
                  >
                    Request Audit
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Capability Render (5 cols) */}
              <div className="lg:col-span-5 w-full flex items-center justify-center bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-2xl p-4 lg:p-6 overflow-hidden">
                <div className="w-full">
                  <CapabilityVisual slug={service.slug} index={0} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: THE DELIVERABLE TRANSPARENCY MATRIX */}
      <section className="section-padding px-6 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow text-[var(--accent-gold)] mb-3 block">RADICAL TRANSPARENCY</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] mb-4">
              The Commodity Agency Way vs. The Goldfish Standard
            </h2>
            <p className="text-body text-[var(--text-muted)] leading-relaxed">
              We hold our code, design, and growth systems to empirical benchmarks. Here is how our engineering compares to standard agency offerings.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border-subtle)] overflow-hidden shadow-xl bg-[var(--bg-surface)]">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-[var(--bg-primary)]/60 border-b border-[var(--border-subtle)] text-xs font-mono font-bold uppercase tracking-wider py-4 px-6 text-[var(--text-core)]">
              <div className="md:col-span-3">Capability Area</div>
              <div className="md:col-span-4 text-red-400">The Commodity Way</div>
              <div className="md:col-span-5 text-[var(--accent-gold)]">The Goldfish Standard</div>
            </div>

            <div className="divide-y divide-[var(--border-subtle)]">
              {comparisonMatrix.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-3 p-6 text-caption items-start">
                  <div className="md:col-span-3 font-mono font-bold text-[var(--text-core)] text-xs">
                    {item.dimension}
                  </div>
                  <div className="md:col-span-4 text-[var(--text-muted)] flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>{item.commodity}</span>
                  </div>
                  <div className="md:col-span-5 text-[var(--text-core)] font-medium flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{item.goldfish}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CHOICE ARCHITECTURE & ENGAGEMENT TIERS */}
      <section className="section-padding bg-[var(--bg-surface)] border-y border-[var(--border-subtle)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow text-[var(--accent-gold)] mb-2 block">ENGAGEMENT MODELS</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Structured for Growing SMEs &amp; Regional Brands
            </h2>
            <p className="text-caption text-[var(--text-muted)] mt-2">
              Transparent frameworks tailored for ambitious businesses. No vague retainers, no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* TIER 1: FOUNDATION SPRINT */}
            <div className="card-brand p-8 flex flex-col justify-between border border-[var(--border-subtle)] bg-[var(--bg-primary)]/20">
              <div>
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-widest block mb-2 font-bold">Tier 01</span>
                <h3 className="text-h3 font-bold text-[var(--text-core)] mb-2">Foundation Sprint</h3>
                <p className="text-caption text-[var(--text-muted)] mb-6">Targeted infrastructure engineering delivered in a dedicated 2–4 week sprint.</p>
                <div className="font-mono text-xs font-bold text-[var(--accent-gold)] mb-6 pb-4 border-b border-[var(--border-subtle)]">
                  Fixed Scope · Rapid 14–21 Day Turnaround
                </div>
                <ul className="flex flex-col gap-3 text-caption text-[var(--text-core)] mb-8">
                  <li>✓ Complete High-Speed Website or Direct Booking Engine</li>
                  <li>✓ Full GEO &amp; Technical Local SEO Infrastructure</li>
                  <li>✓ Standalone WhatsApp AI Assistant Setup</li>
                  <li>✓ GA4 Server-Side Analytics &amp; Conversion Tracking</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-outline w-full text-center text-xs py-3">
                Select Foundation Sprint →
              </Link>
            </div>

            {/* TIER 2: GROWTH ENGINE (THE CORE RETAINER) */}
            <div className="card-brand p-8 flex flex-col justify-between border-2 border-[var(--accent-gold)] relative bg-[var(--bg-primary)]/40 shadow-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent-gold)] text-black font-mono font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-full">
                Most Popular · High Leverage
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[var(--accent-gold)] tracking-widest block mb-2 font-bold">Tier 02</span>
                <h3 className="text-h3 font-bold text-[var(--text-core)] mb-2">Growth Engine Retainer</h3>
                <p className="text-caption text-[var(--text-muted)] mb-6">Continuous omni-channel growth combining search authority, paid acquisition, and content.</p>
                <div className="font-mono text-xs font-bold text-[var(--accent-gold)] mb-6 pb-4 border-b border-[var(--border-subtle)]">
                  Ongoing Monthly Growth · Continuous ROI
                </div>
                <ul className="flex flex-col gap-3 text-caption text-[var(--text-core)] mb-8">
                  <li>✓ Continuous Generative Engine Optimization (GEO)</li>
                  <li>✓ Meta &amp; Google Ads Campaign Management with Strict ROAS</li>
                  <li>✓ WhatsApp Lead Nurture &amp; CRM Pipeline Automation</li>
                  <li>✓ Bi-Weekly Executive Performance Strategy Sessions</li>
                  <li>✓ Direct WhatsApp &amp; Slack Channel to Senior Team</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary w-full text-center text-xs py-3 shadow-md">
                Deploy Growth Engine →
              </Link>
            </div>

            {/* TIER 3: ECOSYSTEM DOMINANCE */}
            <div className="card-brand p-8 flex flex-col justify-between border border-[var(--border-subtle)] bg-[var(--bg-primary)]/20">
              <div>
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-widest block mb-2 font-bold">Tier 03</span>
                <h3 className="text-h3 font-bold text-[var(--text-core)] mb-2">Ecosystem Dominance</h3>
                <p className="text-caption text-[var(--text-muted)] mb-6">Complete embedded digital department and automated infrastructure for market leaders.</p>
                <div className="font-mono text-xs font-bold text-[var(--text-core)] mb-6 pb-4 border-b border-[var(--border-subtle)]">
                  Custom Strategic Scope · Priority Engineering
                </div>
                <ul className="flex flex-col gap-3 text-caption text-[var(--text-core)] mb-8">
                  <li>✓ End-to-End Bespoke Web &amp; App Platform Rebuild</li>
                  <li>✓ Autonomous Multi-Agent AI Operations &amp; Order Routing</li>
                  <li>✓ Multi-Channel Paid Ad Domination (Google, Meta, TikTok)</li>
                  <li>✓ Dedicated Lead Systems Architect &amp; Creative Lead</li>
                  <li>✓ Priority SLA: 4-Hour Critical Response Time Guarantee</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-outline w-full text-center text-xs py-3">
                Explore Dominance Partnership →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SPRINT & SCALE PROCESS */}
      <section className="section-padding px-6 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-eyebrow text-[var(--accent-gold)] mb-3 block">OPERATIONAL VELOCITY</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              The Sprint &amp; Scale Framework
            </h2>
            <p className="text-caption text-[var(--text-muted)] max-w-md mx-auto mt-2">
              How we take projects from diagnostic to high-yield production with zero operational drag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sprintPhases.map((phase, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black font-mono text-[var(--accent-gold)] mb-3 block">
                    {phase.num}
                  </span>
                  <h3 className="text-sm font-bold tracking-tight mb-2 text-[var(--text-core)]">
                    {phase.title}
                  </h3>
                  <p className="text-caption text-[var(--text-muted)] leading-relaxed font-light">
                    {phase.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: DUAL-TRACK FRICTIONLESS CONVERSION CLOSER */}
      <section className="py-20 px-6 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-gold)] font-bold block mb-2">
            START WITH CLARITY
          </span>
          <h2 className="text-h2 font-black tracking-tight mb-4 text-[var(--text-core)]">
            Ready to Turn Your Digital Presence into a High-Yield Revenue Asset?
          </h2>
          <p className="text-caption text-[var(--text-muted)] max-w-lg mx-auto mb-10 leading-relaxed">
            Whether you need a 14-day direct booking sprint or an ongoing growth partner, we operate with complete commercial transparency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="https://wa.me/254711404755?text=Hi%20Goldfish!%20I'd%20like%20to%20discuss%20our%20growth%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl border border-emerald-500/40 bg-[var(--bg-primary)]/40 hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center group"
            >
              <span className="text-3xl mb-2">💬</span>
              <span className="font-bold text-sm text-[var(--text-core)] group-hover:text-emerald-400 transition-colors">
                Direct WhatsApp Channel
              </span>
              <span className="text-[11px] text-[var(--text-muted)] mt-1 font-mono">
                Instant async chat with Lead Strategist. No form required.
              </span>
            </a>

            <Link
              href="/contact"
              className="p-6 rounded-2xl border border-[var(--accent-gold)]/50 bg-[var(--bg-primary)]/40 hover:bg-[var(--accent-gold)]/10 transition-all flex flex-col items-center justify-center text-center group"
            >
              <span className="text-3xl mb-2">📊</span>
              <span className="font-bold text-sm text-[var(--text-core)] group-hover:text-[var(--accent-gold)] transition-colors">
                Request a Growth &amp; SEO Audit
              </span>
              <span className="text-[11px] text-[var(--text-muted)] mt-1 font-mono">
                12-point diagnostic of your site speed, SEO &amp; booking funnel.
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs font-mono text-[var(--text-muted)]">
            <span>🔒 Strict Mutual NDA</span>
            <span>•</span>
            <span>⚡ Response within 24h</span>
            <span>•</span>
            <span>📍 Diani HQ · Coast &amp; Nairobi</span>
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTER CLOSER */}
      <FooterCloser />
    </main>
  );
}

