'use client';

interface ExecutiveSummaryProps {
  category: string;
  readTime: string;
  keyTakeaways?: string[];
  roiMetric?: string;
}

export default function ExecutiveSummary({
  category,
  readTime,
  keyTakeaways,
  roiMetric,
}: ExecutiveSummaryProps) {
  if (!keyTakeaways?.length) return null;
  const defaultTakeaways: string[] = [];

  const takeaways = keyTakeaways && keyTakeaways.length > 0 ? keyTakeaways : defaultTakeaways;

  return (
    <div className="card-brand p-6 lg:p-8 rounded-2xl border border-[var(--accent-gold)]/30 bg-[var(--bg-surface)]/80 shadow-md relative overflow-hidden mb-12">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[var(--accent-gold)]">
              30-Second Executive Summary
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--text-muted)]">
            <span>PILLAR: {category.toUpperCase()}</span>
            <span>•</span>
            <span>SPEED: {readTime}</span>
          </div>
        </div>

        <h3 className="text-base lg:text-lg font-black text-[var(--text-core)] mb-3">
          Core Strategic Takeaways at a Glance:
        </h3>

        <ul className="space-y-2.5 mb-6">
          {takeaways.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-core)]/90 leading-relaxed font-light">
              <span className="text-[var(--accent-gold)] font-bold mt-0.5">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
          {roiMetric ? (
            <span className="text-[var(--accent-gold)] font-bold">
              ⚡ Impact Benchmark: {roiMetric}
            </span>
          ) : (
            <span className="text-[var(--accent-gold)] font-bold">
              Planning notes
            </span>
          )}
          <a
            href="#article-body"
            className="text-[var(--accent-gold)] hover:underline font-bold"
          >
            Read In-Depth Technical Blueprint ↓
          </a>
        </div>
      </div>
    </div>
  );
}
