// Deliberately excludes contact details, messages, budget, IDs and query strings.
export function trackContactEvent(event: 'lead_request_accepted' | 'contact_channel_click', channel: string) {
  if (typeof window === 'undefined') return;
  const allowed = ['whatsapp_quick_chat', 'strategy_call', 'diagnostic', 'whatsapp', 'phone', 'email'];
  if (!allowed.includes(channel)) return;
  const analyticsWindow = window as Window & { gtag?: (...args: unknown[]) => void };
  analyticsWindow.gtag?.('event', event, { contact_channel: channel, page_path: window.location.pathname });
}
