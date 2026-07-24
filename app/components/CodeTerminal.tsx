'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const LOG_TEMPLATES = [
  'INITIALIZING SYSTEM STATE NODE {id}',
  'FETCHING UNSTRUCTURED DATA STREAM FROM INTAKE_CDC_QUEUE',
  'PARSING DOCUMENT METADATA via GOLDFISH-MISTRAL-7B [OK]',
  'EXTRACTING SCHEMA ENTITIES: {schema}',
  'VECTORIZING CHUNKS (1024 tokens) pgvector insertion: {vectorId}',
  'AGENT THREAD EXECUTION: routing action to {agentNode}',
  'COMPLETING VALIDATION CHECK: Human-in-the-loop bypass: [FALSE]',
  'RECONCILING ACCOUNTS LEDGER #REC-{num} [SUCCESS]',
  'EXCEPTION HANDLER ACTIVE: Routing timeout fallback... corrected [OK]',
  'SYNCHRONIZING LEGACY REPOSITORY via HARMONIZATION MIDDLEWARE'
];

const SCHEMAS = ['supply_chain_invoice', 'legal_contract_v2', 'fintech_transaction_log', 'user_telemetry_audit'];
const AGENT_NODES = ['decision_router_node', 'data_cleaning_agent', 'audit_compliance_agent'];

