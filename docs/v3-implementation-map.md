# v3 implementation map — Agent 1 audit

**Spec:** `PecuniaStudios-Update-v3.md` §34 (About → `/about`), §37 (white light + bright green + mobile toggle), §35/§39 agent duties.
**Mode:** relocation + presentation overlay. No rebuild. No API/form/`services.ts` changes.
**Baseline audited:** commit `88c516b`. See "Observed in-progress state" — Agent 2 had already started when this audit ran.

---

## 1. Audit findings (HEAD `88c516b`)

### §35 About

| Item | Finding |
|---|---|
| Current About section | `src/components/About.tsx` — `<section id="about" className="section-pad">`, one `Reveal`, kicker + `h2` + 5 `.support` paragraphs |
| About content | `src/data/homepage-copy.ts` → `ABOUT { heading, subheading, copy[5] }`. Copy matches §34.4 verbatim. Single source of truth already. |
| Homepage render | `src/app/page.tsx` imports and renders `<About />` between `BrandStatement` and `Philosophy` |
| Nav link | `NAV_LINKS[2] = { href: "/#about", label: "About" }` — consumed by `Header.tsx` (desktop + mobile) and `Footer.tsx` (Company column). One data change fixes all three. |
| `/about` route | Does not exist at HEAD |
| Anchor IDs referencing About | Only `id="about"` in `About.tsx` and `/#about` in `NAV_LINKS`. No other `#about` in `src/`. |
| Existing page-shell pattern | `src/app/services/page.tsx` = `Header` + `<main>` + `Footer` + `metadata`. Reuse this exact shape for `/about`. |
| Dependencies on homepage placement | None. `About` imports only `ABOUT` + `Reveal`. No sibling coupling, no scroll-progress rail references it. |
| Fixed-header clearance | `Header` is `fixed`; `Hero` and `Services` use `pt-32` on the first block. `About` at HEAD has only `.section-pad` (`min(14vw,150px)` top ≈ 55px at 390px) — as a first section it would sit under the header. Needs `pt-32`-style clearance like `Services`. |

### §39 theme

```text
[x] Theme toggle exists on desktop   Header.tsx L73–80 (min-[960px]:flex row)
[~] Theme toggle exists on mobile    Only inside the open mobile menu (Header.tsx L125–130).
                                     NOT in the mobile header bar next to the hamburger.
                                     Spec §37.7 allows the menu placement, but the brief for
                                     this pass wants it visible without opening the menu.
[x] Theme state shared               Single ThemeProvider in layout.tsx; both ThemeToggle
                                     instances read the same context. No breakpoint forks.
[ ] Current Light background         --ink: #f6f0e4 (cream), --ink-2: #ece2cc,
                                     --header-bg: rgba(246,240,228,0.92)  → must become white set
[ ] Current green tokens             --green: var(--ledger) (#33473b muted)
                                     --green-soft: color-mix(ledger 20%)
                                     --green-deep: var(--ledger-light)
                                     No #84E4A8 anywhere in src/ (QA pass removed it).
[ ] Hard-coded cream                 globals.css L120  ::selection color: #f6f0e4
                                     globals.css L194  .btn-solid color: #f6f0e4
                                     (both intentional per prior QA — cream text on ink/ledger.
                                     Keep as literal or move to a token; do not swap to --paper.)
[x] Hard-coded dark green in TSX     None. All component green usage is via Tailwind
                                     text-green / bg-green / border-green-deep / bg-green-soft
                                     or var(--green-soft) / var(--ledger) in Method glow.
[x] Root data-theme                  layout.tsx <html data-theme="light" suppressHydrationWarning>
[x] Hydration/flash                  themeInitScript inline in <head>; reads localStorage
                                     "pecunia-theme"; leaves SSR light default if unset.
                                     ThemeProvider useState("light") matches SSR. Low risk.
[x] Toggle label                     "Dark" when light active, "Light" when dark. aria-label OK.
                                     Touch target: px-2.5 py-1.5 text-[10px] ≈ 28px tall —
                                     below 44px. Flag for Agent 3 (min-h-11 on mobile).
```

### Where `--green` is consumed (Agent 3 impact list)

