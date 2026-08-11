'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileStickyBar() {
  const pathname = usePathname();

  // Hide on contact page to avoid overlap
  if (pathname === '/contact') return null;

  const waNumber = '254711404755';
  const defaultMsg = encodeURIComponent('Hello Goldfish Marketing! I am interested in a Smart Growth Audit for my business.');
  const waUrl = `https://wa.me/${waNumber}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[var(--bg-surface)]/95 backdrop-blur-md border-t border-[var(--border-subtle)] p-3 shadow-2xl transition-all duration-300">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors duration-200 shadow-md"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2c-5.514 0-9.998 4.486-9.998 10.001 0 1.956.564 3.78 1.54 5.337l-1.573 5.761 5.908-1.549c1.492.839 3.21 1.302 5.033 1.302 5.516 0 10.001-4.485 10.001-10.001 0-5.515-4.485-10.001-10.012-10.001zm5.758 14.175c-.244.688-1.428 1.314-1.968 1.391-.497.07-1.144.1-3.326-.803-2.793-1.157-4.577-4.004-4.717-4.193-.139-.188-1.135-1.512-1.135-2.883 0-1.371.717-2.046.974-2.327.257-.282.559-.352.747-.352.188 0 .376.002.535.01.17.008.399-.064.625.478.234.563.799 1.947.869 2.088.07.141.117.305.023.493-.093.188-.141.305-.281.47-.14.165-.295.368-.422.493-.14.136-.286.286-.123.567.164.281.728 1.202 1.562 1.944 1.073.955 1.979 1.25 2.26 1.39.281.141.445.117.61-.07.164-.188.703-.82.891-1.101.188-.282.375-.235.633-.14.258.094 1.64.773 1.921.913.281.141.469.211.539.328.07.117.07.677-.174 1.365z"/>
          </svg>
          <span>WhatsApp Us</span>
        </a>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[var(--accent-gold)] hover:brightness-110 text-black font-bold text-xs transition-all duration-200 shadow-md"
        >
          <span>Free Audit</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
