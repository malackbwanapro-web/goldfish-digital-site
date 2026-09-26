'use client';

import { useState } from 'react';
import { ServiceFAQ } from '../data/servicesData';

interface Props {
  faqs: ServiceFAQ[];
}

const DEFAULT_CATEGORIES = [
  '01 · Investment & ROI',
  '02 · Timeline & Delivery',
  '03 · Operational Load',
  '04 · Sovereignty & Control',
  '05 · Commercial Proof',
];

export default function FaqAccordion({ faqs }: Props) {
  // Open the first FAQ by default to invite reading
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCopy = (e: React.MouseEvent, text: string, index: number) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const categoryLabel =
          faq.category ||
          DEFAULT_CATEGORIES[index % DEFAULT_CATEGORIES.length];

        return (
          <div
            key={index}
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${
              isOpen
                ? 'border-[var(--accent-gold)]/40 bg-[var(--bg-surface)] shadow-md'
                : 'border-[var(--border-subtle)] bg-[var(--bg-primary)]/20 hover:border-[var(--border-accent)]'
            }`}
          >
            {/* Header / Question Button */}
            <button
              onClick={() => toggleIndex(index)}
              className="w-full py-5 px-6 flex items-start justify-between gap-4 text-left focus:outline-none cursor-pointer group"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col items-start pr-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-gold)] px-2 py-0.5 rounded bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 font-bold mb-2">
                  {categoryLabel}
                </span>
                <span className="font-bold text-[15px] lg:text-[16px] text-[var(--text-core)] group-hover:text-[var(--accent-gold)] transition-colors duration-200 leading-snug">
                  {faq.question}
                </span>
              </div>

              <span
                className={`w-7 h-7 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-sm font-mono text-[var(--text-muted)] transition-all duration-300 shrink-0 mt-1 bg-[var(--bg-card)] ${
                  isOpen
                    ? 'rotate-180 border-[var(--accent-gold)] text-[var(--accent-gold)] bg-[var(--accent-gold)]/10'
                    : 'group-hover:border-[var(--accent-gold)]/50'
                }`}
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {/* Answer body */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[1200px] border-t border-[var(--border-subtle)]' : 'max-h-0'
              }`}
            >
              <div className="p-6 bg-[var(--bg-surface)]/80 flex flex-col gap-4">
                <p className="text-sm lg:text-[15px] text-[var(--text-core)] leading-relaxed font-normal">
                  {faq.answer}
                </p>

                {/* Footer copy button for social or client sharing */}
                <div className="flex items-center justify-end pt-2 border-t border-[var(--border-subtle)]/50">
                  <button
                    onClick={(e) => handleCopy(e, `${faq.question}\n\n${faq.answer}`, index)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors py-1 px-2.5 rounded bg-[var(--bg-primary)]/50 border border-[var(--border-subtle)]"
                    title="Copy question and answer to clipboard"
                  >
                    {copiedIndex === index ? (
                      <>
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span className="text-emerald-500 font-bold">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <span>📋</span>
                        <span>Copy Q&amp;A</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