| File | Usage | Bright-green candidate? |
|---|---|---|
| `Hero.tsx` L176–187 | rail connector `bg-green`, node dot, active label `text-green` | Yes — system/rail active state (§37.3) |
| `Method.tsx` L84, L100, L104 | progress fill `bg-green`, Scale `text-green`, glow `color-mix(var(--ledger))` | Yes — progress indicator. Glow should reference `--green` not `--ledger` |
| `GrowthStack.tsx` L61 | plus icon `text-green` | Yes — active indicator |
| `Problem.tsx` L100, 129, 141 | chip `border-green-deep text-green`, merged `bg-green-soft`, closing `.display text-green` | Yes for closing line + chip active. Watch contrast of `#84E4A8` text on white for the large `.display` (fine at display size; verify) |
| `Philosophy.tsx` L77 | active line `text-green` | Yes — emphasis |
| `System.tsx` L18 | emphasis `.display text-green` | Yes — emphasis |
| `Contact.tsx` L77, 86, 93 | `var(--green-soft)` radial wash, CTA line `text-green`, "Received" `text-green` | Wash: keep soft. Text: yes |
| `Services.tsx` L85, 90, 120, 147 | code labels `text-green`, focus ring | Yes (`/services` inherits automatically via token) |
| `globals.css` L256 | `.field:focus border-color: var(--green)` | Yes |
| `globals.css` L119 | `::selection background: var(--ledger)` | Keep ledger (muted, secondary) |
| `Results.tsx`, `ResultsCarousel.tsx`, `WorkCarousel.tsx` | `text-green`, `text-ledger`, `bg-ledger` | Unused on any route. Leave. |

**Contrast note:** `#84E4A8` on `#FFFFFF` is ~1.6:1 — fails for small text. It is acceptable for decorative rails, dots, borders, and large display emphasis. For 13–14px labels (`Hero` rail node label, `Services` code labels, `Contact` "Received", `GrowthStack` plus) Agent 3 should either pair with a darker green for small text or accept as accent-only per §37.11 and verify visually. Consider `--green-text` = `--green-deep`-style darker value for small-text use in light theme rather than flooding with one bright value. Flag, do not invent a new colour without approval.

---

## 2. Observed in-progress state (working tree at audit time)

Agent 2 had already applied the following before this map was written. Recorded so no agent re-does or reverts it:

| File | Observed change |
|---|---|
| `src/app/about/page.tsx` | NEW. `Header` + `<main><About /></main>` + `Footer`, `metadata.title = "About | Pecunia Studios"`, description = `ABOUT.subheading`. Matches `/services` shell pattern. |
| `src/app/page.tsx` | `About` import + `<About />` removed. Other sections untouched. |
| `src/components/About.tsx` | `id="about"` removed; `h2` → `h1`; `pt-32 md:pt-44` added; body wrapped in `div.mt-6 md:mt-10`; paragraphs `max-w-[60ch]`; heading `text-[clamp(40px,7vw,88px)] max-w-[12ch]`. Copy untouched. |
| `src/data/homepage-copy.ts` | 1-line change (expected `NAV_LINKS` About href `/#about` → `/about`). |

These are consistent with §34.8 "reuse existing About component → render on /about → remove homepage instance". No duplicate About markup exists.

---

## 3. Agent 2 — files to edit vs leave

### Edit

| File | Change | Status |
|---|---|---|
| `src/data/homepage-copy.ts` | `NAV_LINKS` About href → `/about`. Nothing else. | Done (verify) |
| `src/app/page.tsx` | Remove `About` import + render. Keep all other sections in current order. | Done |
| `src/app/about/page.tsx` | New route, same shell as `/services`. | Done |
| `src/components/About.tsx` | Drop `id="about"` (no in-page anchor remains), header clearance, `h1` on its own page. Copy from `ABOUT` verbatim. | Done |

### Leave

```text
src/components/Header.tsx        (Agent 3 owns the mobile toggle placement)
src/components/Footer.tsx        (consumes NAV_LINKS — auto-updates; no edit needed)
src/components/theme/**
src/app/globals.css
src/app/layout.tsx
src/app/services/page.tsx
src/components/Services.tsx
src/components/{Hero,System,GrowthStack,Method,Why,Problem,BrandStatement,Philosophy,Contact}.tsx
src/data/{hero-headlines,growth-stack,approach,services,work,clients}.ts
src/app/api/**
src/lib/contact-schema.ts
src/lib/rate-limit.ts
```

