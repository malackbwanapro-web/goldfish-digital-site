import type { Metadata } from 'next';
import Link from 'next/link';
import FooterCloser from '../components/FooterCloser';

export const metadata: Metadata = {
  title: 'About Malack Bwana & Goldfish Marketing | Digital Agency Diani, Kenya',
  description:
    'Meet Malack Bwana, founder of Goldfish Marketing — Diani\'s premier digital marketing, web design, SEO, and AI automation agency serving businesses across Kenya and East Africa.',
  alternates: { canonical: 'https://goldfish-digital-site.vercel.app/about' },
  openGraph: {
    title: 'About Malack Bwana & Goldfish Marketing',
    description: 'The story behind Diani\'s leading digital growth agency.',
    url: 'https://goldfish-digital-site.vercel.app/about',
  },
};

const values = [
  {
    icon: '🎯',
    title: 'Results Over Promises',
    desc: 'We measure ourselves by what actually moves for your business — leads, revenue, time saved. Not vanity metrics.',
  },
  {
    icon: '🤝',
    title: 'Radical Transparency',
    desc: 'You always know what we\'re doing, why we\'re doing it, and what it\'s costing. No black boxes, no hidden fees.',
  },
  {
    icon: '⚡',
    title: 'Speed to Value',
    desc: 'We move fast. Most clients see measurable early results within the first 30 days of engagement.',
  },
  {
    icon: '🌍',
    title: 'Local Roots, Global Standards',
    desc: 'Built in Diani. Delivering work that competes with the best agencies in London, Dubai, and Nairobi.',
  },
];

const services = [
  'Web Design & Development',
  'SEO & GEO Visibility Engineering',
  'Meta & Google Paid Ads',
  'AI Automation for SMEs',
  'Brand Identity & Content',
  'Strategic Analytics & Audits',
];

