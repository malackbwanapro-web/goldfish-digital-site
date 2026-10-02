import type { Metadata } from 'next';
import Link from 'next/link';
import FooterCloser from '../components/FooterCloser';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    absolute: 'Digital Marketing in Diani & Ukunda | Goldfish Marketing',
  },
  description:
    'Websites, social media management and business photography in Diani and Ukunda. Work directly with Malack on a practical scope for your business.',
  alternates: { canonical: 'https://www.goldfishmarketing.co.ke/diani' },
  openGraph: {
    title: 'Digital Marketing in Diani & Ukunda | Goldfish Marketing',
    description:
      'Websites, social media management and business photography in Diani and Ukunda. Work directly with Malack on a practical scope for your business.',
    url: 'https://www.goldfishmarketing.co.ke/diani',
    locale: 'en_KE',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Goldfish Marketing Diani & Ukunda' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing in Diani & Ukunda | Goldfish Marketing',
    description:
      'Websites, social media management and business photography in Diani and Ukunda. Work directly with Malack on a practical scope for your business.',
    images: ['/og-image.png'],
  },
};

const dianiFaqs = [
  {
    q: 'Do you only work with hotels?',
    a: 'No. Accommodation and tourism are important parts of our work, alongside restaurants and other service businesses.',
  },
  {
    q: 'Can you visit my business in Ukunda or elsewhere in Kwale County?',
    a: 'We can discuss an on-site visit. Tell us the location and what you need so we can agree availability and any travel or production costs.',
  },
  {
    q: 'Can I book photography separately from social management?',
    a: 'Yes. Production and ongoing social management are separate services and can be scoped individually.',
  },
  {
    q: 'Can you guarantee first place on Google?',
    a: "No. We can agree SEO work and measure progress, but search positions depend on factors outside any agency's control.",
  },
];

