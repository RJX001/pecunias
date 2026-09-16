# QA report — Update v3 (About → `/about`, white light theme, mobile toggle)

**Agent:** 4 (QA + integration)
**Date:** 16 September 2026
**Spec:** `PecuniaStudios-Update-v3.md` §34.10, §37.7–37.11, §40
**Build:** `npx next build` — **PASS** (Next.js 16.3.1, Turbopack). Routes: `/` `/about` `/services` static, `/api/contact` dynamic.

## Overall verdict: PASS WITH NOTES

Everything in the brief verifies against the production build output and a `next start` smoke test. Fixes in this pass are presentation-only (one CSS token + class swaps). No copy was changed, no homepage section was removed or reordered, and `src/app/api/**`, `src/lib/**`, `src/data/services.ts` are untouched (`git diff --stat` on those paths is empty).

The single reason this is not a clean PASS: no browser tool was available in this session, so the five viewports in §34.10 and the Dark toggle click were verified from source, compiled CSS and prerendered HTML rather than by pixel. A manual click-through at 390px and 1440px (Light + Dark) is still recommended before push.

---

## Brief checklist

| Check | Result | Evidence |
|---|---|---|
| Homepage HTML has no About body copy | PASS | `.next/server/app/index.html` contains none of the 5 `ABOUT.copy` paragraphs, the heading, or the subheading |
| Homepage has no `#about` | PASS | No `id="about"` and no `#about` href anywhere in `index.html` |
| `/about` has approved paragraphs verbatim | PASS | All 5 `ABOUT.copy` paragraphs match exactly (entity-escaped `'` accounted for) inside `<p class="support …">`; kicker = `ABOUT.subheading`; `<h1>About Pecunia Studios</h1>`; `<title>About \| Pecunia Studios</title>` |
| Light default, both viewports | PASS | `<html data-theme="light">` in `/`, `/about`, `/services`; `themeInitScript` only overrides from `localStorage["pecunia-theme"]`; `ThemeProvider` initial state `"light"`; no breakpoint-specific theme CSS |
| Dark toggle works | PASS (source) | Single `ThemeProvider` context; both `ThemeToggle` instances call the same `toggleTheme`; `applyTheme` sets `data-theme` + `color-scheme`; persists to `pecunia-theme` |
| Toggle visible on mobile without opening menu | PASS | `Header.tsx` mobile bar `[Logo] … [Theme][Menu]` in a `flex gap-2 min-[960px]:hidden` cell; not inside the `hidden={!open}` nav. SSR HTML has 2 toggles (desktop + mobile bar), CSS shows one per breakpoint. The in-menu duplicate was removed, so there is exactly one visible toggle at any width |
| Toggle label = destination theme | PASS | `Dark` when light, `Light` when dark; `aria-label="Switch to dark/light theme"`; Moon/Sun icon so state is not colour-only (§37.10) |
| Toggle touch target | PASS | `min-h-11` (44px); hamburger `size-11` |
| No cream page background | PASS | Light `--ink: #ffffff`, `--ink-2: #f7f7f5`, `--header-bg: rgba(255,255,255,0.92)`. Compiled CSS has no `--ink:#f6f0e4`. `#f6f0e4` remains only as non-swapping text on ink (`.btn-solid`, `::selection`) — not a background |
| Other homepage sections present | PASS | `index.html` has `id=system/stack/approach/commitment/why/contact` and headings: Growth Philosophy, The Growth Stack, The Pecunia Approach, Our Commitment, Why Pecunia?, Built For Businesses Serious About Growth, The Standard, Final CTA form (`Submit request`) |
| `npx next build` passes | PASS | Compiled, TypeScript clean, 7/7 static pages |
| No API/schema changes | PASS | `git diff --stat -- src/app/api src/lib` empty. `POST /api/contact` with `{}` → `400 {"ok":false,"error":"Please check the form and try again."}` (existing behaviour). `Contact.tsx` still `fetch("/api/contact")` with `{ name, businessName, service, details }` |
| Footer About → `/about` | PASS | Footer consumes `NAV_LINKS`; `href="/about"` appears 3× in `index.html` (desktop nav, mobile nav, footer) |
| Book A Call = `/#contact`, works from `/about` | PASS | `NAV_CTA.href = "/#contact"` (root-relative); `about.html` has `href="/#contact"` 3× (desktop CTA, mobile CTA, footer CTA) |
| Runtime | PASS | `next start`: `/` 200, `/about` 200, `/services` 200, unknown route 404; server log has no errors/warnings |

