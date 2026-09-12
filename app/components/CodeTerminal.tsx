'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const LOG_TEMPLATES = [
  'INITIALIZING GROWTH STATE NODE {id}',
  'PARSING INBOUND LEAD STREAM: WhatsApp Cloud API [OK]',
  'ENTITY SCHEMA VALIDATED: LocalBusiness & Service via schema.org [OK]',
  'PERFORMANCE AUDIT: Edge TTFB 38ms | Lighthouse Core Web Vitals 98/100',
  'GEO OPTIMIZATION: Indexing knowledge graph entity for AI search',
  'AUTOMATING DIRECT BOOKING: M-Pesa STK push webhook dispatched [OK]',
  'RECONCILING REVENUE LEDGER: OTA commission bypass: 0% fee [SUCCESS]',
  'LEAD QUALIFICATION AGENT: routing verified buyer inquiry to sales lead',
  'ATTRIBUTION EVENT: Server-side GA4 + Meta CAPI purchase matched [OK]',
  'SYNCHRONIZING REPOSITORY: Next.js 15 edge cache revalidated'
];

const SCHEMAS = ['hospitality_reservation', 'realestate_lead_intake', 'sme_order_pipeline', 'seo_entity_graph'];
const AGENT_NODES = ['lead_qualifier_agent', 'direct_booking_concierge', 'seo_crawler_agent'];

