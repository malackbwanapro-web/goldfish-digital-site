'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Default to light
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const navLinks = [
    { label: 'Services', href: '/services', desc: 'Web Ecosystems, SEO/GEO & AI Automation' },
    { label: 'Work', href: '/portfolio', desc: 'Case studies & empirical client results' },
    { label: 'Insights', href: '/insights', desc: 'Strategic briefings & technical deep dives' },
    { label: 'About', href: '/about', desc: 'Our story, founder & core values' },
    { label: 'Contact', href: '/contact', desc: 'Book a Smart Growth Audit or Strategy Call' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-[var(--bg-primary)] border-b border-[var(--border-accent)]/30 shadow-lg'
          : 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between relative z-50">
        {/* Brand Logo */}
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-full border-2 border-[var(--accent-gold)] flex items-center justify-center bg-[var(--bg-surface)] overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
            <span className="text-[var(--accent-gold)] font-black text-lg tracking-tighter">G</span>
          </div>
          <span className="font-extrabold text-lg tracking-wider text-[var(--text-core)] uppercase group-hover:text-[var(--accent-gold)] transition-colors duration-200">
            Goldfish Marketing
          </span>
        </Link>

        {/* Center Links (Desktop - 1024px and above) */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`link-underline font-medium text-[15px] flex items-center gap-1.5 ${
                  isActive ? 'text-[var(--accent-gold)] font-semibold' : 'text-[var(--text-core)]'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] animate-pulse" />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Switcher (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--accent-gold)] transition-colors duration-200 bg-[var(--bg-surface)] text-[var(--text-core)]"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            )}
          </button>

          <Link href="/contact" className="btn-primary text-xs py-2.5 px-6 shadow-sm">
            Request an Audit
          </Link>
        </div>

        {/* Hamburger / Toggle Controls (Mobile - Below 1024px) */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center bg-[var(--bg-surface)] text-[var(--text-core)]"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none bg-[var(--bg-surface)] rounded-full border border-[var(--border-subtle)] active:scale-95 transition-transform"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span
              className={`w-5 h-0.5 bg-[var(--text-core)] transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[var(--text-core)] transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[var(--text-core)] transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Opaque Solid Surface Container) */}
      <div
        className={`fixed inset-x-0 top-20 bottom-0 bg-[var(--bg-primary)] z-40 transition-all duration-300 ease-in-out lg:hidden flex flex-col justify-between overflow-y-auto px-6 py-8 border-t border-[var(--border-subtle)] ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-4 max-w-md mx-auto w-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`p-4 rounded-xl border transition-all duration-200 flex flex-col gap-1 ${
                  isActive
                    ? 'bg-[var(--bg-surface)] border-[var(--accent-gold)] shadow-sm'
                    : 'bg-[var(--bg-surface)]/60 border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[var(--text-core)] tracking-wide flex items-center gap-2">
                    {isActive && <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />}
                    {link.label}
                  </span>
                  <svg className="w-5 h-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-xs text-[var(--text-muted)] font-light">{link.desc}</span>
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full text-center text-sm shadow-md py-4 mt-2"
          >
            Request a Free Audit →
          </Link>
        </nav>

        {/* Mobile Drawer Footer Contacts */}
        <div className="max-w-md mx-auto w-full pt-6 mt-6 border-t border-[var(--border-subtle)] text-center space-y-2">
          <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
            Diani Bazaar, Beach Rd, Diani, Kenya
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono">
            <a href={`tel:+${SITE_CONFIG.WHATSAPP_NUMBER}`} className="text-[var(--accent-gold)] hover:underline">
              📞 {SITE_CONFIG.PHONE_DISPLAY}
            </a>
            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
