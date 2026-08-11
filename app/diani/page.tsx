import type { Metadata } from 'next';
import Link from 'next/link';
import FooterCloser from '../components/FooterCloser';

export const metadata: Metadata = {
  title: 'Digital Marketing & Web Design Agency in Diani Beach | Goldfish Marketing',
  description:
    'Diani Beach\'s premier digital marketing, web design, SEO, and AI automation agency. Helping coastal resorts, hotels, and SMEs win more customers online.',
  alternates: { canonical: 'https://www.goldfishmarketing.co.ke/diani' },
  openGraph: {
    title: 'Digital Marketing & Web Design Agency in Diani Beach',
    description: 'Premier digital growth & web development services in Diani Beach, Kwale County, Kenya.',
    url: 'https://www.goldfishmarketing.co.ke/diani',
  },
};

const dianiServices = [
  {
    title: 'High-Converting Web Design for Resorts & Hotels',
    desc: 'Custom, ultra-fast websites designed specifically for Diani lodges, villas, and hospitality providers to drive direct bookings and cut OTA commissions.',
    icon: '🏖️'
  },
  {
    title: 'Local & Google Maps SEO for Coastal Businesses',
    desc: 'Dominate search results when tourists and locals search for "best hotel in Diani", "restaurants near Beach Road", or "tours in Ukunda".',
    icon: '📍'
  },
  {
    title: 'WhatsApp AI Automation for Fast Booking Enquiries',
    desc: 'Instant 24/7 WhatsApp auto-responders that handle room enquiries, activity bookings, and price quotes while your team sleeps.',
    icon: '⚡'
  },
  {
    title: 'Targeted Meta & Google Paid Ads (Europe & Regional)',
    desc: 'Reach high-intent travelers in Nairobi, Europe, and international markets looking to book holidays on the South Coast.',
    icon: '🎯'
  }
];

export default function DianiPage() {
  return (
    <main className="w-full flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-accent)] bg-[var(--bg-surface)] text-[var(--accent-gold)] text-xs font-mono uppercase tracking-wider mb-6">
            📍 Based in Diani Beach &bull; Serving Kwale &amp; South Coast Businesses
          </div>
          <h1 className="text-h1 font-black tracking-tight leading-tight mb-6">
            Digital Marketing &amp; Web Design Agency in <span className="gradient-text-gold">Diani Beach, Kenya</span>.
          </h1>
          <p className="text-body-lg text-[var(--text-muted)] max-w-2xl leading-relaxed mb-8">
            We help Diani resorts, villas, restaurants, and local service businesses stand out online, rank #1 on Google, and capture direct customer bookings without paying exorbitant commissions.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Book a Free Strategy Consultation
            </Link>
            <a
              href="https://wa.me/254711404755?text=Hi%20Goldfish%20Marketing%2C%20I%20am%20a%20business%20owner%20in%20Diani"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              💬 WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Services Breakdown for Diani */}
      <section className="section-padding px-6 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-eyebrow mb-3 block">SOUTH COAST GROWTH SOLUTIONS</span>
            <h2 className="text-h2 font-black tracking-tight">Tailored For Diani Businesses</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dianiServices.map((s, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/60 transition-all duration-300">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">{s.title}</h3>
                <p className="text-caption text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Local Trust */}
      <section className="section-padding px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-eyebrow mb-3 block">LOCAL FOOTPRINT</span>
            <h2 className="text-h2 font-black tracking-tight mb-6">Why Diani Businesses Choose Goldfish</h2>
            <div className="space-y-4 text-body text-[var(--text-muted)] leading-relaxed">
              <p>
                Unlike Nairobi or overseas agencies that don&apos;t understand coastal tourism dynamics, we are based right here in Diani Beach on Beach Road.
              </p>
              <p>
                We understand the seasonal peaks, the European holiday booking windows, local payment integrations like M-Pesa &amp; Pesapal, and what international travelers look for when booking South Coast accommodations.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Meet Us at Diani Bazaar
              </Link>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-4 font-mono text-sm">
            <div className="flex items-center gap-3 text-[var(--accent-gold)] font-bold text-base">
              <span>📍 Office Location</span>
            </div>
            <p className="text-[var(--text-core)] font-semibold">Goldfish Marketing HQ</p>
            <p className="text-[var(--text-muted)]">Diani Bazaar, Beach Road, Diani Beach, Kwale County, Kenya</p>
            <div className="border-t border-[var(--border-subtle)] pt-4 mt-2 flex flex-col gap-2 text-xs">
              <p><span className="text-[var(--text-core)] font-semibold">Phone:</span> +254 711 404 755</p>
              <p><span className="text-[var(--text-core)] font-semibold">Email:</span> goldfishprojex@gmail.com</p>
              <p><span className="text-[var(--text-core)] font-semibold">Coverage:</span> Diani, Ukunda, Tiwi, Galu, Msambweni, Kwale</p>
            </div>
          </div>
        </div>
      </section>

      <FooterCloser />
    </main>
  );
}
