import type { Metadata } from 'next';
import InsightsClient from './InsightsClient';
import FooterCloser from '../components/FooterCloser';

export const metadata: Metadata = {
  title: 'Technical Briefings, AI Architecture, & Automation Strategy | Goldfish Digital',
  description:
    'High-substance technical analysis and architectural playbooks written directly for enterprise technology operators and business leadership.',
};

export default function InsightsPage() {
  return (
    <main className="w-full flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="section-padding px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-eyebrow mb-4 block">INSIGHTS</span>
          <h1 className="text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 leading-tight">
            Technical Insights for Data-Driven Operators.
          </h1>
          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto font-light">
            Deep-dive briefings across every discipline we deploy — from conversion architecture and AI visibility engineering to automation playbooks and strategic analytics.
          </p>
        </div>
      </section>

      {/* Dynamic Insights filtering */}
      <InsightsClient />

      {/* Global footer closer */}
      <FooterCloser />
    </main>
  );
}
