import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import ContactClient from './ContactClient';
import FooterCloser from '../components/FooterCloser';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Engineering & Growth Desk | Goldfish Marketing',
  },
  description:
    'Connect directly with our technical desk in Diani Beach, Kenya. 1-Tap WhatsApp, reserve a 15-minute strategy slot, or request a 3-page confidential growth diagnostic.',
  alternates: {
    canonical: 'https://www.goldfishmarketing.co.ke/contact',
  },
  openGraph: {
    title: 'Contact Engineering & Growth Desk | Goldfish Marketing',
    description:
      'Connect directly with our technical desk in Diani Beach, Kenya. Direct WhatsApp, 15-minute strategy slots, and confidential 24-hour diagnostics.',
    url: 'https://www.goldfishmarketing.co.ke/contact',
    locale: 'en_KE',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Goldfish Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Engineering & Growth Desk | Goldfish Marketing',
    description:
      'Connect directly with our technical desk in Diani Beach, Kenya. Direct WhatsApp, 15-minute strategy slots, and confidential 24-hour diagnostics.',
    images: ['/og-image.png'],
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.goldfishmarketing.co.ke/contact/#breadcrumb',
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
            name: 'Contact',
            item: 'https://www.goldfishmarketing.co.ke/contact',
          },
        ],
      },
      {
        '@type': 'ContactPage',
        '@id': 'https://www.goldfishmarketing.co.ke/contact/#webpage',
        url: 'https://www.goldfishmarketing.co.ke/contact',
        name: 'Contact Engineering & Growth Desk | Goldfish Marketing',
        description: 'Direct communication channels for Goldfish Marketing in Diani Beach, Kenya.',
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.goldfishmarketing.co.ke/#localbusiness',
        name: 'Goldfish Marketing',
        url: 'https://www.goldfishmarketing.co.ke',
        telephone: `+${SITE_CONFIG.WHATSAPP_NUMBER}`,
        email: SITE_CONFIG.OFFICIAL_INFO_EMAIL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Diani Beach Road, Diani Bazaar',
          addressLocality: 'Diani Beach',
          addressRegion: 'Kwale County',
          postalCode: '80401',
          addressCountry: 'KE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -4.2797,
          longitude: 39.5947,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '13:00',
          },
        ],
      },
    ],
  };

  return (
    <main className="w-full flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ═══ SECTION 1: HERO & SETUP ═══ */}
      <section className="section-padding px-6 lg:px-10 relative overflow-hidden border-b border-[var(--border-subtle)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-gold)]/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs font-mono text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--text-core)] font-bold">Contact</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Diani Beach HQ Live • Avg Response: &lt; 15 Mins
            </span>
          </div>

          <h1 className="text-h2 lg:text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 leading-tight">
            Let&apos;s Build Systems That Generate Revenue.
          </h1>

          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto font-light mb-4">
            Connect directly with our technical strategists. Pick the communication mode that suits your workflow: 1-Tap WhatsApp, a 15-minute strategy call, or a comprehensive 24-hour diagnostic teardown.
          </p>
        </div>
      </section>

      {/* ═══ SECTION 2: TRI-MODAL CONTACT HUB ═══ */}
      <section className="py-16 px-6 lg:px-10 bg-[var(--bg-primary)]">
        <Suspense
          fallback={
            <div className="max-w-5xl mx-auto p-12 text-center text-xs font-mono text-[var(--text-muted)] card-brand">
              Initializing Contact Hub...
            </div>
          }
        >
          <ContactClient />
        </Suspense>
      </section>

      {/* ═══ SECTION 3: THE FIRST 24 HOURS TRANSPARENCY BLUEPRINT ═══ */}
      <section className="py-16 px-6 lg:px-10 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-eyebrow text-xs font-mono block mb-2">PROCESS TRANSPARENCY</span>
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-[var(--text-core)]">
              What Happens in Your First 24 Hours
            </h2>
            <p className="text-xs text-[var(--text-muted)] font-light mt-2">
              We eliminate ambiguity from the start. Here is our step-by-step intake protocol:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-2">
                  HOUR 0 — 2
                </span>
                <h3 className="text-sm font-bold text-[var(--text-core)] mb-2">
                  Automated Intake &amp; Security Shield
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                  Your inquiry is assigned directly to a lead systems architect. All shared domains and financial figures are locked under mutual NDA protocols.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-2">
                  HOUR 2 — 12
                </span>
                <h3 className="text-sm font-bold text-[var(--text-core)] mb-2">
                  Technical Architecture &amp; Latency Audit
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                  We run live telemetry scans against your mobile speed on Safaricom 4G, schema entity recognition, booking engine friction, and local search rankings.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-2">
                  HOUR 12 — 24
                </span>
                <h3 className="text-sm font-bold text-[var(--text-core)] mb-2">
                  Delivery of Your Bespoke Action Plan
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                  You receive an actionable 3-page teardown detailing exact conversion bottlenecks, potential revenue lift, and a transparent implementation roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: PHYSICAL LOCATION & OPERATING HOURS (LOCAL SEO & TRUST) ═══ */}
      <section className="py-16 px-6 lg:px-10 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-2">
                HEADQUARTERS &amp; PHYSICAL PRESENCE
              </span>
              <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                Diani Beach Technical Operations
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light mb-4">
                Goldfish Marketing operates out of Diani Beach, Kwale County, serving clients throughout the Kenyan Coast, Nairobi, and East Africa.
              </p>
              <div className="text-xs font-mono space-y-1.5 text-[var(--text-core)]">
                <p>📍 <strong className="text-[var(--text-core)]">Address:</strong> {SITE_CONFIG.HQ_ADDRESS}, {SITE_CONFIG.HQ_REGION}, {SITE_CONFIG.HQ_COUNTRY} (P.O. Box {SITE_CONFIG.HQ_POSTAL_CODE})</p>
                <p>📞 <strong className="text-[var(--text-core)]">Direct Line / WhatsApp:</strong> <a href={`tel:+${SITE_CONFIG.WHATSAPP_NUMBER}`} className="text-[var(--accent-gold)] hover:underline">{SITE_CONFIG.PHONE_DISPLAY}</a></p>
                <p>✉️ <strong className="text-[var(--text-core)]">Official Inquiries:</strong> <a href={`mailto:${SITE_CONFIG.OFFICIAL_INFO_EMAIL}`} className="text-[var(--accent-gold)] hover:underline">{SITE_CONFIG.OFFICIAL_INFO_EMAIL}</a></p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-2">
                OPERATIONAL COVERAGE &amp; HOURS
              </span>
              <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                East Africa Time (EAT / UTC+3)
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light mb-4">
                Our engineering team maintains high-velocity response times during core operating hours, with 24/7 automated triage for critical SLA incidents.
              </p>
              <div className="text-xs font-mono space-y-1.5 text-[var(--text-core)]">
                <p>🗓️ <strong className="text-[var(--text-core)]">Monday – Friday:</strong> 08:00 – 18:00 EAT</p>
                <p>🗓️ <strong className="text-[var(--text-core)]">Saturday:</strong> 09:00 – 13:00 EAT (Strategy &amp; Emergency Sprints)</p>
                <p>🗓️ <strong className="text-[var(--text-core)]">Sunday:</strong> Closed (Automated System Monitoring Active)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: TRUST & SLA ANCHORS ═══ */}
      <section className="py-12 px-6 lg:px-10 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* SLA */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-gold)] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                15-Minute Response SLA
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-light">
                Direct founder and engineering replies during East Africa business hours.
              </p>
            </div>
          </div>

          {/* NDA */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-gold)] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                KDPA 2019 &amp; NDA Privacy
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-light">
                All client metrics, revenue data, and strategy briefs remain strictly confidential.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-gold)] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                Official Communications
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-light">
                Direct pipeline email:{' '}
                <a href="mailto:info@goldfishmarketing.co.ke" className="text-[var(--accent-gold)] hover:underline">
                  info@goldfishmarketing.co.ke
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Closer */}
      <FooterCloser
        closerTitle="Explore Our Proven Case Studies or Service Engines."
        closerText="Review verified implementations across Kenyan hospitality and SMEs, or explore our six core technical capabilities."
        primaryBtnText="Explore Client Case Studies"
        primaryBtnHref="/portfolio"
        secondaryBtnText="View Capability Engines"
        secondaryBtnHref="/services"
      />
    </main>
  );
}
