# PecuniaStudios — Services Page Extraction Spec (v3)

> **Companion document.** Sits on top of `pecuniastudios-build-spec.md` and `pecuniastudios-redesign-v2-spec.md`. This one covers a structural change (new route) rather than a pure visual one — that's intentional and explicitly requested, unlike the "visual only" constraint on the v2 redesign pass. Everything not mentioned here still follows the earlier specs unchanged.

---

## 0. What's changing

The "Statement of Services" accordion (build-spec §4.3 — the `CODE / CATEGORY / DESCRIPTION` table with the 6 expandable category rows) currently lives inline on the homepage. It's moving to its own dedicated page.

| Area | Before | After |
|---|---|---|
| Homepage | Includes the full Services accordion as an in-page section | Services section removed entirely |
| Nav "Services" link | `<a href="#services">` — anchor-scrolls down the homepage | Routes to a new `/services` page |
| Hero "View Services" button | Links to `#services` | Links to `/services` |
| Services content | Same accordion, same data | Unchanged — just relocated to its own page |

---

## 1. Homepage — remove the Services section

Delete the "Statement of Services" section (build-spec §4.3) from the homepage component tree entirely. After this change, the homepage section order is:

1. Hero
2. Our Work (per `pecuniastudios-redesign-v2-spec.md` §4)
3. About
4. Contact
5. Footer

No other homepage content changes as part of this.

---

## 2. Navigation — point to the new page instead of an anchor

- **Header nav "Services" link:** change from an in-page anchor to a real route link (`<Link href="/services">` in Next.js), same position/styling in the nav bar.
- **Hero "View Services" button:** same change — `#services` → `/services`.
- **Mobile nav (once built):** when the hamburger menu is implemented (still an open item per build-spec §6), its Services entry should point to `/services` too, not an anchor — flagging so it isn't built against the old pattern.
- Remove the now-unused `id="services"` anchor target along with the section itself.

---

## 3. New page — `/services`

A standard page using the site's existing chrome (same sticky header/nav, same footer) — not a modal or overlay.

### 3.1 Page header

Reuse the existing copy from build-spec §4.3 verbatim — no new writing needed:

- Eyebrow: `Statement of Services`
- H2: `Every line item, accounted for.`
- Subhead: `Each engagement is scoped and quoted individually — no line item priced the same twice, because no two businesses are. Select a category to see what's included.`

### 3.2 Services list

Reuse the exact same component and the exact same JSON dataset already defined in build-spec §4.3 (6 categories, 18 items total, code/name/description per item) — this is a relocation, not a rebuild. No content changes:

- Header row: `Code | Category | Description | (chevron)`
- Each of the 6 category rows expands independently on click to reveal its item-level rows (code, name, description per item), chevron rotates 90° on expand, same `max-height` transition as before
- Same explicit exclusions apply: no WordPress Website Development, no eBay Marketplace Management — do not add these back

### 3.3 Optional addition (flagging, not mandatory)

Consider a small "Request a Quote" CTA at the bottom of the page (same solid-ink button style from `pecuniastudios-redesign-v2-spec.md` §2), since a visitor who's just read the full service list is a natural next click to the contact form. Not shown in any reference mockup — include only if you're happy with it; skip if you'd rather keep this page purely informational.

---

## 4. Constraints (carried over, still binding)

1. No pricing anywhere on this page — no numbers, no "from £X", no price tiers, no per-item "Custom Quote" tags.
2. No WordPress Website Development or eBay Marketplace Management.
3. Custom-quote-only model — any CTA on this page leads to the contact form, never a checkout or priced package.
4. Keep the ledger/statement visual metaphor — same accordion/table treatment as the homepage used, not a generic feature-list layout.

---

## 5. Implementation notes for Cursor

- New route: `app/services/page.tsx` (Next.js App Router), statically generated (SSG) — consistent with the rest of the marketing site per build-spec §2.
- Move the existing Services accordion component (and its JSON data file, if separated) rather than duplicating it — homepage and `/services` should never hold two copies of the same data.
- Update all internal links that currently point to `#services` (header nav, hero CTA, and mobile nav once built) to point to `/services`.
- No changes to form handling, API routes, or any other page's data.