export default function DianiPage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.goldfishmarketing.co.ke/diani/#breadcrumb',
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
            name: 'Diani & Ukunda',
            item: 'https://www.goldfishmarketing.co.ke/diani',
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.goldfishmarketing.co.ke/diani/#webpage',
        url: 'https://www.goldfishmarketing.co.ke/diani',
        name: 'Digital Marketing in Diani & Ukunda | Goldfish Marketing',
        description:
          'Websites, social media management and business photography in Diani and Ukunda. Work directly with Malack on a practical scope for your business.',
      },
    ],
  };

  return (
    <main className="w-full flex flex-col bg-[var(--bg-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* ═══ 1. HERO ═══ */}
      <section className="relative overflow-hidden py-20 lg:py-28 px-6 lg:px-10 border-b border-[var(--border-subtle)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-gold)]/5 rounded-full filter blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs font-mono text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--text-core)] font-bold">Diani &amp; Ukunda</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-accent)] bg-[var(--bg-surface)] text-[var(--accent-gold)] text-xs font-mono uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />
            Based in Diani • Working across Kenya
          </div>

          <h1 className="text-h1 font-black tracking-tight leading-tight mb-6 text-[var(--text-core)]">
            Digital marketing for businesses in Diani and Ukunda
          </h1>

          <p className="text-body-lg text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed font-light mb-6">
            Give prospective customers a clear reason to choose your business. Goldfish Marketing creates websites, manages social media and produces photography and video for accommodation businesses, tour operators, restaurants and other service businesses.
          </p>

          <p className="text-sm font-medium text-[var(--text-core)] max-w-2xl mx-auto leading-relaxed mb-10">
            Based in Diani, we work directly with you to understand your customers, agree the scope and make the next step towards an enquiry easier.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto shadow-md">
              Discuss your project →
            </Link>
            <Link href="/portfolio" className="btn-outline w-full sm:w-auto">
              See our client work →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 2. CHOOSE THE SUPPORT YOU NEED ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow mb-3 block text-[var(--accent-gold)]">FOCUSED SERVICES</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Choose the support you need
            </h2>
            <p className="text-caption text-[var(--text-muted)] mt-2">
              Transparent planning ranges confirmed in an agreed scope before work begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Websites */}
            <div className="card-brand p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-2">
                  01 • Websites
                </span>
                <h3 className="text-xl font-bold text-[var(--text-core)] mb-2">
                  Website design and development
                </h3>
                <p className="text-xs font-mono font-bold text-emerald-500 mb-4">
                  Typically KShs 50,000–80,000 per business website
                </p>
                <p className="text-caption text-[var(--text-muted)] leading-relaxed mb-6">
                  Present your business clearly on mobile and desktop, explain your services and help visitors contact you. Pages, content and technical requirements are agreed before quoting. Custom apps, booking/payment integrations, photography, hosting and ongoing support are scoped separately.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <Link href="/contact?service=website" className="btn-primary text-xs py-2.5 px-4 text-center">
                  Discuss my website →
                </Link>
                <Link href="/services/smart-web-app-ecosystems" className="text-xs font-mono text-[var(--accent-gold)] hover:underline text-center">
                  Explore our website design service →
                </Link>
              </div>
            </div>

            {/* Service 2: Social Media */}
            <div className="card-brand p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-2">
                  02 • Social Presence
                </span>
                <h3 className="text-xl font-bold text-[var(--text-core)] mb-2">
                  Social media management
                </h3>
                <p className="text-xs font-mono font-bold text-emerald-500 mb-4">
                  KShs 15,000–25,000 per month
                </p>
                <p className="text-caption text-[var(--text-muted)] leading-relaxed mb-6">
                  Keep your business presence consistent with an agreed plan for platforms, publishing, responsibilities and reporting. Dedicated photography/video production, advertising management and ad spend are separate.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <Link href="/contact?service=social" className="btn-primary text-xs py-2.5 px-4 text-center">
                  Discuss social management →
                </Link>
                <Link href="/services/digital-presence-paid-growth-management" className="text-xs font-mono text-[var(--accent-gold)] hover:underline text-center">
                  Explore paid growth &amp; social →
                </Link>
              </div>
            </div>

            {/* Service 3: Content Production */}
            <div className="card-brand p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-2">
                  03 • Visual Content
                </span>
                <h3 className="text-xl font-bold text-[var(--text-core)] mb-2">
                  Photography and video
                </h3>
                <p className="text-xs font-mono font-bold text-emerald-500 mb-4">
                  KShs 50,000–100,000 per package
                </p>
                <p className="text-caption text-[var(--text-muted)] leading-relaxed mb-6">
                  Plan a collection of images and videos around what your customers need to see. Packages are intended to support approximately 8–12 weeks of content, depending on your publishing schedule. Shoot requirements, deliverables and formats are agreed in advance.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <Link href="/contact?service=content" className="btn-primary text-xs py-2.5 px-4 text-center">
                  Discuss a content package →
                </Link>
                <Link href="/services/brand-identity-content-creation" className="text-xs font-mono text-[var(--accent-gold)] hover:underline text-center">
                  Explore brand identity &amp; content →
                </Link>
              </div>
            </div>
          </div>

          {/* Extended scope banner */}
          <div className="mt-12 p-6 rounded-2xl bg-[var(--bg-primary)]/70 border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="text-sm font-bold text-[var(--text-core)]">
                Need specialized SEO, advertising, custom applications, or AI automation?
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                SEO, paid advertising, brand identity, custom applications, automation and analytics are also available through a tailored scope.
              </p>
            </div>
            <Link href="/services" className="btn-outline text-xs py-2.5 px-6 shrink-0">
              Explore all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 3. WEBSITE WORK FOR BUSINESSES HERE ON THE COAST ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow mb-3 block text-[var(--accent-gold)]">LOCAL EVIDENCE</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Website work for businesses here on the coast
            </h2>
            <p className="text-caption text-[var(--text-muted)] mt-2">
              Real projects built for coastal accommodation and restaurant operators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Project 1: Diani Ocean View */}
            <div className="card-brand p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-2">
                  Hospitality &bull; Diani Beach
                </span>
                <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                  Diani Ocean View Residences
                </h3>
                <p className="text-caption text-[var(--text-muted)] leading-relaxed mb-6">
                  A website project for an accommodation business in Diani. Explore the project and visit the client website.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-subtle)]">
                <Link href="/portfolio/diani-ocean-view-residences" className="text-xs font-mono font-bold text-[var(--accent-gold)] hover:underline">
                  Explore the project →
                </Link>
                <a
                  href="https://dianioceanviewresidences.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-core)] ml-auto"
                >
                  Visit client site ↗
                </a>
              </div>
            </div>

            {/* Project 2: Sizzlers */}
            <div className="card-brand p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-2">
                  Dining &bull; Diani Bazaar
                </span>
                <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                  Sizzlers Steakhouse &amp; Pub Diani
                </h3>
                <p className="text-caption text-[var(--text-muted)] leading-relaxed mb-6">
                  A restaurant website project. Explore the project and visit the client website.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-subtle)]">
                <Link href="/portfolio/sizzlers-steakhouse-diani" className="text-xs font-mono font-bold text-[var(--accent-gold)] hover:underline">
                  Explore the project →
                </Link>
                <a
                  href="https://sizzlersdiani.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-core)] ml-auto"
                >
                  Visit client site ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. LOCAL MEETINGS & PRACTICAL PROJECT PLANNING ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-eyebrow mb-3 block text-[var(--accent-gold)]">OPERATING ARRANGEMENTS</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Local meetings, practical project planning
            </h2>
          </div>

          <div className="p-8 lg:p-10 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-6 text-body text-[var(--text-muted)] leading-relaxed font-light">
            <p>
              <strong className="text-[var(--text-core)] font-semibold">Goldfish Marketing is based in Diani</strong> and works with businesses in Diani, Ukunda and Kwale County. We agree on-site visits and production arrangements according to your location and project needs.
            </p>
            <p>
              <strong className="text-[var(--text-core)] font-semibold">Outside the coast?</strong> We also work with businesses across Kenya through remote collaboration, with travel and on-site production scoped separately.
            </p>
            <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-core)] space-y-2 font-mono">
              <p>📍 <strong className="text-[var(--accent-gold)]">Premises Visits:</strong> Malack can visit your premises when appropriate.</p>
              <p>☕ <strong className="text-[var(--accent-gold)]">Meetings at Sizzlers, Diani Bazaar:</strong> Meetings at Sizzlers, Diani Bazaar, are by prior arrangement. Please contact us before travelling to meet.</p>
              <p>📞 <strong className="text-[var(--accent-gold)]">Direct Contact:</strong> <a href={`tel:+${SITE_CONFIG.WHATSAPP_NUMBER}`} className="hover:underline text-[var(--accent-gold)]">{SITE_CONFIG.PHONE_DISPLAY}</a> • <a href={`mailto:${SITE_CONFIG.OFFICIAL_INFO_EMAIL}`} className="hover:underline text-[var(--accent-gold)]">{SITE_CONFIG.OFFICIAL_INFO_EMAIL}</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. HOW WE GET STARTED ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow mb-3 block text-[var(--accent-gold)]">INTAKE PROTOCOL</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              How we get started
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-3xl font-black font-mono text-[var(--accent-gold)] mb-3 block">01</span>
              <h3 className="text-base font-bold text-[var(--text-core)] mb-2">Tell us your priority</h3>
              <p className="text-caption text-[var(--text-muted)] leading-relaxed">
                Tell us about your business, customers and immediate priority.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-3xl font-black font-mono text-[var(--accent-gold)] mb-3 block">02</span>
              <h3 className="text-base font-bold text-[var(--text-core)] mb-2">Discuss practical scope</h3>
              <p className="text-caption text-[var(--text-muted)] leading-relaxed">
                We discuss the work required, your budget and any existing website or content.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-3xl font-black font-mono text-[var(--accent-gold)] mb-3 block">03</span>
              <h3 className="text-base font-bold text-[var(--text-core)] mb-2">Agreed proposal</h3>
              <p className="text-caption text-[var(--text-muted)] leading-relaxed">
                You receive an agreed scope, price and proposed delivery milestones before work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. QUESTIONS BEFORE YOU ENQUIRE ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow mb-3 block text-[var(--accent-gold)]">COMMON QUESTIONS</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Questions before you enquire
            </h2>
          </div>

          <div className="space-y-6">
            {dianiFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                <h3 className="text-base font-bold text-[var(--text-core)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-caption text-[var(--text-muted)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. FINAL CTA / CLOSER ═══ */}
      <FooterCloser
        closerTitle="Tell us what your business needs next"
        closerText="Share your business name, the service you need and your preferred timing. Malack will help you identify the next step."
        primaryBtnText="Discuss your project"
        primaryBtnHref="/contact"
        secondaryBtnText="See our client work"
        secondaryBtnHref="/portfolio"
      />
    </main>
  );
}
