# Overlay audit — Agent 1 implementation map

**Canonical spec:** attached `pecuniastudios-update_1__1.md` (through Change #84 + CURSOR MASTER EXECUTION CONTRACT).  
**Workspace:** `C:\Users\rajan\Documents\GitHub\pecunias`  
**Mode:** integration overlay. No rebuild. No parallel design system. No invented copy.  
**Audited:** current `src/` working tree. Agent 1 made **no** `src/` edits.

Green source of truth: `var(--green)` = `#00C978` (already set in `src/app/globals.css` for Light and Dark).

Later-change wins (do not merge conflicting versions):

| Winner | Supersedes | Rule |
|---|---|---|
| **#79** | #78 three growth statements | Comma **+ everything after** is green |
| **#82** | #81 Standard supporting paragraph | BLACK / GREEN / BLACK / GREEN |
| **#83** | any all-green Standard closing | First sentence normal; second sentence green |
| **#84** | visual-only Final CTA | `Start A Growth Project →` → existing Book A Call destination |
| **#72** | #5 / #41.6 / #63 / #51 lists | Five Title Case headlines, that order |
| **#75** | “About only on `/about`” | Short homepage About between Approach and Commitment + full `/about` |
| **#74** | #61 destination `/` and #45.2 `← Services` | Service-detail Home lands on homepage **Services section** |
| **#61** | #45.2 `← Services` label | Visible label remains `← Home` |

---

## 1. Identity inventory (do not edit the wrong file)

| Surface | Live implementation | Notes |
|---|---|---|
| Homepage / landing | `src/app/page.tsx` | Header + main sections + Footer. **No About teaser today.** |
| Services list (homepage) | `src/components/GrowthStack.tsx` | `id="stack"`. Four systems → `/services/[slug]`. |
| Services index | `src/app/services/page.tsx` + `src/components/Services.tsx` | Dedicated `/services`. Keep. |
| Service detail | `src/app/services/[slug]/page.tsx` + `src/components/ServiceDetail.tsx` | Four slugs from `growth-stack.ts`. |
| About page | `src/app/about/page.tsx` + `src/components/About.tsx` | Full five-paragraph copy. Home → `/` (wrong vs #75). |
| About homepage section | **Missing** | Required by #75 between Approach and Commitment. |
| Approach | `src/components/Method.tsx` | `id="approach"`. Legacy filename. |
| Commitment | `src/components/Why.tsx` | `id="commitment"`. Legacy filename. |
| Why Pecunia | `src/components/Problem.tsx` | `id="why"`. Legacy filename. |
| Built For / Growth statements | `src/components/BrandStatement.tsx` | No id. |
| The Standard | `src/components/Philosophy.tsx` | Legacy filename. |
| Final CTA / booking | `src/components/Contact.tsx` | `id="contact"`. Form posts `/api/contact`. |
| Header / desktop + mobile nav | `src/components/Header.tsx` | Fixed header; mobile drawer; theme toggle in bar. |
| Footer | `src/components/Footer.tsx` | CTA already before Company links. |
| Theme | `src/components/theme/ThemeProvider.tsx`, `ThemeToggle.tsx`, `src/app/globals.css`, `src/app/layout.tsx` | Light default `data-theme="light"`. |
| Hero rotating text | `src/components/Hero.tsx` + `src/data/hero-headlines.ts` | Motion lives in Hero; **copy still the old six phrases**. |
| Animation utilities | `src/components/Reveal.tsx`, `src/components/Magnetic.tsx`, plus in-component `IntersectionObserver` in Hero / Method / Problem / Philosophy | Reuse these. No new library. |
| Green / theme tokens | `src/app/globals.css` `:root` and `[data-theme="dark"]` | `--green: #00C978` already. |
| Booking form + route | `Contact.tsx` + `src/lib/contact-schema.ts` + `src/app/api/contact/route.ts` | Destination source of truth: `NAV_CTA.href` = `/#contact`. |
| Service back navigation | `ServiceDetail.tsx` `← Home` → `href="/"` | Label OK (#61). Destination must become homepage Services (#74). |
| Duplicate / legacy (do not treat as live) | See §8 | `Why` ≠ Why Pecunia; `Problem` ≠ Commitment; `Philosophy` ≠ Growth Philosophy. |

Copy sources:

- Chrome / homepage sections: `src/data/homepage-copy.ts`
- Hero: `src/data/hero-headlines.ts`
- Growth Stack + service pages: `src/data/growth-stack.ts`
- Approach stages: `src/data/approach.ts`
- **Do not** merge or edit `src/data/services.ts` (unused 12-category taxonomy).

---

## 2. Done / not-done — Changes #41–#84

| # | Status | Evidence |
|---|---|---|
| 41 | **Done** | Hero hold 4500 / exit 400 / gap 150 / enter 500; stacked spans; reduced-motion. |
| 42 | **Done** | Homepage rows are `Link`s with `→`, not accordion. |
| 43 | **Done** | `/services/digital-ecommerce`, `paid-growth`, `organic-growth-content`, `ai-automation-crm`. |
| 44 | **Done** | Shared `ServiceDetail` editorial layout. |
| 45 | **Done** (nav) / superseded (back) | Header Services → `/services`. Back label later became `← Home` (#61) then Services landing (#74). |
| 46 | **Done** | Accordion removed; data lives in `growth-stack.ts`. Leave `services.ts` unused. |
| 47 | **Done** | Full-row links; mobile header/menu intact. |
| 48 | **Done** | Reveal + modest arrow translate. |
| 49–50 | n/a | Process / review notes, not code. |
| 51 | **Done** | Rotating `h1` uses `text-green`. Copy still old list until #72. |
| 52–55 | n/a | Spec numbering jumps 51 → 56. |
| 56 | **Done** | Approach / Commitment / Why key statements and “Disconnected systems…” are full-sentence green. |
| 57 | **Done** | `--green: #00C978`. |
| 58 | **Done** | Same token both themes. |
| 59 | **Mostly done** | `--content-text: #000000` in Light. Approach stage bodies still `text-fg` (ink), not content-text — optional polish, not overlay-critical. |
| 61 | **Done** (label) | `← Home`, `aria-label="Back to Home"`. Destination still `/` until #74. |
| 62 | **Instruction** | Do not revert #61 label. |
| 63 | **Superseded by #72** | Code still has the six Title Case phrases. Treat as **not done vs #72**. |
| 64 | **Done** | System `pb-[min(6vw,64px)]`; GrowthStack `pt-[min(6vw,64px)]`. |
| 65 | **Done** | Homepage heading splits “Our Services —” / “The Growth Stack” (`text-green`). |
| 66 | **Done** (verify visually) | Approach `paddingTop: min(7vw, 72px)` vs default `.section-pad`. |
| 67 | **Done on Approach, not Growth Stack** | Spec body is `01 — Diagnose` … `06 — Scale` in `Method.tsx` (scroll-active `text-green`). Growth Stack is four **service links**, not those six stages. See Conflicts. |
| 68 | **Mostly done** | Footer CTA is before Company links, `btn-green btn-compact`. Text is `--dark-text` (`#12181a`), not `#000000`. |
| 69 | **Done** | Contact heading splits after first sentence; second phrase `text-green`. |
| 70 | **Mostly done** | Fields, order, `type="tel"`, optional social, `Submit Request`. Social not labelled optional. Submit / green CTA text not pure `#000000`. |
| 71 | **Not done** | Header Book A Call still `btn-solid` (black). Hero still renders `HERO_IDENTITY` (“Pecunia Studios”). Toggle uses `text-stone`. |
| 72 | **Not done** | `HERO_HEADLINES` is still the old six phrases. |
| 73 | **Not done** | Why Pecunia chips fade to `opacity: 0` after merge; only the centre PECUNIA box remains. |
| 74 | **Not done** | Service Home → `/` (hero). No `/#services` (live id is `stack`). |
| 75 | **Not done** | Homepage has no About between Method and Why. `/about` Home → `/`. |
| 76 | **Not done** | Commitment `ol` is static; no scroll-active green. |
| 77 | **Not done** | Closing is one `text-content-text` paragraph; second sentence not large green. |
| 78 | **Not done** (heading) | Heading is one unsplit string, no final full stop on “Serious About Growth.” |
| 79 | **Not done** | Three statements are unsplit; no comma-inclusive green spans. |
| 80 | **Not done** | Standard statement is one colour block. |
| 81 | **Do not implement** | Superseded by #82. |
| 82 | **Not done** | Support paragraph is one block; no sentence colours. |
| 83 | **Not done** | Closing is fully `text-green` when active. Must split. |
| 84 | **Not done** on homepage Final CTA | `FINAL_CTA.href` is `/#contact`, but homepage Contact renders the CTA as a `<p>`, not a link. `/services` and service detail already link it. |

---

## 3. Remaining-change maps

Only items that still need work. Owner is exclusive so Agents 2 and 3 do not share files.

### #68 leftover — Footer CTA text colour

```
Existing section
→ Footer Company column “Book A Call”
→ Existing component: Footer.tsx (placement already correct) + globals.css `.btn-green`
→ Files affected: src/app/globals.css (preferred); src/components/Footer.tsx only if a local override is required
→ Content changes required: none
→ Animation/visual changes required: `.btn-green` text `#000000` in both themes (not `--dark-text` / cream). Keep compact padding, green fill, no pill/shadow.
→ Risk level: Low
→ Owner: Agent 3
```

### #70 leftover — optional label + Submit colour

```
Existing section
→ Final CTA / booking form
→ Existing component: Contact.tsx + contact-schema.ts + globals.css
→ Files affected: Contact.tsx (optional label only, Agent 2); globals.css `.btn-green` (Agent 3, same as #68)
→ Content changes required: identify Social Media / Website Links as optional. Do not add an email field (none exists). Do not change API/validation except that empty social must remain allowed (already).
→ Animation/visual changes required: Light Theme labels + input text already `--content-text: #000000`. Submit Request must stay green + black text both themes.
→ Risk level: Low
→ Owner: Agent 2 (optional label) · Agent 3 (button colour via CSS)
```

### #71 — Header Book A Call, hero brand label, theme toggle

```
Existing section
→ Header CTA + Hero kicker + ThemeToggle
→ Existing component: Header.tsx, Hero.tsx, ThemeToggle.tsx
→ Files affected: src/components/Header.tsx, src/components/Hero.tsx, src/components/theme/ThemeToggle.tsx
→ Content changes required: remove standalone “Pecunia Studios” above the hero (stop rendering `HERO_IDENTITY` in Hero). Do not remove header `PECUNIA·STUDIOS`. Do not change “Book A Call” wording. Do not change hero rotating copy here (#72 is data-only, Agent 2).
→ Animation/visual changes required: Header (and mobile) Book A Call → `btn-green` (or equivalent) with `var(--green)` fill and `#000000` text, both themes. Rebalance hero spacing after kicker removal. Light toggle: DARK label/icon/border ink/black. Dark toggle: LIGHT label/icon/border light/white. Keep persistence and mobile-bar placement.
→ Risk level: Medium (header + hero chrome)
→ Owner: Agent 3
```

### #72 — Five Title Case rotating headlines

```
Existing section
→ Hero rotating headline
→ Existing component: Hero.tsx (consumes array; motion already #41-compliant)
→ Files affected: src/data/hero-headlines.ts only
→ Content changes required: replace `HERO_HEADLINES` with exactly:
   1. Turning Your Ambition Into Income.
   2. Being A Brand People Want To Buy From.
   3. Creating Financial Freedom.
   4. Building A 7-Figure Business.
   5. Making Your Business Work For You.
   Remove the old six. No numerals in live text. Keep Title Case including “A” and “7-Figure”.
→ Animation/visual changes required: none in Hero.tsx if Agent 2 only changes the data array. Green + timing already present.
→ Risk level: Low
→ Owner: Agent 2
```

### #73 — Why Pecunia PECUNIA boxes permanently visible

```
Existing section
→ Why Pecunia visual stage
→ Existing component: Problem.tsx (legacy name — this is Why Pecunia, not Commitment)
→ Files affected: src/components/Problem.tsx
→ Content changes required: none. Keep “Because you don't need another marketing supplier.” fully green.
→ Animation/visual changes required: chips/boxes must render visible immediately. Do not gate visibility on IntersectionObserver / timeout / `merged`. Current bug: after merge, chips go `opacity: 0` leaving a large empty stage and one PECUNIA box. Use a static visible baseline (cluster positions are fine). Optional motion only after they are already visible. Green treatment via `var(--green)`.
→ Risk level: Medium (layout + motion)
→ Owner: Agent 3
```

### #74 — Service detail Home → homepage Services section

```
Existing section
→ Service detail back control
→ Existing component: ServiceDetail.tsx; homepage target GrowthStack.tsx
→ Files affected: src/components/ServiceDetail.tsx; src/components/GrowthStack.tsx (id only)
→ Content changes required: none (keep `← Home` / “Back to Home”).
→ Animation/visual changes required: none.
→ Routing: every service Home control → homepage Services section, including direct URL visits. Native browser Back unchanged.
   Live section id is `id="stack"`; spec/QA examples use `/#services`. Rename GrowthStack `id="stack"` → `id="services"` and set Home `href="/#services"`. `html` already has `scroll-padding-top: 88px`.
→ Risk level: Low
→ Owner: Agent 2
```

### #75 — Short homepage About + full `/about` return

```
Existing section
→ Homepage between Approach and Commitment; dedicated `/about`
→ Existing component: About.tsx is the **full page** only. Homepage instance was removed.
→ Files affected: src/app/page.tsx; new homepage teaser component (preferred: src/components/AboutTeaser.tsx); src/components/About.tsx; src/data/homepage-copy.ts only if a teaser export is cleaner than slicing `ABOUT.copy[0]` + `ABOUT.copy[1]`
→ Content changes required:
   Homepage (short only):
     Heading: About Pecunia Studios
     Eyebrow: Built in 2026. Built for what's next.
     Two paragraphs = `ABOUT.copy[0]` and `ABOUT.copy[1]` exactly
     CTA: About Us → → `/about`
   Do not dump copy[2–4] on the homepage.
   `/about` already has the full five paragraphs — keep them.
   About page Home: `/#about` (not `/`).
   Homepage teaser: `<section id="about">`.
→ Animation/visual changes required: reuse Reveal / existing type. No new About design.
→ Risk level: Medium (homepage order + two About surfaces)
→ Owner: Agent 2
```

### #76 — Commitment 01–10 scroll-active green (hero motion language)

```
Existing section
→ Our Commitment numbered list
→ Existing component: Why.tsx (legacy name — this is Commitment, not Why Pecunia)
→ Files affected: src/components/Why.tsx
→ Content changes required: none. Keep the ten `COMMITMENT.items` strings exactly.
→ Animation/visual changes required: one active item at a time turns `var(--green)` as the visitor scrolls down and up. Reuse existing observer pattern from Method.tsx and/or Hero easing (`var(--ease)`, ~300ms colour). Do not add a new animation library. Do not change size/weight on active (no layout jump). Reduced-motion: keep colour, drop movement. Do not break hero rotation.
→ Risk level: Medium
→ Owner: Agent 3
```

### #77 — Commitment closing: green second sentence at statement size

```
Existing section
→ Our Commitment closing lines
→ Existing component: Why.tsx
→ Files affected: src/components/Why.tsx (same file as #76 — one Agent 3 pass)
→ Content changes required: none. Split render of `COMMITMENT.closing` only:
   “If something isn't working, we don't hide behind the numbers.” → normal `.support` / content colour
   “We find out why. Then we fix it.” → entire phrase `text-green`, same type size as `COMMITMENT.statement` (`text-[22px] font-bold md:text-[26px]`).
→ Animation/visual changes required: colour + size only. Semantic spans (wrap-safe).
→ Risk level: Low
→ Owner: Agent 3
```

### #78 heading + #79 statements — Built For Businesses

```
Existing section
→ Built For Businesses Serious About Growth
→ Existing component: BrandStatement.tsx + BUILT_FOR in homepage-copy.ts
→ Files affected: src/data/homepage-copy.ts (period / split fields); src/components/BrandStatement.tsx (spans)
→ Content changes required (Agent 2): heading must become two lines with a full stop:
   Built For Businesses
   Serious About Growth.
   Do not rewrite the three statements. Prefer structured fields over string surgery in JSX if that keeps copy exact.
→ Animation/visual changes required (Agent 3):
   “Built For Businesses” → normal heading colour
   “Serious About Growth.” → entire line including the full stop `text-green`
   Each statement: BEFORE COMMA = normal; COMMA + REST = green (#79 wins):
     ", we'll find it." / ", we'll fix it." / ", we'll scale it."
   Same type size as surrounding text. Wrap-safe semantic spans.
→ Risk level: Medium (two owners on adjacent files; BrandStatement.tsx is Agent 3 only)
→ Owner: Agent 2 = homepage-copy.ts · Agent 3 = BrandStatement.tsx
```

### #80 + #82 + #83 — The Standard (do not implement #81)

```
Existing section
→ The Standard
→ Existing component: Philosophy.tsx
→ Files affected: src/components/Philosophy.tsx
→ Content changes required: none. Do not rewrite STANDARD strings. Split in render.
→ Animation/visual changes required:
   Keep existing one-shot colour reveal if it still works, but **do not** paint whole blocks as a single colour.
   #80 statement: “If we can't measure it,” normal; “we can't improve it.” green (full stop included). Comma may stay with the ink phrase.
   #82 support (wins over #81):
     BLACK  Every engagement starts with understanding the numbers.
     GREEN  Every system is built with performance in mind.
     BLACK  Every campaign produces data.
     GREEN  Every result informs the next decision.
   #83 closing (wins over all-green):
     BLACK  Because growth isn't a feeling.
     GREEN  It's a system of decisions.
   Use `var(--green)`. Semantic sentence spans. Reduced-motion still readable.
→ Risk level: Medium
→ Owner: Agent 3
```

### #84 — Start A Growth Project → Book A Call destination

```
Existing section
→ Homepage Final CTA line under the landing/final intro (not a new page)
→ Existing component: Contact.tsx; data FINAL_CTA / NAV_CTA
→ Files affected: src/components/Contact.tsx
→ Content changes required: keep exact wording `Start A Growth Project →`.
→ Animation/visual changes required: none required. Make the control a real `<a href={NAV_CTA.href}>` (or `FINAL_CTA.href`; both are `/#contact`). Keyboard + tap. Do not create a second booking page. Do not change form/API.
→ Also already linked from Services.tsx and ServiceDetail.tsx — leave those hrefs as `/#contact`.
→ Hero CTA remains `Make The Move →` per spec #6 (not superseded). Do not rename it.
→ Risk level: Low
→ Owner: Agent 2
```

---

## 4. Homepage order after #75

```text
Header
Hero                         (no id)           start: You're one move away from...
System                       id="system"       Growth Philosophy
GrowthStack                  id="services"     Our Services — The Growth Stack   ← #74 landing (today id="stack")
Method                       id="approach"     The Pecunia Approach              ← nav Approach
AboutTeaser (new)            id="about"        short About + About Us →          ← #75
Why                          id="commitment"   Our Commitment
Problem                      id="why"          Why Pecunia?
BrandStatement                                 Built For Businesses / Serious About Growth.
Philosophy                                     The Standard
Contact                      id="contact"      Final CTA + form                  ← Book A Call
Footer
```

Do not reorder System → GrowthStack → Method. Do not put About anywhere except between Approach and Commitment.

---

## 5. Nav / CTA mapping

| Control | Destination | Source of truth | Status |
|---|---|---|---|
| Header / mobile / Footer: Services | `/services` | `NAV_LINKS[0]` | Done (#45.1). Not homepage `#stack`. |
| Header / mobile / Footer: Approach | `/#approach` | `NAV_LINKS[1]` | Done. |
| Header / mobile / Footer: About | `/about` | `NAV_LINKS[2]` | Done. |
| Header / mobile Book A Call | `/#contact` | `NAV_CTA` | Route done. Visual green is #71 (Agent 3). |
| Footer Book A Call | `/#contact` | `NAV_CTA` | Route done. Pure-black text leftover (#68). |
| Homepage service row | `/services/[slug]` | GrowthStack | Done. |
| `/services` row | `/services/[slug]` | Services.tsx | Done. |
| Service detail `← Home` | `/#services` | ServiceDetail | **Agent 2** (today `/`) |
| Homepage `About Us →` | `/about` | new teaser | **Agent 2** |
| `/about` `← Home` | `/#about` | About.tsx | **Agent 2** (today `/`) |
| `Start A Growth Project →` | `/#contact` (same as Book A Call) | `FINAL_CTA.href` / `NAV_CTA.href` | **Agent 2** on Contact.tsx |
| Hero `Make The Move →` | `/#contact` | Hero.tsx | Done. Keep wording. |

Booking source of truth remains header **Book A Call** → `/#contact`. No new booking route.

---

## 6. Do-not-touch list

Unless a numbered change above requires it:

- `src/app/api/contact/route.ts` — working submit / Resend / rate-limit
- `src/lib/contact-schema.ts` — unless Agent 2 only documents optional social (schema already optional)
- `src/lib/rate-limit.ts`
- `src/data/services.ts`, `src/data/work.ts`, `src/data/clients.ts`
- `src/components/Work.tsx`, `WorkCarousel.tsx`, `Results.tsx`, `ResultsCarousel.tsx` (unused on all routes)
- Next framework, fonts in `layout.tsx`, ThemeProvider persistence
- Service names, Approach/Commitment item wording, footer brand copy
- New animation libraries, new design tokens, new booking or service systems
- WordPress / eBay services, fake stats, public pricing

---

## 7. Conflicts / flags

1. **#67 title vs body.** Heading says “Services / Growth Stack” but the six titles are Approach stages already implemented in `Method.tsx`. Growth Stack is four clickable services. **Do not** add Diagnose…Scale highlighting to `GrowthStack.tsx`, and **do not** turn Approach stages into service links. Manager checklist “click still opens service page” applies to #42 Growth Stack rows, not #67 stages.
2. **Legacy component names.** `Why.tsx` = Commitment. `Problem.tsx` = Why Pecunia. `Philosophy.tsx` = The Standard. `System.tsx` = Growth Philosophy. Editing the wrong file will miss the spec.
3. **`#services` vs `id="stack"`.** Spec/QA use `/#services`. Live id is `stack`. Agent 2 should rename to `id="services"` so #74 QA passes. Header Services stays `/services` (the page).
4. **#75 vs prior About-only-on-`/about` work.** `/about` is correct and must stay. Homepage short section must be restored. Do not reuse full `About.tsx` on the homepage (it is an `h1` + Home link + five paragraphs).
5. **#81 vs #82.** Implementing middle-two-sentences green is a defect. Use #82.
6. **#78 vs #79.** Colouring only `we'll find/fix/scale it.` (comma left ink) is a defect. Use #79.
7. **#83 vs current Philosophy.** Closing is currently all-green when active. Must split.
8. **#84 vs Hero CTA.** Hero remains `Make The Move →`. Final CTA remains `Start A Growth Project →`. Do not swap those strings.
9. **#45.2 `← Services` vs #61/#74.** Latest: label `← Home`, destination homepage Services section.
10. **`--green-text` vs `--green`.** Small labels use `--green-text` (ledger on Light) for contrast. Display/key statements and CTAs must use `--green` / `#00C978`. Do not “fix” key statements onto `--green-text`.
11. **`.btn-green` colour.** Spec wants `#000000` text; token is `#12181a`. One CSS change covers footer, submit, and (after #71) header.
12. **No Changes 52–55** in the canonical file. Ignore.

---

## 8. Smallest safe file sets (disjoint)

### Agent 2 — content / structure / routing

```text
src/data/hero-headlines.ts          #72 phrases
src/data/homepage-copy.ts           #78 period / optional heading split fields; teaser copy only if needed
src/app/page.tsx                    #75 insert AboutTeaser between Method and Why
src/components/AboutTeaser.tsx      NEW short homepage About (id="about")
src/components/About.tsx            Home href → /#about
src/components/ServiceDetail.tsx    Home href → /#services
src/components/GrowthStack.tsx      id="stack" → id="services" only
src/components/Contact.tsx          #84: CTA <p> → <a href={NAV_CTA.href}>; optional social label
```

Do **not** edit Header, Hero, Why, Problem, Philosophy, BrandStatement, globals.css, API.

### Agent 3 — visual / motion / theme

```text
src/components/Header.tsx           #71 Book A Call → btn-green
src/components/theme/ThemeToggle.tsx  #71 ink/white contrast
src/components/Hero.tsx             #71 remove HERO_IDENTITY kicker; keep motion
src/components/Problem.tsx          #73 permanent PECUNIA boxes
src/components/Why.tsx              #76 scroll-green list + #77 closing split
src/components/BrandStatement.tsx   #78 heading colour + #79 comma spans
src/components/Philosophy.tsx       #80 + #82 + #83 spans
src/app/globals.css                 .btn-green color: #000000 (covers #68 / #70.9 / #71)
src/components/Footer.tsx           only if CSS is not enough; placement already correct
```

Do **not** edit page.tsx, hero-headlines.ts, About*, ServiceDetail, GrowthStack, Contact.tsx, API.

`Method.tsx` — leave unless visual QA shows #66 gap still excessive. #67 behaviour is already there.

### Shared / neither

`ThemeProvider.tsx`, `layout.tsx`, `Reveal.tsx`, `Magnetic.tsx`, `growth-stack.ts` (except GrowthStack id), `approach.ts`, `contact-schema.ts`, `api/contact`.

---

## 9. Agent 2 / 3 execution notes

- Preserve UK spelling (`Strategise`, `Optimise`, `colour` in copy already in data).
- Colour must follow semantic spans, not visual line breaks.
- `prefers-reduced-motion` already wired in Hero / Method / Reveal / Problem / Philosophy — keep it.
- After Agent 2, homepage order must compile with About teaser even if Agent 3 has not yet coloured BrandStatement / Philosophy.
- After Agent 3, do not revert Agent 2 routes or #72 phrases.
