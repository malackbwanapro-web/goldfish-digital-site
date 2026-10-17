'use client';

import { useState } from 'react';
import { formatDiagnosticMessage } from '@/lib/formatters';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { SITE_CONFIG } from '@/lib/constants';
import type { LeadSubmissionPayload } from '@/lib/leads-api';

export const HURDLE_OPTIONS = [
  '🏨 High OTA Commissions (18-25% leak)',
  '📱 Sluggish Mobile Load Speeds on 4G',
  '📍 Low Google Maps & Local Search Ranking',
  '💬 Slow Lead Response & No After-Hours Automation',
  '💸 High Ad Spend with Unclear ROAS / Attribution',
  '🎨 Outdated Brand Identity Hurting Pricing Power',
];

const BUDGET_TIERS_KES = [
  'KShs 15,000 – 25,000',
  'KShs 50,000 – 80,000',
  'KShs 80,000 – 100,000',
  'KShs 100,000+',
  'I need guidance',
];

const BUDGET_TIERS_USD = [
  '$150 – $400',
  '$400 – $800',
  '$800+',
  'I need guidance',
];

interface DiagnosticTabProps {
  clientName: string;
  clientPhone: string;
  onNameChange: (name: string) => void;
  onPhoneChange: (phone: string) => void;
  sendLead: (payload: LeadSubmissionPayload) => Promise<string | null>;
  onWhatsAppUrlGenerated: (url: string) => void;
  isSubmitting: boolean;
  lastRequestId: string;
}

