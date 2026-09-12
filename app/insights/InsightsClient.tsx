'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  INSIGHT_CATEGORIES,
  INSIGHT_ARTICLES,
  type InsightArticle,
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

/* ─── Terminal data per category (Kenyan context, KES/USD) ─── */
const terminalContent: Record<
  string,
  { filename: string; status: string; lines: string[] }
> = {
  'smart-web-app-ecosystems': {
    filename: 'SAFARICOM_4G_PERF.LOG',
    status: 'CRITICAL',
    lines: [
      '- Mobile LCP: 5.8s → TARGET: < 2.5s',
      '- M-Pesa STK push: NOT INTEGRATED',
      '- Monthly OTA leak: KES 340,000 detected',
    ],
  },
  'advanced-visibility-engineering': {
    filename: 'GEO_CITATION_SCAN.JSON',
    status: 'WARNING',
    lines: [
      '- AI Citation Rate: 0% in Perplexity/ChatGPT',
      '- Local Google 3-Pack: #14 (Unoptimized GBP)',
      '- Competitor citations: 38 (avg/month)',
    ],
  },
  'brand-identity-content-creation': {
    filename: 'BRAND_EQUITY.ANALYSIS',
    status: 'AUDITED',
    lines: [
      '- Visual differentiation score: 18/100',
      '- Template match rate: 92% (Canva detected)',
      '- Pricing power discount: -35% vs leaders',
    ],
  },
  'digital-presence-paid-growth': {
    filename: 'AD_SPEND_AUDIT.CSV',
    status: 'CRITICAL',
    lines: [
      '- "Boost Post" waste: 58% of ad budget',
      '- WhatsApp click-to-chat conversion: 3.4x vs web form',
      '- Cost-per-lead: KES 2,450 → target KES 1,400',
    ],
  },
  'ai-automation-sme': {
    filename: 'WHATSAPP_AI_OPS.LOG',
    status: 'ACTIVE',
    lines: [
      '- 24/7 WhatsApp AI: LIVE (15s response)',
      '- Night inquiry capture: +44% bookings',
      '- Cost delta: -KES 180,000/mo vs full-time desk',
    ],
  },
  'strategic-analytics-audits': {
    filename: 'KDPA_ATTRIBUTION.JSON',
    status: 'WARNING',
    lines: [
      '- Untracked mobile conversions: 45%',
      '- KDPA 2019 consent banner: NON-COMPLIANT',
      '- Server-side GTM: RECOMMENDED',
    ],
  },
};

