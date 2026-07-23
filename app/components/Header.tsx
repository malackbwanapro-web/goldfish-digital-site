'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/portfolio' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-full border-2 border-[var(--accent-gold)] flex items-center justify-center bg-[var(--bg-surface)] overflow-hidden shadow-sm">
            <span className="text-[var(--accent-gold)] font-black text-lg tracking-tighter">G</span>
          </div>
          <span className="font-extrabold text-lg tracking-wider text-[var(--text-core)] uppercase group-hover:text-[var(--accent-gold)] transition-colors duration-200">
            Goldfish Digital
          </span>
        </Link>

        {/* Center Links (Desktop - 1024px and above) */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`link-underline font-medium text-[15px] ${
                pathname === link.href ? 'text-[var(--accent-gold)]' : 'text-[var(--text-core)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
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
            Book a Free Audit
          </Link>
        </div>

        {/* Hamburger / Toggle Controls (Mobile - Below 1024px) */}
        <div className="flex lg:hidden items-center gap-4">
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-50 bg-[var(--bg-surface)] rounded-full border border-[var(--border-subtle)]"
            aria-label="Toggle navigation menu"
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

      {/* Mobile Menu Drawer (Below 1024px) */}
      <div
        className={`fixed inset-0 top-20 bg-[var(--overlay-scrim)] backdrop-blur-md z-40 transition-all duration-300 lg:hidden ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-start pt-16 gap-8 h-full px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-[var(--text-core)] tracking-wide hover:text-[var(--accent-gold)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="w-full max-w-xs h-px bg-[var(--border-subtle)] my-4" />
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full max-w-xs text-center text-sm shadow-md"
          >
            Book a Free Audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
