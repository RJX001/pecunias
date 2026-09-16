# Content implementation map — Agent 1 → Agent 2

**Mode:** integration overlay. Do not rebuild.  
**Approved copy source:** `PecuniaStudios-Cursor-4-SubAgent-Implementation.md` (Word doc is not in the repo).  
**Typed copy already extracted (use these; do not paraphrase):**

| Module | Path | MD sections |
|---|---|---|
| Hero | `src/data/hero-headlines.ts` | §§5–7 |
| Growth Stack (4 systems) | `src/data/growth-stack.ts` | §9 |
| Approach (6 stages) | `src/data/approach.ts` | §11 |
| Remaining homepage / chrome | `src/data/homepage-copy.ts` | §§4, 8, 12–18 |

Do **not** duplicate or reshape `src/data/services.ts`.

---

## Recommended homepage order after integration

Keep the same component files. Reorder `src/app/page.tsx` only.

| # | Approved section (MD) | Existing component | `id` |
|---|---|---|---|
| — | Header | `Header` | — |
| 1 | Hero §§5–7 | `Hero` | — |
| 2 | Growth Philosophy §8 | `System` | keep `id="system"` (legacy hash) |
| 3 | Our Services — The Growth Stack §9 | `GrowthStack` | keep `id="stack"` |
| 4 | The Pecunia Approach §11 | `Method` | **add** `id="approach"` |
| 5 | Our Commitment §12 | `Why` | optional `id="commitment"` |
| 6 | Why Pecunia? §13 | `Problem` | optional `id="why"` |
| 7 | Built For Businesses Serious About Growth §14 | `BrandStatement` | — |
| 8 | About Pecunia Studios §15 | `About` | keep `id="about"` |
| 9 | The Standard §16 | `Philosophy` | — |
| 10 | Final CTA §17 + existing form | `Contact` | keep `id="contact"` |
| — | Footer §18 | `Footer` | — |

**Drop from `page.tsx` composition (do not delete the files):** `Results`, `Work`.

Current live order for comparison:

```text
Header, Hero, System, Problem, GrowthStack, Method, Why, Results, Work, About, Philosophy, Contact, BrandStatement, Footer
```

Target order:

```text
Header, Hero, System, GrowthStack, Method, Why, Problem, BrandStatement, About, Philosophy, Contact, Footer
```

---

## Nav / CTA destination mapping

All booking CTAs use the **existing** contact section. Do not add checkout, Calendly, or a new route.

| Control | Approved label | Destination |
|---|---|---|
| Header nav item 1 | `Services` | `/#stack` |
| Header nav item 2 | `Approach` | `/#approach` |
| Header nav item 3 | `About` | `/#about` |
| Header CTA (desktop + mobile) | `Book A Call` | `/#contact` |
| Hero CTA | `Make The Move →` | `/#contact` (hero currently uses `#contact`; prefer `/#contact` for consistency with Header) |
| Final CTA copy | `Start A Growth Project →` | `/#contact` — this **is** the Contact section. Overlay §17 headline + support onto `Contact`. Do **not** add a second button that only re-anchors to the same section. Do **not** rename the form submit control (leave `Submit request`). |
| Footer CTA | `Book A Call` | `/#contact` |

Replace current Header links:

```text
System → /#system
Stack → /#stack
Work → /#work
About → /#about
Start a project → /#contact
```

Keep sticky/fixed header, scroll background, burger, Escape-to-close, body scroll lock. Labels and hrefs only.

`/services` stays live. Do not put it in primary nav unless RJ decides otherwise (see Conflicts). Footer may keep a `/services` link.

---

## Section map

### 0. Header (chrome)

```text
Existing section     Header (System / Stack / Work / About + Start a project)
→ Target section     Nav §4: Services | Approach | About | Book A Call
→ Existing component Header
→ Files affected     src/components/Header.tsx
                     src/data/homepage-copy.ts  (NAV_LINKS, NAV_CTA)
→ Content changes    Swap NAV_LINKS and CTA label. Keep PECUNIA·STUDIOS lockup.
→ Animation changes  None. Keep existing mobile stagger.
→ Risk level         low
→ Reuse vs new       Reuse Header. Import nav from homepage-copy.ts.
```

---

### 1. Hero

