# Codex handoff to Google Antigravity

Date: 18 September 2026. Owner: Malack, Goldfish Marketing.

Malack explicitly asked Codex to edit this local project and leave this note. Initial git status was clean. Changes are uncommitted; no push or deployment was performed. Review the diff before editing the same files. No credentials or environment files were read or edited. Keep existing secrets out of commits.

## What changed

- Canonical origin: layout, robots, service pages and About now use SITE_CONFIG.SITE_URL rather than NEXT_PUBLIC_SITE_URL. The live site had emitted the old Vercel domain despite correct source fallbacks. Production metadata must remain the production domain even on preview builds. Preview noindex/access policy remains a deployment responsibility.
- Removed duplicate brand title suffixes from Diani, Mombasa and Kenya.
- Replaced three dead homepage article cards with matching titles/descriptions and existing hospitality, pricing and content articles. No unrelated 404-to-home redirects.
- Article template: BlogPosting JSON-LD with actual title, excerpt, image and organization authorship. No invented publication dates or individual author attribution. Tables get keyboard-focusable scroll wrappers; CSS contains overflow while retaining table semantics.
- Mobile: hide floating WhatsApp bubble below desktop where the sticky bar already serves that purpose; reserve bottom space and let long buttons wrap. Contact fields have persistent associated labels, autocomplete and 16px input text.
- Contact: removed unfinished-draft autosave. No contact data is sent simply by typing. Submission state is validated, retries retain a client idempotency key, duplicate in-flight submissions are guarded, and input stays intact on failure. Explicit WhatsApp links replace unreliable async popups. Opening WhatsApp is never treated as sending a message. Feedback receives focus and scrolls into view.
- Qualification: no preselected inflated budget; added KShs 15–25k, 50–80k, 80–100k and higher options plus guidance. Changing currency clears the previous selection. These are enquiry bands, not all-inclusive package commitments.
- Booking: shared lib/booking.ts supplies absolute-date preference windows in EAT; excludes Sundays, Saturday afternoons and elapsed times. UI refreshes each minute; server validates again. No actual calendar availability or confirmed booking is claimed.
- Lead API: removed unsafe serverless filesystem JSON persistence and swallowed-failure success responses. Validates types, contact details, intent, slot, array lengths and bounded streamed body size; rejects foreign browser origins. Sends plain text to the EXISTING Resend destination to avoid HTML interpolation. Uses provider idempotency; checks HTTP status and acknowledgement. Returns 202 notification_accepted only after provider acceptance, otherwise a failure status. No claim of durable CRM capture, delivered email or appointment confirmation.

## Important contract change

POST /api/leads now requires an Idempotency-Key UUID header. Frontend supplies it. Success is { requestId, status: "notification_accepted" } with HTTP 202. Errors are non-2xx. Any other consumers must migrate. RESEND_API_KEY and a verified leads@goldfishmarketing.co.ke sender are required. Missing configuration fails visibly and leaves WhatsApp available; do not restore pretend success.

There is currently NO durable lead database/CRM implemented. This change fixes truthfulness and notification handling, not the whole desired acquisition infrastructure. Existing data/leads.json, if any, was not removed or read. Decide on managed durable storage and queue/delivery webhooks before promising persisted leads or actual delivery. Add shared rate limiting or configured platform WAF rules before paid acquisition; origin checks and request-size limits are not comprehensive abuse prevention. Resend idempotency lasts 24 hours, not forever: https://resend.com/docs/dashboard/emails/idempotency-keys .

## Verification

- TypeScript check and ESLint passed on the first implementation.
- Production build passed (54 generated pages) on the first implementation.
- Eight new offline tests passed for EAT boundaries, closed days, elapsed slots, server slot rejection, missing mail config, provider failure/timeout/malformed acknowledgement, valid acceptance, stable retry body/key, draft rejection, malformed/oversized requests and foreign origin. Provider calls are mocked; no live mail was sent.
- Browser confirmed associated labels and 16px text for the visible contact controls; pricing tables contained at 390px. A remaining 320px overflow came from two long existing CTAs, addressed by the final wrapping correction.
- Final verification results are appended below after the final build and mobile retest.

Run: node --test test/lead-booking.test.cjs; npm test; npm run lint; npm run build.

## Outstanding work (do not mark the full audit complete)

1. Confirm production mail configuration and perform an owner-approved end-to-end delivery check; inspect provider acknowledgement/delivery. No production form submissions were performed by Codex.
2. Implement durable lead storage, delivery monitoring and shared abuse controls. Keep pending/failed/accepted states distinct.
3. Have Malack verify every testimonial and numerical result. Existing large claims, 40+ engagement rating, generic executive-summary statistics, speed guarantees and case-study inconsistencies still need editorial evidence. Do not fabricate attribution or historical tracking for Diani Ocean.
4. Rewrite commercial positioning/pricing pages against actual offers (websites primarily KShs 50–80k, social KShs 15–25k/month excluding shoots, content KShs 50–100k/package). Existing general-market pricing articles are not yet reconciled with these offers. Confirm official social handles.
5. Verify real-device Safari/Chrome, both themes, keyboard/zoom flows, actual Core Web Vitals, analytics and a tested CSP. These edits are not a complete accessibility/security/performance certification.
6. After deployment, recheck live HTML for all six service canonicals, production robots sitemap, social image URLs, corrected article links, lead error states and mobile layouts. Remove obsolete NEXT_PUBLIC_SITE_URL values from deployment configuration after checking other consumers.

The audit and 90-day plan live in the sibling CHAT GPT PROJECTS/GFM Website workspace. This handoff deliberately leaves deployment to the existing workflow; review and merge these changes with any new concurrent work before publishing.