### Do not
- Add team/founder cards, timeline, stats, imagery, extra CTAs to `/about` (§34.6).
- Paraphrase `ABOUT` strings.
- Hard-code `#FFFFFF` or any colour in `About.tsx` — use `bg-bg`/tokens only (§39 Agent 2).
- Touch `Header.tsx` — avoids a merge collision with Agent 3.

---

## 4. Agent 3 — files to edit vs leave

### Edit

| File | Change |
|---|---|
| `src/app/globals.css` `:root,[data-theme="light"]` | `--ink: #ffffff; --ink-2: #f7f7f5; --header-bg: rgba(255,255,255,0.92);` Keep `--paper #181410`, `--stone #6e6558`, `--line*`, `--recessed-bg` as-is (already match §37.6). |
| `src/app/globals.css` green tokens | Replace aliases: `--green: #84e4a8; --green-soft: #1c3628; --green-deep: #25422f;` in the shared block so both themes get bright green (§37.4–37.5). Re-check `--green-soft` consumers — it was a *transparent tint* (`color-mix`) at HEAD and is used as a background wash in `Contact.tsx` L77 and `Problem.tsx` L129 (`bg-green-soft`). A solid `#1c3628` there will be a dark block on white. Either keep a separate tint token for washes or re-derive: `color-mix(in srgb, var(--green) 18%, transparent)`. Flag which is used. |
| `src/app/globals.css` `[data-theme="dark"]` | Remove the dark `--green-soft` override if the shared value now covers it; keep everything else. Do not port light values into dark. |
| `src/app/globals.css` `.btn-solid` | Keep ink bg. Text `#f6f0e4` may stay literal (contrast is fine on `#12181a`) or move to a non-swapping token. Do not use `--paper`. |
| `src/components/Method.tsx` L104 | Glow `color-mix(var(--ledger) …)` → `var(--green)` so the completion glow is bright. |
| `src/components/Header.tsx` | Add `<ThemeToggle />` in the mobile header bar between logo and hamburger (`[Logo] [Theme] [Menu]`, §37.7). Grid is `grid-cols-[1fr_auto]` on mobile — the right cell becomes a `flex gap-2` containing toggle + burger. Keep the toggle inside the open menu too, or remove that duplicate — pick one; the brief prefers header-bar placement. Keep `aria-expanded`, Escape, scroll-lock untouched. |
| `src/components/theme/ThemeToggle.tsx` | Ensure ≥44px touch target on mobile (`min-h-11` or `py-3` below `min-[960px]`). Keep label logic, `aria-label`, focus ring. Hover uses brass — fine as secondary accent. |
| `src/components/About.tsx` | Spacing/typography only if the §34.5 reference needs it (large editorial heading, left-aligned, generous space). Copy and structure stay. |

### Leave

```text
src/app/page.tsx
src/app/about/page.tsx           (Agent 2 owns; shell only)
src/app/layout.tsx               (data-theme + init script already correct)
src/components/theme/ThemeProvider.tsx
src/components/Footer.tsx
src/components/Contact.tsx       (only if --green-soft wash needs a token swap — CSS-side preferred)
src/data/**
src/app/api/**, src/lib/**
Results.tsx / ResultsCarousel.tsx / WorkCarousel.tsx / Work.tsx   (unused; leave)
```

### Verify after token change
- Both `/` and `/about` and `/services` in Light + Dark at 1440 / 1024 / 768 / 390.
- `Problem.tsx` merged chip state `bg-green-soft` on white.
- `Contact.tsx` radial wash not a hard dark ellipse.
- Hero rail labels at 13px in bright green on white — readable?
- `::selection` still ledger + cream (intentional).
- No `#f6f0e4` page background remains in light theme (`--ink`, `--header-bg`).

---

## 5. Homepage order after About removal

Unchanged apart from dropping `About`. Do **not** remove or reorder anything else.

