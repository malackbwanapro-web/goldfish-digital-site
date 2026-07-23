import type { Metadata } from 'next';
import Link from 'next/link';
import FooterCloser from '../components/FooterCloser';
import { servicesData } from './data/servicesData';

export const metadata: Metadata = {
  title: 'Our Services — Web, SEO, Brand, Paid Growth & AI Automation | Goldfish Digital',
  description:
    'Explore our six core service pillars: Smart Web & App Ecosystems, Advanced Visibility Engineering, Brand Identity & Content, Digital Presence & Paid Growth, AI Automation for SMEs, and Strategic Analytics & Audits.',
};

export default function ServicesHub() {
  const servicesList = Object.values(servicesData);

  const engagementPhases = [
    {
      num: '01',
      title: 'Discovery & Audit',
      text: "We start with a deep-dive audit of your current digital position — your website, visibility, content, and existing tools — to identify the highest-value opportunities for your business."
    },
    {
      num: '02',
      title: 'Strategy & Build',
      text: "Our team designs and builds the solution — whether that\u2019s a new web ecosystem, an AI automation system, a brand identity, or a growth campaign — with complete transparency throughout."
    },
    {
      num: '03',
      title: 'Launch & Scale',
      text: 'We launch, measure, and continuously optimise. We provide clear monthly reporting and strategic guidance to ensure your investment compounds in performance over time.'
    }
  ];

  return (
    <main className="w-full flex flex-col">
      {/* SECTION 1: CONTEXT HEADER */}
      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-eyebrow mb-4 block">OUR CAPABILITIES</span>
          <h1 className="text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 leading-tight">
            Everything Your Business Needs to Grow, in One Place.
          </h1>
          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-3xl mx-auto font-light">
            We&rsquo;re a premium digital growth agency with six core service pillars — from building your digital hub to engineering your search visibility, managing your paid growth, and automating your operations with AI.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE 6 SERVICES MATRIX */}
      <section className="py-12 px-6 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="card-brand p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start border border-[var(--border-subtle)]"
            >
              {/* Left Side */}
              <div className="flex flex-col items-start justify-between h-full">
                <div className="flex flex-col gap-4">
                  <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-body text-[var(--text-muted)] leading-relaxed mb-6 font-light">
                    {service.hookLine}
                  </p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="btn-primary text-xs py-2.5 px-6 shadow-sm"
                >
                  Explore {service.title} →
                </Link>
              </div>

              {/* Right Side */}
              <div className="bg-[var(--bg-primary)]/30 border border-[var(--border-subtle)] rounded-xl p-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-core)] font-bold mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                  Core Capabilities
                </h4>
                <ul className="flex flex-col gap-4 list-none p-0 m-0">
                  {service.capabilities.map((capability, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-3 text-caption leading-relaxed text-[var(--text-core)]">
                      <span className="text-[var(--accent-gold)] mt-1 font-mono text-sm leading-none">•</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ENGAGEMENT FRAMEWORK */}
      <section className="section-padding px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-eyebrow mb-3 block">OUR PROCESS</span>
            <h2 className="text-h2 font-black tracking-tight">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Draw a connecting line behind cards on desktop */}
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-[var(--border-subtle)] z-0" />

            {engagementPhases.map((phase, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 rounded-full border-2 border-[var(--accent-gold)] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--accent-gold)] text-2xl font-black font-mono shadow-md mb-6 transition-transform duration-300 hover:scale-105">
                  {phase.num}
                </div>
                <h3 className="text-h3 font-bold tracking-tight mb-4 text-[var(--text-core)]">
                  {phase.title}
                </h3>
                <p className="text-caption max-w-sm leading-relaxed">
                  {phase.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE SAFETY VALVE CTA */}
      <section className="py-20 px-6 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent-gold)]/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-h2 font-black tracking-tight mb-6">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-caption text-[var(--text-muted)] max-w-lg mx-auto mb-10 leading-relaxed">
            Book a free 30-minute strategy call. We&rsquo;ll audit your current digital position and recommend the most commercially impactful starting point for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto shadow-md">
              Book a Free Strategy Call
            </Link>
            <Link href="/contact" className="btn-outline w-full sm:w-auto">
              Send Us a Brief
            </Link>
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTER CLOSER */}
      <FooterCloser />
    </main>
  );
}
