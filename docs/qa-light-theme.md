# QA report — Light theme + integration

**Agent:** 4 (QA + integration)  
**Date:** 16 September 2026  
**Build:** `npx next build` — **PASS** (Next.js 16.3.1)

**Overall verdict: PASS WITH NOTES**

Fixes in this pass are presentation-only. API, contact schema, rate limit, and `services.ts` shape were not changed.

Browser-tool walkthrough was not available in this session. Theme, motion, and 390/768 layouts were checked in source and via production build. Manual click-through of toggle persistence, mobile menu, and accordion still recommended before push.

---

## Area scores

| Area | Result |
|---|---|
| Theme | PASS |
| Content | PASS WITH NOTES |
| Function | PASS |
| Responsive | PASS WITH NOTES |
| Accessibility | PASS |
| Performance | PASS |

---

## Theme

**PASS**

- Default is Light: `<html data-theme="light">` plus `themeInitScript` that only overrides when `localStorage["pecunia-theme"]` is `light` or `dark`.
- Toggle label is destination (`Dark` / `Light`) with matching `aria-label`.
- Persistence uses the existing `pecunia-theme` key. Unset visitors stay on Light.
- Primary `.btn-solid` is ink `#12181A` (`--dark-text`) with non-swapping cream text `#F6F0E4` in both themes.
- Borders use `--line` / `--line-strong` (visible on cream and ink).
- Header is transparent over cream at rest; scrolled/open uses `--header-bg`.
- Shared tokens match §29.2. `--bg/--fg/--green` remain aliases of `--ink/--paper/--ledger`.

### Fixes applied this pass

| File | Problem | Fix | Severity |
|---|---|---|---|
| `src/components/Hero.tsx` | Dot grid hardcoded `#242629` — harsh on cream, nearly invisible on ink | `var(--line-strong)` | High |
| `src/app/globals.css` | `--green-soft` aliased to `--recessed-bg` (too faint for glows/washes) | Ledger tint via `color-mix` (stronger in Dark) | Medium |
| `src/components/Method.tsx` | Scale completion glow used `--green-soft` | Visible `color-mix` of `--ledger` | Medium |
| `src/app/globals.css` | `::selection` used `color: var(--bg)` — dark-on-dark in Dark | Cream `#f6f0e4` on `--ledger` | Medium |
| `src/app/globals.css` | `.btn-solid:hover` used leftover `#1c2428` | `color-mix` of `--dark-text` | Low |

No remaining `#0a0a0b` / `#84E4A8` / `#242629` in `src/`.

---

## Content

**PASS WITH NOTES**

Homepage copy matches the overlay (do not paraphrase; rotating headlines were **not** reverted to “Turn attention into revenue.”).

Checked present:

- Nav: Services, Approach, About, Book A Call
- Hero: 6 rotating phrases + Make The Move →
- Growth Philosophy, 4 Growth Stack systems, 6 Approach stages
- Our Commitment, Why Pecunia?, Built For…, About, The Standard, Final CTA
- Footer copyright England & Wales
- No public prices, no WordPress, no eBay

### Remaining flags (do not “fix” without an explicit content decision)

| File | Component | Problem | Recommended fix | Severity |
|---|---|---|---|---|
| `src/components/Services.tsx` | `/services` | Still uses “Growth stack” / “Five lines. One system.” — leftover vs homepage four-system overlay | Visual-theme only unless RJ wants `/services` copy brought in line. Do not reshape `src/data/services.ts`. | Medium |
| `src/app/page.tsx` | Home composition | Work / Results omitted by homepage overlay | Do not restore unless copy is missing **and** spec §30 requires it. | Info |
| Spec §30 vs overlay §§5–6 | Hero | §30 still lists “Turn attention into revenue.”; overlay uses the 6 rotating phrases | Conflict already resolved toward overlay. FLAG only. | Info |
| `src/components/System.tsx` | Growth Philosophy | Approved section title is a kicker; `h2` is the statement | Keep. Hierarchy is readable. | Low |
| `src/components/Footer.tsx` | Footer | Extra “Stack” link to `/services` (not in primary nav) | Preserve — spec says keep required existing footer nav. | Info |
| `src/components/Contact.tsx` | Final CTA | “Start A Growth Project →” is supporting text; submit remains “Submit request” | Matches Agent 1 map. Do not add a second dummy CTA. | Info |

