'use client';

import { useState } from 'react';

// WhatsApp business number (no + or spaces)
const WA_NUMBER = '254711404755';

function sendToWhatsApp(message: string) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank');
}

export default function ContactClient() {
  // ── PATH A STATE ──────────────────────────────────────────
  const [fullName, setFullName]       = useState('');
  const [email, setEmail]             = useState('');
  const [phone, setPhone]             = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [spend, setSpend]             = useState('');
  const [painPoints, setPainPoints]   = useState('');
  const [submittedAudit, setSubmittedAudit] = useState(false);

  // ── PATH B STATE & TIME SLOTS ──────────────────────────────
  const [callName, setCallName]       = useState('');
  const [callPhone, setCallPhone]     = useState('');
  const [selectedDayLabel, setSelectedDayLabel] = useState<string>('Today');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedConsultation, setBookedConsultation] = useState(false);

  // Dynamic Date calculation
  const now = new Date();
  const dateOptions = [
    {
      label: 'Today',
      sub: now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      badge: '⚡ Fastest',
    },
    {
      label: 'Tomorrow',
      sub: new Date(now.getTime() + 86400000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      badge: '⭐ Recommended',
    },
    {
      label: new Date(now.getTime() + 172800000).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' }),
      sub: new Date(now.getTime() + 172800000).toLocaleDateString('en-US', { month: 'short' }),
      badge: '📅 Upcoming',
    },
  ];

  const customTimeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 NOON',
    '12:00 NOON - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '5:00 PM - 6:00 PM',
  ];

  const budgetRanges = [
    'Under KShs 10,000',
    'KShs 10,000 - 20,000',
    'KShs 20,000 - 50,000',
    'KShs 50,000 - 100,000',
    'KShs 100,000+',
  ];

  const quickPainPoints = [
    '⚡ Website & App Rebuild',
    '📈 SEO & GEO Rankings',
    '💬 WhatsApp Lead Automation',
    '🎨 Brand Identity & Content',
    '🎯 Paid Ads ROAS Growth',
  ];

  const togglePainPoint = (tag: string) => {
    if (painPoints.includes(tag)) {
      setPainPoints(painPoints.replace(tag, '').replace(/\n\n+/g, '\n').trim());
    } else {
      setPainPoints(painPoints ? `${painPoints}\n• ${tag}` : `• ${tag}`);
    }
  };

  // ── PATH A SUBMIT ─────────────────────────────────────────
  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !companyName || !spend || !painPoints) {
      alert('Please fill out all required fields, including selecting a budget range.');
      return;
    }

    const message =
      `🚨 *NEW AUDIT REQUEST* 🚨\n\n` +
      `👤 *Full Name:* ${fullName}\n` +
      `📧 *Email:* ${email}\n` +
      `📱 *Phone / WhatsApp:* ${phone}\n` +
      `🏢 *Company Name:* ${companyName}\n` +
      `🌐 *Company Website:* ${companyWebsite || 'Not provided'}\n` +
      `💰 *Project Budget Range:* ${spend}\n\n` +
      `📝 *Current Pain Points & Objectives:*\n${painPoints}\n\n` +
      `— Submitted via Goldfish Marketing Contact Page`;

    sendToWhatsApp(message);
    setSubmittedAudit(true);
  };

  // ── PATH B SUBMIT ─────────────────────────────────────────
  const handleConsultationBook = () => {
    if (!callName || !callPhone) {
      alert('Please enter your name and phone number before booking.');
      return;
    }
    if (!selectedDayLabel || !selectedTime) {
      alert('Please select a date and time slot.');
      return;
    }

    const message =
      `📅 *STRATEGY CALL BOOKING REQUEST* 📅\n\n` +
      `👤 *Contact Name:* ${callName}\n` +
      `📱 *Phone / WhatsApp:* ${callPhone}\n` +
      `🗓️ *Requested Date:* ${selectedDayLabel}\n` +
      `⏰ *Requested Time Slot:* ${selectedTime} (EAT / UTC+3)\n\n` +
      `— Submitted via Goldfish Marketing Site`;

    sendToWhatsApp(message);
    setBookedConsultation(true);
  };

  const directWhatsAppLink = `https://wa.me/254711404755?text=${encodeURIComponent(
    "Hi Goldfish Marketing, I'd like to schedule a 15-minute Strategy Call for my business."
  )}`;

  return (
    <div className="w-full flex flex-col gap-16">

      {/* DUAL-PATH MATRIX */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 border border-[var(--border-subtle)] rounded-2xl overflow-hidden bg-[var(--bg-surface)] shadow-lg max-w-7xl mx-auto w-full">

        {/* ══════════════════════════════════
            PATH A — FREE OPERATIONAL AUDIT
        ══════════════════════════════════ */}
        <div className="p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-[9px] font-mono tracking-widest uppercase mb-4">
              PATH A
            </div>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] mb-8">
              Request A Free Operational Audit
            </h2>

            {submittedAudit ? (
              <div className="p-8 rounded-xl border border-green-500/30 bg-green-500/5 text-center my-6">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-[16px] text-green-500 uppercase tracking-wider mb-2">
                  Audit Request Sent
                </h3>
                <p className="text-caption text-[var(--text-muted)] leading-relaxed">
                  Thank you, {fullName}. Your audit request has been submitted. We&apos;ll review your details and reach out to you at{' '}
                  <strong className="text-[var(--text-core)]">{phone}</strong> within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-6">

                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-lg py-3.5 px-4 text-caption text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all duration-200"
                  />
                </div>

                {/* Contact Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                    Contact Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-lg py-3.5 px-4 text-caption text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all duration-200"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                    Contact Phone Number / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+254 711 404 755"
                    className="w-full bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-lg py-3.5 px-4 text-caption text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all duration-200"
                  />
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Acme Ltd / Villa Diani"
                    className="w-full bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-lg py-3.5 px-4 text-caption text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all duration-200"
                  />
                </div>

                {/* Company Website */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                    Company Website / Social Page
                  </label>
                  <input
                    type="text"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    placeholder="www.yourcompany.com"
                    className="w-full bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-lg py-3.5 px-4 text-caption text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all duration-200"
                  />
                </div>

                {/* Interactive KShs Budget Range Pills */}
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold flex items-center justify-between">
                    <span>What is your project budget range? *</span>
                    {spend && <span className="text-[var(--accent-gold)] font-bold text-[10px]">Selected: {spend}</span>}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {budgetRanges.map((bRange) => {
                      const isSelected = spend === bRange;
                      return (
                        <button
                          key={bRange}
                          type="button"
                          onClick={() => setSpend(bRange)}
                          className={`py-3 px-3.5 rounded-xl border text-xs font-mono tracking-tight text-left transition-all duration-200 flex items-center justify-between ${
                            isSelected
                              ? 'bg-[var(--accent-gold)]/15 border-[var(--accent-gold)] text-[var(--accent-gold)] font-bold shadow-sm ring-1 ring-[var(--accent-gold)]/50'
                              : 'bg-[var(--bg-primary)]/30 border-[var(--border-subtle)] text-[var(--text-core)] hover:border-[var(--accent-gold)]/50'
                          }`}
                        >
                          <span>{bRange}</span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Select Pain Points & Textarea */}
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                    Select main focus &amp; current challenges *
                  </label>
                  
                  {/* Quick Select Tags */}
                  <div className="flex flex-wrap gap-2 mb-1">
                    {quickPainPoints.map((tag) => {
                      const isSelected = painPoints.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => togglePainPoint(tag)}
                          className={`py-1.5 px-3 rounded-full text-[11px] font-medium transition-all duration-200 ${
                            isSelected
                              ? 'bg-[var(--accent-gold)] text-black font-bold shadow-sm'
                              : 'bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-core)] hover:border-[var(--accent-gold)]/50'
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>

                  <textarea
                    required
                    rows={3}
                    value={painPoints}
                    onChange={(e) => setPainPoints(e.target.value)}
                    placeholder="Tap tags above or type your key goals &amp; pain points..."
                    className="w-full bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-lg py-3.5 px-4 text-caption text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all duration-200 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full shadow-lg py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Free Audit Request</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>

                  <p className="text-[10px] font-mono text-center text-[var(--text-muted)] mt-3">
                    ⚡ 60-Second Form • 24-Hour SLA Response • 100% Confidential
                  </p>
                </div>

              </form>
            )}
          </div>
        </div>

        {/* ══════════════════════════════════
            PATH B — STRATEGY CALL BOOKING (STREAMLINED)
        ══════════════════════════════════ */}
        <div className="p-8 lg:p-12 bg-[var(--bg-primary)]/30 border-t lg:border-t-0 lg:border-l border-[var(--border-subtle)] flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-[9px] font-mono tracking-widest uppercase mb-4">
              PATH B
            </div>
            <h2 className="text-h2 font-black tracking-tight text-[var(--text-core)] mb-2">
              Direct Schedule Access
            </h2>
            <p className="text-caption text-[var(--text-muted)] mb-6">
              Schedule a 15-Minute Technical Exploration Call with Goldfish Marketing
            </p>

            {/* 1-TAP INSTANT WHATSAPP BOOKING BANNER */}
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/15 transition-all duration-200 flex items-center justify-between group text-decoration-none mb-8 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg">
                  💬
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[var(--text-core)] group-hover:text-emerald-500 transition-colors">
                    1-Tap Instant WhatsApp Call Setup
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] font-mono">
                    Skip form &amp; message Goldfish Marketing directly
                  </span>
                </div>
              </div>
              <span className="text-emerald-500 font-bold text-sm group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Contact Name & Phone */}
            <div className="space-y-4 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={callName}
                  onChange={(e) => setCallName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-lg py-3 px-4 text-caption text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                  Phone Number / WhatsApp *
                </label>
                <input
                  type="tel"
                  value={callPhone}
                  onChange={(e) => setCallPhone(e.target.value)}
                  placeholder="+254 711 404 755"
                  className="w-full bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-lg py-3 px-4 text-caption text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Dynamic Date Selection Cards */}
            <div className="flex flex-col gap-3 mb-6">
              <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold">
                Select Preferred Date *
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {dateOptions.map((opt) => {
                  const isSelected = selectedDayLabel === `${opt.label} (${opt.sub})`;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setSelectedDayLabel(`${opt.label} (${opt.sub})`)}
                      className={`p-3 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[85px] ${
                        isSelected
                          ? 'bg-[var(--accent-gold)]/15 border-[var(--accent-gold)] shadow-sm ring-1 ring-[var(--accent-gold)]/50'
                          : 'bg-[var(--bg-primary)]/30 border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/50'
                      }`}
                    >
                      <span className="text-[9px] font-mono text-[var(--accent-gold)] font-bold uppercase tracking-wider mb-1">
                        {opt.badge}
                      </span>
                      <span className="text-xs font-bold text-[var(--text-core)]">{opt.label}</span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">{opt.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Selection Pills */}
            <div className="flex flex-col gap-3 mb-6">
              <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-core)] font-bold flex items-center justify-between">
                <span>Select 2-Hour Time Slot (EAT / UTC+3) *</span>
                {selectedTime && <span className="text-[var(--accent-gold)] font-bold text-[10px]">{selectedTime}</span>}
              </label>
              <div className="flex flex-wrap gap-2">
                {customTimeSlots.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-3 rounded-lg text-xs font-mono transition-all duration-200 border ${
                        isSelected
                          ? 'bg-[var(--accent-gold)] text-black font-bold border-[var(--accent-gold)] shadow-sm'
                          : 'bg-[var(--bg-primary)]/40 border-[var(--border-subtle)] text-[var(--text-core)] hover:border-[var(--accent-gold)]/50'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Confirmation Action */}
            {bookedConsultation ? (
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center">
                <p className="text-xs font-bold text-emerald-500">
                  🎉 Request sent! We&apos;ll confirm your slot via WhatsApp at {callPhone}.
                </p>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleConsultationBook}
                className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Confirm Strategy Call Booking</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
