'use client';

import { useState } from 'react';
import { isValidContactName, isValidPhoneNumber } from '@/lib/validators';
import { formatWhatsAppDirectMessage } from '@/lib/formatters';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { SERVICE_OFFERS } from '@/lib/service-offers';
import type { LeadSubmissionPayload } from '@/lib/leads-api';

export interface PromptChip {
  label: string;
  text: string;
}

export const WA_PROMPT_CHIPS: PromptChip[] = [
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

interface WhatsAppTabProps {
  clientName: string;
  clientPhone: string;
  topic: string;
  customMessage: string;
  onNameChange: (name: string) => void;
  onPhoneChange: (phone: string) => void;
  onChipSelect: (chip: PromptChip) => void;
  onCustomMessageChange: (message: string) => void;
  sendLead: (payload: LeadSubmissionPayload) => Promise<string | null>;
  onWhatsAppUrlGenerated: (url: string) => void;
  isSubmitting: boolean;
}

export default function WhatsAppTab({
  clientName,
  clientPhone,
  topic,
  customMessage,
  onNameChange,
  onPhoneChange,
  onChipSelect,
  onCustomMessageChange,
  sendLead,
  onWhatsAppUrlGenerated,
  isSubmitting,
}: WhatsAppTabProps) {
  const [businessName, setBusinessName] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [hasValidationError, setHasValidationError] = useState(false);

  const handleLaunchWhatsApp = async () => {
    const trimmedName = clientName.trim();
    const trimmedPhone = clientPhone.trim();

    if (!isValidContactName(trimmedName) || !isValidPhoneNumber(trimmedPhone)) {
      setHasValidationError(true);
      return;
    }
    setHasValidationError(false);

    const fullMessage = [
      customMessage,
      businessName && `Business: ${businessName}`,
      timeframe && `Preferred start: ${timeframe}`,
    ]
      .filter(Boolean)
      .join('\n');

    await sendLead({
      intent: 'whatsapp_quick_chat',
      companyName: businessName,
      name: trimmedName,
      phone: trimmedPhone,
      message: fullMessage,
      serviceInterest: topic,
    });

    const formattedMessage = formatWhatsAppDirectMessage({
      name: trimmedName,
      phone: trimmedPhone,
      topic,
      message: fullMessage,
    });

    const targetUrl = buildWhatsAppUrl(formattedMessage);
    onWhatsAppUrlGenerated(targetUrl);
  };

  const selectableOfferChips: PromptChip[] = [
    ...SERVICE_OFFERS.map((offer) => ({ label: offer.title, text: offer.message })),
    ...WA_PROMPT_CHIPS.slice(3),
  ];

  return (
    <div className="card-brand p-8 lg:p-12 border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xl rounded-2xl relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-bold">
              DIRECT FOUNDER LINE // DIANI &amp; NATIONWIDE
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-[var(--text-core)]">
            Instant WhatsApp Conversation
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono text-[var(--text-muted)] block">
            Replies during business hours
          </span>
          <span className="text-[11px] font-mono text-[var(--accent-gold)] font-bold">
            Direct with Malack Bwana
          </span>
        </div>
      </div>

      <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed mb-6">
        Enter your details below to begin a direct WhatsApp conversation with Malack. Submit your enquiry, then use the link to open your pre-filled message and press Send.
      </p>

      {/* 1. Direct WhatsApp Contact Identity */}
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
            <div className="min-w-0">
              <label className="field-label" htmlFor="waName">
                Full name
              </label>
              <input
                id="waName"
                autoComplete="name"
                type="text"
                required
                value={clientName}
                onChange={(e) => {
                  onNameChange(e.target.value);
                  if (hasValidationError) setHasValidationError(false);
                }}
                placeholder="Your Full Name *"
                className={`w-full p-3.5 rounded-xl bg-[var(--bg-surface)] border text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-emerald-500 transition-colors ${
                  hasValidationError && !clientName.trim()
                    ? 'border-red-500 bg-red-500/5 ring-1 ring-red-500'
                    : 'border-[var(--border-subtle)]'
                }`}
              />
            </div>
          </div>
          <div>
            <div className="min-w-0">
              <label className="field-label" htmlFor="waPhone">
                Phone / WhatsApp
              </label>
              <input
                id="waPhone"
                autoComplete="tel"
                type="tel"
                required
                value={clientPhone}
                onChange={(e) => {
                  onPhoneChange(e.target.value);
                  if (hasValidationError) setHasValidationError(false);
                }}
                placeholder="WhatsApp / Phone (e.g. +254 7...)*"
                className={`w-full p-3.5 rounded-xl bg-[var(--bg-surface)] border text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-emerald-500 transition-colors ${
                  hasValidationError && !clientPhone.trim()
                    ? 'border-red-500 bg-red-500/5 ring-1 ring-red-500'
                    : 'border-[var(--border-subtle)]'
                }`}
              />
            </div>
          </div>
        </div>
        {hasValidationError && (
          <p className="text-xs font-mono text-red-400 mt-2.5 bg-red-500/10 border border-red-500/20 p-2.5 rounded-lg flex items-center gap-2">
            <span>⚠️</span>
            <span>Please enter your Name and WhatsApp/Phone number to launch chat.</span>
          </p>
        )}
        <p className="text-[10px] font-mono text-[var(--text-muted)] mt-2">
          Submitting sends your details to Goldfish Marketing for follow-up. Drafts are not saved.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="min-w-0">
          <label className="field-label" htmlFor="waBusiness">
            Business name (optional)
          </label>
          <input
            id="waBusiness"
            autoComplete="organization"
            maxLength={150}
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]"
          />
        </div>
        <div className="min-w-0">
          <label className="field-label" htmlFor="waTiming">
            When would you like to start? (optional)
          </label>
          <select
            id="waTiming"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]"
          >
            <option value="">Select a timeframe</option>
            <option>This month</option>
            <option>Within 1–3 months</option>
            <option>Exploring options</option>
          </select>
        </div>
      </div>

      {/* 2. Quick-Select Topic Chips */}
      <div className="mb-8">
        <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-3">
          2. Select Your Discussion Priority:
        </span>
        <div className="flex flex-wrap gap-2.5">
          {selectableOfferChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => onChipSelect(chip)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all text-left ${
                topic === chip.label
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
        <div className="min-w-0">
          <label className="field-label" htmlFor="waCustomMsg">
            Your message
          </label>
          <textarea
            id="waCustomMsg"
            autoComplete="off"
            value={customMessage}
            onChange={(e) => onCustomMessageChange(e.target.value)}
            rows={4}
            className="w-full p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-sm font-mono text-[var(--text-core)] focus:outline-none focus:border-emerald-500 leading-relaxed"
          />
        </div>
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
          onClick={handleLaunchWhatsApp}
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className={`w-full sm:w-auto py-3.5 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              <span>Submitting enquiry...</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 2c-5.514 0-9.998 4.486-9.998 10.001 0 1.956.564 3.78 1.54 5.337l-1.573 5.761 5.908-1.549c1.492.839 3.21 1.302 5.033 1.302 5.516 0 10.001-4.485 10.001-10.001 0-5.515-4.485-10.001-10.012-10.001zm5.758 14.175c-.244.688-1.428 1.314-1.968 1.391-.497.07-1.144.1-3.326-.803-2.793-1.157-4.577-4.004-4.717-4.193-.139-.188-1.135-1.512-1.135-2.883 0-1.371.717-2.046.974-2.327.257-.282.559-.352.747-.352.188 0 .376.002.535.01.17.008.399-.064.625.478.234.563.799 1.947.869 2.088.07.141.117.305.023.493-.093.188-.141.305-.281.47-.14.165-.295.368-.422.493-.14.136-.286.286-.123.567.164.281.728 1.202 1.562 1.944 1.073.955 1.979 1.25 2.26 1.39.281.141.445.117.61-.07.164-.188.703-.82.891-1.101.188-.282.375-.235.633-.14.258.094 1.64.773 1.921.913.281.141.469.211.539.328.07.117.07.677-.174 1.365z" />
              </svg>
              <span>Submit enquiry & continue to WhatsApp</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
