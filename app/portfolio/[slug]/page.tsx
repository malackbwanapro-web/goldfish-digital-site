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
    return { title: 'Case Study Not Found | Goldfish Digital' };
  }
  return {
    title: `${project.title} | Goldfish Digital Case Studies`,
    description: project.description,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* ═══ HERO / CASE STUDY HEADER ═══ */}
      <section className="section-padding px-6 lg:px-10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-gold)]/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/portfolio"
              className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider hover:text-[var(--accent-gold)] transition-colors duration-200"
            >
              Portfolio
            </Link>
            <span className="text-[var(--text-muted)]/40 text-[10px]">/</span>
            <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <span className="text-eyebrow text-xs mb-4 block font-mono">
            {project.tagLabel}
          </span>

          <h1 className="text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 leading-tight max-w-3xl">
            {project.title}
          </h1>

          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-2xl font-light mb-10">
            {project.description}
          </p>

          {/* Metrics display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-10">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="card-brand p-6 border border-[var(--border-subtle)] bg-[var(--bg-surface)]"
              >
                <h3 className="text-2xl font-black font-mono text-[var(--accent-gold)] tracking-tight mb-1">
                  {metric.value}
                </h3>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMING SOON CARD ═══ */}
      <section className="py-12 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="card-brand p-12 lg:p-16 text-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] relative overflow-hidden">
            {/* Decorative background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="relative z-10">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />
                <span className="text-[11px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold">
                  Auditing Case Metrics
                </span>
              </div>

              {/* Terminal CLI simulation */}
              <div className="max-w-md mx-auto bg-[#0E0E0E] rounded-lg border border-gray-800 p-6 mb-8 font-mono text-[12px] text-left">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-auto text-gray-600 text-[10px]">
                    case_validation
                  </span>
                </div>
                <div className="text-green-500/70 space-y-1">
                  <div>
                    <span className="text-gray-500">$</span> verify --metrics --slug=&quot;{project.slug}&quot;
                  </div>
                  <div className="text-amber-500/70">
                    → Operational telemetry: COMPILING
                  </div>
                  <div className="text-amber-500/70">
                    → Client data validation: PENDING SIGN-OFF
                  </div>
                  <div className="text-gray-500">
                    → Publication state: RESTRICTED NDA
                  </div>
                  <div className="mt-3 text-[var(--accent-gold)]">
                    Release clearance: Under compliance review_
                  </div>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-[var(--text-core)] mb-4">
                Full Case Breakdown Is Currently Being Audited.
              </h2>
              <p className="text-sm text-[var(--text-muted)] font-light max-w-lg mx-auto mb-10 leading-relaxed">
                We are validating the exact technical architectures, code fragments, and database
                telemetry with our client&apos;s operations team. Enter your corporate email to be
                notified as soon as the full case study teardown is released.
              </p>

              {/* Email capture */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full sm:flex-1 px-5 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 font-mono text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-200"
                />
                <button className="btn-primary w-full sm:w-auto py-3 px-6 text-xs whitespace-nowrap shadow-md">
                  Get Notified
                </button>
              </div>

              <p className="text-[10px] font-mono text-[var(--text-muted)]/50 uppercase tracking-wider">
                NDA Compliant Data Protocols Active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BACK TO PORTFOLIO CTA ═══ */}
      <section className="py-16 px-6 lg:px-10 border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-black tracking-tight text-[var(--text-core)] mb-1">
              Explore More Case Studies
            </h3>
            <p className="text-sm text-[var(--text-muted)] font-light">
              Review our engineering work across other capabilites.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/portfolio"
              className="btn-outline text-xs py-2.5 px-6"
            >
              ← All Projects
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
