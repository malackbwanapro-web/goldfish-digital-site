import type { Metadata } from 'next';
import Link from 'next/link';
import FooterCloser from '../components/FooterCloser';

export const metadata: Metadata = {
  title: 'Digital Marketing & AI Automation Agency Kenya | Goldfish Marketing',
  description:
    'Premier digital agency in Kenya offering custom web development, SEO, paid ads management, and AI automation for SMEs and growing brands across Kenya.',
  alternates: { canonical: 'https://goldfish-digital-site.vercel.app/kenya' },
  openGraph: {
    title: 'Digital Marketing & AI Automation Agency Kenya',
    description: 'High-performance digital growth infrastructure for Kenyan SMEs, hospitality, and corporate enterprises.',
    url: 'https://goldfish-digital-site.vercel.app/kenya',
  },
};

export default function KenyaPage() {
  return (
    <main className="w-full flex flex-col">
      <section className="relative overflow-hidden py-24 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-accent)] bg-[var(--bg-surface)] text-[var(--accent-gold)] text-xs font-mono uppercase tracking-wider mb-6">
            🇰🇪 Serving Nairobi, Mombasa, Diani, Nakuru, Kisumu &amp; Nationwide
          </div>
          <h1 className="text-h1 font-black tracking-tight leading-tight mb-6">
            High-Performance Digital Growth &amp; AI Automation for <span className="gradient-text-gold">Kenyan Enterprises</span>.
          </h1>
          <p className="text-body-lg text-[var(--text-muted)] max-w-2xl leading-relaxed mb-8">
            Goldfish Marketing delivers world-class web development, precision search visibility, paid ad management, and custom WhatsApp AI workflows for ambitious SMEs and brands in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Request a Free Audit Call
            </Link>
            <Link href="/services" className="btn-outline w-full sm:w-auto">
              View Service Capabilities
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 font-black mb-6">Why Kenyan SMEs Partner With Us</h2>
          <p className="text-body text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto mb-10">
            We don&apos;t build generic 5-page brochures or manage vanity social media posts. We build digital ecosystems engineered to drive inbound customer enquiries, streamline operational workflows, and generate clear ROI.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
              <span className="text-2xl mb-2 block">⚡</span>
              <h3 className="font-bold text-[var(--text-core)] mb-1">Ultra-Fast Websites</h3>
              <p className="text-xs text-[var(--text-muted)]">Sub-second load times engineered to rank high and convert mobile users.</p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
              <span className="text-2xl mb-2 block">📲</span>
              <h3 className="font-bold text-[var(--text-core)] mb-1">WhatsApp AI Integration</h3>
              <p className="text-xs text-[var(--text-muted)]">Instant lead capture and automated follow-ups directly on WhatsApp.</p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
              <span className="text-2xl mb-2 block">🔍</span>
              <h3 className="font-bold text-[var(--text-core)] mb-1">Precision SEO &amp; GEO</h3>
              <p className="text-xs text-[var(--text-muted)]">Rank #1 on Google Search and get cited in new AI Search Overviews.</p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
              <span className="text-2xl mb-2 block">🤝</span>
              <h3 className="font-bold text-[var(--text-core)] mb-1">Local Business Context</h3>
              <p className="text-xs text-[var(--text-muted)]">M-Pesa, Pesapal, and Kenya-market consumer behavior baked into every system.</p>
            </div>
          </div>
        </div>
      </section>

      <FooterCloser />
    </main>
  );
}
