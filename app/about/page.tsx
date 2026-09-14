import type { Metadata } from 'next';
import Link from 'next/link';
import FooterCloser from '../components/FooterCloser';
import TestimonialsSection from '../components/TestimonialsSection';

export const metadata: Metadata = {
  title: {
    absolute: 'About Malack Bwana & Goldfish Marketing | Diani Beach Agency',
  },
  description:
    'Meet Malack Bwana, founder of Goldfish Marketing — Diani Beach’s premier digital marketing, web engineering, SEO, and AI automation consultancy for growing Kenyan SMEs.',
  alternates: { canonical: 'https://www.goldfishmarketing.co.ke/about' },
  openGraph: {
    title: 'About Malack Bwana & Goldfish Marketing | Diani Beach Agency',
    description: 'Local Experts. Global Standards. Engineered in Diani Beach, Kenya.',
    url: 'https://www.goldfishmarketing.co.ke/about',
    locale: 'en_KE',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Malack Bwana - Goldfish Marketing Diani Beach' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Malack Bwana & Goldfish Marketing | Diani Beach Agency',
    description: 'Local Experts. Global Standards. Engineered in Diani Beach, Kenya.',
    images: ['/og-image.png'],
  },
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Results Over Promises',
    desc: 'We measure ourselves by what actually moves for your business — direct bookings, qualified leads, and operational hours saved. Not vanity impressions.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Radical Transparency',
    desc: 'You always know what we are doing, why we are doing it, and what it costs. Full access to code repositories, ad dashboards, and analytics.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Sub-Second Speed to Value',
    desc: 'We move fast. Most SME clients see measurable performance gains and operational time reclaimed within the first 30 days of deployment.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Local Soul, Global Engineering',
    desc: 'Engineered in Diani Beach. Built on global cloud standards that rival tech firms in London, Berlin, or Silicon Valley, with deep Kenyan market fluency.',
  },
];

const slas = [
  {
    code: 'SLA-01',
    title: 'Zero Tech Hostage Guarantee',
    detail: 'You own 100% of your code, domains, ad accounts, and databases from Day 1. No proprietary lock-in, no hostage code.',
  },
  {
    code: 'SLA-02',
    title: 'Direct Engineering Access',
    detail: 'Work directly with technical strategists who build your systems, not junior account managers or sales intermediaries.',
  },
  {
    code: 'SLA-03',
    title: 'KDPA 2019 & GDPR Compliance',
    detail: 'Every funnel, database, and client data workflow adheres strictly to statutory Kenyan and international data protection standards.',
  },
  {
    code: 'SLA-04',
    title: 'The Vanity Metric Ban',
    detail: 'We never report surface impressions or hollow clicks as success. We report confirmed revenue, qualified inquiries, and hours saved.',
  },
];

const notFor = [
  {
    title: 'The "KES 5,000 Quick Website" Seeker',
    desc: 'We do not build flimsy, insecure template pages that break on mobile and leak customer data. We engineer robust digital assets.',
  },
  {
    title: 'Vanity Metric Chasers',
    desc: 'If you want millions of bot followers or fake likes to look popular on Instagram, we are the wrong agency. We care about bank deposits.',
  },
  {
    title: 'Passive "Set and Forget" Operators',
    desc: 'Real growth requires alignment. We partner closely with owners who value speed, transparency, and operational excellence.',
  },
];

const forWho = [
  {
    title: 'Boutique Hotels & Luxury Villas',
    desc: 'Properties bleeding 18–25% in OTA commissions that want high-speed direct booking engines and 24/7 WhatsApp AI reservation desks.',
  },
  {
    title: 'Growing Kenyan SMEs & Service Providers',
    desc: 'Law firms, clinics, logistics companies, and trade suppliers needing predictable inbound lead flow and automated customer response.',
  },
  {
    title: 'Real Estate & Off-Plan Developers',
    desc: 'Developers needing high-status visual identity, verified investor trust collateral, and targeted international diaspora buyer funnels.',
  },
];

const stats = [
  { value: '40+', label: 'Active SME Systems' },
  { value: '12,000+', label: 'Staff Hours Reclaimed' },
  { value: '0.7s', label: 'Average Mobile Latency' },
  { value: '100%', label: 'KDPA 2019 Compliant' },
];

