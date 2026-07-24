import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  INSIGHT_ARTICLES,
  getArticleBySlug,
  getCategoryBySlug,
} from '../data/insightsData';
import FooterCloser from '../../components/FooterCloser';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return INSIGHT_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return { title: 'Article Not Found | Goldfish Digital' };
  }
  return {
    title: `${article.title} | Goldfish Digital Insights`,
    description: article.excerpt,
  };
}

export default function InsightArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const category = getCategoryBySlug(article.categorySlug);

  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* ═══ HERO / ARTICLE HEADER ═══ */}
      <section className="section-padding px-6 lg:px-10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-gold)]/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-gold)]/3 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/insights"
              className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider hover:text-[var(--accent-gold)] transition-colors duration-200"
            >
              Insights
            </Link>
            <span className="text-[var(--text-muted)]/40 text-[10px]">
              /
            </span>
            <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          {/* Category badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider px-3 py-1.5 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/5">
              {article.readTime}
            </span>
            {article.isFeatured && (
              <span className="text-[11px] font-mono text-white uppercase tracking-wider px-3 py-1.5 rounded-full bg-[var(--accent-gold)]">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 leading-tight max-w-3xl">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-2xl font-light mb-8">
            {article.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-surface)]/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Article Hero Banner Graphic */}
          {article.coverImage && (
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-[var(--border-accent)]/30 shadow-2xl bg-[#0E0E0E]">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/20" />
            </div>
          )}
        </div>
      </section>

      {/* ═══ COMING SOON CARD ═══ */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="card-brand p-12 lg:p-16 text-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] relative overflow-hidden">
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="relative z-10">
              {/* Status indicator */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />
                <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold">
                  In Production
                </span>
              </div>

              {/* Terminal-style box */}
              <div className="max-w-md mx-auto bg-[#0E0E0E] rounded-lg border border-gray-800 p-6 mb-8 font-mono text-[12px] text-left">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-auto text-gray-600 text-[10px]">
                    goldfish_digital
                  </span>
                </div>
                <div className="text-green-500/70 space-y-1">
                  <div>
                    <span className="text-gray-500">$</span> briefing compile --target=&quot;{article.slug}&quot;
                  </div>
                  <div className="text-amber-500/70">
                    → Research phase: COMPLETE
                  </div>
                  <div className="text-amber-500/70">
                    → Technical review: IN PROGRESS
                  </div>
                  <div className="text-gray-500">
                    → Publication: PENDING
                  </div>
                  <div className="mt-3 text-[var(--accent-gold)]">
                    Estimated drop: Coming soon_
                  </div>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-[var(--text-core)] mb-4">
                This Briefing Is Currently In Production.
              </h2>
              <p className="text-sm text-[var(--text-muted)] font-light max-w-lg mx-auto mb-10 leading-relaxed">
                Our technical team is finalising the research, data validation, and strategic
                frameworks for this deep-dive. Drop your email below and we&apos;ll notify
                you the moment it goes live.
              </p>

              {/* Email capture */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full sm:flex-1 px-5 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 font-mono text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-200"
                />
                <button className="btn-primary w-full sm:w-auto py-3 px-6 text-xs whitespace-nowrap shadow-md">
                  Notify Me
                </button>
              </div>

              <p className="text-[10px] font-mono text-[var(--text-muted)]/50 uppercase tracking-wider">
                No spam. One notification. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BACK TO INSIGHTS CTA ═══ */}
      <section className="py-16 px-6 lg:px-10 border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-black tracking-tight text-[var(--text-core)] mb-1">
              Explore More Briefings
            </h3>
            <p className="text-sm text-[var(--text-muted)] font-light">
              Browse insights across all {category?.name || 'our services'} and beyond.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/insights"
              className="btn-outline text-xs py-2.5 px-6"
            >
              ← All Insights
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-xs py-2.5 px-6 shadow-sm"
            >
              Book a Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Global footer closer */}
      <FooterCloser />
    </main>
  );
}
