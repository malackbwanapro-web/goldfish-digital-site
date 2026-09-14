import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  PORTFOLIO_PROJECTS,
  getProjectBySlug,
} from '../data/portfolioData';
import FooterCloser from '../../components/FooterCloser';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: 'Case Study Not Found | Goldfish Marketing' };
  }
  return {
    title: {
      absolute: `${project.title} | Case Study | Goldfish`,
    },
    description: project.description,
    alternates: {
      canonical: `https://www.goldfishmarketing.co.ke/portfolio/${params.slug}`,
    },
    openGraph: {
      title: `${project.title} Case Study | Goldfish Marketing`,
      description: project.description,
      url: `https://www.goldfishmarketing.co.ke/portfolio/${params.slug}`,
      locale: 'en_KE',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} Case Study | Goldfish Marketing`,
      description: project.description,
      images: ['/og-image.png'],
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.goldfishmarketing.co.ke/portfolio/${project.slug}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.goldfishmarketing.co.ke',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: 'https://www.goldfishmarketing.co.ke/portfolio',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: `https://www.goldfishmarketing.co.ke/portfolio/${project.slug}`,
          },
        ],
      },
      {
        '@type': 'TechArticle',
        '@id': `https://www.goldfishmarketing.co.ke/portfolio/${project.slug}/#article`,
        headline: project.title,
        description: project.description,
        author: {
          '@type': 'Organization',
          name: 'Goldfish Marketing',
          url: 'https://www.goldfishmarketing.co.ke',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Goldfish Marketing',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.goldfishmarketing.co.ke/goldfish-logo.svg',
          },
        },
        about: {
          '@type': 'Thing',
          name: project.category,
        },
        inLanguage: 'en-KE',
      },
    ],
  };

  return (
    <main className="w-full flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      {/* ═══ HERO / CASE STUDY HEADER ═══ */}
      <section className="section-padding px-6 lg:px-10 relative overflow-hidden border-b border-[var(--border-subtle)]">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-gold)]/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider hover:text-[var(--accent-gold)] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-[var(--text-muted)]/40 text-[10px]">/</span>
            <Link
              href="/portfolio"
              className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider hover:text-[var(--accent-gold)] transition-colors duration-200"
            >
              Portfolio
            </Link>
            <span className="text-[var(--text-muted)]/40 text-[10px]">/</span>
            <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold">
              {project.category}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-eyebrow text-xs font-mono">
              {project.tagLabel}
            </span>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] border border-[var(--accent-gold)]/20">
              📍 {project.provenanceTag}
            </span>
          </div>

          <h1 className="text-h2 lg:text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 leading-tight max-w-3xl">
            {project.title}
          </h1>

          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-3xl font-light mb-10">
            {project.description}
          </p>

          {/* Metrics display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-8">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="card-brand p-6 border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between"
              >
                <p className="text-2xl lg:text-3xl font-black font-mono text-[var(--accent-gold)] tracking-tight mb-1">
                  {metric.value}
                </p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ARCHITECTURE TEARDOWN BODY ═══ */}
      <section className="py-16 px-6 lg:px-10 bg-[var(--bg-surface)]/40">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          {/* Section 1: The Bottleneck */}
          <div className="card-brand p-8 lg:p-10 border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">
                01 // The Operational Bottleneck
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[var(--text-core)] mb-4">
              The Cost of Inefficient Systems
            </h2>
            <p className="text-body text-[var(--text-muted)] leading-relaxed font-light">
              {project.bottleneck}
            </p>
          </div>

          {/* Section 2: Before & After Benchmark Shift */}
          {project.beforeAfterComparison && (
            <div className="p-8 lg:p-10 rounded-2xl bg-[#0E0E0E] text-white border border-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-widest block mb-4">
                  02 // AUDITED BENCHMARK CONTRAST
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-gray-800 pb-8 mb-6">
                  <div className="p-6 rounded-xl bg-black/40 border border-red-500/20">
                    <span className="text-[10px] font-mono text-gray-400 uppercase block mb-1">
                      Before Intervention
                    </span>
                    <span className="text-3xl font-black font-mono text-red-400 block mb-1">
                      {project.beforeAfterComparison.beforeMetric}
                    </span>
                    <span className="text-xs text-gray-300">
                      {project.beforeAfterComparison.beforeLabel}
                    </span>
                  </div>

                  <div className="p-6 rounded-xl bg-black/40 border border-green-500/30">
                    <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase block mb-1">
                      After Goldfish Architecture
                    </span>
                    <span className="text-3xl font-black font-mono text-green-400 block mb-1">
                      {project.beforeAfterComparison.afterMetric}
                    </span>
                    <span className="text-xs text-gray-200">
                      {project.beforeAfterComparison.afterLabel}
                    </span>
                  </div>
                </div>
                <p className="text-xs font-mono text-gray-400">
                  Verification Note: {project.beforeAfterComparison.context}
                </p>
              </div>
            </div>
          )}

          {/* Section 3: The Engineered Solution */}
          <div className="card-brand p-8 lg:p-10 border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)]" />
              <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-widest font-bold">
                03 // Technical Blueprint & Implementation
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[var(--text-core)] mb-4">
              The Goldfish Growth System
            </h2>
            <p className="text-body text-[var(--text-muted)] leading-relaxed font-light mb-8">
              {project.solution}
            </p>

            {/* Tech Stack Pills */}
            <div>
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-3">
                Deployed Technology Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-core)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Actionable Key Takeaway */}
          <div className="p-8 lg:p-10 rounded-2xl bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base">💡</span>
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[var(--accent-gold)]">
                04 // Actionable Insight for Your Business
              </span>
            </div>
            <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
              What Can Other SMEs Learn From This Case?
            </h3>
            <p className="text-sm text-[var(--text-core)] leading-relaxed font-light mb-6">
              {project.keyActionableTakeaway}
            </p>
            <div className="pt-4 border-t border-[var(--accent-gold)]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Have questions about executing this for your brand?
              </span>
              <Link
                href={`/contact?service=${project.categorySlug}&source=case-study`}
                className="btn-primary text-xs py-2 px-5 shadow-sm"
              >
                Request Free 24-Hour Diagnostic
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ BACK TO PORTFOLIO / DIRECT CTA ═══ */}
      <section className="py-16 px-6 lg:px-10 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-black tracking-tight text-[var(--text-core)] mb-1">
              Explore More Case Studies
            </h3>
            <p className="text-sm text-[var(--text-muted)] font-light">
              Review verified implementations across Web, AI, Visibility, and Paid Growth.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/portfolio"
              className="btn-outline text-xs py-2.5 px-6"
            >
              ← All Case Studies
            </Link>
            <Link
              href={`/contact?service=${project.categorySlug}&source=case-study`}
              className="btn-primary text-xs py-2.5 px-6 shadow-sm"
            >
              Schedule a 15-Min Slot
            </Link>
          </div>
        </div>
      </section>

      {/* Global footer closer */}
      <FooterCloser />
    </main>
  );
}