const stats = [
  { value: '40+', label: 'Active Client Systems' },
  { value: '12,000+', label: 'Hours Saved for Clients' },
  { value: '90 Days', label: 'Avg. to First Major Result' },
  { value: '5.0★', label: 'Client Satisfaction Rating' },
];

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 bg-[var(--bg-primary)]">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--accent-gold)]/8 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-eyebrow mb-4 block">OUR STORY</span>
          <h1 className="text-h1 font-black tracking-tight leading-tight mb-6">
            Built in Diani.<br />
            <span className="gradient-text-gold">Engineered for Growth.</span>
          </h1>
          <p className="text-body-lg text-[var(--text-muted)] max-w-2xl leading-relaxed">
            Goldfish Marketing is a digital growth agency founded in Diani Beach, Kenya — specialising in web design, SEO, AI automation, and paid advertising for SMEs, hospitality brands, and ambitious businesses across Kenya and East Africa.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding px-6 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Avatar */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6">
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-[var(--accent-gold)]/30 to-[var(--accent-gold)]/10 border-2 border-[var(--accent-gold)]/40 flex items-center justify-center shadow-xl">
              <span className="text-6xl font-black text-[var(--accent-gold)]">MB</span>
            </div>
            <div>
              <h2 className="text-2xl font-black text-[var(--text-core)]">Malack Bwana</h2>
              <p className="text-sm text-[var(--accent-gold)] font-mono uppercase tracking-wider mt-1">Founder & Lead Strategist</p>
              <p className="text-caption text-[var(--text-muted)] mt-1">Diani Beach, Kenya</p>
            </div>
            <a
              href="https://wa.me/254711404755?text=Hi%20Malack%2C%20I%20read%20your%20about%20page%20and%20I%27d%20like%20to%20connect"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-6 w-full text-center"
            >
              💬 Message Malack Directly
            </a>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8 space-y-5 text-body text-[var(--text-muted)] leading-relaxed">
            <p>
              I started Goldfish Marketing because I kept seeing the same problem: brilliant businesses in Kenya — hotels, restaurants, law firms, retail shops, service providers — with genuinely great products and services, but virtually invisible online and losing customers they should be winning.
            </p>
            <p>
              The digital tools to fix this exist. They&apos;re not secret. But most agencies either charge enterprise prices that small businesses can&apos;t afford, or deliver generic templated work that doesn&apos;t move the needle. I built Goldfish to be the third option — a specialist team that delivers enterprise-quality digital infrastructure at SME-accessible pricing, with full transparency and accountability for results.
            </p>
            <p>
              Based in Diani Beach, we work with businesses across the Coast, Nairobi, and increasingly across East Africa. We build websites that generate actual enquiries, SEO strategies that rank for the terms your customers are searching, AI automations that reclaim hours of manual work, and paid ad campaigns that convert — not just click.
            </p>
            <p className="font-semibold text-[var(--text-core)]">
              If your digital presence isn&apos;t working as hard as you are, let&apos;s fix that.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-4xl lg:text-5xl font-black font-mono text-[var(--accent-gold)]">{s.value}</span>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding px-6 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-eyebrow mb-3 block">HOW WE WORK</span>
            <h2 className="text-h2 font-black tracking-tight">Our Core Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/50 transition-colors duration-300 flex gap-5">
                <span className="text-3xl flex-shrink-0">{v.icon}</span>
                <div>
                  <h3 className="font-bold text-[var(--text-core)] mb-2">{v.title}</h3>
                  <p className="text-caption text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-eyebrow mb-3 block">WHAT WE DO</span>
            <h2 className="text-h2 font-black tracking-tight mb-6">Six Ways We Grow Your Business</h2>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="flex items-center gap-3 text-body text-[var(--text-muted)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              <Link href="/services" className="btn-primary">Explore Services →</Link>
              <Link href="/contact" className="btn-outline">Free Strategy Call</Link>
            </div>
          </div>
          <div className="rounded-2xl p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
            <p className="text-eyebrow mb-4 block">OUR PROMISE</p>
            <p className="text-body text-[var(--text-muted)] leading-relaxed mb-4">
              Every engagement starts with a free strategy call. No pressure, no sales pitch — just an honest assessment of where your digital presence is strong, where it&apos;s leaking leads, and what the fastest path to improvement looks like.
            </p>
            <p className="text-body text-[var(--text-muted)] leading-relaxed">
              If we&apos;re not the right fit, we&apos;ll tell you. If we are, you&apos;ll know exactly what you&apos;re getting, what it costs, and what results to expect before signing anything.
            </p>
            <a
              href="https://wa.me/254711404755?text=Hi%20Goldfish%20Marketing%2C%20I%27d%20like%20a%20free%20strategy%20call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 2c-5.514 0-9.998 4.486-9.998 10.001 0 1.956.564 3.78 1.54 5.337l-1.573 5.761 5.908-1.549c1.492.839 3.21 1.302 5.033 1.302 5.516 0 10.001-4.485 10.001-10.001 0-5.515-4.485-10.001-10.012-10.001zm5.758 14.175c-.244.688-1.428 1.314-1.968 1.391-.497.07-1.144.1-3.326-.803-2.793-1.157-4.577-4.004-4.717-4.193-.139-.188-1.135-1.512-1.135-2.883 0-1.371.717-2.046.974-2.327.257-.282.559-.352.747-.352.188 0 .376.002.535.01.17.008.399-.064.625.478.234.563.799 1.947.869 2.088.07.141.117.305.023.493-.093.188-.141.305-.281.47-.14.165-.295.368-.422.493-.14.136-.286.286-.123.567.164.281.728 1.202 1.562 1.944 1.073.955 1.979 1.25 2.26 1.39.281.141.445.117.61-.07.164-.188.703-.82.891-1.101.188-.282.375-.235.633-.14.258.094 1.64.773 1.921.913.281.141.469.211.539.328.07.117.07.677-.174 1.365z"/></svg>
              Book Free Strategy Call
            </a>
          </div>
        </div>
      </section>

      <FooterCloser />
    </main>
  );
}
