'use client';

import { useState } from 'react';
import Link from 'next/link';

interface AuditItem {
  id: string;
  label: string;
  description: string;
}

const AUDIT_CHECKLIST: AuditItem[] = [
  {
    id: 'speed',
    label: 'Sub-3.0s Mobile Load Speed on Safaricom 4G',
    description: 'Assets compressed (WebP/AVIF) and edge-cached to prevent mobile bounce.',
  },
  {
    id: 'gmb',
    label: 'Claimed & Verified Google Business Profile',
    description: 'Accurate business categories, local phone numbers, and active weekly reviews.',
  },
  {
    id: 'payment',
    label: 'Instant M-Pesa STK Push / Mobile Direct Checkout',
    description: 'Customers can pay deposits directly without leaving your digital booking funnel.',
  },
  {
    id: 'whatsapp',
    label: 'Automated 24/7 WhatsApp Response (< 60 Seconds)',
    description: 'Inquiries answered instantly even during late evenings or weekend hours.',
  },
  {
    id: 'schema',
    label: 'Structured Schema JSON-LD Entity Markup',
    description: 'AI engines (ChatGPT/Perplexity) and Google recognize your business authority.',
  },
  {
    id: 'privacy',
    label: 'Kenya Data Protection Act (KDPA 2019) Compliance',
    description: 'Transparent cookie policy, lawful data collection, and server-side tracking.',
  },
];

export default function SelfAuditor() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const count = Object.values(checkedItems).filter(Boolean).length;
  const total = AUDIT_CHECKLIST.length;
  const percentage = Math.round((count / total) * 100);

  const getHealthAssessment = () => {
    if (count <= 2) {
      return {
        level: 'Critical Revenue Leakage',
        color: 'text-red-400',
        bgColor: 'bg-red-500/10 border-red-500/30',
        text: 'Your business is currently losing high-intent customers to faster, better-automated competitors. You likely bleed 20–40% in avoidable OTA commissions or lost mobile leads.',
      };
    }
    if (count <= 4) {
      return {
        level: 'Moderate Digital Health',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10 border-amber-500/30',
        text: 'You have good foundational assets in place, but gaps in payment friction or speed are preventing full conversion potential.',
      };
    }
    return {
      level: 'Strong Digital Foundation',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10 border-green-500/30',
      text: 'Your platform is in the top 10% of Kenyan digital properties. Focus on advanced GEO citations and AI workflow automation to dominate your sector.',
    };
  };

  const assessment = getHealthAssessment();

  return (
    <div className="card-brand p-8 lg:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-lg my-12 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)]" />
        <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[var(--accent-gold)]">
          Interactive 60-Second Self-Test
        </span>
      </div>

      <h3 className="text-xl lg:text-2xl font-black text-[var(--text-core)] mb-2">
        Diagnose Your Business Digital Health
      </h3>
      <p className="text-sm text-[var(--text-muted)] font-light mb-8 max-w-2xl">
        Check off the systems your business currently has active. Our diagnostic engine evaluates your operational resilience in real time.
      </p>

      {/* Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {AUDIT_CHECKLIST.map((item) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-start gap-3 select-none ${
                isChecked
                  ? 'bg-[var(--accent-gold)]/10 border-[var(--accent-gold)]/50 shadow-sm'
                  : 'bg-[var(--bg-primary)]/40 border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/30'
              }`}
            >
              <div
                className={`w-5 h-5 rounded flex items-center justify-center border mt-0.5 flex-shrink-0 transition-colors ${
                  isChecked
                    ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] text-white'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-surface)]'
                }`}
              >
                {isChecked && <span className="text-xs font-bold">✓</span>}
              </div>
              <div>
                <h4 className="text-xs font-bold text-[var(--text-core)] mb-1">
                  {item.label}
                </h4>
                <p className="text-[11px] text-[var(--text-muted)] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Score & Diagnostic Result */}
      <div className={`p-6 rounded-xl border ${assessment.bgColor} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6`}>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl font-black font-mono text-[var(--accent-gold)]">
              {count} / {total}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Score ({percentage}%)
            </span>
            <span className={`text-xs font-mono font-bold uppercase tracking-wider ${assessment.color}`}>
              • {assessment.level}
            </span>
          </div>
          <p className="text-xs text-[var(--text-core)] font-light leading-relaxed max-w-xl">
            {assessment.text}
          </p>
        </div>

        <Link
          href="/contact"
          className="btn-primary text-xs py-3 px-6 whitespace-nowrap shadow-md flex-shrink-0"
        >
          Request Full 24-Hour Teardown →
        </Link>
      </div>
    </div>
  );
}
