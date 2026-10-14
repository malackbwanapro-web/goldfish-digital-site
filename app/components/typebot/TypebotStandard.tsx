'use client';

import { useEffect, useRef, useState } from 'react';
import { TYPEBOT_CONFIG } from '@/lib/typebot';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'typebot-standard': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        typebot?: string;
        apiHost?: string;
        class?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

interface TypebotStandardProps {
  typebotId?: string;
  apiHost?: string;
  height?: string;
  className?: string;
}

/**
 * TypebotStandard: Inline Conversational AI Container
 * Clean Code: Embedded Web Component with graceful loading skeletons and zero layout shift.
 */
export default function TypebotStandard({
  typebotId = TYPEBOT_CONFIG.BOT_ID,
  apiHost = TYPEBOT_CONFIG.API_HOST,
  height = '620px',
  className = '',
}: TypebotStandardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${TYPEBOT_CONFIG.CDN_URL}"]`
    );

    const onScriptLoaded = () => {
      setIsLoaded(true);
      if (containerRef.current) {
        const standardEl = containerRef.current.querySelector('typebot-standard');
        if (standardEl) {
          Object.assign(standardEl, {
            typebot: typebotId,
            apiHost: apiHost,
          });
        }
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.type = 'module';
      script.src = TYPEBOT_CONFIG.CDN_URL;
      script.async = true;
      script.onload = onScriptLoaded;
      script.onerror = () => {
        setLoadError(true);
      };
      document.head.appendChild(script);
    } else {
      onScriptLoaded();
    }
  }, [typebotId, apiHost]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[#0D0D0D] shadow-2xl ${className}`}
      style={{ height }}
    >
      {!isLoaded && !loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#0D0D0D] z-10">
          <div className="w-12 h-12 rounded-full border-2 border-[var(--accent-gold)] border-t-transparent animate-spin mb-4" />
          <h4 className="text-sm font-mono uppercase tracking-wider text-[var(--accent-gold)] font-bold mb-1">
            Connecting to Goldfish Growth Concierge
          </h4>
          <p className="text-xs text-neutral-400 max-w-sm">
            Initializing conversational assistant &amp; qualifying your project scope...
          </p>
        </div>
      )}

      {loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#0D0D0D] z-10 text-white">
          <span className="text-3xl mb-2">⚡</span>
          <h4 className="text-sm font-bold text-[var(--accent-gold)] mb-1">
            Offline Mode / Interactive Assistant
          </h4>
          <p className="text-xs text-neutral-400 max-w-sm mb-4">
            Could not connect to external viewer. Use the interactive scope estimator to prepare your project parameters.
          </p>
        </div>
      )}

      <typebot-standard
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
}
