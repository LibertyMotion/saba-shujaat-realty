# Saba Shujaat Real Estate: website

A personal-brand and lead-generation website for **Saba Shujaat** (Westerville, Ohio), built to rank locally and to be the landing destination for Google and Meta ad campaigns.

- **Stack:** [Astro](https://astro.build) (static output), Tailwind CSS v4, self-hosted fonts (Cormorant Garamond + Manrope). No client framework. One small, fast JS bundle.
- **Look:** "warm modern luxury": ivory, deep navy, muted gold.
- **Status:** design, functionality, Saba's bio, headshot, credentials and real Zillow reviews are all in. **Still needed:** a high-res headshot, broker sign-off, and the domain and hosting setup. Everything in yellow is a placeholder. See [`docs/CONTENT-CHECKLIST.md`](docs/CONTENT-CHECKLIST.md).

## What's included

| Area | Pages |
|---|---|
| Brand | Home, About, Reviews, Contact |
| Sellers | Sell, Home Value (two-step valuation form) |
| Buyers | Buy (two-step listing-alert form), Listings (IDX-ready slot), Free Guides |
| Local SEO | Communities hub + 12 community pages (Westerville, Powell, Delaware, Sunbury, Gahanna, Hilliard, Dublin, Lewis Center, Genoa Twp, Galena, New Albany, Worthington) |
| Ads | `/lp/home-value/` and `/lp/buyers/`: no navigation, form above the fold, noindex |
| Conversion | `/thank-you/{home-value,buyer,guide,market-report,contact}/`: noindex, each with a next step |
| Legal | Privacy, SMS Terms, Terms, Accessibility, Fair Housing, 404 |

**Lead plumbing:**
- Every form captures UTMs and click IDs (gclid, fbclid, …), first touch, landing page, `fbp`/`fbc` cookies, a unique `event_id` for Meta dedupe, and the SMS consent version and timestamp.
- Submissions go to Netlify Forms by default, or to any endpoint you choose.
- Tracking events are documented in [`docs/ADS-PLAYBOOK.md`](docs/ADS-PLAYBOOK.md).

**SEO:**
- per-page titles and descriptions
- canonical URLs
- Open Graph image
- `RealEstateAgent` + `BreadcrumbList` JSON-LD
- sitemap
- robots.txt

**Compliance built in** (broker to confirm):
- brokerage name as prominent as Saba's on every page (Ohio)
- "Each Office Independently Owned and Operated" (RE/MAX)
- Equal Housing Opportunity
- optional, unchecked TCPA consent
- fair-housing-safe community copy

**Accessibility:** WCAG 2.1 AA target. All main templates pass axe-core automated checks. Keyboard-friendly, visible focus, reduced-motion support.

## Quick start

Requires Node 22+.

```bash
npm install
```

```bash
npm run dev            # http://localhost:4321
```

```bash
npm run build          # outputs to dist/
```

```bash
npm run check:content  # lists placeholders still to replace (run after build)
```

## Editing content
- **Saba's details, brokerage, stats, promises:** `src/config/site.ts`. Anything wrapped in `todo('…')` is a placeholder.
- **Reviews:** `src/data/testimonials.ts` (real reviews only; add `rating: 5` to show stars)
- **Communities:** `src/data/communities.ts`
- **FAQs:** `src/data/faqs.ts`
- **About story:** `src/pages/about.astro`
- **Colors and fonts:** the `@theme` block in `src/styles/global.css`

### Replacing the headshot
Overwrite `src/assets/saba-headshot.png` with the original high-resolution photo (portrait, at least 1200 px tall). If it's a .jpg, update the import at the top of `src/config/site.ts`. Astro generates optimized responsive sizes automatically.

## Preview (before the domain is live)
A preview copy is published with GitHub Pages at **https://libertymotion.github.io/saba-shujaat-realty/**:
- It shows a "Preview" banner.
- It's hidden from search engines (noindex).
- Its forms don't send anything, so no real inquiry gets lost before lead routing is set up.

To update the preview after changes:

```bash
npm run deploy:preview
```

This builds the preview and pushes it to the `gh-pages` branch. In the repo's **Settings → Pages**, the source must be *Deploy from a branch → gh-pages / (root)*.

## Deploying (Netlify recommended)
1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import from Git**. The build settings come from `netlify.toml`.
3. Set environment variables (see `.env.example`). At minimum, `SITE_URL=https://www.your-domain.com`.
4. Connect the custom domain, then Forms → enable form detection and set up notifications.

Cloudflare Pages or Vercel also work. On those hosts, set `PUBLIC_FORM_ENDPOINT` (e.g. Formspree, or a CRM/Zapier webhook), because Netlify Forms is Netlify-only.

### Adding MLS search (IDX) later
Paste the vendor's embed code into the marked `IDX SLOT` in `src/pages/listings.astro`. Optionally add it to the community pages too. Ask Saba's RE/MAX office first whether MAX/Tech (BoldTrail) already includes an IDX feed.

## Docs
- [`docs/RESEARCH.md`](docs/RESEARCH.md): what makes agent websites convert, with sources
- [`docs/ADS-PLAYBOOK.md`](docs/ADS-PLAYBOOK.md): GTM, GA4, Google Ads and Meta Pixel/CAPI setup, plus campaign structure
- [`docs/CONTENT-CHECKLIST.md`](docs/CONTENT-CHECKLIST.md): everything to gather and verify before launch
