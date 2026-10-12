import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PUBLISHED_PROJECTS } from '../data/publishedProjects';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import FooterCloser from '../../components/FooterCloser';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return [...PUBLISHED_PROJECTS, ...PORTFOLIO_PROJECTS].map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const publishedProject = PUBLISHED_PROJECTS.find((p) => p.slug === params.slug);
  const portfolioProject = PORTFOLIO_PROJECTS.find((p) => p.slug === params.slug);

  if (params.slug === 'diani-ocean-view-residences') {
    return {
      title: { absolute: 'Diani Ocean View Residences: Flagship Hospitality Case Study | Goldfish Marketing' },
      description:
        'How Goldfish Marketing engineered an autonomous luxury hospitality ecosystem: full-funnel market research, 4K master shoot, 90-day social media strategy, PesaPal v3 direct booking, Beds24 two-way sync, in-villa PWA concierge, GA4 telemetry, and KRA eTIMS tax compliance.',
      alternates: {
        canonical: 'https://www.goldfishmarketing.co.ke/portfolio/diani-ocean-view-residences',
      },
      openGraph: {
        title: 'Diani Ocean View Residences: Autonomous Hospitality Case Study',
        description:
          'From 15–20% OTA commission dependency to direct-booking autonomy with PesaPal v3, Beds24 2-way sync, 4K media production, and AI operations.',
        url: 'https://www.goldfishmarketing.co.ke/portfolio/diani-ocean-view-residences',
        type: 'article',
      },
    };
  }

  if (publishedProject) {
    return {
      title: { absolute: `${publishedProject.name} Project Summary | Goldfish Marketing` },
      description: publishedProject.description,
      alternates: {
        canonical: `https://www.goldfishmarketing.co.ke/portfolio/${publishedProject.slug}`,
      },
    };
  }

  if (portfolioProject) {
    return {
      title: { absolute: `${portfolioProject.title} | Goldfish Marketing` },
      description: portfolioProject.description,
      alternates: {
        canonical: `https://www.goldfishmarketing.co.ke/portfolio/${portfolioProject.slug}`,
      },
    };
  }

  return {
    title: { absolute: 'Explore Client Case Studies | Goldfish Marketing' },
    description: 'Explore empirical client website projects and digital growth ecosystems.',
    robots: { index: false, follow: true },
  };
}

