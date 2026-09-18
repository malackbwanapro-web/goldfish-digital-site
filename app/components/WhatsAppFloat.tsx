'use client';

import React, { useState, useEffect } from 'react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const waUrl = buildWhatsAppUrl(
    "Hi Goldfish Marketing! I came across your website and I'd like to learn more about your services."
  );

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Goldfish Marketing on WhatsApp"
      className={`fixed bottom-24 right-5 lg:bottom-8 lg:right-8 z-50 group hidden lg:flex items-center gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="hidden lg:flex items-center bg-[var(--bg-surface)] text-[var(--text-core)] text-xs font-semibold px-3 py-2 rounded-lg shadow-lg border border-[var(--border-subtle)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Chat with us on WhatsApp
      </span>
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />
        <div className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-colors duration-200 shadow-2xl flex items-center justify-center">
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M12.031 2c-5.514 0-9.998 4.486-9.998 10.001 0 1.956.564 3.78 1.54 5.337l-1.573 5.761 5.908-1.549c1.492.839 3.21 1.302 5.033 1.302 5.516 0 10.001-4.485 10.001-10.001 0-5.515-4.485-10.001-10.012-10.001zm5.758 14.175c-.244.688-1.428 1.314-1.968 1.391-.497.07-1.144.1-3.326-.803-2.793-1.157-4.577-4.004-4.717-4.193-.139-.188-1.135-1.512-1.135-2.883 0-1.371.717-2.046.974-2.327.257-.282.559-.352.747-.352.188 0 .376.002.535.01.17.008.399-.064.625.478.234.563.799 1.947.869 2.088.07.141.117.305.023.493-.093.188-.141.305-.281.47-.14.165-.295.368-.422.493-.14.136-.286.286-.123.567.164.281.728 1.202 1.562 1.944 1.073.955 1.979 1.25 2.26 1.39.281.141.445.117.61-.07.164-.188.703-.82.891-1.101.188-.282.375-.235.633-.14.258.094 1.64.773 1.921.913.281.141.469.211.539.328.07.117.07.677-.174 1.365z"/>
          </svg>
        </div>
      </div>
    </a>
  );
}