---

## Function

**PASS**

- Nav hashes: `/#stack` `/#approach` `/#about` `/#contact`
- Mobile menu: `aria-expanded`, Escape, body scroll lock
- Homepage accordion: independent open/close, `aria-expanded` / `aria-controls`
- `/services` accordion: same pattern; height now `grid-template-rows` so panels are not clipped
- Contact still `fetch("/api/contact")` with `{ name, businessName, service, details }`
- Theme toggle + localStorage unchanged
- `npx next build` passes; `/api/contact` still a dynamic route

---

## Responsive

**PASS WITH NOTES**

Source review at 390px / 768px:

- Hero headlines: `min-w-0` + wrap so stacked phrases cannot force overflow
- Growth Stack triggers: `minmax(0,1fr)` so titles wrap beside the +
- Why Pecunia chips: inset scatter slots; `overflow-hidden` no longer clips edge pills as badly
- `/services` table: 3 columns below `sm` (description stacks under name)
- `html, body { overflow-x: clip }` as a last-line overflow guard

Not visually clicked at 1440 / 1280 / 1024 / 900 / 600 in a browser this session.

| File | Component | Problem | Recommended fix | Severity |
|---|---|---|---|---|
| Manual | All | No live viewport pass in this agent run | Click-through Light/Dark at 390 and 768 before push | Low |

---

## Accessibility

**PASS**

- `:focus-visible` brass outline added globally; buttons inherit it; fields keep ledger border (outline suppressed so it does not double up)
- Accordions expose `aria-expanded`
- Reduced motion: Hero/Method/Philosophy/Reveal still show completed/readable state
- Why Pecunia: reduced-motion still **starts merged**, but chips stay visible in a cluster (previously faded to 0, so the metaphor disappeared)
- Screen-reader copy is in the text blocks, not only in the chip animation (`aria-hidden` on chips)

---

## Performance

**PASS**

- IntersectionObservers disconnect after one-shot triggers
- Hero timers start/stop with visibility and clean up on unmount
- No new dependencies
- No hydration-risk change to `data-theme` SSR default

---

## §33 checklist

```text
[x] Existing working code preserved
[x] Approved homepage overlay content present
[x] Existing backend/API/form behaviour preserved
[x] No public pricing introduced
[x] No excluded services introduced
[x] Light Theme is the DEFAULT
[x] Dark Theme remains available
[x] Theme toggle works (source + persistence)
[x] Theme toggle label describes the destination theme
[x] Light Theme matches approved token spec
[x] Primary CTA buttons use ink + cream text
[x] Brass remains a restrained accent
[x] Hero/motion behaviour preserved
[x] Reduced-motion behaviour readable
[x] Mobile layout guarded (390/768 source fixes)
[ ] Desktop layout — source OK; live pass still due
[x] No horizontal overflow (clip + min-w-0)
[x] No hydration-theme flash script present
[ ] Console errors — needs browser
[x] No duplicated service data
[x] No unnecessary dependencies
[x] No backend/API changes
[x] Final QA report produced
```

---

## Files changed this QA pass

- `src/app/globals.css`
- `src/components/Hero.tsx`
- `src/components/Method.tsx`
- `src/components/Problem.tsx`
- `src/components/Services.tsx`
- `src/components/GrowthStack.tsx`
- `src/components/theme/ThemeToggle.tsx`
- `docs/qa-light-theme.md` (this file)

Not touched: `src/app/api/**`, `src/lib/contact-schema.ts`, `src/lib/rate-limit.ts`, `src/data/services.ts`.
