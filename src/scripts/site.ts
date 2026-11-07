import { captureAttribution } from './attribution';
import { bindContactClicks } from './tracking';
import { initForms } from './forms';

captureAttribution();
bindContactClicks();
initForms();

// Mobile navigation disclosure
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const panel = document.getElementById('mobile-nav');
if (toggle && panel) {
  const set = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    document.documentElement.classList.toggle('overflow-hidden', open);
    toggle.querySelector('[data-icon-open]')?.classList.toggle('hidden', open);
    toggle.querySelector('[data-icon-close]')?.classList.toggle('hidden', !open);
  };
  toggle.addEventListener('click', () => set(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      set(false);
      toggle.focus();
    }
  });
  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
}

// Header shadow once the page scrolls
const header = document.querySelector<HTMLElement>('[data-site-header]');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Reveal-on-scroll (CSS only applies when reduced motion is not requested)
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  revealEls.forEach((el) => io.observe(el));
} else revealEls.forEach((el) => el.classList.add('is-visible'));
