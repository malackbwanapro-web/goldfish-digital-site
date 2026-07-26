import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';
import FooterCloser from '../components/FooterCloser';

export const metadata: Metadata = {
  title: 'Client Results & Growth Case Studies | Goldfish Digital',
  description:
    'Real business outcomes. See how Goldfish Digital helps small and medium enterprises build fast websites, dominate search results, scale paid ad spend, and automate daily admin.',
};

export default function PortfolioPage() {
  const impactCards = [
    {
      value: '12,000+ Hours Saved',
      label: 'Manual Admin & Repeat Tasks Reclaimed for Team Productivity'
    },
    {
      value: '$1.5M+ Overhead Saved',
      label: 'Wasted Ad Spend & Operational Bottlenecks Eliminated'
    },
    {
      value: '40+ Active Systems',
      label: 'Custom Web, Search & AI Growth Engines Live'
    }
  ];

  return (
    <main className="w-full flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="section-padding px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-eyebrow mb-4 block">CLIENT RESULTS &amp; CASE STUDIES</span>
          <h1 className="text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 max-w-4xl leading-tight">
            Proven Results: Real Growth Systems Engineered for Ambitious Businesses.
          </h1>
          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto mb-16 font-light">
            We measure success by real business outcomes — more leads, higher checkout sales, lower customer acquisition costs, and hours of admin saved every week.
          </p>

          {/* Total Impact Tracker Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {impactCards.map((card, idx) => (
              <div
                key={idx}
                className="card-brand p-8 text-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-black font-mono text-[var(--accent-gold)] tracking-tight mb-2">
                  {card.value}
                </h3>
                <p className="text-caption leading-relaxed max-w-xs mx-auto text-[var(--text-core)]">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Portfolio filtering */}
      <PortfolioClient />

      {/* GLOBAL FOOTER CLOSER */}
      <FooterCloser />
    </main>
  );
}
