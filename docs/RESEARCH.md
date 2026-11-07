# Research brief — what makes an agent website effective (Nov 2026)

Compiled from 2024–2026 industry sources to guide this build. Vendor-reported conversion numbers are labeled as such. **Verify compliance items with Saba's broker before launch.**

## 1. What the site must do
- Online search is still most buyers' first step (~43–46% across recent NAR Profiles). 88% of buyers use an agent. 43% of buyers and 66% of sellers chose their agent through a referral or past relationship. **So the site has two jobs:** validate Saba for referred visitors, and capture people arriving cold from search and ads. ([NAR 2025 takeaways](https://virginiarealtors.org/2025/12/08/key-takeaways-from-nars-2025-profile-of-home-buyers-and-sellers), [summary](https://nowbam.com/88-of-home-buyers-still-rely-on-agents-nar-2025-report-finds/))
- First-time buyers hit a record-low 21% share (median age 40); the median repeat buyer is 62. **→ The site leads with move-up and right-sizing sellers ("sell & buy", home value), and still serves first-time buyers.** ([NAR](https://nar.realtor/newsroom/first-time-home-buyer-share-falls-to-historic-low-of-21-median-age-rises-to-40), [Inman](https://www.inman.com/2025/11/24/nars-new-consumer-profile-shows-agents-how-to-thrive-in-2026/))
- **Hero pattern:** one value proposition, an address box for "what's my home worth?", a buyer path, a photo and a proof line (rating, reviews). Luxury Presence reports about an 18% lift from lead magnets above the fold (vendor figure). ([source](https://www.luxurypresence.com/blogs/the-8-key-factors-that-make-a-luxury-real-estate-website-convert))
- **Lead magnets, roughly best to worst:**
  1. Home valuation — the top seller tool. Promise a personal analysis, since automated estimates can be inaccurate.
  2. Monthly market reports — Columbus REALTORS®/ShowingTime publish data by municipality and school district.
  3. Listing alerts.
  4. Buyer and seller guides.
  5. Neighborhood guides — these mainly earn SEO traffic.
- Benchmarks: real estate landing pages have a median conversion rate of about 2.6%, and lead-gen sites run 2–5% (vendor figures). ([source](https://www.luxurypresence.com/blogs/home-valuation-landing-pages-capture-seller-leads/))

## 2. Lead capture
- Fewer fields convert better; 3-field forms did best in HubSpot's study of 40,000+ pages. **→ We ask for name, email and phone, plus the address on the valuation form; timeline is an optional one-tap question.** ([HubSpot](https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx))
- Multi-step forms show mixed evidence, so we use two steps only where step 1 is naturally easy (the address). A/B test if traffic allows.
- **Speed to lead matters most.**
  - Responding within an hour makes a lead ~7× more likely to qualify (HBR 2011, via secondary sources).
  - In a secret-shopper test, the median agent response was 39 minutes, and 47% of inquiries got no reply at all. ([HousingWire](https://www.housingwire.com/articles/almost-half-of-listing-inquiries-dont-receive-a-response-from-an-agent-delprete/))
  - **→ Set up instant push/text alerts to Saba for every form submission.** See the ads playbook.
- Since Aug 17, 2024, buyers sign a written agreement before touring. "Book a showing" therefore routes to a consult, and the FAQ explains the agreement. ([NAR](https://www.nar.realtor/newsroom/national-association-of-realtors-reminds-members-and-consumers-of-real-estate-practice-change))

## 3. IDX / MLS
- **The MLS:** Columbus is served by Columbus and Central Ohio Regional MLS (Columbus REALTORS®, runs on Flexmls). It is *not* "MLS Now", which covers NE Ohio. ([MLS rules](https://columbusrealtors.com/clientuploads/MLS_Rules_&__Regulations_-_FEBRUARY_2025.pdf))
- **Vendors confirming Columbus support:** PeakIDX, Realtyna, Diverse Solutions, Web4Realty.
- **Typical prices:**
  - IDX Broker: $60–$149/mo
  - Showcase IDX: about $95–$125/mo
  - iHomefinder: about $169/mo
- **Check first:** RE/MAX's MAX/Tech suite (now powered by BoldTrail, formerly kvCORE) includes agent IDX — ask the office whether Saba already has it. ([flyer](https://res.cloudinary.com/remax-prod/images/v1761016292/us-resources-prod/MAXTech-Flyer-US_467214bd01/MAXTech-Flyer-US_467214bd01.pdf))
- IDX isn't required for lead gen. **→ Launch without it.** `/listings/` has an embed slot ready for later.

## 4. Local SEO
- Google treats agents as individual practitioners eligible for their own **Google Business Profile**. Hide the address and set service areas. ([Google](https://support.google.com/business/answer/3038177))
- Use `RealEstateAgent` schema with `areaServed` and `sameAs` (implemented). Google has no listing rich results.
- Build one *deep* page per community and avoid near-duplicate pages. Refresh market stats monthly.
- **Westerville City Schools** covers the City of Westerville plus parts of Genoa, Blendon, Plain and Sharon townships, Minerva Park and Columbus. **Genoa Township is split** across the Westerville, Olentangy and Big Walnut districts. ([WCSD](https://www.westerville.k12.oh.us/our-district/about-us/about-our-community), [Genoa Twp](https://genoatwp.com/about/schools.php))
- **Fair housing:** describe places and amenities, not the people who live there. Avoid phrases like "family-friendly" or "safe". Link to official school data rather than rating schools. ([NAR](https://www.nar.realtor/fair-housing-corner/create-advertisements-with-fair-housing-in-mind))

## 5. Ad-readiness
- **Meta Housing Special Ad Category (US):** age is locked to 18–65+, gender can't be chosen, there's no ZIP targeting, the minimum radius is 15 miles, and lookalikes aren't allowed. **→ Since targeting can't filter visitors, the landing page qualifies them by geography and intent instead.** ([Jon Loomer](https://www.jonloomer.com/special-ad-categories-meta-ads/))
- **Google housing policy:** no targeting by age, gender, parental or marital status, or ZIP. Destination pages must be crawlable by AdsBot, match the ad, and avoid trapping pop-ups. ([Google](https://support.google.com/adspolicy/answer/16701755))
- **Dedicated landing pages** (implemented):
  - noindex
  - no main navigation
  - one offer
  - a separate thank-you page per offer
- **Conversion tracking:**
  - GA4 `generate_lead`, imported into Google Ads, with enhanced conversions.
  - Meta Pixel `Lead` plus a Conversions API event sharing the same `event_id` so Meta can deduplicate. ([Meta docs](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events))
- Meta may apply "Core setup" restrictions that strip URL parameters for sensitive categories. **→ UTMs and click IDs are stored first-party and saved with every lead** (implemented).
- Meta lead forms require a **privacy policy** URL. Texting (A2P 10DLC) requires stating that opt-in data isn't shared for marketing. Both are implemented.

## 6. Compliance (broker review required)
- **Ohio** (ORC 4735.16, OAC 1301:5-1-02): the brokerage name must appear on **every page**, at least as prominently as Saba's name. **→ The header lockup and landing-page header show both names at the same size.** ([OAC](https://law.cornell.edu/regulations/ohio/Ohio-Admin-Code-1301-5-1-02))
- OAC 1301:5-1-21 is the *team*-advertising rule. It only matters if Saba advertises as a team.
- **RE/MAX:**
  - Show the full office name and "Each Office Independently Owned and Operated".
  - Use the balloon logo unaltered and only from official files (RE/MAX rebranded in 2025).
  - Use a domain in Saba's own name, without "remax". ([Brand manual](https://res.cloudinary.com/remax-prod/image/upload/v1787871900/Brand_Identity_Manual_qkryau.pdf))
- **Equal Housing Opportunity** logo and statement in the footer (implemented, plus a `/fair-housing/` page).
- **TCPA:** the FCC "one-to-one consent" rule was vacated (Jan 2025), but prior express written consent is still needed for automated marketing texts. **→ The consent checkbox is optional and unchecked, names the agent and brokerage, and links the SMS terms; the consent version and timestamp are stored with each lead.**
- **Accessibility:** WCAG 2.1 AA is the practical target. This site passes automated axe-core checks on all main templates.

## 7. Design
- What reads as premium:
  - editorial layouts with whitespace and large photography
  - a sticky mobile Call / Text / CTA bar
  - fast Core Web Vitals: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 ([web.dev](https://web.dev/articles/defining-core-web-vitals-thresholds))
- Mistakes to avoid:
  - a beautiful site with no conversion path
  - sending ad traffic to the homepage
  - an undersized brokerage name
  - duplicate area pages
  - forced registration
  - risky neighborhood copy

### Not verified
- The exact 2025 NAR "first step online" percentage.
- Whether Meta applies Core-setup restrictions to housing pixels.
- The current RE/MAX US manual's internet and domain sections.
- The Columbus MLS IDX disclaimer wording and its approved vendors.
- Vendor conversion figures.
