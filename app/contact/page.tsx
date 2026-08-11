import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Our Engineering Team | Goldfish Digital',
  description:
    'Connect with our systems team. Request a comprehensive, data-driven operational audit or instantly book a 15-minute technical evaluation call.',
};

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* SECTION 1: HERO & SETUP */}
      <section className="section-padding px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-eyebrow mb-4 block">ENGAGEMENT ENGINE</span>
          <h1 className="text-h1 font-black tracking-tight text-[var(--text-core)] mb-6 leading-tight">
            Let&apos;s Engineer Your Competitive Advantage.
          </h1>
          <p className="text-body-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto font-light">
            Choose the engagement path that matches your timeline. Request a comprehensive system diagnosis from our engineers or schedule a direct, 15-minute technical evaluation.
          </p>
        </div>
      </section>

      {/* SECTION 2: DUAL-PATH MATRIX (Form client component) */}
      <section className="pb-16 px-6 lg:px-10">
        <ContactClient />
      </section>

      {/* SECTION 3: POST-SUBMISSION EXPECTATIONS (TRUST ANCHORS) */}
      <section className="py-16 px-6 lg:px-10 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* SLA */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-gold)] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                Service SLA Response
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-light">
                We review all technical audit intakes within 24 business hours.
              </p>
            </div>
          </div>

          {/* NDA */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 border-y md:border-y-0 md:border-x border-[var(--border-subtle)] py-8 md:py-0 md:px-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-gold)] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                Mutual NDA Security
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-light">
                All corporate structural data is fully secured under standard NDA protocols.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-gold)] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                Direct Pipeline Contact
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-light">
                Prefer direct engineering contact? Email us at{' '}
                <a href="mailto:goldfishprojex@gmail.com" className="text-[var(--accent-gold)] hover:underline">
                  goldfishprojex@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Mini Copyright Bar */}
      <footer className="w-full bg-[var(--bg-primary)]/10 py-8 px-6 border-t border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[var(--text-muted)] font-mono">
            &copy; {new Date().getFullYear()} Goldfish Digital. All rights reserved.
          </p>
          <p className="text-[10px] text-[var(--text-muted)] font-mono">
            Standard NDA Compliance active.
          </p>
        </div>
      </footer>
    </main>
  );
}
