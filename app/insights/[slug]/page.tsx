import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  INSIGHT_ARTICLES,
  getArticleBySlug,
  getCategoryBySlug,
} from '../data/insightsData';
import { ARTICLE_CONTENT } from '../data/articleContent';
import FooterCloser from '../../components/FooterCloser';
import ReadingProgressBar from '../components/ReadingProgressBar';
import ExecutiveSummary from '../components/ExecutiveSummary';
import SelfAuditor from '../components/SelfAuditor';

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
    return { title: 'Article Not Found | Goldfish Marketing' };
  }
  return {
    title: {
      absolute: `${article.title} | Goldfish Marketing Briefing`,
    },
    description: article.excerpt,
    alternates: {
      canonical: `https://www.goldfishmarketing.co.ke/insights/${params.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.goldfishmarketing.co.ke/insights/${params.slug}`,
      locale: 'en_KE',
    },
  };
}

export default function InsightArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const category = getCategoryBySlug(article.categorySlug);
  const articleHtml = ARTICLE_CONTENT[params.slug];

  return (
    <main className="w-full flex flex-col min-h-screen relative">
      {/* ═══ READING PROGRESS BAR ═══ */}
      <ReadingProgressBar />

      {/* ═══ HERO / ARTICLE HEADER ═══ */}
      <section className="section-padding px-6 lg:px-10 relative overflow-hidden border-b border-[var(--border-subtle)]">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-gold)]/5 rounded-full filter blur-[120px] pointer-events-none" />

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

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/5 font-bold">
              {article.readTime}
            </span>
            {article.isFeatured && (
              <span className="text-[11px] font-mono text-white uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent-gold)] font-bold">
                Featured Strategic Briefing
              </span>
            )}
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
              KENYA & REGIONAL SME INTELLIGENCE
            </span>
          </div>

          {/* Title */}
          <h1 className="text-h2 lg:text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 leading-tight max-w-4xl">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-3xl font-light mb-8">
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
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-2xl bg-[#0E0E0E]">
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

      {/* ═══ ARTICLE BODY SECTION ═══ */}
      <section id="article-body" className="py-16 px-6 lg:px-10 bg-[var(--bg-surface)]/20">
        <div className="max-w-3xl mx-auto">
          {/* 30-Second Executive Summary */}
          <ExecutiveSummary
            category={article.category}
            readTime={article.readTime}
          />

          {/* Article Prose Content */}
          {articleHtml ? (
            <div
              className="prose prose-invert max-w-none text-[var(--text-core)]
                prose-headings:font-black prose-headings:text-[var(--text-core)] prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[var(--border-subtle)] prose-h2:pb-3
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[var(--accent-gold)]
                prose-p:text-sm prose-p:leading-relaxed prose-p:text-[var(--text-muted)] prose-p:font-light prose-p:mb-4
                prose-ul:text-sm prose-ul:text-[var(--text-muted)] prose-ul:font-light prose-ul:my-4 prose-ul:list-disc prose-ul:pl-5 prose-li:mb-2
                prose-strong:text-[var(--text-core)] prose-strong:font-bold
                prose-table:w-full prose-table:my-6 prose-table:border-collapse prose-table:text-xs prose-table:font-mono
                prose-th:bg-[var(--bg-surface)] prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-[var(--border-subtle)] prose-th:text-[var(--accent-gold)]
                prose-td:p-3 prose-td:border prose-td:border-[var(--border-subtle)] prose-td:text-[var(--text-core)]
                prose-a:text-[var(--accent-gold)] prose-a:underline hover:prose-a:text-[var(--accent-gold-hover)]"
              dangerouslySetInnerHTML={{ __html: articleHtml }}
            />
          ) : (
            <div className="card-brand p-12 text-center border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <span className="text-xs font-mono uppercase text-[var(--accent-gold)] font-bold block mb-2">
                In Final Editorial Review
              </span>
              <p className="text-sm text-[var(--text-muted)]">
                This briefing is currently being synchronized with our latest performance data. Check back shortly.
              </p>
            </div>
          )}

          {/* 60-Second Interactive Self-Test Diagnostic */}
          <SelfAuditor />

          {/* Contextual Micro-Bridge to Services */}
          <div className="card-brand p-8 rounded-2xl border border-[var(--accent-gold)]/40 bg-[var(--bg-surface)] mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-lg">
            <div>
              <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider block mb-1">
                GOLD-STANDARD IMPLEMENTATION
              </span>
              <h3 className="text-lg font-black text-[var(--text-core)] mb-2">
                Want This Implemented for Your Brand?
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-light max-w-lg leading-relaxed">
                Skip the trial-and-error. Goldfish designs, builds, and deploys high-converting web engines, local SEO authority, and 24/7 WhatsApp AI systems for businesses across Kenya.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary text-xs py-3 px-6 whitespace-nowrap shadow-md flex-shrink-0"
            >
              Request Free Growth Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ BACK TO INSIGHTS / MORE BRIEFINGS ═══ */}
      <section className="py-16 px-6 lg:px-10 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-black tracking-tight text-[var(--text-core)] mb-1">
              Explore More Strategic Briefings
            </h3>
            <p className="text-sm text-[var(--text-muted)] font-light">
              18 in-depth guides covering web speed, AI search, WhatsApp bots, and local SEO in Kenya.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/insights"
              className="btn-outline text-xs py-2.5 px-6"
            >
              ← All 18 Briefings
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-xs py-2.5 px-6 shadow-sm"
            >
              Book 15-Min Strategy Slot
            </Link>
          </div>
        </div>
      </section>

      {/* Global footer closer */}
      <FooterCloser />
    </main>
  );
}
