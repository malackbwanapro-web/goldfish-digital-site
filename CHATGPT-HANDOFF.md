# Google Antigravity Handoff to ChatGPT Astra / Codex

**Date:** 18 September 2026 (22:35 EAT)  
**Project:** Goldfish Marketing (`goldfish-digital-site`)  
**Repository:** `https://github.com/malackbwanapro-web/goldfish-digital-site`  
**Live Production URL:** `https://www.goldfishmarketing.co.ke`  
**Owner:** Malack Bwana, Founder & Principal Systems Architect  
**From:** Google Antigravity (Senior AI Systems Architect)  
**To:** ChatGPT Astra / Codex  

---

## 1. Current State & Git History

All changes from your earlier session (`ANTIGRAVITY-HANDOFF.md`) have been **fully reviewed, verified, tested, committed, and deployed to production** via Vercel. The repository working tree is clean.

### Recent Commit Log:
- **`f955d22`** (*Latest deployed commit*):  
  `feat: harden lead ingestion API, add dynamic EAT booking windows, fix canonicals, and polish mobile UX`  
  Merged all 16 files from Codex's audit: `/api/leads` security hardening, `lib/booking.ts` dynamic EAT preference windows, `test/lead-booking.test.cjs` offline test suite, canonical domain normalization, title de-duplication, homepage 404 links fix, table accessibility wrappers, and mobile form ergonomics.
- **`fa16cb7`**:  
  `feat: clean code refactor, custom growth vector input, and early lead auto-capture engine`  
  Established `lib/constants.ts` (`SITE_CONFIG`), `lib/whatsapp.ts` (`buildWhatsAppUrl`), pure validators/formatters, `test/clean-code.test.mjs`, Growth Vector recommender custom hurdle input, and engagement model tier deep-links.

---

## 2. Review of Codex Changes Merged in `f955d22`

Every change proposed in `ANTIGRAVITY-HANDOFF.md` was validated against Next.js 14 SSG and passed with 0 errors:

1. **Canonical URLs (`app/layout.tsx`, `app/robots.ts`, `app/services/[slug]/page.tsx`, `app/about/page.tsx`)**:
   - Standardized to `SITE_CONFIG.SITE_URL` (`https://www.goldfishmarketing.co.ke`) directly instead of `process.env.NEXT_PUBLIC_SITE_URL`.
   - Prevents preview branch URLs (e.g. `*-vercel.app`) from ever leaking into production canonical tags or robots.txt.
2. **Title De-duplication (`app/diani/page.tsx`, `app/mombasa/page.tsx`, `app/kenya/page.tsx`)**:
   - Removed redundant `| Goldfish Marketing` suffixes. Root `layout.tsx` title template (`%s | Goldfish Marketing`) now generates clean, single-branded titles.
3. **Homepage 404 Links Fix (`app/page.tsx`)**:
   - Replaced 3 dead insight card slugs with existing articles:
     - `/insights/web-design-hotels-diani-beach-kenya`
     - `/insights/website-design-cost-kenya-pricing-guide`
     - `/insights/content-creation-tourism-businesses-kenya-coast`
4. **Article Schema & Table Accessibility (`app/insights/[slug]/page.tsx`, `app/globals.css`)**:
   - Added `BlogPosting` JSON-LD schema with organization authorship, headline, description, and image URL.
   - Wrapped `<table>` elements in `.article-table-scroll` (`role="region"`, `tabindex="0"`, `aria-label="Comparison table..."`) ensuring tables scroll horizontally without breaking mobile viewport widths.
5. **Mobile WhatsApp De-duplication (`app/components/WhatsAppFloat.tsx`)**:
   - Added `hidden lg:flex` so the floating bubble only renders on desktop. On mobile, `MobileStickyBar.tsx` serves as the primary bottom action bar, avoiding dual overlapping buttons.
6. **Mobile Form Ergonomics (`app/globals.css`, `app/contact/ContactClient.tsx`)**:
   - Enforced `font-size: 16px` on `.contact-intake input, select, textarea` to prevent iOS Safari auto-zooming on focus.
   - Added persistent `<label className="field-label" htmlFor="...">` and `autoComplete` attributes to all fields.
   - Allowed `.btn-primary, .btn-outline` to wrap cleanly (`white-space: normal`, `overflow-wrap: anywhere`) on 320px screens.
   - Currency toggle between KES/USD clears previous selection to avoid mismatched currency quotes.
7. **Dynamic EAT Booking Engine (`lib/booking.ts`)**:
   - Implemented `bookingOptions(now)` and `validBooking(day, slot, now)`.
   - Computes slots in East Africa Time (UTC+3), excludes Sundays, excludes Saturday afternoons (>1:00 PM), and discards past hours of the current day.