```text
Existing section     Hero: “Growth is a system, not a stack of vendors.”
                     + dual CTAs + 6-node rail already cycling
→ Target section     Hero §§5–7
→ Existing component Hero
→ Files affected     src/components/Hero.tsx
                     src/data/hero-headlines.ts
→ Content changes    Replace H1 + support + primary CTA.
                     Add identity + lead-in + rotating 6 headlines.
                     Remove ghost CTA “See the system” (not in approved copy).
                     Keep rail nodes — already exact §7 list.
→ Animation changes  NEW: headline rotation (Agent 3 owns polish).
                     KEEP: existing node rail interval (currently 1400ms).
                     Reduced motion: show a readable static headline (first
                     or all stacked) AND rail settled on last node (already).
                     Reserve min-height so phrases do not resize the hero.
→ Risk level         med (new rotation inside existing hero)
→ Reuse vs new       Reuse Hero + Magnetic. New data module only.
```

**Approved strings (do not rewrite):** `HERO_IDENTITY`, `HERO_LEAD_IN`, `HERO_HEADLINES`, `HERO_SUPPORT`, `HERO_CTA`, `HERO_RAIL` in `src/data/hero-headlines.ts`. MD §§5–7.

**Suggested hero structure (smallest overlay):**

```text
Pecunia Studios                          ← identity (can be kicker-scale)
You're one move away from...             ← lead-in
[rotating headline]                      ← H1, reserved height
support paragraph 1
support paragraph 2
Make The Move →                          ← Magnetic, /#contact
Strategy → Build → Acquire → Convert → Automate → Scale   ← existing <ol>
```

Do not add a second animation library. Do not per-character split unless already in the project (it is not).

---

### 2. Growth Philosophy

```text
Existing section     System: “One team, one system” + 6 hover/focus stages
                     (Strategy / Build / Acquire / Convert / Automate / Scale)
→ Target section     Growth Philosophy §8
→ Existing component System
→ Files affected     src/components/System.tsx
                     src/data/homepage-copy.ts  (GROWTH_PHILOSOPHY)
                     src/app/page.tsx           (stays 2nd; nav no longer targets it)
→ Content changes    Replace kicker/H2/support + remove the 6-stage button rail.
                     Render heading, statement, two supporting paragraphs,
                     then emphasis line.
→ Animation changes  Drop hover-expand stages (duplicate of hero rail).
                     One Reveal on the block. Emphasis line strongest
                     (existing .display / text-green). Agent 3: one
                     orchestrated reveal, not per-sentence.
→ Risk level         med (interactive rail removed from this component)
→ Reuse vs new       Reuse System shell + Reveal. Content overlay.
```

**Why this mapping:** MD has no “System” section. Hero already owns `Strategy → … → Scale`. Approach owns Diagnose → Scale. Keeping System’s 6-stage UI would be a third rail not in the approved outline.

Keep `id="system"` so old hashes do not 404-scroll.

**Approved strings:** `GROWTH_PHILOSOPHY` in `src/data/homepage-copy.ts`. MD §8.

---

### 3. Our Services — The Growth Stack

```text
Existing section     Growth stack: “Five lines. One system.”
                     5 exclusive accordion rows
                     Digital / Acquisition / Automation / Commerce / Creative
→ Target section     Our Services — The Growth Stack §9 (FOUR systems)
→ Existing component GrowthStack
→ Files affected     src/components/GrowthStack.tsx
                     src/data/growth-stack.ts
→ Content changes    Heading + intro from data module.
                     Replace ROWS with growthStack (4 items).
                     Each open panel: description, body[], optional closing,
                     “What we do” list.
                     Raise max-height: current 12rem will clip approved copy.
→ Animation changes  Keep exclusive accordion + plus-rotate.
                     Do NOT switch to independent open (Services.tsx on
                     /services already has independent Set — leave that
                     page alone). MD §10 “independent” applies if already
                     independent; homepage is exclusive — preserve exclusive.
                     Agent 3: smoother height if 12rem janks; no extra hover.
→ Risk level         med (5→4 rows, much longer panels)
→ Reuse vs new       Reuse GrowthStack accordion. New data module.
```

**Approved strings:** `GROWTH_STACK_HEADING`, `GROWTH_STACK_INTRO`, `growthStack` in `src/data/growth-stack.ts`. MD §§9.1–9.4.

