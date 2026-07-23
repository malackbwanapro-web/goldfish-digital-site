'use client'

import { useState, useEffect } from 'react'

/* ─── Theme Toggle ─────────────────────────────── */
function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <button
      id="theme-toggle"
      onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
      className="btn-outline"
      style={{ minWidth: '160px' }}
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  )
}

/* ─── Section Header ───────────────────────────── */
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <p className="text-eyebrow">{label}</p>
      <div className="divider" />
      <h2 className="text-h2">{title}</h2>
    </div>
  )
}

/* ─── Colour Swatch ────────────────────────────── */
function Swatch({
  hex,
  name,
  usage,
  textDark = false,
}: {
  hex: string
  name: string
  usage: string
  textDark?: boolean
}) {
  return (
    <div
      className="card-brand"
      style={{ overflow: 'hidden', flex: '1 1 200px', minWidth: '180px', maxWidth: '280px' }}
    >
      <div
        style={{
          background: hex,
          height: '120px',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '12px',
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: textDark ? '#3A2F26' : '#FFFFFF',
            opacity: 0.85,
          }}
        >
          {hex}
        </span>
      </div>
      <div style={{ padding: '16px 20px' }}>
        <p className="text-h3" style={{ fontSize: '16px', marginBottom: '4px' }}>{name}</p>
        <p className="text-caption">{usage}</p>
      </div>
    </div>
  )
}

/* ─── Button Preview Row ───────────────────────── */
function ButtonRow() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
      <a id="btn-primary-default" href="#" className="btn-primary" onClick={e => e.preventDefault()}>
        Get Started
      </a>
      <a id="btn-secondary-default" href="#" className="btn-secondary" onClick={e => e.preventDefault()}>
        Learn More
      </a>
      <a id="btn-outline-default" href="#" className="btn-outline" onClick={e => e.preventDefault()}>
        View Portfolio
      </a>
    </div>
  )
}

/* ─── Animation Preview Card ───────────────────── */
function AnimationCard({
  id,
  title,
  description,
  animClass,
}: {
  id: string
  title: string
  description: string
  animClass: string
}) {
  return (
    <div
      id={id}
      className={`card-brand ${animClass}`}
      style={{ padding: '32px', flex: '1 1 240px', minWidth: '220px' }}
    >
      <p className="text-eyebrow" style={{ marginBottom: '8px' }}>Animation</p>
      <h3 className="text-h3" style={{ marginBottom: '8px' }}>{title}</h3>
      <p className="text-caption">{description}</p>
    </div>
  )
}

/* ─── Spacing Preview ──────────────────────────── */
function SpacingRow({ label, size, px }: { label: string; size: number; px: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '16px' }}>
      <div
        style={{
          width: `${size}px`,
          height: '16px',
          background: 'var(--accent-gold)',
          borderRadius: '4px',
          flexShrink: 0,
        }}
      />
      <div>
        <p className="text-body" style={{ fontWeight: 600 }}>{label}</p>
        <p className="text-caption">{px}</p>
      </div>
    </div>
  )
}

