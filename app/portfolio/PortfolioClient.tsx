'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  BUSINESS_OBJECTIVES,
  type ProjectCaseStudy,
} from './data/portfolioData';

/* ─── Category Icons (inline SVGs) ─── */
const categoryIcons: Record<string, React.ReactNode> = {
  'smart-web-app-ecosystems': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  'advanced-visibility-engineering': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  'brand-identity-content-creation': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  'digital-presence-paid-growth': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  'ai-automation-sme': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  'strategic-analytics-audits': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
    </svg>
  ),
};

export default function PortfolioClient() {
  const [filterMode, setFilterMode] = useState<'capability' | 'objective'>('capability');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeObjective, setActiveObjective] = useState<string>('all');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const capabilityFilters = [
    { label: 'All Capabilities', slug: 'all' },
    ...PORTFOLIO_CATEGORIES.map((c) => ({ label: c.name, slug: c.slug })),
  ];

  const handleCapabilityClick = (slug: string) => {
    setActiveFilter(slug);
    if (slug !== 'all') {
      const section = sectionRefs.current[slug];
      if (section) {
        const headerOffset = 170;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const visibleCategories =
    activeFilter === 'all'
      ? PORTFOLIO_CATEGORIES
      : PORTFOLIO_CATEGORIES.filter((c) => c.slug === activeFilter);

  // Projects filtered by objective if in objective mode
  const filteredObjectiveProjects =
    activeObjective === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.objectiveSlug === activeObjective);

  const testimonials = [
    {
      quote:
        'Goldfish transformed our direct bookings. By cutting our website load time from over 5 seconds to 0.7s and streamlining M-Pesa reservations, we reduced our OTA commission loss and reclaimed over KES 3.2M in direct bookings in our first season.',
      author: 'Managing Director & Owner',
      company: 'Coastal Luxury Boutique Resort, Diani Beach',
    },
    {
      quote:
        'Their WhatsApp AI reservation bot and CRM integration saved our team 240+ admin hours a month. Inquiries coming in at 11 PM are answered within 15 seconds, and direct deposits arrive while our desk staff is asleep.',
      author: 'Operations Director',
      company: 'High-End Coastal Villa Group, Kenya',
    },
    {
      quote:
        'Unlike agencies that pitch vague vanity metrics, Goldfish audited our Google Ads and fixed broken attribution. They cut our cost-per-lead by 42% and gave us complete clarity on our return on marketing spend.',
      author: 'Commercial Lead',
      company: 'Clean Energy & Solar Solutions SME, Kenya',
    },
  ];

  return (
    <div className="w-full">
      {/* ═══ STICKY FILTER BAR WITH DUAL PERSPECTIVE ═══ */}
      <div className="sticky top-[80px] z-30 w-full bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] py-4 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          {/* Perspective Selector */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                Filter Perspective:
              </span>
              <div className="inline-flex rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-1">
                <button
                  onClick={() => setFilterMode('capability')}
                  className={`px-3 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                    filterMode === 'capability'
                      ? 'bg-[var(--accent-gold)] text-white shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
                  }`}
                >
                  By Capability (6)
                </button>
                <button
                  onClick={() => setFilterMode('objective')}
                  className={`px-3 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                    filterMode === 'objective'
                      ? 'bg-[var(--accent-gold)] text-white shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
                  }`}
                >
                  By Business Goal (4)
                </button>
              </div>
            </div>

            <span className="text-[11px] font-mono text-[var(--text-muted)] hidden sm:inline">
              Audited Case Studies // Kenya & East Africa
            </span>
          </div>

          {/* Sub-Filter Pills */}
          {filterMode === 'capability' ? (
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 scrollbar-hide">
              {capabilityFilters.map((filter) => (
                <button
                  key={filter.slug}
                  onClick={() => handleCapabilityClick(filter.slug)}
                  className={`py-1.5 px-4 rounded-full font-mono text-[11px] uppercase tracking-wider font-bold border transition-all duration-200 cursor-pointer flex-shrink-0 ${
                    activeFilter === filter.slug
                      ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] text-white shadow-sm'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-core)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 scrollbar-hide">
              {BUSINESS_OBJECTIVES.map((obj) => (
                <button
                  key={obj.slug}
                  onClick={() => setActiveObjective(obj.slug)}
                  className={`py-1.5 px-4 rounded-full font-mono text-[11px] uppercase tracking-wider font-bold border transition-all duration-200 cursor-pointer flex-shrink-0 ${
                    activeObjective === obj.slug
                      ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] text-white shadow-sm'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-core)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]'
                  }`}
                >
                  {obj.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ═══ CASE STUDY CARDS VIEW ═══ */}
      {filterMode === 'capability' ? (
        // Render Category Groupings
        visibleCategories.map((category, catIndex) => {
          const projects = PORTFOLIO_PROJECTS.filter(
            (p) => p.categorySlug === category.slug
          );
          const heroProject = projects.find((p) => p.isHero);
          const secondaryProject = projects.find((p) => !p.isHero);

          return (
            <section
              key={category.slug}
              id={`work-${category.slug}`}
              ref={(el) => {
                sectionRefs.current[category.slug] = el;
              }}
              className={`py-16 px-6 lg:px-10 border-b border-[var(--border-subtle)] ${
                catIndex % 2 === 1 ? 'bg-[var(--bg-surface)]/30' : ''
              }`}
            >
              <div className="max-w-7xl mx-auto">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center text-[var(--accent-gold)]">
                    {categoryIcons[category.slug]}
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-[var(--text-core)] leading-tight">
                      {category.name}
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-muted)] font-light max-w-2xl mb-12 ml-14">
                  {category.description}
                </p>

                <div className="flex flex-col gap-10">
                  {/* ── HERO CASE STUDY ── */}
                  {heroProject && (
                    <div className="card-brand overflow-hidden grid grid-cols-1 lg:grid-cols-10 items-stretch border border-[var(--border-subtle)] shadow-lg hover:border-[var(--accent-gold)]/40 transition-all duration-300">
                      {/* Left details */}
                      <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between items-start bg-[var(--bg-surface)]">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="text-eyebrow text-xs font-mono">
                              {heroProject.tagLabel}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] border border-[var(--accent-gold)]/20">
                              {heroProject.provenanceTag}
                            </span>
                          </div>

                          <h3 className="text-xl lg:text-2xl font-black tracking-tight mb-4 leading-tight text-[var(--text-core)]">
                            {heroProject.title}
                          </h3>

                          <p className="text-sm leading-relaxed text-[var(--text-muted)] mb-6 font-light">
                            {heroProject.description}
                          </p>

                          {/* Actionable Takeaway Container */}
                          <div className="p-4 rounded-lg bg-[var(--accent-gold)]/5 border border-[var(--accent-gold)]/20 mb-8">
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[var(--accent-gold)]">
                                Strategic Takeaway For Your Business
                              </span>
                            </div>
                            <p className="text-xs text-[var(--text-core)] font-normal leading-relaxed">
                              {heroProject.keyActionableTakeaway}
                            </p>
                          </div>
                        </div>

                        <Link
                          href={`/portfolio/${heroProject.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold hover:gap-3 transition-all duration-300"
                          style={{ textDecoration: 'none' }}
                        >
                          Read Architecture Teardown
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>

                      {/* Right stats dashboard */}
                      <div className="lg:col-span-4 bg-[#0E0E0E] text-white p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-gray-800 flex flex-col justify-between gap-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                        <div className="flex items-center justify-between text-[9px] font-mono text-gray-500 uppercase tracking-widest relative z-10">
                          <span>AUDITED TELEMETRY</span>
                          <span className="text-green-400">● VERIFIED ROI</span>
                        </div>

                        <div className="flex flex-col gap-6 relative z-10">
                          {heroProject.metrics.map((metric, idx) => (
                            <div key={idx} className="flex flex-col gap-1 border-l-2 border-[var(--accent-gold)] pl-4">
                              <span className="text-3xl font-black font-mono text-[var(--accent-gold)] tracking-tighter">
                                {metric.value}
                              </span>
                              <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest leading-normal">
                                {metric.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Before/After Contrast Pill */}
                        {heroProject.beforeAfterComparison && (
                          <div className="p-3.5 rounded bg-black/60 border border-gray-800 relative z-10">
                            <div className="text-[9px] font-mono text-gray-500 uppercase tracking-wider mb-2">
                              BENCHMARK SHIFT
                            </div>
                            <div className="flex items-center justify-between text-xs font-mono">
                              <div>
                                <span className="text-red-400 font-bold block">{heroProject.beforeAfterComparison.beforeMetric}</span>
                                <span className="text-[9px] text-gray-500">{heroProject.beforeAfterComparison.beforeLabel}</span>
                              </div>
                              <span className="text-gray-600 font-bold">→</span>
                              <div className="text-right">
                                <span className="text-green-400 font-bold block">{heroProject.beforeAfterComparison.afterMetric}</span>
                                <span className="text-[9px] text-gray-500">{heroProject.beforeAfterComparison.afterLabel}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* ── SECONDARY CASE STUDY ── */}
                  {secondaryProject && (
                    <div className="card-brand p-8 lg:p-10 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent-gold)]/40 hover:shadow-md">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="max-w-3xl">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="text-eyebrow text-[10px] font-mono">
                              {secondaryProject.tagLabel}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] border border-[var(--accent-gold)]/20">
                              {secondaryProject.provenanceTag}
                            </span>
                          </div>
                          <h4 className="text-lg font-black tracking-tight text-[var(--text-core)] mb-3">
                            {secondaryProject.title}
                          </h4>
                          <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed mb-4">
                            {secondaryProject.description}
                          </p>
                          <p className="text-xs text-[var(--text-core)]/90 font-mono italic">
                            💡 Takeaway: {secondaryProject.keyActionableTakeaway}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 flex-shrink-0">
                          {/* Secondary project mini stats summary */}
                          <div className="flex gap-6 border-l border-[var(--border-subtle)] pl-6">
                            {secondaryProject.metrics.slice(0, 2).map((metric, idx) => (
                              <div key={idx} className="flex flex-col">
                                <span className="text-lg font-black font-mono text-[var(--text-core)]">
                                  {metric.value}
                                </span>
                                <span className="text-[9px] text-[var(--text-muted)] font-mono uppercase tracking-wider">
                                  {metric.label.split(' ').slice(0, 2).join(' ')}
                                </span>
                              </div>
                            ))}
                          </div>

                          <Link
                            href={`/portfolio/${secondaryProject.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-gold)] hover:text-[var(--accent-gold-hover)] transition-colors duration-200 uppercase tracking-wider font-bold"
                            style={{ textDecoration: 'none' }}
                          >
                            Teardown Blueprint →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })
      ) : (
        // Render Objective View
        <section className="py-16 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-eyebrow text-xs mb-2 block font-mono">GOAL-DRIVEN CASE STUDIES</span>
              <h2 className="text-2xl lg:text-3xl font-black text-[var(--text-core)]">
                Selected Work by Business Outcome
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredObjectiveProjects.map((project) => (
                <div
                  key={project.slug}
                  className="card-brand p-8 border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between hover:border-[var(--accent-gold)]/50 transition-all duration-300"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono text-[var(--accent-gold)] font-bold uppercase">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                        {project.provenanceTag}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-[var(--text-core)] mb-3 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Metrics grid */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] mb-6">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-base font-black font-mono text-[var(--accent-gold)]">
                            {m.value}
                          </span>
                          <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-wider line-clamp-1">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-[var(--text-core)] font-normal leading-relaxed mb-6">
                      <strong className="text-[var(--accent-gold)]">Key Takeaway:</strong> {project.keyActionableTakeaway}
                    </p>
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold hover:gap-3 transition-all"
                    style={{ textDecoration: 'none' }}
                  >
                    View Architecture Blueprint →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ CLIENT TESTIMONIALS ═══ */}
      <section className="section-padding bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-eyebrow mb-3 block">REGIONAL VALIDATION</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Real Impact for Kenyan & East African Businesses
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light max-w-xl mx-auto mt-3">
              Unfiltered feedback from founders and operators who partner with Goldfish to protect revenue and automate operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/10 flex flex-col justify-between min-h-[250px] hover:border-[var(--accent-gold)]/30 transition-all"
              >
                <p className="text-sm leading-relaxed italic text-[var(--text-core)] mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 border-t border-[var(--border-subtle)] pt-6">
                  <div className="w-10 h-10 rounded bg-[var(--bg-surface)] border border-[var(--accent-gold)]/30 flex items-center justify-center font-mono font-bold text-xs text-[var(--accent-gold)]">
                    {t.company.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[var(--text-core)]">{t.author}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] mt-0.5">
                      {t.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