Never add WordPress Website Development or eBay Marketplace Management.  
Do not import `@/data/services` into this homepage section.

---

### 4. The Pecunia Approach

```text
Existing section     Method: “How the system is installed.”
                     5 steps: Diagnose / Build / Activate / Optimise / Scale
→ Target section     The Pecunia Approach §11 (SIX stages)
→ Existing component Method
→ Files affected     src/components/Method.tsx
                     src/data/approach.ts
→ Content changes    Heading, intro, supporting copy from data module.
                     Replace STEPS with approachStages (6).
                     Add id="approach".
                     Drop “Activate”; add “Strategise” and “Launch”.
                     UK spelling: Strategise, Optimise.
→ Animation changes  KEEP scroll-fill progress rail + last-step glow.
                     Extend delay across 6 rows.
                     Agent 3: progressive Diagnose → Scale; Scale may keep
                     the existing subtle completion treatment.
→ Risk level         med (5→6, much longer copy per row)
→ Reuse vs new       Reuse Method rail. New data module.
```

**Approved strings:** `APPROACH_HEADING`, `APPROACH_INTRO`, `APPROACH_SUPPORT`, `approachStages` in `src/data/approach.ts`. MD §§11.1–11.6.

---

### 5. Our Commitment

```text
Existing section     Why: 5 editorial tiles + “One growth system.” closer
→ Target section     Our Commitment §12
→ Existing component Why
→ Files affected     src/components/Why.tsx
                     src/data/homepage-copy.ts  (COMMITMENT)
→ Content changes    Replace BLOCKS with heading, statement, support,
                     10-item editorial list, closing paragraph.
                     Keep hairline ledger grid / statement list.
                     No icon-card grid. No fake stats.
→ Animation changes  Existing Reveal on header is enough.
                     Agent 3: subtle editorial reveal only.
→ Risk level         low
→ Reuse vs new       Reuse Why layout language. Copy overlay.
```

**Approved strings:** `COMMITMENT` in `src/data/homepage-copy.ts`. MD §12.

---

### 6. Why Pecunia?

```text
Existing section     Problem: “Tools without a system is just noise.”
                     + chip → PECUNIA convergence (one-shot IO)
→ Target section     Why Pecunia? §13
→ Existing component Problem
→ Files affected     src/components/Problem.tsx
                     src/data/homepage-copy.ts  (WHY_PECUNIA)
                     src/app/page.tsx           (move after Why / Commitment)
→ Content changes    Overlay heading + copy + emphasis + then + closing.
                     Keep existing chips as the visual system (not approved
                     copy; do not invent new chip labels).
→ Animation changes  KEEP one-shot merge. Do not add per-chip hover.
                     Agent 3: make convergence more readable if needed.
                     Respect reduced motion (chips should still be readable).
→ Risk level         low
→ Reuse vs new       Reuse Problem convergence. Copy overlay.
```

**Approved strings:** `WHY_PECUNIA` in `src/data/homepage-copy.ts`. MD §13.

---

### 7. Built For Businesses Serious About Growth

```text
Existing section     BrandStatement: “Build the system. / Scale the business.”
                     (currently last section before Footer)
→ Target section     Built For Businesses Serious About Growth §14
→ Existing component BrandStatement
→ Files affected     src/components/BrandStatement.tsx
                     src/data/homepage-copy.ts  (BUILT_FOR)
                     src/app/page.tsx           (move before About)
→ Content changes    Heading, two paragraphs, three statement lines.
                     No stock imagery.
→ Animation changes  None required in Agent 2. Agent 3: treat the three
                     closing lines as a sequence / strong editorial list.
→ Risk level         low
→ Reuse vs new       Reuse BrandStatement large-type shell.
```

**Approved strings:** `BUILT_FOR` in `src/data/homepage-copy.ts`. MD §14.

---

### 8. About Pecunia Studios

```text
Existing section     About: “A growth systems company.” + two paragraphs
→ Target section     About Pecunia Studios §15
→ Existing component About
→ Files affected     src/components/About.tsx
                     src/data/homepage-copy.ts  (ABOUT)
→ Content changes    Heading, subheading, five approved paragraphs.
                     Keep id="about".
→ Animation changes  Keep one Reveal wrapping eyebrow/heading/body.
                     Do not animate every sentence.
→ Risk level         low
→ Reuse vs new       Reuse About.
```

