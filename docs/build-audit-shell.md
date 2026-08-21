# BUILD-1 Audit — Navigation / Hero / Footer / Tokens / Page Shell

> **Scope:** Header, Hero, Footer, `layout.tsx` / `globals.css` tokens & typography (observe only), `page.tsx` composition  
> **Spec:** `pecuniastudios-build-spppp.md` §§3, 4.1, 4.2, 4.7, 5  
> **Mode:** Audit only — no source edits  
> **Date:** 2026-08-21

---

## Verdict

Shell areas (nav, hero, footer, tokens, page composition) are **largely compliant** with the build spec. Exact copy, CTAs, ledger preview content, design tokens, and section order match. Mobile nav is implemented (spec §6 gap resolved in code). Minor notes only: Fraunces is loaded via `next/font` (not the exact Google Fonts URL recipe), and the hero ledger card includes mockup-aligned extras (`PS · STMT`, Ln/Item columns) beyond the minimal §4.2 bullet list.

---

## 3. Design Tokens & Typography (observe only)

| Check | Status | Evidence |
|---|---|---|
| `--ink` `#12181A` | PASS | `globals.css` `:root` — `--ink: #12181A` |
| `--ink-2` `#181f22` | PASS | `globals.css` — `--ink-2: #181f22` |
| `--paper` `#F6F0E4` | PASS | `globals.css` — `--paper: #F6F0E4` |
| `--brass` `#A9812E` | PASS | `globals.css` — `--brass: #A9812E` (not earlier `#BE9B5E`) |
| `--brass-dim` `#7d611f` | PASS | `globals.css` — `--brass-dim: #7d611f` |
| `--ledger` `#33473B` | PASS | `globals.css` — `--ledger: #33473B` |
| `--ledger-light` `#4c6858` | PASS | `globals.css` — `--ledger-light: #4c6858` |
| `--wine` `#6B2E3A` | PASS | `globals.css` — `--wine: #6B2E3A` (reserved, present) |
| `--stone` `#9A9184` | PASS | `globals.css` — `--stone: #9A9184` |
| `--line` / `--line-strong` | PASS | Exact rgba values match spec |
| Tokens mapped into Tailwind theme | PASS | `@theme inline` maps `--color-*` and `--font-*` |
| Display font: Fraunces | PASS | `layout.tsx` — `Fraunces` → `--font-fraunces`; `@theme` `--font-display` |
| Body font: IBM Plex Sans 400/500/600 | PASS | `layout.tsx` — `weight: ["400", "500", "600"]` |
| Mono font: IBM Plex Mono 400/500 | PASS | `layout.tsx` — `weight: ["400", "500"]` |
| Fraunces opsz + italic | PASS | `axes: ["opsz"]`, `style: ["normal", "italic"]` |
| Exact Google Fonts URL recipe | PARTIAL | Loaded via `next/font/google` instead of the CSS `@import` URL in §3; weights/axes covered for variable Fraunces, not the literal subset string |
| Max content width `1180px` | PASS | `.wrap { max-width: 1180px }` |
| Side padding `32px` | PASS | `.wrap { padding: 0 32px }` (≤720px reduces to 20px — responsive, not in §3 prose) |
| Section vertical padding `100px` | PASS | `.section { padding: 100px 0 }` |
| Hairline section borders (`--line`) | PASS | `.section { border-top: 1px solid var(--line) }` |

---

## 4.1 Navigation (Header)

| Check | Status | Evidence |
|---|---|---|
| Sticky header | PASS | `Header.tsx` — `sticky top-0 z-50` |
| Logo copy `PECUNIA · STUDIOS` | PASS | Logo text split with middle-dot between words |
| Brass middle-dot | PASS | `<span className="... text-brass">·</span>` |
| Links: Services, Work, About | PASS | `NAV_LINKS` → `#services`, `#work`, `#about` |
| Contact as button “Request a Quote” | PASS | Solid brass link to `#contact`, label exact |
| Desktop nav visible ≥900px | PASS | `.ps-header-desktop` shown at `min-width: 900px` |
| Mobile hamburger below 900px | PASS | Toggle + burger UI; desktop hides toggle/panel |
| Mobile menu functional | PASS | Open/close state, overlay, Escape, scroll lock, link close — §6 known gap addressed |

---

## 4.2 Hero

| Check | Status | Evidence |
|---|---|---|
| Eyebrow copy | PASS | `Digital Studio · Est. Quote-on-Request` |
| H1 copy | PASS | `Digital revenue, engineered and itemized.` |
| “engineered” italic + brass | PASS | `<em className="... italic text-brass ...">engineered</em>` |
| Subhead copy (exact) | PASS | Matches §4.2 word-for-word |
| CTA “Request a Quote” → `#contact` | PASS | Solid brass button |
| CTA “View Services” → `#services` | PASS | Outline button |
| Ledger card label “Statement Preview” | PASS | Aside header mono label |
| `6 service lines` | PASS | Line item 01 text |
| `18 capabilities` | PASS | Line item 02 text |
| Six code chips WD/DM/PA/MS/CS/AD | PASS | `SERVICE_CODES` mapped to six chips |
| Ledger / statement metaphor | PASS | `ledger-card` aside with statement header + line items + codes |
| Extra ledger chrome vs minimal bullets | PARTIAL | Also renders `PS · STMT` and Ln/Item column headers — consistent with ledger metaphor / mockup, not listed in §4.2 bullets |

---

## 4.7 Footer

| Check | Status | Evidence |
|---|---|---|
| Signature italic serif | PASS | `font-display` italic: `"Balance carried forward: your growth."` |
| Links: Services, Work, Contact | PASS | `FOOTER_LINKS` → `#services`, `#work`, `#contact` |
| Copyright `© 2026 PecuniaStudios.` | PASS | Exact string in mono |

---

## page.tsx composition

| Check | Status | Evidence |
|---|---|---|
| Order: Header → Hero → Services → Work → About → Contact → Footer | PASS | `page.tsx` composes that sequence; body sections inside `<main>` |
| Shell sections present | PASS | `Header`, `Hero`, `Footer` imported and rendered |

---

## 5. Explicit Constraints (shell-relevant)

| Check | Status | Evidence |
|---|---|---|
| No pricing in shell | PASS | Header/Hero/Footer copy has no prices, tiers, or “from £” |
| CTAs → quote/contact, not checkout | PASS | Primary CTAs target `#contact`; secondary `#services` |
| No public retainer/project pricing model copy | PASS | Shell does not describe engagement account types |
| Ledger metaphor intact in hero | PASS | Statement Preview ledger card present |
| WordPress / eBay exclusion | PASS | N/A to shell components (no service line items here) |

---

## Gaps

Nothing blocking for shell compliance. Optional parent follow-ups only:

1. **Fraunces load recipe** — Confirm `next/font` variable Fraunces exposes the same optical-size / weight behaviour as the §3 Google Fonts URL (300/500/600 + italic 400). Observe-only; do not change unless parent requests.
2. **Hero extras** — `PS · STMT` and Ln/Item chrome exceed the §4.2 bullet list; treat as mockup fidelity unless parent wants prose-minimal hero.
3. **Out of shell scope (not audited here)** — Services accordion data, Work placeholders, Contact API, About stats (§4.3–4.6 / §6) remain for other build agents.

---

## Files reviewed (read-only)

- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/Footer.tsx`
- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
