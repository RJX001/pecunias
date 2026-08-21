# Build Audit — Contact Form & API (BUILD-3)

**Scope:** Contact UI, `POST /api/contact`, Zod validation, rate limiting, storage/email path, and custom-quote / no-pricing constraints.  
**Sources:** `pecuniastudios-build-spppp.md` §§4.6, 5, 6 (contact gap).  
**Mode:** Audit only — no source files modified.

| File reviewed | Path |
|---|---|
| Contact UI | `src/components/Contact.tsx` |
| Footer CTAs | `src/components/Footer.tsx` |
| API route | `src/app/api/contact/route.ts` |
| Zod schema | `src/lib/contact-schema.ts` |
| Rate limit | `src/lib/rate-limit.ts` |
| Env template | `.env.example` |
| CTA cross-check | `src/components/Header.tsx`, `src/components/Hero.tsx` |

---

## Verdict

**PASS** — Contact form and backend close the §6 contact gap for production-ready quote intake. Spec-aligned fields (no budget), real `POST /api/contact`, Zod validation, IP rate limiting, and email-or-file persistence are in place. Custom-quote CTAs and no-pricing constraints hold.

---

## Checks vs §4.6 Contact — "New Account Application"

| # | Requirement | Result | Evidence |
|---|---|---|---|
| 4.6.1 | Eyebrow: `New Account Application` | **PASS** | `Contact.tsx` eyebrow copy matches. |
| 4.6.2 | H2: `Request a quote.` | **PASS** | Exact match. |
| 4.6.3 | Subhead (scoped proposal / no public price list) | **PASS** | Exact approved copy. |
| 4.6.4 | Field: Name (text, required) | **PASS** | `required`, `maxLength={120}`, wired to `name`. |
| 4.6.5 | Field: Business name (text, optional) | **PASS** | No `required`; optional in schema. |
| 4.6.6 | Field: Service needed (select) with exact options | **PASS** | `SERVICE_OPTIONS`: Website Development / Digital Marketing / Paid Advertising / Marketplace & Store Setup / Creative Services / App Development / Not sure yet. |
| 4.6.7 | Field: Project details (textarea, placeholder) | **PASS** | Placeholder `What are you trying to achieve?`; not required (spec does not mark required). |
| 4.6.8 | Submit: `Submit Request` | **PASS** | Button label matches. |
| 4.6.9 | Replace mockup `alert()` with real POST handler | **PASS** | Client `fetch("/api/contact", { method: "POST", … })`; success/error UI. |
| 4.6.10 | **No budget/price field** | **PASS** | Form payload and schema only: `name`, `businessName`, `service`, `details`. No budget in `src/`. |

---

## Checks vs §6 Contact Gap + Stack Intent

| # | Requirement | Result | Evidence |
|---|---|---|---|
| 6.1 | API route | **PASS** | `src/app/api/contact/route.ts` exports `POST`. |
| 6.2 | Server-side validation | **PASS** | `contactSchema.safeParse(body)` via Zod; 400 on failure. |
| 6.3 | Rate limiting | **PASS** | `checkRateLimit(clientIp(request))` before parse; 429 + `Retry-After`. Window 15m / 5 hits (`rate-limit.ts`). |
| 6.4 | Storage **or** notification | **PASS** | If `RESEND_API_KEY` → Resend email; else append to `data/leads.json` (or `/tmp/pecunias-leads` on Vercel). Documented in `.env.example`. |
| 6.5 | Supabase/Neon `leads` table | **N/A (future)** | Spec §2 lists DB “for future lead/contact storage”; §4.6 allows email **or** store. Current path satisfies the OR without Postgres. |

### Rate-limit caveat (not a FAIL)

In-memory limiter is per-instance on Vercel (noted in `rate-limit.ts`). Acceptable for marketing-site launch; shared store (Redis/Upstash) would harden multi-isolate abuse resistance later.

### Storage/email caveat (not a FAIL)

Without `RESEND_API_KEY` on Vercel, file persistence under `/tmp` is ephemeral. `.env.example` correctly requires Resend for production email delivery.

---

## Checks vs §5 Explicit Constraints (contact-relevant)

| # | Constraint | Result | Evidence |
|---|---|---|---|
| 5.1 | No pricing / no budget fields / no “from £X” / no price tiers | **PASS** | No budget field; no `£` / checkout / tier UI in `src/`. Approved copy mentioning “no public price list” is intentional, not a price. |
| 5.3 | Custom-quote-only — CTAs → contact, never checkout/priced package | **PASS** | Header + Hero: `Request a Quote` → `#contact`. Footer: `Contact` → `#contact`. No checkout links. |
| 5.4 | Retainer/project account types not public | **PASS** | No Project/Retainer Account UI in `src/`. |

---

## API / Schema Detail

| Check | Result | Notes |
|---|---|---|
| Zod: name required, max 120 | **PASS** | `z.string().trim().min(1).max(120)` |
| Zod: businessName optional, max 160 | **PASS** | `.max(160).default("")` |
| Zod: service enum = SERVICE_OPTIONS | **PASS** | Matches select options 1:1 |
| Zod: details max 4000, default empty | **PASS** | Aligns with textarea `maxLength={4000}` |
| Zod: no budget key | **PASS** | Schema object has four keys only |
| Rate limit on submit | **PASS** | Applied before JSON/schema |
| Env documented | **PASS** | `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` |

---

## Summary Scorecard

| Area | Result |
|---|---|
| Contact form UI (fields, copy, no budget) | **PASS** |
| `POST /api/contact` | **PASS** |
| Zod validation | **PASS** |
| Rate limiting | **PASS** |
| Storage/email path | **PASS** |
| No pricing + custom-quote CTAs | **PASS** |

**Overall: PASS**