**Approved strings:** `ABOUT` in `src/data/homepage-copy.ts`. MD §15.

---

### 9. The Standard

```text
Existing section     Philosophy: 7 scroll-highlight lines
                     “Build less noise. Create more growth.”
→ Target section     The Standard §16
→ Existing component Philosophy
→ Files affected     src/components/Philosophy.tsx
                     src/data/homepage-copy.ts  (STANDARD)
→ Content changes    Replace 7 lines with heading + statement + support + closing.
                     Do not invent extra lines to fill the old 7 slots.
→ Animation changes  KEEP sequential highlight if it still fits 3 text blocks
                     (statement / support / closing). First + last stronger
                     (statement + closing). Last may stay green.
                     Agent 3: block-level, not per-sentence spam.
→ Risk level         low
→ Reuse vs new       Reuse Philosophy highlight behaviour.
```

**Approved strings:** `STANDARD` in `src/data/homepage-copy.ts`. MD §16.

---

### 10. Final CTA + contact form

```text
Existing section     Contact: “Start with the constraint. Not a deck.”
                     + notes + POST /api/contact form
→ Target section     Final CTA §17 (copy) + existing booking form
→ Existing component Contact
→ Files affected     src/components/Contact.tsx  (intro copy only)
                     src/data/homepage-copy.ts  (FINAL_CTA)
→ Content changes    Replace h2 + support with FINAL_CTA.headline / .support.
                     May render FINAL_CTA.cta as a visual line above the form
                     (same section, not a new destination).
                     KEEP form fields, SERVICE_OPTIONS import, fetch, status UI.
                     KEEP submit label “Submit request”.
                     KEEP existing NOTES or drop if they fight §17 — prefer
                     drop the three notes so approved copy is not mixed with
                     older “No generic proposals” lines. FLAG if RJ wants them.
→ Animation changes  Keep Magnetic on submit. No new cursor effects.
→ Risk level         low (copy only) / high if form logic is touched — don’t
→ Reuse vs new       Reuse Contact + API. Copy overlay on header only.
```

**Approved strings:** `FINAL_CTA` in `src/data/homepage-copy.ts`. MD §17.

**Do not edit:** `src/app/api/**`, `src/lib/contact-schema.ts`, `src/lib/rate-limit.ts`.

---

### 11. Footer

```text
Existing section     Footer: PECUNIA·STUDIOS, 5 service names, System/Work/Stack,
                     “© 2026 Pecunia Studios.” / “One growth system.”
→ Target section     Footer §18
→ Existing component Footer
→ Files affected     src/components/Footer.tsx
                     src/data/homepage-copy.ts  (FOOTER, NAV_*)
→ Content changes    Brand, descriptor, services line, copyright from FOOTER.
                     Preserve a company/nav column (required by current site):
                     Services → /#stack, Approach → /#approach, About → /#about,
                     plus /services (existing route — do not drop).
                     CTA → Book A Call / /#contact.
→ Animation changes  None.
→ Risk level         low
→ Reuse vs new       Reuse Footer.
```

**Approved strings:** `FOOTER` in `src/data/homepage-copy.ts`. MD §18.

---

### Out of approved outline (leave files, remove from homepage)

```text
Existing section     Results: “Numbers go here when they are real.” 0/0 counters
→ Target section     None in MD
→ Existing component Results
→ Files affected     src/app/page.tsx (omit import/render only)
→ Content changes    None in Results.tsx
→ Animation changes  None
→ Risk level         low
→ Reuse vs new       Keep file unused. Do not invent statistics.
```

```text
Existing section     Work: “[the problem]” / “[the outcome]” template card
→ Target section     None in MD
→ Existing component Work
→ Files affected     src/app/page.tsx (omit import/render only)
                     Header currently links /#work — that hash goes away with nav
→ Content changes    None in Work.tsx
→ Animation changes  None
→ Risk level         low
→ Reuse vs new       Keep file unused. Placeholders stay placeholders.
```

---

## Motion inventory vs existing utilities (Agent 3, after Agent 2)

Reuse, do not replace:

