/**
 * Lead forms: inline validation, optional multi-step, attribution, submission
 * (Netlify Forms by default, or any endpoint set via PUBLIC_FORM_ENDPOINT),
 * conversion tracking and redirect to the offer's thank-you page.
 */
import { fillAttributionFields } from './attribution';
import { trackLead, uuid, push } from './tracking';

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const messageFor = (el: Control) => {
  const v = el.validity;
  const label = el.dataset.label || 'This field';
  if (v.valueMissing) return el.type === 'radio' ? `Please choose an option.` : `${label} is required.`;
  if (v.typeMismatch && el.type === 'email') return 'Enter an email like name@example.com.';
  if (v.patternMismatch && el.type === 'tel') return 'Enter a 10-digit phone number, like 614-555-0123.';
  if (v.tooShort) return `${label} looks too short.`;
  return el.validationMessage || 'Please check this field.';
};

function errorEl(el: Control) {
  const id = el.getAttribute('aria-describedby')?.split(' ').find((x) => x.endsWith('-error'));
  return id ? (document.getElementById(id) as HTMLElement | null) : null;
}

function showError(el: Control, msg: string) {
  el.setAttribute('aria-invalid', 'true');
  const err = errorEl(el) || (el.closest('fieldset')?.querySelector('.field-error[data-group]') as HTMLElement | null);
  if (err) {
    err.textContent = msg;
    err.hidden = false;
  }
}
function clearError(el: Control) {
  el.removeAttribute('aria-invalid');
  const err = errorEl(el) || (el.closest('fieldset')?.querySelector('.field-error[data-group]') as HTMLElement | null);
  if (err) {
    err.textContent = '';
    err.hidden = true;
  }
}

/** Validate all controls inside `scope`; returns the first invalid control or null. */
function validate(scope: Element): Control | null {
  let firstInvalid: Control | null = null;
  const seenRadio = new Set<string>();
  scope.querySelectorAll<Control>('input, select, textarea').forEach((el) => {
    if (el.type === 'hidden' || el.disabled || el.closest('[hidden]') || el.name === 'bot-field') return;
    if (el.type === 'radio') {
      if (seenRadio.has(el.name)) return;
      seenRadio.add(el.name);
    }
    if (el.type === 'tel' && el.value) el.value = el.value.trim();
    if (!el.checkValidity()) {
      showError(el, messageFor(el));
      firstInvalid ||= el;
    } else clearError(el);
  });
  return firstInvalid;
}

function initForm(form: HTMLFormElement) {
  form.noValidate = true; // we render accessible inline errors instead of browser bubbles
  const steps = Array.from(form.querySelectorAll<HTMLElement>('[data-step]'));
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const progress = form.querySelector<HTMLElement>('[data-step-progress]');
  let current = 0;

  // Prefill from query string (e.g. /home-value/?address=123+Main+St)
  const params = new URLSearchParams(window.location.search);
  form.querySelectorAll<HTMLInputElement>('[data-prefill]').forEach((el) => {
    const v = params.get(el.dataset.prefill!);
    if (v && !el.value) el.value = v.slice(0, 200);
  });

  const showStep = (i: number, focus = true) => {
    steps.forEach((s, idx) => (s.hidden = idx !== i));
    current = i;
    if (progress) progress.textContent = `Step ${i + 1} of ${steps.length}`;
    form.dataset.step = String(i + 1);
    if (focus) {
      const target = steps[i].querySelector<HTMLElement>('[data-step-heading]') || steps[i].querySelector<HTMLElement>('input, select, textarea');
      target?.focus({ preventScroll: false });
    }
  };
  if (steps.length > 1) {
    // If step 1 was prefilled (address from hero), jump straight to step 2.
    const firstStepPrefilled = steps[0].querySelector<HTMLInputElement>('[data-prefill]')?.value;
    showStep(firstStepPrefilled ? 1 : 0, false);
  }

  form.addEventListener('click', (e) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>('[data-next], [data-back]');
    if (!btn) return;
    e.preventDefault();
    if (btn.hasAttribute('data-next')) {
      const invalid = validate(steps[current]);
      if (invalid) return invalid.focus();
      push('form_step', { form_name: form.getAttribute('name'), step: current + 2 });
      showStep(Math.min(current + 1, steps.length - 1));
    } else showStep(Math.max(current - 1, 0));
  });

  // Clear errors as the user fixes them
  form.addEventListener('input', (e) => {
    const el = e.target as Control;
    if (el.getAttribute('aria-invalid') === 'true' && el.checkValidity()) clearError(el);
  });
  form.addEventListener('change', (e) => {
    const el = e.target as Control;
    if (el.type === 'radio' || el.type === 'checkbox') clearError(el);
  });

  let started = false;
  form.addEventListener('focusin', () => {
    if (started) return;
    started = true;
    push('form_start', { form_name: form.getAttribute('name') });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const invalid = validate(form);
    if (invalid) {
      const stepIdx = steps.findIndex((s) => s.contains(invalid));
      if (stepIdx >= 0 && stepIdx !== current) showStep(stepIdx, false);
      invalid.focus();
      return;
    }

    if (document.documentElement.dataset.preview === '1') {
      if (status) {
        status.hidden = false;
        const next = form.dataset.successUrl || '';
        status.innerHTML = `Preview only — this form isn’t connected yet, so nothing was sent. <a class="link-underline font-semibold" href="${next}">See the thank-you page</a>.`;
        status.focus();
      }
      return;
    }

    const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const label = submitBtn?.innerHTML;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.setAttribute('aria-busy', 'true');
      submitBtn.innerHTML = '<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" aria-hidden="true"></span> Sending…';
    }
    if (status) {
      status.hidden = true;
      status.textContent = '';
    }

    fillAttributionFields(form);
    const eventId = uuid();
    const consent = form.querySelector<HTMLInputElement>('input[name="sms_consent"]');
    const consentTs = form.elements.namedItem('consent_timestamp') as HTMLInputElement | null;
    if (consentTs) consentTs.value = consent?.checked ? new Date().toISOString() : '';
    const evIn = form.elements.namedItem('event_id') as HTMLInputElement | null;
    if (evIn) evIn.value = eventId;

    const data = new FormData(form);
    const isBot = Boolean(data.get('bot-field'));
    const endpoint = form.dataset.endpoint;

    try {
      if (!isBot) {
        const res = endpoint
          ? await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
          : await fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
            });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        trackLead(form.dataset.leadType || 'lead', form.getAttribute('name') || 'form', eventId);
      }
      try {
        const firstName = String(data.get('first_name') || data.get('name') || '').split(' ')[0];
        sessionStorage.setItem('ss_last_lead', JSON.stringify({ firstName, type: form.dataset.leadType }));
      } catch {}
      const next = form.dataset.successUrl || '/thank-you/contact/';
      setTimeout(() => (window.location.href = next), 350);
    } catch (err) {
      console.error('Lead form error', err);
      push('form_error', { form_name: form.getAttribute('name') });
      if (status) {
        status.hidden = false;
        status.innerHTML = form.dataset.errorHtml || 'Sorry — something went wrong sending your request. Please try again, or call or text directly.';
        status.focus();
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.removeAttribute('aria-busy');
        if (label) submitBtn.innerHTML = label;
      }
    }
  });
}

export function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-lead-form]').forEach(initForm);
}
