import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';
import FooterCloser from '../components/FooterCloser';

export const metadata: Metadata = {
  title: 'Enterprise AI Case Studies & Proven Metrics | Goldfish Digital',
  description:
    'Real performance data. Read technical breakdowns of custom AI platforms, pipeline deployments, and automation architectures built by Goldfish Digital.',
};

export default function PortfolioPage() {
  const impactCards = [
    {
      value: '12,000+ Hours Saved',
      label: 'Operational Resource Efficiency Reclaimed'
    },
    {
      value: '$1.5M+ Overhead Reduced',
      label: 'Cumulative Client Expenditure Eliminated'
    },
    {
      value: '40+ Active Custom Pipelines',
      label: 'High-Throughput Deployments Currently Live'
    }
  ];

  return (
    <main className="w-full flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="section-padding px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-eyebrow mb-4 block">PORTFOLIO</span>
          <h1 className="text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 max-w-3xl leading-tight">
            Proven Performance: Architectural Deployments That Scale.
          </h1>
          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto mb-16 font-light">
            We measure engineering success through cold, unyielding performance statistics. Review the verifiable operational returns delivered to enterprise environments.
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
