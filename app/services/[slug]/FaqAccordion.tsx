'use client';

import { useState } from 'react';
import { ServiceFAQ } from '../data/servicesData';

interface Props {
  faqs: ServiceFAQ[];
}

export default function FaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-[var(--border-subtle)] bg-[var(--bg-primary)]/10 rounded-xl overflow-hidden transition-all duration-300"
          >
            {/* Header / Question Button */}
            <button
              onClick={() => toggleIndex(index)}
              className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer group"
            >
              <span className="font-bold text-[15px] text-[var(--text-core)] group-hover:text-[var(--accent-gold)] transition-colors duration-200">
                {faq.question}
              </span>
              <span
                className={`w-6 h-6 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-xs font-mono text-[var(--text-muted)] transition-transform duration-300 bg-[var(--bg-surface)] ${
                  isOpen ? 'rotate-180 border-[var(--accent-gold)] text-[var(--accent-gold)]' : ''
                }`}
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {/* Answer body */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-80 border-t border-[var(--border-subtle)]' : 'max-h-0'
              }`}
            >
              <div className="p-6 text-caption leading-relaxed bg-[var(--bg-surface)]">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