---

## §34.10 QA list

```text
[x] Homepage loads without the full About section
[x] About navigation → /about               (header desktop, header mobile, footer)
[x] /about loads correctly                  (200, prerendered static)
[x] Header remains consistent               (same <Header /> on / /about /services)
[x] Footer remains consistent               (same <Footer />)
[x] Light Theme remains default
[x] Dark Theme toggle remains functional    (source; shared context)
[x] About content is complete               (heading + subheading + 5 paragraphs verbatim)
[x] No duplicate About section on homepage
[x] No broken About anchor remains          (no #about anywhere in src/ or build)
[~] Desktop responsive layout               (source: grid/min-w-0 guards; not pixel-checked)
[~] Mobile responsive layout                (source: see 390px note below; not pixel-checked)
[x] No horizontal overflow                  (html,body overflow-x: clip; min-w-0 on flex/grid children)
[~] No console errors                       (server clean; browser console not available this session)
```

**390px header estimate:** available width 350px (`--pad` 20px). Logo ≈ 145px + `gap-6` 24px + toggle ≈ 80px + `gap-2` 8px + burger 44px ≈ 301px. Fits with margin. `/about` first section has `pt-32 md:pt-44` so the `h1` clears the fixed header.

---

## §40 acceptance criteria

```text
[x] Light Theme is the default
[x] Light Theme background is WHITE                 --ink #ffffff
[x] Light Theme is not cream/beige
[x] Dark Theme remains available
[x] Theme toggle exists on desktop
[x] Theme toggle exists on mobile
[x] Mobile navigation does not hide theme access     toggle is outside the collapsible nav
[x] Toggle label describes destination theme
[x] Bright green #84E4A8 is the primary growth accent   --green in both themes
[x] Prominent green growth elements are visually bright  rails, dots, progress fills, display emphasis
[x] Green is used purposefully                       small labels moved off bright green (see fixes)
[x] Brass remains a secondary accent                 focus ring, toggle hover only
[x] Primary CTA buttons remain ink                   .btn-solid --dark-text
[x] No hard-coded conflicting theme colours          only #f6f0e4 text-on-ink literals (intentional)
[x] No hydration/theme flash where avoidable         SSR data-theme + inline init script
[x] Both themes remain responsive                    tokens only; no theme-specific layout
[x] Both themes support reduced motion               prefers-reduced-motion block unchanged
[x] Keyboard focus remains visible                   brass :focus-visible; Services ring now ledger-on-light
[x] Touch targets usable on mobile                   44px toggle + burger
[x] No horizontal overflow                           overflow-x: clip
[x] No unrelated functionality changed               API/schema/rate-limit/services data untouched
```

---

## Fixes applied this pass

### Small bright green on white (NEEDS FIX → fixed)

`#84E4A8` on `#FFFFFF` is **1.5:1**. That is fine for hairlines, dots and display-size emphasis (spec-directed accent) but unreadable at 12–20px. The brief's suggested `text-ledger` only solves light: `#33473b` on the dark `#12181a` canvas is **1.8:1**, so a straight swap would break Dark.

Fix: one semantic token, mapped to approved colours only (no new green invented):

```css
/* light */ --green-text: var(--ledger);   /* #33473b on white  ≈ 10:1 */
/* dark  */ --green-text: var(--green);    /* #84E4A8 on #12181a ≈ 11.7:1 */
```

