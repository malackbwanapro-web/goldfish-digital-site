'use client';

import Image from 'next/image';

// Map: serviceSlug -> array of image paths or null (null = use CSS illustration)
const IMAGE_MAP: Record<string, (string | null)[]> = {
  'smart-web-app-ecosystems': [
    '/images/services/web-conversion.png',
    '/images/services/mobile-app.png',
    '/images/services/crm-integration.png',
  ],
  'advanced-visibility-engineering': [
    '/images/services/technical-seo.png',
    '/images/services/geo-ai.png',
    '/images/services/entity-graph.png',
  ],
  'brand-identity-content-creation': [
    '/images/services/brand-identity.png',
    '/images/services/content-strategy-production.png',
    '/images/services/video-visual-asset-creation.png',
  ],
  'digital-presence-paid-growth-management': [
    '/images/services/social-media-management.png',
    '/images/services/paid-advertising-dashboard.png',
    '/images/services/linkedin-b2b-lead-generation.png',
  ],
  'ai-automation-sme': [
    '/images/services/whatsapp-ai-assistant.png',
    null, // Lead Nurture — quota hit, CSS fallback
    null, // Workflow Automation — quota hit, CSS fallback
  ],
  'strategic-analytics-audits': [
    null, // Analytics Infrastructure — quota hit, CSS fallback
    null, // Performance Audits — quota hit, CSS fallback
    null, // Data Reporting — quota hit, CSS fallback
  ],
};

// Unique CSS illustration configs
interface IllustrationConfig {
  icon: 'calendar' | 'video' | 'social' | 'ads' | 'linkedin' | 'whatsapp' | 'nurture' | 'workflow' | 'analytics' | 'audit' | 'reporting';
  gradient: string;
  accentColor: string;
}

const ILLUSTRATION_MAP: Record<string, IllustrationConfig[]> = {
  'brand-identity-content-creation': [
    { icon: 'calendar', gradient: 'from-amber-900/30 to-orange-900/20', accentColor: '#D4AF37' }, // placeholder, uses image
    { icon: 'calendar', gradient: 'from-amber-900/30 to-orange-900/20', accentColor: '#D4AF37' },
    { icon: 'video', gradient: 'from-rose-900/30 to-purple-900/20', accentColor: '#E8A87C' },
  ],
  'digital-presence-paid-growth-management': [
    { icon: 'social', gradient: 'from-blue-900/30 to-indigo-900/20', accentColor: '#60A5FA' },
    { icon: 'ads', gradient: 'from-emerald-900/30 to-teal-900/20', accentColor: '#34D399' },
    { icon: 'linkedin', gradient: 'from-sky-900/30 to-blue-900/20', accentColor: '#38BDF8' },
  ],
  'ai-automation-sme': [
    { icon: 'whatsapp', gradient: 'from-green-900/30 to-emerald-900/20', accentColor: '#25D366' },
    { icon: 'nurture', gradient: 'from-violet-900/30 to-purple-900/20', accentColor: '#A78BFA' },
    { icon: 'workflow', gradient: 'from-amber-900/30 to-yellow-900/20', accentColor: '#FBBF24' },
  ],
  'strategic-analytics-audits': [
    { icon: 'analytics', gradient: 'from-cyan-900/30 to-blue-900/20', accentColor: '#22D3EE' },
    { icon: 'audit', gradient: 'from-orange-900/30 to-red-900/20', accentColor: '#FB923C' },
    { icon: 'reporting', gradient: 'from-indigo-900/30 to-violet-900/20', accentColor: '#818CF8' },
  ],
};