export default function CodeTerminal() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'calculator'>('terminal');

  // Terminal state
  const [logs, setLogs] = useState<string[]>([]);
  const [throughput, setThroughput] = useState(14240);
  const [latency, setLatency] = useState(42);
  const [activeNodes, setActiveNodes] = useState(8);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculator state
  const [teamSize, setTeamSize] = useState(12);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(15);
  const [hourlyCost, setHourlyCost] = useState(35);

  // Computed ROI
  const weeklyHoursSaved = Math.round(teamSize * manualHoursPerWeek * 0.75);
  const monthlySavings = Math.round(weeklyHoursSaved * 4.33 * hourlyCost);
  const annualSavings = monthlySavings * 12;

  // Initialize with some log lines
  useEffect(() => {
    const initialLogs = [
      'GOLDFISH DIGITAL COGNITIVE OPERATING SYSTEM [v1.4.0]',
      'CONNECTING TO CLOUD WORKSPACE PLATFORM...',
      'ESTABLISHING SECURE SSH PIPELINE ON LOCAL VPC [OK]',
      'VECTOR DB ENGINE CONNECTED: pgvector@localhost:5432',
      'MONITORING ACTIVE AGENT QUEUES ON KAFKA STREAM...'
    ];
    setLogs(initialLogs);

    const telemetryInterval = setInterval(() => {
      setThroughput(prev => Math.floor(prev + (Math.random() * 200 - 100)));
      setLatency(prev => Math.max(12, Math.floor(prev + (Math.random() * 6 - 3))));
      setActiveNodes(() => Math.floor(Math.random() * 4) + 6);
    }, 1500);

    const logInterval = setInterval(() => {
      const template = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];
      const log = template
        .replace('{id}', Math.floor(Math.random() * 1000 + 100).toString())
        .replace('{schema}', SCHEMAS[Math.floor(Math.random() * SCHEMAS.length)])
        .replace('{vectorId}', `uuid_${Math.floor(Math.random() * 100000)}`)
        .replace('{agentNode}', AGENT_NODES[Math.floor(Math.random() * AGENT_NODES.length)])
        .replace('{num}', Math.floor(Math.random() * 9000 + 1000).toString());

      const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
      setLogs(prev => [...prev.slice(-40), `[${timestamp}] ${log}`]);
    }, 1800);

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
    <div className="w-full h-full bg-[#0E0E0E] rounded-xl border border-[var(--border-accent)]/30 shadow-2xl overflow-hidden flex flex-col font-mono text-[11px] md:text-xs">
      
      {/* Terminal Header & Mode Switcher */}
      <div className="w-full bg-[#161616] border-b border-[#262626] flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
          </div>

          {/* Mode Tabs */}
          <div className="flex items-center bg-[#090909] p-0.5 rounded-lg border border-[#2a2a2a]">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all duration-200 ${
                activeTab === 'terminal'
                  ? 'bg-[var(--accent-gold)] text-black shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              System Logs
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all duration-200 ${
                activeTab === 'calculator'
                  ? 'bg-[var(--accent-gold)] text-black shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ⚡ Live ROI Calculator
            </button>
          </div>
        </div>

        <span className="hidden sm:inline text-gray-500 font-semibold tracking-wider text-[10px] uppercase">
          goldfish-ops@prod
        </span>
      </div>

      {/* TAB 1: TERMINAL LOGS */}
      {activeTab === 'terminal' && (
        <>
          <div ref={containerRef} className="flex-1 p-5 overflow-y-auto space-y-2 select-none h-64 md:h-80 scrollbar-thin text-green-500/80">
            {logs.map((log, index) => {
              let lineClass = 'text-green-500/70';
              if (log.includes('[OK]') || log.includes('[SUCCESS]')) {
                lineClass = 'text-green-400 font-bold';
              } else if (log.includes('INITIALIZING') || log.includes('COGNITIVE')) {
                lineClass = 'text-[var(--accent-gold)]';
              } else if (log.includes('EXCEPTION') || log.includes('Routing timeout')) {
                lineClass = 'text-yellow-500 font-semibold';
              }
              return (
                <div key={index} className={`leading-relaxed break-all ${lineClass}`}>
                  <span className="text-gray-600 mr-2">$</span>
                  {log}
                </div>
              );
            })}
          </div>

          <div className="bg-[#141414] border-t border-[#262626] p-4 grid grid-cols-3 gap-4 text-center text-[10px] md:text-[11px]">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase tracking-widest">THROUGHPUT</span>
              <span className="text-[var(--accent-gold)] font-bold text-sm md:text-base">
                {throughput.toLocaleString()} <span className="text-[10px] text-gray-500">req/s</span>
              </span>
            </div>
            <div className="flex flex-col gap-1 border-x border-[#262626] px-2">
              <span className="text-gray-500 uppercase tracking-widest">QUEUE LATENCY</span>
              <span className="text-white font-bold text-sm md:text-base">
                {latency} <span className="text-[10px] text-gray-500">ms</span>
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase tracking-widest">ACTIVE NODES</span>
              <span className="text-blue-400 font-bold text-sm md:text-base">
                {activeNodes} <span className="text-[10px] text-gray-500">running</span>
              </span>
            </div>
          </div>
        </>
      )}

      {/* TAB 2: INTERACTIVE ROI CALCULATOR */}
      {activeTab === 'calculator' && (
        <div className="flex-1 p-6 flex flex-col justify-between text-gray-200 space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-[#262626]">
              <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-widest">
                Interactive Automation ROI Estimator
              </span>
              <span className="text-[10px] text-gray-500 font-mono">75% Efficiency Impact</span>
            </div>

            {/* Slider 1: Team Size */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <label className="text-gray-400">Team / Department Size:</label>
                <span className="text-[var(--accent-gold)] font-bold">{teamSize} members</span>
              </div>
              <input
                type="range"
                min="2"
                max="100"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-[var(--accent-gold)] cursor-pointer"
              />
            </div>

            {/* Slider 2: Manual Hours */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <label className="text-gray-400">Manual Admin Hours / Person / Week:</label>
                <span className="text-[var(--accent-gold)] font-bold">{manualHoursPerWeek} hrs/wk</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={manualHoursPerWeek}
                onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                className="w-full accent-[var(--accent-gold)] cursor-pointer"
              />
            </div>

            {/* Slider 3: Hourly Cost */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <label className="text-gray-400">Avg Hourly Blended Cost:</label>
                <span className="text-[var(--accent-gold)] font-bold">${hourlyCost} / hr</span>
              </div>
              <input
                type="range"
                min="15"
                max="150"
                step="5"
                value={hourlyCost}
                onChange={(e) => setHourlyCost(Number(e.target.value))}
                className="w-full accent-[var(--accent-gold)] cursor-pointer"
              />
            </div>
          </div>

          {/* Savings Outcome Box */}
          <div className="p-4 rounded-xl border border-[var(--border-accent)]/40 bg-[#161616] grid grid-cols-2 gap-4 items-center">
            <div>
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                Projected Annual Savings
              </span>
              <span className="text-2xl lg:text-3xl font-black font-mono text-[var(--accent-gold)]">
                ${annualSavings.toLocaleString()}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                Hours Reclaimed / Year
              </span>
              <span className="text-lg lg:text-xl font-bold font-mono text-white">
                {(weeklyHoursSaved * 52).toLocaleString()} hrs
              </span>
            </div>
          </div>

          <Link
            href="/contact"
            className="w-full btn-primary text-center py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest"
          >
            Claim These Operational Savings →
          </Link>
        </div>
      )}
    </div>
  );
}