exposed as `text-green-text` / `ring-green-text` via `@theme inline`. Switched to it:

| File | Element | Size | Was |
|---|---|---|---|
| `Services.tsx` | category code, item code | 13px / 12px | `text-green` |
| `Services.tsx` | expand chevron (UI affordance) | 14px icon | `text-green` |
| `Services.tsx` | row `focus-visible:ring` | 1px | `ring-green` (invisible on white) |
| `Contact.tsx` | "Received" label | 13px | `text-green` |
| `Contact.tsx` | "Start A Growth Project →" | 18px semibold (below WCAG large) | `text-green` |
| `Problem.tsx` | merged chips | 13–14px | `text-green` |
| `Problem.tsx` | PECUNIA badge on `bg-green-soft` tint | 18px | `text-green` |
| `Hero.tsx` | active rail label (rail line + dot stay `bg-green`) | 13px | `text-green` |
| `GrowthStack.tsx` | `+` expand indicator | 22–28px glyph | `text-green` |
| `Method.tsx` | Scale stage title on completion | 20px bold | `text-green` |

Kept **bright** `--green` (per brief: large emphasis, rails, dots): Hero rail connector + dots, Method progress fills, System display statement (32–52px), Problem emphasis line (24–40px), Philosophy closing block (22–40px), `.field:focus` border, Contact radial wash (`--green-soft` tint), Problem badge fill.

### Method glow (optional → done)

`Method.tsx` completion glow moved from `color-mix(var(--ledger) 55%)` to `color-mix(var(--green) 70%)` so the Scale line glows bright in both themes, matching the bright fill it sits on.

---

## Notes (no action required)

1. **Display-size bright green on white is ~1.5:1.** System / Problem / Philosophy emphasis lines are 22–52px, 700–800 weight, bright `#84E4A8` on white by spec (§37.3, §38). Legible as a graphic accent; it does not meet 3:1 for large text. This is a design decision the spec makes explicitly — flag only. If it does not read on a real display, `text-green-text` is a one-class swap per element.
2. **Two `ThemeToggle` nodes in SSR HTML** (desktop row + mobile bar). Only one is visible at any breakpoint; both read the same context. Harmless.
3. **`::selection` and `.btn-solid` keep literal `#f6f0e4`** — text on ink surfaces, not a page background. Intentional from the prior QA pass.
4. **`--green-soft` differs by theme on purpose.** Light derives a 22% tint of `--green` (an opaque `#1c3628` would be a dark smudge on white); dark uses the approved `#1c3628`. Contact wash and Problem badge fill both read correctly in each.
5. **`/services` copy** still says "Growth stack / Five lines. One system." — pre-existing, content decision, out of scope (already logged in `docs/qa-light-theme.md`).
6. **Browser pass outstanding**: 1440 / 1280 / 1024 / 768 / 390 in Light + Dark, Dark toggle click + persistence on reload, mobile menu open with toggle still reachable, console.

---

## Files changed this QA pass

- `src/app/globals.css` — `--green-text` token (light/dark) + `--color-green-text`
- `src/components/Services.tsx` — codes, chevron, focus ring → `green-text`
- `src/components/Contact.tsx` — "Received", CTA line → `green-text`
- `src/components/Problem.tsx` — chips, badge → `green-text`
- `src/components/Hero.tsx` — active rail label → `green-text`
- `src/components/GrowthStack.tsx` — `+` indicator → `green-text`
- `src/components/Method.tsx` — Scale title → `green-text`; glow → `--green`
- `docs/qa-v3.md` (this file)

Not touched: `src/app/api/**`, `src/lib/contact-schema.ts`, `src/lib/rate-limit.ts`, `src/data/**`, `src/app/page.tsx`, `src/app/about/page.tsx`, `src/components/About.tsx`, `src/components/Header.tsx`, `src/components/theme/**`.