/* ─── Main Style Guide Page ────────────────────── */
export default function StyleGuidePage() {
  return (
    <>
      {/* ──────────── HEADER BAR ──────────── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
          backdropFilter: 'blur(12px)',
          padding: '16px 0',
        }}
      >
        <div
          className="container-brand"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div>
            <p className="text-eyebrow" style={{ marginBottom: '2px' }}>Phase 0 Output</p>
            <h1
              style={{
                fontFamily: 'Poppins',
                fontWeight: 800,
                fontSize: '20px',
                letterSpacing: '-0.02em',
                color: 'var(--text-core)',
              }}
            >
              Goldfish Marketing – Brand Style Guide
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main>

        {/* ──────────── 1. COLOUR SYSTEM ──────────── */}
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container-brand">
            <SectionHeader label="01 — Colour System" title="Palette & UI Tokens" />

            {/* Light Mode */}
            <div style={{ marginBottom: '48px' }}>
              <h3
                className="text-h3"
                style={{ fontSize: '18px', marginBottom: '24px', color: 'var(--text-muted)' }}
              >
                ☀️ Light Mode
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <Swatch
                  hex="#F6E0CA"
                  name="Warm Peach/Cream"
                  usage="Primary background canvas"
                  textDark
                />
                <Swatch
                  hex="#FFFFFF"
                  name="Pure White"
                  usage="Cards, surfaces, nav bars"
                  textDark
                />
                <Swatch
                  hex="#3A2F26"
                  name="Deep Charcoal Espresso"
                  usage="Primary text & headings"
                />
                <Swatch
                  hex="#D4AF37"
                  name="Lustrous Gold"
                  usage="CTAs, accents, highlights"
                  textDark
                />
              </div>
            </div>

            {/* Dark Mode */}
            <div>
              <h3
                className="text-h3"
                style={{ fontSize: '18px', marginBottom: '24px', color: 'var(--text-muted)' }}
              >
                🌙 Dark Mode
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <Swatch
                  hex="#121212"
                  name="True Dark Slate"
                  usage="Primary background canvas"
                />
                <Swatch
                  hex="#1E1E1E"
                  name="Elevated Charcoal"
                  usage="Cards, surfaces, nav containers"
                />
                <Swatch
                  hex="#E0D7D0"
                  name="Soft Cream White"
                  usage="Body copy & headers"
                  textDark
                />
                <Swatch
                  hex="#D4AF37"
                  name="Lustrous Gold"
                  usage="CTAs, borders, premium accents"
                  textDark
                />
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 2. TYPOGRAPHY ──────────── */}
        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-brand">
            <SectionHeader label="02 — Typography" title="Type Scale & System" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {/* Hero */}
              <div className="card-brand" style={{ padding: '48px 40px' }}>
                <p className="text-eyebrow" style={{ marginBottom: '12px' }}>
                  Hero Display — 120px Desktop / 52px Mobile — Line-height: 1.1
                </p>
                <p className="text-hero" style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}>
                  Local<br />
                  <span style={{ color: 'var(--accent-gold)' }}>Experts.</span>
                </p>
              </div>

              {/* H1 */}
              <div className="card-brand" style={{ padding: '40px' }}>
                <p className="text-eyebrow" style={{ marginBottom: '12px' }}>
                  H1 — 48px / 36px Mobile — Weight: 800 — Line-height: 1.2
                </p>
                <h1 className="text-h1">Global Standards.</h1>
              </div>

              {/* H2 */}
              <div className="card-brand" style={{ padding: '40px' }}>
                <p className="text-eyebrow" style={{ marginBottom: '12px' }}>
                  H2 — 36px / 28px Mobile — Weight: 700 — Line-height: 1.3
                </p>
                <h2 className="text-h2">Premium Web & AI Solutions</h2>
              </div>

              {/* H3 */}
              <div className="card-brand" style={{ padding: '40px' }}>
                <p className="text-eyebrow" style={{ marginBottom: '12px' }}>
                  H3 — 24px / 20px Mobile — Weight: 600 — Line-height: 1.4
                </p>
                <h3 className="text-h3">Smart Growth Audits & Automation</h3>
              </div>

              {/* Body */}
              <div className="card-brand" style={{ padding: '40px' }}>
                <p className="text-eyebrow" style={{ marginBottom: '12px' }}>
                  Body Large — 18px — Line-height: 1.6 — Letter-spacing: 0.2px
                </p>
                <p className="text-body-lg" style={{ maxWidth: '680px' }}>
                  We combine deep cultural insight with high-level marketing strategy, advanced technical
                  optimization (SEO, GEO, and CRO), and strict adherence to modern web benchmarks.
                </p>
              </div>

              {/* Body Regular */}
              <div className="card-brand" style={{ padding: '40px' }}>
                <p className="text-eyebrow" style={{ marginBottom: '12px' }}>
                  Body Regular — 16px — Line-height: 1.6 — Letter-spacing: 0.2px
                </p>
                <p className="text-body" style={{ maxWidth: '680px', color: 'var(--text-muted)' }}>
                  Every ecosystem we build features comprehensive accessibility audits and guarantees
                  strict compliance with the Kenyan Data Protection Act, GDPR, and CCPA.
                </p>
              </div>

              {/* Caption */}
              <div className="card-brand" style={{ padding: '40px' }}>
                <p className="text-eyebrow" style={{ marginBottom: '12px' }}>
                  UI Caption — 14px — Line-height: 1.4 — Letter-spacing: 0.4px
                </p>
                <p className="text-caption">
                  Diani Bazaar, Beach Rd, Diani, Kwale County, Kenya — Open daily 8AM–6PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 3. SPACING ──────────── */}
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container-brand">
            <SectionHeader label="03 — Spacing" title="Layout & Rhythm Scale" />
            <div className="card-brand" style={{ padding: '48px 40px' }}>
              <SpacingRow label="Section Padding (Desktop)" size={140} px="140px top & bottom" />
              <SpacingRow label="Section Padding (Mobile)" size={80} px="80px top & bottom" />
              <SpacingRow label="Card Internal Padding" size={48} px="48px" />
              <SpacingRow label="Grid Gap" size={32} px="32px" />
              <SpacingRow label="Component Margin" size={24} px="24px" />
              <SpacingRow label="Inline Spacing" size={16} px="16px" />
              <SpacingRow label="Micro Spacing" size={8} px="8px" />
            </div>
          </div>
        </section>

        {/* ──────────── 4. ANIMATION PRESETS ──────────── */}
        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-brand">
            <SectionHeader label="04 — Animation" title="Motion Presets & Easing" />

            <div
              className="card-brand"
              style={{ padding: '40px', marginBottom: '32px' }}
            >
              <p className="text-eyebrow" style={{ marginBottom: '12px' }}>Easing Curve</p>
              <h3 className="text-h3" style={{ marginBottom: '8px', fontFamily: 'monospace', fontSize: '20px' }}>
                cubic-bezier(0.16, 1, 0.3, 1)
              </h3>
              <p className="text-body" style={{ color: 'var(--text-muted)' }}>
                Applied to all entrance animations, hover transitions, and page transitions.
                Produces a fast-in, smooth-out &ldquo;spring&rdquo; feel — premium and non-aggressive.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              <AnimationCard
                id="anim-fade-up"
                title="Fade + Rise"
                description="Opacity 0→1, translateY 30px→0. Duration: 0.6s. Used on all section entries."
                animClass=""
              />
              <AnimationCard
                id="anim-stagger"
                title="Stagger Children"
                description="Children animate in sequence with 0.08s delay between each. Ideal for card grids."
                animClass=""
              />
              <AnimationCard
                id="anim-scale-hover"
                title="Scale on Hover"
                description="scale(1) → scale(1.02) on hover. Smooth lift without layout shift. Used on cards."
                animClass=""
              />
              <AnimationCard
                id="anim-underline"
                title="Smooth Underline"
                description="Width 0%→100% underline on link hover. Uses accent gold colour. Duration: 0.4s."
                animClass=""
              />
            </div>

            {/* Live hover demo */}
            <div style={{ marginTop: '48px' }}>
              <p className="text-eyebrow" style={{ marginBottom: '24px' }}>Live Hover Demo</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                <div
                  id="hover-card-demo"
                  className="card-brand"
                  style={{ padding: '32px 40px', cursor: 'pointer', flex: '1 1 280px' }}
                >
                  <p className="text-h3" style={{ marginBottom: '8px' }}>Hover Over Me</p>
                  <p className="text-caption">Lift + shadow + border glow</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: '1 1 280px', justifyContent: 'center' }}>
                  <a id="link-demo-1" href="#" className="link-underline text-body" onClick={e => e.preventDefault()}>
                    Smart Growth Audits →
                  </a>
                  <a id="link-demo-2" href="#" className="link-underline text-body" onClick={e => e.preventDefault()}>
                    AI Systems Integration →
                  </a>
                  <a id="link-demo-3" href="#" className="link-underline text-body" onClick={e => e.preventDefault()}>
                    Premium Web Builds →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 5. BUTTONS ──────────── */}
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container-brand">
            <SectionHeader label="05 — Buttons" title="CTA Variants & States" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {/* Default */}
              <div className="card-brand" style={{ padding: '40px' }}>
                <p className="text-eyebrow" style={{ marginBottom: '20px' }}>Default State</p>
                <ButtonRow />
              </div>

              {/* Sizes */}
              <div className="card-brand" style={{ padding: '40px' }}>
                <p className="text-eyebrow" style={{ marginBottom: '20px' }}>With Icons</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  <a id="btn-icon-1" href="#" className="btn-primary" onClick={e => e.preventDefault()}>
                    ✦ Book a Smart Audit
                  </a>
                  <a id="btn-icon-2" href="#" className="btn-outline" onClick={e => e.preventDefault()}>
                    ↗ View Our Work
                  </a>
                </div>
              </div>

              {/* States info */}
              <div className="card-brand" style={{ padding: '40px' }}>
                <p className="text-eyebrow" style={{ marginBottom: '16px' }}>Interaction States</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        flexShrink: 0,
                      }}
                    />
                    <p className="text-body">
                      <strong>Default</strong> — Gold fill, espresso text
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#D4AF37',
                        flexShrink: 0,
                      }}
                    />
                    <p className="text-body">
                      <strong>Hover</strong> — Darker gold (#B8962D), translateY(-2px), gold shadow glow
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#3A2F26',
                        flexShrink: 0,
                      }}
                    />
                    <p className="text-body">
                      <strong>Active/Click</strong> — translateY(0), tighter shadow
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#9B928A',
                        flexShrink: 0,
                      }}
                    />
                    <p className="text-body">
                      <strong>Disabled</strong> — 40% opacity, no pointer events
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 6. LOGO PREVIEW ──────────── */}
        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-brand">
            <SectionHeader label="06 — Logo" title="Brand Mark & Theme Swap" />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
              {/* Light context */}
              <div
                className="card-brand"
                style={{
                  flex: '1 1 280px',
                  padding: '48px',
                  background: '#F6E0CA',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <p
                  className="text-eyebrow"
                  style={{ color: '#3A2F26', opacity: 0.6, alignSelf: 'flex-start' }}
                >
                  Light Background
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-light.png"
                  alt="Goldfish Marketing logo – light version"
                  style={{ width: '140px', height: '140px', objectFit: 'contain', borderRadius: '50%' }}
                />
                <p className="text-caption" style={{ color: '#3A2F26', opacity: 0.6 }}>
                  Warm Peach background variant
                </p>
              </div>

              {/* Dark context */}
              <div
                className="card-brand"
                style={{
                  flex: '1 1 280px',
                  padding: '48px',
                  background: '#121212',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <p
                  className="text-eyebrow"
                  style={{ color: '#E0D7D0', opacity: 0.6, alignSelf: 'flex-start' }}
                >
                  Dark Background
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-dark.png"
                  alt="Goldfish Marketing logo – dark version"
                  style={{ width: '140px', height: '140px', objectFit: 'contain', borderRadius: '50%' }}
                />
                <p className="text-caption" style={{ color: '#E0D7D0', opacity: 0.6 }}>
                  Dark Slate background variant
                </p>
              </div>
            </div>

            <div
              className="card-brand"
              style={{ padding: '32px 40px', marginTop: '32px' }}
            >
              <p className="text-eyebrow" style={{ marginBottom: '12px' }}>Logo Swap Rule</p>
              <p className="text-body" style={{ color: 'var(--text-muted)' }}>
                When <code style={{ background: 'var(--bg-primary)', padding: '2px 8px', borderRadius: '4px', fontSize: '13px' }}>data-theme</code> toggles
                from <strong>light → dark</strong>, the navbar swaps from <code style={{ background: 'var(--bg-primary)', padding: '2px 8px', borderRadius: '4px', fontSize: '13px' }}>/logo-light.png</code> to{' '}
                <code style={{ background: 'var(--bg-primary)', padding: '2px 8px', borderRadius: '4px', fontSize: '13px' }}>/logo-dark.png</code> automatically
                via the CSS custom property <code style={{ background: 'var(--bg-primary)', padding: '2px 8px', borderRadius: '4px', fontSize: '13px' }}>--logo-asset</code>.
              </p>
            </div>
          </div>
        </section>

        {/* ──────────── FOOTER ──────────── */}
        <footer
          style={{
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '40px 0',
          }}
        >
          <div
            className="container-brand"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}
          >
            <p className="text-caption">
              Goldfish Marketing – Phase 0 Style Guide · Diani, Kwale County, Kenya
            </p>
            <p className="text-caption">
              <span style={{ color: 'var(--accent-gold)' }}>✦</span> Local Experts. Global Standards.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