```text
Header
Hero                (id — none)
System              id="system"      Growth Philosophy
GrowthStack         id="stack"       Our Services — The Growth Stack   ← nav Services
Method              id="approach"    The Pecunia Approach              ← nav Approach
Why                 id="commitment"  Our Commitment
Problem             id="why"         Why Pecunia?
BrandStatement                       Built For Businesses Serious About Growth
Philosophy                           The Standard
Contact             id="contact"     Final CTA + form                  ← Book A Call
Footer
```

`BrandStatement` now flows directly into `Philosophy` — spec §34.1 "flow naturally into the next approved section". Both use `.section-pad`; no spacing patch needed unless Agent 3 sees a visual gap.

---

## 6. Nav mapping

| Label | Destination | Source | Consumers |
|---|---|---|---|
| Services | `/#stack` | `NAV_LINKS[0]` | Header desktop, Header mobile, Footer |
| Approach | `/#approach` | `NAV_LINKS[1]` | same |
| About | `/about` (was `/#about`) | `NAV_LINKS[2]` | same — one edit covers all three |
| Book A Call | `/#contact` | `NAV_CTA` | Header desktop, Header mobile, Footer |
| Stack | `/services` | literal in `Footer.tsx` | Footer only — keep |

All links already go through `next/link` (`Header`, `Footer`) so `/about` works without a component change. `/#stack`, `/#approach`, `/#contact` from `/about` route back to the homepage hashes correctly because they are root-relative.

---

## 7. Conflicts / flags

1. **§34.7 sample IA is illustrative.** It lists `Hero → Our Work → Contact → Footer`. The live homepage has no `Work` section (dropped in the prior overlay) and does have Growth Philosophy / Growth Stack / Approach / Commitment / Why / Built For / The Standard, all approved in §§8–16. §34.7 itself says "alongside any other sections explicitly retained" and "do not interpret this as permission to delete other approved homepage sections". **Do not delete or restore anything.** Only About leaves the homepage.

2. **Mobile toggle placement.** §37.7 accepts either header-bar or in-menu placement, and HEAD already has in-menu. The brief for this pass asks for header-bar placement so the toggle is reachable without opening the menu. Implement header-bar; decide whether to keep the in-menu duplicate (two toggles in the DOM on mobile is harmless but redundant — recommend removing the in-menu one once the bar version exists).

3. **`--green-soft` semantics change.** Spec §37.5 gives `--green-soft: #1c3628` (a solid deep green from the old dark design). HEAD uses `--green-soft` as a translucent tint for washes/backgrounds. Blindly adopting the solid value will produce dark blocks on white in `Problem` chips and the `Contact` glow. Resolve on the CSS side (tint derived from `--green`) rather than editing components. Flag which was chosen.

4. **Bright green small-text contrast.** `#84E4A8` on white ≈ 1.6:1. Fine for rails, dots, borders, display-size emphasis. Not fine for 13px labels. §37.11 says green is an accent, not text. Agent 3 to decide per element; QA to check. Do not invent a fourth green without approval.

5. **Toggle touch target** ~28px tall at HEAD. §37.10 wants sufficient touch size. Fix in `ThemeToggle.tsx` (mobile-only sizing) — presentation only.

6. **Cream literals kept on purpose.** `::selection color` and `.btn-solid color` are `#f6f0e4` by prior QA decision (non-swapping text on dark surfaces). They are not page backgrounds and do not violate §37.1. Leave or tokenise; do not change to `--paper`.

7. **Stale docs.** `docs/content-implementation-map.md` §"Visual system — PRESERVE" says the live site is dark/green/Archivo with no theme toggle. That is out of date (commit `88c516b` made light default with Fraunces/IBM Plex). Ignore that section; `docs/qa-light-theme.md` reflects the true baseline.

8. **Parallel execution.** Agent 2 was already editing when this audit ran. Agent 3 must start from Agent 2's final tree and must not touch `About.tsx` structure or `page.tsx`. Agent 2 must not touch `Header.tsx`/`globals.css`.

---

## 8. Out of scope — do not touch

```text
src/app/api/contact/route.ts
src/lib/contact-schema.ts
src/lib/rate-limit.ts
src/data/services.ts
src/data/growth-stack.ts, approach.ts, hero-headlines.ts   (copy modules — read-only)
Contact form fields, fetch, status UI, submit label
ThemeProvider storage key / init script
Routing beyond adding /about
```
