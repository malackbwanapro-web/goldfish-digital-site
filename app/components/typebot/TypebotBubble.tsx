'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { TYPEBOT_CONFIG } from '@/lib/typebot';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { formatTypebotScopeMessage } from '@/lib/formatters';

declare global {
  interface Window {
    Typebot?: {
      initBubble: (props: Record<string, unknown>) => void;
      initStandard: (props: Record<string, unknown>) => void;
      open: () => void;
      close: () => void;
      toggle: () => void;
    };
  }
}

/**
 * TypebotBubble: Global Floating Conversational Concierge
 * Clean Code: Hybrid component that loads external Typebot when configured,
 * or provides an instant, zero-dependency native concierge when Typebot is not yet linked.
 */
export default function TypebotBubble() {
  const initializedRef = useRef(false);
  const isExternalConfigured = TYPEBOT_CONFIG.IS_CONFIGURED;

  // Native fallback state (active when no external Typebot ID is supplied)
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('hospitality');

  useEffect(() => {
    // If an external Typebot is configured, load the Typebot web component
    if (isExternalConfigured) {
      if (initializedRef.current) return;

      const timer = setTimeout(() => {
        let script = document.querySelector<HTMLScriptElement>(
          `script[src="${TYPEBOT_CONFIG.CDN_URL}"]`
        );

        const onScriptReady = () => {
          if (window.Typebot && !initializedRef.current) {
            try {
              window.Typebot.initBubble({
                typebot: TYPEBOT_CONFIG.BOT_ID,
                apiHost: TYPEBOT_CONFIG.API_HOST,
                theme: {
                  placement: 'left',
                  button: {
                    backgroundColor: TYPEBOT_CONFIG.THEME.button.backgroundColor,
                    iconColor: TYPEBOT_CONFIG.THEME.button.iconColor,
                    size: 'large',
                  },
                  previewMessage: {
                    backgroundColor:
                      TYPEBOT_CONFIG.THEME.previewMessage.backgroundColor,
                    textColor: TYPEBOT_CONFIG.THEME.previewMessage.textColor,
                    closeButtonBackgroundColor:
                      TYPEBOT_CONFIG.THEME.previewMessage.closeButtonBackgroundColor,
                    closeButtonIconColor:
                      TYPEBOT_CONFIG.THEME.previewMessage.closeButtonIconColor,
                  },
                  chatWindow: {
                    backgroundColor: '#0D0D0D',
                    maxWidth: '420px',
                    maxHeight: '620px',
                  },
                },
                previewMessage: {
                  message: TYPEBOT_CONFIG.PREVIEW.message,
                  autoShowDelay: TYPEBOT_CONFIG.PREVIEW.autoShowDelay,
                },
              });
              initializedRef.current = true;
            } catch {
              // Silently handle if host is offline
            }
          }
        };

        if (!script) {
          script = document.createElement('script');
          script.type = 'module';
          script.src = TYPEBOT_CONFIG.CDN_URL;
          script.async = true;
          script.onload = onScriptReady;
          document.head.appendChild(script);
        } else {
          onScriptReady();
        }
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      // Show native preview message after 5 seconds if modal is closed
      const previewTimer = setTimeout(() => {
        setShowPreview(true);
      }, TYPEBOT_CONFIG.PREVIEW.autoShowDelay);

      return () => clearTimeout(previewTimer);
    }
  }, [isExternalConfigured]);

  // If external Typebot is configured, let Typebot handle the bubble UI
  if (isExternalConfigured) {
    return (
      <>
        <style jsx global>{`
          typebot-bubble {
            z-index: 45 !important;
          }
          @media (max-width: 1023px) {
            typebot-bubble {
              bottom: 74px !important;
              left: 16px !important;
            }
          }
          @media (min-width: 1024px) {
            typebot-bubble {
              bottom: 28px !important;
              left: 28px !important;
            }
          }
        `}</style>
        <div data-testid="typebot-bubble-mount" />
      </>
    );
  }

  // Active industry archetype for native assistant
  const currentIndustry =
    TYPEBOT_CONFIG.ESTIMATOR_INDUSTRIES.find(
      (ind) => ind.id === selectedIndustryId
    ) || TYPEBOT_CONFIG.ESTIMATOR_INDUSTRIES[0];

  const handleWhatsAppHandoff = () => {
    const formatted = formatTypebotScopeMessage({
      industry: currentIndustry.label,
      scopeItems: currentIndustry.features.slice(0, 3),
      timeline: 'Standard (14–21 days)',
      notes: 'Initial enquiry from website floating growth concierge',
    });
    const url = buildWhatsAppUrl(formatted);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Native Goldfish Concierge Drawer (Fail-safe, 0 external dependencies)
  return (
    <div className="fixed bottom-[74px] left-4 lg:bottom-7 lg:left-7 z-40 font-sans">
      {/* ── PROACTIVE PREVIEW PROMPT ── */}
      {showPreview && !isOpen && (
        <div className="relative mb-3 max-w-[280px] p-3.5 rounded-2xl bg-[#141414] border border-[var(--border-subtle)] shadow-2xl text-xs text-white animate-fade-in flex items-start gap-2.5">
          <div className="text-base shrink-0">👋</div>
          <div className="flex-1">
            <p className="text-[11px] leading-relaxed font-light text-neutral-300">
              Planning a luxury villa, dining, or business website? Tap to get an estimate in 60s.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsOpen(true);
                setShowPreview(false);
              }}
              className="mt-2 text-[10px] font-mono text-[var(--accent-gold)] font-bold uppercase tracking-wider hover:underline"
            >
              Open Concierge →
            </button>
          </div>
          <button
            type="button"
            onClick={() => setShowPreview(false)}
            aria-label="Dismiss message"
            className="text-neutral-500 hover:text-white text-xs p-0.5"
          >
            ✕
          </button>
        </div>
      )}

      {/* ── CONVERSATIONAL CONCIERGE MODAL ── */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Goldfish Digital Concierge"
          className="mb-3 w-[320px] sm:w-[380px] rounded-2xl bg-[#0D0D0D] border border-[var(--border-subtle)] shadow-2xl overflow-hidden flex flex-col animate-scale-up"
          style={{ maxHeight: '560px' }}
        >
          {/* Header */}
          <div className="p-4 bg-[#141414] border-b border-[var(--border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[var(--accent-gold)] text-[#0D0D0D] font-black text-xs flex items-center justify-center">
                GF
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Goldfish Concierge</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </h4>
                <p className="text-[10px] font-mono text-neutral-400">
                  Instant Scope &amp; WhatsApp Handoff
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
              className="w-7 h-7 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center text-xs transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-4 overflow-y-auto space-y-4 text-xs">
            <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 leading-relaxed font-light">
              Jambo! 👋 What type of digital growth or platform are you planning for your business?
            </div>

            {/* Industry Archetype Selector */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--accent-gold)] font-bold">
                Select Your Industry:
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {TYPEBOT_CONFIG.ESTIMATOR_INDUSTRIES.map((ind) => {
                  const isSelected = selectedIndustryId === ind.id;
                  return (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setSelectedIndustryId(ind.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 text-white shadow-sm'
                          : 'border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span className="font-medium text-[11px] truncate">{ind.label}</span>
                      <span className="text-[10px] font-mono text-[var(--accent-gold)]">
                        {isSelected ? '●' : '○'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scope Summary Preview */}
            <div className="p-3 rounded-xl bg-[#141414] border border-neutral-800">
              <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1.5">
                Included Core Modules:
              </div>
              <ul className="space-y-1 text-[11px] text-neutral-300">
                {currentIndustry.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-emerald-400 text-xs font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Handoff CTA */}
            <button
              type="button"
              onClick={handleWhatsAppHandoff}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-[11px] uppercase tracking-wider font-bold shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>💬 Continue Scope on WhatsApp</span>
            </button>

            {/* Link to Full Estimator */}
            <div className="text-center pt-1 border-t border-neutral-800/80">
              <Link
                href="/contact?tab=estimator"
                onClick={() => setIsOpen(false)}
                className="text-[11px] font-mono text-[var(--accent-gold)] hover:underline inline-flex items-center gap-1"
              >
                <span>⚡ Open Full Modular Scope Matrix →</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── FLOATING TRIGGER BUTTON ── */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPreview(false);
        }}
        aria-label={isOpen ? 'Close assistant' : 'Open digital growth concierge'}
        className="w-14 h-14 rounded-full bg-[var(--accent-gold)] hover:brightness-110 active:scale-95 text-[#0D0D0D] shadow-2xl flex items-center justify-center transition-all duration-200"
      >
        {isOpen ? (
          <span className="text-xl font-bold">✕</span>
        ) : (
          <span className="text-2xl">⚡</span>
        )}
      </button>
    </div>
  );
}
