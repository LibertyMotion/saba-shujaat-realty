# Ads & tracking playbook

The site is built to be the destination for Google (search) and Meta (Facebook/Instagram) campaigns. This is the setup order once the site is live on its real domain.

## 0. Before spending a dollar
1. **Lead routing and speed to lead.** Every form submission should notify Saba instantly by push or text, plus email. Options:
   - **Netlify Forms (default):** Site → Forms → Notifications → email. Add a Zapier/Make hook to text Saba or create a CRM contact.
   - **CRM directly:** set `PUBLIC_FORM_ENDPOINT` to your CRM's or Zapier's webhook URL. Follow Up Boss, BoldTrail/kvCORE (check whether RE/MAX MAX/Tech already includes it) and Lofty all accept webhooks.
   - Target: a call or text back **within 5 minutes** during business hours.
2. **Privacy policy, SMS terms and fair housing pages:** have the broker or an attorney review them. Meta lead forms require a privacy policy URL.
3. **Google Business Profile:** create or verify Saba's profile with a service area (Westerville + nearby), not a home address. Link it in `agent.social.googleBusiness`.

## 1. Google Tag Manager (recommended hub)
Create a GTM web container and set `PUBLIC_GTM_ID=GTM-XXXXXXX`. The site pushes these dataLayer events:

| Event | When | Useful params |
|---|---|---|
| `generate_lead` | A form was successfully submitted | `lead_type` (home-value, buyer, guide, market-report, contact), `form_name`, `event_id` |
| `contact_click` | A tap on a call, text, email or booking link | `contact_method`, `click_location` |
| `form_start` | First interaction with a form | `form_name` |
| `form_step` | Moved to step 2 of a two-step form | `form_name`, `step` |
| `form_error` | Submission failed | `form_name` |
| `lead_thank_you_view` | A thank-you page loaded | `lead_type` |

**Use `generate_lead` as THE conversion.** `lead_thank_you_view` is only a backup; don't count both.

In GTM:
- **GA4 Configuration tag** (all pages), plus a **GA4 Event** tag `generate_lead` fired by a Custom Event trigger `generate_lead`. Mark it as a key event in GA4.
- **Google Ads Conversion** tag on the same trigger. Turn on *enhanced conversions for leads*, mapping email and phone from the form via a dataLayer or CSS-selector variable.
- **Meta Pixel** base code (all pages), plus a `Lead` event on `generate_lead` with **Event ID = `{{DLV - event_id}}`** (needed for Conversions API deduplication).
- A **Contact** event on `contact_click`, for optimizing toward calls and texts.

*No-GTM fallback:* set `PUBLIC_GA4_ID`, `PUBLIC_META_PIXEL_ID`, `PUBLIC_GOOGLE_ADS_ID` and `PUBLIC_GOOGLE_ADS_LEAD_LABEL` instead. The site then fires the same events directly. **Don't do both.**

## 2. Meta Conversions API (server-side)
Browser pixels lose signal to ad blockers and iOS, so send the same `Lead` server-side:
- Every lead already includes `event_id`, `fbp`, `fbc`, `page_url`, `fbclid` and the UTMs as hidden fields.
- Easiest route: CRM, Zapier or Make. Use the Meta Conversions API action with event `Lead`, `event_id` = the lead's `event_id`, `action_source=website`, `event_source_url` = `page_url`, user data = hashed email and phone, plus `fbp` and `fbc`.
- Or use Meta's CAPI Gateway or a server-side GTM container.
- Check deduplication in Events Manager → Test Events.

## 3. Campaigns
**Always send ads to `/lp/` pages, never the homepage.**

| Goal | Landing page | Example final URL |
|---|---|---|
| Seller leads (Meta) | `/lp/home-value/` | `/lp/home-value/?utm_source=facebook&utm_medium=paid_social&utm_campaign=seller_home_value&utm_content={{ad.name}}` |
| Buyer leads (Meta) | `/lp/buyers/` | `/lp/buyers/?utm_source=facebook&utm_medium=paid_social&utm_campaign=buyer_alerts&utm_content={{ad.name}}` |
| Seller search (Google) | `/lp/home-value/` | Keywords like "westerville home value", "sell my house westerville", "realtor westerville ohio" |
| Buyer search (Google) | `/lp/buyers/` or a community page | "homes for sale westerville ohio", "lewis center homes for sale" |

**Meta rules (Special Ad Category: Housing, required):**
- No age, gender or ZIP targeting. The minimum radius is 15 miles, so center it on Westerville.
- The landing pages are already worded to qualify by place and intent.
- Ad copy must also follow fair housing guidance: describe homes and services, never who should live somewhere.
- Every ad must show the brokerage name, the same as the site (Ohio rule).

**Google:**
- Turn on auto-tagging (gclid is captured automatically).
- Location: Westerville plus a radius.
- Housing policy bars demographic and ZIP targeting.
- Consider **Local Services Ads** (pay per lead, "Google Screened"), which run off the Business Profile.

## 4. Reporting
- Every lead record holds both last-touch (`utm_*`, `gclid`, `fbclid`) and `first_touch`, so you can measure cost per lead *and* which leads become clients, from the CRM rather than only the ad platforms.
- Review weekly:
  - cost per lead by campaign
  - speed to first contact
  - lead-to-appointment rate
  - appointments to signed agreements

## 5. Testing ideas (once ~100+ leads/month)
- Hero headline: "What's your home worth?" vs. "Thinking of moving up?"
- One-step vs. two-step valuation form.
- Phone required vs. optional on buyer alerts.
- Adding a 60-second intro video of Saba to the landing pages.
