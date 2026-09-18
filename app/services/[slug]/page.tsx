import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import FooterCloser from '../../components/FooterCloser';
import NodeSchema from '../../components/NodeSchema';
import CapabilityVisual from '../../components/CapabilityVisual';
import { servicesData } from '../data/servicesData';
import FaqAccordion from './FaqAccordion';

interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for all 6 service pages for static optimization
export async function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({ slug }));
}

// Dynamic Metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData[params.slug];
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const baseUrl = SITE_CONFIG.SITE_URL;
  const pageUrl = `${baseUrl}/services/${service.slug}`;

  return {
    title: service.metaTitle ? { absolute: `${service.metaTitle} | Goldfish Marketing` } : `${service.title} | Kenya Digital Systems`,
    description: service.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      url: pageUrl,
      title: service.metaTitle || `${service.title} | Goldfish Marketing`,
      description: service.metaDescription,
      siteName: 'Goldfish Marketing',
      locale: 'en_KE',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${service.title} - Goldfish Marketing Kenya`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle || `${service.title} | Goldfish Marketing`,
      description: service.metaDescription,
      images: ['/og-image.png'],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  const baseUrl = SITE_CONFIG.SITE_URL;
  const pageUrl = `${baseUrl}/services/${service.slug}`;

  // Structured Data 1: Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.title,
    'serviceType': service.title,
    'description': service.geoSummary || service.description,
    'provider': {
      '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
      '@id': `${baseUrl}/#organization`,
      'name': 'Goldfish Marketing',
      'url': baseUrl,
    },
    'areaServed': [
      { '@type': 'Country', 'name': 'Kenya' },
      { '@type': 'AdministrativeArea', 'name': 'Coast Province, Kenya' },
      { '@type': 'City', 'name': 'Diani Beach' },
      { '@type': 'City', 'name': 'Mombasa' },
      { '@type': 'City', 'name': 'Nairobi' },
      { '@type': 'AdministrativeArea', 'name': 'East Africa' }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Core Capabilities',
      'itemListElement': service.capabilitiesBreakout.map((c) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': c.title,
          'description': c.deepDive,
        },
      })),
    },
  };

  // Structured Data 2: FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': service.faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  // Structured Data 3: BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': baseUrl,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': `${baseUrl}/services`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': service.title,
        'item': pageUrl,
      },
    ],
  };

  return (
    <main className="w-full flex flex-col">
      {/* JSON-LD Schemas for Search Engines & AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO — Full-width editorial impact
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-28 px-6 lg:px-10">
        {/* Ambient glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-gold)]/5 rounded-full filter blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-gold)]/3 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Column — Copy */}
          <div className="flex flex-col items-start text-left">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] font-mono text-[var(--text-muted)] mb-6">
              <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[var(--accent-gold)] transition-colors">Services</Link>
              <span>/</span>
              <span className="text-[var(--accent-gold)] font-bold">{service.title}</span>
            </nav>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[11px] font-mono text-[var(--accent-gold)] hover:underline mb-6 uppercase tracking-widest font-bold text-decoration-none"
            >
              ← Back to All Services
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-accent)] bg-[var(--bg-surface)]/50 text-[var(--accent-gold)] text-[11px] font-mono tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />
              {service.title}
            </div>
            
            <h1 className="text-h1 font-black leading-tight tracking-tight text-[var(--text-core)] mb-6">
              {service.titleH1}
            </h1>
            
            <p className="text-body-lg text-[var(--text-muted)] mb-10 leading-relaxed font-light max-w-xl">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="btn-primary w-full sm:w-auto shadow-md">
                {service.footerCtaButton || 'Book a Free Consultation'}
              </Link>
              <Link href="/contact" className="btn-outline w-full sm:w-auto">
                {service.heroAuditCta || 'Request a Free Audit'}
              </Link>
            </div>
          </div>

          {/* Right Column — Node Schema Visual */}
          <div className="w-full max-w-md mx-auto aspect-square">
            <NodeSchema slug={service.slug} />
          </div>
          
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 1.5: GEO & AI EXECUTIVE OVERVIEW
          Optimized for AI Search Engine Citations (Perplexity, SearchGPT, Claude, Gemini)
      ═══════════════════════════════════════════════════════ */}
      {service.geoSummary && (
        <section className="px-6 lg:px-10 py-8 bg-[var(--bg-primary)] border-y border-[var(--border-subtle)]">
          <div className="max-w-7xl mx-auto">
            <div className="p-6 lg:p-8 rounded-xl border border-[var(--border-accent)]/30 bg-[var(--bg-surface)]/80 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-gold)] font-bold">
                    Entity Specification &amp; AI Citation Summary
                  </span>
                </div>
                <p className="text-sm lg:text-base text-[var(--text-core)] font-medium leading-relaxed">
                  {service.geoSummary}
                </p>
              </div>
              
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 shrink-0">
                <div className="px-3 py-1.5 rounded-md bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
                  Provider: <strong className="text-[var(--text-core)]">Goldfish Digital</strong>
                </div>
                <div className="px-3 py-1.5 rounded-md bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
                  Index Status: <strong className="text-emerald-500">Verified Entity</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: THE HOOK — Urgency & Pain Point Callout
          (Only renders for services with hookTitle/hookText)
      ═══════════════════════════════════════════════════════ */}
      {service.hookTitle && service.hookText && (
        <section className="relative px-6 lg:px-10 py-16 lg:py-20 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
          <div className="max-w-5xl mx-auto relative">
            {/* Glassmorphism hook card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(var(--accent-gold-rgb), 0.06), rgba(var(--accent-gold-rgb), 0.02))',
                border: '1px solid rgba(var(--accent-gold-rgb), 0.15)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--accent-gold)] via-[var(--accent-gold-dark)] to-transparent rounded-l-2xl" />

              <div className="p-8 lg:p-12 pl-10 lg:pl-16">
                {/* Eyebrow with warning icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <span className="text-eyebrow text-[var(--accent-gold)]">The Hook</span>
                </div>

                <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] mb-6">
                  {service.hookTitle}
                </h2>
                <p className="text-body-lg text-[var(--text-muted)] leading-relaxed font-light max-w-3xl">
                  {service.hookText}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: WHO THIS IS FOR — Target Audience Cards
          (Only renders for services with whoIsThisFor)
      ═══════════════════════════════════════════════════════ */}
      {service.whoIsThisFor && service.whoIsThisFor.length > 0 && (
        <section className="section-padding px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-eyebrow mb-3 block">Who This Is For</span>
              <h2 className="text-h2 font-black tracking-tight">
                Is This You?
              </h2>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.whoIsThisFor.map((profile, idx) => {
                // Color accent per card for visual variety
                const accents = [
                  { border: 'var(--accent-gold)', bg: 'rgba(var(--accent-gold-rgb), 0.06)', icon: '🏢' },
                  { border: '#EF4444',             bg: 'rgba(239, 68, 68, 0.06)',             icon: '📉' },
                  { border: '#8B5CF6',             bg: 'rgba(139, 92, 246, 0.06)',            icon: '🚀' },
                ];
                const accent = accents[idx % accents.length];

                return (
                  <div
                    key={idx}
                    className="group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
                    style={{
                      background: accent.bg,
                      border: `1px solid ${accent.border}20`,
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-8 right-8 h-0.5 rounded-full transition-all duration-500 group-hover:left-4 group-hover:right-4"
                      style={{ background: accent.border }}
                    />

                    {/* Icon */}
                    <div className="text-3xl mb-5 mt-2">{accent.icon}</div>

                    {/* Number badge */}
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-4 font-bold"
                      style={{
                        color: accent.border,
                        border: `1px solid ${accent.border}30`,
                        background: `${accent.border}10`,
                      }}
                    >
                      Profile 0{idx + 1}
                    </div>

                    <h3 className="text-h3 font-bold tracking-tight text-[var(--text-core)] mb-4">
                      {profile.title}
                    </h3>
                    <p className="text-caption leading-relaxed">
                      {profile.description}
                    </p>

                    {/* Bottom CTA button */}
                    <div className="mt-8 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-110"
                        style={{
                          color: accent.border,
                          border: `1.5px solid ${accent.border}`,
                          background: `${accent.border}12`,
                        }}
                      >
                        Get Started
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: TECHNICAL SUPERIORITY — The Bridge
          (Only renders for services with technicalSuperiority)
      ═══════════════════════════════════════════════════════ */}
      {service.technicalSuperiority && (
        <section className="px-6 lg:px-10 py-16 lg:py-24 bg-[#0E0E0E] text-white relative overflow-hidden">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left — Copy */}
            <div>
              <span className="text-eyebrow mb-4 block text-[var(--accent-gold)]">The Bridge</span>
              <h2 className="text-h2 font-black tracking-tight text-white mb-6">
                Technical Superiority
              </h2>
              <p className="text-body-lg text-gray-400 leading-relaxed font-light mb-8">
                {service.technicalSuperiority}
              </p>

              {/* Core Features */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-md bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300 font-medium">Custom-Engineered Stack: No bloated page builders or templates.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-md bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300 font-medium">Core Web Vitals: Prioritizing site speed, crawlability, and ranking power.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-md bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300 font-medium">Conversion-Psychology UX: Dynamic layouts designed to capture and convert.</span>
                </div>
              </div>
            </div>

            {/* Right — Tech stack visual */}
            <div className="relative">
              <div className="rounded-2xl border border-gray-800 bg-[#121212] p-8 lg:p-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-6 block">Technology Stack</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {service.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="py-4 px-5 bg-[#0E0E0E] border border-gray-800 rounded-xl font-mono font-extrabold text-xs text-gray-300 hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-300 flex items-center justify-center uppercase tracking-wider group cursor-default"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">{tech}</span>
                    </div>
                  ))}
                </div>
                {/* Glow effect */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[var(--accent-gold)]/5 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          SECTION 4b: THE PROOF — By the Numbers
          (Only renders for services with proofSection)
      ═══════════════════════════════════════════════════════ */}
      {service.proofSection && (
        <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Heading */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-eyebrow mb-3 block text-[var(--accent-gold)]">The Proof</span>
              <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] mb-4">
                {service.proofSection.title}
              </h2>
              <p className="text-body-lg text-[var(--text-muted)] leading-relaxed font-light">
                {service.proofSection.subheading}
              </p>
            </div>

            {/* Right side: Elegant cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {service.proofSection.points.map((point, pIdx) => (
                <div
                  key={pIdx}
                  className="relative rounded-2xl overflow-hidden p-6 lg:p-8"
                  style={{
                    background: 'linear-gradient(135deg, rgba(var(--accent-gold-rgb), 0.05), rgba(var(--accent-gold-rgb), 0.01))',
                    border: '1px solid rgba(var(--accent-gold-rgb), 0.12)',
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Stat/Indicator Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center flex-shrink-0">
                      {pIdx === 0 ? (
                        <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-core)] mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: CORE CAPABILITIES — Technical Deep-Dive
      ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--bg-surface)] border-y border-[var(--border-subtle)] px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-eyebrow mb-3 block">WHAT WE DELIVER</span>
            <h2 className="text-h2 font-black tracking-tight">Technical Deep-Dive</h2>
            <p className="text-caption text-[var(--text-muted)] mt-4">We don&apos;t deal in fluff. We deal in measurable impact.</p>
          </div>

          {service.capabilitiesBreakout.map((row, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Text Side */}
                <div className="flex-1 flex flex-col items-start">
                  <div className="text-4xl font-black font-mono text-[var(--accent-gold)]/20 mb-4">
                    {`0${idx + 1}`}
                  </div>
                  <h3 className="text-h2 font-bold tracking-tight text-[var(--text-core)] mb-6">
                    {row.title}
                  </h3>
                  <p className="text-caption leading-relaxed mb-6">
                    {row.deepDive}
                  </p>
                  <p className="text-caption font-bold text-[var(--text-core)] border-l-2 border-[var(--accent-gold)] pl-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-gold)] block mb-1">Bottom-Line Impact:</span>
                    {row.impact}
                  </p>
                </div>

                {/* Visual Side */}
                <CapabilityVisual slug={service.slug} index={idx} />
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5b: TECH STACK MATRIX
          (Only shows for services WITHOUT the technicalSuperiority
          section, since that section already includes the tech stack)
      ═══════════════════════════════════════════════════════ */}
      {!service.technicalSuperiority && (
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 font-black tracking-tight mb-4">
              Seamless Infrastructure Integration
            </h2>
            <p className="text-caption text-[var(--text-muted)] mb-12 max-w-lg mx-auto">
              Our automation systems interface directly with your existing core data networks, developer clouds, and database architectures.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
              {service.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="py-4 px-6 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg font-mono font-extrabold text-xs text-[var(--text-core)] hover:border-[var(--accent-gold)] transition-colors duration-200 shadow-sm flex items-center justify-center uppercase tracking-wider"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          SECTION 6: CLIENT CASE STUDY — Editorial Narrative
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-6 bg-[#0E0E0E] text-white relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-gold)]/3 rounded-full blur-3xl pointer-events-none opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Case study eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-eyebrow text-[var(--accent-gold)]">{service.caseStudy.eyebrow || 'CLIENT PROOF'}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            {/* Case text narrative */}
            <div className="lg:col-span-6 p-8 lg:p-12 bg-[#121212] flex flex-col justify-center items-start">
              {service.caseStudy.text.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx} className="text-[15px] text-gray-400 leading-relaxed font-light mb-4">
                  {paragraph.startsWith('The Challenge:') || paragraph.startsWith('The Solution:') ? (
                    <>
                      <span className="font-bold text-white text-sm">{paragraph.split(':')[0]}:</span>
                      <span className="text-gray-300">{paragraph.substring(paragraph.indexOf(':') + 1)}</span>
                    </>
                  ) : paragraph}
                </p>
              ))}
              
              {service.caseStudy.resultText && (
                <p className="text-[15px] text-gray-300 leading-relaxed font-light mt-2">
                  <span className="font-bold text-white text-sm">The Result:</span>
                  <span>{service.caseStudy.resultText.startsWith('The Result:') ? service.caseStudy.resultText.substring(11) : service.caseStudy.resultText}</span>
                </p>
              )}
            </div>

            {/* Metrics panel */}
            <div className="lg:col-span-6 p-8 lg:p-12 bg-black flex flex-col justify-center gap-6">
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">The Result</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {service.caseStudy.metrics.map((metric, mIdx) => {
                  const parts = metric.split(' ');
                  const number = parts[0];
                  const rest = parts.slice(1).join(' ');
                  return (
                    <div key={mIdx} className="flex flex-col gap-2 border-l border-gray-800 pl-6">
                      <span className="text-3xl lg:text-4xl font-black font-mono text-[var(--accent-gold)] tracking-tighter">
                        {number}
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest leading-normal">
                        {rest}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7: FAQs — Split Layout
      ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-16">
          {/* Title column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-eyebrow mb-3 block">COMMON QUESTIONS</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Frequently Asked Questions
            </h2>
            <p className="text-caption mt-4 leading-relaxed">
              Got a question that isn&apos;t covered? Reach out directly — we respond within 24 hours.
            </p>
            <Link href="/contact" className="btn-outline mt-8 text-sm">
              Ask Us Directly
            </Link>
          </div>

          {/* Accordion column */}
          <div className="lg:col-span-6">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 8: DUAL CTA — The Offer
      ═══════════════════════════════════════════════════════ */}
      <FooterCloser
        closerTitle={service.footerCtaHeadline}
        closerText={service.footerCtaSubtext}
        primaryBtnText={service.footerCtaButton}
        primaryBtnHref="/contact"
        secondaryBtnText={service.heroAuditCta || 'Request a Free Audit'}
        secondaryBtnHref="/contact"
      />
    </main>
  );
}