export default function DiagnosticTab({
  clientName,
  clientPhone,
  onNameChange,
  onPhoneChange,
  sendLead,
  onWhatsAppUrlGenerated,
  isSubmitting,
  lastRequestId,
}: DiagnosticTabProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [currency, setCurrency] = useState<'KES' | 'USD'>('KES');
  const [step1HasErrors, setStep1HasErrors] = useState(false);

  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [selectedHurdles, setSelectedHurdles] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [hasSubmittedDiagnostic, setHasSubmittedDiagnostic] = useState(false);

  const activeBudgetTiers = currency === 'KES' ? BUDGET_TIERS_KES : BUDGET_TIERS_USD;

  const toggleHurdle = (hurdle: string) => {
    setSelectedHurdles((prevHurdles) =>
      prevHurdles.includes(hurdle)
        ? prevHurdles.filter((item) => item !== hurdle)
        : [...prevHurdles, hurdle]
    );
  };

  const handleDiagnosticSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone || !email || !companyName) return;

    const requestId = await sendLead({
      intent: 'diagnostic',
      name: clientName,
      companyName,
      website,
      phone: clientPhone,
      email,
      budget: `${selectedBudget || 'Not specified'} (${currency})`,
      painPoints: selectedHurdles,
      message: projectNotes,
    });

    const formattedMessage = formatDiagnosticMessage({
      refId: requestId || 'GFM-PENDING',
      name: clientName,
      company: companyName,
      website,
      phone: clientPhone,
      email,
      budget: selectedBudget,
      currency,
      hurdles: selectedHurdles,
      notes: projectNotes,
    });

    const targetUrl = buildWhatsAppUrl(formattedMessage);
    onWhatsAppUrlGenerated(targetUrl);

    if (requestId) {
      setHasSubmittedDiagnostic(true);
    }
  };

  return (
    <div className="card-brand p-8 lg:p-12 border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xl rounded-2xl">
      {hasSubmittedDiagnostic ? (
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
            Thank you, <strong className="text-[var(--text-core)]">{clientName}</strong>. We will
            review your enquiry for <strong className="text-[var(--text-core)]">{companyName}</strong>.
          </p>
          <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-subtle)] max-w-md mx-auto mb-6 text-xs text-[var(--text-muted)] text-left font-mono space-y-2">
            <p>
              📌 <strong>Status:</strong> Accepted by our email provider; delivery pending.
            </p>
            <p>
              📬 <strong>Delivery:</strong> We will follow up at{' '}
              <span className="text-[var(--accent-gold)]">{email}</span> to agree the next steps.
            </p>
            <p>
              📞 <strong>Need Urgent Support?</strong> Direct line:{' '}
              <a
                href={`tel:+${SITE_CONFIG.WHATSAPP_NUMBER}`}
                className="text-[var(--accent-gold)] font-bold underline"
              >
                {SITE_CONFIG.PHONE_DISPLAY}
              </a>
            </p>
          </div>
          <button
            onClick={() => {
              setHasSubmittedDiagnostic(false);
              setCurrentStep(1);
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
              <span className="text-eyebrow text-xs font-mono block mb-1">PROJECT DETAILS</span>
              <h2 className="text-2xl font-black tracking-tight text-[var(--text-core)]">
                Tell us about your project
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((stepNum) => (
                <div
                  key={stepNum}
                  onClick={() => setCurrentStep(stepNum as 1 | 2 | 3)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs cursor-pointer transition-all ${
                    currentStep === stepNum
                      ? 'bg-[var(--accent-gold)] text-[#0D0D0D] font-bold shadow-sm'
                      : currentStep > stepNum
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
          {currentStep === 1 && (
            <div className="space-y-5">
              <h3 className="text-base font-bold text-[var(--text-core)] mb-2">
                Step 1: Your Business Profile
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="min-w-0">
                  <label className="field-label" htmlFor="diagName">
                    Full name
                  </label>
                  <input
                    id="diagName"
                    autoComplete="name"
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => {
                      onNameChange(e.target.value);
                      if (step1HasErrors) setStep1HasErrors(false);
                    }}
                    placeholder="Your Full Name *"
                    className={`p-3.5 rounded-xl bg-[var(--bg-primary)] border text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] ${
                      step1HasErrors && !clientName
                        ? 'border-red-500 bg-red-500/5'
                        : 'border-[var(--border-subtle)]'
                    }`}
                  />
                </div>
                <div className="min-w-0">
                  <label className="field-label" htmlFor="diagCompany">
                    Business name
                  </label>
                  <input
                    id="diagCompany"
                    autoComplete="organization"
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                      if (step1HasErrors) setStep1HasErrors(false);
                    }}
                    placeholder="Business / Company Name *"
                    className={`p-3.5 rounded-xl bg-[var(--bg-primary)] border text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] ${
                      step1HasErrors && !companyName
                        ? 'border-red-500 bg-red-500/5'
                        : 'border-[var(--border-subtle)]'
                    }`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="min-w-0">
                  <label className="field-label" htmlFor="diagEmail">
                    Email
                  </label>
                  <input
                    id="diagEmail"
                    autoComplete="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (step1HasErrors) setStep1HasErrors(false);
                    }}
                    placeholder="Your Business Email *"
                    className={`p-3.5 rounded-xl bg-[var(--bg-primary)] border text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] ${
                      step1HasErrors && !email
                        ? 'border-red-500 bg-red-500/5'
                        : 'border-[var(--border-subtle)]'
                    }`}
                  />
                </div>
                <div className="min-w-0">
                  <label className="field-label" htmlFor="diagPhone">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="diagPhone"
                    autoComplete="tel"
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => {
                      onPhoneChange(e.target.value);
                      if (step1HasErrors) setStep1HasErrors(false);
                    }}
                    placeholder="Phone / WhatsApp Number *"
                    className={`p-3.5 rounded-xl bg-[var(--bg-primary)] border text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] ${
                      step1HasErrors && !clientPhone
                        ? 'border-red-500 bg-red-500/5'
                        : 'border-[var(--border-subtle)]'
                    }`}
                  />
                </div>
              </div>
              <div className="min-w-0">
                <label className="field-label" htmlFor="diagWebsite">
                  Website or social profile
                </label>
                <input
                  id="diagWebsite"
                  autoComplete="url"
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Website or Social Link (e.g. https://yourbusiness.co.ke)"
                  className="w-full p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)]"
                />
              </div>

              {step1HasErrors && (
                <p className="text-xs font-mono text-red-400 bg-red-500/10 border border-red-500/20 p-2.5 rounded-lg">
                  ⚠️ Please provide your full name, company, email, and phone/WhatsApp to continue.
                </p>
              )}

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (!clientName || !companyName || !email || !clientPhone) {
                      setStep1HasErrors(true);
                      return;
                    }
                    setStep1HasErrors(false);
                    setCurrentStep(2);
                  }}
                  className="btn-primary text-xs py-3 px-8"
                >
                  Continue to Step 2: Key Hurdles →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: OPERATIONAL HURDLES */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <h3 className="text-base font-bold text-[var(--text-core)] mb-2">
                Step 2: What Are Your Core Operational Bottlenecks?
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-light">
                Select all that currently apply to your business:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HURDLE_OPTIONS.map((hurdle, idx) => {
                  const isSelected = selectedHurdles.includes(hurdle);
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => toggleHurdle(hurdle)}
                      className={`p-4 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[var(--accent-gold)]/10 border-[var(--accent-gold)] text-[var(--text-core)] shadow-sm'
                          : 'bg-[var(--bg-primary)]/40 border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-gold)]/30'
                      }`}
                    >
                      <span>{hurdle}</span>
                      <span className="text-sm font-bold ml-2">{isSelected ? '✓' : '+'}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="btn-outline text-xs py-2.5 px-6"
                >
                  ← Back to Step 1
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="btn-primary text-xs py-3 px-8"
                >
                  Continue to Step 3: Budget &amp; Scope →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SME BUDGET CALIBRATION */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[var(--text-core)]">
                  Step 3: SME Budget Band &amp; Additional Context
                </h3>
                <div className="inline-flex rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-1 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrency('KES');
                      setSelectedBudget('');
                    }}
                    className={`px-3 py-1 rounded transition-all ${
                      currency === 'KES'
                        ? 'bg-[var(--accent-gold)] text-[#0D0D0D] font-bold'
                        : 'text-[var(--text-muted)]'
                    }`}
                  >
                    KES
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrency('USD');
                      setSelectedBudget('');
                    }}
                    className={`px-3 py-1 rounded transition-all ${
                      currency === 'USD'
                        ? 'bg-[var(--accent-gold)] text-[#0D0D0D] font-bold'
                        : 'text-[var(--text-muted)]'
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
                <div className="min-w-0">
                  <label className="field-label" htmlFor="diagNotes">
                    Project notes
                  </label>
                  <textarea
                    id="diagNotes"
                    autoComplete="off"
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    rows={3}
                    placeholder="e.g. We want to stop relying on Booking.com for 80% of our guests and need direct M-Pesa bookings..."
                    className="w-full p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] leading-relaxed"
                  />
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
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
  );
}
