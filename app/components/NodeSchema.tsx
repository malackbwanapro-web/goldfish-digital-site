'use client';

import { useState, useEffect } from 'react';

const CONFIGS: Record<string, {
  node1: string;
  node2: string;
  node3: string;
  node4: string;
  center: string;
  status: string;
  telemetry: string;
}> = {
  "smart-web-app-ecosystems": {
    node1: "UI Design",
    node2: "CRM Layer",
    node3: "API Gateway",
    node4: "Mobile App",
    center: "HUB",
    status: "Digital Ecosystem Active",
    telemetry: "Load: 1.4s"
  },
  "advanced-visibility-engineering": {
    node1: "Tech SEO",
    node2: "GEO Layer",
    node3: "Entity Graph",
    node4: "AI Search",
    center: "RANK",
    status: "Visibility Engine Active",
    telemetry: "Crawl: Healthy"
  },
  "brand-identity-content-creation": {
    node1: "Visual ID",
    node2: "Tone & Voice",
    node3: "Content Hub",
    node4: "Video Assets",
    center: "BRAND",
    status: "Brand System Active",
    telemetry: "Authority: Building"
  },
  "digital-presence-paid-growth-management": {
    node1: "Meta Ads",
    node2: "Google Ads",
    node3: "LinkedIn B2B",
    node4: "Social Mgmt",
    center: "GROW",
    status: "Paid Growth Engine Active",
    telemetry: "ROAS: 3.8x"
  },
  "ai-automation-sme": {
    node1: "WhatsApp AI",
    node2: "Lead Nurture",
    node3: "CRM Sync",
    node4: "Auto Workflows",
    center: "AUTO",
    status: "AI Automation Active",
    telemetry: "Response: 90s"
  },
  "strategic-analytics-audits": {
    node1: "GA4 Tracking",
    node2: "Audit Layer",
    node3: "Looker Studio",
    node4: "Attribution",
    center: "DATA",
    status: "Analytics Infrastructure Active",
    telemetry: "Accuracy: 97%"
  }
};