function ContentCalendarIllustration() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-amber-500/60" />
        <div className="h-2 w-20 rounded bg-white/10" />
      </div>
      {/* Calendar grid */}
      <div className="grid grid-cols-5 gap-1.5 flex-1">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`rounded-md border transition-all duration-500 ${
              [2, 5, 8, 11, 13].includes(i)
                ? 'bg-amber-500/20 border-amber-500/40'
                : 'bg-white/5 border-white/10'
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <div className="h-1.5 w-12 rounded bg-amber-500/40" />
        <div className="h-1.5 w-8 rounded bg-white/10" />
        <div className="h-1.5 w-16 rounded bg-white/10" />
      </div>
    </div>
  );
}

function VideoProductionIllustration() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
      {/* Play button */}
      <div className="w-20 h-20 rounded-full border-2 border-rose-400/40 flex items-center justify-center bg-rose-500/10 animate-pulse">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rose-400/80 ml-1">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      {/* Timeline */}
      <div className="w-full flex items-center gap-1">
        <div className="h-1 flex-1 rounded bg-rose-500/30" />
        <div className="w-3 h-3 rounded-full bg-rose-400/60 border border-rose-400/80" />
        <div className="h-1 flex-[2] rounded bg-white/10" />
      </div>
      {/* Thumbnail strip */}
      <div className="flex gap-1 w-full">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`flex-1 h-8 rounded-sm ${i < 3 ? 'bg-rose-500/15' : 'bg-white/5'} border border-white/5`} />
        ))}
      </div>
    </div>
  );
}

function SocialMediaIllustration() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-6">
      {/* Post cards */}
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex gap-3 items-start">
          <div className={`w-10 h-10 rounded-lg shrink-0 ${i === 0 ? 'bg-blue-500/30 border-blue-500/50' : 'bg-white/5 border-white/10'} border`} />
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="h-2 w-16 rounded bg-white/15" />
            <div className="h-1.5 w-full rounded bg-white/8" />
            <div className="h-1.5 w-3/4 rounded bg-white/5" />
            {i === 0 && (
              <div className="flex gap-4 mt-1">
                <div className="h-1.5 w-6 rounded bg-blue-400/30" />
                <div className="h-1.5 w-6 rounded bg-blue-400/20" />
                <div className="h-1.5 w-6 rounded bg-blue-400/10" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function PaidAdsIllustration() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-6">
      {/* ROAS metric */}
      <div className="flex items-end gap-2">
        <span className="text-2xl font-black font-mono text-emerald-400/80">3.8x</span>
        <span className="text-[9px] font-mono text-white/30 uppercase mb-1">ROAS</span>
      </div>
      {/* Bar chart */}
      <div className="flex items-end gap-2 flex-1">
        {[35, 55, 45, 70, 60, 85, 75, 90].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full">
            <div
              className={`rounded-t-sm ${i >= 6 ? 'bg-emerald-500/40' : 'bg-emerald-500/15'} border-t border-emerald-500/30`}
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="h-1.5 w-8 rounded bg-emerald-400/20" />
        <div className="h-1.5 w-8 rounded bg-white/10" />
      </div>
    </div>
  );
}

function LinkedInIllustration() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-6">
      {/* Network nodes */}
      <svg viewBox="0 0 200 100" className="w-full flex-1">
        {/* Connection lines */}
        <line x1="100" y1="50" x2="30" y2="20" stroke="rgba(56,189,248,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="100" y1="50" x2="170" y2="25" stroke="rgba(56,189,248,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="100" y1="50" x2="40" y2="80" stroke="rgba(56,189,248,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="100" y1="50" x2="160" y2="75" stroke="rgba(56,189,248,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        {/* Center node */}
        <circle cx="100" cy="50" r="14" fill="rgba(56,189,248,0.15)" stroke="rgba(56,189,248,0.5)" strokeWidth="2" />
        <text x="100" y="54" textAnchor="middle" fontSize="8" fill="rgba(56,189,248,0.8)" fontFamily="monospace" fontWeight="bold">YOU</text>
        {/* Outer nodes */}
        {[[30, 20], [170, 25], [40, 80], [160, 75]].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r="3" fill="rgba(56,189,248,0.3)" />
          </g>
        ))}
      </svg>
      {/* Pipeline */}
      <div className="flex gap-1 items-center">
        {['Lead', 'Qualify', 'Meeting'].map((step, i) => (
          <div key={i} className="flex items-center gap-1 flex-1">
            <div className={`text-[8px] font-mono px-2 py-1 rounded border ${i === 2 ? 'bg-sky-500/15 border-sky-500/30 text-sky-400/80' : 'bg-white/5 border-white/10 text-white/30'}`}>{step}</div>
            {i < 2 && <span className="text-white/20 text-[8px]">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function WhatsAppIllustration() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-6">
      {/* Chat header */}
      <div className="flex items-center gap-2 pb-2 border-b border-white/10">
        <div className="w-6 h-6 rounded-full bg-green-500/30 border border-green-500/50" />
        <div className="flex flex-col gap-0.5">
          <div className="h-2 w-20 rounded bg-white/15" />
          <div className="h-1 w-10 rounded bg-green-400/30" />
        </div>
      </div>
      {/* Messages */}
      <div className="flex flex-col gap-2 flex-1 justify-end">
        <div className="self-start bg-white/8 rounded-lg rounded-tl-none px-3 py-1.5 max-w-[70%]">
          <div className="h-1.5 w-24 rounded bg-white/15" />
          <div className="h-1.5 w-16 rounded bg-white/10 mt-1" />
        </div>
        <div className="self-end bg-green-500/15 border border-green-500/20 rounded-lg rounded-tr-none px-3 py-1.5 max-w-[75%]">
          <div className="h-1.5 w-28 rounded bg-green-400/25" />
          <div className="h-1.5 w-20 rounded bg-green-400/15 mt-1" />
          <div className="h-1.5 w-14 rounded bg-green-400/10 mt-1" />
        </div>
        <div className="self-start bg-white/8 rounded-lg rounded-tl-none px-3 py-1.5 max-w-[60%]">
          <div className="h-1.5 w-20 rounded bg-white/15" />
        </div>
        <div className="self-end bg-green-500/15 border border-green-500/20 rounded-lg rounded-tr-none px-3 py-1.5 max-w-[70%]">
          <div className="h-1.5 w-24 rounded bg-green-400/25" />
          <div className="h-1.5 w-10 rounded bg-green-400/15 mt-1" />
        </div>
      </div>
      {/* Typing indicator */}
      <div className="flex items-center gap-1 self-start bg-white/5 rounded-full px-3 py-1">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60 animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60 animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}

function LeadNurtureIllustration() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
      {/* Funnel */}
      {[
        { w: '100%', label: 'Visitors', color: 'bg-violet-500/10 border-violet-500/20' },
        { w: '75%', label: 'Leads', color: 'bg-violet-500/15 border-violet-500/30' },
        { w: '50%', label: 'Nurtured', color: 'bg-violet-500/25 border-violet-500/40' },
        { w: '30%', label: 'Converted', color: 'bg-violet-500/40 border-violet-500/60' },
      ].map((step, i) => (
        <div key={i} className="flex items-center gap-2" style={{ width: step.w }}>
          <div className={`flex-1 h-8 rounded-md border ${step.color} flex items-center justify-center`}>
            <span className="text-[9px] font-mono text-violet-300/60 uppercase tracking-wider">{step.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function WorkflowIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <svg viewBox="0 0 200 120" className="w-full">
        {/* Flow arrows */}
        <path d="M 45 30 L 80 30" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrow)" />
        <path d="M 120 30 L 155 30" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M 100 45 L 100 70" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M 45 90 L 80 90" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M 120 90 L 155 90" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
        {/* Nodes */}
        {[
          { x: 25, y: 20, w: 40, label: 'Trigger' },
          { x: 80, y: 20, w: 40, label: 'Process' },
          { x: 140, y: 20, w: 40, label: 'Validate' },
          { x: 80, y: 70, w: 40, label: 'Route' },
          { x: 25, y: 80, w: 40, label: 'Queue' },
          { x: 140, y: 80, w: 40, label: 'Complete' },
        ].map((node, i) => (
          <g key={i}>
            <rect x={node.x} y={node.y} width={node.w} height={20} rx="4" fill={i === 5 ? 'rgba(251,191,36,0.15)' : 'rgba(255,255,255,0.05)'} stroke={i === 5 ? 'rgba(251,191,36,0.4)' : 'rgba(255,255,255,0.1)'} strokeWidth="1" />
            <text x={node.x + node.w / 2} y={node.y + 13} textAnchor="middle" fontSize="7" fill={i === 5 ? 'rgba(251,191,36,0.7)' : 'rgba(255,255,255,0.3)'} fontFamily="monospace">{node.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function AnalyticsIllustration() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-6">
      {/* Tracking events */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse" />
        <span className="text-[9px] font-mono text-cyan-400/50 uppercase">Live Tracking</span>
      </div>
      {/* Data streams */}
      {[
        { name: 'GA4', val: '97%', color: 'cyan' },
        { name: 'Meta Pixel', val: 'Active', color: 'blue' },
        { name: 'Server-Side', val: 'Active', color: 'emerald' },
      ].map((stream, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded border border-${stream.color}-500/20 bg-${stream.color}-500/10 flex items-center justify-center`}>
            <div className={`w-2 h-2 rounded-full bg-${stream.color}-400/60`} />
          </div>
          <div className="flex-1">
            <div className="h-1.5 w-16 rounded bg-white/15 mb-1" />
            <div className={`h-1 rounded`} style={{ width: '80%', backgroundColor: `rgba(34,211,238,${0.1 + i * 0.05})` }} />
          </div>
          <span className="text-[9px] font-mono text-cyan-400/50">{stream.val}</span>
        </div>
      ))}
    </div>
  );
}

