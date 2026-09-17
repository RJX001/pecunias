# QA report — Overlay final (Changes #41–#84)

**Agent:** 4 (full QA + fix)  
**Date:** 17 September 2026  
**Canonical spec:** attached `pecuniastudios-update_1__1.md` (through Change #84 + execution contract)  
**Map:** `docs/overlay-audit.md`  
**Manager checks:** `docs/manager-check-agent1.md` PASS, `docs/manager-check-agent2.md` PASS, `docs/manager-check-agent3.md` PASS / GO  

## Verdict: **PASS WITH NOTES**

Agents 2 and 3 implemented the overlay. Agent 4 re-verified against the live tree, compiled CSS, `npx tsc --noEmit`, `npx next build`, production `next start`, and curl/HTML of every required route. No specification defect required a source fix.

This is not a clean PASS because there were no browser tools in this session: theme toggle click, hero rotation over time, Commitment 01→10 while scrolling, mobile drawer, and colour-span wrapping at 390px were confirmed from source + prerendered HTML, not by clicking.

---

## 1. Files changed

### Agent 4 this pass

| File | Change |
|---|---|
| `docs/qa-overlay-final.md` | This report only |

No `src/` edits. API, schema, and unused taxonomies untouched.

### Prior overlay files (already in the working tree; not modified by Agent 4)

**Agent 2 — content / structure / routing**

- `src/data/hero-headlines.ts`
- `src/data/homepage-copy.ts`
- `src/app/page.tsx`
- `src/components/AboutTeaser.tsx` (new)
- `src/components/About.tsx`
- `src/components/ServiceDetail.tsx`
- `src/components/GrowthStack.tsx`
- `src/components/Contact.tsx`

**Agent 3 — visual / motion / theme**

- `src/components/Header.tsx`
- `src/components/theme/ThemeToggle.tsx`
- `src/components/Hero.tsx`
- `src/components/Problem.tsx`
- `src/components/Why.tsx`
- `src/components/BrandStatement.tsx`
- `src/components/Philosophy.tsx`
- `src/app/globals.css` (`.btn-green { color: #000000 }`)

`Footer.tsx` correctly left alone; compact green Book A Call already used `.btn-green`.

---

## 2. Features implemented (verified)

| Item | Result | Evidence |
|---|---|---|
| Light default, Dark retained | **PASS** | `<html data-theme="light">` on all tested routes; `[data-theme="dark"]` still in compiled CSS; `ThemeProvider` + `themeInitScript` persist `pecunia-theme` |
| Green `#00C978` | **PASS** | `--green: #00c978` in Light and Dark compiled CSS; `.btn-green` fill `var(--green)`, text `#000` |
| Header Book A Call is `btn-green` | **PASS** | Desktop + mobile: `class="btn btn-green">Book A Call</a>` → `/#contact` |
| Hero lead-in + five Title Case phrases (#72) | **PASS** | Starts `You're one move away from...`; phrases 1–5 present in order; old six (`Attracting Better Customers.` etc.) absent; `Make The Move →` unchanged |
| Hero kicker removed (#71) | **PASS** | `HERO_IDENTITY` not rendered |
| Homepage order after #75 | **PASS** | `system` → `services` → `approach` → `about` → `commitment` → `why` → `contact` |
| About teaser + `/about` | **PASS** | Homepage `id="about"`: heading, eyebrow, `ABOUT.copy[0]`+`[1]` only, `About Us →` → `/about`. Full page has all five paragraphs. Home → `/#about` |
| Service Home → `/#services` (#74) | **PASS** | All four detail pages. GrowthStack `id="services"` (no `id="stack"`). Label still `← Home` |
| Start A Growth Project → Book A Call dest (#84) | **PASS** | Homepage control is a real `<a href="/#contact">` with exact wording. Same dest as header Book A Call. No second booking route |
| Why Pecunia boxes (#73) | **PASS** | Chips + PECUNIA mark in HTML with no `opacity: 0` / merge gating. Mobile wrap + desktop cluster both present |
| Commitment 01–10 markup (#76) | **PASS** | Ten items; `01` starts `text-green`; colour-only transition; IO pattern from Approach. **Scroll-through not click-tested** (note) |
| Commitment closing (#77) | **PASS** | First sentence `.support`; `We find out why. Then we fix it.` statement-size `text-green` |
| Built For #78 + #79 | **PASS** | `Built For Businesses` ink; `Serious About Growth.` green including full stop; comma **and rest** green on all three statements |
| Standard #80 + #82 + #83 (not #81) | **PASS** | Statement split at comma; support BLACK/GREEN/BLACK/GREEN; closing first sentence ink, second green. Initial `text-fg-faint` is the kept one-shot reveal |
| Form (#70) | **PASS** | Order: Name (required), Business Name, Mobile Number `type="tel"` `autoComplete="tel"` `inputMode="tel"`, Service Needed, Project Details, Social `(optional)`, Submit Request on `.btn-green` |
| No pricing / WordPress / eBay | **PASS** | Absent from all seven routes |
| API unchanged | **PASS** | `POST /api/contact` `{}` → 400; valid payload including empty `socialLinks` → 200 `{"ok":true}` |

---

## 3. Tests / checks run

```text
npx tsc --noEmit                         PASS (exit 0)
npx next build                           PASS (Next.js 16.3.1, Turbopack)
npx eslint src                           FAIL — 6 pre-existing / motion-pattern errors (see §5)
```

**Routes (dev `:3455` and production `next start :3461`) — all 200 unless noted**

| Route | Dev | Prod |
|---|---|---|
| `/` | 200 | 200 |
| `/about` | 200 | 200 |
| `/services` | 200 | 200 |
| `/services/digital-ecommerce` | 200 | 200 |
| `/services/paid-growth` | 200 | 200 |
| `/services/organic-growth-content` | 200 | 200 |
| `/services/ai-automation-crm` | 200 | 200 |
| unknown path | — | 404 |
| `POST /api/contact` empty | 400 | 400 |
| `POST /api/contact` valid (social empty) | 200 | 200 |

Also checked: compiled CSS `--green` / `.btn-green` / `[data-theme="dark"]`; homepage section id order; later-change-wins in markup; header/footer/nav hrefs; Growth Stack slugs.

### Could not click (no browser tools)

- Theme toggle Light ↔ Dark (source + CSS tokens only)
- Hero rotating through phrases 2–5 over the 4500ms hold
- Commitment list turning green 01 → 10 on scroll down and reverse on scroll up
- Mobile hamburger open/close and in-drawer Book A Call tap
- Hash landings (`/#services`, `/#about`, `/#contact`) vs sticky header (CSS has `scroll-padding-top: 88px`)
- Colour-span wrap at ~390px
- Keyboard tab/Enter on CTAs
- Reduced-motion (source: Hero timers skipped; Commitment `motion-reduce:duration-0`; Philosophy `seen` forced true; Reveal `is-in`)
- On-page form submit UI (API contract tested via POST)

A manual pass at 390px and 1440px, Light + Dark, is still recommended before push.

---

## 4. Issues fixed

None this pass. No overlay defect was found that required a source change. Agent 3 colour spans (#79 comma-inclusive, #82 alternating support, #83 closing split) are correct in the components.

---

## 5. Remaining issues that could not be resolved

1. **No in-browser click QA** — important visual interactions listed above. Not a code blocker; a session-tooling limit.
2. **`npx eslint src` fails (6 errors)** — `react-hooks/set-state-in-effect` on Hero, Method, Philosophy, ThemeProvider reduced-motion / theme hydration; plus `@next/next/no-html-link-for-pages` on Hero `<a href="/#contact">`. These are existing motion/theme/hash-CTA patterns. Fixing them would be unrelated refactor (hydration-safe `useLayoutEffect` is the correct reduced-motion approach; spec #84 asked for a real `<a>` to `/#contact`). Typecheck and production build still pass.
3. **`/services` index Home → `/`** — not `/#services`. Change #74 applies to **service detail** pages (all four verified). Index Home to homepage root is acceptable. Header Services remains `/services`.
4. **React SSR emits `autoComplete="tel"` / `inputMode="tel"`** (camelCase) rather than lowercase HTML names. Browsers treat HTML attributes as case-insensitive; the React props are correct.

None of these is a spec functional miss against Changes #72–#84.

---

## 6. Unrelated functionality

No unrelated functionality was intentionally changed by Agent 4 (no `src/` edits).

Not touched this pass: `src/app/api/contact/route.ts`, `src/lib/contact-schema.ts`, `src/lib/rate-limit.ts`, `src/data/services.ts`, unused Work/Results components, Next config, fonts.

Agent 2/3 diffs stay inside the overlay-audit file sets. Approach Diagnose–Scale highlighting remains on `Method.tsx`, not Growth Stack.

---

## 7. Verdict

**PASS WITH NOTES**

Acceptance checklist from the query:

```text
[x] Start A Growth Project → is a real link to same dest as Book A Call (/#contact)
[x] Service Home → /#services (id=services on GrowthStack)
[x] About teaser on homepage between Approach and Commitment; /about Home → /#about
[x] Hero starts with You're one move away from...; five Title Case phrases
[x] Header Book A Call is btn-green
[x] Why Pecunia boxes not opacity 0
[x] #79 comma in green; #82 alternating sentences; #83 closing split
[x] No pricing, no WordPress/eBay
[x] Form Submit Request, mobile, social optional; API unchanged
[x] Light default, Dark still in code, green #00C978
[x] tsc + next build pass
[~] Desktop/mobile click QA, theme toggle click, Commitment scroll 01–10 — source/HTML only
```

The site is overlay-complete in code and production HTML. Remaining notes are verification-environment limits plus pre-existing ESLint rules that would require an unrelated motion/theme refactor to clear.
