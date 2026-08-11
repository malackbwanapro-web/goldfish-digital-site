import type { Metadata } from 'next';
import Link from 'next/link';
import FooterCloser from '../components/FooterCloser';

export const metadata: Metadata = {
  title: 'Digital Marketing & Web Design Agency Mombasa | Goldfish Marketing',
  description:
    'Leading digital marketing agency in Mombasa. Web development, SEO, Meta/Google ads, and AI automation for Mombasa companies and coastal enterprises.',
  alternates: { canonical: 'https://gold-fish-digital.netlify.app/mombasa' },
  openGraph: {
    title: 'Digital Marketing & Web Design Agency Mombasa',
    description: 'Premier digital growth & web development services serving Mombasa City & Coast Region.',
    url: 'https://gold-fish-digital.netlify.app/mombasa',
  },
};

export default function MombasaPage() {
  return (
    <main className="w-full flex flex-col">
      <section className="relative overflow-hidden py-24 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-accent)] bg-[var(--bg-surface)] text-[var(--accent-gold)] text-xs font-mono uppercase tracking-wider mb-6">
            📍 Serving Mombasa City, Nyali, Bamburi &amp; Shanzu
          </div>
          <h1 className="text-h1 font-black tracking-tight leading-tight mb-6">
            Digital Marketing &amp; Web Design Agency in <span className="gradient-text-gold">Mombasa</span>.
          </h1>
          <p className="text-body-lg text-[var(--text-muted)] max-w-2xl leading-relaxed mb-8">
            Empowering Mombasa logistics firms, real estate developers, law practices, and commercial businesses with high-converting web platforms, local SEO dominance, and automated lead systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Request a Free Performance Audit
            </Link>
            <a
              href="https://wa.me/254711404755?text=Hi%20Goldfish%20Marketing%2C%20I%20am%20a%20business%20owner%20in%20Mombasa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
            <span className="text-3xl mb-4 block">⚓</span>
            <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">Logistics &amp; B2B Port Services</h3>
            <p className="text-caption text-[var(--text-muted)] leading-relaxed">
              Custom websites and SEO for clearing &amp; forwarding, freight, and shipping agencies looking to capture regional and global B2B contracts.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
            <span className="text-3xl mb-4 block">🏢</span>
            <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">Commercial &amp; Real Estate</h3>
            <p className="text-caption text-[var(--text-muted)] leading-relaxed">
              High-converting landing pages and Meta ad funnels for Mombasa property developers, law firms, and corporate service providers.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
            <span className="text-3xl mb-4 block">🏨</span>
            <h3 className="text-xl font-bold text-[var(--text-core)] mb-3">Nyali &amp; North Coast Hospitality</h3>
            <p className="text-caption text-[var(--text-muted)] leading-relaxed">
              Direct booking engine optimization, local Google Maps ranking, and automated WhatsApp booking assistants for Nyali &amp; Bamburi hotels.
            </p>
          </div>
        </div>
      </section>

      <FooterCloser />
    </main>
  );
}