export default function AboutPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.goldfishmarketing.co.ke';

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${baseUrl}/about/#webpage`,
        'url': `${baseUrl}/about`,
        'name': 'About Malack Bwana & Goldfish Marketing | Diani Beach, Kenya',
        'description': 'Meet Malack Bwana, founder of Goldfish Marketing — Diani Beach\'s premier digital marketing, web engineering, SEO, and AI automation consultancy for growing Kenyan SMEs.',
        'isPartOf': {
          '@id': `${baseUrl}/#website`
        },
        'about': [
          { '@id': `${baseUrl}/#organization` },
          { '@id': `${baseUrl}/about/#founder` }
        ],
        'breadcrumb': {
          '@id': `${baseUrl}/about/#breadcrumb`
        },
        'inLanguage': 'en-KE'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/about/#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': baseUrl
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'About',
            'item': `${baseUrl}/about`
          }
        ]
      },
      {
        '@type': 'Person',
        '@id': `${baseUrl}/about/#founder`,
        'name': 'Malack Bwana',
        'jobTitle': 'Founder & Principal Systems Architect',
        'worksFor': {
          '@id': `${baseUrl}/#organization`
        },
        'url': `${baseUrl}/about`,
        'telephone': '+254711404755',
        'sameAs': [
          'https://www.linkedin.com/in/malack-bwana',
          'https://github.com/malackbwanapro-web'
        ],
        'knowsAbout': [
          'AI Automation for SMEs',
          'Full-Stack Web Engineering',
          'Conversion Rate Optimization',
          'Generative Engine Optimization (GEO)',
          'KDPA 2019 & GDPR Compliance',
          'Hospitality Booking Engine Architecture'
        ]
      }
    ]
  };

  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* JSON-LD Schema for E-E-A-T and Knowledge Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative overflow-hidden py-24 px-6 lg:px-10 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--accent-gold)]/8 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] font-mono text-[var(--text-muted)] mb-4">
            <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--accent-gold)] font-bold">About</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)]" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[var(--accent-gold)]">
              ABOUT GOLDFISH MARKETING
            </span>
          </div>

          <h1 className="text-h1 font-black tracking-tight leading-tight mb-6">
            Digital Growth &amp; AI Systems.<br />
            <span className="text-[var(--accent-gold)]">Engineered in Diani for Kenyan SMEs.</span>
          </h1>

          <p className="text-body-lg text-[var(--text-muted)] max-w-2xl leading-relaxed font-light mb-8">
            Goldfish Marketing is a digital marketing agency and AI systems consultancy headquartered in <Link href="/diani" className="underline hover:text-[var(--accent-gold)] transition-colors">Diani Beach, Kenya</Link>. We engineer high-speed <Link href="/services/smart-web-app-ecosystems" className="underline hover:text-[var(--accent-gold)] transition-colors">direct booking engines</Link>, <Link href="/services/advanced-visibility-engineering" className="underline hover:text-[var(--accent-gold)] transition-colors">local search visibility (SEO/GEO)</Link>, and 24/7 <Link href="/services/ai-automation-sme" className="underline hover:text-[var(--accent-gold)] transition-colors">WhatsApp automations</Link> for ambitious businesses across <Link href="/kenya" className="underline hover:text-[var(--accent-gold)] transition-colors">Kenya</Link> and East Africa.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="btn-primary text-xs py-3 px-6 shadow-sm">
              Explore Our Capabilities →
            </Link>
            <Link href="/contact" className="btn-outline text-xs py-3 px-6">
              Request a Confidential Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FOUNDER SECTION ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative mb-6">
              {/* Styled portrait frame */}
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#1C1A14] to-[#0D0D0D] border-2 border-[var(--accent-gold)]/50 p-3 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />
                <div className="w-24 h-24 rounded-full bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)]/40 flex items-center justify-center mb-3">
                  <span className="text-3xl font-black font-mono text-[var(--accent-gold)]">MB</span>
                </div>
                <span className="text-xs font-mono font-bold text-white tracking-wide">
                  Malack Bwana
                </span>
                <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider">
                  Principal Systems Architect
                </span>
              </div>
              <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--accent-gold)] text-[10px] font-mono text-[var(--accent-gold)] font-bold shadow-md">
                ● DIANI BEACH HQ
              </div>
            </div>

            <div className="space-y-1 mb-6">
              <h2 className="text-2xl font-black text-[var(--text-core)]">Malack Bwana</h2>
              <p className="text-xs text-[var(--accent-gold)] font-mono uppercase tracking-wider font-bold">
                Founder &amp; Principal Systems Architect
              </p>
              <p className="text-xs text-[var(--text-muted)] font-light">
                Direct Engineering Lead • Diani Beach, Kenya
              </p>
              <a
                href="https://www.linkedin.com/in/malack-bwana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-[var(--accent-gold)] hover:underline inline-flex items-center gap-1 mt-1 font-bold"
              >
                <span>LinkedIn Verified Profile</span>
                <span>↗</span>
              </a>
            </div>

            <div className="w-full space-y-3">
              <a
                href="https://wa.me/254711404755?text=Hi%20Malack%2C%20I%20read%20your%20about%20page%20and%20I%27d%20like%20to%20discuss%20our%20business%20systems"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 px-6 w-full text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Direct Executive Advisory Line (WhatsApp)</span>
              </a>
              <span className="text-[10px] font-mono text-[var(--text-muted)] text-center block">
                Strict 24h Response SLA • Direct founder communication
              </span>
            </div>
          </div>

          {/* Founder Narrative */}
          <div className="lg:col-span-7 space-y-5 text-body text-[var(--text-muted)] leading-relaxed font-light">
            <span className="text-eyebrow text-xs block font-mono text-[var(--accent-gold)]">
              THE GOLDFISH THESIS
            </span>
            <blockquote className="text-2xl lg:text-3xl font-black text-[var(--text-core)] tracking-tight border-l-2 border-[var(--accent-gold)] pl-4 italic">
              &ldquo;Kenyan SMEs deserve software that prints profit, not pretty digital paperweights.&rdquo;
            </blockquote>
            <p>
              I founded Goldfish Marketing because I watched brilliant Kenyan entrepreneurs — boutique hotel owners, doctors, lawyers, logistics operators, and retail founders — suffer from the exact same digital dilemma:
            </p>
            <p>
              Either they were quoted millions by monolithic Nairobi agencies for enterprise bloat they didn’t need, or they paid freelance hobbyists for sluggish WordPress templates that took 8 seconds to load on Safaricom 4G and lost 60% of their mobile visitors before checkout.
            </p>
            <p>
              We built Goldfish as the antidote: a high-discipline, coastal engineering studio that pairs <strong>European architectural speed</strong> with <strong>deep Kenyan market ground truth</strong>. We build with modern stacks (Next.js, edge caching, M-Pesa Daraja APIs, WhatsApp Cloud bots) calibrated specifically for SME economics.
            </p>
            <p className="text-sm font-semibold text-[var(--text-core)] pt-2 border-t border-[var(--border-subtle)]">
              If your current digital presence is an expense rather than your hardest-working revenue channel, let’s sit down and re-engineer it.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ "WHY DIANI?" CONTRARIAN THESIS ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow mb-2 block font-mono">CONTRARIAN LOCATION</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Why Diani Beach Over Nairobi?
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light mt-3">
              Most tech firms cluster in Westlands or Kilimani. We deliberately anchored our operations on the South Coast of Kenya. Here is why:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-4 block">🌊</span>
                <h3 className="text-base font-bold text-[var(--text-core)] mb-2">
                  Zero Nairobi Agency Bloat
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                  We don’t maintain flashy commercial office suites in Upper Hill or pass bloated executive overhead onto your project invoices. Our investment goes 100% into elite technical talent and infrastructure.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-4 block">⚡</span>
                <h3 className="text-base font-bold text-[var(--text-core)] mb-2">
                  Uninterrupted Focus & Deep Work
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                  Away from city traffic and endless corporate posturing, our engineers operate in uninterrupted focus cycles. This allows us to ship enterprise-grade Next.js systems in weeks rather than quarters.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-4 block">📍</span>
                <h3 className="text-base font-bold text-[var(--text-core)] mb-2">
                  Frontline Tourism & SME Ground Truth
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                  Living and working alongside world-class resorts, safari operators, and regional exporters gives us firsthand intuition for cross-border guest psychology and local payment dynamics that city agencies only read about in slide decks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="py-16 px-6 lg:px-10 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-3xl lg:text-4xl font-black font-mono text-[var(--accent-gold)]">
                  {s.value}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AGENCY SLA MANIFESTO ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow mb-2 block font-mono">ACCOUNTABILITY FRAMEWORK</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Our Enforced Operating Standards (SLAs)
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light mt-3">
              We treat agency commitments as contractual engineering covenants. Here is what every Goldfish client is guaranteed:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {slas.map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-gold)]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[var(--accent-gold)] font-bold uppercase tracking-widest block mb-2">
                    {s.code}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--text-core)] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ "WHO WE ARE NOT FOR" RADICAL TRANSPARENCY ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow mb-2 block font-mono">RADICAL TRANSPARENCY</span>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
              Are We the Right Fit for Your Brand?
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light mt-3">
              We do not accept every project that lands on our desk. Protecting our standard of execution requires working only with businesses where we can generate undeniable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Not For */}
            <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-red-400">
                  Who We Are NOT For:
                </h3>
              </div>
              <div className="space-y-5">
                {notFor.map((item, idx) => (
                  <div key={idx} className="border-b border-red-500/10 pb-4 last:border-0 last:pb-0">
                    <h4 className="text-xs font-bold text-[var(--text-core)] mb-1">
                      ✗ {item.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Who */}
            <div className="p-8 rounded-2xl border border-green-500/30 bg-green-500/5">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-green-400">
                  Who We Produce Massive Results For:
                </h3>
              </div>
              <div className="space-y-5">
                {forWho.map((item, idx) => (
                  <div key={idx} className="border-b border-green-500/10 pb-4 last:border-0 last:pb-0">
                    <h4 className="text-xs font-bold text-[var(--text-core)] mb-1">
                      ✓ {item.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ CORE VALUES ═══ */}
      <section className="section-padding px-6 lg:px-10 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-eyebrow mb-3 block font-mono">OUR FOUNDING ETHOS</span>
            <h2 className="text-h2 font-black tracking-tight">How We Think & Operate</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/40 transition-colors duration-300 flex gap-5"
              >
                <span className="text-3xl flex-shrink-0">{v.icon}</span>
                <div>
                  <h3 className="font-bold text-[var(--text-core)] mb-2">{v.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENT EVIDENCE & SOCIAL PROOF ═══ */}
      <TestimonialsSection />

      <FooterCloser />
    </main>
  );
}
