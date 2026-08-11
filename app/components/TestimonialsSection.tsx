import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  initials: string;
  service: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'James Otieno',
    role: 'Owner',
    company: 'Bahari Breeze Lodge',
    location: 'Diani Beach, Kenya',
    quote:
      'Before Goldfish, our website was invisible on Google. Within 8 weeks of working with Malack and the team, we were ranking on the first page for "Diani beach accommodation" and our direct bookings went up by over 60%. The ROI has been incredible.',
    initials: 'JO',
    service: 'SEO & Web',
    result: '+60% direct bookings',
  },
  {
    name: 'Amina Wanjiku',
    role: 'Co-Founder',
    company: 'SwiftPay Solutions',
    location: 'Nairobi, Kenya',
    quote:
      "We were spending 3 hours every morning manually following up on leads via email. Goldfish built us a WhatsApp automation that now does it instantly, 24/7. We've reclaimed over 15 hours a week and our response-to-demo rate doubled.",
    initials: 'AW',
    service: 'AI Automation',
    result: '15 hrs/week saved',
  },
  {
    name: 'David Mwangi',
    role: 'Managing Director',
    company: 'Coastal Trade & Logistics',
    location: 'Mombasa, Kenya',
    quote:
      'Our old website looked like it was from 2010. After the rebuild, we started getting genuine enquiries from corporate clients within the first month. Goldfish understood exactly what our buyers needed to see to trust us.',
    initials: 'DM',
    service: 'Web Design',
    result: '3x qualified enquiries',
  },
  {
    name: 'Grace Njeri',
    role: 'Marketing Manager',
    company: 'Savanna Eats Group',
    location: 'Nairobi, Kenya',
    quote:
      "We'd burned through two agencies on Meta ads with nothing to show for it. Goldfish audited our account, rebuilt our campaigns from scratch, and got us to a 3.4x ROAS within 6 weeks. They're the first agency that actually explained what they were doing.",
    initials: 'GN',
    service: 'Paid Ads',
    result: '3.4x ROAS in 6 weeks',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding px-6 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-eyebrow mb-3 block">CLIENT RESULTS</span>
          <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)]">
            What Our Clients Say
          </h2>
          <p className="text-caption text-[var(--text-muted)] mt-4 max-w-xl mx-auto">
            Real businesses across Kenya growing with Goldfish Marketing.
          </p>

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-4 h-4 fill-[var(--accent-gold)]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-[var(--text-core)]">5.0</span>
            <span className="text-xs text-[var(--text-muted)]">from 40+ client engagements</span>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-8 bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/50 transition-all duration-300 hover:shadow-xl flex flex-col gap-6"
            >
              {/* Gold quote mark */}
              <svg
                className="absolute top-6 right-8 w-10 h-10 text-[var(--accent-gold)] opacity-20"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 fill-[var(--accent-gold)]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-body text-[var(--text-muted)] leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result badge */}
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                <span className="text-[11px] font-mono font-bold text-[var(--accent-gold)] uppercase tracking-wider">
                  {t.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-[var(--border-subtle)]">
                <div className="w-11 h-11 rounded-full bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)]/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-black text-[var(--accent-gold)]">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--text-core)]">{t.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {t.role}, {t.company}
                  </p>
                  <p className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-wider mt-0.5">
                    {t.location}
                  </p>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider bg-[var(--bg-surface)] px-2 py-1 rounded-md border border-[var(--border-subtle)]">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
