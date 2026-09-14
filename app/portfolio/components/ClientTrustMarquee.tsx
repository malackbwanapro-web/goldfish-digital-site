'use client';

import { ACTUAL_CLIENTS } from '../data/actualClientsData';

export default function ClientTrustMarquee() {
  // Duplicate array for seamless infinite loop
  const marqueeItems = [...ACTUAL_CLIENTS, ...ACTUAL_CLIENTS];

  return (
    <div className="w-full border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md overflow-hidden py-4 relative group">
      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex items-center gap-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
        {marqueeItems.map((client, index) => (
          <a
            key={`${client.id}-${index}`}
            href={client.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 hover:bg-[var(--bg-primary)] hover:border-[var(--accent-gold)]/60 transition-all duration-300 flex-shrink-0 group/item cursor-pointer"
            title={`Visit live site: ${client.domain}`}
          >
            {/* Pulsing Status Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>

            {/* Client Monogram / Mini Badge */}
            <span
              className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: client.brandColors.bgTint,
                color: client.brandColors.primary,
                border: `1px solid ${client.brandColors.borderTint}`,
              }}
            >
              {client.badgeLabel.split(' ')[0]}
            </span>

            {/* Client Name */}
            <span className="text-xs font-bold text-[var(--text-core)] tracking-tight group-hover/item:text-[var(--accent-gold)] transition-colors">
              {client.name}
            </span>

            {/* Domain Pill */}
            <span className="text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-1 opacity-80 group-hover/item:opacity-100">
              <span>{`// ${client.domain}`}</span>
              <svg className="w-2.5 h-2.5 opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
