import type { Metadata } from 'next';
import Link from 'next/link';
import { ACTUAL_CLIENTS } from './data/actualClientsData';
import { PUBLISHED_PROJECTS } from './data/publishedProjects';
import FooterCloser from '../components/FooterCloser';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: { absolute: 'Client Work & Hospitality Case Studies | Goldfish Marketing' },
  description:
    'Explore empirical client work and case studies across luxury hospitality, tourism, dining, and digital growth in Kenya.',
  alternates: { canonical: 'https://www.goldfishmarketing.co.ke/portfolio' },
};

export default function PortfolioPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* ═══ HERO SECTION ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-4">
            <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--accent-gold)] font-bold">Work</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)]" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[var(--accent-gold)]">
              GOLDFISH MARKETING PORTFOLIO &amp; CASE STUDIES
            </span>
          </div>

          <h1 className="text-h1 font-black tracking-tight mb-5 max-w-4xl">
            See the work. Verified systems that drive real revenue.
          </h1>

          <p className="max-w-3xl text-body-lg text-[var(--text-muted)] font-light leading-relaxed mb-10">
            Explore empirical case studies and client platforms across luxury accommodation, tourism, restaurants, and professional services. From market research and 4K media production to bespoke direct-booking engines and AI automation, explore how we build for Kenyan business economics.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link className="btn-primary text-xs py-3 px-6 shadow-sm" href="/contact?service=website">
              Discuss your project with Malack →
            </Link>
            <Link className="btn-outline text-xs py-3 px-6" href="/services">
              Explore all 6 service capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED CASE STUDIES & PROJECTS ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-eyebrow mb-2 block font-mono text-[var(--accent-gold)]">
                FEATURED WORK
              </span>
              <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
                In-Depth Client Case Studies
              </h2>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono max-w-md">
              Every project is backed by verified client delivery, live production URLs, and empirical operational architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {PUBLISHED_PROJECTS.map((project, idx) => (
              <ScrollReveal
                key={project.slug}
                delay={idx * 0.1}
                className={project.isFlagship ? 'md:col-span-2 flex' : 'flex'}
              >
                <article
                  className={`card-brand p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] flex flex-col justify-between w-full ${
                    project.isFlagship ? 'ring-1 ring-[var(--accent-gold)]/30' : ''
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold">
                        {project.sector}
                      </span>
                      {project.isFlagship && (
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[var(--accent-gold)]/15 border border-[var(--accent-gold)]/40 text-[var(--accent-gold)]">
                          ● FLAGSHIP{' '}
                          {project.slug === 'holiday-illumination-las-vegas'
                            ? 'INTERNATIONAL ENTERPRISE & AI CRM'
                            : project.sector.includes('Multi-Property')
                              ? 'MULTI-PROPERTY HOSPITALITY'
                              : project.sector.includes('Dining') || project.sector.includes('Restaurant') || project.sector.includes('Nightlife')
                                ? 'DINING & NIGHTLIFE'
                                : 'HOSPITALITY'}{' '}
                          CASE STUDY
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black text-[var(--text-core)] mb-2">
                      {project.name}
                    </h3>

                    {project.tagline && (
                      <p className="text-sm font-mono font-semibold text-[var(--text-muted)] mb-4">
                        {project.tagline}
                      </p>
                    )}

                    <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Metrics strip for flagship */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-6">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex flex-col">
                            <span className="text-lg lg:text-xl font-black font-mono text-[var(--accent-gold)]">
                              {metric.value}
                            </span>
                            <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mt-0.5">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--border-subtle)]">
                    <Link
                      className="btn-primary text-xs py-2.5 px-5 shadow-sm"
                      href={`/portfolio/${project.slug}`}
                    >
                      Explore Deep-Dive Case Study →
                    </Link>
                    <a
                      className="text-xs font-mono font-bold text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors inline-flex items-center gap-1"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        {project.slug === 'beakim-hospitality-group'
                          ? 'Platform Staging Finalization'
                          : project.slug === 'holiday-illumination-las-vegas'
                            ? 'Preview Public Staging (www.holidayillumination.com Cutover Next Week)'
                            : 'Visit Live Platform'}
                      </span>
                      <span>↗</span>
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* More Client Platforms Grid */}
          <div className="pt-12 border-t border-[var(--border-subtle)]">
            <div className="mb-8">
              <span className="text-eyebrow mb-2 block font-mono text-[var(--accent-gold)]">
                EXPANDED CLIENT ROSTER
              </span>
              <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
                More Live Client Platforms
              </h2>
              <p className="text-sm text-[var(--text-muted)] font-light mt-2 max-w-2xl">
                Active web builds and growth ecosystems engineered across coastal hospitality, high-end safaris, U.S. estate contracting, and regional SMEs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACTUAL_CLIENTS.map((client) => (
                <article
                  key={client.id}
                  className="card-brand p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] flex flex-col justify-between hover:border-[var(--accent-gold)]/40 transition-all duration-300"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider block mb-2 font-bold">
                      {client.sector}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--text-core)] mb-2">
                      {client.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-4">
                      {client.tagline}
                    </p>
                    <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-4">
                      <span className="text-xs font-black font-mono text-[var(--accent-gold)] block">
                        {client.metrics.value}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {client.metrics.label}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      {client.domain}
                    </span>
                    <a
                      href={client.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-[var(--accent-gold)] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Visit Site</span>
                      <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══ */}
      <section className="section-padding-sm px-6 lg:px-10 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] mb-4">
            Planning a custom digital ecosystem for your brand?
          </h2>
          <p className="text-sm text-[var(--text-muted)] font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you run a luxury resort looking to slash OTA commissions or an established Kenyan SME needing measurable search dominance, work directly with Malack to agree on a practical scope.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link className="btn-primary text-xs py-3 px-8 shadow-sm w-full sm:w-auto" href="/contact?service=website">
              Discuss your project →
            </Link>
            <Link className="btn-outline text-xs py-3 px-8 w-full sm:w-auto" href="/diani">
              Explore Diani local hub
            </Link>
          </div>
        </div>
      </section>

      <FooterCloser />
    </main>
  );
}