| MD §19 item | Existing | Action |
|---|---|---|
| 1. Hero headline rotation | Not present | Add in Hero; 6 phrases from `HERO_HEADLINES` |
| 2. Hero system rail | `Hero.tsx` `NODES` + CSS scaleX | Polish; keep CSS (no new SVG lib). Optional hairline connector only if it does not rewrite the `<ol>` |
| 3. Scroll reveals | `.reveal` + `Reveal.tsx` (opacity 0→1, translateY 24px, one-shot IO) | Reuse everywhere new headings/body |
| 4. Growth Stack accordion | `GrowthStack` exclusive + max-height | Keep; raise height for new copy |
| 5. Approach progressive activation | `Method` fill-on-intersect + Scale glow | Keep; 6 stages |
| 6. Why Pecunia convergence | `Problem` chip merge | Keep; move section later |
| 7. Commitment editorial reveal | `Why` + `Reveal` | Keep restrained |
| 8. Philosophy / Standard | `Philosophy` line highlight | Retarget to 3 Standard blocks |
| 9. CTA magnetic | `Magnetic.tsx` | Keep on Header/Hero/Contact/Footer CTAs |

`prefers-reduced-motion` already globally short-circuits transitions in `globals.css`. Hero interval and Problem timeout must still no-op / show final readable state.

Do not add a motion library.

---

## Visual system — PRESERVE

Already implemented and **not** to be flipped for this overlay:

- Near-black `#0A0A0B`, green `#84E4A8`, Archivo via `layout.tsx`
- Tokens in `src/app/globals.css` `:root`
- Dark-only: `layout.tsx` has no `ThemeProvider` / `ThemeToggle`
- No light/dark toggle in the live header

MD §22 mentions cream/light, brass, IBM Plex, editorial serif **“where already specified / already implemented.”** Those belong to the older cream/ledger build (`pecuniastudios-theme-spec.md`, `docs/build-audit-shell.md`). They are **not** the live visual system.

**Recommend: PRESERVE current dark/green/Archivo.** Do not re-enable cream/light or IBM Plex for this task.

---

## What to KEEP unused vs delete

**Do not delete.** Flag and leave:

| Path | Why |
|---|---|
| `src/components/Results.tsx` | Honest 0-stat placeholder; omitted from page only |
| `src/components/Work.tsx` | Case-study template; omitted from page only |
| `src/components/ResultsCarousel.tsx` | Unused leftover (brass/mono). Not imported by `page.tsx` |
| `src/components/WorkCarousel.tsx` | Unused leftover. Not imported by `page.tsx` |
| `src/data/work.ts` | Placeholder case studies; only consumed by unused carousels |
| `src/data/clients.ts` | Placeholder client names; unused |
| `src/components/theme/ThemeProvider.tsx` | Unused; live site is dark-only |
| `src/components/theme/ThemeToggle.tsx` | Unused; references `--brass` / `--stone` from old theme |
| `src/components/Services.tsx` | **Used** by `/services` — keep |
| `src/data/services.ts` | **Used** by `/services` — do not change shape or items |

---

## Conflicts to FLAG for RJ

1. **Nav “Services” vs `/services` page**  
   Approved nav label is `Services`. Live catalogue lives at `/services` (`Services.tsx` + 6 codes / 18 items) and is titled “Stack \| Pecunia Studios”. This map sends primary nav to `/#stack` (homepage 4-system Growth Stack) and keeps `/services` in the footer. Confirm if Services should go to `/services` instead.

2. **4 homepage growth systems vs 6 `/services` codes**  
   Homepage: Digital & E-commerce, Paid Growth, Organic Growth & Content, AI/Automation & CRM.  
   `/services`: WD / DM / PA / MS / CS / AD.  
   These are different taxonomies. Do not force-merge. Contact dropdown still uses the 6 `SERVICE_OPTIONS` in `contact-schema.ts` (untouchable). AI/Automation & CRM has **no** matching service code (AD is App Development).

3. **Theme toggle unused vs MD §22 / Agent 4 “existing theme toggle works”**  
   Toggle files exist; `layout.tsx` does not wire them. Live site is dark/green/Archivo. Older specs want cream/light + IBM Plex + brass. **Preserve dark/green/Archivo.** Do not re-wire the toggle in this overlay.

4. **Results 0/0 placeholders**  
   `Results.tsx` is structurally honest (“Numbers go here when they are real.”). Approved MD has no Results section. This map omits it from the homepage. Restore only when real figures exist. Do not invent stats.

