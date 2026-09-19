# Goldfish website release handoff — 19 September 2026

## Completed in this release
- Owner-confirmed website/social/content offers, explicit exclusions, and offer-specific contact routing.
- Shorter homepage with a real accommodation project, readable mobile CTA and stronger light-theme text contrast.
- Portfolio now lists real client sites and two factual project summaries. Unverified numerical case studies are withheld behind noindex review pages and removed from the sitemap. Old source data is retained for evidence review.
- Removed unverified testimonial presentation from About and quantitative case-study panels from service pages. Removed generic unsupported article-summary claims and the speculative self-auditor from article rendering.
- Rewrote the website pricing guide against actual Goldfish prices. Other article bodies still need sourced editorial review; this release is not a claim that every existing statement is verified.
- Contact copy now describes business-hours replies and actual enquiry steps rather than invented SLA/NDA promises. Optional business and timeframe fields support qualification.
- Contact events distinguish channel clicks from email-provider acceptance. No name, phone, email, free-text message, budget or request ID is included in these custom event parameters. GA4 account settings and actual reporting still need verification.
- Corrected nested main landmarks, added reduced-motion support, and introduced limited CSP protections for embedding, base URL, object content and form destinations. This is not a comprehensive script CSP or security certification.

## Verification
- Production build passed: 56 generated pages, including 12 noindex review routes retained for existing inbound links.
- Lint/type checking passed; all 12 existing tests passed.
- All 37 internal page-link destinations checked in generated output returned 200 locally.
- Browser checked mobile widths 320/390, contained pricing table, service-specific prefill, portfolio cards and desktop light/dark themes.
- Latest homepage CTA begins around 588px at 390x844, with no page-level horizontal overflow. Light outline text is rgb(112,84,0).
- Local missing-mail-configuration submission correctly displays an error, retains form details and exposes the WhatsApp composer link. No test WhatsApp message was sent and no live email delivery was verified.

## Configuration still required
1. Mail: local configuration has no RESEND_API_KEY. Verify Production settings in Vercel and sender-domain verification in Resend, then test an owner-approved enquiry and confirm its inbox arrival. Provider acceptance is not inbox delivery.
2. Durable lead storage: no CRM/database destination has been supplied. Do not claim the API persists leads. Connect an owner-selected managed datastore and add delivery monitoring plus shared abuse/rate controls before paid acquisition.
3. Search Console: a read-only attempt with the existing service account returned 403 PERMISSION_DENIED. Grant that existing identity appropriate access or supply a Search Console export. No ranking/traffic claims are inferred.
4. GA4: confirm lead_request_accepted and contact_channel_click in DebugView/Realtime. A click or accepted email is not a qualified lead; track qualified, proposal and won outcomes separately.
5. Remaining editorial evidence: confirm official social profiles and any quantitative claims retained in article bodies or service descriptions. Do not restore withheld statistics or testimonials without records and permission.

No credentials were printed or committed. Do not rerun earlier one-off edit scripts against the final files. Follow up from the deployed commit and this note.
