/**
 * ============================================================================
 *  SITE CONTENT CONFIG — the single place to edit Saba's facts.
 * ============================================================================
 *  Anything wrapped in todo('...') is a placeholder that MUST be replaced with
 *  real, verified information before launch. It renders highlighted in yellow
 *  on the site, and `npm run check:content` lists every one still left.
 *
 *  Compliance reminders (see docs/RESEARCH.md §6):
 *  - Ohio (ORC 4735.16 / OAC 1301:5-1-02): the brokerage name must appear on
 *    every page at least as prominently as Saba's name. The header lockup and
 *    landing-page header do this automatically from `brokerage.name`.
 *  - RE/MAX: show the full office name + "Each Office Independently Owned and
 *    Operated". Only use the official RE/MAX logo files from the RE/MAX hub,
 *    approved by the broker — none are included here.
 * ============================================================================
 */

import headshotImg from '../assets/saba-headshot.png';

export const TODO_MARK = '⁣'; // invisible separator used to detect placeholders in built HTML
export const todo = (label: string) => `${TODO_MARK}[${label}]${TODO_MARK}`;
export const isTodo = (value: unknown) => typeof value === 'string' && value.includes(TODO_MARK);

export const agent = {
  name: 'Saba Shujaat',
  firstName: 'Saba',
  title: 'REALTOR®', // ABR®/RCC require NAR membership — confirm before launch
  licenseNumber: 'License #2012001243',
  phoneDisplay: '(614) 230-5225',
  phoneE164: '+16142305225',
  smsE164: '+16142305225', // mobile — used for "Text Saba" links
  email: 'sabashujaat41@gmail.com',
  emailHref: 'mailto:sabashujaat41@gmail.com',
  bookingUrl: '', // optional: Calendly / Google Calendar booking link — enables "Book a call" buttons
  // NOTE: current file is only 240×240 px — replace with the original high-resolution photo.
  headshot: headshotImg as null | ImageMetadata,
  languages: ['English', 'Urdu', 'Hindi'],
  yearsExperience: 14,
  yearsInPowell: 16,
  designations: [
    { code: 'ABR®', name: 'Accredited Buyer’s Representative' },
    { code: 'CNE', name: 'Certified Negotiation Expert' },
    { code: 'CNHS', name: todo('Certified New Home Specialist — confirm full name') },
    { code: 'RCC', name: 'Residential Construction Certified' },
  ],
  specialties: ['First-time buyers', 'New construction', 'Investment property'],
  civic: ['Children’s Miracle Network', 'School volunteer', 'YMCA / YWCA'],
  // Pull-quote on the home page — Saba's own words, from Saba's bio.
  philosophy:
    'My philosophy is to provide my clients with both enough time and enough education on the buying and selling process to help them make the best decision for their new beginnings.',
  shortBio:
    'For 14 years I’ve proudly served Central Ohio buyers and sellers — and I’ve called Powell home for 16. You can always expect open, honest, consistent communication, and the time and education to make the best decision for your new beginning — in English, Urdu or Hindi.',
  social: {
    zillow: 'https://www.zillow.com/profile/SabaShujaat',
    remax: 'https://www.remax.com/usa/en/real-estate-agents/saba-shujaat-westerville-oh/100042303',
    instagram: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    googleBusiness: '', // Google Business Profile URL once created
  },
};

export const brokerage = {
  // Office name as it appears on Saba's Ohio license — confirm exact registered form with the broker.
  name: 'RE/MAX Affiliates',
  disclaimer: 'Each Office Independently Owned and Operated.',
  street: '570 N State Street, Suite 110',
  city: 'Westerville',
  region: 'OH',
  postalCode: '43082',
  phoneDisplay: '(614) 891-1661',
  phoneE164: '+16148911661',
};

/** Headline stats in the trust bar. Leave `value` as todo() until verified; delete rows you don't want. */
export const stats: { value: string; label: string }[] = [
  { value: '14', label: 'Years in real estate' },
  { value: '16', label: 'Years living in Powell' },
  { value: '3', label: 'Languages: English, Urdu & Hindi' },
  { value: '41', label: 'Client reviews on Zillow' },
];

/**
 * Zillow review summary shown in the hero and on the Reviews page.
 * Set `rating` (e.g. '5.0') only once confirmed on Saba's Zillow profile.
 */
export const reviews = {
  zillowCount: 41,
  rating: null as null | string,
  /**
   * Optional auto-syncing reviews widget (Elfsight, JustReview, Poper, etc.).
   * Paste the provider's embed code here and it appears on the Reviews page.
   * Example: '<script src="https://static.elfsight.com/platform/platform.js" async></script><div class="elfsight-app-XXXX"></div>'
   * Note: these widgets copy Zillow's public profile — check Zillow's terms and the broker's policy first.
   */
  widgetHtml: '',
};

/** Service promises shown on the site — confirm Saba is comfortable committing to these. */
export const promises = {
  valuationTurnaround: 'within 24 hours',
  responseTime: 'the same business day',
};

export const site = {
  name: 'Saba Shujaat Real Estate',
  defaultTitle: 'Saba Shujaat | Westerville & Central Ohio Real Estate',
  defaultDescription:
    'Buy or sell a home in Westerville and Central Ohio with Saba Shujaat. Free personalized home value reports, new-listing alerts and local guidance from a trusted RE/MAX agent.',
  locale: 'en_US',
  ogImage: '/og-default.png',
  serviceAreaLabel: 'Westerville & Central Ohio',
  /** Bump when the consent wording below changes — stored with every lead. */
  consentVersion: '2026-11-v1',
};

export const nav = [
  { label: 'Buy', href: '/buy/' },
  { label: 'Sell', href: '/sell/' },
  { label: 'Home Value', href: '/home-value/' },
  { label: 'Communities', href: '/communities/' },
  { label: 'About', href: '/about/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Contact', href: '/contact/' },
];

/** Analytics / ads IDs come from environment variables (see .env.example). */
export const tracking = {
  gtmId: import.meta.env.PUBLIC_GTM_ID || '',
  ga4Id: import.meta.env.PUBLIC_GA4_ID || '',
  metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID || '',
  googleAdsId: import.meta.env.PUBLIC_GOOGLE_ADS_ID || '', // e.g. AW-123456789
  googleAdsLeadLabel: import.meta.env.PUBLIC_GOOGLE_ADS_LEAD_LABEL || '',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '', // empty = Netlify Forms
};

/** TCPA-style SMS/call consent. Optional, never pre-checked, not a condition of service. */
export const consentText = () =>
  `Yes, ${agent.name} and ${brokerage.name} may call and text me at the number above about my real estate inquiry, including by automated means. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of any purchase or service.`;
