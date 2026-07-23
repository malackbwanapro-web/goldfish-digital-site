'use client';

import { useState, useEffect, useRef } from 'react';

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
  const [logs, setLogs] = useState<string[]>([]);
  const [throughput, setThroughput] = useState(14240);
  const [latency, setLatency] = useState(42);
  const [activeNodes, setActiveNodes] = useState(8);
  const containerRef = useRef<HTMLDivElement>(null);

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

    // Periodic updates for telemetry numbers
    const telemetryInterval = setInterval(() => {
      setThroughput(prev => Math.floor(prev + (Math.random() * 200 - 100)));
      setLatency(prev => Math.max(12, Math.floor(prev + (Math.random() * 6 - 3))));
      setActiveNodes(() => Math.floor(Math.random() * 4) + 6);
    }, 1500);

    // Dynamic log generator
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

  // Scroll to bottom whenever logs change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="w-full h-full bg-[#0E0E0E] rounded-xl border border-[var(--border-subtle)] shadow-2xl overflow-hidden flex flex-col font-mono text-[11px] md:text-xs text-green-500/80">
      
      {/* Terminal Title Bar */}
      <div className="w-full bg-[#181818] h-10 border-b border-[#262626] flex items-center justify-between px-4">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
        </div>
        <span className="text-gray-500 font-semibold tracking-wider text-[10px] uppercase">
          goldfish-ops-pipeline@prod-core
        </span>
        <div className="w-8 h-2" />
      </div>

      {/* Terminal Panel Content */}
      <div ref={containerRef} className="flex-1 p-5 overflow-y-auto space-y-2 select-none h-64 md:h-80 scrollbar-thin">
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

      {/* Live Telemetry Footer Panel */}
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
    </div>
  );
}
