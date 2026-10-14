'use client';

import { useState } from 'react';
import { TYPEBOT_CONFIG } from '@/lib/typebot';
import { formatTypebotScopeMessage } from '@/lib/formatters';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { isValidContactName, isValidPhoneNumber, isValidEmail } from '@/lib/validators';
import TypebotStandard from './TypebotStandard';

interface TypebotEstimatorProps {
  onScopeComplete?: (scope: Record<string, unknown>) => void;
  className?: string;
}

export default function TypebotEstimator({ className = '' }: TypebotEstimatorProps) {
  // Mode toggle: Interactive Scope Calculator vs. Live Conversational AI Chat
  const [viewMode, setViewMode] = useState<'calculator' | 'liveChat'>('calculator');

  // Calculator State
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('hospitality');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'Direct Booking FinTech (PesaPal / M-Pesa / Card)',
    'Beds24 Two-Way Calendar Sync (0% collisions)',
    'In-Villa PWA Digital Concierge',
  ]);
  const [timeline, setTimeline] = useState<string>('Standard (14–21 days)');
  const [clientName, setClientName] = useState<string>('');
  const [clientCompany, setClientCompany] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<boolean>(false);

  // Active industry archetype
  const currentIndustry =
    TYPEBOT_CONFIG.ESTIMATOR_INDUSTRIES.find((ind) => ind.id === selectedIndustryId) ||
    TYPEBOT_CONFIG.ESTIMATOR_INDUSTRIES[0];

  const handleIndustryChange = (id: string) => {
    setSelectedIndustryId(id);
    const ind = TYPEBOT_CONFIG.ESTIMATOR_INDUSTRIES.find((item) => item.id === id);
    if (ind) {
      // Pre-select the top 3 features by default for instant gratification
      setSelectedModules(ind.features.slice(0, 3));
    }
  };

  const toggleModule = (feature: string) => {
    if (selectedModules.includes(feature)) {
      setSelectedModules(selectedModules.filter((item) => item !== feature));
    } else {
      setSelectedModules([...selectedModules, feature]);
    }
  };

  const handleWhatsAppHandoff = () => {
    const formatted = formatTypebotScopeMessage({
      industry: currentIndustry.label,
      scopeItems: selectedModules,
      name: clientName,
      company: clientCompany,
      phone: clientPhone,
      email: clientEmail,
      timeline,
      notes,
    });
    const url = buildWhatsAppUrl(formatted);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleBackendSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate name and at least one contact channel (phone or email)
    if (!isValidContactName(clientName) || (!clientPhone && !clientEmail)) {
      setValidationErrors(true);
      return;
    }
    if (clientPhone && !isValidPhoneNumber(clientPhone)) {
      setErrorMessage('Please enter a valid phone number (e.g. +254 711 404 755 or 0711404755).');
      return;
    }
    if (clientEmail && !isValidEmail(clientEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setValidationErrors(false);

    try {
      // Generate standard RFC-4122 v4 UUID for idempotency
      const idempotencyKey =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
              (
                +c ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
              ).toString(16)
            );

      const payload = {
        intent: 'typebot_estimator',
        name: clientName.trim(),
        companyName: clientCompany.trim(),
        phone: clientPhone.trim(),
        email: clientEmail.trim(),
        serviceInterest: `${currentIndustry.label} — ${timeline}`,
        message: [
          `Selected Modules: ${selectedModules.join(', ')}`,
          notes ? `Additional Notes: ${notes.trim()}` : '',
        ]
          .filter(Boolean)
          .join('\n\n'),
      };

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'idempotency-key': idempotencyKey,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        setSubmittedRefId(data.requestId || 'GFM-ACCEPTED');
      } else {
        const errorData = await res.json().catch(() => ({}));
        setErrorMessage(
          errorData.message ||
            'Submission could not be completed at this moment. You can hand off directly via WhatsApp below.'
        );
      }
    } catch {
      setErrorMessage(
        'Network error during submission. Please continue directly on WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl p-6 lg:p-10 ${className}`}
    >
      {/* ── HEADER & MODE TOGGLE ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--border-subtle)]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>⚡ Interactive Project Estimator</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-core)]">
            Tailor Your Project Scope in 60 Seconds
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light mt-1">
            Select your industry archetype, toggle custom FinTech/booking modules, and get an immediate WhatsApp brief.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono self-start sm:self-center">
          <button
            type="button"
            onClick={() => setViewMode('calculator')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'calculator'
                ? 'bg-[var(--accent-gold)] text-[#0D0D0D] font-bold shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
            }`}
          >
            📋 Scope Matrix
          </button>
          <button
            type="button"
            onClick={() => setViewMode('liveChat')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'liveChat'
                ? 'bg-[var(--accent-gold)] text-[#0D0D0D] font-bold shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
            }`}
          >
            🤖 Conversational AI
          </button>
        </div>
      </div>

      {/* ── LIVE CHAT EMBED VIEW ── */}
      {viewMode === 'liveChat' ? (
        <div>
          <TypebotStandard height="580px" />
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setViewMode('calculator')}
              className="text-xs font-mono text-[var(--accent-gold)] hover:underline inline-flex items-center gap-1"
            >
              <span>← Return to modular scope matrix</span>
            </button>
          </div>
        </div>
      ) : submittedRefId ? (
        /* ── SUBMISSION SUCCESS STATE ── */
        <div className="py-8 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center justify-center text-3xl mx-auto mb-4">
            ✓
          </div>
          <h4 className="text-xl font-bold text-[var(--text-core)] mb-2">
            Scope Submitted Successfully!
          </h4>
          <p className="text-xs font-mono text-[var(--accent-gold)] mb-4">
            Reference ID: {submittedRefId}
          </p>
          <p className="text-sm text-[var(--text-muted)] mb-6">
            We have captured your tailored project scope. Our senior engineering desk will review the technical requirements and follow up within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppHandoff}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <span>Continue in WhatsApp with Founder →</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setSubmittedRefId(null);
                setClientName('');
                setClientPhone('');
                setClientEmail('');
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-core)]"
            >
              Adjust Scope
            </button>
          </div>
        </div>
      ) : (
        /* ── INTERACTIVE CALCULATOR VIEW ── */
        <form onSubmit={handleBackendSubmission} className="space-y-8">
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
              ⚠️ {errorMessage}
            </div>
          )}

          {/* STEP 1: INDUSTRY ARCHETYPE */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[var(--accent-gold)] font-bold mb-3">
              Step 1: Select Your Business Archetype
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {TYPEBOT_CONFIG.ESTIMATOR_INDUSTRIES.map((ind) => {
                const isSelected = selectedIndustryId === ind.id;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => handleIndustryChange(ind.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 shadow-md ring-1 ring-[var(--accent-gold)]'
                        : 'border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[var(--accent-gold)]/40'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-[var(--text-core)] mb-1">
                        {ind.label}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] line-clamp-2">
                        {ind.subtitle}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {ind.features.length} modules
                      </span>
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                          isSelected
                            ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)] text-black font-bold'
                            : 'border-[var(--border-subtle)]'
                        }`}
                      >
                        {isSelected && '✓'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: TECHNICAL MODULES SELECTION */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-[var(--accent-gold)] font-bold">
                Step 2: Technical Modules &amp; Growth Automations
              </label>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {selectedModules.length} selected
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentIndustry.features.map((feature, idx) => {
                const isChecked = selectedModules.includes(feature);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleModule(feature)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${
                      isChecked
                        ? 'bg-[var(--accent-gold)]/10 border-[var(--accent-gold)] text-[var(--text-core)] shadow-sm'
                        : 'bg-[var(--bg-primary)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-gold)]/30'
                    }`}
                  >
                    <span className="pr-2">{feature}</span>
                    <span
                      className={`w-5 h-5 rounded-md border flex items-center justify-center font-bold text-xs shrink-0 ${
                        isChecked
                          ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)] text-black'
                          : 'border-[var(--border-subtle)] bg-[var(--bg-surface)]'
                      }`}
                    >
                      {isChecked ? '✓' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3: TIMELINE SELECTOR */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[var(--accent-gold)] font-bold mb-3">
              Step 3: Target Launch Timeline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: '⚡ Urgent Sprint', sub: 'Under 14 Days', val: 'Urgent (Under 14 days)' },
                { label: '🎯 Standard Sprint', sub: '14–21 Days Turnaround', val: 'Standard (14–21 days)' },
                { label: '🌊 Multi-Phase', sub: 'Flexible Architecture', val: 'Flexible / Multi-Phase' },
              ].map((t, idx) => {
                const isSelected = timeline === t.val;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setTimeline(t.val)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 text-[var(--text-core)]'
                        : 'border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-muted)] hover:border-[var(--accent-gold)]/30'
                    }`}
                  >
                    <div className="text-xs font-bold font-mono text-[var(--text-core)]">{t.label}</div>
                    <div className="text-[11px] text-[var(--text-muted)] mt-0.5">{t.sub}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 4: CONTACT & HANDOFF */}
          <div className="border-t border-[var(--border-subtle)] pt-6">
            <label className="block text-xs font-mono uppercase tracking-wider text-[var(--accent-gold)] font-bold mb-3">
              Step 4: Contact &amp; Brief Delivery
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. David Miller"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border text-xs text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] ${
                    validationErrors && !isValidContactName(clientName)
                      ? 'border-red-500'
                      : 'border-[var(--border-subtle)]'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                  Company / Property Name
                </label>
                <input
                  type="text"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  placeholder="e.g. Diani Luxury Cottages"
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="e.g. +254 711 404 755"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border text-xs text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)] ${
                    validationErrors && !clientPhone && !clientEmail
                      ? 'border-red-500'
                      : 'border-[var(--border-subtle)]'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="e.g. david@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)]"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                Specific Objectives or Technical Requirements (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Need two-way calendar sync with Beds24, multi-language pages for Italian guests, and PesaPal checkout."
                className="w-full px-4 py-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)]"
              />
            </div>

            {/* DUAL ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={handleWhatsAppHandoff}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg order-2 sm:order-1"
              >
                <span>💬 Hand Off Scope via WhatsApp</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[var(--accent-gold)] hover:brightness-110 text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg order-1 sm:order-2"
              >
                {isSubmitting ? (
                  <span>Submitting Scope...</span>
                ) : (
                  <span>Send Scope to Strategy Desk →</span>
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
