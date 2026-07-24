'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  INSIGHT_CATEGORIES,
  INSIGHT_ARTICLES,
  type InsightArticle,
  type InsightCategory,
} from './data/insightsData';

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

/* ─── Featured card terminal content per category ─── */
const terminalContent: Record<string, { filename: string; status: string; lines: string[] }> = {
  'smart-web-app-ecosystems': {
    filename: 'PERF_AUDIT.LOG',
    status: 'CRITICAL',
    lines: [
      '- LCP: 6.2s → TARGET: < 2.5s',
      '- CLS: 0.38 → TARGET: < 0.1',
      '- Revenue leak: £28,400/month identified',
    ],
  },
  'advanced-visibility-engineering': {
    filename: 'VISIBILITY_SCAN.JSON',
    status: 'WARNING',
    lines: [
      '- AI Citation Rate: 0% (not indexed)',
      '- Entity Authority: UNREGISTERED',
      '- Competitor citations: 47 (avg/month)',
    ],
  },
  'brand-identity-content-creation': {
    filename: 'BRAND_DIFF.ANALYSIS',
    status: 'FAILED',
    lines: [
      '- Visual differentiation score: 12/100',
      '- Template match rate: 94% (Canva detected)',
      '- Perceived value gap: -£2.4M ARR',
    ],
  },
  'digital-presence-paid-growth': {
    filename: 'ROAS_REPORT.CSV',
    status: 'CRITICAL',
    lines: [
      '- ROAS post-PMax migration: 1.2x → 0.7x',
      '- Brand spend cannibalisation: 62%',
      '- Recovery protocol: INITIATED',
    ],
  },
  'ai-automation-sme': {
    filename: 'AUTOMATION_DEPLOY.LOG',
    status: 'ACTIVE',
    lines: [
      '- WhatsApp agent: LIVE (94% auto-resolve)',
      '- Admin hours saved: 240/month',
      '- Cost delta: -£8,400/month vs. headcount',
    ],
  },
  'strategic-analytics-audits': {
    filename: 'AUDIT_RESULTS.JSON',
    status: 'WARNING',
    lines: [
      '- Tracked metrics: 47 | Actionable: 3',
      '- Conversion attribution: BROKEN',
      '- Data confidence score: 22/100',
    ],
  },
};

