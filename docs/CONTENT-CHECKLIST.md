# Launch checklist

Everything highlighted in yellow on the site is a placeholder. Run `npm run build && npm run check:content` to list what's left. **Nothing about Saba was invented.** Every fact, stat and review must come from Saba or from verified public profiles.

## A. From Saba (most of this lives in `src/config/site.ts`)
Already added (Nov 2026): headshot, bio and About story, license #2012001243, mobile (614) 230-5225, email, brokerage (RE/MAX Affiliates, 570 N State Street, Suite 110, Westerville, OH 43082, (614) 891-1661), languages (English, Urdu, Hindi), designations, specialties, civic activities, 14 years of experience, 16 years in Powell,, and 8 of Saba's 41 Zillow reviews (word for word).

Still needed:
- [ ] Confirm "RE/MAX Affiliates" is the exact office name as registered with the Ohio Division of Real Estate (Ohio requires it exactly as licensed)
- [ ] Consider a professional email on Saba's own domain (e.g. saba@sabashujaat.com) once the domain is bought. It looks more established in ads and on the site.
- [ ] **High-resolution headshot.** The current file is only 240×240 px and looks soft in the large hero portrait. Drop the original into `src/assets/saba-headshot.png` (or .jpg and update the import).
- [ ] **Years of experience:** the bio says "the past 10 years" but the profile says 14. The site uses **14**; confirm.
- [ ] Full name of the **CNHS** designation (shown as "Certified New Home Specialist — confirm")
- [ ] Approve the lightly edited About story and short bio (`src/pages/about.astro`, `agent.shortBio`). They're Saba's words, tidied for the web.
- [ ] Optional: homes-sold count or Zillow sales stats for the trust bar
- [ ] Reviews are copied word for word from Zillow, with the original names, dates and transaction details, and each links back to Saba's Zillow profile. Add new reviews to the top of `src/data/testimonials.ts` as they come in.
- [ ] **Add the other 33 Zillow reviews.** Paste them into `src/data/testimonials.ts` in the same format, or send them to whoever maintains the site. Then set `reviews.rating` in `src/config/site.ts` once the overall Zillow rating is confirmed.
- [ ] Or, for hands-off syncing, sign up for a reviews widget (Elfsight, JustReview, Poper…) and paste its embed code into `reviews.widgetHtml`. Check Zillow's terms and the broker's policy first.
- [ ] Optional, for automatic sync: ask the RE/MAX Affiliates office whether Saba's RE/MAX (booj) tools include Zillow's official reviews feed for partner sites, or whether Saba has a RealSatisfied profile (RE/MAX Affiliates has an office page there) that offers an embeddable widget.
- [ ] Social links and Google Business Profile URL
- [ ] Optional: booking link (Calendly, etc.) → `agent.bookingUrl`
- [ ] Optional: 60–90 second intro video for the About page
- [ ] Saba's own "local take" for each community page. Powell is done (16-year resident); the other 11 still need 2–3 sentences each.
- [ ] Confirm the service promises (`promises`): home value report "within 24 hours", replies "the same business day"
- [ ] Confirm the selling services listed on `/sell/` (professional photography, etc.) match what Saba actually provides
- [ ] **Read all site copy.** It's drafted in Saba's first-person voice and needs Saba's approval.

## B. Compliance (broker sign-off)
- [ ] Broker reviews the header lockup: brokerage name on every page, at least as prominent as Saba's name
- [ ] RE/MAX logo: add only official current files from the RE/MAX hub if desired, unaltered and in color. None are included now.
- [ ] Privacy Policy, SMS Terms, Terms and Fair Housing pages reviewed (remove the template notes afterwards)
- [ ] SMS consent wording approved. Bump `site.consentVersion` if it changes.
- [ ] Domain in Saba's own name (not containing "remax")
- [ ] Social share image (`public/og-default.png`) has the headshot and brokerage name. Re-render it once a high-res photo is available.

## C. Fact-check (written from general knowledge; I couldn't open these sites from this environment)
- [ ] Every community description in `src/data/communities.ts`: highlights, school districts, commute estimates
- [ ] All school district links resolve to the right official sites
- [ ] FAQ answers (`src/data/faqs.ts`), especially the buyer-agreement and down-payment answers

## D. Build the lead magnets
- [ ] Seller's Playbook (PDF or email series)
- [ ] Buyer's Guide (PDF or email series)
- [ ] Monthly Market Update email (source: Columbus REALTORS®/ShowingTime municipal reports)
- [ ] Until these exist, Saba replies to each request personally, which is also a good conversation starter

## E. Go-live
- [ ] Set `SITE_URL` and deploy (see README)
- [ ] Set up form notifications and lead routing (see `ADS-PLAYBOOK.md` §0)
- [ ] Submit a test lead from every form; confirm it arrives with UTMs
- [ ] Google Search Console: verify the domain and submit `/sitemap-index.xml`
- [ ] GTM, GA4 and Meta Pixel per `ADS-PLAYBOOK.md`
- [ ] Optional: replace community-card gradients with real local photography Saba owns or has licensed