8. **Lead API Security Hardening (`app/api/leads/route.ts`)**:
   - **Idempotency**: Client sends UUID `Idempotency-Key` header; forwarded to Resend (`lead/<key>`) to prevent duplicate email alerts on network retries.
   - **Rate & Size Protection**: Streams request body with a 16KB limit (`413 BODY_TOO_LARGE`).
   - **Anti-CSRF**: Validates browser `Origin` matches production or localhost (`403 Forbidden`).
   - **Anti-Injection**: Resend email body is structured plain text (`text: [...]`), eliminating HTML injection vectors.
   - **No Ephemeral File Writes**: Removed local `data/leads.json` writes which fail/reset on serverless lambdas.
   - **Truthful Status**: Returns `202 notification_accepted` only if Resend confirms delivery with a valid ID; returns `502/503` on failure so errors are visible and user input is preserved on the frontend.
9. **Offline Test Suite (`test/lead-booking.test.cjs`)**:
   - 8 offline tests covering timezone roll-over, weekend exclusions, timeout handling, idempotency header propagation, and payload validation.

---

## 3. Core Architectural Contracts to Preserve

When continuing work in this workspace, **do NOT revert or break these patterns**:

### A. Centralized Invariants (`lib/constants.ts`)
Always import from `@/lib/constants` (`SITE_CONFIG`):
- `WHATSAPP_NUMBER`: `'254711404755'`
- `PHONE_DISPLAY`: `'+254 711 404 755'`
- `PRIMARY_NOTIFICATION_EMAIL`: `'goldfishprojex@gmail.com'`
- `OFFICIAL_INFO_EMAIL`: `'info@goldfishmarketing.co.ke'`
- `SITE_URL`: `'https://www.goldfishmarketing.co.ke'`
- Address: `'Diani Beach Road, Diani Bazaar'`, `'Kwale County'`, `'80401'`, `'Kenya'`

### B. WhatsApp Deep-Link Builder (`lib/whatsapp.ts`)
Always use `buildWhatsAppUrl(message?, phoneNumber?)`. It handles input trimming, phone sanitization, and URI encoding across all buttons and pages.

### C. Pure Validators & Formatters (`lib/validators.ts`, `lib/formatters.ts`)
- Pure predicates: `isValidContactName`, `isValidPhoneNumber`, `isValidEmail`, `hasMinimumDraftLength`.
- Pure domain formatters: `formatWhatsAppDirectMessage`, `formatStrategyCallMessage`, `formatDiagnosticMessage`.

### D. Growth Vector Recommender (`app/services/components/ServiceRecommender.tsx`)
- Contains the interactive Step 2 custom hurdle (`✍️ Custom / Unique Challenge...`), dynamic scoping textarea, tailored Step 3 card, and dual WhatsApp + Contact Desk CTAs.

### E. Engagement Models Tier Routing (`app/services/page.tsx`)
- Tiers 01, 02, and 03 link to `/contact?tier=tier-0X` with pre-filled scopes and direct 1-tap WhatsApp buttons.

### F. Suspense Boundary (`app/contact/page.tsx`)
- `<ContactClient />` uses `useSearchParams()` and **must remain wrapped in `<Suspense fallback={...}>`** to avoid Next.js static prerendering de-opt errors during `npm run build`.

---

## 4. Current Test & Build Verification

Both test suites and the production compiler pass 100%:

```bash
# 1. Lead API & Booking offline test suite (8 tests)
node --test test/lead-booking.test.cjs
# Result: ✔ 8 passed (556ms)

# 2. Clean Code unit tests (4 tests)
npm test
# Result: ✔ 4 passed (8.5ms)

# 3. ESLint
npm run lint
# Result: ✔ No ESLint warnings or errors

# 4. Next.js Production Build
npm run build
# Result: ✓ Compiled successfully; 54/54 static routes generated
```

---

## 5. Status of Outstanding Work from Codex Handoff

| Item from Codex Checklist | Current Status | Notes / Next Recommended Step |
|---|---|---|
| **1. Production Mail Verification** | In Place | Endpoint forwards to Resend. Ensure `RESEND_API_KEY` is set in Vercel environment and `leads@goldfishmarketing.co.ke` is a verified sender domain in Resend. |
| **2. Durable Lead Database / CRM** | Open for Decision | Ephemeral `data/leads.json` removed. If Malack requests durable database storage, integrate Supabase, Neon Postgres, or Firestore with webhook retries. |
| **3. Testimonial & Case Study Review** | Editorial Review | Client metrics and testimonials remain as currently drafted, pending Malack's final editorial verification. |
| **4. Pricing Alignment** | Integrated | Tier cards in `/services` reflect Foundation Sprint, Growth Engine Retainer, and Ecosystem Dominance, linking directly to `/contact?tier=tier-0X`. |
| **5. Mobile & Contrast Polish** | Complete | Buttons wrap cleanly on 320px, 16px input font prevents iOS zoom, high-contrast dark text (`#0D0D0D`) on gold backgrounds implemented. |
| **6. Live HTML & Canonical Check** | Complete | Verified all 54 routes generate static HTML with `https://www.goldfishmarketing.co.ke` canonicals. |

---

## 6. Quick Verification Commands for Reconnect

To instantly confirm workspace health upon reconnecting:
```bash
node --test test/lead-booking.test.cjs && npm test && npm run lint && npm run build
```
All commands should pass with exit code 0.
