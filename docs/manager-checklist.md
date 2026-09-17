# Manager checklist — Changes 65–84 overlay

**Role:** Manager (check only; no `src/` edits)  
**Canonical spec:** attached `pecuniastudios-update_1__1.md` (through Change #84)  
**Workspace:** `C:\Users\rajan\Documents\GitHub\pecunias`  
**Mode:** integration overlay — implement in the existing site; do not rebuild.

This is the verification contract used to PASS / FAIL Agents 1–4. Latest numbered change wins. Do not merge conflicting colour instructions.

---

## Precedence that must never be missed

| Rule | Wins over | Exact requirement |
|---|---|---|
| **#79** | #78 green spans | Comma **+ rest of sentence** is green: `, we'll find it.` / `, we'll fix it.` / `, we'll scale it.` |
| **#82** | #81 Standard supporting paragraph | BLACK / GREEN / BLACK / GREEN sentence order (see Agent 3/4 Standard block) |
| **#83** | all-green Standard closing | `Because growth isn't a feeling.` = normal colour; `It's a system of decisions.` = green |
| **#72** | any earlier hero phrases | Five Title Case phrases, that exact order, no numbers, no old six-phrase list |
| **#75** | any “About only on `/about`” layout | Short homepage About **between Approach and Commitment**; full copy on `/about` |
| **`--green`** | any other green | `#00C978` via `var(--green)` in Light and Dark |
| Overlay | rebuild | Reuse existing components, tokens, routes, motion, forms |
| Workers 2–4 | reports-only | **Actually implement**; inspecting is not completing |

---

## Execution contract (sequence)

```text
Agent 1  audit + map          → docs/overlay-audit.md
Agent 2  content / structure / routing
Agent 3  visual / motion / theme
Agent 4  QA + targeted fixes
```

- Sequential handoff. No parallel rewrites of the same components.
- Agent 1 must not rewrite the app.
- Later agents must not reset earlier correct work.
- Agent 4 is the final owner of verification.

---

## Agent 1 — Audit + content architect

**Expected deliverable:** `docs/overlay-audit.md` (and any map named in the spec).  
**Allowed:** inspect, map, safe preparatory notes.  
**Forbidden:** broad rewrite, new design system, invented copy, removing working features.

### Map format required for each relevant section

```text
Existing section
→ Target section
→ Existing component
→ Files affected
→ Content changes required
→ Animation changes required
→ Risk level
```

### Inventory Agent 1 must have found

- [ ] Homepage / landing page
- [ ] Services list + individual service detail pages
- [ ] About section **and** dedicated About page
- [ ] Approach, Commitment, Standard, Why Pecunia, final CTA
- [ ] Header / nav / mobile nav
- [ ] Footer
- [ ] Theme system (Light default, Dark retained)
- [ ] Hero rotating text data + motion utility
- [ ] Existing green token (`--green`)
- [ ] Booking / Book A Call route + contact form
- [ ] Service back/home routing and any existing `#services` / `#about` anchors
- [ ] Duplicate / legacy implementations so Agents 2–3 do not edit an obsolete file

### Overlay map vs Changes 65–84

Agent 1’s map must name the smallest safe files for:

| # | What the map must locate |
|---|---|
| 65 | Services heading split: “Our Services —” vs “The Growth Stack” |
| 66 | Source of Approach top gap (padding/margin/min-height/spacer) |
| 67 | Growth Stack 01–06 list + existing scroll observer (if any) |
| 68 | Footer Company column + Book A Call button |
| 69 | Final CTA heading phrase split |
| 70 | Contact form fields, labels, submit button, API payload if fields are added |
| 71 | Header Book A Call, duplicated “Pecunia Studios” hero label, theme toggle |
| 72 | Hero phrase array — **five new phrases, old six removed** |
| 73 | Why Pecunia PECUNIA boxes and any animation that hides them |
| 74 | Service-detail Home/back → `/#services` (every service route) |
| 75 | Homepage section order; short About insert; `/about`; Home → `/#about` |
| 76 | Commitment 01–10 list + reusable hero motion |
| 77 | Commitment intro second sentence colour + size token |
| 78 + **79** | Growth heading + three statements; **#79 comma-inclusive spans** |
| 80 | Standard heading second phrase |
| 81 + **82** | Standard supporting paragraph — **#82 sentence colours, not #81** |
| 83 | Standard closing statement split (not all-green) |
| 84 | “Start A Growth Project →” href = existing Book A Call route |

### Agent 1 FAIL if

- Map is missing, only a narrative, or does not name files.
- Map still treats #78/#81 all-green closing as current truth (must cite #79 / #82 / #83).
- Hero list is the old six phrases, or About is described as “removed from homepage”.
- Recommends a rebuild, new animation library, or duplicate booking/service system.
- Edits `src/` beyond genuinely required safe prep.

**Manager output:** `docs/manager-check-agent1.md` (PASS / FAIL + gaps).

---

## Agent 2 — Content + structure + routing

**Mission:** implement approved copy, section order, pages, and CTA destinations.  
**Must work from Agent 1’s audited state.**  
**Must actually ship the changes, not only document them.**

### Content (exact wording; UK English; no paraphrasing)

**Hero (#72 source of truth)**

```text
You're one move away from...

Turning Your Ambition Into Income.
Being A Brand People Want To Buy From.
Creating Financial Freedom.
Building A 7-Figure Business.
Making Your Business Work For You.
```

- [ ] Exact Title Case, including `A`, `7-Figure`
- [ ] Loop 5 → 1; no `1–5` numerals in live text
- [ ] Old phrases gone: Attracting Better Customers / Building Predictable Demand / Becoming The Obvious Choice / Breaking Your Growth Ceiling / Owning Your Market / Leaving Average Behind

**Homepage About (#75)** — between Approach and Commitment only:

```text
About Pecunia Studios
Built in 2026. Built for what's next.

Pecunia Studios was founded in 2026 by a marketing specialist and an AI
specialist with a shared belief: modern businesses shouldn't have to choose
between great marketing and great technology.

The agency was built to bring both together.
```

- [ ] CTA `About Us →` (or arrow-split equivalent) is clickable and opens `/about`
- [ ] Full About paragraphs are **not** dumped onto the homepage

**Dedicated `/about`** contains the short block **plus**:

```text
Marketing creates demand. Technology creates leverage. Data creates clarity.
Automation creates capacity. Our job is to connect them.

Today, Pecunia Studios works with ambitious businesses to build stronger
digital ecosystems, acquire better customers and create systems capable of
scaling with them.

We're not interested in being another name on your supplier list. We're here
to build what's next.
```

- [ ] No invented history, stats, founders, or testimonials

**Commitment list (#76)** — wording unchanged:

```text
01 — Clear commercial objectives
02 — Defined KPIs
03 — Transparent reporting
04 — Continuous testing
05 — Conversion optimisation
06 — Active campaign management
07 — Data-led decision making
08 — Rapid identification of problems
09 — Strategic recommendations
10 — Continuous optimisation
```

**Commitment intro (#77)** exact:

```text
If something isn't working, we don't hide behind the numbers.
We find out why. Then we fix it.
```

**Growth page (#78 copy + #79 colour later):**

```text
Built For Businesses
Serious About Growth.

If the opportunity is there, we'll find it.
If the system is broken, we'll fix it.
If it works, we'll scale it.
```

- [ ] Full stop after `Serious About Growth.`

**Growth Stack stages (#67)** names unchanged: Diagnose / Strategise / Build / Launch / Optimise / Scale.

**Standard (#80–#83)** exact sentences preserved (colour is Agent 3):

```text
If we can't measure it, we can't improve it.
Every engagement starts with understanding the numbers.
Every system is built with performance in mind.
Every campaign produces data.
Every result informs the next decision.
Because growth isn't a feeling. It's a system of decisions.
```

**Contact form (#70)** labels and order:

```text
Name
Business Name
Mobile Number
Service Needed
Project Details
Social Media / Website Links   ← optional
Submit Request                 ← Title Case, not "Submit request"
```

- [ ] Existing email field kept if already present
- [ ] `Mobile Number` is `type="tel"` (not `type="number"`)
- [ ] Social field optional; empty submit still allowed
- [ ] Placeholder for social: `Add your website, Instagram, LinkedIn or other relevant links`

**Do not change** footer company copy, service names, or Approach/Commitment body except as numbered above.

### Routing

- [ ] Homepage service item → that service’s detail page
- [ ] **Every** service-detail Home/back → homepage **Services** section (`/#services` or equivalent), not the hero — including direct URL visits (#74)
- [ ] Header `About` and homepage `About Us →` both go to `/about` (one destination)
- [ ] `/about` Home/back → homepage **About** section (`/#about`), not the hero — including direct `/about` (#75)
- [ ] Sticky header must not cover the landed heading
- [ ] **Start A Growth Project →** = same destination as header **Book A Call** (#84)
- [ ] Header Book A Call destination remains the booking source of truth
- [ ] No duplicate booking page or duplicate service system
- [ ] Native browser Back is not replaced with custom history hacks
- [ ] No existing route removed

### Section order (homepage around About)

```text
… Services / Growth Stack
The Pecunia Approach
About Us (short)
Our Commitment
Why Pecunia
…
```

### Agent 2 FAIL if

- Copy is paraphrased, Title Case broken, old hero phrases remain
- About missing from homepage, wrong position, or full About dumped on home
- Service Home lands at hero; About Home lands at hero
- Start A Growth Project does not match Book A Call
- Form missing Mobile Number / optional social / `Submit Request`
- Only a report was produced

**Before Agent 2 is accepted:** typecheck/lint/build/tests available in the project; changed routes resolve.

---

## Agent 3 — Visual + motion + theme + responsive

**Mission:** colour, motion, Light/Dark, spacing, footer CTA — without a second animation system.

### Token

- [ ] `var(--green)` = `#00C978` in Light **and** Dark (no ledger/darker green substitute)

### Colour spans (semantic text, not visual line)

**#65 Services heading**

```text
Our Services —     ← normal heading colour
The Growth Stack   ← green
```

**#69 Final CTA heading**

```text
Your business has potential.                    ← normal
Let's build the system to capture it.           ← entire phrase green
```

Supporting paragraph stays normal. CTA keeps its own approved styling.

**#71 Header / hero chrome**

- [ ] Header Book A Call: green background, `#000000` text, both themes (not black in Dark)
- [ ] Standalone “Pecunia Studios” **above hero** removed; logo in header remains
- [ ] Hero starts at `You're one move away from...`
- [ ] Gap after label removal is rebalanced
- [ ] Light: toggle says DARK, control/icon/text black/ink
- [ ] Dark: toggle says LIGHT, control/icon/text light/white
- [ ] Label is the **destination** theme, not the current theme

**#72** all five rotating messages green.

**#77 Commitment intro**

```text
If something isn't working, we don't hide behind the numbers.   ← normal size/colour
We find out why. Then we fix it.                                 ← entire phrase green,
                                                                  same size as
                                                                  “We don't promise magic…”
```

**#78 heading**

```text
Built For Businesses          ← normal
Serious About Growth.         ← entire line including full stop green
```

**#79 supersedes #78 for the three statements**

```text
If the opportunity is there, we'll find it.
                       ^^^^^^^^^^^^^^^^^^^  GREEN  (= ", we'll find it.")
If the system is broken, we'll fix it.
                    ^^^^^^^^^^^^^^^^^  GREEN  (= ", we'll fix it.")
If it works, we'll scale it.
          ^^^^^^^^^^^^^^^^  GREEN  (= ", we'll scale it.")
```

FAIL if only `we'll find/fix/scale it.` is green and the comma stays ink.

**#80 Standard heading**

```text
If we can't measure it, we can't improve it.
                    ^^^^^^^^^^^^^^^^^^^^^^^  GREEN  ("we can't improve it.")
```

Comma may stay with the preceding ink phrase unless existing convention requires otherwise. Everything from **we can't improve it.** onward is green.

**#82 supersedes #81**

```text
BLACK  Every engagement starts with understanding the numbers.
GREEN  Every system is built with performance in mind.
BLACK  Every campaign produces data.
GREEN  Every result informs the next decision.
```

FAIL if the two middle sentences are both green (#81).

**#83 supersedes all-green closing**

```text
BLACK  Because growth isn't a feeling.
GREEN  It's a system of decisions.
```

**#68 Footer Book A Call**

```text
Company
[ Book A Call ]     ← before Services / Approach / About
Services
Approach
About
```

- [ ] Compact/thinner; `background: var(--green)`; text `#000000` both themes
- [ ] No shadow, gradient, pill, extra decoration
- [ ] Footer copy otherwise unchanged

**#70 form chrome:** Light Theme labels + entered text `#000000` for Name / Business Name / Mobile Number; Submit Request green + black text both themes.

**#73 Why Pecunia boxes:** PECUNIA visuals in the DOM immediately; not gated on scroll/timer/hover/IO. Optional motion only **after** they are visible. No large empty animation stage. Copy unchanged; existing green on `Because You Don't Need Another Marketing Supplier.` retained.

### Motion

**#67 Growth Stack 01–06**

- [ ] First in view: `01 — Diagnose` green; others ink
- [ ] One title active at a time; descriptions stay normal
- [ ] Smooth colour transition (~250–450ms); no snap/auto-scroll/row resize
- [ ] Down 01→06 and up 06→01; click still opens service page
- [ ] Reuse existing observer if present; reduced-motion keeps active colour, drops transition

**#76 Commitment 01–10**

- [ ] Same **hero** motion language (reuse, do not invent a new system)
- [ ] One active item; down and up; no layout jump (no size/weight that reflows)
- [ ] Does not break hero rotation
- [ ] Reduced-motion: colour still indicates active item

**#72** keep previously approved slower/smoother hero transition.

**#66** reduce excessive gap **before** “The Pecunia Approach” only; keep breathing room; do not globally shrink every section.

### Theme / responsive

- [ ] Light is default: white background (not cream); Dark remains
- [ ] All green spans wrap correctly at 1440 / 1280 / 1024 / 900 / 768 / 600 / 390
- [ ] No horizontal overflow; no significant layout jump
- [ ] `prefers-reduced-motion` respected

### Agent 3 FAIL if

- Hard-coded competing greens or Dark Theme ledger green
- #79 comma omitted; #81 colours used instead of #82; Standard closing still all-green
- PECUNIA boxes hidden until animation
- New animation dependency / perpetual decorative motion
- Layout shift on colour change

---

## Agent 4 — Full QA + targeted fix

**Mission:** independent verification after Agents 2 and 3; fix spec-related defects only; re-verify.  
**Deliverable:** PASS / PASS WITH NOTES / NEEDS FIX, with file / component / problem / recommended fix / severity.

### Contract acceptance (must all be true for PASS)

- [ ] Changes 1–84 reviewed against the repo; 65–84 implemented where applicable
- [ ] Latest supersessions respected (#79, #82, #83, #72, #75)
- [ ] Approved copy preserved; no unrelated refactor
- [ ] Light default; Dark works; `--green` = `#00C978`
- [ ] Service nav + service Home → `#services`
- [ ] About homepage + `/about` + Home → `#about`
- [ ] Booking CTAs (header Book A Call **and** Start A Growth Project) match
- [ ] Contact form fields/labels as #70
- [ ] Hero five-phrase order + smooth rotation
- [ ] Commitment 01–10 scroll-green
- [ ] Standard colours = #80 + **#82** + **#83**
- [ ] Growth colours = #78 heading + **#79** spans
- [ ] Footer CTA placement/style
- [ ] Mobile nav; desktop layout; no overflow; reduced-motion
- [ ] Lint / typecheck / build / tests pass where available
- [ ] Important visual interactions **manually** verified (not inspect-only)

### Content pass

- [ ] Every approved heading / paragraph / CTA present
- [ ] Rotating hero phrases all five, exact Title Case
- [ ] No accidental paraphrasing; UK English retained

### Functionality pass

- [ ] Nav, CTAs, mobile menu, theme toggle, contact submit, accordions
- [ ] Existing API/form still works with new fields
- [ ] Timers/observers clean up
- [ ] Every service detail + every Home/back
- [ ] Direct `/about` and direct service URLs

### Viewports

```text
1440px  1280px  1024px  900px  768px  600px  390px
```

### Accessibility

- [ ] Keyboard, visible focus, button semantics, heading hierarchy
- [ ] `aria-expanded` where appropriate
- [ ] Reduced motion; readable contrast
- [ ] No information that exists only as animation
- [ ] Form labels associated; tel autocomplete; optional social identified

### Performance / hygiene

- [ ] No runaway intervals, extra observers, hydration/console errors
- [ ] No horizontal overflow; no obvious CLS; no unnecessary dependencies

### Agent 4 FAIL if

- Claims complete after inspection only
- Leaves #79 / #82 / #83 / #72 / #75 defects unfixed
- Unrelated refactors
- Build/lint broken

---

## Do-not-touch (unless a numbered change requires it)

- Backend, database, API contracts, auth, deploy config
- Unrelated dependencies, pages, components
- Working form submission logic (extend payload only as needed for #70)
- Analytics / production integrations

---

## Manager sign-off order

1. Agent 1 map present and accurate vs 65–84 + precedence → `docs/manager-check-agent1.md`
2. Agent 2 content/routing implemented in `src/` (not docs-only)
3. Agent 3 visual/motion/theme implemented; supersessions visible in code
4. Agent 4 QA report + fixes; contract checklist complete

If a later agent’s work contradicts a **later numbered change**, that later change wins. If it contradicts an **earlier agent’s correct implementation**, restore the earlier work.