5. **Work case-study placeholders**  
   `Work.tsx` still has `[the problem]` / `[the outcome]` / `0 / 0 / 0`. `work.ts` has named illustrative studies (`Kindling & Co.`, etc.) used only by unused carousels. Approved MD has no Work section. Omit from homepage; keep files.

6. **`/services` page copy still says “Five lines. One system.”**  
   That heading matches neither 6 codes nor 4 homepage systems. Out of Agent 2 homepage scope unless RJ asks. Do not change `services.ts`.

7. **System 6-stage hover rail removed**  
   Mapping overlays Growth Philosophy onto `System.tsx` and retires that rail because Hero + Approach already cover the two approved 6-node sequences. Flag if RJ wants it kept as an extra section.

8. **Contact intro notes**  
   Current “No generic proposals / No public price list / Scoped to the actual constraint” is not in MD §17. This map prefers dropping them so approved Final CTA copy stands alone.

9. **Stale audit docs**  
   `docs/build-audit-*.md` describe the previous cream/Fraunces/IBM Plex build, not the live dark/Archivo site. Ignore them for this overlay.

---

## Explicit instructions for Agent 2

### Edit these

| File | What |
|---|---|
| `src/app/page.tsx` | Reorder as specified. Stop rendering `Results` and `Work`. |
| `src/components/Header.tsx` | Nav + CTA from `homepage-copy.ts`. Keep behaviour. |
| `src/components/Hero.tsx` | Copy + rotating headlines from `hero-headlines.ts`. Keep rail. One CTA. |
| `src/components/System.tsx` | Growth Philosophy copy. Remove 6-stage buttons. Keep `id="system"`. |
| `src/components/GrowthStack.tsx` | 4 systems from `growth-stack.ts`. Keep accordion. Raise panel height. |
| `src/components/Method.tsx` | 6 stages from `approach.ts`. Add `id="approach"`. |
| `src/components/Why.tsx` | Commitment copy. Editorial list, not icons. |
| `src/components/Problem.tsx` | Why Pecunia copy. Keep chip merge. |
| `src/components/BrandStatement.tsx` | Built For copy. |
| `src/components/About.tsx` | About copy. Keep `id="about"`. |
| `src/components/Philosophy.tsx` | The Standard copy. |
| `src/components/Contact.tsx` | Overlay Final CTA intro copy only. Form/API untouched. |
| `src/components/Footer.tsx` | Footer copy + nav hashes. Keep `/services` link. |

Optional, low-risk: `src/app/layout.tsx` **metadata description only** (currently names Digital / Acquisition / Automation / Commerce / Creative). Do **not** change fonts or wrap `ThemeProvider`.

### Leave alone

```text
src/app/api/**
src/lib/contact-schema.ts
src/lib/rate-limit.ts
src/data/services.ts
src/app/services/page.tsx
src/components/Services.tsx
src/components/Results.tsx
src/components/Work.tsx
src/components/ResultsCarousel.tsx
src/components/WorkCarousel.tsx
src/data/work.ts
src/data/clients.ts
src/components/theme/**
src/components/Reveal.tsx          (reuse)
src/components/Magnetic.tsx        (reuse)
src/app/globals.css tokens         (Agent 3 may only touch motion if required)
```

Agent 2 may **import** the new `src/data/*.ts` modules created by Agent 1. Do not rewrite those strings.

### Do not

- Rebuild the app or replace working components
- Add pricing, £ amounts, packages, or budget fields
- Add WordPress Website Development or eBay Marketplace Management
- Invent statistics or fill Results/Work with fake case studies
- Duplicate `services.ts` into the homepage Growth Stack
- Change contact POST, Zod schema, or rate limiting
- Re-enable light theme / IBM Plex / brass tokens
- Delete unused leftover files
- Paraphrase approved copy

### Copy rule

If a string is in `src/data/hero-headlines.ts`, `src/data/growth-stack.ts`, `src/data/approach.ts`, or `src/data/homepage-copy.ts`, render it verbatim (punctuation, arrows, UK English, em dashes).

Agent 3 starts only after Agent 2’s content overlay is in place. Agent 3 polishes motion; Agent 3 must not rewrite copy.
