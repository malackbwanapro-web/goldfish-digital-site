'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { bookingOptions, validBooking } from '@/lib/booking';
import { SITE_CONFIG } from '@/lib/constants';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import {
  isValidContactName,
  isValidPhoneNumber,
} from '@/lib/validators';
import {
  formatWhatsAppDirectMessage,
  formatStrategyCallMessage,
  formatDiagnosticMessage,
} from '@/lib/formatters';

const waPromptChips = [
  {
    label: '⚡ Tier 01: Foundation Sprint',
    text: "Hi Malack, I run a business in Kenya and I'm interested in the Tier 01: Foundation Sprint (Fixed Scope, 14–21 Day Turnaround). I'd like to discuss deploying a high-speed website / direct booking engine with local SEO and analytics.",
  },
  {
    label: '🚀 Tier 02: Growth Engine Retainer',
    text: "Hi Malack, I run a business in Kenya and I'm interested in deploying the Tier 02: Growth Engine Retainer (Ongoing Monthly Growth). I'd like to discuss continuous Generative Engine Optimization (GEO), high-ROAS Meta & Google ads, and WhatsApp CRM automation.",
  },
  {
    label: '👑 Tier 03: Ecosystem Dominance',
    text: "Hi Malack, I run an enterprise in Kenya and I'm interested in the Tier 03: Ecosystem Dominance Partnership (Dedicated Digital Department). I'd like to discuss custom web/app platform rebuilds, multi-channel ad scaling, and autonomous AI operations.",
  },
  {
    label: '🏨 Direct Booking Engine / OTA Leak',
    text: "Hi Malack, I run a hospitality/villa business and want to reduce our OTA commission losses with a direct booking engine and M-Pesa checkout.",
  },
  {
    label: '💬 24/7 WhatsApp AI Reservation Bot',
    text: "Hi Malack, I'm interested in deploying a 24/7 WhatsApp AI assistant to handle customer inquiries, check availability, and take bookings automatically.",
  },
  {
    label: '📍 Local SEO & Google Maps 3-Pack',
    text: "Hi Malack, I'd like to audit our Google Business Profile and local search rankings to get more direct phone calls and inquiries.",
  },
  {
    label: '⚡ Sub-Second Next.js Website Rebuild',
    text: "Hi Malack, our current website is slow on mobile and losing leads. I'd like to discuss a high-speed Next.js redesign.",
  },
  {
    label: '📊 Ad Spend Audit & Attribution',
    text: "Hi Malack, we are running Google/Meta ads and want to audit our conversion tracking and reduce cost-per-lead.",
  },
];

