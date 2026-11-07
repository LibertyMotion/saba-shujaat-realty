/**
 * First-party ad attribution. Stores first-touch and last-touch campaign data
 * (UTMs + click IDs) in localStorage so every lead records where it came from,
 * independent of ad-platform restrictions. Values are written into the hidden
 * fields of each lead form on submit.
 */
const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'] as const;
const FIRST = 'ss_attr_first';
const LAST = 'ss_attr_last';

type Touch = Partial<Record<(typeof PARAMS)[number], string>> & {
  landing_page?: string;
  referrer?: string;
  ts?: string;
};

const read = (k: string): Touch | null => {
  try {
    return JSON.parse(localStorage.getItem(k) || 'null');
  } catch {
    return null;
  }
};
const write = (k: string, v: Touch) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {
    /* storage blocked — attribution just won't persist */
  }
};

export function getCookie(name: string) {
  const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/[.$?*|{}()[\]\\/+^]/g, '\\$&') + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : '';
}

export function captureAttribution() {
  const url = new URL(window.location.href);
  const touch: Touch = {};
  let hasCampaign = false;
  for (const p of PARAMS) {
    const v = url.searchParams.get(p);
    if (v) {
      touch[p] = v.slice(0, 200);
      hasCampaign = true;
    }
  }
  const externalReferrer = document.referrer && !document.referrer.startsWith(window.location.origin);
  const base: Touch = {
    ...touch,
    landing_page: url.pathname,
    referrer: externalReferrer ? document.referrer.slice(0, 300) : '',
    ts: new Date().toISOString(),
  };
  if (!read(FIRST)) write(FIRST, base);
  if (hasCampaign || externalReferrer) write(LAST, base);

  // Meta click ID cookie (the Pixel also sets this when loaded) — needed for Conversions API matching.
  const fbclid = touch.fbclid;
  if (fbclid && !getCookie('_fbc')) {
    const expires = new Date(Date.now() + 90 * 864e5).toUTCString();
    document.cookie = `_fbc=fb.1.${Date.now()}.${encodeURIComponent(fbclid)}; expires=${expires}; path=/; SameSite=Lax`;
  }
}

/** Fill a form's hidden attribution fields just before it's submitted. */
export function fillAttributionFields(form: HTMLFormElement) {
  const last = read(LAST) || read(FIRST) || {};
  const first = read(FIRST) || {};
  const set = (name: string, value: string | undefined) => {
    const el = form.elements.namedItem(name);
    if (el instanceof HTMLInputElement) el.value = value || '';
  };
  for (const p of PARAMS) set(p, last[p]);
  set('first_touch', [first.utm_source, first.utm_medium, first.utm_campaign, first.landing_page, first.referrer].filter(Boolean).join(' | '));
  set('landing_page', last.landing_page);
  set('referrer', last.referrer);
  set('page_url', window.location.href.split('#')[0]);
  set('fbp', getCookie('_fbp'));
  set('fbc', getCookie('_fbc'));
}
