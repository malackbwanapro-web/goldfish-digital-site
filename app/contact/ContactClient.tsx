'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { trackContactEvent } from '@/lib/contact-analytics';
import { getServiceOffer } from '@/lib/service-offers';
import { submitLead, type LeadSubmissionPayload } from '@/lib/leads-api';
import { TypebotEstimator } from '@/app/components/typebot';
import WhatsAppTab, { WA_PROMPT_CHIPS, type PromptChip } from './components/WhatsAppTab';
import StrategyCallTab from './components/StrategyCallTab';
import DiagnosticTab from './components/DiagnosticTab';

type ContactTabKey = 'whatsapp' | 'estimator' | 'calendar' | 'diagnostic';

export default function ContactClient() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<ContactTabKey>('whatsapp');

  // Shared contact identity across forms
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  // Topic and messaging state
  const [discussionTopic, setDiscussionTopic] = useState('Website or digital marketing project');
  const [calendarTopic, setCalendarTopic] = useState('General Digital Strategy');
  const [customMessage, setCustomMessage] = useState(
    'Hi Malack, I would like to discuss a website or digital marketing project for my business.'
  );

  // Submission & feedback state
  const [lastRequestId, setLastRequestId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const feedbackRef = useRef<HTMLDivElement>(null);
  const isSubmittingRef = useRef(false);
  const trackedRequestsRef = useRef(new Set<string>());
  const cachedPayloadKeyRef = useRef({ payload: '', key: '' });

  // Pre-hydrate state from URL query parameters
  useEffect(() => {
    const tier = searchParams.get('tier');
    const topicParam = searchParams.get('topic');
    const messageParam = searchParams.get('message');
    const selectedServiceOffer = getServiceOffer(searchParams.get('service'));

    if (tier === 'tier-01') {
      const chip = WA_PROMPT_CHIPS[0];
      setDiscussionTopic(chip.label);
      setCustomMessage(chip.text);
      setCalendarTopic('High-Speed Web Replatforming');
    } else if (tier === 'tier-02') {
      const chip = WA_PROMPT_CHIPS[1];
      setDiscussionTopic(chip.label);
      setCustomMessage(chip.text);
      setCalendarTopic('General Digital Strategy');
    } else if (tier === 'tier-03') {
      const chip = WA_PROMPT_CHIPS[2];
      setDiscussionTopic(chip.label);
      setCustomMessage(chip.text);
      setCalendarTopic('WhatsApp AI Automation');
    }

    if (selectedServiceOffer) {
      setDiscussionTopic(selectedServiceOffer.title);
      setCustomMessage(selectedServiceOffer.message);
      setCalendarTopic(selectedServiceOffer.title);
    }
    if (topicParam) {
      setDiscussionTopic(topicParam);
    }
    if (messageParam) {
      setCustomMessage(messageParam);
    }
    if (searchParams.get('tab') === 'estimator') {
      setActiveTab('estimator');
    }
  }, [searchParams]);

  // Accessibility: scroll and focus on feedback alerts/confirmations
  useEffect(() => {
    if (submissionError || whatsappUrl) {
      feedbackRef.current?.focus();
      feedbackRef.current?.scrollIntoView({ block: 'center' });
    }
  }, [submissionError, whatsappUrl]);

  const sendLeadToBackend = async (payload: LeadSubmissionPayload): Promise<string | null> => {
    if (isSubmittingRef.current) return null;

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setSubmissionError('');
    setWhatsappUrl('');
    setLastRequestId('');

    const serializedPayload = JSON.stringify(payload);
    if (cachedPayloadKeyRef.current.payload !== serializedPayload) {
      cachedPayloadKeyRef.current = { payload: serializedPayload, key: crypto.randomUUID() };
    }

    const result = await submitLead(payload, cachedPayloadKeyRef.current.key);

    if (result.success && result.requestId) {
      setLastRequestId(result.requestId);
      if (!trackedRequestsRef.current.has(result.requestId)) {
        trackContactEvent('lead_request_accepted', String(payload.intent));
        trackedRequestsRef.current.add(result.requestId);
      }
      isSubmittingRef.current = false;
      setIsSubmitting(false);
      return result.requestId;
    }

    setSubmissionError(
      'We could not confirm your email request. Your details are still here. Retry, or use the WhatsApp link below and press Send there.'
    );
    isSubmittingRef.current = false;
    setIsSubmitting(false);
    return null;
  };

  const handleChipSelect = (chip: PromptChip) => {
    setDiscussionTopic(chip.label);
    setCustomMessage(chip.text);
  };

  const currentServiceOffer = getServiceOffer(searchParams.get('service'));

  return (
    <div className="contact-intake max-w-5xl mx-auto w-full">
      {/* Feedback Banner */}
      <div ref={feedbackRef} tabIndex={-1} className="scroll-mt-24">
        {submissionError && (
          <p role="alert" className="p-4 mb-4 border border-red-500 rounded-lg">
            {submissionError}
          </p>
        )}
        {lastRequestId && (
          <p role="status" className="p-4 mb-4">
            Your request has been accepted by our email provider. Reference: {lastRequestId}. Delivery
            and appointment confirmation are still pending.
          </p>
        )}
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mb-6"
          >
            Continue in WhatsApp — press Send to send your message
          </a>
        )}
      </div>

      {/* Service Offer Banner */}
      {currentServiceOffer && (
        <div className="card-brand p-5 mb-6">
          <h2 className="text-lg font-bold">{currentServiceOffer.title}</h2>
          <p>
            {currentServiceOffer.price} · {currentServiceOffer.period}
          </p>
          <p className="text-sm mt-2">{currentServiceOffer.exclusions}</p>
        </div>
      )}

      {/* Quad-Modal Tab Switcher */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 p-1.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-md mb-10 max-w-3xl mx-auto">
        <button
          onClick={() => setActiveTab('whatsapp')}
          className={`py-3 px-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'whatsapp'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
          }`}
        >
          <span>💬</span>
          <span>1-Tap WhatsApp</span>
        </button>

        <button
          onClick={() => setActiveTab('estimator')}
          className={`py-3 px-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'estimator'
              ? 'bg-[var(--accent-gold)] text-[#0D0D0D] shadow-md'
              : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
          }`}
        >
          <span>⚡</span>
          <span>AI Estimator</span>
        </button>

        <button
          onClick={() => setActiveTab('calendar')}
          className={`py-3 px-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'calendar'
              ? 'bg-[var(--accent-gold)] text-[#0D0D0D] shadow-md'
              : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
          }`}
        >
          <span>📅</span>
          <span>15-Min Slot</span>
        </button>

        <button
          onClick={() => setActiveTab('diagnostic')}
          className={`py-3 px-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'diagnostic'
              ? 'bg-[var(--accent-gold)] text-[#0D0D0D] shadow-md'
              : 'text-[var(--text-muted)] hover:text-[var(--text-core)]'
          }`}
        >
          <span>🛡️</span>
          <span>Project enquiry</span>
        </button>
      </div>

      {/* Tab 1: 1-Tap Direct WhatsApp */}
      <div className={activeTab === 'whatsapp' ? 'block' : 'hidden'}>
        <WhatsAppTab
          clientName={clientName}
          clientPhone={clientPhone}
          topic={discussionTopic}
          customMessage={customMessage}
          onNameChange={setClientName}
          onPhoneChange={setClientPhone}
          onChipSelect={handleChipSelect}
          onCustomMessageChange={setCustomMessage}
          sendLead={sendLeadToBackend}
          onWhatsAppUrlGenerated={setWhatsappUrl}
          isSubmitting={isSubmitting}
        />
      </div>

      {/* Tab 2: Interactive AI Scope Estimator (Typebot) */}
      <div className={activeTab === 'estimator' ? 'block' : 'hidden'}>
        <TypebotEstimator />
      </div>

      {/* Tab 3: 15-Minute Strategy Slot */}
      <div className={activeTab === 'calendar' ? 'block' : 'hidden'}>
        <StrategyCallTab
          clientName={clientName}
          clientPhone={clientPhone}
          discussionTopic={calendarTopic}
          onNameChange={setClientName}
          onPhoneChange={setClientPhone}
          onTopicChange={setCalendarTopic}
          sendLead={sendLeadToBackend}
          onWhatsAppUrlGenerated={setWhatsappUrl}
          onSubmissionError={setSubmissionError}
          isSubmitting={isSubmitting}
          lastRequestId={lastRequestId}
        />
      </div>

      {/* Tab 4: 3-Step Confidential Project Enquiry */}
      <div className={activeTab === 'diagnostic' ? 'block' : 'hidden'}>
        <DiagnosticTab
          clientName={clientName}
          clientPhone={clientPhone}
          onNameChange={setClientName}
          onPhoneChange={setClientPhone}
          sendLead={sendLeadToBackend}
          onWhatsAppUrlGenerated={setWhatsappUrl}
          isSubmitting={isSubmitting}
          lastRequestId={lastRequestId}
        />
      </div>
    </div>
  );
}