export default function InsightsClient() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const filters = [
    { label: 'All Briefings (18)', slug: 'all' },
    ...INSIGHT_CATEGORIES.map((c) => ({ label: c.name, slug: c.slug })),
  ];

  const handleFilterClick = (slug: string) => {
    setActiveFilter(slug);
    setSearchQuery('');

    if (slug !== 'all') {
      const section = sectionRefs.current[slug];
      if (section) {
        const headerOffset = 160;
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
      ? INSIGHT_CATEGORIES
      : INSIGHT_CATEGORIES.filter((c) => c.slug === activeFilter);

  // Search filter across all 18 articles
  const searchResults: InsightArticle[] = searchQuery.trim()
    ? INSIGHT_ARTICLES.filter((article) => {
        const q = searchQuery.toLowerCase();
        return (
          article.title.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q) ||
          article.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          article.category.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div className="w-full">
      {/* ═══ STICKY SEARCH & FILTER BAR ═══ */}
      <div className="sticky top-[80px] z-30 w-full bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] py-4 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 scrollbar-hide flex-1">
            {filters.map((filter) => (
              <button
                key={filter.slug}
                onClick={() => handleFilterClick(filter.slug)}
                className={`py-1.5 px-4 rounded-full font-mono text-[11px] uppercase tracking-wider font-bold border transition-all duration-200 cursor-pointer flex-shrink-0 ${
                  activeFilter === filter.slug && !searchQuery
                    ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] text-white shadow-sm'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-core)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Real-time Search Input */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 18 briefings (e.g. M-Pesa, SEO, Diani)..."
              className="w-full pl-9 pr-4 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
            />
            <svg
              className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-core)]"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ═══ LIVE SEARCH RESULTS (IF QUERY ACTIVE) ═══ */}
      {searchQuery.trim() ? (
        <section className="py-16 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider block mb-1">
                SEARCH INTELLIGENCE
              </span>
              <h2 className="text-2xl font-black text-[var(--text-core)]">
                Found {searchResults.length} article{searchResults.length === 1 ? '' : 's'} matching &ldquo;{searchQuery}&rdquo;
              </h2>
            </div>

            {searchResults.length === 0 ? (
              <div className="p-12 text-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                <p className="text-sm font-mono text-[var(--text-muted)] mb-4">
                  No direct matches found for your query. Try searching for &quot;Diani&quot;, &quot;M-Pesa&quot;, &quot;WhatsApp&quot;, &quot;SEO&quot;, or &quot;pricing&quot;.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="btn-outline text-xs py-2 px-4"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/insights/${article.slug}`}
                    className="card-brand p-6 border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between hover:border-[var(--accent-gold)]/50 transition-all duration-300"
                    style={{ textDecoration: 'none' }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold">
                          {article.category}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--text-muted)]">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[var(--text-core)] mb-2 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border-subtle)]">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        /* ═══ CATEGORY SECTIONS (ALL 18 ARTICLES) ═══ */
        visibleCategories.map((category, catIndex) => {
          const articles = INSIGHT_ARTICLES.filter(
            (a) => a.categorySlug === category.slug
          );
          const featured = articles.find((a) => a.isFeatured) || articles[0];
          const standard = articles.filter((a) => a.slug !== featured?.slug);
          const terminal = terminalContent[category.slug];

          return (
            <section
              key={category.slug}
              id={`insight-${category.slug}`}
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
                <p className="text-sm text-[var(--text-muted)] font-light max-w-2xl mb-10 ml-14">
                  {category.description}
                </p>

                {/* ── Featured Hero Article ── */}
                {featured && (
                  <div className="card-brand overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[var(--border-subtle)] shadow-lg hover:border-[var(--accent-gold)]/40 transition-all duration-300 mb-8">
                    
                    {/* Left details */}
                    <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between items-start bg-[var(--bg-surface)]">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/5 font-bold">
                            Featured Strategic Briefing
                          </span>
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">
                            {featured.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-black tracking-tight mb-4 leading-tight text-[var(--text-core)]">
                          {featured.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-[var(--text-muted)] mb-6 font-light">
                          {featured.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {featured.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-primary)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/insights/${featured.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold hover:gap-3 transition-all duration-300"
                        style={{ textDecoration: 'none' }}
                      >
                        Read Full Technical Briefing
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>

                    {/* Right terminal / graphic */}
                    <div className="lg:col-span-5 bg-[#0E0E0E] text-white p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-gray-800 flex flex-col justify-between gap-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                      {featured.coverImage && (
                        <div className="w-full aspect-video relative rounded-lg overflow-hidden border border-gray-800 shadow-md">
                          <Image
                            src={featured.coverImage}
                            alt={featured.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 400px"
                          />
                        </div>
                      )}

                      {/* Terminal Telemetry Box */}
                      {terminal && (
                        <div className="rounded-lg bg-black/60 border border-gray-800 p-4 font-mono text-[11px] relative z-10">
                          <div className="flex items-center justify-between text-gray-500 mb-2 border-b border-gray-800 pb-2">
                            <span>{terminal.filename}</span>
                            <span className="text-[var(--accent-gold)] font-bold">[{terminal.status}]</span>
                          </div>
                          <div className="text-gray-300 space-y-1">
                            {terminal.lines.map((line, lIdx) => (
                              <div key={lIdx} className="line-clamp-1">{line}</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ── Standard Secondary Articles (Tier 2 & 3) ── */}
                {standard.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {standard.map((art) => (
                      <Link
                        key={art.slug}
                        href={`/insights/${art.slug}`}
                        className="card-brand p-6 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 backdrop-blur-sm flex flex-col justify-between hover:border-[var(--accent-gold)]/40 hover:shadow-md transition-all duration-300"
                        style={{ textDecoration: 'none' }}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold">
                              Regional Deep-Dive
                            </span>
                            <span className="text-[10px] font-mono text-[var(--text-muted)]">
                              {art.readTime}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-[var(--text-core)] mb-2 leading-snug">
                            {art.title}
                          </h4>

                          <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-4 line-clamp-3">
                            {art.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                          <div className="flex flex-wrap gap-1.5">
                            {art.tags.slice(0, 2).map((t) => (
                              <span
                                key={t}
                                className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-muted)]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs font-mono text-[var(--accent-gold)] font-bold">
                            Read Briefing →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
