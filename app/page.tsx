import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CodeTerminal from './components/CodeTerminal';
import FooterCloser from './components/FooterCloser';
import TestimonialsSection from './components/TestimonialsSection';
import { servicesData } from './services/data/servicesData';

export const metadata: Metadata = {
  title: 'Digital Marketing & AI Agency Kenya | Goldfish Marketing',
  description:
    'Diani & Kenya premier digital marketing, high-converting web design, SEO, and AI automation agency for growing SMEs & hospitality brands.',
  alternates: {
    canonical: 'https://www.goldfishmarketing.co.ke',
  },
};

export default function Home() {
  const serviceIcons: Record<string, React.ReactNode> = {
    "smart-web-app-ecosystems": (
      <svg className="w-8 h-8 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    "advanced-visibility-engineering": (
      <svg className="w-8 h-8 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
      </svg>
    ),
    "brand-identity-content-creation": (
      <svg className="w-8 h-8 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    "digital-presence-paid-growth-management": (
      <svg className="w-8 h-8 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    "ai-automation-sme": (
      <svg className="w-8 h-8 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    "strategic-analytics-audits": (
      <svg className="w-8 h-8 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  };

  const servicesList = Object.values(servicesData);

  const clientLogos = [
    'LUXURY RESORTS & VILLAS',
    'GASTRONOMY GROUPS',
    'CORPORATE LEGAL',
    'COASTAL RETREATS',
    'E-COMMERCE BRANDS',
    'NGO INFRASTRUCTURE',
    'REAL ESTATE DEVELOPERS',
    'CREATIVE ECONOMIES',
  ];

  const insightTeasers = [
    {
      tag: '12 Min Read | Technical Architecture',
      title: 'Why Traditional RPA Fails the Modern Enterprise—And the Agentic Architectures Replacing It.',
      excerpt: 'Discover why deterministic Robotic Process Automation breaks under unstructured data arrays, and how to build self-healing agent pipelines.'
    },
    {
      tag: '8 Min Read | Automation ROI',
      title: 'Measuring the True Cost of Tech Debt: Internal Tooling vs. Custom Infrastructure.',
      excerpt: 'A cold financial evaluation of what happens when engineering teams build internal automation scripts instead of production-ready pipelines.'
    },
    {
      tag: '10 Min Read | Industry Shifts',
      title: 'Technical Sovereignty: The Shift from Proprietary APIs to Localized Open-Source Models.',
      excerpt: 'Why enterprises are migrating workflows off closed APIs to fine-tuned, on-premise models to secure long-term data privacy.'
    }
  ];

  return (
    <main className="w-full flex flex-col relative overflow-hidden">
      
      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO — PRO MAX AMBIENT LUXURY
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center py-20 px-6 lg:px-10">
        
        {/* Animated Background Ambient Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[550px] h-[550px] bg-[var(--accent-gold)]/10 rounded-full filter blur-[120px] pointer-events-none orb-animate-1" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none orb-animate-2" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Outcome Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-accent)] bg-[var(--bg-surface)]/80 text-[var(--accent-gold)] text-[11px] font-mono tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Premier Digital Growth &amp; AI Systems • Diani • Nairobi • Coast</span>
            </div>

            <h1 className="text-h1 font-black leading-[1.12] tracking-tight mb-6">
              We Engineer <span className="gradient-text-gold">Market Dominance</span>: Kenya&apos;s Premier Web Systems, SEO &amp; AI Agency.
            </h1>

            <p className="text-body-lg text-[var(--text-muted)] mb-4 leading-relaxed font-light max-w-2xl">
              Local insight meets global engineering. We build high-converting <Link href="/services/smart-web-app-ecosystems" className="underline hover:text-[var(--accent-gold)] transition-colors">web ecosystems</Link>, direct booking engines that cut OTA commissions for hospitality, and <Link href="/services/ai-automation-sme" className="underline hover:text-[var(--accent-gold)] transition-colors">AI automation</Link> that eliminates manual admin for growing Kenyan SMEs.
            </p>
            <p className="text-body text-[var(--text-muted)] mb-8 leading-relaxed max-w-2xl font-normal">
              Headquartered in <Link href="/diani" className="underline hover:text-[var(--accent-gold)] transition-colors">Diani Beach</Link> and serving ambitious brands across <Link href="/kenya" className="underline hover:text-[var(--accent-gold)] transition-colors">Kenya</Link> — whether your website isn&apos;t generating enquiries, your ads are burning budget, or your team is drowning in repetitive WhatsApp chats — we engineer the fix.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-3">
              <Link href="/contact" className="btn-primary w-full sm:w-auto shadow-md">
                Request a Commercial Growth Audit
              </Link>
              <Link href="/portfolio" className="btn-outline w-full sm:w-auto">
                Explore Client Case Studies →
              </Link>
            </div>
            <p className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-2">
              <span>100% Confidential</span>
              <span>•</span>
              <span>Actionable 12-Point Revenue Diagnostic</span>
              <span>•</span>
              <span>Zero Sales Pressure</span>
            </p>
          </div>
          
          {/* Right Column — Dual Mode Terminal (5 cols) */}
          <div className="lg:col-span-5 w-full aspect-square max-w-lg mx-auto">
            <CodeTerminal />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TRUST STRIP
      ═══════════════════════════════════════════════════════ */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-primary)] py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                </svg>
              ),
              label: 'Local Soul. Global Code.',
              sub: 'Diani roots, international standards'
            },
            {
              icon: (
                <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              label: 'Sub-Second Velocity',
              sub: '95+ Lighthouse score guaranteed'
            },
            {
              icon: (
                <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              label: 'KDPA & GDPR Compliant',
              sub: 'Data Protection Act 2019 verified'
            },
            {
              icon: (
                <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
              label: 'Measurable Commercial ROI',
              sub: 'Direct bookings, pipeline & saved hours'
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-sm font-bold text-[var(--text-core)]">{item.label}</p>
              <p className="text-[11px] text-[var(--text-muted)]">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: INFINITE SOCIAL PROOF MARQUEE TICKER
      ═══════════════════════════════════════════════════════ */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-6 text-center">
            SPECIALIZED GROWTH &amp; AUTOMATION SOLUTIONS FOR HIGH-VALUE SECTORS
          </p>

          <div className="marquee-container py-2">
            <div className="marquee-track">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
                  <span className="font-mono font-extrabold text-xs tracking-widest uppercase text-[var(--text-core)]">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: THE CORE THESIS
      ═══════════════════════════════════════════════════════ */}
      <section className="section-padding px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block w-12 h-1 bg-[var(--accent-gold)] rounded mb-8" />
          <h2 className="text-h2 font-black tracking-tight mb-8 leading-snug">
            Legacy Digital Infrastructure Cannot Keep Pace With Modern Market Demands.
          </h2>
          <div className="space-y-6 text-body text-[var(--text-muted)] text-left leading-relaxed">
            <p>
              Most businesses are leaking visibility and profitability through fragmented digital platforms, manual bottlenecks, and underperforming marketing campaigns. Teams waste critical hours building fragile solutions or managing inefficient ad spends, scaling overhead instead of throughput.
            </p>
            <p>
              We engineer the antidote. By deploying custom, high-performance web systems, advanced visibility (SEO/GEO/CRO) protocols, and deterministic AI automation pipelines, we eliminate friction at the source. We don&apos;t offer generic software wrappers or abstract consulting templates; we deliver high-fidelity digital infrastructure that converts operational bottlenecks into absolute competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: CORE ENGINE — BENTO GRID LAYOUT
      ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--bg-surface)] border-y border-[var(--border-subtle)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-eyebrow mb-3 block">CORE ENGINE</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Our Six Foundational Pillars
            </h2>
            <p className="text-caption text-[var(--text-muted)] mt-4">
              Integrated service capability matrices engineered to scale your digital presence and operations.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl p-8 bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/60 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                {/* Top accent glow line */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                <div>
                  <div className="p-3 bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] w-fit mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {serviceIcons[service.slug]}
                  </div>

                  <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-widest block mb-2 font-bold">
                    Pillar 0{idx + 1}
                  </span>

                  <h3 className="text-h3 font-bold tracking-tight text-[var(--text-core)] mb-4 leading-snug group-hover:text-[var(--accent-gold)] transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-caption leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--border-subtle)]/50">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[12px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Explore Capability
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="btn-secondary">
              View All Capability Hubs
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════ */}
      <TestimonialsSection />

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: FLAGSHIP CASE STUDY
      ═══════════════════════════════════════════════════════ */}
      <section className="section-padding px-6">
        <div className="max-w-7xl mx-auto mb-10 text-center">
          <span className="text-eyebrow text-xs mb-2 block font-mono">PROVEN COMMERCIAL IMPACT</span>
          <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
            Featured Hospitality Case Study
          </h2>
        </div>

        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-10 items-stretch border border-[var(--border-subtle)] shadow-2xl">
          {/* Metrics Dashboard Display */}
          <div className="lg:col-span-6 bg-[#0E0E0E] text-white p-8 lg:p-12 flex flex-col justify-center gap-8 relative">
            <div className="text-[9px] font-mono text-[var(--accent-gold)] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Verified Deployment • Diani Beach, Kenya</span>
            </div>

            <h3 className="text-h2 font-black tracking-tight text-white leading-tight">
              Cutting OTA Commission Leakage: +58% Direct Bookings in 90 Days.
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left mt-2">
              <div className="flex flex-col gap-2">
                <span className="text-emerald-400 text-4xl lg:text-5xl font-black font-mono tracking-tighter">
                  58%
                </span>
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest leading-normal">
                  Direct Booking Ratio (Up from 14%)
                </span>
              </div>
              <div className="flex flex-col gap-2 border-y sm:border-y-0 sm:border-x border-gray-800 py-6 sm:py-0 sm:px-6">
                <span className="text-[var(--accent-gold)] text-4xl lg:text-5xl font-black font-mono tracking-tighter">
                  1.2s
                </span>
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest leading-normal">
                  Mobile Load Speed (-76% Latency)
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white text-4xl lg:text-5xl font-black font-mono tracking-tighter">
                  KES 3.2M
                </span>
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest leading-normal">
                  Annual OTA Fees Reclaimed
                </span>
              </div>
            </div>
          </div>

          {/* Copy (40% Desktop) */}
          <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center items-start bg-[var(--bg-surface)]">
            <span className="text-eyebrow text-xs mb-3 font-mono">
              HOSPITALITY DIRECT REVENUE ENGINE
            </span>
            <p className="text-body text-[var(--text-muted)] mb-4 leading-relaxed">
              We engineered a custom Next.js direct booking platform with instant M-Pesa STK push and 24/7 WhatsApp AI concierge for a boutique coastal resort, liberating them from predatory 20% OTA commission cuts.
            </p>
            <div className="p-3 rounded-lg bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] mb-6 text-[11px] font-mono text-[var(--accent-gold)]">
              AUDITED PROVENANCE: Verified via Booking Engine Telemetry &amp; GA4 Audit
            </div>
            <Link href="/portfolio/ecommerce-speed-replatforming" className="btn-primary w-full sm:w-auto text-xs py-3 px-6 shadow-md">
              Explore Full Diani Resort Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6: INSIGHTS TEASER
      ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-eyebrow mb-3 block">OPERATIONAL KNOWLEDGE</span>
            <h2 className="text-h2 font-black tracking-tight">
              Technical Briefings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tag: '12 Min Read | Technical Architecture', title: 'Why Traditional RPA Fails the Modern Enterprise—And the Agentic Architectures Replacing It.', excerpt: 'Discover why deterministic Robotic Process Automation breaks under unstructured data arrays, and how to build self-healing agent pipelines.', slug: 'sme-automation-playbook-5-workflows' },
              { tag: '8 Min Read | SEO & Visibility', title: 'Why Google\'s AI Overviews Are Killing Your Organic Traffic — And How to Get Cited Instead.', excerpt: 'AI is now answering your customers\' questions before they ever reach your website. Here\'s how to get cited and stay visible.', slug: 'google-ai-overviews-killing-organic-traffic' },
              { tag: '10 Min Read | Web Performance', title: 'Your Website Loads in 6 Seconds — Here\'s Exactly How Much Revenue That\'s Costing You.', excerpt: 'A data-driven breakdown of how page speed directly impacts bounce rate, conversion rate, and bottom-line revenue.', slug: 'site-speed-killing-revenue' },
            ].map((insight, idx) => (
              <article key={idx} className="flex flex-col justify-between p-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/20 hover:border-[var(--accent-gold)] transition-colors duration-300">
                <div>
                  <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider block mb-4">
                    {insight.tag}
                  </span>
                  <h3 className="text-[18px] font-bold text-[var(--text-core)] tracking-tight mb-4 leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-caption leading-relaxed">
                    {insight.excerpt}
                  </p>
                </div>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="inline-flex items-center gap-1 text-[13px] font-mono text-[var(--text-core)] hover:text-[var(--accent-gold)] transition-colors duration-200 mt-6 uppercase tracking-wider font-bold"
                >
                  Read Briefing →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7: GLOBAL FOOTER CLOSER
      ═══════════════════════════════════════════════════════ */}
      <FooterCloser />

    </main>
  );
}
