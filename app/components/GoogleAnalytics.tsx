'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { trackContactEvent } from '@/lib/contact-analytics';

interface GoogleAnalyticsProps {
  gaId: string;
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  useEffect(() => {
    if (!gaId) return;
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!target) return;
      const url = new URL(target.getAttribute('href') || '', window.location.origin);
      const channel = url.hostname === 'wa.me' ? 'whatsapp' : url.protocol === 'tel:' ? 'phone' : url.protocol === 'mailto:' ? 'email' : '';
      if (channel) trackContactEvent('contact_channel_click', channel);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [gaId]);
  if (!/^G-[A-Z0-9]+$/.test(gaId)) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              page_location: window.location.origin + window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