export default function InsightsClient() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const filterBarRef = useRef<HTMLDivElement>(null);

  const filters = [
    { label: 'All Briefings', slug: 'all' },
    ...INSIGHT_CATEGORIES.map((c) => ({ label: c.name, slug: c.slug })),
  ];

  const handleFilterClick = (slug: string) => {
    setActiveFilter(slug);

    if (slug !== 'all') {
      const section = sectionRefs.current[slug];
      if (section) {
        const headerOffset = 160; // account for sticky header + filter bar
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activeFilter !== 'all') return; // only auto-highlight in "All" mode

      const scrollPos = window.scrollY + 200;
      let currentSection = '';

      INSIGHT_CATEGORIES.forEach((cat) => {
        const el = sectionRefs.current[cat.slug];
        if (el && el.offsetTop <= scrollPos) {
          currentSection = cat.slug;
        }
      });

      // Don't override activeFilter unless we're in "all" mode
      // This is just for visual feedback — we don't setActiveFilter here
      // to avoid re-renders on every scroll tick
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeFilter]);

  const visibleCategories =
    activeFilter === 'all'
      ? INSIGHT_CATEGORIES
      : INSIGHT_CATEGORIES.filter((c) => c.slug === activeFilter);

  return (
    <div className="w-full">
      {/* ═══ STICKY FILTER BAR ═══ */}
      <div
        ref={filterBarRef}
        className="sticky top-[80px] z-30 w-full bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-subtle)] py-4 px-6 lg:px-10"
      >
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto whitespace-nowrap pb-1 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.slug}
              onClick={() => handleFilterClick(filter.slug)}
              className={`py-2 px-5 rounded-full font-mono text-[11px] uppercase tracking-wider font-bold border transition-all duration-200 cursor-pointer flex-shrink-0 ${
                activeFilter === filter.slug
                  ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] text-white shadow-lg shadow-[var(--accent-gold)]/20'
                  : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-core)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* ═══ CATEGORY SECTIONS ═══ */}
      {visibleCategories.map((category, catIndex) => {
        const articles = INSIGHT_ARTICLES.filter(
          (a) => a.categorySlug === category.slug
        );
        const featured = articles.find((a) => a.isFeatured);
        const standard = articles.filter((a) => !a.isFeatured);
        const terminal = terminalContent[category.slug];

        return (
          <section
            key={category.slug}
            id={`insight-${category.slug}`}
            ref={(el) => {
              sectionRefs.current[category.slug] = el;
            }}
            className={`py-16 px-6 lg:px-10 ${
              catIndex % 2 === 1 ? 'bg-[var(--bg-surface)]/30' : ''
            }`}
          >
            <div className="max-w-7xl mx-auto">
              {/* ── Category Header ── */}
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
              <p className="text-sm text-[var(--text-muted)] font-light max-w-2xl mb-10 ml-14">
                {category.description}
              </p>

              {/* ── Featured Hero Article ── */}
              {featured && (
                <Link
                  href={`/insights/${featured.slug}`}
                  className="block group mb-8 text-decoration-none"
                >
                  <div className="card-brand overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch border border-[var(--border-subtle)] shadow-lg group-hover:border-[var(--accent-gold)]/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[var(--accent-gold)]/5">
                    {/* Left: Custom Visual Image Graphic with Overlay */}
                    <div className="bg-[#0E0E0E] min-h-[300px] relative overflow-hidden flex items-center justify-center p-6">
                      {featured.coverImage ? (
                        <Image
                          src={featured.coverImage}
                          alt={featured.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent" />

                      {/* Floating Glassmorphism Terminal Badge */}
                      <div className="relative z-10 w-full max-w-sm rounded-xl border border-gray-800 bg-[#161616]/80 backdrop-blur-md flex flex-col justify-between p-5 font-mono text-[10px] text-green-500/80 shadow-2xl">
                        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                          <span className="text-[var(--accent-gold)] font-bold">
                            {terminal?.filename || 'INSIGHT_TELEMETRY.LOG'}
                          </span>
                          <span
                            className={`font-bold ${
                              terminal?.status === 'ACTIVE'
                                ? 'text-green-500'
                                : terminal?.status === 'WARNING'
                                ? 'text-amber-500'
                                : 'text-red-500'
                            }`}
                          >
                            {terminal?.status || 'VERIFIED'}
                          </span>
                        </div>
                        <div className="space-y-1.5 my-3 text-[11px]">
                          {terminal?.lines.map((line, i) => (
                            <div key={i} className="opacity-90">
                              {line}
                            </div>
                          ))}
                        </div>
                        <div className="text-gray-500 text-right text-[9px] uppercase tracking-widest">
                          GOLDFISH_DIGITAL // BRIEFING
                        </div>
                      </div>
                    </div>

                    {/* Right: Article Copy */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center items-start bg-[var(--bg-surface)]">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold">
                          {featured.readTime}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[var(--accent-gold)]/40" />
                        <span className="text-[11px] font-mono text-[var(--accent-gold)]/60 uppercase tracking-wider font-bold">
                          Featured Briefing
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-black tracking-tight mb-4 leading-snug text-[var(--text-core)] group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                        {featured.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--text-muted)] mb-6 font-light">
                        {featured.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featured.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-primary)]/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold group-hover:gap-3 transition-all duration-300">
                        Read Deep-Dive Briefing
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* ── Standard Article Cards ── */}
              {standard.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {standard.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/insights/${article.slug}`}
                      className="block group text-decoration-none"
                    >
                      <div className="card-brand overflow-hidden flex flex-col justify-between items-start bg-[var(--bg-surface)] border border-[var(--border-subtle)] group-hover:border-[var(--accent-gold)]/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[var(--accent-gold)]/5 h-full">
                        
                        {/* Article Header Image */}
                        {article.coverImage && (
                          <div className="w-full aspect-video relative overflow-hidden bg-[#0E0E0E]">
                            <Image
                              src={article.coverImage}
                              alt={article.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-black/30" />
                            <div className="absolute top-3 left-3 text-[10px] font-mono text-[var(--accent-gold)] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-[var(--accent-gold)]/20 uppercase tracking-wider font-bold">
                              {article.readTime}
                            </div>
                          </div>
                        )}

                        <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3">
                              {article.category}
                            </div>
                            <h3 className="text-[17px] font-extrabold text-[var(--text-core)] tracking-tight mb-4 leading-snug group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                              {article.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-[var(--text-muted)] font-light">
                              {article.excerpt}
                            </p>
                          </div>

                          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]/50 flex items-center justify-between w-full">
                            <div className="flex flex-wrap gap-1.5">
                              {article.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-core)] group-hover:text-[var(--accent-gold)] transition-colors duration-200 uppercase tracking-wider font-bold flex-shrink-0">
                              Read →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