export default function ContactClient() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'calendar' | 'diagnostic'>('whatsapp');

  // ── TAB 1: WHATSAPP DIRECT STATE ──
  const [waName, setWaName] = useState('');
  const [waPhone, setWaPhone] = useState('');
  const [waNameError, setWaNameError] = useState(false);
  const [waTopic, setWaTopic] = useState('Direct Booking Engine / OTA Leak');
  const [waCustomMsg, setWaCustomMsg] = useState(
    "Hi Malack, I run a business in Kenya and would like to discuss upgrading our direct booking engine to cut OTA commissions."
  );


  // Pre-hydrate from URL query params
  useEffect(() => {
    const tier = searchParams.get('tier');
    const topic = searchParams.get('topic');
    const msg = searchParams.get('message');

    if (tier === 'tier-01') {
      const chip = waPromptChips[0];
      setWaTopic(chip.label);
      setWaCustomMsg(chip.text);
      setCalTopic('High-Speed Web Replatforming');
    } else if (tier === 'tier-02') {
      const chip = waPromptChips[1];
      setWaTopic(chip.label);
      setWaCustomMsg(chip.text);
      setCalTopic('General Digital Strategy');
    } else if (tier === 'tier-03') {
      const chip = waPromptChips[2];
      setWaTopic(chip.label);
      setWaCustomMsg(chip.text);
      setCalTopic('WhatsApp AI Automation');
    }

    if (topic) {
      setWaTopic(topic);
    }
    if (msg) {
      setWaCustomMsg(msg);
    }
  }, [searchParams]);

  const handleChipSelect = (chip: { label: string; text: string }) => {
    setWaTopic(chip.label);
    setWaCustomMsg(chip.text);
  };

  const [lastRequestId, setLastRequestId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submissionError, setSubmissionError] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const feedbackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (submissionError || whatsappUrl) {
      feedbackRef.current?.focus();
      feedbackRef.current?.scrollIntoView({ block: 'center' });
    }
  }, [submissionError, whatsappUrl]);
  const submittingRef = useRef(false);
  const requestKeyRef = useRef({ payload: '', key: '' });
  const sendLeadToBackend = async (payload: Record<string, unknown>) => {
    if (submittingRef.current) return null;
    submittingRef.current = true;
    setIsSubmitting(true);
    setSubmissionError('');
    setWhatsappUrl('');
    setLastRequestId('');
    const serialized = JSON.stringify(payload);
    if (requestKeyRef.current.payload !== serialized) {
      requestKeyRef.current = { payload: serialized, key: crypto.randomUUID() };
    }
    try {
      const res = await fetch('/api/leads', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Idempotency-Key': requestKeyRef.current.key },
        body: serialized, signal: AbortSignal.timeout(15000),
      });
      const data = await res.json();
      if (!res.ok || data.status !== 'notification_accepted' || typeof data.requestId !== 'string') throw new Error('Capture failed');
      setLastRequestId(data.requestId);
      return data.requestId as string;
    } catch {
      setSubmissionError('We could not confirm your email request. Your details are still here. Retry, or use the WhatsApp link below and press Send there.');
      return null;
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  const handleOpenWhatsApp = async () => {
    const cleanName = waName.trim();
    const cleanPhone = waPhone.trim();

    if (!isValidContactName(cleanName) || !isValidPhoneNumber(cleanPhone)) {
      setWaNameError(true);
      return;
    }
    setWaNameError(false);

    const reqId = await sendLeadToBackend({
      intent: 'whatsapp_quick_chat',
      name: cleanName,
      phone: cleanPhone,
      message: waCustomMsg,
      serviceInterest: waTopic,
    });

    const formattedMessage = formatWhatsAppDirectMessage({
      name: cleanName,
      phone: cleanPhone,
      topic: waTopic,
      message: waCustomMsg,
    });

    const targetUrl = buildWhatsAppUrl(formattedMessage);
    setWhatsappUrl(targetUrl);
  };

  // ── TAB 2: 15-MIN STRATEGY SLOT STATE ──
  const [calName, setCalName] = useState('');
  const [calPhone, setCalPhone] = useState('');
  const [calEmail, setCalEmail] = useState('');
  const [calTopic, setCalTopic] = useState('General Digital Strategy');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSlot, setBookedSlot] = useState(false);

  const [dateOptions, setDateOptions] = useState<ReturnType<typeof bookingOptions>>([]);
  useEffect(() => {
    const refresh = () => setDateOptions(bookingOptions());
    refresh();
    const timer = setInterval(refresh, 60000);
    return () => clearInterval(timer);
  }, []);
  const timeSlots = dateOptions.find(option => option.id === selectedDay)?.slots || [];

  const handleSlotBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!calName || !calPhone || !calEmail || !selectedTime || !validBooking(selectedDay, selectedTime)) {
      setSubmissionError('Please choose a future preferred day and time during business hours.');
      return;
    }

    const reqId = await sendLeadToBackend({
      intent: 'strategy_call',
      name: calName,
      phone: calPhone,
      email: calEmail,
      selectedDay,
      selectedTimeSlot: `${selectedTime} (EAT)`,
      serviceInterest: calTopic,
    });

    const formattedMessage = formatStrategyCallMessage({
      refId: reqId || 'GFM-PENDING',
      name: calName,
      phone: calPhone,
      email: calEmail,
      date: selectedDay,
      timeSlot: selectedTime,
      topic: calTopic,
    });

    const targetUrl = buildWhatsAppUrl(formattedMessage);
    setWhatsappUrl(targetUrl);
    if (reqId) setBookedSlot(true);
  };

  // ── TAB 3: CONFIDENTIAL DIAGNOSTIC INTAKE (SME CALIBRATED) ──
  const [diagStep, setDiagStep] = useState<1 | 2 | 3>(1);
  const [currency, setCurrency] = useState<'KES' | 'USD'>('KES');
  const [step1Errors, setStep1Errors] = useState(false);
  const [diagName, setDiagName] = useState('');
  const [diagPhone, setDiagPhone] = useState('');
  const [diagEmail, setDiagEmail] = useState('');
  const [diagCompany, setDiagCompany] = useState('');
  const [diagWebsite, setDiagWebsite] = useState('');
  const [selectedHurdles, setSelectedHurdles] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [diagNotes, setDiagNotes] = useState('');
  const [submittedDiagnostic, setSubmittedDiagnostic] = useState(false);

  const hurdleOptions = [
    '🏨 High OTA Commissions (18-25% leak)',
    '📱 Sluggish Mobile Load Speeds on 4G',
    '📍 Low Google Maps & Local Search Ranking',
    '💬 Slow Lead Response & No After-Hours Automation',
    '💸 High Ad Spend with Unclear ROAS / Attribution',
    '🎨 Outdated Brand Identity Hurting Pricing Power',
  ];

  const toggleHurdle = (h: string) => {
    if (selectedHurdles.includes(h)) {
      setSelectedHurdles(selectedHurdles.filter((item) => item !== h));
    } else {
      setSelectedHurdles([...selectedHurdles, h]);
    }
  };

  const budgetTiersKES = ['KShs 15,000 – 25,000', 'KShs 50,000 – 80,000', 'KShs 80,000 – 100,000', 'KShs 100,000+', 'I need guidance'];
  const budgetTiersUSD = ['$150 – $400', '$400 – $800', '$800+', 'I need guidance'];

  const activeBudgetTiers = currency === 'KES' ? budgetTiersKES : budgetTiersUSD;

  const handleDiagnosticSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!diagName || !diagPhone || !diagEmail || !diagCompany) return;

    const reqId = await sendLeadToBackend({
      intent: 'diagnostic',
      name: diagName,
      companyName: diagCompany,
      website: diagWebsite,
      phone: diagPhone,
      email: diagEmail,
      budget: `${selectedBudget || 'Not specified'} (${currency})`,
      painPoints: selectedHurdles,
      message: diagNotes,
    });

    const formattedMessage = formatDiagnosticMessage({
      refId: reqId || 'GFM-PENDING',
      name: diagName,
      company: diagCompany,
      website: diagWebsite,
      phone: diagPhone,
      email: diagEmail,
      budget: selectedBudget,
      currency,
      hurdles: selectedHurdles,
      notes: diagNotes,
    });

    const targetUrl = buildWhatsAppUrl(formattedMessage);
    setWhatsappUrl(targetUrl);
    if (reqId) setSubmittedDiagnostic(true);
  };

  const handleTabSwitch = (tab: 'whatsapp' | 'calendar' | 'diagnostic') => {
    if (waName) {
      if (!calName) setCalName(waName);
      if (!diagName) setDiagName(waName);
    }
    if (waPhone) {
      if (!calPhone) setCalPhone(waPhone);
      if (!diagPhone) setDiagPhone(waPhone);
    }
    setActiveTab(tab);
  };

  return (
    <div className="contact-intake max-w-5xl mx-auto w-full">
      <div ref={feedbackRef} tabIndex={-1} className="scroll-mt-24">
      {submissionError && <p role="alert" className="p-4 mb-4 border border-red-500 rounded-lg">{submissionError}</p>}
      {lastRequestId && <p role="status" className="p-4 mb-4">Your request has been accepted by our email provider. Reference: {lastRequestId}. Delivery and appointment confirmation are still pending.</p>}
      {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mb-6">Continue in WhatsApp — press Send to send your message</a>}
      </div>

      {/* ═══ TRI-MODAL TAB SWITCHER ═══ */}
      <div className="flex flex-col sm:flex-row items-center justify-center p-1.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-md mb-10 max-w-2xl mx-auto">
        <button
          onClick={() => handleTabSwitch('whatsapp')}
          className={`w-full sm:w-1/3 py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'whatsapp'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
          }`}
        >
          <span>💬</span>
          <span>1-Tap WhatsApp</span>
        </button>

        <button
          onClick={() => handleTabSwitch('calendar')}
          className={`w-full sm:w-1/3 py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'calendar'
              ? 'bg-[var(--accent-gold)] text-[#0D0D0D] shadow-md'
              : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
          }`}
        >
          <span>📅</span>
          <span>15-Min Slot</span>
        </button>

        <button
          onClick={() => handleTabSwitch('diagnostic')}
          className={`w-full sm:w-1/3 py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'diagnostic'
              ? 'bg-[var(--accent-gold)] text-[#0D0D0D] shadow-md'
              : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
          }`}
        >
          <span>🛡️</span>
          <span>24h Diagnostic</span>
        </button>
      </div>

      {/* ══════════════════════════════════════════
          TAB 1: 1-TAP DIRECT WHATSAPP
      ══════════════════════════════════════════ */}
      <div className={activeTab === 'whatsapp' ? 'block' : 'hidden'}>
        <div className="card-brand p-8 lg:p-12 border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xl rounded-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-bold">
                  DIRECT FOUNDER LINE // DIANI BEACH HQ
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-[var(--text-core)]">
                Instant WhatsApp Conversation
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-[var(--text-muted)] block">
                Typical Response: &lt; 15 mins
              </span>
              <span className="text-[11px] font-mono text-[var(--accent-gold)] font-bold">
                Direct with Malack Bwana
              </span>
            </div>
          </div>

          <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed mb-6">
            Enter your details below to begin an end-to-end encrypted direct chat with our founder in Diani. Submit your enquiry, then use the WhatsApp link to open your pre-filled message. Press Send in WhatsApp to send it.
          </p>

          {/* 1. Direct WhatsApp Contact Identity (Early Lead Safeguard) */}
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[var(--bg-primary)]/70 border border-[var(--border-subtle)] shadow-inner">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <label className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider font-bold block">
                1. Your Contact Details:
              </label>
              <span className="text-[10px] font-mono text-emerald-500 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Sent only when you submit
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="min-w-0"><label className="field-label" htmlFor="waName">Full name</label><input id="waName" autoComplete="name"
                  type="text"
                  required
                  value={waName}
                  onChange={(e) => {
                    setWaName(e.target.value);
                    if (waNameError) setWaNameError(false);
                  }}
                  placeholder="Your Full Name *"
                  className={`w-full p-3.5 rounded-xl bg-[var(--bg-surface)] border text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-emerald-500 transition-colors ${
                    waNameError && !waName.trim() ? 'border-red-500 bg-red-500/5 ring-1 ring-red-500' : 'border-[var(--border-subtle)]'
                  }`}
                /></div>
              </div>
              <div>
                <div className="min-w-0"><label className="field-label" htmlFor="waPhone">Phone / WhatsApp</label><input id="waPhone" autoComplete="tel"
                  type="tel"
                  required
                  value={waPhone}
                  onChange={(e) => {
                    setWaPhone(e.target.value);
                    if (waNameError) setWaNameError(false);
                  }}
                  placeholder="WhatsApp / Phone (e.g. +254 7...)*"
                  className={`w-full p-3.5 rounded-xl bg-[var(--bg-surface)] border text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-emerald-500 transition-colors ${
                    waNameError && !waPhone.trim() ? 'border-red-500 bg-red-500/5 ring-1 ring-red-500' : 'border-[var(--border-subtle)]'
                  }`}
                /></div>
              </div>
            </div>
            {waNameError && (
              <p className="text-xs font-mono text-red-400 mt-2.5 bg-red-500/10 border border-red-500/20 p-2.5 rounded-lg flex items-center gap-2">
                <span>⚠️</span>
                <span>Please enter your Name and WhatsApp/Phone number to launch chat.</span>
              </p>
            )}
            <p className="text-[10px] font-mono text-[var(--text-muted)] mt-2">
              Submitting sends your details to Goldfish Marketing for follow-up. Drafts are not saved.
            </p>
          </div>

          {/* 2. Quick-Select Topic Chips */}
          <div className="mb-8">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-3">
              2. Select Your Discussion Priority:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {waPromptChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChipSelect(chip)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all text-left ${
                    waTopic === chip.label
                      ? 'bg-emerald-600 text-white shadow-md border-emerald-500'
                      : 'bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-core)] hover:border-emerald-500/50'
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Message Preview Box */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                3. Message Preview:
              </span>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">
                Editable before sending
              </span>
            </div>
            <div className="min-w-0"><label className="field-label" htmlFor="waCustomMsg">Your message</label><textarea id="waCustomMsg" autoComplete="off"
              value={waCustomMsg}
              onChange={(e) => {
                setWaCustomMsg(e.target.value);
              }}
              rows={4}
              className="w-full p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-sm font-mono text-[var(--text-core)] focus:outline-none focus:border-emerald-500 leading-relaxed"
            /></div>
          </div>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
            <div className="flex flex-col gap-1 text-xs font-mono text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <span>🔒 Direct end-to-end encrypted chat</span>
                <span>•</span>
                <span>No spam bots</span>
              </div>
              <span className="text-[10px] text-[var(--text-muted)]/70">
                You can continue in WhatsApp after submitting.
              </span>
            </div>
            <button
              onClick={handleOpenWhatsApp}
              disabled={isSubmitting}
              className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 2c-5.514 0-9.998 4.486-9.998 10.001 0 1.956.564 3.78 1.54 5.337l-1.573 5.761 5.908-1.549c1.492.839 3.21 1.302 5.033 1.302 5.516 0 10.001-4.485 10.001-10.001 0-5.515-4.485-10.001-10.012-10.001zm5.758 14.175c-.244.688-1.428 1.314-1.968 1.391-.497.07-1.144.1-3.326-.803-2.793-1.157-4.577-4.004-4.717-4.193-.139-.188-1.135-1.512-1.135-2.883 0-1.371.717-2.046.974-2.327.257-.282.559-.352.747-.352.188 0 .376.002.535.01.17.008.399-.064.625.478.234.563.799 1.947.869 2.088.07.141.117.305.023.493-.093.188-.141.305-.281.47-.14.165-.295.368-.422.493-.14.136-.286.286-.123.567.164.281.728 1.202 1.562 1.944 1.073.955 1.979 1.25 2.26 1.39.281.141.445.117.61-.07.164-.188.703-.82.891-1.101.188-.282.375-.235.633-.14.258.094 1.64.773 1.921.913.281.141.469.211.539.328.07.117.07.677-.174 1.365z" />
              </svg>
              <span>Submit enquiry & continue to WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          TAB 2: 15-MINUTE STRATEGY SLOT
      ══════════════════════════════════════════ */}
      <div className={activeTab === 'calendar' ? 'block' : 'hidden'}>
        <div className="card-brand p-8 lg:p-12 border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xl rounded-2xl">
          {bookedSlot ? (
            <div className="p-10 text-center rounded-2xl border border-green-500/30 bg-green-500/5 my-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold mb-3">
                Reference ID: {lastRequestId || 'GFM-PENDING'}
              </div>
              <h3 className="text-2xl font-black text-[var(--text-core)] mb-2">
                Strategy Call Request Received!
              </h3>
              <p className="text-sm text-[var(--text-muted)] font-light max-w-lg mx-auto mb-4 leading-relaxed">
                Thank you, <strong className="text-[var(--text-core)]">{calName}</strong>. Your request for{' '}
                <span className="text-[var(--accent-gold)] font-mono font-bold">{selectedDay} at {selectedTime} (EAT)</span> has been accepted by our email provider for delivery. It is not a confirmed appointment.
              </p>
              <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-subtle)] max-w-md mx-auto mb-6 text-xs text-[var(--text-muted)] text-left font-mono space-y-2">
                <p>📌 <strong>Status:</strong> Email delivery pending; our team will confirm availability.</p>
                <p>ℹ️ <strong>Note:</strong> Strategy slots are pending confirmation by our team. If WhatsApp did not open, we will contact you at <span className="text-[var(--text-core)]">{calEmail}</span> or <span className="text-[var(--text-core)]">{calPhone}</span>.</p>
              </div>
              <button
                onClick={() => setBookedSlot(false)}
                className="btn-outline text-xs py-2 px-6"
              >
                Modify or Book Another Slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleSlotBooking} className="space-y-8">
              <div>
                <span className="text-eyebrow text-xs font-mono block mb-2">
                  DIRECT TECHNICAL EVALUATION
                </span>
                <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-[var(--text-core)] mb-3">
                  Schedule a 15-Minute Strategy Slot
                </h2>
                <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                  No sales pitch. A focused 15-minute diagnostic session with our technical team to analyze your website latency, booking engine friction, or AI automation scope.
                </p>
              </div>

              {/* Day Selection */}
              <div>
                <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-3">
                  1. Select Preferred Day:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {dateOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => { setSelectedDay(opt.id); setSelectedTime(null); }}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedDay === opt.id
                          ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 shadow-sm'
                          : 'border-[var(--border-subtle)] bg-[var(--bg-primary)]/50 hover:border-[var(--accent-gold)]/30'
                      }`}
                    >
                      <span className="text-[10px] font-mono text-[var(--accent-gold)] uppercase tracking-widest block mb-1">
                        {opt.badge}
                      </span>
                      <span className="text-sm font-bold text-[var(--text-core)] block">
                        {opt.label}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] font-mono">
                        {opt.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-3">
                  2. Select Time Window (East Africa Time - EAT / UTC+3):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-3 px-4 rounded-xl text-xs font-mono border transition-all text-center ${
                        selectedTime === slot
                          ? 'bg-[var(--accent-gold)] text-[#0D0D0D] border-[var(--accent-gold)] shadow-sm font-bold'
                          : 'bg-[var(--bg-primary)]/40 border-[var(--border-subtle)] text-[var(--text-core)] hover:border-[var(--accent-gold)]/40'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
                <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                  3. Your Details for Google Meet Invite:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="min-w-0"><label className="field-label" htmlFor="calName">Full name</label><input id="calName" autoComplete="name"
                    type="text"
                    required
                    value={calName}
                    onChange={(e) => setCalName(e.target.value)}
                    placeholder="Your Full Name *"
                    className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent-gold)]"
                  /></div>
                  <div className="min-w-0"><label className="field-label" htmlFor="calPhone">Phone / WhatsApp</label><input id="calPhone" autoComplete="tel"
                    type="tel"
                    required
                    value={calPhone}
                    onChange={(e) => setCalPhone(e.target.value)}
                    placeholder="WhatsApp / Phone Number *"
                    className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent-gold)]"
                  /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="min-w-0"><label className="field-label" htmlFor="calEmail">Email</label><input id="calEmail" autoComplete="email"
                    type="email"
                    required
                    value={calEmail}
                    onChange={(e) => setCalEmail(e.target.value)}
                    placeholder="Corporate Email Address *"
                    className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent-gold)]"
                  /></div>
                  <div className="min-w-0"><label className="field-label" htmlFor="calTopic">Discussion topic</label><select id="calTopic" autoComplete="off"
                    value={calTopic}
                    onChange={(e) => setCalTopic(e.target.value)}
                    className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)]"
                  >
                    <option value="Direct Booking Engine">Direct Booking Engine / OTA Leak</option>
                    <option value="WhatsApp AI Automation">WhatsApp AI Customer Assistant</option>
                    <option value="Local SEO & Google Maps">Local SEO & Google Maps Visibility</option>
                    <option value="High-Speed Web Replatforming">Next.js Web Replatforming</option>
                    <option value="General Digital Strategy">General Digital Systems Strategy</option>
                  </select></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  Submit your request, then optionally continue in WhatsApp. Availability requires confirmation.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto btn-primary text-xs py-3.5 px-8 shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <span>Submit preferred call time →</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          TAB 3: 3-STEP CONFIDENTIAL DIAGNOSTIC
      ══════════════════════════════════════════ */}
      <div className={activeTab === 'diagnostic' ? 'block' : 'hidden'}>
        <div className="card-brand p-8 lg:p-12 border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xl rounded-2xl">
          {submittedDiagnostic ? (
            <div className="p-10 text-center rounded-2xl border border-green-500/30 bg-green-500/5 my-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-4 text-2xl">
                🛡️
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold mb-3">
                Reference ID: {lastRequestId || 'GFM-PENDING'}
              </div>
              <h3 className="text-2xl font-black text-[var(--text-core)] mb-2">
                Confidential Diagnostic Intake Received
              </h3>
              <p className="text-sm text-[var(--text-muted)] font-light max-w-lg mx-auto mb-4 leading-relaxed">
                Thank you, <strong className="text-[var(--text-core)]">{diagName}</strong>. We will review your enquiry for <strong className="text-[var(--text-core)]">{diagCompany}</strong>.
              </p>
              <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-subtle)] max-w-md mx-auto mb-6 text-xs text-[var(--text-muted)] text-left font-mono space-y-2">
                <p>📌 <strong>Status:</strong> Accepted by our email provider; delivery pending.</p>
                <p>📬 <strong>Delivery:</strong> We will follow up at <span className="text-[var(--accent-gold)]">{diagEmail}</span> to agree the next steps.</p>
                <p>📞 <strong>Need Urgent Support?</strong> Direct line: <a href={`tel:+${SITE_CONFIG.WHATSAPP_NUMBER}`} className="text-[var(--accent-gold)] font-bold underline">{SITE_CONFIG.PHONE_DISPLAY}</a></p>
              </div>
              <button
                onClick={() => {
                  setSubmittedDiagnostic(false);
                  setDiagStep(1);
                }}
                className="btn-outline text-xs py-2 px-6"
              >
                Submit Additional Project
              </button>
            </div>
          ) : (
            <form onSubmit={handleDiagnosticSubmit} className="space-y-8">
              {/* Stepper Header */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div>
                  <span className="text-eyebrow text-xs font-mono block mb-1">
                    CONFIDENTIAL 24-HOUR TEARDOWN
                  </span>
                  <h2 className="text-2xl font-black tracking-tight text-[var(--text-core)]">
                    3-Step Growth Diagnostic
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((stepNum) => (
                    <div
                      key={stepNum}
                      onClick={() => setDiagStep(stepNum as 1 | 2 | 3)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs cursor-pointer transition-all ${
                        diagStep === stepNum
                          ? 'bg-[var(--accent-gold)] text-[#0D0D0D] font-bold shadow-sm'
                          : diagStep > stepNum
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-muted)]'
                      }`}
                    >
                      {stepNum}
                    </div>
                  ))}
                </div>
              </div>

              {/* STEP 1: BUSINESS BASICS */}
              {diagStep === 1 && (
                <div className="space-y-5">
                  <h3 className="text-base font-bold text-[var(--text-core)] mb-2">
                    Step 1: Your Business Profile
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="min-w-0"><label className="field-label" htmlFor="diagName">Full name</label><input id="diagName" autoComplete="name"
                      type="text"
                      required
                      value={diagName}
                      onChange={(e) => {
                        setDiagName(e.target.value);
                        if (step1Errors) setStep1Errors(false);
                      }}
                      placeholder="Your Full Name *"
                      className={`p-3.5 rounded-xl bg-[var(--bg-primary)] border text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] ${
                        step1Errors && !diagName ? 'border-red-500 bg-red-500/5' : 'border-[var(--border-subtle)]'
                      }`}
                    /></div>
                    <div className="min-w-0"><label className="field-label" htmlFor="diagCompany">Business name</label><input id="diagCompany" autoComplete="organization"
                      type="text"
                      required
                      value={diagCompany}
                      onChange={(e) => {
                        setDiagCompany(e.target.value);
                        if (step1Errors) setStep1Errors(false);
                      }}
                      placeholder="Business / Company Name *"
                      className={`p-3.5 rounded-xl bg-[var(--bg-primary)] border text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] ${
                        step1Errors && !diagCompany ? 'border-red-500 bg-red-500/5' : 'border-[var(--border-subtle)]'
                      }`}
                    /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="min-w-0"><label className="field-label" htmlFor="diagEmail">Email</label><input id="diagEmail" autoComplete="email"
                      type="email"
                      required
                      value={diagEmail}
                      onChange={(e) => {
                        setDiagEmail(e.target.value);
                        if (step1Errors) setStep1Errors(false);
                      }}
                      placeholder="Your Business Email *"
                      className={`p-3.5 rounded-xl bg-[var(--bg-primary)] border text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] ${
                        step1Errors && !diagEmail ? 'border-red-500 bg-red-500/5' : 'border-[var(--border-subtle)]'
                      }`}
                    /></div>
                    <div className="min-w-0"><label className="field-label" htmlFor="diagPhone">Phone / WhatsApp</label><input id="diagPhone" autoComplete="tel"
                      type="tel"
                      required
                      value={diagPhone}
                      onChange={(e) => {
                        setDiagPhone(e.target.value);
                        if (step1Errors) setStep1Errors(false);
                      }}
                      placeholder="Phone / WhatsApp Number *"
                      className={`p-3.5 rounded-xl bg-[var(--bg-primary)] border text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] ${
                        step1Errors && !diagPhone ? 'border-red-500 bg-red-500/5' : 'border-[var(--border-subtle)]'
                      }`}
                    /></div>
                  </div>
                  <div className="min-w-0"><label className="field-label" htmlFor="diagWebsite">Website or social profile</label><input id="diagWebsite" autoComplete="url"
                    type="url"
                    value={diagWebsite}
                    onChange={(e) => setDiagWebsite(e.target.value)}
                    placeholder="Website or Social Link (e.g. https://yourbusiness.co.ke)"
                    className="w-full p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)]"
                  /></div>

                  {step1Errors && (
                    <p className="text-xs font-mono text-red-400 bg-red-500/10 border border-red-500/20 p-2.5 rounded-lg">
                      ⚠️ Please provide your full name, company, email, and phone/WhatsApp to continue.
                    </p>
                  )}

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (!diagName || !diagCompany || !diagEmail || !diagPhone) {
                          setStep1Errors(true);
                          return;
                        }
                        setStep1Errors(false);
                        setDiagStep(2);
                      }}
                      className="btn-primary text-xs py-3 px-8"
                    >
                      Continue to Step 2: Key Hurdles →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: OPERATIONAL HURDLES */}
              {diagStep === 2 && (
                <div className="space-y-5">
                  <h3 className="text-base font-bold text-[var(--text-core)] mb-2">
                    Step 2: What Are Your Core Operational Bottlenecks?
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light">
                    Select all that currently apply to your business:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {hurdleOptions.map((h, idx) => {
                      const isSelected = selectedHurdles.includes(h);
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => toggleHurdle(h)}
                          className={`p-4 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[var(--accent-gold)]/10 border-[var(--accent-gold)] text-[var(--text-core)] shadow-sm'
                              : 'bg-[var(--bg-primary)]/40 border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-gold)]/30'
                          }`}
                        >
                          <span>{h}</span>
                          <span className="text-sm font-bold ml-2">
                            {isSelected ? '✓' : '+'}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-6 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setDiagStep(1)}
                      className="btn-outline text-xs py-2.5 px-6"
                    >
                      ← Back to Step 1
                    </button>
                    <button
                      type="button"
                      onClick={() => setDiagStep(3)}
                      className="btn-primary text-xs py-3 px-8"
                    >
                      Continue to Step 3: Budget &amp; Scope →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: SME BUDGET CALIBRATION */}
              {diagStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[var(--text-core)]">
                      Step 3: SME Budget Band &amp; Additional Context
                    </h3>
                    <div className="inline-flex rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-1 text-xs font-mono">
                      <button
                        type="button"
                        onClick={() => { setCurrency('KES'); setSelectedBudget(''); }}
                        className={`px-3 py-1 rounded transition-all ${
                          currency === 'KES' ? 'bg-[var(--accent-gold)] text-[#0D0D0D] font-bold' : 'text-[var(--text-muted)]'
                        }`}
                      >
                        KES
                      </button>
                      <button
                        type="button"
                        onClick={() => { setCurrency('USD'); setSelectedBudget(''); }}
                        className={`px-3 py-1 rounded transition-all ${
                          currency === 'USD' ? 'bg-[var(--accent-gold)] text-[#0D0D0D] font-bold' : 'text-[var(--text-muted)]'
                        }`}
                      >
                        USD
                      </button>
                    </div>
                  </div>

                  {/* Budget Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeBudgetTiers.map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setSelectedBudget(tier)}
                        className={`p-3.5 rounded-xl border text-center text-xs font-mono transition-all ${
                          selectedBudget === tier
                            ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] text-[#0D0D0D] font-bold shadow-sm'
                            : 'bg-[var(--bg-primary)]/40 border-[var(--border-subtle)] text-[var(--text-core)] hover:border-[var(--accent-gold)]/40'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-2">
                      Any specific notes or questions for our engineering audit?
                    </label>
                    <div className="min-w-0"><label className="field-label" htmlFor="diagNotes">Project notes</label><textarea id="diagNotes" autoComplete="off"
                      value={diagNotes}
                      onChange={(e) => setDiagNotes(e.target.value)}
                      rows={3}
                      placeholder="e.g. We want to stop relying on Booking.com for 80% of our guests and need direct M-Pesa bookings..."
                      className="w-full p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] leading-relaxed"
                    /></div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border-subtle)]">
                    <button
                      type="button"
                      onClick={() => setDiagStep(2)}
                      className="btn-outline text-xs py-2.5 px-6"
                    >
                      ← Back to Step 2
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto btn-primary text-xs py-3.5 px-8 shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <span>Submit project enquiry →</span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