export default function CodeTerminal() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'calculator' | 'terminal'>('architecture');
  const [selectedSector, setSelectedSector] = useState<'hospitality' | 'realestate' | 'sme'>('hospitality');
  const [currency, setCurrency] = useState<'KES' | 'USD'>('KES');

  // Terminal state
  const [logs, setLogs] = useState<string[]>([]);
  const [throughput, setThroughput] = useState(14240);
  const [latency, setLatency] = useState(38);
  const [activeNodes, setActiveNodes] = useState(8);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculator state (SME & Hospitality oriented)
  const [calcMode, setCalcMode] = useState<'ota' | 'admin'>('ota');
  
  // OTA Calc (Hospitality)
  const [monthlyBookings, setMonthlyBookings] = useState(25);
  const [avgNightRateKES, setAvgNightRateKES] = useState(15000);
  const [avgNightRateUSD, setAvgNightRateUSD] = useState(120);
  const [otaCommissionPct, setOtaCommissionPct] = useState(20);

  // Admin Calc (SME)
  const [teamSize, setTeamSize] = useState(5);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(12);
  const [hourlyRateKES, setHourlyRateKES] = useState(1200);
  const [hourlyRateUSD, setHourlyRateUSD] = useState(15);

  // Computations
  const currentNightRate = currency === 'KES' ? avgNightRateKES : avgNightRateUSD;
  const monthlyGrossRevenue = monthlyBookings * currentNightRate;
  const annualOtaLeak = Math.round(monthlyGrossRevenue * (otaCommissionPct / 100) * 12);
  const directBookingRecovery = Math.round(annualOtaLeak * 0.65); // 65% direct recovery benchmark

  const currentHourlyRate = currency === 'KES' ? hourlyRateKES : hourlyRateUSD;
  const weeklyHoursSaved = Math.round(teamSize * manualHoursPerWeek * 0.70);
  const annualAdminSavings = Math.round(weeklyHoursSaved * 52 * currentHourlyRate);

  // Initialize logs & intervals
  useEffect(() => {
    const initialLogs = [
      'GOLDFISH DIGITAL GROWTH & AI SYSTEM [v2.4.0]',
      'CONNECTING TO DIANI COASTAL & NAIROBI EDGE NETWORK...',
      'VERIFYING CORE WEB VITALS: LCP 0.8s | CLS 0.02 [OK]',
      'KDPA 2019 & GDPR DATA PRIVACY SHIELD: ACTIVE',
      'MONITORING ACTIVE WHATSAPP AI ASSISTANT QUEUES...'
    ];
    setLogs(initialLogs);

    const telemetryInterval = setInterval(() => {
      setThroughput(prev => Math.floor(prev + (Math.random() * 200 - 100)));
      setLatency(prev => Math.max(18, Math.floor(prev + (Math.random() * 4 - 2))));
      setActiveNodes(() => Math.floor(Math.random() * 4) + 6);
    }, 1800);

    const logInterval = setInterval(() => {
      const template = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];
      const log = template
        .replace('{id}', Math.floor(Math.random() * 1000 + 100).toString())
        .replace('{schema}', SCHEMAS[Math.floor(Math.random() * SCHEMAS.length)])
        .replace('{agentNode}', AGENT_NODES[Math.floor(Math.random() * AGENT_NODES.length)]);

      const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
      setLogs(prev => [...prev.slice(-35), `[${timestamp}] ${log}`]);
    }, 2200);

    return () => {
      clearInterval(telemetryInterval);
      clearInterval(logInterval);
    };
  }, []);

  useEffect(() => {
    if (activeTab === 'terminal' && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs, activeTab]);

  return (
    <div className="w-full h-full bg-[#0E0E0E] rounded-2xl border border-[var(--border-accent)]/40 shadow-2xl overflow-hidden flex flex-col font-mono text-[11px] md:text-xs">
      
      {/* Header & Mode Switcher */}
      <div className="w-full bg-[#161616] border-b border-[#262626] flex items-center justify-between px-3 md:px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 block" />
          </div>

          {/* Mode Tabs */}
          <div className="flex items-center bg-[#090909] p-0.5 rounded-lg border border-[#2a2a2a]">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all duration-200 ${
                activeTab === 'architecture'
                  ? 'bg-[var(--accent-gold)] text-black shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ⚡ Architecture
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all duration-200 ${
                activeTab === 'calculator'
                  ? 'bg-[var(--accent-gold)] text-black shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              📊 ROI Simulator
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all duration-200 ${
                activeTab === 'terminal'
                  ? 'bg-[var(--accent-gold)] text-black shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🖥️ Logs
            </button>
          </div>
        </div>

        <span className="hidden sm:inline text-emerald-400 font-semibold tracking-wider text-[10px] uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Diani HQ Online
        </span>
      </div>

      {/* ── TAB 1: GROWTH ARCHITECTURE (DEFAULT PREVIEW) ── */}
      {activeTab === 'architecture' && (
        <div className="flex-1 p-5 flex flex-col justify-between text-gray-200 space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#262626] mb-3">
              <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-widest font-bold">
                Select Your Industry Focus
              </span>
              <span className="text-[10px] text-gray-400">Targeted Systems</span>
            </div>

            {/* Sector Selector Chips */}
            <div className="grid grid-cols-3 gap-1.5 mb-4">
              <button
                type="button"
                onClick={() => setSelectedSector('hospitality')}
                className={`py-1.5 px-2 rounded-lg text-center transition-all text-[10px] font-bold ${
                  selectedSector === 'hospitality'
                    ? 'bg-[var(--accent-gold)] text-black'
                    : 'bg-[#181818] text-gray-300 hover:bg-[#222]'
                }`}
              >
                🏨 Hospitality
              </button>
              <button
                type="button"
                onClick={() => setSelectedSector('realestate')}
                className={`py-1.5 px-2 rounded-lg text-center transition-all text-[10px] font-bold ${
                  selectedSector === 'realestate'
                    ? 'bg-[var(--accent-gold)] text-black'
                    : 'bg-[#181818] text-gray-300 hover:bg-[#222]'
                }`}
              >
                🏡 Real Estate
              </button>
              <button
                type="button"
                onClick={() => setSelectedSector('sme')}
                className={`py-1.5 px-2 rounded-lg text-center transition-all text-[10px] font-bold ${
                  selectedSector === 'sme'
                    ? 'bg-[var(--accent-gold)] text-black'
                    : 'bg-[#181818] text-gray-300 hover:bg-[#222]'
                }`}
              >
                🚀 Growing SME
              </button>
            </div>

            {/* Sector Visual Pipeline */}
            {selectedSector === 'hospitality' && (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#141414] border border-[#262626] space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-white font-bold">Direct Booking &amp; OTA Freedom Engine</span>
                    <span className="text-emerald-400 font-mono text-[10px]">+58% Direct Bookings</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-400 pt-1 border-t border-[#222]">
                    <div>
                      <span className="text-gray-500 block">STEP 01</span>
                      <strong className="text-gray-200">Sub-1s Mobile Web</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">STEP 02</span>
                      <strong className="text-gray-200">WhatsApp Concierge</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">STEP 03</span>
                      <strong className="text-gray-200">0% Commission Pay</strong>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2.5 rounded-lg bg-[#141414] border border-[#222]">
                    <span className="text-gray-500 block">OTA SAVINGS</span>
                    <span className="text-[var(--accent-gold)] font-bold text-sm">Save 18–25%</span>
                    <span className="text-gray-400 block text-[9px]">Eliminate middleman cut</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141414] border border-[#222]">
                    <span className="text-gray-500 block">SPEED BENCHMARK</span>
                    <span className="text-emerald-400 font-bold text-sm">98/100 Core Web</span>
                    <span className="text-gray-400 block text-[9px]">Sub-second edge caching</span>
                  </div>
                </div>
              </div>
            )}

            {selectedSector === 'realestate' && (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#141414] border border-[#262626] space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-white font-bold">High-Intent Buyer Pipeline &amp; CRM</span>
                    <span className="text-emerald-400 font-mono text-[10px]">45-Sec Response</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-400 pt-1 border-t border-[#222]">
                    <div>
                      <span className="text-gray-500 block">STEP 01</span>
                      <strong className="text-gray-200">Meta/Google Ads</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">STEP 02</span>
                      <strong className="text-gray-200">WhatsApp AI Nurture</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">STEP 03</span>
                      <strong className="text-gray-200">Pre-Qualified Leads</strong>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2.5 rounded-lg bg-[#141414] border border-[#222]">
                    <span className="text-gray-500 block">LEAD ACCELERATION</span>
                    <span className="text-[var(--accent-gold)] font-bold text-sm">12x Faster</span>
                    <span className="text-gray-400 block text-[9px]">Instant qualification</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141414] border border-[#222]">
                    <span className="text-gray-500 block">ROAS FOCUS</span>
                    <span className="text-blue-400 font-bold text-sm">Target 3.5x–5x</span>
                    <span className="text-gray-400 block text-[9px]">Server-side CAPI tracking</span>
                  </div>
                </div>
              </div>
            )}

            {selectedSector === 'sme' && (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#141414] border border-[#262626] space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-white font-bold">Autonomous WhatsApp &amp; Workflow Suite</span>
                    <span className="text-emerald-400 font-mono text-[10px]">15+ Hrs Saved/Wk</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-400 pt-1 border-t border-[#222]">
                    <div>
                      <span className="text-gray-500 block">STEP 01</span>
                      <strong className="text-gray-200">24/7 Lead Capture</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">STEP 02</span>
                      <strong className="text-gray-200">Automated Follow-up</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">STEP 03</span>
                      <strong className="text-gray-200">Seamless M-Pesa</strong>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2.5 rounded-lg bg-[#141414] border border-[#222]">
                    <span className="text-gray-500 block">LABOR RECLAIMED</span>
                    <span className="text-[var(--accent-gold)] font-bold text-sm">60+ Hrs/Mo</span>
                    <span className="text-gray-400 block text-[9px]">Zero manual chat typing</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141414] border border-[#222]">
                    <span className="text-gray-500 block">COMPLIANCE</span>
                    <span className="text-emerald-400 font-bold text-sm">KDPA 2019</span>
                    <span className="text-gray-400 block text-[9px]">Encrypted data handling</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="w-full btn-primary text-center py-2.5 text-[11px] font-mono font-bold uppercase tracking-wider block"
          >
            Audit Your Business Architecture →
          </Link>
        </div>
      )}

      {/* ── TAB 2: MULTI-CURRENCY ROI & LEAKAGE SIMULATOR ── */}
      {activeTab === 'calculator' && (
        <div className="flex-1 p-5 flex flex-col justify-between text-gray-200 space-y-4">
          <div className="space-y-3">
            {/* Top toggles: Calculator Mode & Currency */}
            <div className="flex items-center justify-between pb-2 border-b border-[#262626]">
              <div className="flex items-center gap-1 bg-[#181818] p-0.5 rounded-lg">
                <button
                  type="button"
                  onClick={() => setCalcMode('ota')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    calcMode === 'ota' ? 'bg-[var(--accent-gold)] text-black' : 'text-gray-400'
                  }`}
                >
                  OTA Leak (Hotels)
                </button>
                <button
                  type="button"
                  onClick={() => setCalcMode('admin')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    calcMode === 'admin' ? 'bg-[var(--accent-gold)] text-black' : 'text-gray-400'
                  }`}
                >
                  Admin Time (SMEs)
                </button>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1 bg-[#181818] p-0.5 rounded-lg border border-[#2c2c2c]">
                <button
                  type="button"
                  onClick={() => setCurrency('KES')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                    currency === 'KES' ? 'bg-[var(--accent-gold)] text-black' : 'text-gray-400'
                  }`}
                >
                  KES
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                    currency === 'USD' ? 'bg-[var(--accent-gold)] text-black' : 'text-gray-400'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Mode A: OTA Commission Calculator */}
            {calcMode === 'ota' && (
              <div className="space-y-3 text-[11px]">
                <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>Monthly Guest Bookings:</span>
                    <strong className="text-[var(--accent-gold)]">{monthlyBookings} stays</strong>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="150"
                    value={monthlyBookings}
                    onChange={(e) => setMonthlyBookings(Number(e.target.value))}
                    className="w-full accent-[var(--accent-gold)] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>Avg Nightly Rate ({currency}):</span>
                    <strong className="text-[var(--accent-gold)]">
                      {currency === 'KES' ? `KES ${avgNightRateKES.toLocaleString()}` : `$${avgNightRateUSD}`}
                    </strong>
                  </div>
                  <input
                    type="range"
                    min={currency === 'KES' ? 5000 : 40}
                    max={currency === 'KES' ? 80000 : 600}
                    step={currency === 'KES' ? 1000 : 10}
                    value={currency === 'KES' ? avgNightRateKES : avgNightRateUSD}
                    onChange={(e) => {
                      if (currency === 'KES') setAvgNightRateKES(Number(e.target.value));
                      else setAvgNightRateUSD(Number(e.target.value));
                    }}
                    className="w-full accent-[var(--accent-gold)] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>Current OTA Commission Fee:</span>
                    <strong className="text-red-400">{otaCommissionPct}%</strong>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="25"
                    value={otaCommissionPct}
                    onChange={(e) => setOtaCommissionPct(Number(e.target.value))}
                    className="w-full accent-red-400 cursor-pointer"
                  />
                </div>

                {/* Outcome Box */}
                <div className="p-3 rounded-xl border border-[var(--border-accent)]/40 bg-[#141414] grid grid-cols-2 gap-3 items-center">
                  <div>
                    <span className="text-[9px] text-red-400 uppercase tracking-wider block">Current Annual OTA Bleed</span>
                    <span className="text-base md:text-lg font-black text-red-400">
                      {currency === 'KES' ? `KES ${(annualOtaLeak / 1000000).toFixed(2)}M` : `$${annualOtaLeak.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-emerald-400 uppercase tracking-wider block">Recoverable Margin</span>
                    <span className="text-base md:text-lg font-black text-emerald-400">
                      +{currency === 'KES' ? `KES ${(directBookingRecovery / 1000000).toFixed(2)}M` : `$${directBookingRecovery.toLocaleString()}`}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Mode B: SME Admin Hours Calculator */}
            {calcMode === 'admin' && (
              <div className="space-y-3 text-[11px]">
                <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>Staff / Team Members Handling Admin:</span>
                    <strong className="text-[var(--accent-gold)]">{teamSize} people</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full accent-[var(--accent-gold)] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>Manual WhatsApp/Admin Hours per Person/Week:</span>
                    <strong className="text-[var(--accent-gold)]">{manualHoursPerWeek} hrs/wk</strong>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="30"
                    value={manualHoursPerWeek}
                    onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                    className="w-full accent-[var(--accent-gold)] cursor-pointer"
                  />
                </div>

                {/* Outcome Box */}
                <div className="p-3 rounded-xl border border-[var(--border-accent)]/40 bg-[#141414] grid grid-cols-2 gap-3 items-center">
                  <div>
                    <span className="text-[9px] text-gray-400 uppercase tracking-wider block">Hours Automated / Year</span>
                    <span className="text-base md:text-lg font-black text-white">
                      {(weeklyHoursSaved * 52).toLocaleString()} hrs
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-[var(--accent-gold)] uppercase tracking-wider block">Value of Reclaimed Time</span>
                    <span className="text-base md:text-lg font-black text-[var(--accent-gold)]">
                      {currency === 'KES' ? `KES ${(annualAdminSavings / 1000).toFixed(0)}k` : `$${annualAdminSavings.toLocaleString()}`}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="w-full btn-primary text-center py-2.5 text-[11px] font-mono font-bold uppercase tracking-wider block"
          >
            Reclaim This Revenue →
          </Link>
        </div>
      )}

      {/* ── TAB 3: LIVE TERMINAL LOGS ── */}
      {activeTab === 'terminal' && (
        <>
          <div ref={containerRef} className="flex-1 p-4 overflow-y-auto space-y-1.5 select-none h-60 md:h-72 scrollbar-thin text-green-500/80">
            {logs.map((log, index) => {
              let lineClass = 'text-green-500/70';
              if (log.includes('[OK]') || log.includes('[SUCCESS]')) {
                lineClass = 'text-green-400 font-bold';
              } else if (log.includes('GOLDFISH') || log.includes('GROWTH')) {
                lineClass = 'text-[var(--accent-gold)]';
              } else if (log.includes('ROUTING') || log.includes('ATTRIBUTION')) {
                lineClass = 'text-blue-400';
              }
              return (
                <div key={index} className={`leading-relaxed break-all ${lineClass}`}>
                  <span className="text-gray-600 mr-2">$</span>
                  {log}
                </div>
              );
            })}
          </div>

          <div className="bg-[#141414] border-t border-[#262626] p-3 grid grid-cols-3 gap-3 text-center text-[10px]">
            <div>
              <span className="text-gray-500 uppercase tracking-widest block text-[9px]">THROUGHPUT</span>
              <span className="text-[var(--accent-gold)] font-bold text-xs">
                {throughput.toLocaleString()} <span className="text-[9px] text-gray-500">ev/m</span>
              </span>
            </div>
            <div className="border-x border-[#262626] px-1">
              <span className="text-gray-500 uppercase tracking-widest block text-[9px]">EDGE LATENCY</span>
              <span className="text-white font-bold text-xs">
                {latency} <span className="text-[9px] text-gray-500">ms</span>
              </span>
            </div>
            <div>
              <span className="text-gray-500 uppercase tracking-widest block text-[9px]">SECURITY</span>
              <span className="text-emerald-400 font-bold text-xs">
                KDPA 2019
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