export default function NodeSchema({ slug }: { slug?: string }) {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const config = (slug && CONFIGS[slug]) || {
    node1: "Ingest",
    node2: "Vector DB",
    node3: "AI Core",
    node4: "API Gateway",
    center: "SYS",
    status: "Execution Schema Active",
    telemetry: "Latency: 1.2ms"
  };

  return (
    <div className="w-full aspect-square rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xl flex items-center justify-center p-6 relative overflow-hidden group">
      {/* Absolute grid lines in background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      {/* SVG Canvas */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[320px] relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated flow connectors */}
        {/* Ingest -> Core */}
        <path
          d="M 80,80 L 200,200"
          stroke="var(--border-accent)"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="animate-[dash_10s_linear_infinite]"
        />
        {/* Core -> DB */}
        <path
          d="M 200,200 L 320,80"
          stroke="var(--border-accent)"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="animate-[dash_10s_linear_infinite]"
        />
        {/* API -> Core */}
        <path
          d="M 80,320 L 200,200"
          stroke="var(--border-accent)"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="animate-[dash_10s_linear_infinite]"
        />
        {/* Core -> Telemetry */}
        <path
          d="M 200,200 L 320,320"
          stroke="var(--border-accent)"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="animate-[dash_10s_linear_infinite]"
        />

        {/* Central Neural Node */}
        <circle
          cx="200"
          cy="200"
          r="45"
          fill="var(--bg-primary)"
          stroke="var(--accent-gold)"
          strokeWidth="3"
          className={`transition-all duration-1000 ${
            pulse ? 'shadow-lg scale-105' : 'scale-95'
          }`}
          style={{ transformOrigin: '200px 200px' }}
        />
        <circle
          cx="200"
          cy="200"
          r="30"
          fill="none"
          stroke="var(--accent-gold)"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          className="animate-[spin_20s_linear_infinite]"
          style={{ transformOrigin: '200px 200px' }}
        />
        {/* Small gold core dot */}
        <circle cx="200" cy="200" r="10" fill="var(--accent-gold)" />

        {/* Node 1: Ingest (Top Left) */}
        <g className="cursor-pointer group/node">
          <circle
            cx="80"
            cy="80"
            r="25"
            fill="var(--bg-surface)"
            stroke="var(--border-subtle)"
            strokeWidth="2"
            className="hover:stroke-[var(--accent-gold)] transition-colors duration-300"
          />
          {/* Data icon lines */}
          <path d="M 72,75 H 88 M 72,80 H 88 M 72,85 H 88" stroke="var(--text-core)" strokeWidth="2" strokeLinecap="round" />
          <text x="80" y="120" textAnchor="middle" className="text-[10px] font-mono fill-[var(--text-muted)] font-bold uppercase tracking-wider">
            {config.node1}
          </text>
        </g>

        {/* Node 2: DB Cache (Top Right) */}
        <g className="cursor-pointer group/node">
          <circle
            cx="320"
            cy="80"
            r="25"
            fill="var(--bg-surface)"
            stroke="var(--border-subtle)"
            strokeWidth="2"
            className="hover:stroke-[var(--accent-gold)] transition-colors duration-300"
          />
          {/* DB Cylinder */}
          <path d="M 310,75 C 310,71 330,71 330,75 M 310,75 V 85 C 310,89 330,89 330,85 V 75 M 310,80 C 310,84 330,84 330,80" stroke="var(--text-core)" strokeWidth="2" fill="none" />
          <text x="320" y="120" textAnchor="middle" className="text-[10px] font-mono fill-[var(--text-muted)] font-bold uppercase tracking-wider">
            {config.node2}
          </text>
        </g>

        {/* Node 3: LLM / AI Core (Bottom Left) */}
        <g className="cursor-pointer group/node">
          <circle
            cx="80"
            cy="320"
            r="25"
            fill="var(--bg-surface)"
            stroke="var(--border-subtle)"
            strokeWidth="2"
            className="hover:stroke-[var(--accent-gold)] transition-colors duration-300"
          />
          {/* Neural connections */}
          <circle cx="75" cy="315" r="3" fill="var(--text-core)" />
          <circle cx="85" cy="315" r="3" fill="var(--text-core)" />
          <circle cx="80" cy="328" r="3" fill="var(--text-core)" />
          <line x1="75" y1="315" x2="85" y2="315" stroke="var(--text-core)" strokeWidth="1.5" />
          <line x1="75" y1="315" x2="80" y2="328" stroke="var(--text-core)" strokeWidth="1.5" />
          <line x1="85" y1="315" x2="80" y2="328" stroke="var(--text-core)" strokeWidth="1.5" />
          <text x="80" y="362" textAnchor="middle" className="text-[10px] font-mono fill-[var(--text-muted)] font-bold uppercase tracking-wider">
            {config.node3}
          </text>
        </g>

        {/* Node 4: API Outflow (Bottom Right) */}
        <g className="cursor-pointer group/node">
          <circle
            cx="320"
            cy="320"
            r="25"
            fill="var(--bg-surface)"
            stroke="var(--border-subtle)"
            strokeWidth="2"
            className="hover:stroke-[var(--accent-gold)] transition-colors duration-300"
          />
          {/* Interlocking API connectors */}
          <path d="M 310,320 H 330 M 320,310 V 330" stroke="var(--text-core)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="320" cy="320" r="4" fill="var(--bg-surface)" stroke="var(--text-core)" strokeWidth="2" />
          <text x="320" y="362" textAnchor="middle" className="text-[10px] font-mono fill-[var(--text-muted)] font-bold uppercase tracking-wider">
            {config.node4}
          </text>
        </g>

        {/* Center label */}
        <text
          x="200"
          y="204"
          textAnchor="middle"
          fill="var(--text-core)"
          className="text-[9px] font-mono font-bold uppercase tracking-widest pointer-events-none"
        >
          {config.center}
        </text>
      </svg>

      {/* Floating status label inside container */}
      <div className="absolute bottom-4 left-4 right-4 bg-[#0E0E0E]/90 border border-[#262626] py-1.5 px-3 rounded-lg flex items-center justify-between font-mono text-[9px] text-green-500/80">
        <span className="flex items-center gap-1.5 uppercase font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
          {config.status}
        </span>
        <span className="text-gray-500">{config.telemetry}</span>
      </div>

      {/* Custom keyframe styles inside component */}
      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </div>
  );
}