function AuditIllustration() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[9px] font-mono text-orange-400/60 uppercase tracking-wider">Audit Score</span>
      </div>
      {/* Score bars */}
      {[
        { name: 'Technical SEO', score: 85, color: 'rgba(251,146,60,' },
        { name: 'Performance', score: 72, color: 'rgba(251,146,60,' },
        { name: 'Content', score: 90, color: 'rgba(251,146,60,' },
        { name: 'Paid Channels', score: 45, color: 'rgba(251,146,60,' },
        { name: 'Analytics', score: 61, color: 'rgba(251,146,60,' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-[8px] font-mono text-white/30">{item.name}</span>
            <span className="text-[8px] font-mono text-orange-400/50">{item.score}%</span>
          </div>
          <div className="h-1.5 w-full rounded bg-white/5 overflow-hidden">
            <div
              className="h-full rounded"
              style={{
                width: `${item.score}%`,
                backgroundColor: item.score >= 80 ? 'rgba(52,211,153,0.5)' : item.score >= 60 ? 'rgba(251,146,60,0.4)' : 'rgba(239,68,68,0.4)'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ReportingIllustration() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-6">
      {/* Mini KPIs */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { val: '22%', label: 'ROAS ↑' },
          { val: '£47k', label: 'Realloc.' },
          { val: '97%', label: 'Accuracy' },
        ].map((kpi, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5 py-2 rounded border border-white/10 bg-white/5">
            <span className="text-sm font-black font-mono text-indigo-400/70">{kpi.val}</span>
            <span className="text-[7px] font-mono text-white/25 uppercase">{kpi.label}</span>
          </div>
        ))}
      </div>
      {/* Chart area */}
      <div className="flex-1 flex items-end gap-1">
        {[20, 35, 30, 50, 45, 60, 55, 70, 65, 80, 75, 85].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full">
            <div
              className="rounded-t-sm bg-indigo-500/20 border-t border-indigo-500/30"
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Main lookup: slug + index -> illustration component
function getIllustration(slug: string, idx: number) {
  const key = `${slug}-${idx}`;
  const map: Record<string, React.ReactNode> = {
    'brand-identity-content-creation-1': <ContentCalendarIllustration />,
    'brand-identity-content-creation-2': <VideoProductionIllustration />,
    'digital-presence-paid-growth-management-0': <SocialMediaIllustration />,
    'digital-presence-paid-growth-management-1': <PaidAdsIllustration />,
    'digital-presence-paid-growth-management-2': <LinkedInIllustration />,
    'ai-automation-sme-0': <WhatsAppIllustration />,
    'ai-automation-sme-1': <LeadNurtureIllustration />,
    'ai-automation-sme-2': <WorkflowIllustration />,
    'strategic-analytics-audits-0': <AnalyticsIllustration />,
    'strategic-analytics-audits-1': <AuditIllustration />,
    'strategic-analytics-audits-2': <ReportingIllustration />,
  };
  return map[key] || null;
}

export default function CapabilityVisual({ slug, index }: { slug: string; index: number }) {
  const images = IMAGE_MAP[slug];
  const imagePath = images?.[index];

  // If we have a real image, render it
  if (imagePath) {
    return (
      <div className="flex-1 w-full aspect-video rounded-xl overflow-hidden relative shadow-inner border border-[var(--border-subtle)]">
        <Image
          src={imagePath}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
      </div>
    );
  }

  // Otherwise render a CSS illustration
  const illustrations = ILLUSTRATION_MAP[slug];
  const config = illustrations?.[index];
  const illustration = getIllustration(slug, index);

  return (
    <div className={`flex-1 w-full aspect-video rounded-xl bg-gradient-to-br ${config?.gradient || 'from-gray-900/30 to-gray-800/20'} border border-[var(--border-subtle)] relative overflow-hidden shadow-inner`}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      {/* Illustration content */}
      <div className="relative z-10 w-full h-full">
        {illustration}
      </div>
    </div>
  );
}
