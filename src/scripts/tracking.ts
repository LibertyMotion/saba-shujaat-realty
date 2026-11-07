/**
 * Tracking helpers. Every event goes to the GTM/GA4 dataLayer; if the Meta
 * Pixel or gtag were loaded directly (via env IDs) they are called too.
 * Use EITHER Google Tag Manager OR the direct IDs for a given tool, not both,
 * or conversions will double count. See README → "Ads & tracking".
 */
declare global {
  interface Window {
    dataLayer: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    __SS_TRACKING__?: { googleAdsId?: string; googleAdsLeadLabel?: string };
  }
}

export const uuid = () =>
  (crypto as Crypto & { randomUUID?: () => string }).randomUUID?.() ||
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });

export function push(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Lead conversion: GA4 `generate_lead`, Meta `Lead` (with eventID for CAPI dedupe), Google Ads conversion. */
export function trackLead(leadType: string, formName: string, eventId: string) {
  push('generate_lead', { lead_type: leadType, form_name: formName, event_id: eventId });
  if (window.fbq) window.fbq('track', 'Lead', { content_name: leadType }, { eventID: eventId });
  const cfg = window.__SS_TRACKING__ || {};
  if (window.gtag) {
    window.gtag('event', 'generate_lead', { lead_type: leadType, form_name: formName, transport_type: 'beacon' });
    if (cfg.googleAdsId && cfg.googleAdsLeadLabel) {
      window.gtag('event', 'conversion', {
        send_to: `${cfg.googleAdsId}/${cfg.googleAdsLeadLabel}`,
        transaction_id: eventId,
      });
    }
  }
}

/** Click-to-call / text / email taps are tracked as contact micro-conversions. */
export function bindContactClicks() {
  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const location = a.dataset.trackLocation || 'unspecified';
    let method = '';
    if (href.startsWith('tel:')) method = 'phone';
    else if (href.startsWith('sms:')) method = 'sms';
    else if (href.startsWith('mailto:')) method = 'email';
    else if (a.dataset.track === 'booking') method = 'booking';
    if (!method) return;
    push('contact_click', { contact_method: method, click_location: location });
    if (window.fbq) window.fbq('track', 'Contact', { content_name: method });
    if (window.gtag) window.gtag('event', 'contact_click', { contact_method: method, click_location: location });
  });
}
