'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ACTUAL_CLIENTS, CLIENT_SECTORS, type ActualClientProject } from '../data/actualClientsData';

export default function LiveClientShowcase() {
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [expandedClientId, setExpandedClientId] = useState<string | null>(null);

  // Filter clients based on sector and search query
  const filteredClients = useMemo(() => {
    return ACTUAL_CLIENTS.filter((client) => {
      const matchesSector =
        selectedSector === 'all' || client.sectorSlug === selectedSector;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        client.name.toLowerCase().includes(q) ||
        client.domain.toLowerCase().includes(q) ||
        client.sector.toLowerCase().includes(q) ||
        client.location.toLowerCase().includes(q) ||
        client.tagline.toLowerCase().includes(q) ||
        client.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesSector && matchesSearch;
    });
  }, [selectedSector, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedClientId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="verified-clients" className="py-20 px-6 lg:px-10 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-eyebrow text-xs font-mono tracking-wider">
                VERIFIED PRODUCTION FOOTPRINT // 9 ACTIVE CLIENTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[var(--text-core)] leading-tight">
              Actual Client Systems Running in Production
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light mt-3 leading-relaxed">
              Real businesses running on custom web platforms, local search domination frameworks, and high-conversion booking engines engineered by Goldfish Marketing.
            </p>
          </div>

          {/* View Mode Toggle (Desktop) */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="inline-flex rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[var(--accent-gold)] text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
                }`}
                aria-label="Grid View"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
                <span>Cards</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'table'
                    ? 'bg-[var(--accent-gold)] text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
                }`}
                aria-label="Table Spec View"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                <span>Spec Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar: Sector Tabs & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-[var(--bg-surface)] p-3 rounded-2xl border border-[var(--border-subtle)] shadow-sm">
          {/* Sector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
            {CLIENT_SECTORS.map((sector) => {
              const isActive = selectedSector === sector.slug;
              return (
                <button
                  key={sector.slug}
                  onClick={() => setSelectedSector(sector.slug)}
                  className={`py-1.5 px-3.5 rounded-xl font-mono text-[11px] font-bold tracking-tight transition-all duration-200 flex items-center gap-1.5 cursor-pointer flex-shrink-0 ${
                    isActive
                      ? 'bg-[var(--text-core)] text-[var(--bg-primary)] shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-core)] hover:bg-[var(--bg-primary)]'
                  }`}
                >
                  <span>{sector.name}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? 'bg-[var(--accent-gold)] text-white font-bold'
                        : 'bg-[var(--border-subtle)] text-[var(--text-muted)]'
                    }`}
                  >
                    {sector.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] flex-shrink-0">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-[var(--text-muted)]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clients, tech or sector..."
              className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl pl-9 pr-8 py-1.5 text-xs font-mono text-[var(--text-core)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-2.5 flex items-center text-xs text-[var(--text-muted)] hover:text-[var(--text-core)]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if Filtered */}
        {(selectedSector !== 'all' || searchQuery) && (
          <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] -mt-4 px-1">
            <span>
              Showing {filteredClients.length} of {ACTUAL_CLIENTS.length} client platforms
            </span>
            <button
              onClick={() => {
                setSelectedSector('all');
                setSearchQuery('');
              }}
              className="text-[var(--accent-gold)] hover:underline font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ═══ VIEW MODE 1: GRID CARDS ═══ */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => {
              const isExpanded = expandedClientId === client.id;

              return (
                <div
                  key={client.id}
                  className="card-brand flex flex-col justify-between border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-gold)]/60 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden relative group"
                >
                  {/* Brand Color Top Accent Strip */}
                  <div
                    className="h-1.5 w-full transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: client.brandColors.primary }}
                  />

                  {/* Card Main Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Top Row: Monogram + Live Domain Status */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      {/* Monogram Badge */}
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center font-mono font-black text-xs shadow-inner"
                          style={{
                            backgroundColor: client.brandColors.bgTint,
                            color: client.brandColors.primary,
                            border: `1px solid ${client.brandColors.borderTint}`,
                          }}
                        >
                          {client.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                            {client.sector}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--text-core)] font-semibold">
                            {client.location.split('•')[0]}
                          </span>
                        </div>
                      </div>

                      {/* Live Status Pill */}
                      <a
                        href={client.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                        title="Visit live production website"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>LIVE</span>
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    </div>

                    {/* Client Name */}
                    <h3 className="text-lg font-black text-[var(--text-core)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors leading-snug">
                      <a href={client.liveUrl} target="_blank" rel="noopener noreferrer">
                        {client.name}
                      </a>
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed mb-5 line-clamp-3">
                      {client.tagline}
                    </p>

                    {/* Impact Metric Banner */}
                    <div
                      className="p-3 rounded-xl border mb-5 flex items-center justify-between"
                      style={{
                        backgroundColor: client.brandColors.bgTint,
                        borderColor: client.brandColors.borderTint,
                      }}
                    >
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                          Key Telemetry
                        </span>
                        <span className="text-xs font-mono font-bold text-[var(--text-core)]">
                          {client.metrics.label}
                        </span>
                      </div>
                      <span
                        className="text-sm font-mono font-black tracking-tight"
                        style={{ color: client.brandColors.primary }}
                      >
                        {client.metrics.value}
                      </span>
                    </div>

                    {/* Core Deliverables Checkmarks */}
                    <div className="space-y-2 mb-5 flex-grow">
                      <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block font-bold">
                        Engineered Solutions:
                      </span>
                      {client.deliverables.slice(0, 2).map((del, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-core)]/90 leading-tight">
                          <svg className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span className="font-light text-[11px]">{del}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                      {client.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Engineering Blueprint Drawer */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]/50 -mx-6 -mb-6 p-6 space-y-3 animate-fadeIn">
                        <div className="text-[10px] font-mono text-[var(--accent-gold)] uppercase font-bold tracking-wider">
                          Full Architecture Breakdown
                        </div>
                        <ul className="space-y-2 text-xs text-[var(--text-core)] font-light">
                          {client.deliverables.map((del, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[var(--accent-gold)] font-bold">▪</span>
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-2 text-[10px] font-mono text-[var(--text-muted)]">
                          Verified Domain: <span className="text-[var(--text-core)] font-semibold">{client.domain}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-4 bg-[var(--bg-primary)]/40 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
                    <button
                      onClick={() => toggleExpand(client.id)}
                      className="text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--text-core)] transition-colors flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Less Info' : 'Specs'}</span>
                      <svg
                        className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>

                    <div className="flex items-center gap-3">
                      {client.caseStudySlug && (
                        <Link
                          href={`/portfolio/${client.caseStudySlug}`}
                          className="text-[11px] font-mono text-[var(--accent-gold)] hover:underline font-bold"
                        >
                          Teardown →
                        </Link>
                      )}

                      <a
                        href={client.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--text-core)] hover:bg-[var(--accent-gold)] text-[var(--bg-primary)] font-mono text-xs font-bold transition-colors shadow-sm"
                      >
                        <span>Visit Site</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ═══ VIEW MODE 2: SPECIFICATION TABLE ═══ */
          <div className="w-full overflow-x-auto rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/60 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  <th className="py-4 px-6 font-bold">Client / Brand</th>
                  <th className="py-4 px-6 font-bold">Sector &amp; Location</th>
                  <th className="py-4 px-6 font-bold">Telemetry Benchmark</th>
                  <th className="py-4 px-6 font-bold">Key Architectural Stack</th>
                  <th className="py-4 px-6 font-bold text-right">Production Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] text-xs font-mono">
                {filteredClients.map((client) => (
                  <tr
                    key={client.id}
                    className="hover:bg-[var(--bg-primary)]/40 transition-colors group"
                  >
                    {/* Brand & Domain */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: client.brandColors.primary }}
                        />
                        <div>
                          <div className="font-bold text-[var(--text-core)] group-hover:text-[var(--accent-gold)] transition-colors">
                            {client.name}
                          </div>
                          <div className="text-[10px] text-[var(--text-muted)]">
                            {client.domain}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Sector & Location */}
                    <td className="py-4 px-6">
                      <div className="text-[var(--text-core)] font-semibold">{client.sector}</div>
                      <div className="text-[10px] text-[var(--text-muted)]">{client.location}</div>
                    </td>

                    {/* Telemetry */}
                    <td className="py-4 px-6">
                      <div className="font-bold text-emerald-600 dark:text-emerald-400">
                        {client.metrics.value}
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">
                        {client.metrics.label}
                      </div>
                    </td>

                    {/* Tech Stack */}
                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {client.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Action */}
                    <td className="py-4 px-6 text-right">
                      <a
                        href={client.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all text-xs font-bold"
                      >
                        <span>Launch</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {filteredClients.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl border border-dashed border-[var(--border-subtle)] bg-[var(--bg-surface)]">
            <div className="w-12 h-12 rounded-full bg-[var(--bg-primary)] flex items-center justify-center mx-auto mb-3 text-[var(--text-muted)]">
              🔍
            </div>
            <h4 className="text-base font-bold text-[var(--text-core)] mb-1">
              No clients found matching &ldquo;{searchQuery}&rdquo;
            </h4>
            <p className="text-xs text-[var(--text-muted)] font-light max-w-sm mx-auto mb-4">
              Try adjusting your search query or selecting a different sector filter tab above.
            </p>
            <button
              onClick={() => {
                setSelectedSector('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[var(--accent-gold)] text-white text-xs font-mono font-bold hover:opacity-90 transition-opacity"
            >
              Show All 9 Clients
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
