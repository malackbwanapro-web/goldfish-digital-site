'use client';

import { useState, useEffect } from 'react';
import { bookingOptions, validBooking } from '@/lib/booking';
import { formatStrategyCallMessage } from '@/lib/formatters';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import type { LeadSubmissionPayload } from '@/lib/leads-api';

interface StrategyCallTabProps {
  clientName: string;
  clientPhone: string;
  discussionTopic: string;
  onNameChange: (name: string) => void;
  onPhoneChange: (phone: string) => void;
  onTopicChange: (topic: string) => void;
  sendLead: (payload: LeadSubmissionPayload) => Promise<string | null>;
  onWhatsAppUrlGenerated: (url: string) => void;
  onSubmissionError: (error: string) => void;
  isSubmitting: boolean;
  lastRequestId: string;
}

export default function StrategyCallTab({
  clientName,
  clientPhone,
  discussionTopic,
  onNameChange,
  onPhoneChange,
  onTopicChange,
  sendLead,
  onWhatsAppUrlGenerated,
  onSubmissionError,
  isSubmitting,
  lastRequestId,
}: StrategyCallTabProps) {
  const [email, setEmail] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [hasBookedSlot, setHasBookedSlot] = useState(false);
  const [dateOptions, setDateOptions] = useState<ReturnType<typeof bookingOptions>>([]);

  useEffect(() => {
    const refreshDateOptions = () => setDateOptions(bookingOptions());
    refreshDateOptions();
    const intervalTimer = setInterval(refreshDateOptions, 60_000);
    return () => clearInterval(intervalTimer);
  }, []);

  const availableTimeSlots =
    dateOptions.find((option) => option.id === selectedDay)?.slots || [];

  const handleSlotBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !clientName ||
      !clientPhone ||
      !email ||
      !selectedTime ||
      !validBooking(selectedDay, selectedTime)
    ) {
      onSubmissionError(
        'Please choose a future preferred day and time during business hours.'
      );
      return;
    }

    const requestId = await sendLead({
      intent: 'strategy_call',
      name: clientName,
      phone: clientPhone,
      email,
      selectedDay,
      selectedTimeSlot: `${selectedTime} (EAT)`,
      serviceInterest: discussionTopic,
    });

    const formattedMessage = formatStrategyCallMessage({
      refId: requestId || 'GFM-PENDING',
      name: clientName,
      phone: clientPhone,
      email,
      date: selectedDay,
      timeSlot: selectedTime,
      topic: discussionTopic,
    });

    const targetUrl = buildWhatsAppUrl(formattedMessage);
    onWhatsAppUrlGenerated(targetUrl);

    if (requestId) {
      setHasBookedSlot(true);
    }
  };

  return (
    <div className="card-brand p-8 lg:p-12 border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xl rounded-2xl">
      {hasBookedSlot ? (
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
            Thank you, <strong className="text-[var(--text-core)]">{clientName}</strong>. Your
            request for{' '}
            <span className="text-[var(--accent-gold)] font-mono font-bold">
              {selectedDay} at {selectedTime} (EAT)
            </span>{' '}
            has been accepted by our email provider for delivery. It is not a confirmed
            appointment.
          </p>
          <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-subtle)] max-w-md mx-auto mb-6 text-xs text-[var(--text-muted)] text-left font-mono space-y-2">
            <p>
              📌 <strong>Status:</strong> Email delivery pending; our team will confirm availability.
            </p>
            <p>
              ℹ️ <strong>Note:</strong> Strategy slots are pending confirmation by our team. If
              WhatsApp did not open, we will contact you at{' '}
              <span className="text-[var(--text-core)]">{email}</span> or{' '}
              <span className="text-[var(--text-core)]">{clientPhone}</span>.
            </p>
          </div>
          <button
            onClick={() => setHasBookedSlot(false)}
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
              No sales pitch. A focused 15-minute diagnostic session with our technical team to
              analyze your website latency, booking engine friction, or AI automation scope.
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
                  onClick={() => {
                    setSelectedDay(opt.id);
                    setSelectedTime(null);
                  }}
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
                  <span className="text-xs text-[var(--text-muted)] font-mono">{opt.sub}</span>
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
              {availableTimeSlots.map((slot) => (
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
              <div className="min-w-0">
                <label className="field-label" htmlFor="calName">
                  Full name
                </label>
                <input
                  id="calName"
                  autoComplete="name"
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => onNameChange(e.target.value)}
                  placeholder="Your Full Name *"
                  className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent-gold)]"
                />
              </div>
              <div className="min-w-0">
                <label className="field-label" htmlFor="calPhone">
                  Phone / WhatsApp
                </label>
                <input
                  id="calPhone"
                  autoComplete="tel"
                  type="tel"
                  required
                  value={clientPhone}
                  onChange={(e) => onPhoneChange(e.target.value)}
                  placeholder="WhatsApp / Phone Number *"
                  className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent-gold)]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className="field-label" htmlFor="calEmail">
                  Email
                </label>
                <input
                  id="calEmail"
                  autoComplete="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Corporate Email Address *"
                  className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent-gold)]"
                />
              </div>
              <div className="min-w-0">
                <label className="field-label" htmlFor="calTopic">
                  Discussion topic
                </label>
                <select
                  id="calTopic"
                  autoComplete="off"
                  value={discussionTopic}
                  onChange={(e) => onTopicChange(e.target.value)}
                  className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-core)] focus:outline-none focus:border-[var(--accent-gold)]"
                >
                  <option value="Direct Booking Engine">Direct Booking Engine / OTA Leak</option>
                  <option value="WhatsApp AI Automation">WhatsApp AI Customer Assistant</option>
                  <option value="Local SEO & Google Maps">Local SEO & Google Maps Visibility</option>
                  <option value="High-Speed Web Replatforming">Next.js Web Replatforming</option>
                  <option value="Websites for growing businesses">Website project</option>
                  <option value="Social media management">Social media management</option>
                  <option value="Photography &amp; video content">Photography &amp; video content</option>
                  <option value="General Digital Strategy">General Digital Systems Strategy</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              Submit your request, then optionally continue in WhatsApp. Availability requires
              confirmation.
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
  );
}
