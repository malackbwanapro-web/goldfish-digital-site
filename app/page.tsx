import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CodeTerminal from './components/CodeTerminal';
import FooterCloser from './components/FooterCloser';
import { servicesData } from './services/data/servicesData';

export const metadata: Metadata = {
  title: 'Custom AI Systems & Enterprise Automation Infrastructure | Goldfish Digital',
  description:
    'We design, deploy, and integrate production-ready AI pipelines and deterministic workflows to eliminate structural overhead for modern enterprises.',
};

export default function Home() {
  // Map icons to the new 6 agency pillars
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
    <main className="w-full flex flex-col">
      
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center py-20 px-6 lg:px-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-gold)]/5 rounded-full filter blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left">
            <span className="text-eyebrow mb-4">
              CREATIVE AGENCY & AI SYSTEMS INTEGRATION
            </span>
            <h1 className="text-h1 font-black leading-[1.15] tracking-tight text-[var(--text-core)] mb-6">
              We Build Smart Digital Ecosystems & Custom AI Infrastructure.
            </h1>
            <p className="text-body-lg text-[var(--text-muted)] mb-10 leading-relaxed font-light">
              From high-performance web platforms and advanced visibility (SEO/GEO) to production-ready AI automation, Goldfish Digital designs and integrates high-throughput solutions that eliminate overhead and scale your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="btn-primary w-full sm:w-auto shadow-md">
                Book a Free Audit
              </Link>
              <Link href="/contact" className="btn-outline w-full sm:w-auto">
                Book a Free Consultation
              </Link>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl relative">
            <CodeTerminal />
          </div>
        </div>
      </section>

      {/* SECTION 2: SOCIAL PROOF */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-8">
            TRUSTED BY DESIGN, ENGINEERING, AND OPERATIONS TEAMS AT
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-40">
            <span className="font-black text-sm tracking-widest uppercase text-[var(--text-core)]">LOGISTICS LABS</span>
            <span className="font-black text-sm tracking-widest uppercase text-[var(--text-core)]">VERTEX GLOBAL</span>
            <span className="font-black text-sm tracking-widest uppercase text-[var(--text-core)]">APEX CORP</span>
            <span className="font-black text-sm tracking-widest uppercase text-[var(--text-core)]">NEXUS FLOW</span>
            <span className="font-black text-sm tracking-widest uppercase text-[var(--text-core)]">SAASGRID</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE CORE THESIS */}
      <section className="section-padding px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block w-12 h-1 bg-[var(--accent-gold)] rounded mb-8" />
          <h2 className="text-h2 font-extrabold tracking-tight mb-8 leading-snug">
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

      {/* SECTION 4: THE SERVICES PREVIEW GRID */}
      <section className="section-padding bg-[var(--bg-surface)] border-y border-[var(--border-subtle)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-eyebrow mb-3 block">CORE ENGINE</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Our Six Foundational Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => (
              <div key={idx} className="card-brand p-8 flex flex-col items-start justify-between min-h-[300px]">
                <div className="flex flex-col items-start gap-5">
                  <div className="p-3 bg-[var(--bg-primary)]/50 rounded-lg border border-[var(--border-subtle)]">
                    {serviceIcons[service.slug]}
                  </div>
                  <h3 className="text-h3 font-bold tracking-tight text-[var(--text-core)] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-caption leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-[13px] font-mono text-[var(--accent-gold)] hover:underline mt-6 uppercase tracking-wider font-bold"
                >
                  Explore Capability →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: FLAGSHIP CASE STUDY */}
      <section className="section-padding px-6">
        <div className="max-w-7xl mx-auto card-brand overflow-hidden grid grid-cols-1 lg:grid-cols-10 items-stretch border border-[var(--border-subtle)]">
          {/* Metrics Dashboard Display (60% Desktop) */}
          <div className="lg:col-span-6 bg-[#0E0E0E] text-white p-8 lg:p-12 flex flex-col justify-center gap-8 relative">
            <div className="absolute top-4 left-4 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
              Live Case Execution Metrics
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left mt-4">
              <div className="flex flex-col gap-2">
                <span className="text-[var(--accent-gold)] text-4xl lg:text-5xl font-black font-mono tracking-tighter">
                  -94%
                </span>
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest leading-normal">
                  Manual Processing Time
                </span>
              </div>
              <div className="flex flex-col gap-2 border-y sm:border-y-0 sm:border-x border-gray-800 py-6 sm:py-0 sm:px-6">
                <span className="text-white text-4xl lg:text-5xl font-black font-mono tracking-tighter">
                  12 Days
                </span>
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest leading-normal">
                  Architecture to Production
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-blue-400 text-4xl lg:text-5xl font-black font-mono tracking-tighter">
                  $180k
                </span>
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest leading-normal">
                  Overhead Saved / Quarter
                </span>
              </div>
            </div>
          </div>

          {/* Copy (40% Desktop) */}
          <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center items-start bg-[var(--bg-surface)]">
            <span className="text-eyebrow text-xs mb-3 font-mono">
              WORKFLOW AUTOMATION / GLOBAL SUPPLY CHAIN
            </span>
            <h3 className="text-h2 font-black tracking-tight mb-6 leading-tight">
              Automating Multi-National Invoice Reconciliation for Scale.
            </h3>
            <Link href="/portfolio" className="btn-primary w-full sm:w-auto text-xs py-2.5 px-6 shadow-sm">
              Read Full Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: INSIGHTS TEASER */}
      <section className="section-padding bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-eyebrow mb-3 block">OPERATIONAL KNOWLEDGE</span>
            <h2 className="text-h2 font-black tracking-tight">
              Technical Briefings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightTeasers.map((insight, idx) => (
              <article key={idx} className="flex flex-col justify-between p-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/10">
                <div>
                  <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider block mb-4">
                    {insight.tag}
                  </span>
                  <h4 className="text-[18px] font-bold text-[var(--text-core)] tracking-tight mb-4 leading-snug">
                    {insight.title}
                  </h4>
                  <p className="text-caption leading-relaxed">
                    {insight.excerpt}
                  </p>
                </div>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-1 text-[13px] font-mono text-[var(--text-core)] hover:text-[var(--accent-gold)] transition-colors duration-200 mt-6 uppercase tracking-wider font-bold"
                >
                  Read Briefing →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: GLOBAL FOOTER CLOSER */}
      <FooterCloser />

    </main>
  );
}
