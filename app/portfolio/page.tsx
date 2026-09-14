import type { Metadata } from 'next';
import Link from 'next/link';
import PortfolioClient from './PortfolioClient';
import FooterCloser from '../components/FooterCloser';
import ClientTrustMarquee from './components/ClientTrustMarquee';
import LiveClientShowcase from './components/LiveClientShowcase';
import { ACTUAL_CLIENTS } from './data/actualClientsData';

export const metadata: Metadata = {
  title: {
    absolute: 'Client Results & Growth Case Studies | Goldfish Marketing',
  },
  description:
    'Real business outcomes. Explore verified case studies showing how Goldfish Marketing builds high-speed web platforms, dominates search, scales paid ROAS, and automates SME workflows across Kenya.',
  alternates: {
    canonical: 'https://www.goldfishmarketing.co.ke/portfolio',
  },
  openGraph: {
    title: 'Client Results & Growth Case Studies | Goldfish Marketing',
    description:
      'Verified performance outcomes across hospitality direct bookings, SME automation, and full-funnel paid growth in Kenya and East Africa.',
    url: 'https://www.goldfishmarketing.co.ke/portfolio',
    locale: 'en_KE',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Goldfish Marketing Case Studies & Results' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Results & Growth Case Studies | Goldfish Marketing',
    description:
      'Verified performance outcomes across hospitality direct bookings, SME automation, and full-funnel paid growth in Kenya and East Africa.',
    images: ['/og-image.png'],
  },
};

export default function PortfolioPage() {
  const impactCards = [
    {
      value: '12,480+ Hours',
      sub: 'Saved Annually',
      label: 'Manual Admin & Repeat Workflows Reclaimed via AI Automation',
    },
    {
      value: 'KES 185M+',
      sub: '($1.4M+ USD Reclaimed)',
      label: 'Predatory OTA Commissions & Wasted Media Spend Eliminated',
    },
    {
      value: '42 Systems',
      sub: 'Active in Production',
      label: 'Custom Web Platforms, Search Networks & AI Growth Engines Live',
    },
  ];

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.goldfishmarketing.co.ke/portfolio/#breadcrumb',
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
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.goldfishmarketing.co.ke/portfolio/#collection',
        name: 'Client Results & Commercial Case Studies',
        description:
          'Verified engineering case studies and client ROI tear-downs by Goldfish Marketing.',
        url: 'https://www.goldfishmarketing.co.ke/portfolio',
        publisher: {
          '@type': 'Organization',
          name: 'Goldfish Marketing',
          url: 'https://www.goldfishmarketing.co.ke',
        },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://www.goldfishmarketing.co.ke/portfolio/#clients',
        name: 'Verified Client Platforms Engineered by Goldfish Marketing',
        itemListElement: ACTUAL_CLIENTS.map((client, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: client.name,
          url: client.liveUrl,
          description: client.tagline,
        })),
      },
    ],
  };

  return (
    <main className="w-full flex flex-col bg-[var(--bg-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      {/* SECTION 1: HERO */}
      <section className="section-padding px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs font-mono text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--text-core)] font-bold">Portfolio</span>
          </nav>

          <span className="text-eyebrow mb-4 block font-mono">CLIENT RESULTS &amp; CASE STUDIES</span>
          <h1 className="text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 max-w-4xl leading-tight">
            Proven Results: Real Growth Systems Engineered for Ambitious Businesses.
          </h1>
          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            We measure success by verifiable commercial outcomes — more direct bookings, higher checkout conversion rates, lower customer acquisition costs, and hours of operational drag eliminated.
          </p>

          {/* Total Impact Tracker Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {impactCards.map((card, idx) => (
              <div
                key={idx}
                className="card-brand p-8 text-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-gold)]/50 transition-all duration-300"
              >
                <div className="text-2xl lg:text-3xl font-black font-mono text-[var(--accent-gold)] tracking-tight">
                  {card.value}
                </div>
                <div className="text-xs font-mono font-bold text-[var(--text-core)] mb-2">
                  {card.sub}
                </div>
                <p className="text-caption leading-relaxed max-w-xs mx-auto text-[var(--text-muted)]">
                  {card.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[11px] font-mono text-[var(--text-muted)] flex items-center justify-center gap-2">
            <span>🛡️ Audited Provenance: Verified via Booking Engine Telemetry, GA4 &amp; Meta CAPI</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTINUOUS LIVE CLIENT TRUST TICKER */}
      <ClientTrustMarquee />

      {/* SECTION 3: VERIFIED CLIENT PRODUCTION NETWORK (INTERACTIVE HUB) */}
      <LiveClientShowcase />

      {/* SECTION 4: ARCHITECTURAL CASE STUDIES & TEARDOWNS */}
      <PortfolioClient />

      {/* GLOBAL FOOTER CLOSER */}
      <FooterCloser />
    </main>
  );
}