export default function ProjectPage({ params }: Props) {
  const publishedProject = PUBLISHED_PROJECTS.find((p) => p.slug === params.slug);
  const portfolioProject = PORTFOLIO_PROJECTS.find((p) => p.slug === params.slug);

  if (!publishedProject && !portfolioProject) {
    notFound();
  }

  // ═══════════════════════════════════════════════════════════════
  // SPECIALIZED FLAGSHIP CASE STUDY: DIANI OCEAN VIEW RESIDENCES
  // ═══════════════════════════════════════════════════════════════
  if (params.slug === 'diani-ocean-view-residences') {
    const caseStudySchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Diani Ocean View Residences: Luxury Hospitality Transformation Case Study',
      'description':
        'How Goldfish Marketing transformed a premier coastal estate with market research, 4K master media shoot, 90-day social media strategy, PesaPal direct booking, Beds24 two-way channel sync, GA4 analytics, and AI tax compliance.',
      'author': {
        '@type': 'Person',
        'name': 'Malack Bwana',
        'jobTitle': 'Company Director & Head Strategist',
        'url': 'https://www.goldfishmarketing.co.ke/about',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Goldfish Marketing',
        'url': 'https://www.goldfishmarketing.co.ke',
      },
      'about': {
        '@type': 'LodgingBusiness',
        'name': 'Diani Ocean View Residences',
        'url': 'https://dianioceanviewresidences.com/',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Diani Beach',
          'addressRegion': 'Kwale County',
          'addressCountry': 'KE',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': -4.2973448,
          'longitude': 39.5823777,
        },
        'sameAs': [
          'https://maps.app.goo.gl/Q2M7NKkEbsC6s4Wn9',
          'https://www.instagram.com/dianioceanviewresidences/',
          'https://www.facebook.com/dianioceanviewresidences',
          'https://www.tiktok.com/@dianioceanviewresidences',
          'https://www.youtube.com/channel/UC1-0Ujt7kIol3GG4YJjNUrg',
          'https://x.com/dianioceanviews',
        ],
      },
    };

    return (
      <main className="w-full flex flex-col min-h-screen">
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
        />

        {/* ═══ 1. HERO HEADER & PROJECT METADATA ═══ */}
        <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--accent-gold)]/8 rounded-full filter blur-[140px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-6">
              <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/portfolio" className="hover:text-[var(--accent-gold)] transition-colors">Work</Link>
              <span>/</span>
              <span className="text-[var(--accent-gold)] font-bold">Diani Ocean View Residences</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold text-[var(--accent-gold)]">
                FLAGSHIP HOSPITALITY CASE STUDY &bull; DIANI BEACH, KENYA
              </span>
            </div>

            <h1 className="text-h1 font-black tracking-tight leading-tight mb-6 max-w-5xl">
              Diani Ocean View Residences: From OTA Dependency to Autonomous Luxury Hospitality Powerhouse
            </h1>

            <p className="text-body-lg text-[var(--text-muted)] font-light leading-relaxed max-w-4xl mb-10">
              How Goldfish Marketing engineered an end-to-end luxury transformation for a premier beachfront estate: full-funnel market research, an on-site 4K master shoot, a 90-day multi-channel social engine, bespoke PesaPal v3 direct booking, Beds24 two-way channel synchronization, an in-villa PWA digital concierge, GA4 data telemetry, and multimodal AI tax compliance.
            </p>

            {/* Executive Metadata Badges Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-8">
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                  Client Entity
                </span>
                <p className="text-xs font-bold text-[var(--text-core)]">
                  Diani Ocean View Residences
                </p>
                <span className="text-[10px] font-mono text-[var(--accent-gold)]">
                  Viczko Africa Limited
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                  Location &amp; Sector
                </span>
                <p className="text-xs font-bold text-[var(--text-core)]">
                  Diani Beach, Kwale County
                </p>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  Beachfront Luxury Vacation Villas
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                  Rate Tier
                </span>
                <p className="text-xs font-bold text-emerald-500 font-mono">
                  $200 &ndash; $600 / night
                </p>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  Multi-Currency Seasonal Rates
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                  Live Production URL
                </span>
                <a
                  href="https://dianioceanviewresidences.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-[var(--accent-gold)] hover:underline inline-flex items-center gap-1"
                >
                  <span>dianioceanviewresidences.com</span>
                  <span>↗</span>
                </a>
                <span className="text-[10px] font-mono text-emerald-500 block">
                  ● Verified Production Online
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://dianioceanviewresidences.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 px-6 shadow-sm inline-flex items-center gap-2"
              >
                <span>Visit Live Guest Platform</span>
                <span>↗</span>
              </a>
              <a
                href="https://maps.app.goo.gl/Q2M7NKkEbsC6s4Wn9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-3 px-6 inline-flex items-center gap-2"
              >
                <span>Verified Google Maps Profile</span>
                <span>↗</span>
              </a>
              <Link href="/contact?service=website" className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors ml-auto">
                Discuss a similar hospitality build &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ 2. QUANTIFIABLE BUSINESS IMPACT (4-KPI METRIC STRIP) ═══ */}
        <section className="py-16 px-6 lg:px-10 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-eyebrow mb-2 block font-mono text-[var(--accent-gold)]">
                MEASURABLE ROI &bull; CLIENT OUTCOMES
              </span>
              <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
                Quantifiable Business Results
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-center">
                <span className="text-3xl lg:text-4xl font-black font-mono text-[var(--accent-gold)] block mb-1">
                  15%&ndash;20%
                </span>
                <span className="text-xs font-bold text-[var(--text-core)] block mb-1">
                  Net Margin Reclaimed
                </span>
                <p className="text-[11px] text-[var(--text-muted)] font-light leading-relaxed">
                  Direct bookings bypass Airbnb and Booking.com commissions, saving hundreds of dollars on each high-value guest stay.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-center">
                <span className="text-3xl lg:text-4xl font-black font-mono text-emerald-500 block mb-1">
                  0%
                </span>
                <span className="text-xs font-bold text-[var(--text-core)] block mb-1">
                  Calendar Collisions
                </span>
                <p className="text-[11px] text-[var(--text-muted)] font-light leading-relaxed">
                  Real-time bi-directional Beds24 channel sync pushes automated blockouts across all OTAs the second a direct booking locks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-center">
                <span className="text-3xl lg:text-4xl font-black font-mono text-[var(--accent-gold)] block mb-1">
                  90 Days
                </span>
                <span className="text-xs font-bold text-[var(--text-core)] block mb-1">
                  4K Media Content Runway
                </span>
                <p className="text-[11px] text-[var(--text-muted)] font-light leading-relaxed">
                  On-site master shoot captured comprehensive architectural, culinary, and lifestyle aerials powering 3 months of publishing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-center">
                <span className="text-3xl lg:text-4xl font-black font-mono text-emerald-500 block mb-1">
                  100%
                </span>
                <span className="text-xs font-bold text-[var(--text-core)] block mb-1">
                  KRA eTIMS Audit Readiness
                </span>
                <p className="text-[11px] text-[var(--text-muted)] font-light leading-relaxed">
                  Multimodal Gemini Vision OCR scans physical receipts, extracting 16% VAT, CU invoice numbers, and CapEx vs OpEx segregation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3. PRE-INTERVENTION BOTTLENECKS ═══ */}
        <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="text-eyebrow mb-2 block font-mono text-[var(--accent-gold)]">
                THE CHALLENGE &bull; BEFORE GOLDFISH
              </span>
              <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] mb-4">
                The Operational Bottlenecks Facing Boutique Coastal Hospitality
              </h2>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                Prior to our engagement, Diani Ocean View Residences suffered from the classic dilemmas facing independent luxury properties along the Kenyan coast:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-red-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <h3 className="text-sm font-bold text-[var(--text-core)] uppercase tracking-wide">
                    1. Severe OTA Commission Drain (15%&ndash;20%)
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                  The property was 100% dependent on Airbnb and Booking.com. On a 7-night booking at $400/night ($2,800 total), third-party platforms skimmed up to $560 in commission fees—bleeding significant margins that could have fueled direct expansion and marketing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-red-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <h3 className="text-sm font-bold text-[var(--text-core)] uppercase tracking-wide">
                    2. Calendar Fragmentation &amp; Double-Booking Risk
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                  Availability was tracked manually across WhatsApp messages, emails, and Excel spreadsheets. In peak festive seasons, manual calendar lag created constant anxiety of catastrophic double-bookings across multiple listing channels.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-red-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <h3 className="text-sm font-bold text-[var(--text-core)] uppercase tracking-wide">
                    3. KRA eTIMS Tax Compliance &amp; Lost Paper Receipts
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                  Daily maintenance, food provisioning, pool chemicals, and staff petty cash produced hundreds of crumpled physical paper receipts. Reconciling multi-currency KES/USD payments with Kenya Revenue Authority (KRA) eTIMS mandates took 15+ hours weekly with severe audit vulnerability.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-red-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <h3 className="text-sm font-bold text-[var(--text-core)] uppercase tracking-wide">
                    4. In-Villa Support Friction &amp; Guest Anxieties
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                  International high-net-worth guests arrived with recurring questions regarding coastal grid power reliability, Wi-Fi connectivity, pool operation, and local Tuk-Tuk fare gouging—resulting in constant phone calls to property managers at all hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4. STRATEGIC MARKET RESEARCH & AUDIENCE PERSONA BLUEPRINT ═══ */}
        <section className="section-padding px-6 lg:px-10 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="text-eyebrow mb-2 block font-mono text-[var(--accent-gold)]">
                RESEARCH FOUNDATION &bull; JULY 2026 BLUEPRINT
              </span>
              <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] mb-4">
                Full-Funnel Market Research &amp; Target Persona Psychology
              </h2>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                Before writing a line of code or holding a camera, Goldfish Marketing authored a comprehensive Full-Funnel Marketing Blueprint mapping out 3 distinct high-value buyer personas, their booking psychology, lead times, and tailored conversion offers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              {/* Persona A */}
              <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] font-bold">
                      SEGMENT A &bull; INTERNATIONAL
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      60&ndash;150d Lead Time
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-core)] mb-1">
                    &ldquo;The Bucket-List Escape&rdquo;
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light mb-4">
                    Affluent travelers from Western Europe (UK, Germany, France), US, and Middle East seeking exotic coastal luxury post-safari.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[var(--border-subtle)] text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-[var(--accent-gold)] uppercase block">Key Triggers:</span>
                      <p className="text-[11px] text-[var(--text-core)] font-light">Safari + beach combo, tropical waters, private villa exclusivity.</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-red-400 uppercase block">Primary Objections:</span>
                      <p className="text-[11px] text-[var(--text-muted)] font-light">Safety/security in East Africa, complex transfers, verified photos vs reality.</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-emerald-500 uppercase block">Converting Offer:</span>
                      <p className="text-[11px] font-medium text-[var(--text-core)]">&ldquo;Your Private Indian Ocean Sanctuary&rdquo; &bull; Seamless Beach &amp; Safari bundle with private chef on 7+ nights.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Persona B */}
              <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 font-bold">
                      SEGMENT B &bull; REGIONAL
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      7&ndash;21d Lead Time
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-core)] mb-1">
                    &ldquo;The Executive Weekender&rdquo;
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light mb-4">
                    High-earning Nairobi C-suite executives (Karen, Muthaiga, Runda) and regional travelers (Kampala, Kigali) seeking fast escapes.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[var(--border-subtle)] text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-[var(--accent-gold)] uppercase block">Key Triggers:</span>
                      <p className="text-[11px] text-[var(--text-core)] font-light">Fast escape from urban stress, direct Nairobi &rarr; Ukunda 45-min flight access.</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-red-400 uppercase block">Primary Objections:</span>
                      <p className="text-[11px] text-[var(--text-muted)] font-light">Price-to-value ratio vs hotels, weather seasonality, flight coordination.</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-emerald-500 uppercase block">Converting Offer:</span>
                      <p className="text-[11px] font-medium text-[var(--text-core)]">&ldquo;Flight takes 45 mins. Paradise lasts all weekend.&rdquo; &bull; VIP Ukunda transfer bundle + late Sunday checkout.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Persona C */}
              <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 font-bold">
                      SEGMENT C &bull; EXPAT / LOCAL
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      3&ndash;14d Lead Time
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-core)] mb-1">
                    &ldquo;The Staycation Insider&rdquo;
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light mb-4">
                    Diplomats, NGO directors, foreign company executives, and local high-net-worth residents living in Kenya.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[var(--border-subtle)] text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-[var(--accent-gold)] uppercase block">Key Triggers:</span>
                      <p className="text-[11px] text-[var(--text-core)] font-light">Spontaneous staycations, hosting visiting family, luxury workcation.</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-red-400 uppercase block">Primary Objections:</span>
                      <p className="text-[11px] text-[var(--text-muted)] font-light">Boredom with standard coastal hotels, rigid check-in policies, lack of exclusivity.</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-emerald-500 uppercase block">Converting Offer:</span>
                      <p className="text-[11px] font-medium text-[var(--text-core)]">&ldquo;Your Second Home on the Coast&rdquo; &bull; Expat Insider Pass (15% repeat discount, flexible cancellation, private dhow cruise).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Strategy Benchmarks */}
            <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-sm font-bold text-[var(--text-core)] mb-1">
                  Enforced Blueprint Performance Targets:
                </h4>
                <p className="text-xs text-[var(--text-muted)] font-light">
                  Target direct booking ratio: <strong>&gt;55%</strong> &bull; Target ROAS: <strong>&gt;4.5x</strong> on local/expat campaigns, <strong>&gt;3.8x</strong> on international &bull; Expat repeat rate: <strong>&gt;25% within 12 months</strong>.
                </p>
              </div>
              <span className="px-4 py-2 rounded-full bg-[var(--accent-gold)]/15 border border-[var(--accent-gold)]/30 text-xs font-mono font-bold text-[var(--accent-gold)] shrink-0">
                Strategic Research Blueprint
              </span>
            </div>
          </div>
        </section>

        {/* ═══ 5. ON-SITE 4K MASTER SHOOT & 90-DAY SOCIAL MEDIA ENGINE ═══ */}
        <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="text-eyebrow mb-2 block font-mono text-[var(--accent-gold)]">
                CREATIVE DIRECTION &bull; MEDIA ASSETS
              </span>
              <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] mb-4">
                On-Site 4K Master Shoot &amp; 90-Day Social Content Engine
              </h2>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                Luxury hospitality cannot be sold on stock photography. Goldfish Marketing directed and executed a high-fidelity on-site production shoot, creating an extensive asset vault that fuels 90 days of structured multi-channel social media marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Master Shoot Capabilities */}
              <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <span className="text-2xl mb-4 block">📸</span>
                <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                  The On-Site 4K Master Shoot
                </h3>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] font-bold">&bull;</span>
                    <span><strong>Architectural &amp; Interior Photography:</strong> Editorial photography capturing *The Ocean View Villa* and *The Apartment Sanctuary* (85 m² private sanctuary) with morning, midday, and twilight ambient lighting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] font-bold">&bull;</span>
                    <span><strong>Cinematic 4K Short-Form Video:</strong> Ultra-smooth gimbal and drone aerials capturing Indian Ocean panoramas, private plunge pools, and beachfront access.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] font-bold">&bull;</span>
                    <span><strong>Culinary &amp; Hospitality Lifestyle:</strong> Private chef gourmet dining sequences, fresh coastal seafood preparation, and tropical breakfast spreads.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] font-bold">&bull;</span>
                    <span><strong>Operational Confidence Proof:</strong> 4K documentation of the 24/7 solar backup system, gated security, and fiber Wi-Fi workcation spaces.</span>
                  </li>
                </ul>
              </div>

              {/* 90-Day Social Engine */}
              <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <span className="text-2xl mb-4 block">📱</span>
                <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                  90-Day Multi-Channel Social Engine
                </h3>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">&bull;</span>
                    <span><strong>Pillar 1: Sensory Escapism (Reels &amp; TikTok):</strong> Short-form cinematic room tours, ocean waves, and poolside relaxation driving viral organic reach.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">&bull;</span>
                    <span><strong>Pillar 2: Executive Weekender (Instagram &amp; Facebook):</strong> Geo-targeted campaigns to Nairobi professionals: *&ldquo;Flight takes 45 mins. Paradise lasts all weekend.&rdquo;*</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">&bull;</span>
                    <span><strong>Pillar 3: Trust &amp; Reliability Stories:</strong> Highlighting uninterrupted solar power, high-speed fiber Wi-Fi, and private airport transfer guarantees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">&bull;</span>
                    <span><strong>Pillar 4: Expat Exclusives &amp; Upsells:</strong> Dhow sunset cruise promotions, private dining offers, and *Expat Inner Circle* last-minute weekend slots.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Omnichannel Verification Matrix */}
            <div>
              <div className="mb-6">
                <span className="text-eyebrow mb-1 block font-mono text-[var(--accent-gold)]">
                  VERIFIED DIGITAL FOOTPRINT
                </span>
                <h3 className="text-xl font-black tracking-tight text-[var(--text-core)]">
                  Omnichannel Profiles Established &amp; Configured
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <a
                  href="https://maps.app.goo.gl/Q2M7NKkEbsC6s4Wn9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] transition-colors text-center block group"
                >
                  <span className="text-xl mb-1 block">📍</span>
                  <span className="text-xs font-bold text-[var(--text-core)] group-hover:text-[var(--accent-gold)] block">Google Maps</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Verified GBP ↗</span>
                </a>

                <a
                  href="https://www.instagram.com/dianioceanviewresidences/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] transition-colors text-center block group"
                >
                  <span className="text-xl mb-1 block">📸</span>
                  <span className="text-xs font-bold text-[var(--text-core)] group-hover:text-[var(--accent-gold)] block">Instagram</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">@dianioceanviews ↗</span>
                </a>

                <a
                  href="https://www.facebook.com/dianioceanviewresidences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] transition-colors text-center block group"
                >
                  <span className="text-xl mb-1 block">📘</span>
                  <span className="text-xs font-bold text-[var(--text-core)] group-hover:text-[var(--accent-gold)] block">Facebook</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Official Page ↗</span>
                </a>

                <a
                  href="https://www.tiktok.com/@dianioceanviewresidences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] transition-colors text-center block group"
                >
                  <span className="text-xl mb-1 block">🎵</span>
                  <span className="text-xs font-bold text-[var(--text-core)] group-hover:text-[var(--accent-gold)] block">TikTok</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">@dianioceanviews ↗</span>
                </a>

                <a
                  href="https://www.youtube.com/channel/UC1-0Ujt7kIol3GG4YJjNUrg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] transition-colors text-center block group"
                >
                  <span className="text-xl mb-1 block">🎥</span>
                  <span className="text-xs font-bold text-[var(--text-core)] group-hover:text-[var(--accent-gold)] block">YouTube</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">4K Channel ↗</span>
                </a>

                <a
                  href="https://x.com/dianioceanviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] transition-colors text-center block group"
                >
                  <span className="text-xl mb-1 block">🐦</span>
                  <span className="text-xs font-bold text-[var(--text-core)] group-hover:text-[var(--accent-gold)] block">X (Twitter)</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">@dianioceanviews ↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. THE 8 ENGINEERING, DATA & OPERATIONAL PILLARS ═══ */}
        <section className="section-padding px-6 lg:px-10 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="text-eyebrow mb-2 block font-mono text-[var(--accent-gold)]">
                ENGINEERING DEPTH &bull; DELIVERED ARCHITECTURE
              </span>
              <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] mb-4">
                The 8 Architectural Pillars of the Ecosystem
              </h2>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                Behind the luxury visual aesthetic lies an enterprise software and data stack engineered for sub-second performance, fintech reliability, and autonomous operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pillar 1: Full Brand Identity */}
              <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-gold)] font-bold block mb-2">
                    PILLAR 01 &bull; BRAND IDENTITY &amp; CRO
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                    Editorial Swahili Modern Design System
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-4">
                    Designed an exclusive visual identity blending a midnight-abyss palette with warm ivory and burnished gold diamond accents. Built comprehensive storytelling for both units (*The Ocean View Villa* &amp; *The Apartment Sanctuary*) with a direct privilege ledger proving that booking direct saves 10%–20% over OTAs.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Next.js 16</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Tailwind CSS v4</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Luxury CRO</span>
                </div>
              </div>

              {/* Pillar 2: PesaPal v3 FinTech */}
              <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-500 font-bold block mb-2">
                    PILLAR 02 &bull; AFRICAN FINTECH INTEGRATION
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                    CBK-Regulated PesaPal v3 Direct Payment Rails
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-4">
                    Integrated Central Bank of Kenya (CBK)-regulated PesaPal v3, enabling frictionless direct checkout via Safaricom M-Pesa (STK Push) and international Visa/Mastercard/Amex cards. Built automated 50% flexible deposit holds and IPN webhook reconciliation compliant with Viczko Africa Limited.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">PesaPal v3 API</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">M-Pesa STK Push</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">IPN Webhook Listener</span>
                </div>
              </div>

              {/* Pillar 3: Beds24 2-Way Sync */}
              <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-gold)] font-bold block mb-2">
                    PILLAR 03 &bull; CHANNEL MANAGEMENT
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                    Bi-Directional Beds24 Sync &bull; Zero Double Bookings
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-4">
                    Engineered a true bi-directional synchronization bridge connecting Beds24 (Airbnb, Booking.com, VRBO, Expedia) with the direct website. Direct reservations instantly push calendar blockouts to external OTAs, while OTA bookings pull automatically into the internal CRM with stay stitching.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Beds24 REST API</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Two-Way Calendar Sync</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Executive Stay Mode</span>
                </div>
              </div>

              {/* Pillar 4: In-Villa PWA Concierge */}
              <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold block mb-2">
                    PILLAR 04 &bull; IN-VILLA GUEST EXPERIENCE
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                    QR-Activated PWA Digital Guest Concierge
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-4">
                    Custom progressive web app launched via in-villa QR codes without app store downloads. Features a Live Intelligence Bar with real-time Indian Ocean tides and solar inverter grid monitor, an interactive self-healing troubleshooting wizard (Wi-Fi, AC, pool), and an anti-price-gouging Tuk-Tuk calculator.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Progressive Web App</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Live Tides &amp; Solar Sensor</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Tuk-Tuk Rate Engine</span>
                </div>
              </div>

              {/* Pillar 5: GA4 & Search Console Setup */}
              <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold block mb-2">
                    PILLAR 05 &bull; EMPIRICAL DATA &amp; MEASUREMENT
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                    Google Analytics 4 (G-TQPRDGQKZN) &amp; Search Console
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-4">
                    Architected an enterprise tracking layer with custom hospitality milestones (`view_unit`, `check_dates`, `deposit_success`, `concierge_qr_scan`). Built clean 30&ndash;90 day organic baselines to harvest empirical traffic data across Europe, US, and Nairobi before allocating high-ROAS ad spend.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">GA4 Tag G-TQPRDGQKZN</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Google Search Console</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Pre-Ad Attribution</span>
                </div>
              </div>

              {/* Pillar 6: AI Receipts & KRA eTIMS */}
              <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-500 font-bold block mb-2">
                    PILLAR 06 &bull; AI OPERATIONS &amp; TAX COMPLIANCE
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                    Multimodal AI Receipt Scanner &amp; KRA eTIMS Engine
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-4">
                    Multimodal batch receipt scanner powered by Gemini Vision / NVIDIA NIMs extracting vendor PIN, date, subtotal, and 16% VAT from crumpled slips. Features an algorithmic duplicate audit detector to intercept ghost expenses and automated payroll scheduling with immutable audit logging.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Gemini Vision OCR</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">KRA eTIMS CU Validation</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Duplicate Detection</span>
                </div>
              </div>

              {/* Pillar 7: 24/7 AI WhatsApp Concierge */}
              <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-gold)] font-bold block mb-2">
                    PILLAR 07 &bull; AI CONCIERGE &amp; MESSAGING
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                    24/7 AI WhatsApp Concierge &amp; Unified Messaging Hub
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-4">
                    Beds24-connected automated WhatsApp AI agent answering guest inquiries regarding availability, rate quotes, house rules, and local tours 24/7. Unifies messages across Airbnb, Booking.com, and direct channels into a single inbox with anti-leak sanitization filtering.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">WhatsApp Cloud API</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Unified OTA Inbox</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Anti-Leak Sanitizer</span>
                </div>
              </div>

              {/* Pillar 8: DevSecOps Hardening */}
              <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-bold block mb-2">
                    PILLAR 08 &bull; SECURITY &amp; LINUX DEVOPS
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">
                    OWASP PBKDF2 Hardening &amp; Zero-Downtime Linux VPS
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-4">
                    Role-based staff authentication hardened with 210,000 PBKDF2 iterations + SHA-512 with individual salts, session invalidation, and rate limiting. Concurrency-safe atomic storage (`safeStorage.ts`) and zero-downtime Python VPS deployment pipelines with live data preservation.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">PBKDF2 210k Hashing</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Atomic File Storage</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-core)]">Zero-Downtime VPS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. SYSTEM ARCHITECTURE DIAGRAM ═══ */}
        <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-eyebrow mb-2 block font-mono text-[var(--accent-gold)]">
                ECOSYSTEM ARCHITECTURE
              </span>
              <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
                Full-Stack Data &amp; Operational Flow
              </h2>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-xs overflow-x-auto text-[var(--text-muted)]">
              <pre className="text-xs leading-relaxed text-[var(--text-core)]">
{`                        ┌──────────────────────────────────────────────────────────────┐
                        │                 High-Net-Worth Guest Interaction             │
                        └──────────────┬───────────────────────────────┬───────────────┘
                                       │                               │
                      Direct Web Visit │                               │ In-Villa QR Scan
                                       ▼                               ▼
              ┌───────────────────────────────────┐   ┌───────────────────────────────────┐
              │    Luxury Direct Booking Flagship │   │    PWA Digital Guest Concierge    │
              │   • Multi-Currency Seasonal Engine│   │   • Live Tides, Solar & Weather   │
              │   • Direct Privilege Value Ledger │   │   • Self-Healing Trouble Wizard   │
              │   • GA4 Telemetry (G-TQPRDGQKZN)  │   │   • Anti-Gouging Transport Calc   │
              └─────────────────┬─────────────────┘   └─────────────────┬─────────────────┘
                                │                                       │
                    PesaPal v3  │                                       │ Direct Concierge
                    Checkout    ▼                                       ▼
              ┌───────────────────────────────────────────────────────────────────────────┐
              │                     Central Beds24 Channel Sync Engine                    │
              │              (Bi-Directional Calendar Locks & Stay Stitching)             │
              └─────────▲───────────────────────▲─────────────────────────▲───────────────┘
                        │                       │                         │
                        ▼                       ▼                         ▼
                  ┌───────────┐           ┌───────────┐             ┌───────────┐
                  │  Airbnb   │           │Booking.com│             │   VRBO    │
                  └───────────┘           └───────────┘             └───────────┘
                                                ▲
                                                │
              ┌─────────────────────────────────┴─────────────────────────────────────────┐
              │                     Executive Operations & PMS Platform                   │
              │   • Unified OTA & Direct Messaging Hub (Anti-Leak Sanitization)           │
              │   • Multimodal AI Batch Receipt OCR Scanner (Gemini Vision / NIM)         │
              │   • KRA eTIMS Tax Compliance Engine (16% VAT, CU Numbers & Audit Trail)   │
              │   • Role-Based Staff Auth (OWASP PBKDF2 210k Iterations, RBAC)            │
              │   • Automated Payroll Scheduler & Executive SMTP Email Relays             │
              └───────────────────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
          </div>
        </section>

        {/* ═══ 8. BEFORE VS AFTER COMPARISON TABLE ═══ */}
        <section className="section-padding px-6 lg:px-10 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-eyebrow mb-2 block font-mono text-[var(--accent-gold)]">
                TRANSFORMATION MATRIX
              </span>
              <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
                Before vs. After Our Intervention
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-core)] font-mono">
                    <th className="p-4 font-bold uppercase tracking-wider">Operational Area</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-red-400">Before Goldfish</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-emerald-500">What We Built &amp; Delivered</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-[var(--accent-gold)]">Business Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-muted)] font-light">
                  <tr>
                    <td className="p-4 font-bold text-[var(--text-core)] font-mono">Direct Bookings</td>
                    <td className="p-4">100% dependent on Airbnb &amp; Booking.com; paying 15%–20% commission on every stay.</td>
                    <td className="p-4 text-[var(--text-core)]">Bespoke Next.js direct booking engine with PesaPal M-Pesa STK push &amp; Card checkout.</td>
                    <td className="p-4 font-bold text-emerald-500 font-mono">15%–20% higher net margin captured per stay.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[var(--text-core)] font-mono">Calendar &amp; Sync</td>
                    <td className="p-4">Manual calendar updating across spreadsheets risking catastrophic double-bookings.</td>
                    <td className="p-4 text-[var(--text-core)]">Real-time bi-directional Beds24 channel sync bridge with automated external blockouts.</td>
                    <td className="p-4 font-bold text-emerald-500 font-mono">0% calendar collisions across all channels.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[var(--text-core)] font-mono">Visual Media &amp; Content</td>
                    <td className="p-4">Inconsistent smartphone photos; zero unified creative direction or video storytelling.</td>
                    <td className="p-4 text-[var(--text-core)]">On-site 4K master shoot across villas, culinary, and drone aerials + 90-day publishing calendar.</td>
                    <td className="p-4 font-bold text-[var(--accent-gold)] font-mono">90-day evergreen luxury media runway.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[var(--text-core)] font-mono">Data &amp; Ad Readiness</td>
                    <td className="p-4">Zero baseline traffic analytics; guesswork on visitor origins and booking drop-offs.</td>
                    <td className="p-4 text-[var(--text-core)]">Google Analytics 4 (G-TQPRDGQKZN) funnel telemetry + Google Search Console query intelligence.</td>
                    <td className="p-4 font-bold text-[var(--accent-gold)] font-mono">Empirical data foundation before ad spend.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[var(--text-core)] font-mono">Accounting &amp; Taxes</td>
                    <td className="p-4">Lost paper receipts, manual Excel entry, severe risk of KRA eTIMS non-compliance.</td>
                    <td className="p-4 text-[var(--text-core)]">Gemini Vision AI batch receipt scanner with duplicate intercept &amp; eTIMS CU number validation.</td>
                    <td className="p-4 font-bold text-emerald-500 font-mono">~90% reduction in bookkeeping hours.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[var(--text-core)] font-mono">In-Villa Guest Support</td>
                    <td className="p-4">Frequent phone calls to staff for Wi-Fi passwords, power status, and local transport.</td>
                    <td className="p-4 text-[var(--text-core)]">QR-activated PWA concierge with live tides, solar status, self-healing wizard, and fair-fare calculator.</td>
                    <td className="p-4 font-bold text-[var(--accent-gold)] font-mono">Drastic drop in repetitive staff calls.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 9. EXECUTIVE CTA FOR HOSPITALITY BRANDS ═══ */}
        <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-eyebrow mb-2 block font-mono text-[var(--accent-gold)]">
              EXECUTIVE ADVISORY &bull; DIRECT CONSULTATION
            </span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] mb-4">
              Ready to reclaim 15%&ndash;20% of your hospitality revenue from OTAs?
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you manage an established beachfront resort, boutique private villas, or luxury safari camps in Kenya, Goldfish Marketing builds autonomous direct-booking systems calibrated for your business economics.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?service=website"
                className="btn-primary text-xs py-3.5 px-8 shadow-sm w-full sm:w-auto text-center"
              >
                Discuss a custom hospitality ecosystem &rarr;
              </Link>
              <a
                href={buildWhatsAppUrl("Hi Malack, I read the Diani Ocean View Residences case study and would like to discuss our hospitality booking systems")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-3.5 px-8 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
              >
                <span>Direct WhatsApp Advisory</span>
                <span>↗</span>
              </a>
            </div>

            <p className="text-[11px] font-mono text-[var(--text-muted)] mt-6">
              Based in Diani, Kwale County &bull; Working with hospitality brands across Kenya &bull; Direct founder access
            </p>
          </div>
        </section>

        <FooterCloser />
      </main>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // STANDARD PORTFOLIO PROJECT LAYOUT (SIZZLERS & OTHER CLIENTS)
  // ═══════════════════════════════════════════════════════════════
  const project = publishedProject;

  return (
    <main className="w-full flex flex-col min-h-screen">
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-6">
            <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-[var(--accent-gold)] transition-colors">Work</Link>
            <span>/</span>
            <span className="text-[var(--accent-gold)] font-bold">{project ? project.name : params.slug}</span>
          </nav>

          {project ? (
            <>
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[var(--accent-gold)] block mb-2">
                {project.sector} &bull; DIANI BASE
              </span>
              <h1 className="text-h1 font-black tracking-tight mb-4">{project.name}</h1>
              {project.tagline && (
                <p className="text-sm font-mono text-[var(--text-muted)] mb-6 font-semibold">
                  {project.tagline}
                </p>
              )}
              <p className="text-body-lg text-[var(--text-muted)] font-light leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 mb-8">
                <div>
                  <h2 className="text-h3 font-bold text-[var(--text-core)] mb-2">The Project Context</h2>
                  <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">{project.context}</p>
                </div>

                <div className="pt-6 border-t border-[var(--border-subtle)]">
                  <h2 className="text-h3 font-bold text-[var(--text-core)] mb-2">Delivered Value &amp; Evidence</h2>
                  <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">{project.evidence}</p>
                </div>

                {project.metrics && (
                  <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                        <span className="text-xl font-black font-mono text-[var(--accent-gold)] block">
                          {m.value}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="btn-primary text-xs py-3 px-6 shadow-sm inline-flex items-center gap-2"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit Client Website</span>
                  <span>↗</span>
                </a>
                <Link className="btn-outline text-xs py-3 px-6" href="/contact?service=website">
                  Discuss a Similar Project &rarr;
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-h1 font-black mb-6">Explore Our Client Work</h1>
              <p className="text-body-lg text-[var(--text-muted)] mb-8">
                This case study is currently being compiled. Visit our main portfolio to explore current live platforms.
              </p>
              <Link className="btn-primary text-xs py-3 px-6" href="/portfolio">
                &larr; View all client work
              </Link>
            </>
          )}
        </div>
      </section>
      <FooterCloser />
    </main>
  );
}
