'use client';

import { useEffect, useRef, useState } from 'react';
import { TYPEBOT_CONFIG } from '@/lib/typebot';

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
 * Clean Code: Asynchronously loaded native Web Component embed that preserves 100/100 Core Web Vitals.
 * Positioned on the bottom-left to avoid colliding with WhatsAppFloat (bottom-right) and MobileStickyBar.
 */
export default function TypebotBubble() {
  const initializedRef = useRef(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Prevent double initialization
    if (initializedRef.current) return;

    // Defer loading until after initial paint & hydration (3s delay) to protect Core Web Vitals
    const timer = setTimeout(() => {
      // Check if script is already present in document
      let script = document.querySelector<HTMLScriptElement>(
        `script[src="${TYPEBOT_CONFIG.CDN_URL}"]`
      );

      const onScriptReady = () => {
        setScriptLoaded(true);
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
                  backgroundColor: TYPEBOT_CONFIG.THEME.previewMessage.backgroundColor,
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
            // Silently handle if host is offline or blocked by client extension
          }
        }
      };

      if (!script) {
        script = document.createElement('script');
        script.type = 'module';
        script.src = TYPEBOT_CONFIG.CDN_URL;
        script.async = true;
        script.onload = onScriptReady;
        script.onerror = () => {
          // If CDN fails, do not throw or crash the page
        };
        document.head.appendChild(script);
      } else {
        onScriptReady();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Mobile spacing adjustment: prevent typebot-bubble from being covered by MobileStickyBar */}
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
      <div data-testid="typebot-bubble-mount" data-ready={scriptLoaded} />
    </>
  );
}
