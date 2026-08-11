import Link from 'next/link';

interface FooterCloserProps {
  closerTitle?: string;
  closerText?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function FooterCloser({
  closerTitle = "Ready to Build Something That Actually Works?",
  closerText = "Whether you need a full digital ecosystem, a visibility strategy, or an AI automation system, we'll scope your project in a free 30-minute strategy call.",
  primaryBtnText = "Book a Free Strategy Call",
  primaryBtnHref = "/contact",
  secondaryBtnText = "View Our Services",
  secondaryBtnHref = "/services"
}: FooterCloserProps) {
  return (
    <footer className="w-full bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] relative overflow-hidden">
      {/* Subtle background abstract shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent-gold)]/5 rounded-full filter blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-gold)]/5 rounded-full filter blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* Terminal Closer Block */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-accent)] bg-[var(--bg-primary)]/50 text-[var(--accent-gold)] text-[11px] font-mono tracking-widest uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />
          System Initialization Terminal
        </div>

        <h2 className="text-h2 font-black tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
          {closerTitle}
        </h2>

        <p className="text-body-lg text-[var(--text-muted)] max-w-xl mx-auto mb-10 leading-relaxed font-light">
          {closerText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryBtnHref} className="btn-primary w-full sm:w-auto shadow-md">
            {primaryBtnText}
          </Link>
          <Link href={secondaryBtnHref} className="btn-outline w-full sm:w-auto">
            {secondaryBtnText}
          </Link>
        </div>
      </div>

      {/* Corporate Info Footer */}
      <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]/20 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 text-decoration-none">
              <div className="w-8 h-8 rounded-full border border-[var(--accent-gold)] flex items-center justify-center bg-[var(--bg-surface)]">
                <span className="text-[var(--accent-gold)] font-bold text-sm">G</span>
              </div>
              <span className="font-extrabold text-sm tracking-widest text-[var(--text-core)] uppercase">
                Goldfish Digital
              </span>
            </Link>
            <p className="text-caption leading-relaxed mt-2">
              A premium digital growth agency — we blend elite visual design, AI automation, and advanced visibility engineering to build brands that scale.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/goldfishmarketingKE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Goldfish Digital on Facebook"
                className="w-9 h-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/goldfishmarketingke/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Goldfish Digital on Instagram"
                className="w-9 h-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@goldfishmarketingke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Goldfish Digital on TikTok"
                className="w-9 h-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">Navigation</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <Link href="/" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  Work / Portfolio
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  About Malack &amp; Goldfish
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Slugs */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">Capabilities</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <Link href="/services/smart-web-app-ecosystems" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  Smart Web & App Ecosystems
                </Link>
              </li>
              <li>
                <Link href="/services/advanced-visibility-engineering" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  Advanced Visibility Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/brand-identity-content-creation" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  Brand Identity & Content
                </Link>
              </li>
              <li>
                <Link href="/services/digital-presence-paid-growth-management" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  Digital Presence & Paid Growth
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation-sme" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  AI Automation for SMEs
                </Link>
              </li>
              <li>
                <Link href="/services/strategic-analytics-audits" className="text-caption hover:text-[var(--accent-gold)] transition-colors duration-200 text-decoration-none">
                  Strategic Analytics & Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">Compliance &amp; Legal</h4>
            <div className="text-caption flex flex-col gap-2">
              <Link href="/privacy" className="hover:text-[var(--accent-gold)] transition-colors duration-200">
                Privacy Policy (KDPA &amp; GDPR)
              </Link>
              <Link href="/terms" className="hover:text-[var(--accent-gold)] transition-colors duration-200">
                Terms of Service
              </Link>
              <span className="text-xs text-[var(--accent-gold)] font-semibold mt-1">SLA Guarantee: 24h Form response</span>
              <div className="flex gap-2 text-xs text-[var(--text-muted)] mt-2">
                <span className="font-bold text-[var(--text-core)]">Coverage:</span>
                <Link href="/diani" className="hover:text-[var(--accent-gold)] underline">Diani</Link> &bull;
                <Link href="/mombasa" className="hover:text-[var(--accent-gold)] underline">Mombasa</Link> &bull;
                <Link href="/kenya" className="hover:text-[var(--accent-gold)] underline">Kenya</Link>
              </div>
            </div>
            <div className="text-caption flex flex-col gap-0.5 mt-2">
              <span className="font-semibold text-[var(--text-core)]">Direct Contact:</span>
              <a href="mailto:goldfishprojex@gmail.com" className="text-[var(--accent-gold)] hover:underline">
                goldfishprojex@gmail.com
              </a>
              <a href="tel:+254711404755" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)]">
                +254 711 404 755
              </a>
            </div>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption">
            &copy; {new Date().getFullYear()} Goldfish Marketing. All rights reserved.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-end">
            <span className="text-caption">Diani Bazaar, Beach Rd, Diani, Kwale County, Kenya</span>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/goldfishmarketing" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/goldfishmarketing" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
