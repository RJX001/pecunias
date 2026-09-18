# Pecunia Studios --- Website Content + Automated Design Implementation Master Instructions

## Purpose

This document is the implementation instruction for Cursor and its 4
sub-agents.

The goal is to take the **approved Pecunia Studios website content and
the approved motion/design behaviour contained in the supplied
website-content document**, then implement it into the existing website
**without rewriting, breaking, deleting, or unnecessarily refactoring
existing code**.

This is an **integration task**, not a rebuild.

### Non-negotiable rule

> **Preserve the existing codebase and working functionality. Make the
> smallest safe changes required to add the approved content, section
> movement, animations, interactions, responsive behaviour and visual
> treatment.**

Do not replace the project with a new implementation simply because a
different approach is easier.

------------------------------------------------------------------------

# 1. Source Material and Priority

Use the supplied Pecunia Studios materials as the design/content
reference:

-   `Pecunia-Studios-Website-Content.docx` --- approved website copy and
    the requested content structure.
-   `pecuniastudios-build-spec.md` --- original production build rules
    and service data.
-   `pecuniastudios-redesign-v2-spec.md` --- approved redesign changes
    where they are already implemented.
-   `pecuniastudios-theme-spec.md` --- theme/token rules.
-   `pecuniastudios-services-page-spec.md` --- dedicated `/services`
    behaviour.
-   `PECUNIA-DESIGN-SPEC.md` --- motion, spacing, typography and
    interaction principles.
-   `pecuniastudios-redesign.pdf` --- visual reference where available.

The Word document is the source for the **new/approved content and the
specific section copy in this task**.

Do not silently rewrite approved copy.

If two existing specifications conflict, do not invent a compromise.
Preserve the currently working implementation unless the conflict is
explicitly covered by this document, and flag the conflict in the final
implementation report.

------------------------------------------------------------------------

# 2. Core Implementation Philosophy

## 2.1 Do not rebuild

Before editing:

1.  Inspect the complete existing project.
2.  Identify the current page/component structure.
3.  Identify existing CSS/design tokens.
4.  Identify existing animation utilities.
5.  Identify existing navigation and routing.
6.  Identify existing data structures.
7.  Identify which requested features already exist.
8.  Only then modify the minimum required files.

Do **not**: - rewrite the application from scratch; - replace working
components unnecessarily; - remove working API/form/database logic; -
replace existing libraries without a real requirement; - introduce a new
design system; - duplicate data that already exists; - create fake
statistics; - expose internal pricing; - add WordPress Website
Development; - add eBay Marketplace Management.

## 2.2 Content integrity

The copy below must be treated as approved copy.

Keep: - titles; - headings; - descriptions; - CTA wording; - service
names; - section names; - bullet wording; - punctuation; - UK English
spelling.

Do not paraphrase approved copy for "better marketing copy".

Where a piece of content is explicitly marked as a placeholder, retain
the placeholder status.

------------------------------------------------------------------------

# 3. Requested High-Level Site Experience

The website should feel like a **premium growth-systems studio**, not a
generic agency template.

The visual language should retain the Pecunia/ledger concept:

-   editorial typography;
-   financial-statement/ledger structure;
-   hairline rules;
-   restrained motion;
-   data-like labels;
-   deliberate spacing;
-   controlled accent colour;
-   smooth transitions;
-   no excessive card effects;
-   no "fade-up everything" animation.

The experience should make the content feel like a system becoming
active as the user moves through the page.

------------------------------------------------------------------------

# 4. Navigation

## Approved navigation copy

``` text
Services
Approach
About
Book A Call
```

The existing navigation implementation must be inspected first.

### Requirements

-   Keep the existing sticky/fixed header behaviour if already
    implemented.
-   Keep the existing responsive/mobile navigation functionality.
-   Add/update navigation labels only where necessary.
-   `Book A Call` should lead to the existing contact/booking CTA
    destination used by the current implementation.
-   Do not break existing routes.
-   Do not create duplicate navigation systems.

If the existing project intentionally uses `Contact` / `Request a Quote`
because of a later approved redesign, do not blindly replace working
route behaviour. Preserve the route and use the approved wording where
this task explicitly requires it, then flag any unresolved naming
conflict.

------------------------------------------------------------------------

# 5. HERO --- APPROVED CONTENT

## Hero identity

``` text
Pecunia Studios
```

## Lead-in

``` text
You're one move away from...
```

## Rotating headline

The hero headline must cycle through these exact statements:

``` text
Attracting better customers.
Building predictable demand.
Becoming the obvious choice.
Breaking your growth ceiling.
Owning your market.
Leaving average behind.
```

### Rotation behaviour

-   The headline should automatically rotate.
-   Each phrase must transition smoothly.
-   Avoid abrupt layout jumps.
-   Reserve enough vertical space so the hero does not resize between
    phrases.
-   Use an existing animation utility where possible.
-   Respect `prefers-reduced-motion`.
-   When reduced motion is enabled, the content must remain fully
    readable without animated transitions.
-   The rotation should feel premium and deliberate rather than like a
    fast advertising carousel.
-   Do not rotate so quickly that users cannot comfortably read each
    phrase.

### Optional motion treatment

If the existing design already supports text splitting or line reveals,
use that system rather than introducing another animation library.

A safe sequence is:

1.  current phrase exits;
2.  next phrase enters;
3.  layout remains stable;
4.  phrase settles;
5.  pause;
6.  continue.

Do not animate individual characters unless the existing project already
has a robust accessible implementation.

------------------------------------------------------------------------

# 6. HERO SUPPORTING COPY

Use this exact copy:

``` text
Your business doesn't need more noise. It needs the right move.
```

Then:

``` text
Pecunia brings strategy, marketing, technology and automation together to help ambitious businesses move beyond where they are now.
```

## CTA

``` text
Make The Move →
```

Use the existing CTA destination/booking mechanism.

Do not invent a checkout or pricing destination.

------------------------------------------------------------------------

# 7. HERO MOTION / SYSTEM ANIMATION

The hero should communicate that Pecunia connects multiple parts of
growth into one system.

Where the current implementation already contains a system rail or
equivalent animation, **extend/polish it rather than replacing it**.

The motion concept should communicate:

``` text
Strategy → Build → Acquire → Convert → Automate → Scale
```

### Motion requirements

-   Nodes should appear connected.
-   Active state should be visually obvious.
-   Completed states should remain visually coherent.
-   Connecting lines should animate progressively where supported.
-   Timing must feel controlled and premium.
-   Avoid excessive looping effects.
-   Respect reduced motion.

### If true SVG line drawing already exists

Keep it.

### If the existing implementation only uses scale/opacity

A small CSS/SVG enhancement is acceptable if it does not disturb the
existing component architecture.

Do not add a dependency purely for this effect.

------------------------------------------------------------------------

# 8. GROWTH PHILOSOPHY

## Section title

``` text
Growth Philosophy
```

## Main statement

``` text
We don't just market businesses. We build the system behind growth.
```

## Supporting copy

``` text
Growth rarely comes from one campaign, one website or one clever advert. It comes from having the right strategy, infrastructure, acquisition channels and systems working together.
```

Then:

``` text
We combine marketing, technology, data, creative and automation to build growth systems designed around one objective:
```

Then the emphasis statement:

``` text
Make the business perform better.
```

### Motion

Use one orchestrated reveal rather than animating every sentence
independently.

The final statement can receive the strongest visual emphasis.

------------------------------------------------------------------------

# 9. OUR SERVICES --- THE GROWTH STACK

## Heading

``` text
Our Services — The Growth Stack
```

## Intro

``` text
Four connected systems. Not four separate suppliers.
```

This section contains the four service systems below.

------------------------------------------------------------------------

## 9.1 --- Digital & E-commerce

### Title

``` text
01 — Digital & E-commerce
```

### Description

``` text
Digital infrastructure built to convert.
```

### Body

``` text
Your website should do more than look good. It should communicate your value, remove friction and turn interest into action. We design and build digital experiences around how your customers actually discover, evaluate and buy.
```

``` text
From high-converting websites to scalable e-commerce platforms, we build digital infrastructure designed around performance.
```

### What we do

``` text
Web Design
Custom Development
Shopify & E-commerce Builds
Product & Website Optimisation
```

------------------------------------------------------------------------

## 9.2 --- Paid Growth

### Title

``` text
02 — Paid Growth
```

### Description

``` text
Put your offer in front of the right people.
```

### Body

``` text
Paid media isn't about spending more. It's about understanding who to reach, what to say, where to send them and how to turn attention into action. We build, launch and optimise acquisition campaigns around your audience, offer and commercial objectives.
```

### Closing line

``` text
Every campaign has a purpose. Acquire. Convert. Learn. Improve. Scale.
```

### What we do

``` text
Google Ads
Meta Ads
TikTok Ads
Campaign Strategy
Paid Ad Creative
Performance Optimisation
```

------------------------------------------------------------------------

## 9.3 --- Organic Growth & Content

### Title

``` text
03 — Organic Growth & Content
```

### Description

``` text
Build demand that compounds.
```

### Body

``` text
The strongest brands don't rely on one channel. We create organic growth strategies that increase visibility, authority and demand while building assets that continue working long after they are published.
```

``` text
We don't create content to fill a calendar. We create content designed to capture attention, build trust and move customers closer to a decision.
```

### What we do

``` text
SEO
Content Strategy
Social Media Content
AI-Generated Content
Content Production
Product Optimisation
Organic Growth Strategy
Brand Content
```

------------------------------------------------------------------------

## 9.4 --- AI, Automation & CRM

### Title

``` text
04 — AI, Automation & CRM
```

### Description

``` text
Turn manual processes into growth infrastructure.
```

### Body

``` text
The businesses that scale efficiently aren't necessarily doing more. They're building systems that allow them to achieve more with less friction. We connect your marketing, sales and operations through intelligent technology and automation.
```

``` text
From the first interaction to the final conversion, we identify where time, leads and opportunities are being lost. Then we build the systems to capture them.
```

### Closing line

``` text
Less manual work. More control. More opportunities captured.
```

### What we do

``` text
AI Automation
Lead Management
CRM Systems
Workflow Automation
Data & Integrations
Lead Capture
Lead Qualification
```

------------------------------------------------------------------------

# 10. SERVICE INTERACTION

The four Growth Stack sections should feel connected.

If the current project uses accordions:

-   preserve the accordion architecture;
-   preserve keyboard accessibility;
-   preserve independent open/close behaviour;
-   use smooth height/max-height transitions;
-   prevent layout jumps where possible;
-   rotate the existing chevron/icon;
-   do not introduce a second accordion implementation.

If the current project uses another interactive treatment, adapt it
rather than replacing the component unnecessarily.

### Motion principle

One clear interaction per service row.

Do not add: - excessive hover transforms; - bouncing icons; - perpetual
background animations; - unnecessary scale effects.

------------------------------------------------------------------------

# 11. THE PECUNIA APPROACH

## Heading

``` text
The Pecunia Approach
```

## Intro statement

``` text
We don't sell activity. We build for outcomes.
```

## Supporting copy

``` text
Anyone can launch a campaign. Anyone can build a website. Anyone can generate content. The difference is whether those things actually contribute to growth. Our process starts with the commercial objective and works backwards.
```

------------------------------------------------------------------------

## 11.1 --- Diagnose

``` text
01 — Diagnose
```

``` text
We analyse the business, market, offer, customer journey, competitors and existing performance. We identify what's working. More importantly, we identify what's leaking.
```

------------------------------------------------------------------------

## 11.2 --- Strategise

``` text
02 — Strategise
```

``` text
We establish the growth model. Who are we trying to acquire? Which channels should reach them? What should they see? Where should they land? What happens next? What needs to be true for acquisition to be profitable?
```

``` text
Every decision starts with the numbers.
```

------------------------------------------------------------------------

## 11.3 --- Build

``` text
03 — Build
```

``` text
We build the infrastructure required to execute the strategy. Websites. Landing pages. Funnels. CRM systems. Automations. Tracking. Creative. Campaigns. E-commerce systems.
```

``` text
Everything has a role. Everything connects back to the objective.
```

------------------------------------------------------------------------

## 11.4 --- Launch

``` text
04 — Launch
```

``` text
Strategy means nothing until it meets the market. We launch. We measure. We collect real-world data. Then we use that data to understand what the market actually responds to.
```

------------------------------------------------------------------------

## 11.5 --- Optimise

``` text
05 — Optimise
```

``` text
Launching is the beginning, not the finish line. We continuously analyse acquisition, conversion and customer behaviour. Creative gets tested. Offers get refined. Landing pages get improved. Campaigns get restructured. Budgets move towards what performs.
```

------------------------------------------------------------------------

## 11.6 --- Scale

``` text
06 — Scale
```

``` text
Once we identify what works, we build on it. More qualified traffic. More efficient acquisition. More conversions. More automation. More capacity.
```

``` text
The objective isn't to make something work once. It's to build something that can scale.
```

### Suggested motion

If a progress rail already exists:

``` text
Diagnose → Strategise → Build → Launch → Optimise → Scale
```

Use progressive activation as the user scrolls.

The final Scale state may receive a subtle completion treatment.

Do not make the effect flashy.

------------------------------------------------------------------------

# 12. OUR COMMITMENT

## Heading

``` text
Our Commitment
```

## Statement

``` text
We don't promise magic. We build accountability into the system.
```

## Supporting copy

``` text
Marketing isn't a vending machine. You can't put money in and guarantee exactly what comes out. Markets change. Customers change. Competition changes. What we can control is the process.
```

## Commitments

``` text
Clear commercial objectives
Defined KPIs
Transparent reporting
Continuous testing
Conversion optimisation
Active campaign management
Data-led decision making
Rapid identification of problems
Strategic recommendations
Continuous optimisation
```

## Closing copy

``` text
If something isn't working, we don't hide behind the numbers. We find out why. Then we fix it.
```

### Interaction

Present these as an editorial list/grid/statement treatment consistent
with the existing ledger design.

Avoid a generic icon-card grid.

------------------------------------------------------------------------

# 13. WHY PECUNIA?

## Heading

``` text
Why Pecunia?
```

## Copy

``` text
Because you don't need another marketing supplier.
```

``` text
You need a team capable of seeing the entire growth system.
```

Then:

``` text
Too many businesses have their website with one company, advertising with another, content somewhere else and automation handled by someone who doesn't understand the customer journey. The result?
```

Emphasis:

``` text
Disconnected systems. Disconnected data. Disconnected decisions.
```

Then:

``` text
Pecunia brings strategy, technology, acquisition, conversion, creative and automation together.
```

Closing:

``` text
One team. One strategy. One growth system.
```

### Motion

Use one visual convergence moment if the existing design supports it.

If there is a "scattered systems → central Pecunia" animation:

-   keep the existing one-shot trigger;
-   make the convergence readable;
-   avoid perpetual movement;
-   do not add hover animations to every chip.

------------------------------------------------------------------------

# 14. BUILT FOR BUSINESSES SERIOUS ABOUT GROWTH

## Heading

``` text
Built For Businesses Serious About Growth
```

## Copy

``` text
We work with ambitious businesses that understand growth requires more than simply turning up the marketing. They have something worth building. Something worth scaling. And the ambition to do it properly.
```

``` text
We're not built around selling isolated services. We're built around solving growth problems.
```

Then the three statements:

``` text
If the opportunity is there, we'll find it.
If the system is broken, we'll fix it.
If it works, we'll scale it.
```

### Visual treatment

Treat the three closing statements as a sequence or strong editorial
list.

Do not use generic stock imagery.

------------------------------------------------------------------------

# 15. ABOUT PECUNIA STUDIOS

## Heading

``` text
About Pecunia Studios
```

## Subheading

``` text
Built in 2026. Built for what's next.
```

## Copy

``` text
Pecunia Studios was founded in 2026 by a marketing specialist and an AI specialist with a shared belief: modern businesses shouldn't have to choose between great marketing and great technology.
```

``` text
The agency was built to bring both together.
```

Then:

``` text
Marketing creates demand. Technology creates leverage. Data creates clarity. Automation creates capacity. Our job is to connect them.
```

Then:

``` text
Today, Pecunia Studios works with ambitious businesses to build stronger digital ecosystems, acquire better customers and create systems capable of scaling with them.
```

Closing:

``` text
We're not interested in being another name on your supplier list. We're here to build what's next.
```

### Animation

Keep this section restrained.

Use the existing reveal system for: - eyebrow; - heading; - body blocks.

Do not animate every sentence independently.

------------------------------------------------------------------------

# 16. THE STANDARD

## Heading

``` text
The Standard
```

## Main statement

``` text
If we can't measure it, we can't improve it.
```

## Supporting copy

``` text
Every engagement starts with understanding the numbers. Every system is built with performance in mind. Every campaign produces data. Every result informs the next decision.
```

Closing:

``` text
Because growth isn't a feeling. It's a system of decisions.
```

### Visual emphasis

The first and final statements can receive stronger typographic
emphasis.

Keep the ledger/data visual language.

------------------------------------------------------------------------

# 17. FINAL CTA

## Headline

``` text
Your business has potential. Let's build the system to capture it.
```

## Supporting copy

``` text
Tell us where you are, where you want to go and what's currently standing in the way. We'll identify the opportunities, build the strategy and show you what it would take to get there.
```

## CTA

``` text
Start A Growth Project →
```

CTA must use the existing contact/booking flow.

Do not create a checkout.

------------------------------------------------------------------------

# 18. FOOTER

## Brand

``` text
PECUNIA STUDIOS
```

## Descriptor

``` text
Strategy. Technology. Acquisition. Growth.
```

## Services line

``` text
Websites | E-commerce | Paid Media | SEO | Automation | CRM | AI | Creative | Growth Strategy
```

## Copyright/legal

``` text
© 2026 Pecunia Studios. Company registered in England & Wales.
```

Preserve any existing footer navigation that is required by the current
site.

------------------------------------------------------------------------

# 19. MOTION SYSTEM --- IMPLEMENTATION RULES

The requested site should feel alive, but motion must communicate
meaning.

## Approved motion inventory

### 1. Hero headline rotation

``` text
Attracting better customers.
Building predictable demand.
Becoming the obvious choice.
Breaking your growth ceiling.
Owning your market.
Leaving average behind.
```

Automatic rotation.

### 2. Hero system rail

``` text
Strategy → Build → Acquire → Convert → Automate → Scale
```

Progressive node/connector activation.

### 3. Scroll reveals

Existing `.reveal` or equivalent system should be reused.

Preferred behaviour:

``` text
opacity: 0 → 1
translateY: approximately 24px → 0
```

One-shot IntersectionObserver behaviour is preferred.

### 4. Growth Stack

Accordion/expansion animation.

### 5. Approach

Progressive activation of six stages.

### 6. Why Pecunia

One-shot scattered-system convergence.

### 7. Commitment

Subtle editorial reveal.

### 8. Philosophy / Standard

Line-by-line or block-level emphasis may be used where already
supported.

### 9. CTAs

Existing magnetic-button behaviour may remain if already implemented.

Do not add aggressive cursor effects.

------------------------------------------------------------------------

# 20. AUTOMATION / INTERACTION SAFETY

All client-side motion must:

-   clean up timers/listeners;
-   avoid memory leaks;
-   avoid duplicate intervals after re-render;
-   avoid running animations indefinitely when not visible;
-   respect `prefers-reduced-motion`;
-   preserve keyboard navigation;
-   preserve screen-reader access to content;
-   avoid changing the meaning of content;
-   avoid causing cumulative layout shift;
-   work on mobile and desktop.

For timers:

``` text
start → run → cleanup on unmount
```

For IntersectionObserver:

``` text
observe → trigger once where appropriate → unobserve
```

Do not create multiple observers for the same element unnecessarily.

------------------------------------------------------------------------

# 21. RESPONSIVE DESIGN

The design must work at:

-   large desktop;
-   standard desktop;
-   tablet;
-   mobile;
-   small mobile.

Pay particular attention to:

-   hero rotating headline;
-   service content expansion;
-   six-stage approach;
-   long paragraphs;
-   CTA stacking;
-   navigation;
-   footer;
-   horizontal client/content rows if present;
-   ledger/table structures.

Do not allow: - horizontal overflow; - clipped text; - inaccessible
accordions; - overlapping animated elements; - fixed-width desktop
layouts on mobile.

------------------------------------------------------------------------

# 22. TYPOGRAPHY / VISUAL LANGUAGE

Preserve the existing Pecunia design tokens and typography system
already used by the codebase.

Where the existing implementation follows the approved specs, do not
replace it.

Core visual principles:

-   near-black/dark and cream/light theme system as already implemented;
-   restrained brass/ledger accents;
-   editorial serif display typography where already specified;
-   IBM Plex Sans for body/UI where already specified;
-   IBM Plex Mono for codes/data;
-   hairline borders;
-   generous whitespace;
-   grid-based layouts;
-   no generic rounded-card SaaS treatment.

------------------------------------------------------------------------

# 23. PUBLIC PRICING RULE

This is critical.

**No public pricing.**

Do not expose: - £ amounts; - price tiers; - package prices; - budget
ranges; - hourly rates; - internal costs; - retainer prices; - "from
£X"; - pricing tables.

The internal pricing document is not public website content.

------------------------------------------------------------------------

# 24. SERVICE EXCLUSIONS

Never add:

``` text
WordPress Website Development
```

Never add:

``` text
eBay Marketplace Management
```

These are explicitly excluded.

------------------------------------------------------------------------

# 25. EXISTING CODE PROTECTION

Before changing any file, determine whether it contains:

-   form handling;
-   API calls;
-   database logic;
-   authentication;
-   routing;
-   service data;
-   case-study data;
-   theme state;
-   existing animation utilities.

Do not modify these systems simply to make the new design easier.

### Safe approach

Prefer:

``` text
existing component
        ↓
small content update
        ↓
small styling update
        ↓
small local animation enhancement
```

Avoid:

``` text
existing component
        ↓
delete
        ↓
rewrite from scratch
```

------------------------------------------------------------------------

# 26. DATA PROTECTION

If existing data already contains service/case-study information:

-   reuse it;
-   do not duplicate it;
-   do not change its shape unless absolutely required;
-   do not invent missing production data;
-   mark placeholders clearly.

The website content in this document should be represented as structured
data where practical, especially the four Growth Stack service systems
and six Approach stages.

------------------------------------------------------------------------

# 27. FOUR CURSOR SUB-AGENT PLAN

Use exactly four specialised sub-agents.

## AGENT 1 --- AUDIT + CONTENT ARCHITECT

### Mission

Audit the existing codebase and map the approved Word document content
into the current component structure.

### Responsibilities

-   inspect repository;
-   identify current pages/components;
-   identify existing sections;
-   identify duplicate sections;
-   identify existing animation utilities;
-   identify theme system;
-   identify navigation;
-   identify contact CTA destination;
-   identify service data;
-   identify approach/method data;
-   identify which requested content already exists;
-   identify where content must be moved;
-   produce an implementation map.

### Critical rule

Agent 1 should not perform a broad rewrite.

Prefer creating a mapping/report and making only safe structural/content
changes that are clearly required.

### Deliverable

A concise report containing:

``` text
Existing section
→ Target section
→ Existing component
→ Files affected
→ Content changes required
→ Animation changes required
→ Risk level
```

------------------------------------------------------------------------

# AGENT 2 --- CONTENT + SECTION STRUCTURE

### Mission

Implement the approved website content and section structure after Agent
1's audit.

### Responsibilities

Implement:

-   Hero content;
-   rotating headline data;
-   Growth Philosophy;
-   Growth Stack;
-   Pecunia Approach;
-   Our Commitment;
-   Why Pecunia;
-   Built For Businesses Serious About Growth;
-   About Pecunia Studios;
-   The Standard;
-   Final CTA;
-   Footer copy.

### Rules

-   Copy must match this document exactly.
-   Reuse existing components.
-   Reuse existing data structures.
-   Do not duplicate service data.
-   Do not change backend logic.
-   Do not change API routes.
-   Do not expose pricing.
-   Do not introduce excluded services.

### Deliverable

Working page using the approved content with existing functionality
preserved.

------------------------------------------------------------------------

# AGENT 3 --- MOTION + VISUAL POLISH

### Mission

Implement the automated design/motion behaviour without changing
business logic.

### Responsibilities

-   Hero rotating headline;
-   hero system rail;
-   scroll reveals;
-   Growth Stack interaction;
-   Approach progressive activation;
-   Why Pecunia convergence;
-   subtle CTA interaction;
-   responsive motion;
-   reduced-motion behaviour;
-   timing cleanup.

### Rules

-   Prefer existing animation utilities.
-   No new animation dependency unless genuinely necessary.
-   No perpetual decorative animation.
-   No excessive hover effects.
-   No accessibility regressions.
-   No layout shift.
-   No business logic changes.

### Deliverable

A polished, restrained motion system matching the Pecunia design
language.

------------------------------------------------------------------------

# AGENT 4 --- QA + INTEGRATION

### Mission

Review the final result as an independent senior engineer/designer.

### Check:

#### Content

-   Every approved heading present.
-   Every approved paragraph present.
-   Every approved CTA present.
-   Rotating hero phrases all present.
-   No accidental paraphrasing.
-   UK English retained.

#### Functionality

-   Navigation works.
-   CTAs work.
-   Mobile menu works.
-   Existing contact flow works.
-   Existing theme toggle works.
-   Existing forms/API remain functional.
-   Accordions work.
-   Timers clean up correctly.

#### Responsive

Test:

``` text
1440px
1280px
1024px
900px
768px
600px
390px
```

#### Accessibility

Check:

-   keyboard navigation;
-   visible focus;
-   button semantics;
-   heading hierarchy;
-   aria-expanded where appropriate;
-   reduced motion;
-   readable contrast;
-   no inaccessible animation-only information.

#### Performance

Check:

-   no runaway intervals;
-   no unnecessary observers;
-   no hydration errors;
-   no console errors;
-   no horizontal overflow;
-   no obvious layout shift;
-   no unnecessary dependencies.

### Deliverable

Final QA report:

``` text
PASS
PASS WITH NOTES
NEEDS FIX
```

For every issue, identify:

``` text
file
component
problem
recommended fix
severity
```

------------------------------------------------------------------------

# 28. AGENT EXECUTION ORDER

Do not have all four agents independently rewrite the same components.

Recommended order:

``` text
AGENT 1
Audit + map
   ↓
AGENT 2
Content + structure
   ↓
AGENT 3
Motion + visual polish
   ↓
AGENT 4
QA + integration
```

If Cursor supports isolated worktrees/branches for sub-agents, use them.

If agents must work on the same branch:

-   Agent 1 finishes first.
-   Agent 2 works from Agent 1's final state.
-   Agent 3 works from Agent 2's final state.
-   Agent 4 only reviews/fixes after Agent 3.

Avoid parallel edits to the same component files.

------------------------------------------------------------------------

# 29. CONFLICT RESOLUTION

When an agent encounters an existing implementation that differs from
this document:

1.  Do not delete it automatically.
2.  Determine whether it is functional.
3.  Determine whether this document explicitly requires changing it.
4.  If required, make the smallest change possible.
5.  If unclear, preserve the implementation and flag it for review.

Never solve a content/design conflict by silently inventing new copy.

------------------------------------------------------------------------

# 30. DEFINITION OF DONE

The implementation is complete when:

-   all approved content from the Word document has been incorporated;
-   hero rotation works;
-   the design motion feels deliberate and premium;
-   existing working code remains intact;
-   no backend/API functionality has been unnecessarily changed;
-   no public pricing exists;
-   excluded services remain excluded;
-   mobile is usable;
-   reduced motion works;
-   navigation and CTAs work;
-   no console/runtime errors remain;
-   no horizontal overflow remains;
-   all content is readable and accessible;
-   the final result is consistent with the Pecunia ledger/statement
    design system.

------------------------------------------------------------------------

# 31. FINAL CURSOR INSTRUCTION

**Do not treat this document as permission to rebuild the site.**

Treat it as an **implementation overlay on top of the existing Pecunia
Studios application**.

The priority is:

``` text
PRESERVE
→ INTEGRATE
→ POLISH
→ TEST
```

not:

``` text
DELETE
→ REBUILD
→ HOPE
```

Use the existing architecture wherever possible.

Implement the approved content exactly.

Implement the requested automated design/motion features carefully.

Keep the website commercially sharp, editorial, restrained and
technically robust.
------------------------------------------------------------------------

# 29. LIGHT THEME --- STANDARD / DEFAULT WEBSITE THEME

This section is an explicit addition to the implementation instructions.

The **Light Theme is now the standard/default presentation of the
Pecunia Studios website**.

The existing Dark Theme must remain available through the theme toggle,
but a fresh visitor should see the Light Theme by default.

This must be implemented as a presentation/theming layer. Do not rewrite
component logic, API behaviour, database logic, form handling, service
data structures, or routing to achieve the theme.

## 29.1 Theme behaviour

Default:

``` text
<html data-theme="light">
```

Dark mode:

``` text
<html data-theme="dark">
```

The theme toggle must switch between the two states.

The toggle label should describe the theme the user can switch **into**,
matching the approved redesign:

``` text
Light theme active → button says "Dark"
Dark theme active  → button says "Light"
```

Use the existing icon system if one exists.

Do not create a second independent colour system.

## 29.2 Approved theme tokens

Use the existing Pecunia theme variables from
`pecuniastudios-theme-spec.md`.

Shared tokens:

``` css
--brass:        #A9812E;
--brass-dim:    #7d611f;
--ledger:       #33473B;
--ledger-light: #4c6858;
--wine:         #6B2E3A;
--dark-text:    #12181A;
```

### Light theme --- DEFAULT

``` css
--ink:          #F6F0E4;
--ink-2:        #ECE2CC;
--paper:        #181410;
--stone:        #6E6558;
--line:         rgba(24,20,16,0.12);
--line-strong:  rgba(24,20,16,0.24);
--header-bg:    rgba(246,240,228,0.92);
--recessed-bg:  rgba(24,20,16,0.045);
```

### Dark theme

``` css
--ink:          #12181A;
--ink-2:        #181f22;
--paper:        #F6F0E4;
--stone:        #9A9184;
--line:         rgba(246,240,228,0.14);
--line-strong:  rgba(246,240,228,0.28);
--header-bg:    rgba(18,24,26,0.92);
--recessed-bg:  rgba(0,0,0,0.15);
```

Do not invent replacement colours.

The semantic meaning of the variables is more important than their
literal colour value:

``` text
--ink   = page/background colour
--ink-2 = raised/panel background
--paper = primary text colour
--stone = secondary/muted text
--line  = subtle divider
```

This allows the entire design to switch theme without rewriting every
component.

## 29.3 Light theme visual standard

The Light Theme should reproduce the approved redesign visual language:

-   warm cream/light background;
-   dark ink typography;
-   restrained brass accents;
-   muted ledger green;
-   hairline borders;
-   editorial serif headings;
-   IBM Plex Sans body/UI;
-   IBM Plex Mono for codes, labels and numerical data;
-   generous whitespace;
-   ledger/financial-statement visual structure;
-   restrained shadows/depth;
-   no generic SaaS card styling.

The Light Theme is **not** a separate redesign.

It is the same Pecunia design expressed through the alternate token
values.

## 29.4 Primary CTA buttons

The redesign changes primary CTAs from brass to ink.

Primary buttons must use:

``` text
background: --dark-text / near-black ink
text:       --paper
```

This applies to:

-   Request a Quote;
-   Submit Request;
-   other primary solid CTA buttons where the approved redesign
    identifies them as primary actions.

Do not use brass as the primary solid CTA background in the new standard
Light Theme.

Secondary/outline actions retain the existing outline treatment.

Brass remains available for:

-   eyebrows;
-   accent words;
-   active states;
-   pill borders;
-   data highlights;
-   selected carousel dots;
-   other restrained brand accents.

## 29.5 Brass button exception

Where a component genuinely uses a brass background, its text must use:

``` css
color: var(--dark-text);
```

Do not tie brass-button text to the theme-swapped `--paper` value.

This prevents contrast problems between Light and Dark themes.

## 29.6 Theme transition

Theme switching should be smooth rather than an instant visual snap.

Use a short transition, approximately:

``` text
0.2s–0.25s
```

for relevant:

-   background colours;
-   text colours;
-   border colours.

Do not animate layout, dimensions or page position during a theme
switch.

## 29.7 Theme persistence

If the production application already has a theme persistence mechanism,
preserve it.

If theme persistence must be added:

-   use the existing project architecture;
-   do not duplicate theme state;
-   do not introduce a new dependency if the project already has an
    appropriate mechanism;
-   avoid hydration mismatch;
-   ensure the Light Theme remains the default when no preference
    exists.

Do not modify unrelated application state.

## 29.8 Reduced motion

The theme must remain fully usable with:

``` text
prefers-reduced-motion: reduce
```

Reduced-motion mode should not remove access to the theme toggle or
cause content to disappear.

------------------------------------------------------------------------

# 30. APPROVED REDESIGN CONTENT CHANGES THAT MUST REMAIN COMPATIBLE WITH THE LIGHT THEME

The Light Theme is being added alongside the approved redesign content.

Where the redesign specification has newer copy than the original build
specification, use the newer approved copy from the redesign/content
documents rather than reverting to old copy.

Key approved redesign changes include:

### Hero

``` text
Turn attention into revenue.
```

Italic/accent treatment:

``` text
revenue.
```

Use the approved ledger-green accent.

Hero supporting copy:

``` text
PecuniaStudios builds the websites, runs the ads, manages the marketplaces, and produces the creative that make growth actually happen — under one roof, with one team who knows your business.
```

Do not silently change the wording.

### Our Work

``` text
Our Work
```

``` text
Trusted by teams who needed a system, not more noise.
```

``` text
A running account of who we work with, and what we've built for them.
```

### Clients on the books

``` text
Fieldnote
Bramble & Son
Tidewater Co.
Orison
Kindling & Co.
```

These are placeholders unless confirmed as real clients. Preserve their
placeholder status.

### About

Use the approved redesigned first paragraph:

``` text
Most businesses don't need more marketing noise — they need a system that works. A website that converts. A marketplace presence that's actually managed, not just set up and forgotten. Creative that gets made and maintained.
```

The second paragraph remains:

``` text
We work as an extension of your team, across the full stack of what makes a digital business run — not as a vendor you have to chase for updates.
```

### Results / case studies

Do not invent statistics.

Existing illustrative case-study values must remain clearly identified
as illustrative/placeholders until replaced with verified client
results.

------------------------------------------------------------------------

# 31. AGENT RESPONSIBILITY UPDATE --- LIGHT THEME

The four-agent workflow remains mandatory.

## Agent 1 --- Audit

In addition to the existing audit:

-   locate the current theme implementation;
-   locate the root `data-theme` implementation;
-   identify current default theme;
-   identify all hard-coded colours;
-   identify existing theme toggle;
-   identify hydration/persistence handling;
-   identify components that may fail under Light Theme.

Do not rewrite the theme during the audit unless required to safely
establish the implementation map.

## Agent 2 --- Content + Structure

-   implement approved content;
-   ensure content remains legible in both themes;
-   preserve semantic structure;
-   do not introduce hard-coded colours into content components;
-   use semantic theme variables/classes.

## Agent 3 --- Motion + Visual Polish + Theme

Agent 3 owns the presentation-layer completion of the Light Theme.

Responsibilities now include:

-   Light Theme as default;
-   Dark Theme toggle;
-   correct toggle labels;
-   theme transitions;
-   Light Theme contrast;
-   primary CTA ink treatment;
-   brass/ledger accent preservation;
-   responsive theme behaviour;
-   animation behaviour in both themes;
-   reduced-motion support;
-   visual matching against the supplied redesign PDF/reference.

Agent 3 must not change backend or business logic.

## Agent 4 --- QA

Explicitly test:

``` text
Fresh load → Light Theme
Toggle → Dark Theme
Toggle back → Light Theme
Refresh → expected theme behaviour
```

Check both themes at:

``` text
1440px
1280px
1024px
900px
768px
600px
390px
```

Verify:

-   no white-on-white text;
-   no dark-on-dark text;
-   no invisible borders;
-   no broken brass buttons;
-   no unreadable muted text;
-   no theme-related hydration warnings;
-   no layout shift during switching;
-   no loss of focus state;
-   no accessibility regression.

------------------------------------------------------------------------

# 32. LINK / VISUAL REFERENCE

If an external design/reference URL is supplied by the project owner,
treat it as an additional visual reference alongside:

``` text
pecunia redesign.pdf
pecuniastudios-theme-spec.md
PECUNIA-DESIGN-SPEC.md
pecuniastudios-redesign-v2-spec.md
```

Do not treat an external reference as permission to change approved
copy, backend behaviour, routing, data structures or other protected
functionality.

If the external URL conflicts with an approved written specification,
flag the conflict rather than silently choosing one.

------------------------------------------------------------------------

# 33. FINAL NON-NEGOTIABLE IMPLEMENTATION CHECK

Before considering the task complete, Cursor must confirm:

``` text
[ ] Existing working code preserved
[ ] Approved content implemented
[ ] Existing backend/API/form behaviour preserved
[ ] No public pricing introduced
[ ] No excluded services introduced
[ ] Light Theme is the DEFAULT
[ ] Dark Theme remains available
[ ] Theme toggle works
[ ] Theme toggle label describes the destination theme
[ ] Light Theme matches approved redesign
[ ] Primary CTA buttons use ink
[ ] Brass remains a restrained accent
[ ] Hero/motion behaviour works
[ ] Reduced-motion behaviour works
[ ] Mobile layout works
[ ] Desktop layout works
[ ] No horizontal overflow
[ ] No hydration errors
[ ] No console errors
[ ] No duplicated data
[ ] No unnecessary dependencies
[ ] No backend/API changes made by visual/content agents
[ ] Final QA report produced
```

**Implementation principle:**

> Preserve what already works. Add what has been approved. Change only
> what the specifications explicitly require. Make Light Theme the
> standard presentation, while keeping Dark Theme fully functional.
> ------------------------------------------------------------------------

# 34. APPROVED HOME PAGE CLEAN-UP --- MOVE ABOUT TO DEDICATED PAGE

## Decision

The **About section should be removed from the homepage**.

The homepage should remain focused on the core Pecunia Studios
conversion journey and should not carry the full About narrative.

When a visitor clicks **About** in the main navigation, it should
navigate to a dedicated:

``` text
/about
```

page.

This is an intentional information-architecture change to make the
landing page cleaner, less vertically heavy and easier to scan.

## 34.1 Homepage change

Remove the full About content block from the homepage.

Do **not** delete the About content from the project.

The content is being relocated to `/about`.

The homepage should therefore no longer render:

-   About eyebrow;
-   About heading;
-   About paragraphs;
-   About statistics/details;
-   any About-specific layout container.

Do not replace it with another large section unless explicitly
instructed later.

The homepage should flow naturally from the sections before About into
the next approved homepage section.

## 34.2 New `/about` page

Create a dedicated About route:

``` text
/about
```

Use the existing Pecunia Studios site chrome:

-   same header;
-   same navigation;
-   same theme toggle;
-   same Light Theme default;
-   same Dark Theme support;
-   same footer;
-   same typography;
-   same design tokens;
-   same responsive system.

The page should feel like part of the same website, not a separate
microsite.

## 34.3 Navigation

Change the header:

``` text
About
```

from an in-page anchor/section link to:

``` text
/about
```

Use the appropriate Next.js route/link implementation already used by
the project.

Do not change the visual styling of the navigation item unless required
by the existing routing implementation.

The mobile navigation, when present, must also use:

``` text
/about
```

for About.

## 34.4 About page content

Move the currently approved About content to the dedicated page
**without rewriting it**.

The current approved About content is:

### Eyebrow

``` text
Built in 2026. Built for what's next.
```

### Heading

``` text
About Pecunia Studios
```

### Body

``` text
Pecunia Studios was founded in 2026 by a marketing specialist and an AI specialist with a shared belief: modern businesses shouldn't have to choose between great marketing and great technology.

The agency was built to bring both together.

Marketing creates demand. Technology creates leverage. Data creates clarity. Automation creates capacity. Our job is to connect them.

Today, Pecunia Studios works with ambitious businesses to build stronger digital ecosystems, acquire better customers and create systems capable of scaling with them.

We're not interested in being another name on your supplier list. We're here to build what's next.
```

These paragraphs are from the approved website-content reference.

Do not paraphrase, shorten, expand or "improve" this copy during
implementation.

## 34.5 About page visual direction

The supplied About-page reference screenshot demonstrates the intended
direction:

-   large editorial heading;
-   strong left alignment;
-   generous negative space;
-   restrained navigation;
-   dark theme remains available;
-   readable muted body copy;
-   no unnecessary cards;
-   no generic marketing-grid layout;
-   no excessive decorative elements.

The page should preserve the existing Pecunia visual language.

The screenshot is a visual reference for the About page layout, not
permission to change approved copy.

## 34.6 About page scope

For the first implementation pass, keep the page deliberately simple.

Required:

``` text
Header
↓
About hero/content
↓
Footer
```

Do not automatically add:

-   team cards;
-   founder cards;
-   testimonials;
-   company timeline;
-   statistics panels;
-   imagery;
-   additional services;
-   pricing;
-   new CTAs;
-   invented company history.

Only add these later if explicitly approved.

If existing approved About statistics/content are already implemented
elsewhere and are explicitly part of the approved About page, preserve
them when relocating the section rather than deleting them. Otherwise,
do not invent new content.

## 34.7 Homepage information architecture after this change

The homepage should now prioritise:

``` text
Hero
↓
Our Work
↓
Contact
↓
Footer
```

alongside any other sections explicitly retained by the latest approved
build/design specification.

The important rule is:

> **About is no longer a full homepage section. About becomes a
> dedicated page.**

Do not interpret this as permission to delete other approved homepage
sections.

## 34.8 Preserve existing code

This is a relocation/refactoring task, not a rebuild.

Before modifying:

1.  Identify the current About component.
2.  Identify where its content/data is stored.
3.  Identify any existing shared section components.
4.  Identify current navigation links.
5.  Identify whether an `/about` route already exists.
6.  Identify any IDs or anchor links referencing About.

Then make the smallest safe changes necessary.

Prefer:

``` text
reuse existing About component
        ↓
render on /about
        ↓
remove homepage instance
```

rather than creating duplicate About markup.

There must be **one source of truth** for the About content.

## 34.9 What must NOT change

Do not change:

-   API routes;
-   form submission handling;
-   database queries/schema;
-   services data;
-   case-study data;
-   pricing logic;
-   authentication;
-   unrelated routing;
-   existing animations outside the About section;
-   existing approved copy elsewhere;
-   theme architecture.

Do not use this change as an opportunity to refactor unrelated code.

## 34.10 QA requirements

Test:

``` text
Homepage loads without the full About section
About navigation → /about
/about loads correctly
Header remains consistent
Footer remains consistent
Light Theme remains default
Dark Theme toggle remains functional
About content is complete
No duplicate About section exists on homepage
No broken About anchor remains
Desktop responsive layout works
Mobile responsive layout works
No horizontal overflow
No console errors
```

Check at minimum:

``` text
1440px
1280px
1024px
768px
390px
```

## 34.11 Review-first principle

This change is intentionally the **first information-architecture
clean-up**.

After implementation, review the live/page-rendered result before making
further structural changes.

The next stage should be:

``` text
Implement
↓
Review homepage
↓
Review /about
↓
Identify remaining visual/content/spacing issues
↓
Make targeted updates
```

Do not allow Cursor agents to independently invent additional page
removals or additions.

Any further structural change requires explicit approval.

------------------------------------------------------------------------

# 35. UPDATED FOUR-AGENT RESPONSIBILITY

## Agent 1 --- Audit

Add to the audit:

-   locate current About section;
-   locate About content;
-   locate About navigation link;
-   determine whether `/about` exists;
-   identify anchor IDs;
-   identify reusable About component;
-   identify dependencies on homepage placement.

Output an implementation plan before editing.

## Agent 2 --- Content + Structure

Implement the About relocation:

``` text
homepage About → removed
About content → /about
navigation About → /about
```

Preserve the approved wording exactly.

Do not rewrite the content.

## Agent 3 --- Visual + Theme

Ensure `/about` visually belongs to the same design system.

Check:

-   Light Theme;
-   Dark Theme;
-   typography;
-   spacing;
-   responsive behaviour;
-   header;
-   footer;
-   theme toggle;
-   transitions;
-   reduced motion.

Do not redesign the About page beyond the approved direction.

## Agent 4 --- QA

Verify the full flow:

``` text
Home
  ↓
click About
  ↓
/about
  ↓
read About content
  ↓
navigate elsewhere
```

Then verify the homepage is cleaner and does not contain the relocated
About block.

------------------------------------------------------------------------

# 36. CURRENT REVIEW STATUS

This is an **approved structural change** for the next Cursor
implementation pass.

Further changes to the homepage should be handled separately and
reviewed one at a time.

Do not bundle speculative redesign decisions into this change.

Current principle:

> **Remove About from Home. Move it to /about. Preserve the approved
> content. Then review the result before changing anything else.**
> ------------------------------------------------------------------------

# 37. THEME REVISION --- WHITE LIGHT MODE + BRIGHT GREEN + MOBILE TOGGLE

This is a further approved refinement to the Light/Dark theme
implementation.

The previous Light Theme definition used a warm cream background. **That
is now superseded for the website implementation.**

The desired Light Theme is:

``` text
CLEAN WHITE BACKGROUND
+
DARK INK TYPOGRAPHY
+
BRIGHT GREEN ACCENT
+
RESTRAINED BRASS SECONDARY ACCENT
```

The objective is a cleaner, more modern presentation while retaining the
Pecunia wealth/growth visual language.

## 37.1 Light Theme background --- change from cream to white

Do not use the previous:

``` css
--ink: #F6F0E4;
```

as the Light Theme page background.

The Light Theme page background must be **white**:

``` css
--ink: #FFFFFF;
```

Use a very subtle off-white/light neutral only where a raised surface is
genuinely required:

``` css
--ink-2: #F7F7F5;
```

Do not turn the entire page cream.

The visual hierarchy should be:

``` text
Page background      #FFFFFF
Raised/panel surface #F7F7F5
Primary text         #12181A
Secondary text       #6E6558
Borders              subtle dark-neutral hairlines
Accent green        bright green
```

The page should feel clean, spacious and premium rather than
beige/cream.

## 37.2 Bright green is the growth/wealth accent

Green is an important Pecunia visual signal representing:

-   growth;
-   wealth;
-   positive movement;
-   performance;
-   successful outcomes;
-   active system states.

The Light Theme must therefore **not use the dark muted ledger green as
the primary visible green accent**.

Use the brighter approved green from the earlier Pecunia design system:

``` css
--green: #00C978;
```

This is the primary bright green accent.

Where the existing design currently uses a dark green/ledger-green
treatment for a visible accent, active state, data point, connector,
highlight or growth indicator, the Light Theme should use the bright
green treatment where appropriate.

## 37.3 Light Theme green treatment

In Light Theme, use the bright green for appropriate elements including:

-   growth/result numbers;
-   active indicators;
-   active carousel dots;
-   system/rail active states;
-   progress indicators;
-   selected states;
-   growth/performance highlights;
-   animated connection lines;
-   relevant accent words;
-   positive data visualisation;
-   subtle green borders;
-   green emphasis elements.

Do not flood the page with green.

The intended hierarchy is:

``` text
WHITE = canvas
INK   = structure + typography
GREEN = growth / wealth / active / performance
BRASS = restrained secondary brand accent
```

Green should remain purposeful.

## 37.4 Dark Theme green treatment

The Dark Theme should remain visually coherent with the same
growth/wealth language.

Where possible, use the bright green accent:

``` css
--green: #00C978;
```

for prominent active/growth elements rather than allowing important
green elements to become visually lost against the dark background.

However, do not blindly replace every existing `--ledger` usage if that
would damage contrast or the established visual hierarchy.

The implementation should distinguish:

``` text
primary bright growth accent → --green
secondary muted green         → --ledger
```

This preserves both roles.

## 37.5 Recommended token layer

If the existing project does not already have these variables, add them
to the existing theme token system rather than hard-coding colours
throughout components:

``` css
--green: #00C978;
--green-soft: #1c3628;
--green-deep: #25422f;
```

These values are from the approved Pecunia design specification.

Do not create multiple competing green values.

Use semantic variables so future brand refinement can happen centrally.

## 37.6 Light Theme complete token set

Unless an existing implementation requires an equivalent semantic
mapping, use:

``` css
/* LIGHT — DEFAULT */

--ink:          #FFFFFF;
--ink-2:        #F7F7F5;
--paper:        #181410;
--stone:        #6E6558;

--line:         rgba(24,20,16,0.12);
--line-strong:  rgba(24,20,16,0.24);

--header-bg:    rgba(255,255,255,0.92);
--recessed-bg:  rgba(24,20,16,0.045);

--green:        #00C978;
--green-soft:   #1c3628;
--green-deep:   #25422f;

--brass:        #A9812E;
--brass-dim:    #7d611f;
--ledger:       #33473B;
--ledger-light: #4c6858;
--wine:         #6B2E3A;
--dark-text:    #12181A;
```

Dark Theme can retain the existing approved base token values, with
`--green` available as the bright growth accent.

Do not replace the entire Dark Theme with Light Theme values.

## 37.7 Mobile theme toggle --- MUST BE VISIBLE

The theme toggle is currently missing from the mobile presentation.

This must be fixed.

The theme toggle must be available on mobile, not desktop-only.

When the mobile navigation/hamburger menu is opened, the theme control
must remain clearly accessible.

Acceptable implementations include:

``` text
Header:
[Logo]                         [Theme] [Menu]
```

or:

``` text
Mobile menu
-------------------
Services
Approach
About
Book A Call

Dark
-------------------
```

Use whichever structure is already consistent with the existing
navigation implementation.

Do not hide the theme toggle solely because the viewport is below the
desktop breakpoint.

## 37.8 Mobile initial theme

The site must load in the **Light Theme by default on mobile as well as
desktop**.

Expected behaviour:

``` text
New visitor
    ↓
Light Theme
    ↓
Theme toggle visible
    ↓
User selects Dark
    ↓
Dark Theme
```

The initial Light Theme must not depend on desktop-only CSS.

Do not accidentally implement:

``` text
Desktop → Light
Mobile  → hard-coded Light without toggle
```

The same theme state must control both layouts.

## 37.9 Avoid hydration/theme flash

If the application uses client-side theme state, make sure the
implementation does not produce an obvious:

``` text
Dark flash → Light flash
```

or:

``` text
Light flash → Dark flash
```

during initial load.

Use the project's existing architecture and the safest established
approach for synchronising the root:

``` html
<html data-theme="light">
```

before the page is visually presented where practical.

Do not introduce unnecessary dependencies.

## 37.10 Mobile toggle accessibility

The theme toggle must:

-   be a real interactive button/control;
-   have an accessible name;
-   have a visible focus state;
-   be keyboard accessible;
-   have sufficient touch target size;
-   remain readable in both themes;
-   not rely solely on colour to communicate state.

The label should continue to describe the theme the user will switch
into:

``` text
Light active → "Dark"
Dark active  → "Light"
```

## 37.11 Bright green and contrast

Bright green should be treated as an accent rather than a default text
colour for long paragraphs.

Do not use:

``` text
bright green body copy
bright green navigation text everywhere
bright green backgrounds across large sections
```

Use it for short, high-value signals.

Where text is placed directly on the bright green background, use the
approved dark text value:

``` css
color: var(--dark-text);
```

Check contrast rather than assuming the accent works for every text
size.

------------------------------------------------------------------------

# 38. UPDATED VISUAL PRIORITY

The current approved visual hierarchy is:

### Light Theme

``` text
1. White background
2. Strong editorial typography
3. Black/ink structure
4. Bright green growth/performance signals
5. Brass as a restrained secondary accent
6. Hairline borders
7. Generous whitespace
```

### Dark Theme

``` text
1. Near-black/ink background
2. Off-white typography
3. Bright green growth/performance signals where prominent
4. Brass as secondary accent
5. Muted ledger green for secondary system details
6. Hairline borders
7. Restrained motion
```

The website should not look like a green website.

It should look like a **premium white/ink or black/ink editorial system
with green used to communicate growth**.

------------------------------------------------------------------------

# 39. UPDATED AGENT RESPONSIBILITIES

## Agent 1 --- Audit

Specifically audit:

``` text
[ ] Theme toggle exists on desktop
[ ] Theme toggle exists on mobile
[ ] Theme state is shared across breakpoints
[ ] Current Light background
[ ] Current green tokens
[ ] Hard-coded cream colours
[ ] Hard-coded dark green colours
[ ] Root data-theme implementation
[ ] Hydration/theme flash risk
```

## Agent 2 --- Content + Structure

Do not introduce theme-specific content.

Ensure structural elements use semantic theme classes/tokens.

Do not hard-code:

``` css
background: #FFFFFF;
```

inside individual components where the existing token system can handle
it.

Prefer:

``` css
background: var(--ink);
```

## Agent 3 --- Visual + Theme

Agent 3 is explicitly responsible for:

-   white Light Theme;
-   bright green growth accents;
-   Light/Dark theme toggle;
-   mobile toggle visibility;
-   theme transition;
-   correct toggle label;
-   responsive behaviour;
-   contrast;
-   visual consistency;
-   existing animation compatibility.

The agent must compare desktop and mobile.

## Agent 4 --- QA

Test all combinations:

  View      Light   Dark   Toggle visible
  --------- ------- ------ ----------------
  Desktop   ✓       ✓      ✓
  Tablet    ✓       ✓      ✓
  Mobile    ✓       ✓      ✓

Test:

``` text
Fresh desktop load → Light
Fresh mobile load → Light
Desktop toggle → Dark
Mobile toggle → Dark
Dark → Light
Refresh
Resize desktop ↔ mobile
Open mobile menu
Close mobile menu
```

Confirm the selected theme does not disappear or reset unexpectedly when
changing viewport size.

------------------------------------------------------------------------

# 40. FINAL THEME ACCEPTANCE CRITERIA

The implementation is not complete unless all of the following are true:

``` text
[ ] Light Theme is the default
[ ] Light Theme background is WHITE
[ ] Light Theme is not cream/beige
[ ] Dark Theme remains available
[ ] Theme toggle exists on desktop
[ ] Theme toggle exists on mobile
[ ] Mobile navigation does not hide theme access
[ ] Toggle label describes destination theme
[ ] Bright green #00C978 is available as the primary growth accent
[ ] Prominent green growth elements are visually bright
[ ] Green is used purposefully rather than excessively
[ ] Brass remains a secondary accent
[ ] Primary CTA buttons remain ink
[ ] No hard-coded conflicting theme colours
[ ] No hydration/theme flash where reasonably avoidable
[ ] Both themes remain responsive
[ ] Both themes support reduced motion
[ ] Keyboard focus remains visible
[ ] Touch targets remain usable on mobile
[ ] No horizontal overflow
[ ] No unrelated functionality changed
```

**Final visual rule:**

> The Light Theme should look like a clean white premium editorial
> website. Green communicates growth, wealth and positive performance.
> Dark Theme remains available as the alternate expression of the same
> system. The theme toggle must be accessible everywhere, including
> mobile.
> ------------------------------------------------------------------------

# 41. HERO ROTATING HEADLINE --- SLOWER, SMOOTHER TEXT TRANSITION

The current rotating hero headline works, but the transition between
phrases is too instantaneous.

From the supplied screen recording, the current behaviour is
effectively:

``` text
Current phrase
    ↓
disappears / changes
    ↓
new phrase appears almost immediately
```

The desired behaviour is:

``` text
Current phrase
    ↓
gentle fade/exit
    ↓
very short breathing gap
    ↓
new phrase gently fades/slides in
    ↓
holds clearly
```

The change should be **subtle and premium**, not a dramatic animation.

## 41.1 Important distinction

Do **not** make the overall headline cycle dramatically slower.

The user likes the current rotation and only wants the **transition
itself to have more breathing room**.

Therefore:

-   keep the existing rotation concept;
-   keep the existing phrases;
-   keep the automatic cycling;
-   slightly slow the exit;
-   introduce a small gap;
-   slightly slow the entrance;
-   avoid an instant replacement.

## 41.2 Recommended timing

Use approximately:

``` text
Exit animation:       350–450ms
Brief gap:             100–200ms
Enter animation:       450–600ms
Hold before next:      existing cycle timing, adjusted as necessary
```

A good starting point is:

``` text
400ms exit
150ms gap
500ms enter
```

Then visually test and tune.

Do not make the transition feel sluggish.

The goal is simply to make the change feel intentional rather than
instantaneous.

## 41.3 Animation direction

Preferred:

``` text
Old headline:
opacity 1
translateY(0)

        ↓

opacity 0
translateY(-8px to -12px)

        ↓

New headline:
opacity 0
translateY(8px to 12px)

        ↓

opacity 1
translateY(0)
```

The movement should be extremely subtle.

Do not use large movement, bouncing, scaling or dramatic rotation.

## 41.4 Preserve layout stability

The rotating headline must not cause the surrounding hero layout to
jump.

The headline container should maintain an appropriate stable/minimum
height or use an implementation that prevents:

``` text
headline changes
↓
hero content jumps
↓
CTA moves
↓
layout feels unstable
```

The rest of the hero should remain stationary while the text changes.

## 41.5 Accessibility

Respect:

``` css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

-   remove the movement;
-   use a simple opacity transition or immediate text replacement;
-   never make the content inaccessible;
-   continue displaying the current headline correctly.

Do not rely on animation to communicate information.

## 41.6 Do not change the copy

The following rotating headline copy remains approved and must not be
rewritten:

``` text
Attracting better customers.
Building predictable demand.
Becoming the obvious choice.
Breaking your growth ceiling.
Owning your market.
Leaving average behind.
```

Do not change spelling, punctuation or wording as part of the animation
adjustment.

## 41.7 Do not change unrelated animation

This request applies specifically to the **hero rotating headline
transition**.

Do not use it as permission to alter:

-   service accordion animation;
-   stage rail animation;
-   problem-chip convergence;
-   method progress;
-   philosophy animation;
-   carousel animation;
-   theme transition;
-   navigation animation.

Those should continue following their own approved specifications.

## 41.8 QA

Agent 4 should specifically watch the hero rotation for at least several
cycles and confirm:

``` text
[ ] Old text does not disappear instantly
[ ] Brief visual breathing space exists
[ ] New text does not appear instantly
[ ] Enter animation is smooth
[ ] Exit animation is smooth
[ ] Overall rotation still feels responsive
[ ] Hero layout does not jump
[ ] Text remains readable
[ ] Reduced-motion mode works
[ ] No flicker
[ ] No overlapping phrases
[ ] No duplicate phrases during transition
```

**Desired feel:**

> Keep the existing hero animation, but give each text change a little
> more breathing room so the old phrase leaves naturally and the new
> phrase arrives smoothly instead of appearing almost instantly.
> ------------------------------------------------------------------------

# 42. SERVICES --- REPLACE EXPANDING DROPDOWN WITH DEDICATED SERVICE PAGES

## Decision

The current Services section uses expandable rows.

Example current behaviour:

``` text
01 — Digital & E-commerce       +
02 — Paid Growth                +
03 — Organic Growth & Content   +
04 — AI, Automation & CRM       +
```

Clicking a row currently expands additional content underneath it.

**Change this interaction.**

The service categories should no longer open into large
dropdown/accordion content on the homepage.

Instead:

``` text
Homepage Services
        ↓
Click service category
        ↓
Dedicated service page
        ↓
Full description + explanation + services included
        ↓
CTA / next action
```

This should make the homepage cleaner and move detailed service
information onto dedicated pages where it can be properly explained.

## 42.1 Homepage Services behaviour

Keep the Services section on the homepage, but make it a **compact
navigation/list section** rather than a large accordion.

Each service category should remain visible as a row.

Example:

``` text
01 — Digital & E-commerce                                      →
02 — Paid Growth                                               →
03 — Organic Growth & Content                                  →
04 — AI, Automation & CRM                                      →
```

The exact number/categories should follow the latest approved website
content/build specification.

The homepage should **not expand a large block of text beneath the
selected service**.

Clicking the service row/text should navigate to its dedicated page.

## 42.2 Replace PLUS with ARROW

The current interaction indicator is a:

``` text
+
```

Replace it with a directional arrow:

``` text
→
```

The arrow should clearly communicate:

> This item can be opened / visited.

Do not use the plus icon for service navigation.

The arrow should be:

-   subtle;
-   aligned consistently on the right;
-   visible in both Light and Dark themes;
-   keyboard accessible;
-   responsive;
-   consistent with the Pecunia visual language.

A small hover movement is acceptable:

``` text
→
  →
```

or a subtle translation of the arrow towards the right.

Do not make it bounce or use an exaggerated animation.

## 42.3 Clicking the service text

The **service category text itself must be clickable**.

Do not require the user to click only the arrow.

The entire service row should behave as the navigation target.

For example:

``` text
[01] [Digital & E-commerce                     →]
```

Clicking anywhere on the meaningful row should navigate to the relevant
service page.

This should work with:

-   mouse;
-   touch;
-   keyboard;
-   screen readers.

Use a semantic link where appropriate.

## 42.4 Optional explicit "View service" affordance

If the design needs clearer discoverability, a small text affordance may
be included:

``` text
Explore service →
```

or:

``` text
View service →
```

However, do not clutter the row.

The preferred design is still:

``` text
01 — Digital & E-commerce                         →
```

with the whole row clickable.

------------------------------------------------------------------------

# 43. DEDICATED SERVICE PAGE ARCHITECTURE

Create dedicated routes for the service categories.

Preferred URL structure:

``` text
/services/digital-ecommerce
/services/paid-growth
/services/organic-growth-content
/services/ai-automation-crm
```

If the current project has a different approved service taxonomy,
preserve the existing names and use clean, readable slugs.

**Do not create URLs based on internal abbreviations such as
`/services/01`.**

Human-readable URLs are preferred.

## 43.1 Four primary service pages

The latest approved website-content document defines these four
connected systems:

### 01 --- Digital & E-commerce

``` text
Digital infrastructure built to convert.
```

### 02 --- Paid Growth

``` text
Put your offer in front of the right people.
```

### 03 --- Organic Growth & Content

``` text
Build demand that compounds.
```

### 04 --- AI, Automation & CRM

``` text
Turn manual processes into growth infrastructure.
```

These are the service-page categories represented in the latest approved
content.

Do not silently substitute the older six-category build-spec taxonomy if
the current website implementation has already adopted these four
categories.

If the existing codebase contains both taxonomies, **Agent 1 must
identify the current source of truth and flag the discrepancy before
Agent 2 changes the structure.**

## 43.2 Service page content

Each dedicated page should provide significantly more room for:

-   service description;
-   explanation of the problem being solved;
-   what Pecunia does;
-   included capabilities/services;
-   how the service connects to the wider growth system;
-   appropriate supporting detail;
-   CTA to start a project/contact.

However:

> **Do not invent unsupported business claims, statistics, case studies,
> guarantees or pricing.**

Use the approved service descriptions and capability lists as the
factual foundation.

Where more explanatory copy is needed, it should be derived from the
approved content and brand positioning rather than introducing unrelated
claims.

## 43.3 Digital & E-commerce page

Approved core copy:

``` text
Digital infrastructure built to convert.
```

Approved description:

``` text
Your website should do more than look good. It should communicate your value, remove friction and turn interest into action. We design and build digital experiences around how your customers actually discover, evaluate and buy.

From high-converting websites to scalable e-commerce platforms, we build digital infrastructure designed around performance.
```

Approved capabilities:

``` text
Web Design
Custom Development
Shopify & E-commerce Builds
Product & Website Optimisation
```

## 43.4 Paid Growth page

Approved core copy:

``` text
Put your offer in front of the right people.
```

Approved description:

``` text
Paid media isn't about spending more. It's about understanding who to reach, what to say, where to send them and how to turn attention into action. We build, launch and optimise acquisition campaigns around your audience, offer and commercial objectives.

Every campaign has a purpose. Acquire. Convert. Learn. Improve. Scale.
```

Approved capabilities:

``` text
Google Ads
Meta Ads
TikTok Ads
Campaign Strategy
Paid Ad Creative
Performance Optimisation
```

## 43.5 Organic Growth & Content page

Approved core copy:

``` text
Build demand that compounds.
```

Approved description:

``` text
The strongest brands don't rely on one channel. We create organic growth strategies that increase visibility, authority and demand while building assets that continue working long after they are published.

We don't create content to fill a calendar. We create content designed to capture attention, build trust and move customers closer to a decision.
```

Approved capabilities:

``` text
SEO
Content Strategy
Social Media Content
AI-Generated Content
Content Production
Product Optimisation
Organic Growth Strategy
Brand Content
```

## 43.6 AI, Automation & CRM page

Approved core copy:

``` text
Turn manual processes into growth infrastructure.
```

Approved description:

``` text
The businesses that scale efficiently aren't necessarily doing more. They're building systems that allow them to achieve more with less friction. We connect your marketing, sales and operations through intelligent technology and automation.

From the first interaction to the final conversion, we identify where time, leads and opportunities are being lost. Then we build the systems to capture them.

Less manual work. More control. More opportunities captured.
```

Approved capabilities:

``` text
AI Automation
Lead Management
CRM Systems
Workflow Automation
Data & Integrations
Lead Capture
Lead Qualification
```

**Important:** preserve this copy exactly unless the project owner
explicitly approves a copy revision.

------------------------------------------------------------------------

# 44. SERVICE PAGE VISUAL STRUCTURE

The dedicated service page should use the existing Pecunia visual
system.

Suggested structure:

``` text
Header
↓
Service eyebrow / category code
↓
Large service headline
↓
Core service description
↓
What we do / capabilities
↓
Detailed explanation / system relationship
↓
Relevant supporting content
↓
CTA
↓
Footer
```

Do not turn the page into a generic SaaS feature grid.

The visual language should remain:

-   editorial;
-   ledger-inspired;
-   premium;
-   restrained;
-   left-aligned;
-   generous whitespace;
-   hairline dividers;
-   typography-led;
-   strong use of the green growth accent;
-   Light Theme white background;
-   Dark Theme alternate.

## 44.1 Service capability presentation

The individual capabilities should be clearly readable.

Example:

``` text
WHAT WE DO

01
Web Design
Digital experiences designed around how customers discover,
evaluate and buy.

02
Custom Development
Fully tailored digital infrastructure built around the business.
```

Where descriptions already exist in approved source material, use them.

Do not invent fake results or client claims.

## 44.2 Connected-system explanation

Each service page should explain that the service is part of the wider
Pecunia system.

Use the approved positioning:

``` text
Four connected systems. Not four separate suppliers.
```

The page can visually reference adjacent service systems, but should not
create an unnecessary complex navigation system.

The user should understand:

``` text
Service
   ↓
How it solves the problem
   ↓
How it connects to growth
   ↓
What Pecunia can build/manage
   ↓
Start a project
```

## 44.3 CTA

Every service page should provide an obvious route to the contact/quote
process.

Use the approved CTA language where applicable:

``` text
Start A Growth Project →
```

or the existing site's approved quote CTA.

Do not introduce public pricing.

Do not create checkout functionality.

------------------------------------------------------------------------

# 45. SERVICE NAVIGATION + ROUTING RULES

The service navigation must work consistently from:

-   homepage;
-   header Services link;
-   `/services` page if retained;
-   mobile navigation;
-   individual service pages.

The existing dedicated `/services` page should be treated as the
**service index/overview page** if it already exists.

Recommended structure:

``` text
/services
    ↓
Overview of all services
    ↓
click category
    ↓
/services/[slug]
    ↓
Full service page
```

This means `/services` is not removed simply because individual pages
exist.

If the current site already has `/services`, preserve it and turn it
into the service overview/index rather than duplicating content.

## 45.1 Header Services link

The header:

``` text
Services
```

should navigate to:

``` text
/services
```

It should not point to a homepage anchor if the current approved
architecture has moved Services to a dedicated page.

## 45.2 Breadcrumb / back navigation

On individual service pages, a subtle return affordance may be included:

``` text
← Services
```

This is encouraged for usability, particularly on mobile.

It should not replace the global navigation.

------------------------------------------------------------------------

# 46. WHAT HAPPENS TO THE EXISTING ACCORDION

Do not simply delete the service data.

The existing data should become the source for:

``` text
/services
/services/[slug]
```

Reuse the existing service data structure wherever possible.

Preferred model:

``` text
service data
     ↓
Services overview
     ↓
Individual service page
```

Avoid:

``` text
homepage data
+
services page duplicate data
+
individual page duplicate data
```

There should be a single source of truth.

The existing accordion interaction can be removed once the new
navigation is confirmed working.

Do not leave a hidden/unused accordion implementation if it is no longer
required.

------------------------------------------------------------------------

# 47. MOBILE SERVICE EXPERIENCE

The service interaction must be especially clear on mobile.

Do not rely on hover.

Each row should have a generous touch target.

Example:

``` text
01
Digital & E-commerce                         →
----------------------------------------------
02
Paid Growth                                  →
----------------------------------------------
03
Organic Growth & Content                    →
----------------------------------------------
04
AI, Automation & CRM                        →
```

Tapping the row opens the dedicated page.

There should be no requirement to tap a tiny arrow.

The arrow is an indicator and secondary affordance; the **whole row is
the link**.

------------------------------------------------------------------------

# 48. ANIMATION

Keep the service navigation animation restrained.

Allowed:

-   subtle arrow translation on hover;
-   subtle row background/border state;
-   short reveal transition when entering the page.

Do not recreate the old accordion expansion animation.

Do not add large page transitions.

The service pages should feel fast.

The interaction should communicate:

``` text
"This is a destination."
```

not:

``` text
"This expands another block on the current page."
```

------------------------------------------------------------------------

# 49. FOUR-AGENT WORKFLOW UPDATE --- SERVICE PAGES

## Agent 1 --- Audit

Before editing:

``` text
[ ] Locate current homepage Services section
[ ] Locate current accordion component
[ ] Locate service data source
[ ] Locate /services route
[ ] Locate current Services navigation link
[ ] Identify current service taxonomy
[ ] Identify existing service descriptions
[ ] Identify existing service item descriptions
[ ] Check for duplicate service data
[ ] Check mobile Services behaviour
```

If the current implementation's service taxonomy differs from the latest
approved content, **flag the discrepancy rather than silently choosing
one.**

## Agent 2 --- Structure + Content

Implement:

``` text
Homepage service accordion
        ↓
Compact clickable service rows

Services overview
        ↓
Service category links

Service category
        ↓
Dedicated service page
```

Use the approved copy above.

Do not rewrite the supplied copy.

Do not invent statistics, testimonials, pricing or case studies.

## Agent 3 --- Visual + Interaction

Implement:

-   arrow indicators instead of plus signs;
-   whole-row clickable interaction;
-   subtle hover/touch state;
-   dedicated service page layout;
-   responsive mobile presentation;
-   Light Theme;
-   Dark Theme;
-   bright green growth accents;
-   existing Pecunia typography and ledger visual language.

Do not introduce generic cards or excessive animations.

## Agent 4 --- QA

Test:

``` text
Homepage
  ↓
Services
  ↓
Service overview
  ↓
Service category
  ↓
Individual service page
  ↓
CTA
  ↓
Contact
```

Verify every service row.

Verify:

``` text
[ ] Arrow visible
[ ] No plus icon remains for service navigation
[ ] Whole row clickable
[ ] Keyboard accessible
[ ] Mobile touch target works
[ ] Correct route opens
[ ] Back to Services works
[ ] Content matches approved copy
[ ] No duplicated data
[ ] No public pricing
[ ] No excluded services
[ ] Light Theme works
[ ] Dark Theme works
[ ] No horizontal overflow
[ ] No console errors
```

------------------------------------------------------------------------

# 50. IMPORTANT --- REVIEW BEFORE EXPANDING SERVICE CONTENT

The immediate goal is to establish the **information architecture and
interaction** first.

Do not allow Cursor to generate large amounts of new marketing copy
automatically.

First implement:

``` text
Click service
→
Open service page
→
Approved description
→
Approved capabilities
→
CTA
```

Then review the pages visually and commercially.

After that review, additional detailed explanations can be
written/approved for each service page.

This keeps the implementation controlled and prevents AI-generated
filler from being added to the public website.

**Core rule:**

> The homepage introduces the service. The dedicated page explains the
> service. The homepage should not become the service page.
> ------------------------------------------------------------------------

# 51. HERO ROTATING HEADLINE --- ROTATING PHRASE MUST BE BRIGHT GREEN

The rotating headline phrase shown in the supplied reference image must
use the **bright Pecunia green**.

Example:

``` text
You're one move away from...

Attracting better customers.
```

The first line remains the normal primary text colour.

The rotating phrase:

``` text
Attracting better customers.
```

must be rendered in:

``` css
color: var(--green);
```

using the approved bright green:

``` css
--green: #00C978;
```

## 51.1 Applies to every rotating phrase

This is not limited to the phrase shown in the screenshot.

Every phrase in the approved rotating headline sequence should use the
same bright green treatment:

``` text
Attracting better customers.
Building predictable demand.
Becoming the obvious choice.
Breaking your growth ceiling.
Owning your market.
Leaving average behind.
```

The static introductory text:

``` text
You're one move away from...
```

remains the normal primary text colour.

Visual structure:

``` text
You're one move away from...

Attracting better customers.
^^^^^^^^^^^^^^^^^^^^^^^^^^^
     BRIGHT GREEN
```

## 51.2 Do not use the dark ledger green for this headline

Do not use:

``` css
--ledger: #33473B;
```

for the rotating headline.

Use:

``` css
--green: #00C978;
```

because this headline is a prominent brand/growth statement and should
carry the bright growth/wealth signal.

## 51.3 Maintain readability in both themes

The rotating phrase must remain visually prominent in:

-   Light Theme;
-   Dark Theme;
-   desktop;
-   tablet;
-   mobile.

Do not reduce its opacity to the point that the green becomes dull.

The animation should still follow the slower/smoother transition
requirements already specified in Section 41.

## 51.4 Button relationship

The hero CTA:

``` text
Make The Move →
```

should also use the approved bright green background with dark/black
text as specified previously.

This creates a deliberate visual relationship:

``` text
GREEN HEADLINE
      +
GREEN CTA
      =
GROWTH / MOVEMENT / WEALTH SIGNAL
```

Do not make every other element green. The green remains reserved for
meaningful growth/action signals.

## 51.5 QA

Agent 4 must verify:

``` text
[ ] "You're one move away from..." is normal primary text
[ ] Rotating headline phrase is bright green
[ ] Every rotating phrase uses the same bright green
[ ] Green is #00C978 through the theme token
[ ] No dark ledger green is used for the rotating headline
[ ] Light Theme displays the green clearly
[ ] Dark Theme displays the green clearly
[ ] Transition remains smooth
[ ] No layout shift occurs
[ ] Mobile displays the same green treatment
```

**Visual rule:**

> The rotating statement is one of the strongest growth signals on the
> homepage. Keep the introductory phrase in ink and make the changing
> statement bright Pecunia green.
> ------------------------------------------------------------------------

# 56. GREEN EMPHASIS UPDATE --- COMPLETE KEY SENTENCES, NOT PARTIAL PHRASES

The green emphasis rule is now refined.

Where a section contains a **prominent commercial/brand statement
intended as the key message**, the **entire statement/sentence should be
bright green**, rather than colouring only part of the sentence.

Use:

``` css
color: var(--green);
```

with:

``` css
--green: #00C978;
```

## 56.1 Why Pecunia --- entire statement green

The current implementation incorrectly colours only:

``` text
Because you
```

green.

Change this.

The **entire sentence** must be bright green:

``` text
Because you don't need another marketing supplier.
```

Visual treatment:

``` text
Why Pecunia?

Because you don't need another marketing supplier.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  BRIGHT GREEN
```

Do not split the sentence into green + black.

The complete statement is the key message and should read as one unified
green statement.

## 56.2 Approach --- entire statement green

The complete key statement:

``` text
We don't sell activity. We build for outcomes.
```

must be bright green.

Do not use:

``` text
We don't sell activity.       ← green
We build for outcomes.        ← black
```

Use:

``` text
We don't sell activity. We build for outcomes.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  BRIGHT GREEN
```

## 56.3 Commitment --- entire statement green

The complete key statement:

``` text
We don't promise magic. We build accountability into the system.
```

must be bright green.

Do not colour only:

``` text
We don't promise magic.
```

The entire statement should use the same green treatment.

## 56.4 Hero rotating statement

The entire rotating hero statement remains bright green:

``` text
Attracting better customers.
Building predictable demand.
Becoming the obvious choice.
Breaking your growth ceiling.
Owning your market.
Leaving average behind.
```

The introductory text:

``` text
You're one move away from...
```

remains normal ink.

## 56.5 Growth/problem statement example

The screenshot also shows the statement:

``` text
Disconnected systems.
```

This should be treated as a key highlighted outcome/problem statement
and rendered in the bright Pecunia green.

Use:

``` css
color: var(--green);
```

Do not use the darker muted ledger green for this prominent statement.

The supporting explanatory paragraph above it remains normal secondary
text.

## 56.6 General rule for prominent statements

Apply this consistently across the approved website.

If a section has a structure like:

``` text
Section heading

Prominent statement.

Supporting explanation.
```

then:

``` text
Section heading
        = INK

Prominent statement
        = BRIGHT GREEN

Supporting explanation
        = SECONDARY TEXT
```

When the prominent statement is a complete sentence, **colour the
complete sentence green**.

Do not arbitrarily split one sentence between green and black.

## 56.7 Do not over-apply the rule

This does NOT mean every heading or every paragraph becomes green.

Only use full-sentence green treatment for explicitly identified **key
statements / commercial messages / growth signals**.

Keep:

-   body paragraphs;
-   navigation;
-   normal section headings;
-   service descriptions;
-   ordinary supporting copy

in their normal theme colours.

The green remains a deliberate visual signal.

## 56.8 Visual consistency

The current intended system is:

``` text
WHITE BACKGROUND
        +
INK TYPOGRAPHY
        +
BRIGHT GREEN KEY STATEMENTS
        +
BRIGHT GREEN GROWTH / ACTION ELEMENTS
        +
RESTRAINED BRASS ACCENTS
```

This should create a stronger and more consistent brand language than
mixing green and black within individual sentences.

## 56.9 QA

Agent 4 must specifically verify these exact statements:

``` text
[ ] "Because you don't need another marketing supplier." is entirely green
[ ] "We don't sell activity. We build for outcomes." is entirely green
[ ] "We don't promise magic. We build accountability into the system." is entirely green
[ ] Every rotating hero phrase is entirely green
[ ] "Disconnected systems." is green
[ ] Supporting paragraphs remain normal text
[ ] No sentence is accidentally split green/black
[ ] All green uses var(--green)
[ ] --green remains #00C978
[ ] Light Theme remains white
[ ] Dark Theme retains visible green emphasis
```

**Final rule:**

> When a statement is deliberately designated as a key Pecunia message,
> make the whole statement green. Do not colour only the first few
> words.
------------------------------------------------------------------------

# 57. FINAL APPROVED BRAND GREEN — OVERRIDES PREVIOUS GREEN VALUES

The **base Pecunia green is now confirmed as:**

```css
--green: #00C978;
```

This value **supersedes all previously specified bright-green values** in this document, including any earlier references to `#84E4A8`.

Cursor must use:

```css
var(--green)
```

for the primary Pecunia green throughout the website.

## Green meaning

The base green represents:

- growth;
- wealth;
- positive movement;
- performance;
- action;
- commercial progress.

## Apply the base green to the approved key elements

The following must use `var(--green)`:

```text
Hero rotating headline statements
Approach key statement
Commitment key statement
Why Pecunia key statement
"Disconnected systems." highlight
"Make The Move →" CTA background
Approved growth/performance indicators
Approved active green elements
```

## Do not create another primary green

Do not introduce another green value to replace or compete with:

```css
--green: #00C978;
```

Secondary green tokens may remain only where they have a genuinely different semantic purpose, but the primary visible Pecunia growth accent must be `#00C978`.

## Theme behaviour

The same base green:

```css
#00C978
```

should be used in both Light and Dark themes where the approved design calls for the primary green accent.

Light Theme:

```text
White background
+
Ink typography
+
#00C978 green
+
Restrained brass
```

Dark Theme:

```text
Dark/ink background
+
Light typography
+
#00C978 green
+
Restrained brass
```

## Final instruction

> **#00C978 is the single approved base Pecunia green. It overrides every previous bright-green colour instruction in this document.**
------------------------------------------------------------------------

# 58. FINAL LIGHT-THEME GREEN REFINEMENT — MORE VIBRANT + STRONGER CONTRAST

The previously confirmed `#27E594` green is now superseded.

The revised primary Pecunia green is:

```css
--green: #00C978;
```

This is the approved green for the current implementation.

## Objective

The Light Theme green should feel:

- vibrant;
- energetic;
- premium;
- associated with growth and wealth;
- more saturated than the previous green;
- dark/strong enough to stand out clearly against the white background.

The previous:

```text
#27E594
```

was considered too pale/light for the desired Light Theme treatment.

The new:

```text
#00C978
```

should provide a stronger visual presence while retaining the bright green identity.

## Apply consistently

Use:

```css
color: var(--green);
```

for green key statements.

Use:

```css
background: var(--green);
color: var(--dark-text);
```

for the approved green CTA treatment.

This applies to:

```text
Hero rotating statements
Approach key statement
Commitment key statement
Why Pecunia key statement
Disconnected systems.
Make The Move →
Approved growth/performance indicators
Approved active states
```

## Light Theme priority

The Light Theme should visually read:

```text
WHITE
+
BLACK / INK
+
VIBRANT DEEP GREEN #00C978
+
RESTRAINED BRASS
```

Do not make the green pastel, washed out or overly mint.

Do not replace it with a dull forest/ledger green either.

The desired character is **vibrant green with enough depth to command attention on white**.

## Dark Theme

Use the same:

```css
--green: #00C978;
```

for primary green accents in Dark Theme unless a specific contrast requirement requires a separate semantic treatment.

Do not silently introduce another primary green.

## Accessibility

After implementation, check the actual green against:

- white background;
- dark/ink text;
- dark theme background;
- button text.

Where the green is used as a background, use the approved dark text colour and verify contrast.

Where the green is used as text, verify that the size/weight and surrounding contrast provide clear readability.

## Final source of truth

```css
--green: #00C978;
```

**This value overrides every previous primary Pecunia green value in this document.**
------------------------------------------------------------------------

# 59. LIGHT-THEME CONTENT/DESCRIPTION TEXT — PURE BLACK

The Light Theme typography hierarchy is now refined further.

Any text that is **descriptive/content copy** must be **pure black**, not muted brown, grey or stone.

For example, the text shown in the supplied reference:

```text
Your business doesn't need more noise. It needs the right move.

Pecunia brings strategy, marketing, technology and automation
together to help ambitious businesses move beyond where they are
now.
```

must use pure black in Light Theme.

Use:

```css
color: #000000;
```

or, preferably through the existing semantic token system:

```css
--content-text: #000000;
```

and:

```css
color: var(--content-text);
```

## 59.1 What counts as content/descriptive text

The following should be pure black in Light Theme:

- descriptive paragraphs;
- service descriptions;
- explanatory copy;
- supporting section copy;
- About page body copy;
- Approach supporting paragraphs;
- Commitment supporting paragraphs;
- Why Pecunia supporting paragraphs;
- service-page explanations;
- capability descriptions;
- CTA supporting descriptions;
- other normal written website content.

Do not use the muted `--stone` colour for normal descriptive content in Light Theme.

## 59.2 What remains green

The approved key statements remain bright green:

```css
--green: #00C978;
```

Examples:

```text
Attracting better customers.
We don't sell activity. We build for outcomes.
We don't promise magic. We build accountability into the system.
Because you don't need another marketing supplier.
Disconnected systems.
```

The green is reserved for these deliberate key messages and growth/action signals.

## 59.3 What remains black

Normal structural and content text should be black:

```text
Section headings
Descriptions
Paragraphs
Explanations
Service copy
Navigation text
Labels where not explicitly accented
```

Primary headings should remain the established primary ink treatment, but normal body/content copy in Light Theme must not be faded into grey/brown.

## 59.4 Light Theme hierarchy

The final Light Theme hierarchy is:

```text
WHITE
  ↓
PURE BLACK CONTENT / INK
  ↓
BRIGHT GREEN #00C978 KEY STATEMENTS
  ↓
RESTRAINED BRASS ACCENTS
```

Do not make body copy look washed out.

The supplied screenshot demonstrates the desired direction: the descriptive copy should have strong, clean black readability against the white background.

## 59.5 Dark Theme

This specific pure-black rule applies to the **Light Theme**.

Dark Theme should continue using its appropriate light/off-white content colour for readability.

Do not put pure black body text on the Dark Theme background.

## 59.6 Do not change the wording

This is a colour/visual treatment change only.

Do not rewrite or alter any approved content while implementing it.

## 59.7 QA

Agent 4 must verify:

```text
[ ] Light Theme descriptions are pure black
[ ] Light Theme body/content copy is pure black
[ ] No muted brown/grey body copy remains where content should be black
[ ] Green key statements remain #00C978
[ ] Headings retain their approved hierarchy
[ ] Dark Theme remains readable
[ ] No unnecessary hard-coded colours were introduced
[ ] Shared semantic tokens are used where appropriate
```

**Final rule:**

> In Light Theme, descriptive/content text should be clean pure black.
> Green is reserved for intentional key statements and growth/action
> signals. Do not use grey or brown to weaken normal website copy.
------------------------------------------------------------------------

# 61. SERVICE-PAGE BACK ARROW — FINAL ROUTING FIX FOR EVERY SERVICE

This is a **navigation fix**, not a redesign of the existing service pages.

The supplied screen recording confirms that the individual service page currently displays a back link such as:

```text
← Services
```

The service detail page design itself is good and should be preserved.

The required change is specifically the **destination and label of the back arrow**.

## 61.1 Every individual service page must return directly to Home

For **every single service detail page**, the visible back arrow must route directly to the Pecunia Studios homepage:

```text
/service detail
      ↓
← Home
      ↓
/
```

It must NOT route to:

```text
/services
```

It must NOT route to the previous page using browser history.

It must NOT use:

```text
← Services
```

as the back navigation on the individual service detail pages.

The required destination is always:

```text
/
```

## 61.2 Required label

Change the current:

```text
← Services
```

to:

```text
← Home
```

or, if the established design uses an icon-only arrow with an accessible label:

```text
←
```

with an accessible name equivalent to:

```text
Back to Home
```

The visual treatment should remain consistent with the existing service page.

## 61.3 Applies to EVERY service

This is a global rule for the complete list of individual services.

At minimum, verify every currently approved service route:

```text
/services/digital-ecommerce
/services/paid-growth
/services/organic-growth-content
/services/ai-automation-crm
```

If additional service detail routes already exist in the codebase, apply the same rule to those as well.

Do not fix only the Digital & E-commerce page.

The implementation should ideally be handled in the **shared service-detail page/template/component**, so every service inherits the same correct behaviour.

Preferred architecture:

```text
Shared Service Detail Template
            ↓
      Back Arrow
            ↓
           "/"
```

rather than individually patching every service page.

## 61.4 Services overview page remains unchanged

The `/services` page is currently good and should remain as the service overview/index page.

Keep:

```text
/services
```

as the place where visitors can view the service list.

From the Services overview:

```text
/services
      ↓
click service
      ↓
/services/[service-slug]
```

The service detail page then uses:

```text
← Home
```

to return directly to:

```text
/
```

Therefore:

```text
HOME
  ↓
SERVICES
  ↓
SERVICE DETAIL
  ↓
← HOME
```

## 61.5 Do not change the service detail design

The supplied video shows the current individual service page layout.

Preserve the existing design, including:

- header;
- logo;
- Services navigation;
- Approach navigation;
- About navigation;
- theme toggle;
- Book A Call;
- service number;
- large service title;
- service headline;
- service descriptions;
- What We Do section;
- typography;
- spacing;
- Light Theme;
- Dark Theme.

Only change the back-navigation destination/label unless another approved change is separately specified.

## 61.6 Do not use browser history

Do not implement the arrow as:

```javascript
router.back()
```

for this requirement.

The desired behaviour is deterministic.

Regardless of how the visitor reached the service page:

```text
← Home
```

must always navigate to:

```text
/
```

Examples:

```text
Home → Services → Digital & E-commerce → ← Home → /
```

```text
Services → Paid Growth → ← Home → /
```

```text
Direct URL → Organic Growth & Content → ← Home → /
```

```text
Bookmark → AI, Automation & CRM → ← Home → /
```

In every case the result is:

```text
/
```

## 61.7 Mobile

The exact same routing applies on mobile.

Every service detail page must provide the back-to-home arrow/link.

It must remain:

- visible;
- touch accessible;
- keyboard accessible;
- clearly associated with navigation;
- large enough to tap comfortably.

Do not hide it on mobile.

## 61.8 All other dedicated pages

The broader global rule remains:

> Dedicated/internal pages should provide a consistent back-to-home affordance where specified.

At minimum this applies to:

```text
About
Services
Every individual Service detail page
Any other dedicated page introduced by this project
```

For the service detail pages specifically, the destination is unconditionally:

```text
/
```

## 61.9 QA — test every service individually

Agent 4 must test each service route, not just one example.

```text
[ ] Digital & E-commerce → ← Home → /
[ ] Paid Growth → ← Home → /
[ ] Organic Growth & Content → ← Home → /
[ ] AI, Automation & CRM → ← Home → /
```

If additional service routes exist:

```text
[ ] Additional service → ← Home → /
```

Also test:

```text
[ ] Click service from homepage
[ ] Click service from /services
[ ] Open service URL directly
[ ] Click back arrow
[ ] Confirm destination is /
[ ] Confirm it does NOT go to /services
[ ] Confirm it does NOT use router.back()
[ ] Test desktop
[ ] Test mobile
[ ] Test Light Theme
[ ] Test Dark Theme
```

## 61.10 Final navigation rule

The approved service navigation is now:

```text
Homepage
   ↓
Services list
   ↓
Individual service
   ↓
← Home
   ↓
Homepage
```

**Do not interpret "back" as browser history. In this design, the visible back arrow is a deliberate "Return to Home" navigation control.**

------------------------------------------------------------------------

# 62. IMPORTANT — DO NOT REVERT THIS BEHAVIOUR

If an existing service component currently contains:

```text
← Services
```

or:

```javascript
router.back()
```

replace the behaviour with the approved deterministic homepage route.

Do not create duplicate arrows.

Do not add a second back button.

Do not change the service page content or layout unnecessarily.

Use the existing back-arrow visual component if one already exists and only update its:

```text
label
destination
accessible name
```

where possible.

**Single source of truth:**

```text
Service Detail Back Arrow
        ↓
Label: ← Home
Route: /
```
------------------------------------------------------------------------

# 63. HERO ROTATING HEADLINES — TITLE CASE / CAPITALISATION

The rotating hero headline wording must now use **Title Case**.

Every word in each rotating headline should begin with a capital letter.

The current lowercase treatment is not approved.

## 63.1 Approved rotating headlines

Use these exact versions:

```text
Attracting Better Customers.
Building Predictable Demand.
Becoming The Obvious Choice.
Breaking Your Growth Ceiling.
Owning Your Market.
Leaving Average Behind.
```

## 63.2 Capitalisation rule

Every rotating message must follow this pattern:

```text
Word Word Word.
```

Each major word begins with a capital letter.

For example:

```text
Building Predictable Demand.
```

NOT:

```text
Building predictable demand.
```

And:

```text
Attracting Better Customers.
```

NOT:

```text
Attracting better customers.
```

## 63.3 Preserve the existing visual treatment

The rotating headlines must continue to:

- use the approved bright Pecunia green;
- use `var(--green)`;
- use the current large editorial serif typography;
- use the slower/smoother transition specified previously;
- remain responsive;
- remain stable without layout jumping.

Only the **capitalisation/text presentation** is being changed here.

## 63.4 Approved final list

The source of truth for the rotating hero headlines is now:

```text
Attracting Better Customers.
Building Predictable Demand.
Becoming The Obvious Choice.
Breaking Your Growth Ceiling.
Owning Your Market.
Leaving Average Behind.
```

Do not revert these to sentence case.

## 63.5 QA

Agent 4 must verify every rotation:

```text
[ ] Attracting Better Customers.
[ ] Building Predictable Demand.
[ ] Becoming The Obvious Choice.
[ ] Breaking Your Growth Ceiling.
[ ] Owning Your Market.
[ ] Leaving Average Behind.
```

Check that:

```text
[ ] Every word starts with a capital letter
[ ] Period remains at the end
[ ] Green treatment remains intact
[ ] Slower transition remains intact
[ ] No text flash/flicker
[ ] No layout shift
[ ] Mobile uses the same capitalisation
[ ] Dark Theme uses the same capitalisation
```

**Final rule:**

> Every rotating hero headline uses Title Case, with the first letter of
> every word capitalised.
------------------------------------------------------------------------

# 64. HOMEPAGE SECTION SPACING — REDUCE EXCESSIVE VERTICAL GAP

The supplied screenshot shows an excessive amount of empty vertical space between the end of the preceding content:

```text
Make the business
perform better.
```

and the next section:

```text
Our Services — The
Growth Stack
```

The current gap makes the homepage feel unnecessarily stretched and reduces the sense of a polished, intentional layout.

## 64.1 Required change

Reduce the vertical spacing between these sections so the transition feels:

- tighter;
- intentional;
- professional;
- clean;
- editorial;
- easier to scan.

Do **not** remove the whitespace completely.

The Pecunia design should still retain generous whitespace, but it should be **purposeful rather than excessive**.

## 64.2 Visual target

Current:

```text
Previous content
      ↓
      ↓
      ↓
      ↓
      ↓
      ↓
      ↓
Our Services
```

Desired:

```text
Previous content
      ↓
   moderate
   whitespace
      ↓
Our Services
```

The next section should feel like a natural continuation of the page rather than appearing several screens away.

## 64.3 Implementation

Inspect the actual spacing source before changing it.

Check for:

```text
section padding
margin-bottom
margin-top
min-height
height
viewport-height calculations
flex alignment
grid row sizing
animation spacer elements
```

Do not simply reduce random margins until the screenshot looks right.

Identify the component responsible for the excessive gap and make the smallest safe change.

## 64.4 Avoid excessive viewport-based spacing

If the gap is being created by a large:

```css
min-height: 100vh;
```

or excessive viewport-relative padding on the preceding section, assess whether that is causing the unnecessary separation.

Do not remove intentional full-screen hero behaviour elsewhere.

Only adjust the specific section relationship causing the excessive gap.

## 64.5 Preserve hierarchy

The following must remain visually important:

```text
Make the business
perform better.
```

followed by:

```text
Our Services — The Growth Stack
```

The reduction in spacing must not make the two sections visually merge.

Keep a clear but compact section boundary.

## 64.6 Responsive behaviour

The spacing should be responsive.

Check:

```text
1440px
1280px
1024px
768px
600px
390px
```

Do not use one fixed desktop margin that creates an awkward mobile gap.

Mobile should generally use a smaller vertical gap than desktop where appropriate.

## 64.7 QA

Agent 4 must confirm:

```text
[ ] Excessive vertical gap is reduced
[ ] Sections still have clear separation
[ ] Page feels more compact and professional
[ ] No content overlaps
[ ] No layout jump is introduced
[ ] Desktop remains balanced
[ ] Mobile remains balanced
[ ] No unrelated section spacing is changed
```

**Final visual rule:**

> Keep Pecunia's generous editorial whitespace, but remove unnecessary
> vertical dead space. Sections should feel deliberately spaced rather than
> separated by large empty areas.
------------------------------------------------------------------------

# 65. SERVICES HEADING — "THE GROWTH STACK" IN GREEN

The Services heading on the homepage currently reads:

```text
Our Services — The
Growth Stack
```

The phrase:

```text
The Growth Stack
```

must be rendered in the approved Pecunia green:

```css
color: var(--green);
```

where:

```css
--green: #00C978;
```

## 65.1 Keep "Our Services" in the normal heading colour

Only:

```text
The Growth Stack
```

should be green.

Keep:

```text
Our Services —
```

in the normal heading colour appropriate to the active theme.

Visual hierarchy:

```text
Our Services —     ← normal heading colour

The Growth Stack   ← #00C978 GREEN
```

Do not make the entire heading green.

## 65.2 Both Light and Dark Themes

This treatment must be identical in both themes:

```text
LIGHT THEME
Our Services — The
Growth Stack       ← GREEN #00C978

DARK THEME
Our Services — The
Growth Stack       ← GREEN #00C978
```

Do not change the green to the darker ledger green in Dark Theme.

Use the shared:

```css
var(--green)
```

token.

## 65.3 Preserve typography and layout

Do not change:

- heading font;
- heading size;
- line-height;
- wrapping;
- section spacing;
- alignment;
- animation;
- responsive behaviour.

This request is specifically a **colour emphasis change**.

The existing Services heading design should otherwise remain unchanged.

## 65.4 Green semantic purpose

"The Growth Stack" is a core Pecunia commercial/growth phrase and should use the same green language established elsewhere:

```text
Hero rotating statements
Approach key statement
Commitment key statement
Why Pecunia key statement
Disconnected systems.
The Growth Stack
Make The Move →
```

This creates a consistent visual signal for growth, commercial progress and action.

## 65.5 QA

Agent 4 must verify:

```text
[ ] "Our Services —" remains normal heading colour
[ ] "The Growth Stack" is #00C978
[ ] Light Theme displays green correctly
[ ] Dark Theme displays green correctly
[ ] No darker ledger green is substituted
[ ] Heading layout is unchanged
[ ] Mobile displays the same colour treatment
[ ] No hard-coded competing green is introduced
```

**Final rule:**

> In the Services heading, keep "Our Services —" in the normal heading
> colour and make "The Growth Stack" the approved Pecunia green in both
> Light and Dark themes.
------------------------------------------------------------------------

# 66. APPROACH SECTION — REDUCE EXCESSIVE VERTICAL GAP

The supplied screenshot shows another excessive vertical gap immediately before:

```text
The Pecunia Approach
```

There is too much empty space between the preceding content/section divider and the Approach heading.

## Required change

Reduce this vertical spacing so the Approach section begins sooner and the page feels:

- cleaner;
- more professional;
- more cohesive;
- intentionally spaced;
- less vertically stretched.

Do not remove the whitespace entirely. Preserve enough breathing room for the premium/editorial design.

## Important

This is part of the same broader spacing refinement already requested for:

```text
Previous section
        ↓
Our Services — The Growth Stack
```

and now also:

```text
Previous section
        ↓
The Pecunia Approach
```

The overall site should not contain large unexplained areas of empty space between related sections.

## Implementation

Inspect the actual source of the gap before editing.

Check:

```text
section padding-top
section padding-bottom
margin-top
margin-bottom
min-height
height
100vh / viewport-based spacing
flex/grid alignment
large spacer elements
```

Make the smallest targeted change that fixes the excessive gap.

Do not globally reduce every section's spacing.

Do not remove intentional hero/full-screen spacing elsewhere.

## Visual target

Current:

```text
Previous content
────────────────────────


        LARGE GAP



The Pecunia Approach
```

Desired:

```text
Previous content
────────────────────────

     controlled
     whitespace

The Pecunia Approach
```

The divider should remain visible and the Approach heading should have a clear separation from the previous section, but the distance should be substantially tighter.

## Responsive requirement

Review the spacing at:

```text
Desktop
Tablet
Mobile
```

Do not introduce a fixed desktop-only margin.

Mobile should use an appropriately smaller vertical spacing where necessary.

## QA

Agent 4 must verify:

```text
[ ] Excessive gap before "The Pecunia Approach" is reduced
[ ] Heading still has adequate breathing room
[ ] Divider remains correctly positioned
[ ] No content overlap
[ ] No layout shift
[ ] Desktop looks balanced
[ ] Tablet looks balanced
[ ] Mobile looks balanced
[ ] No unrelated section spacing is changed
```

**Final spacing principle:**

> Pecunia should feel spacious, not empty. Keep deliberate editorial
> whitespace, but remove large vertical gaps that do not contribute to
> hierarchy or readability.
------------------------------------------------------------------------

# 67. SERVICES / GROWTH STACK — SCROLL-ACTIVE GREEN HIGHLIGHT

The supplied screen recording shows the Services / Growth Stack list containing the sequential stages:

```text
01 — Diagnose
02 — Strategise
03 — Build
04 — Launch
05 — Optimise
06 — Scale
```

The current list is visually static.

The desired interaction is a **scroll-driven active-step highlight**.

As the visitor scrolls through the list, the service/stage currently being viewed should become the bright Pecunia green.

## 67.1 Core behaviour

The sequence should work like this:

```text
Visitor reaches 01 — Diagnose
        ↓
01 — Diagnose becomes GREEN
        ↓
Visitor continues scrolling
        ↓
01 fades back to normal INK
        ↓
02 — Strategise becomes GREEN
        ↓
Visitor continues scrolling
        ↓
02 fades back to normal INK
        ↓
03 — Build becomes GREEN
        ↓
...and so on
```

Continue the same behaviour through:

```text
04 — Launch
05 — Optimise
06 — Scale
```

The active stage should always be visually obvious.

## 67.2 Initial state

When the Services / Growth Stack section first enters the active viewport:

```text
01 — Diagnose
```

should be the active green item.

The remaining items should use the normal text colour.

Example:

```text
01 — Diagnose       ← GREEN / ACTIVE
02 — Strategise     ← INK
03 — Build          ← INK
04 — Launch         ← INK
05 — Optimise       ← INK
06 — Scale          ← INK
```

## 67.3 As the visitor scrolls

When the visitor progresses to the next stage:

```text
01 — Diagnose       ← fades from GREEN → INK
02 — Strategise     ← fades from INK → GREEN
```

Then:

```text
02 — Strategise     ← fades GREEN → INK
03 — Build          ← fades INK → GREEN
```

Continue through all six stages.

The transition should be smooth rather than an abrupt colour swap.

## 67.4 Animation timing

Use a subtle transition.

Recommended starting point:

```css
transition: color 300ms ease;
```

A range around:

```text
250ms–450ms
```

is acceptable after visual testing.

Do not make the colour transition slow enough to feel disconnected from the visitor's scroll position.

## 67.5 Active colour

The active stage must use the approved Pecunia green:

```css
color: var(--green);
```

with:

```css
--green: #00C978;
```

Do not use the previous green values.

Do not introduce another green specifically for the scroll interaction.

## 67.6 Inactive colour

When a stage is not active, it returns to the normal Light/Dark Theme text colour.

Light Theme:

```text
Active    = #00C978
Inactive  = normal black/ink
```

Dark Theme:

```text
Active    = #00C978
Inactive  = normal light/cream ink
```

Do not leave previously active stages green.

Only the currently active stage should be highlighted.

## 67.7 What should be highlighted

The primary highlighted element is the **stage title**, for example:

```text
01 — Diagnose
02 — Strategise
03 — Build
04 — Launch
05 — Optimise
06 — Scale
```

The supporting description beneath each stage should remain in the normal content colour.

Do NOT turn the entire row green.

Example:

```text
01 — Diagnose                         ← GREEN

We analyse the business, market,
offer, customer journey...           ← NORMAL CONTENT
```

The right-side visual/line indicator may also use the existing approved active-state treatment if already present, but do not introduce unnecessary additional green elements.

## 67.8 Scroll detection

Use the existing section structure wherever possible.

Preferred behaviour:

```text
Scroll position
      ↓
Determine which stage is the active
viewport/focus stage
      ↓
Set activeStage
      ↓
Apply green to that stage
      ↓
All other stages return to normal colour
```

The implementation should be efficient and should not attach an expensive scroll handler that causes unnecessary re-renders.

Prefer an appropriate viewport observation mechanism such as `IntersectionObserver` if compatible with the existing architecture.

If the project already has a scroll-progress/section-observer system, reuse it rather than creating a duplicate mechanism.

## 67.9 Active-stage threshold

The active stage should change based on the visitor's actual reading/viewport position, not merely because the top of the page has crossed a pixel threshold.

A good starting approach is to use a central viewport observation zone.

Conceptually:

```text
┌─────────────────────────────┐
│                             │
│        viewport             │
│                             │
│    ┌───────────────────┐    │
│    │ ACTIVE ZONE       │    │
│    │                   │    │
│    └───────────────────┘    │
│                             │
└─────────────────────────────┘
```

When a stage enters the active zone, it becomes green.

Tune the threshold after testing so the change feels natural while scrolling.

## 67.10 Do not make the page jump

The scroll interaction must not:

- snap the page unexpectedly;
- automatically scroll the visitor;
- change the visitor's scroll position;
- resize the rows;
- move surrounding content.

The user controls the scroll.

The website simply responds visually to the current position.

## 67.11 Preserve the current service-list design

Do not redesign the list.

Keep the existing:

- numbering;
- titles;
- descriptions;
- horizontal dividers;
- right-side indicators;
- typography;
- spacing;
- layout;
- service-page links;
- responsive structure.

This is an **interaction enhancement**, not a structural redesign.

## 67.12 Relationship with service navigation

The existing service navigation remains unchanged.

A visitor can still click a service row/title to open its dedicated service page.

The scroll-active green effect must not interfere with clicking.

Therefore:

```text
Scroll
→ changes visual active state

Click
→ opens the relevant service page
```

Both behaviours must coexist.

## 67.13 Reverse scrolling

The interaction must work in both directions.

Scrolling down:

```text
01 → 02 → 03 → 04 → 05 → 06
```

Scrolling back up:

```text
06 → 05 → 04 → 03 → 02 → 01
```

The green highlight should follow the currently active stage in either direction.

## 67.14 Mobile

Implement the same interaction on mobile.

The active stage should still become:

```text
#00C978
```

as the visitor scrolls.

However, tune the viewport threshold for the smaller screen rather than forcing desktop values onto mobile.

Ensure:

```text
[ ] No flickering
[ ] No rapid active-stage switching
[ ] No accidental page jumps
[ ] Touch scrolling remains native
[ ] Service rows remain clickable
[ ] Text remains readable
```

## 67.15 Reduced motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

- retain the active green state;
- remove/reduce animated colour transitions;
- do not disable the actual content or navigation;
- do not introduce movement solely for this effect.

The functionality remains available; only the transition animation is reduced.

## 67.16 Exact content — preserve wording

Use the existing approved stage wording exactly.

The stage titles are:

```text
01 — Diagnose
02 — Strategise
03 — Build
04 — Launch
05 — Optimise
06 — Scale
```

Do not change the spelling or rename the stages while implementing this interaction.

Do not change the descriptions beneath them unless a separate content change has been approved.

## 67.17 QA — test the complete sequence

Agent 4 must manually scroll through the entire Services / Growth Stack section.

Verify:

```text
[ ] 01 — Diagnose becomes green first
[ ] 01 returns to normal when 02 becomes active
[ ] 02 — Strategise becomes green
[ ] 02 returns to normal when 03 becomes active
[ ] 03 — Build becomes green
[ ] 03 returns to normal when 04 becomes active
[ ] 04 — Launch becomes green
[ ] 04 returns to normal when 05 becomes active
[ ] 05 — Optimise becomes green
[ ] 05 returns to normal when 06 becomes active
[ ] 06 — Scale becomes green
```

Then test upward:

```text
[ ] 06 → 05 works
[ ] 05 → 04 works
[ ] 04 → 03 works
[ ] 03 → 02 works
[ ] 02 → 01 works
```

Also verify:

```text
[ ] Only one stage is green at a time
[ ] Supporting descriptions remain normal colour
[ ] Active colour is #00C978
[ ] No old green value remains
[ ] No flicker
[ ] No layout shift
[ ] No scroll jumping
[ ] Service links still work
[ ] Desktop works
[ ] Tablet works
[ ] Mobile works
[ ] Light Theme works
[ ] Dark Theme works
[ ] Reduced-motion behaviour works
[ ] No performance regression
```

**Final visual rule:**

> The Services / Growth Stack should feel alive as the visitor reads it.
> The stage currently in focus becomes Pecunia green, while the previous
> stage quietly fades back to normal text. The green should travel down the
> six-stage process with the visitor's scroll position, making the section
> feel interactive, intentional and premium without becoming distracting.
------------------------------------------------------------------------

# 68. FOOTER — CLEANER CTA PLACEMENT + THINNER GREEN BOOK-A-CALL BUTTON

The supplied screenshot shows the footer CTA currently positioned below the
Company navigation links and using a relatively large dark rectangular box.

Refine this footer so it feels lighter, cleaner and more premium.

## 68.1 Book A Call placement

The footer currently has:

```text
Company
Services
Approach
About

[ Book A Call ]
```

Move the **Book A Call** CTA so it appears **before the Company navigation
list**, in the middle/primary position of that footer column.

Preferred structure:

```text
Company

[ Book A Call ]

Services
Approach
About
```

The CTA should therefore be encountered before the navigation links when
reading down that column.

Do not move the entire Company column. Only reorder the CTA within the
column.

## 68.2 Make the Book A Call button green

The footer Book A Call button must use the approved Pecunia green:

```css
background: var(--green);
```

with:

```css
--green: #00C978;
```

Text must be pure black:

```css
color: #000000;
```

The arrow/icon, if present, should also use the black/dark CTA text colour.

This treatment applies in BOTH themes:

```text
LIGHT THEME
Green background #00C978
Black text

DARK THEME
Green background #00C978
Black text
```

Do not switch the footer CTA back to a black background in Dark Theme.

## 68.3 Make the button thinner and cleaner

The current CTA box is visually too large/heavy.

Reduce its height and visual weight.

The desired result is a **compact, refined CTA**, not a large block.

Reduce:

- vertical padding;
- unnecessary height;
- excessive visual weight.

Keep enough horizontal padding for comfortable clicking.

The button should feel approximately like:

```text
┌──────────────────────┐
│    Book A Call       │
└──────────────────────┘
```

rather than a tall/heavy rectangular block.

Do not make it so small that it becomes difficult to use on mobile.

## 68.4 Button sizing

Do not hard-code an arbitrary fixed height if the existing design system already
has button sizing tokens.

Prefer the existing button component/token system.

If a dedicated footer CTA style is required, use a compact height/padding
consistent with the rest of the Pecunia interface.

The visual priority should be:

```text
Compact
Clean
Easy to click
Strong green accent
Black text
```

## 68.5 Keep the footer clean

Do not introduce:

- shadows;
- gradients;
- rounded/pill styling;
- excessive borders;
- oversized typography;
- additional decorative elements.

The button should retain the established restrained editorial style.

## 68.6 Footer hierarchy

The intended footer column should read more naturally as:

```text
Company

[ Book A Call ]

Services
Approach
About
```

The CTA should feel like the primary action, while the navigation links remain
secondary.

## 68.7 Responsive/mobile behaviour

Apply the same hierarchy on mobile:

```text
Company
[ Book A Call ]
Services
Approach
About
```

The button must remain:

- visible;
- compact;
- touch accessible;
- full enough in size for comfortable tapping;
- green in both themes;
- black text in both themes.

Do not allow the CTA to overflow the viewport.

## 68.8 Do not change footer content

Do not rewrite:

```text
PE CUNIA / PECUNIA STUDIOS
Strategy. Technology. Acquisition. Growth.
Services
Websites | E-commerce | Paid Media | SEO |
Automation | CRM | AI | Creative | Growth Strategy
Company
Services
Approach
About
Book A Call
```

This request is specifically about:

```text
CTA position
CTA colour
CTA text colour
CTA visual weight
CTA height/padding
```

## 68.9 QA

Agent 4 must verify:

```text
[ ] Book A Call appears before Company navigation links
[ ] CTA is visually centred/positioned correctly within its column
[ ] Button is thinner than the current implementation
[ ] Button feels clean and premium
[ ] Background is #00C978
[ ] Text is pure black
[ ] Light Theme works
[ ] Dark Theme works
[ ] Dark Theme does NOT revert to black CTA
[ ] Button remains easy to click
[ ] Mobile layout works
[ ] No overflow
[ ] No unnecessary shadow/gradient/pill styling
[ ] Existing footer content remains unchanged
```

**Final visual rule:**

> The footer CTA should be a compact green action point rather than a heavy
> black box. Place "Book A Call" before the Company navigation links and use
> the same #00C978 green + black text treatment in both themes.
------------------------------------------------------------------------

# 69. FINAL CTA SECTION — "LET'S BUILD THE SYSTEM TO CAPTURE IT." IN GREEN

In the final CTA section, the current heading reads:

```text
Your business has
potential. Let's build
the system to capture
it.
```

The phrase:

```text
Let's build the system to capture it.
```

must be rendered entirely in the approved Pecunia green:

```css
color: var(--green);
```

with:

```css
--green: #00C978;
```

## 69.1 Keep the opening statement in normal heading colour

The first part remains the normal primary heading colour:

```text
Your business has
potential.
```

Then the complete key statement becomes green:

```text
Let's build
the system to capture
it.
```

Visual hierarchy:

```text
Your business has
potential.                         ← NORMAL INK

Let's build
the system to capture
it.                                ← #00C978 GREEN
```

Do not colour only the words "Let's build".

The entire phrase:

```text
Let's build the system to capture it.
```

must be one consistent green treatment.

## 69.2 Both themes

Apply the same green treatment in:

- Light Theme;
- Dark Theme;
- desktop;
- tablet;
- mobile.

Use the shared:

```css
var(--green)
```

token.

Do not introduce a different green for Dark Theme.

## 69.3 Preserve the existing typography

Do not change:

- font family;
- font size;
- font weight;
- line height;
- responsive wrapping;
- alignment;
- spacing;
- animation.

This is a colour emphasis change only.

## 69.4 Supporting content remains normal

The paragraph beneath the heading:

```text
Tell us where you are, where you want to go and what's currently
standing in the way. We'll identify the opportunities, build the strategy
and show you what it would take to get there.
```

remains the normal content colour.

The CTA:

```text
Start A Growth Project →
```

should retain its separately approved CTA styling.

Do not make the supporting paragraph green simply because the heading contains
a green statement.

## 69.5 Green semantic consistency

This follows the established Pecunia visual language:

```text
Key growth statement     → GREEN
Supporting explanation   → NORMAL TEXT
CTA / action             → GREEN ACCENT
```

The final CTA therefore visually communicates:

```text
Your business has potential.
        ↓
LET'S BUILD THE SYSTEM TO CAPTURE IT.   ← GREEN
        ↓
Supporting explanation
        ↓
Start A Growth Project →
```

## 69.6 QA

Agent 4 must verify:

```text
[ ] "Your business has potential." remains normal heading colour
[ ] "Let's build the system to capture it." is entirely #00C978
[ ] No partial green/black split occurs within the key statement
[ ] Light Theme works
[ ] Dark Theme works
[ ] Mobile works
[ ] Typography/layout remains unchanged
[ ] Supporting paragraph remains normal content colour
[ ] CTA retains its approved styling
[ ] Green uses var(--green)
```

**Final rule:**

> The complete phrase "Let's build the system to capture it." is a key
> Pecunia growth statement and must be entirely green. Do not highlight only
> "Let's build".
------------------------------------------------------------------------

# 70. CONTACT / GROWTH PROJECT FORM — FIELD, CAPITALISATION & CONTACT DETAILS

The supplied contact form screenshot shows the project enquiry form.

The following changes are approved.

## 70.1 Submit button capitalisation

Change:

```text
Submit request
```

to:

```text
Submit Request
```

Both words must begin with a capital letter.

Use the exact wording:

```text
Submit Request
```

Do not change it to:

```text
Submit request
SUBMIT REQUEST
submit request
```

The approved version is:

**Submit Request**

## 70.2 Contact/name/business fields — black text

The entered text and visible field text for the contact information fields must use pure black in Light Theme.

This applies to:

```text
Name
Business Name
Mobile Number
```

Use the established content text token where appropriate, with the Light Theme resolving to:

```css
#000000
```

The field labels should also remain clean and highly readable.

Do not use the muted brown/grey treatment currently visible in the screenshot for these important contact fields.

### Light Theme

```text
Labels       → #000000
Entered text → #000000
```

### Dark Theme

Use the appropriate high-contrast light text colour for the active dark theme.

Do not put pure black text on the dark background.

## 70.3 Add Mobile Number field

Add a dedicated field for the user's mobile/contact number.

Preferred placement:

```text
Name
[____________________________]

Business Name
[____________________________]

Mobile Number
[____________________________]

Service Needed
[ Select a service ]

Project Details
[____________________________]
```

Use an appropriate semantic input:

```html
<input type="tel">
```

The field should support UK phone numbers and international formats without
unnecessarily restricting valid input.

Suggested label:

```text
Mobile Number
```

Do not force a specific formatting pattern that would reject legitimate
international numbers.

Add appropriate accessibility:

```text
label → input association
autocomplete="tel"
inputmode="tel"
```

where appropriate.

## 70.4 Add Social Media / Website Links field

Add a field where the prospective client can provide relevant social media
profiles or online links.

The purpose is to allow Pecunia to understand the existing digital presence
of the business.

Preferred label:

```text
Social Media / Website Links
```

Suggested placeholder:

```text
Add your website, Instagram, LinkedIn or other relevant links
```

This should allow multiple links.

### Recommended presentation

Use a larger text area:

```text
Social Media / Website Links

[ https://...
  https://...
  https://... ]
```

or an appropriate repeatable link-input interface if the existing form
architecture supports it.

Do not make the interface unnecessarily complicated.

A simple multiline field is acceptable and preferred if the current form is
minimal/editorial.

## 70.5 Recommended complete form order

The form should now follow this order:

```text
Name
[____________________________]

Business Name
[____________________________]

Mobile Number
[____________________________]

Service Needed
[ Select a service ]

Project Details
[ What are you trying to achieve? ]

Social Media / Website Links
[ Add your website, Instagram, LinkedIn or other relevant links ]

[ Submit Request ]
```

If the current form contains an email field elsewhere in the existing
implementation, preserve it and position it logically with the contact
information rather than removing it.

Do not remove any existing required field unless separately approved.

## 70.6 Social links should not be required

The Social Media / Website Links field should be optional.

A prospective client may not have:

- a website;
- Instagram;
- LinkedIn;
- another social profile.

Do not block form submission when the field is empty.

## 70.7 Mobile number validation

The Mobile Number field should be handled as contact information rather than
a rigid numeric-only field.

Do not use:

```html
type="number"
```

because phone numbers can contain:

```text
+
spaces
parentheses
hyphens
```

Use:

```html
type="tel"
```

and sensible validation.

## 70.8 Form styling

Preserve the current clean form design.

Do not introduce:

- unnecessary cards;
- gradients;
- excessive shadows;
- rounded SaaS-style controls;
- decorative icons everywhere.

Keep:

```text
White Light Theme background
Clean borders
Pure black contact text
Bright green primary CTA
Editorial typography
Generous but controlled spacing
```

The form should remain consistent with the wider Pecunia design system.

## 70.9 Submit Request CTA

The button:

```text
Submit Request
```

should follow the established primary CTA treatment:

```css
background: var(--green);
color: #000000;
```

with:

```css
--green: #00C978;
```

This should apply in both Light and Dark themes.

Do not revert the button to the old black background.

## 70.10 Accessibility

Ensure:

```text
[ ] Every field has a visible label
[ ] Labels are associated with their inputs
[ ] Mobile Number uses type="tel"
[ ] Mobile Number supports autocomplete="tel"
[ ] Social links field is keyboard accessible
[ ] Form can be completed without a mouse
[ ] Focus states remain clearly visible
[ ] Error messages are understandable
[ ] Required fields are clearly identified
[ ] Optional social links are clearly optional
```

## 70.11 Do not change approved form copy unnecessarily

The existing form wording should remain unless specifically changed above.

The approved new wording is:

```text
Mobile Number

Social Media / Website Links

Submit Request
```

The existing:

```text
Name
Business Name
Service Needed
Project Details
```

should remain.

## 70.12 QA

Agent 4 must verify:

```text
[ ] Submit Request uses Title Case
[ ] Name field text is black in Light Theme
[ ] Business Name field text is black in Light Theme
[ ] Mobile Number field exists
[ ] Mobile Number accepts valid UK/international formats
[ ] Social Media / Website Links field exists
[ ] Social Media / Website Links is optional
[ ] Existing service selection still works
[ ] Project Details still works
[ ] Form submission still works
[ ] Submit Request is #00C978
[ ] Submit Request text is black
[ ] Dark Theme remains readable
[ ] Mobile layout works
[ ] No horizontal overflow
[ ] No existing fields were accidentally removed
```

**Final form rule:**

> Make the contact form clearer and more useful without making it
> complicated: black contact-field text, a dedicated Mobile Number field,
> an optional Social Media / Website Links field, and the correctly
> capitalised green "Submit Request" CTA.
------------------------------------------------------------------------

# 71. HOMEPAGE HEADER + HERO CLEANUP — BOOK A CALL, BRAND LABEL & THEME TOGGLE

The supplied homepage screenshot identifies three final visual refinements.

## 71.1 Header "Book A Call" must be green

The header CTA currently appears as a dark/black button.

Change it to the approved Pecunia green:

```css
background: var(--green);
color: #000000;
```

with:

```css
--green: #00C978;
```

The exact CTA wording remains:

```text
Book A Call
```

Apply this in both:

```text
Light Theme
Dark Theme
```

Do not make the button black in Dark Theme.

Keep the existing button shape, sizing and positioning unless another approved
specification changes them.

## 71.2 Remove "Pecunia Studios" above the hero headline

The homepage currently shows:

```text
Pecunia Studios

You're one move away from...
```

Remove the standalone:

```text
Pecunia Studios
```

from this position.

The hero should begin with:

```text
You're one move away from...
```

followed by the rotating headline.

Do NOT remove the Pecunia Studios logo/brand from the global navigation/header.

This instruction only removes the duplicated text label appearing immediately
above the hero eyebrow/headline.

After removal, rebalance the hero spacing so there is no unnecessary empty gap
where the text used to be.

## 71.3 Theme toggle — Light Theme state

When the website is currently in Light Theme, the toggle displays:

```text
☼ DARK
```

or the equivalent existing icon +:

```text
DARK
```

The **toggle itself and the "DARK" label must be black/ink**.

In Light Theme:

```text
Toggle border      → black/approved ink
Toggle icon        → black/approved ink
"DARK" text        → black/approved ink
Toggle background  → clean white/light theme background
```

Do not use muted brown/grey for the active control.

## 71.4 Theme toggle — Dark Theme state

When the website is currently in Dark Theme, the toggle displays:

```text
☼ LIGHT
```

or the equivalent existing icon +:

```text
LIGHT
```

The **toggle itself and the "LIGHT" label must use the appropriate light/white
theme colour** so that it is clearly visible against the dark background.

In Dark Theme:

```text
Toggle border      → light/white theme colour
Toggle icon        → light/white theme colour
"LIGHT" text       → light/white theme colour
Toggle background  → existing dark theme background
```

The control should visually invert with the active theme.

## 71.5 Theme toggle principle

The button label indicates the **theme the visitor can switch to**.

Therefore:

```text
Current Theme = LIGHT
Button says   = DARK
Button colour = BLACK / INK

Current Theme = DARK
Button says   = LIGHT
Button colour = LIGHT / WHITE
```

Do not interpret the label as the current theme.

## 71.6 Preserve the existing theme functionality

Do not change:

- theme persistence;
- local storage/cookie behaviour;
- system theme handling unless already specified elsewhere;
- theme transition;
- mobile theme availability.

This is a visual refinement of the existing toggle.

The toggle must continue to actually switch themes when clicked/tapped.

## 71.7 Responsive/mobile behaviour

The same rules apply on mobile.

The theme toggle must remain:

- visible;
- readable;
- tappable;
- correctly coloured for the current theme;
- consistent with desktop.

The green Book A Call CTA must also remain visible and usable on mobile.

## 71.8 QA

Agent 4 must verify:

```text
[ ] Header Book A Call is #00C978 in Light Theme
[ ] Header Book A Call is #00C978 in Dark Theme
[ ] Header Book A Call text is black
[ ] Standalone "Pecunia Studios" above hero is removed
[ ] Header/logo Pecunia Studios remains
[ ] Hero starts cleanly with "You're one move away from..."
[ ] Light Theme toggle says DARK
[ ] Light Theme toggle/icon/text are black/ink
[ ] Dark Theme toggle says LIGHT
[ ] Dark Theme toggle/icon/text are light/white
[ ] Theme toggle still switches themes
[ ] Mobile theme toggle works
[ ] Mobile Book A Call works
[ ] No unnecessary spacing remains after removing the hero label
```

**Final visual target:**

```text
HEADER

PECUNIA·STUDIOS                         Services  Approach  About
                                      [ DARK ] [ Book A Call ]
                                              GREEN

HERO

You're one move away from...

Attracting Better Customers.
```

The hero should feel cleaner by removing the duplicated "Pecunia Studios"
label, while the green CTA and theme-toggle contrast make the navigation more
visually intentional.

------------------------------------------------------------------------

# 72. HERO ROTATING TEXT — REPLACE WITH NEW ORDERED MESSAGES

The rotating hero text shown beneath:

```text
You're one move away from...
```

must be replaced with the new five-message sequence shown in the supplied
reference image.

The numbers in the reference image indicate the **exact rotation order**.

## 72.1 Exact approved sequence

### 1 — First

```text
Turning Your Ambition Into Income.
```

### 2 — Second

```text
Being A Brand People Want To Buy From.
```

### 3 — Third

```text
Creating Financial Freedom.
```

### 4 — Fourth

```text
Building A 7-Figure Business.
```

### 5 — Fifth

```text
Making Your Business Work For You.
```

After message 5, the rotation should loop back to message 1.

Therefore the exact sequence is:

```text
Turning Your Ambition Into Income.
        ↓
Being A Brand People Want To Buy From.
        ↓
Creating Financial Freedom.
        ↓
Building A 7-Figure Business.
        ↓
Making Your Business Work For You.
        ↓
Turning Your Ambition Into Income.
```

## 72.2 Remove the previous rotating messages

The previous hero rotation list should no longer be used.

Remove/replace the previous messages:

```text
Attracting Better Customers.
Building Predictable Demand.
Becoming The Obvious Choice.
Breaking Your Growth Ceiling.
Owning Your Market.
Leaving Average Behind.
```

The new five-message list above is now the source of truth.

## 72.3 Capitalisation

Keep the approved Title Case treatment.

Every major word begins with a capital letter.

For example:

```text
Building A 7-Figure Business.
```

not:

```text
Building a 7-figure business.
```

And:

```text
Turning Your Ambition Into Income.
```

not:

```text
Turning your ambition into income.
```

Use the exact wording and capitalisation shown in the approved list.

## 72.4 Green treatment

All five rotating hero messages remain the approved Pecunia green:

```css
color: var(--green);
```

with:

```css
--green: #00C978;
```

The green treatment applies consistently in:

- Light Theme;
- Dark Theme;
- desktop;
- tablet;
- mobile.

## 72.5 Existing smooth rotation

Keep the previously approved slower/smoother transition behaviour.

The text should:

```text
Current message
      ↓
smoothly fades/slides away
      ↓
short controlled transition
      ↓
next message appears
```

Do not make the change feel instant or abrupt.

Do not introduce a large animation that distracts from the headline.

## 72.6 No numbers in the live website text

The numbers in the supplied reference image:

```text
1
2
3
4
5
```

are instructions indicating the order.

They must **NOT** appear in the actual rotating hero headline.

Correct:

```text
Building A 7-Figure Business.
```

Incorrect:

```text
4 Building A 7-Figure Business.
```

## 72.7 Preserve the hero structure

Keep the existing hero structure:

```text
You're one move away from...

[ROTATING GREEN MESSAGE]
```

Do not add the sequence numbers to the page.

Do not change the surrounding hero copy as part of this request.

## 72.8 QA

Agent 4 must verify the complete sequence:

```text
[ ] 1. Turning Your Ambition Into Income.
[ ] 2. Being A Brand People Want To Buy From.
[ ] 3. Creating Financial Freedom.
[ ] 4. Building A 7-Figure Business.
[ ] 5. Making Your Business Work For You.
[ ] Returns to 1 after 5
```

Also verify:

```text
[ ] No old rotating messages remain
[ ] No numbers appear in the live headlines
[ ] Every word uses the approved capitalisation
[ ] All five messages are green
[ ] #00C978 / var(--green) is used
[ ] Existing slower transition remains
[ ] No abrupt text flash
[ ] No layout jumping
[ ] Desktop works
[ ] Mobile works
[ ] Light Theme works
[ ] Dark Theme works
```

**Final source of truth:**

```text
You're one move away from...

Turning Your Ambition Into Income.
Being A Brand People Want To Buy From.
Creating Financial Freedom.
Building A 7-Figure Business.
Making Your Business Work For You.
```

The numbers shown in the supplied reference image define the order only and
must not be rendered as part of the website text.

------------------------------------------------------------------------

# 73. WHY PECUNIA SECTION — MAKE THE PECUNIA VISUAL BOXES PERMANENTLY VISIBLE

The supplied screenshot shows the **Why Pecunia?** section where a visual
element/box appears to be controlled by an animation, scroll trigger or
automated sequence.

At the moment, the expected visual content is not reliably appearing. The
screenshot instead shows a large amount of empty space with a single:

```text
PECUNIA
```

box appearing in the middle.

The requirement is to make these intended visual boxes **permanently rendered
and visible** rather than depending on animation, timing, scroll position or
another client-side trigger.

## 73.1 Permanent display

Any visual box/card in this section that is intended to display the:

```text
PECUNIA
```

brand treatment must be present in the page DOM and visible without requiring:

- scrolling to a particular point;
- waiting for an animation;
- a timer;
- an automated sequence;
- hover;
- mouse movement;
- interaction;
- IntersectionObserver activation;
- JavaScript animation state.

The visitor should see the intended boxes immediately when the section loads.

## 73.2 Green PECUNIA treatment

The visible PECUNIA boxes should use the approved Pecunia green visual
treatment.

Primary green:

```css
--green: #00C978;
```

Use the existing design-system treatment where possible rather than creating a
new colour token.

The word:

```text
PECUNIA
```

should remain clearly readable with the appropriate contrasting text colour.

For the Light Theme, use the approved vibrant green treatment against the
white background.

For the Dark Theme, use the same approved green accent while maintaining
sufficient contrast.

## 73.3 Remove dependency on broken animation

If the current implementation has something similar to:

```text
animated=true
isVisible=false
activeIndex
setTimeout
setInterval
IntersectionObserver
scroll-triggered reveal
animation state
```

controlling whether the visual box exists, do not allow that mechanism to
prevent the intended visual from rendering.

The visual should have a reliable static baseline.

Animation may be retained only as an optional enhancement **after the content
is already visible**, but it must never determine whether the content exists.

If the current animation is unreliable or unnecessary, simplify/remove that
animation and keep the visual permanently displayed.

## 73.4 Do not leave a large empty area

The current screenshot has excessive empty space around the single visible
box.

Once the PECUNIA visual elements are made permanent, adjust the surrounding
layout only as necessary so that the section feels intentional.

Do not preserve a large blank animation stage simply because the old animation
expected content to appear there.

The visual should feel like an intentional part of:

```text
Why Pecunia?

Because You Don't Need Another Marketing Supplier.

You Need A Team Capable Of Seeing The Entire Growth System.

[ PECUNIA visual treatment ]
```

## 73.5 Do not change the Why Pecunia copy

Preserve the approved text:

```text
Why Pecunia?

Because You Don't Need Another Marketing Supplier.

You Need A Team Capable Of Seeing The Entire Growth System.
```

The existing approved green emphasis on:

```text
Because You Don't Need Another Marketing Supplier.
```

must remain.

This change concerns the visual boxes/display mechanism only.

## 73.6 Desktop and mobile

The PECUNIA visual treatment must be reliably visible on:

```text
Desktop
Tablet
Mobile
```

Do not create a desktop-only implementation.

On mobile, the boxes must fit naturally within the available width without:

- horizontal overflow;
- clipping;
- overlapping text;
- disappearing;
- requiring interaction to appear.

## 73.7 Light and Dark Themes

The visual must remain permanently visible when switching between:

```text
Light Theme
Dark Theme
```

Verify the green treatment after switching themes.

Do not allow the theme switch to reset the visual into an invisible/animated
initial state.

## 73.8 Preserve existing functionality elsewhere

This change is local to the Why Pecunia visual treatment.

Do not disable:

- the hero headline rotation;
- the Services scroll-active highlighting;
- theme switching;
- service navigation;
- other approved animations.

Only remove/fix the animation dependency that is preventing the intended
PECUNIA visual boxes from reliably displaying in this section.

## 73.9 Implementation principle

Use a simple and robust baseline:

```text
Component renders
      ↓
PECUNIA visual boxes exist immediately
      ↓
They remain visible
      ↓
No animation is required for visibility
```

If an enhancement animation is retained:

```text
Component renders
      ↓
PECUNIA visual boxes are already present
      ↓
Optional subtle enhancement animation
```

Never:

```text
Component renders
      ↓
Wait for animation/scroll trigger
      ↓
Maybe render PECUNIA
```

## 73.10 QA

Agent 4 must verify:

```text
[ ] PECUNIA visual boxes are visible immediately
[ ] They remain permanently displayed
[ ] No scroll is required
[ ] No timer is required
[ ] No hover is required
[ ] No click is required
[ ] No animation state can hide them
[ ] Green treatment uses the approved Pecunia green
[ ] Light Theme works
[ ] Dark Theme works
[ ] Desktop works
[ ] Tablet works
[ ] Mobile works
[ ] No excessive empty animation space remains
[ ] Why Pecunia copy remains unchanged
[ ] Existing Why Pecunia green statement remains green
[ ] No unrelated animations are disabled
```

**Final rule:**

> The PECUNIA visual boxes in the Why Pecunia section are content, not
> optional animation. They must be permanently rendered and visible. Any
> animation or scroll-triggered behaviour must never cause them to disappear
> or fail to load.

------------------------------------------------------------------------

# 74. SERVICE DETAIL → HOMEPAGE RETURN — LAND AT SERVICES SECTION

The supplied screen recording and screenshot show the intended navigation flow
when a visitor starts on the homepage, scrolls down to the Services list, opens
one of the services, reads the dedicated service page, and then chooses to
return to the homepage.

## 74.1 Required return destination

When a visitor is on **any individual service detail page** and clicks the
page's Home/back-to-home control, the site must return them to the **homepage
Services section**, not the top of the homepage.

Required destination:

```text
Homepage → Services section
```

Not:

```text
Homepage → top / landing hero
```

The visitor should immediately see the Services list in the same general area
shown in the supplied screenshot.

## 74.2 Apply to every service detail page

This behaviour must be consistent for **every single service** opened from the
homepage Services list.

Do not implement the behaviour for only one service.

Every individual service route must use the same return destination:

```text
/service/[service]
        ↓ Home / Back control
/
        ↓
#services
```

Use the project's existing routing architecture and existing Services section
ID/anchor if one already exists. Do not invent a duplicate routing system if a
working one is already present.

## 74.3 Smooth but immediate positioning

When returning to the homepage, the browser must land at the Services section
immediately and reliably.

Do not require the visitor to:

- scroll manually;
- press another button;
- wait for an animation;
- return to the top and then find Services.

A brief browser-native/smooth scroll is acceptable if it does not delay the
visitor or create a confusing visual transition. The final resting position
must clearly show the Services section.

## 74.4 Preserve the homepage state

Returning from a service detail page should not unnecessarily reset the
homepage or send the visitor to the hero.

The intended experience is:

```text
Homepage
   ↓
Scroll to Services
   ↓
Click service
   ↓
Read service detail page
   ↓
Click Home / back-to-home
   ↓
Homepage Services section
```

This makes it easy for the visitor to continue reviewing the remaining
services.

## 74.5 Do not change service content

This navigation fix must not change:

- service names;
- service descriptions;
- service detail-page content;
- service ordering;
- service styling;
- service arrows;
- approved green treatments;
- service-page layouts.

Only fix the return destination/scroll position.

## 74.6 Home/back control

Every service detail page should retain the approved back/home arrow control.

The control must clearly communicate that it returns to the homepage.

When activated, its destination must be the homepage Services anchor.

If the existing implementation uses a text label plus arrow, preserve the
existing approved visual design and only correct its destination.

## 74.7 Direct service URL behaviour

If a visitor enters a service detail URL directly rather than arriving from
the homepage, the Home/back-to-home control should still take them to:

```text
Homepage → Services section
```

Do not depend on browser history being available for this behaviour.

## 74.8 Browser history

Do not break normal browser history behaviour.

The explicit **Home/back-to-home control** has a deterministic destination:

```text
/
```

with the Services section anchor/hash as required by the existing application.

Do not replace the browser's native Back button behaviour with custom logic.

## 74.9 Mobile and desktop

The same destination must work on:

```text
Desktop
Tablet
Mobile
```

The final scroll position must place the Services section in a useful viewport
position on each screen size, accounting for the site's fixed/sticky header if
one exists.

Do not allow the header to obscure the Services heading/list after navigation.

## 74.10 QA — test every service

Agent 4 must test **every service detail page**, not just the first service.

For each service:

```text
[ ] Open service from homepage Services list
[ ] Service detail page loads correctly
[ ] Home/back-to-home control is visible
[ ] Click Home/back-to-home
[ ] Homepage loads
[ ] Page lands at Services section
[ ] Page does NOT land at hero/top of homepage
[ ] Services heading/list is visible
[ ] Visitor can immediately choose another service
```

Also verify:

```text
[ ] Works from direct service URLs
[ ] Works on desktop
[ ] Works on tablet
[ ] Works on mobile
[ ] No manual scrolling required
[ ] No extra click required
[ ] No broken hash/anchor URL
[ ] Sticky header does not cover the Services section
[ ] Existing service-page content is unchanged
[ ] Existing homepage hero is unchanged
```

## 74.11 Important implementation rule

The requirement is **not** simply "go home".

It is:

> **Go home and land the visitor at the Services section so they can continue
> browsing the service list.**

The final URL may use the existing project's preferred anchor/hash mechanism,
for example:

```text
/#services
```

provided that the actual rendered position reliably lands on the Services
section.
------------------------------------------------------------------------

# 75. ABOUT US — RESTORE SHORT HOMEPAGE SECTION + SEPARATE FULL ABOUT PAGE

Restore an **About Us** section to the homepage.

The section must sit **between "The Pecunia Approach" and "Our Commitment"**.

This is a deliberate return of the About content to the landing page, but the
homepage version must remain short and clean.

The full About information should live on a separate dedicated About page.

## 75.1 Homepage section position

The homepage order around this area must be:

```text
The Pecunia Approach
        ↓
About Us
        ↓
Our Commitment
```

Do not place About elsewhere in the page.

Do not duplicate the full About page content onto the homepage.

## 75.2 Short homepage About Us content

Use the approved source content and keep the homepage version concise.

Heading:

```text
About Pecunia Studios
```

Supporting eyebrow/context:

```text
Built in 2026. Built for what's next.
```

Short supporting copy:

```text
Pecunia Studios was founded in 2026 by a marketing specialist and an AI
specialist with a shared belief: modern businesses shouldn't have to choose
between great marketing and great technology.

The agency was built to bring both together.
```

This is intentionally a short introduction.

Do not add the longer About-page paragraphs to the homepage section.

The approved source describes Pecunia as bringing marketing and technology
together, with the wider About copy explaining that marketing creates demand,
technology creates leverage, data creates clarity and automation creates
capacity. fileciteturn2file0L1-L8

## 75.3 About Us CTA / link

The homepage About section must contain a clear clickable action:

```text
About Us →
```

or, if the existing design system uses the arrow as a separate visual:

```text
About Us
→
```

The whole text/button area should be clickable.

Clicking it must open the **dedicated About page**.

Do not use an accordion or expandable block for this.

Do not reveal the full About content inline.

## 75.4 Dedicated About page

Create/use a dedicated route for the About page.

Preferred route:

```text
/about
```

The page should contain the full approved About content from the website
content source.

The approved full About content begins with:

```text
About Pecunia Studios

Built in 2026. Built for what's next.

Pecunia Studios was founded in 2026 by a marketing specialist and an AI
specialist with a shared belief: modern businesses shouldn't have to choose
between great marketing and great technology.

The agency was built to bring both together.

Marketing creates demand. Technology creates leverage. Data creates clarity.
Automation creates capacity. Our job is to connect them.

Today, Pecunia Studios works with ambitious businesses to build stronger
digital ecosystems, acquire better customers and create systems capable of
scaling with them.

We're not interested in being another name on your supplier list. We're here
to build what's next.
```

This full About content is supported by the approved website content document.
fileciteturn2file0L1-L8

Do not invent additional company history, claims, statistics, testimonials or
founder information.

## 75.5 About page visual structure

The dedicated page should follow the existing Pecunia site design language.

Suggested structure:

```text
[ ← Home ]

About Pecunia Studios

Built in 2026. Built for what's next.

[Full approved About copy]

[optional approved closing line]
We're here to build what's next.
```

Keep the page editorial, spacious and clean.

Do not introduce an unrelated page design.

## 75.6 Home/back button on About page

The About page must have a clear:

```text
← Home
```

or equivalent home/back control.

This control must **not merely route to `/` and leave the visitor at the top**.

It must return the visitor to the homepage **at the About Us section**.

Required behaviour:

```text
Homepage
   ↓
About Us section
   ↓
Click "About Us →"
   ↓
/about
   ↓
Read About page
   ↓
Click "← Home"
   ↓
Homepage
   ↓
Automatically positioned at About Us section
```

The visitor should land directly on the About section.

They must not need to scroll manually.

## 75.7 Anchor/return-state implementation

Use a stable About section anchor, for example:

```html
<section id="about">
```

The Home control on `/about` should return using the About anchor/state, e.g.:

```text
/#about
```

or an equivalent implementation that reliably restores the About section.

The final implementation must account for the sticky header so the heading is
not hidden underneath the navigation.

If the site uses client-side routing, implement the equivalent reliable
scroll restoration rather than relying on browser history alone.

## 75.8 Direct navigation

If a visitor directly opens:

```text
/about
```

the page must load normally.

The Home control must still return them to:

```text
Homepage → About section
```

Do not assume they arrived from the homepage.

## 75.9 Browser history

Do not create unnecessary duplicate history entries when implementing the
About return behaviour.

Normal navigation should remain intuitive:

```text
Homepage → About
```

and the dedicated Home control should intentionally return to:

```text
Homepage #about
```

The Home control is a purposeful site-navigation action, not simply an
uncontrolled `history.back()` action.

## 75.10 Theme support

The About homepage section and dedicated About page must work in:

```text
Light Theme
Dark Theme
```

Maintain the established Pecunia colour rules:

- clean white Light Theme background;
- approved dark background in Dark Theme;
- approved green `#00C978` for accent/emphasis;
- appropriate high-contrast text in each theme.

Do not introduce a separate About-page colour palette.

## 75.11 Responsive behaviour

The homepage About section and dedicated About page must work correctly on:

```text
Desktop
Tablet
Mobile
```

On mobile:

- About Us remains easy to find;
- About Us CTA is comfortably tappable;
- About page content does not overflow;
- Home control is clearly visible;
- returning to `/#about` positions the section correctly beneath the header.

## 75.12 Do not alter surrounding sections

This change should not rewrite or reorder any other homepage section.

The required order is specifically:

```text
The Pecunia Approach
About Us
Our Commitment
```

Preserve the existing approved Approach and Commitment content.

The approved website content confirms the existing Approach section and the
following Commitment section, so About should be inserted between them rather
than replacing either. fileciteturn2file1L1-L20

## 75.13 Navigation consistency

The existing global:

```text
About
```

navigation link should open the same dedicated:

```text
/about
```

page.

Do not create two different About destinations.

Both:

```text
Header → About
Homepage About Us → About Us →
```

must resolve to the same dedicated About page.

## 75.14 QA

Agent 4 must verify:

```text
[ ] About Us section exists on homepage
[ ] It appears between Pecunia Approach and Our Commitment
[ ] Homepage About content is short
[ ] About Us CTA is clearly clickable
[ ] About Us opens /about
[ ] Header About opens the same /about page
[ ] Dedicated About page contains the full approved About copy
[ ] No invented About content has been added
[ ] Dedicated About page has a Home/back control
[ ] Home/back returns to homepage
[ ] Home/back lands at #about, not the top of homepage
[ ] About heading is not hidden behind sticky header
[ ] Direct /about navigation works
[ ] Light Theme works
[ ] Dark Theme works
[ ] Desktop works
[ ] Tablet works
[ ] Mobile works
[ ] No horizontal overflow
[ ] Approach remains before About
[ ] Commitment remains after About
[ ] No unrelated sections/routes are changed
```

**Final information architecture:**

```text
HOME
├── Hero
├── Growth Philosophy
├── Services
├── Pecunia Approach
├── About Us (short)
│     └── About Us → /about
├── Our Commitment
├── Why Pecunia
├── Final CTA
└── Footer

ABOUT
├── ← Home
├── About Pecunia Studios
├── Full approved About content
└── Home → /#about
```

**Final rule:**

> About Us is both a short homepage introduction and a dedicated full page.
> The homepage version creates context without taking excessive space; the
> dedicated page contains the full approved About content. Every route back
> from the About page must return the visitor directly to the About section
> of the homepage, not the top of the landing page.
------------------------------------------------------------------------

# 76. COMMITMENT SECTION — COPY THE HERO GREEN TEXT MOTION TO THE 01–10 LIST

The supplied screen recording shows the existing hero headline animation:
the active headline transitions smoothly into the approved Pecunia green.

Apply the **same visual motion language** to the numbered list inside the
**Our Commitment** section.

This is a direct reuse of the existing successful hero interaction — do not
invent a different animation.

## 76.1 Target section

The target is the numbered Commitment list beneath:

```text
Our Commitment

We Don't Promise Magic. We Build
Accountability Into The System.

Marketing isn't a vending machine...
```

The list currently contains ten commitment items:

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

These existing words/content must remain unchanged.

## 76.2 Required interaction

As the visitor scrolls through the Commitment section, each numbered item
should receive the same type of **green emphasis / flowing transition** used
by the hero headline.

The active item should transition into the approved Pecunia green.

Conceptually:

```text
01 — Clear commercial objectives      GREEN
02 — Defined KPIs                     normal
03 — Transparent reporting            normal
04 — Continuous testing               normal
...
```

As the visitor continues scrolling:

```text
01 — Clear commercial objectives      normal
02 — Defined KPIs                     GREEN
03 — Transparent reporting            normal
04 — Continuous testing               normal
...
```

Then:

```text
01 — Clear commercial objectives      normal
02 — Defined KPIs                     normal
03 — Transparent reporting            GREEN
04 — Continuous testing               normal
...
```

Continue this progression through:

```text
04
05
06
07
08
09
10
```

The final item:

```text
10 — Continuous optimisation
```

must receive the same green emphasis when it becomes the active item.

## 76.3 Copy the existing hero motion

The important requirement is **not simply "make the text green"**.

The transition should visually feel related to the existing hero headline
animation already present on the site.

Reuse the existing animation mechanism, timing and easing where technically
appropriate.

The desired visual language is:

```text
normal text
    ↓
active item enters/emerges into green
    ↓
holds green while active
    ↓
loses active emphasis as the next item becomes active
```

The change should feel smooth and intentional rather than like an abrupt
colour switch.

Do not create a completely new animation system if the existing hero
animation can be reused.

## 76.4 One active item at a time

Normally there should be one clearly active Commitment item at a time.

Example:

```text
01 GREEN
02 normal
03 normal
04 normal
05 normal
06 normal
07 normal
08 normal
09 normal
10 normal
```

Then:

```text
01 normal
02 GREEN
03 normal
04 normal
05 normal
06 normal
07 normal
08 normal
09 normal
10 normal
```

Avoid multiple items becoming green simultaneously unless the existing hero
animation architecture inherently requires a very brief overlap during the
transition.

## 76.5 Scroll-driven activation

Activation should be tied to the visitor's position in the Commitment section.

Use a robust viewport/scroll observation approach rather than an uncontrolled
continuous scroll handler where possible.

The active item should change naturally as the visitor progresses through the
list.

It must work when scrolling:

```text
DOWN
```

and:

```text
UP
```

If the visitor scrolls backwards, the previous item should become active again.

## 76.6 Do not alter the content

Do NOT rewrite the Commitment list.

Keep the exact existing wording:

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

This change is an interaction/visual enhancement only.

## 76.7 Green colour

Use the established Pecunia green:

```css
var(--green)
```

with the approved base value:

```css
#00C978
```

Do not create another green token.

The active Commitment item should use the same green identity as the hero
headline.

## 76.8 Light and Dark Theme

The active state must work in both themes.

### Light Theme

```text
Inactive → normal dark/black text
Active   → #00C978
```

### Dark Theme

```text
Inactive → appropriate light theme text
Active   → #00C978
```

Do not change the green to a different brand colour simply because the theme
changes.

## 76.9 Mobile behaviour

The interaction must work on mobile as well as desktop.

On mobile:

- each item can become active as the user scrolls;
- green emphasis remains visible;
- the transition does not cause layout jumps;
- text does not overflow;
- the list remains readable;
- the active state is not dependent on hover.

Do not use hover as the primary activation mechanism.

## 76.10 Accessibility / reduced motion

Respect the user's reduced-motion preference.

If:

```css
prefers-reduced-motion: reduce
```

is active, the visual should remain functional while reducing/removing the
movement component of the transition.

The active colour state should still communicate which item is active.

## 76.11 Preserve existing hero animation

Do not break, replace or slow down the existing hero headline rotation as part
of this change.

The hero animation remains the reference interaction.

The Commitment list should **borrow/reuse its visual motion language**.

## 76.12 Avoid layout movement

Changing an item to green must not:

- change its font size;
- change its font weight in a way that changes layout;
- change line height;
- change margins;
- change row height;
- move neighbouring items.

The transition should happen within the existing layout footprint.

## 76.13 Suggested implementation approach

Prefer reusing the existing hero animation utilities/classes/tokens where
possible.

Conceptually:

```text
Existing Hero Animation
        ↓
Reuse motion/easing/transition pattern
        ↓
Commitment active-state component
        ↓
Intersection/viewport detection
        ↓
01 → 02 → 03 → ... → 10
```

Do not duplicate a large amount of animation code if a reusable existing
component can be extracted safely.

## 76.14 QA

Agent 4 must verify every item individually:

```text
[ ] 01 becomes green
[ ] 02 becomes green
[ ] 03 becomes green
[ ] 04 becomes green
[ ] 05 becomes green
[ ] 06 becomes green
[ ] 07 becomes green
[ ] 08 becomes green
[ ] 09 becomes green
[ ] 10 becomes green
```

Also verify:

```text
[ ] Active state follows scrolling
[ ] Works scrolling down
[ ] Works scrolling up
[ ] Smooth transition matches hero visual language
[ ] Green is #00C978 / var(--green)
[ ] Inactive text remains normal
[ ] Only one item is normally active
[ ] No layout jumping
[ ] No content changes
[ ] Light Theme works
[ ] Dark Theme works
[ ] Desktop works
[ ] Tablet works
[ ] Mobile works
[ ] Reduced-motion preference works
[ ] Existing hero rotation is not broken
```

**Final rule:**

> Copy the successful motion language from the top hero headline and apply it
> to the Commitment list. As the visitor scrolls through 01–10, each
> Commitment item should smoothly flow into the Pecunia green while it is
> active, then return to its normal theme colour as the next item takes over.
> Reuse the existing hero animation approach rather than creating an
> unrelated animation.
------------------------------------------------------------------------

# 77. COMMITMENT INTRO COPY — GREEN SECOND SENTENCE + MATCH GREEN HEADLINE SIZE

The supplied screenshots show the introductory copy in the **Our Commitment**
section.

Current copy:

```text
If something isn't working, we don't hide behind the numbers.
We find out why. Then we fix it.
```

The required visual treatment is:

```text
If something isn't working, we don't hide behind the numbers.

We find out why. Then we fix it.
```

## 77.1 Make the second sentence green

The complete second sentence:

```text
We find out why. Then we fix it.
```

must be displayed in the approved Pecunia green:

```css
color: var(--green);
```

with:

```css
--green: #00C978;
```

Do not make only part of the sentence green.

The complete phrase must use the green treatment:

```text
We find out why. Then we fix it.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
             GREEN
```

The first sentence remains the normal content/description colour:

```text
If something isn't working, we don't hide behind the numbers.
```

## 77.2 Match the green text size shown in the reference

The green sentence:

```text
We find out why. Then we fix it.
```

must use the **same visual text size as the green Commitment statement shown
in the second supplied screenshot**:

```text
We don't promise magic. We build
accountability into the system.
```

Match the reference treatment rather than leaving the green sentence at the
smaller paragraph size shown in the first screenshot.

The intended result is a clear hierarchy:

```text
Normal supporting sentence
→ normal content size/colour

We find out why. Then we fix it.
→ larger green emphasis matching the existing green Commitment statement
```

Do not make it larger than the reference green Commitment statement.

Do not change the font family or create a new typography style if the existing
green Commitment statement already provides the correct typography token/class.

## 77.3 Preserve the exact wording

Do not rewrite the sentence.

Use exactly:

```text
We find out why. Then we fix it.
```

Keep:

- punctuation;
- wording;
- sentence order.

## 77.4 Preserve the first sentence

Do not change:

```text
If something isn't working, we don't hide behind the numbers.
```

It remains normal content text.

The only requested visual change to the copy is the second sentence's colour
and size.

## 77.5 Light and Dark Theme

The green sentence must use the same approved Pecunia green treatment in both
themes:

```css
var(--green)
```

Base:

```css
#00C978
```

The surrounding first sentence must use the appropriate normal content colour
for the active theme.

Do not introduce a different green for Dark Theme.

## 77.6 Responsive behaviour

The enlarged green sentence must remain responsive.

On mobile, it may wrap naturally:

```text
We find out why.
Then we fix it.
```

or another natural line break determined by the available width.

Do not reduce the text to the old small paragraph size simply to force it onto
one line.

Do not cause:

- horizontal overflow;
- clipping;
- layout jumping.

## 77.7 Reuse existing typography

Where possible, reuse the existing typography class/token used by:

```text
We don't promise magic. We build
accountability into the system.
```

This ensures the two green Commitment statements remain visually consistent.

Do not duplicate unnecessary CSS.

## 77.8 QA

Agent 4 must verify:

```text
[ ] "We find out why. Then we fix it." is entirely green
[ ] Green uses var(--green)
[ ] Base green is #00C978
[ ] First sentence remains normal content colour
[ ] Green sentence matches the second screenshot's green text size
[ ] Green sentence does not exceed the reference size
[ ] Exact wording is preserved
[ ] Light Theme works
[ ] Dark Theme works
[ ] Desktop works
[ ] Tablet works
[ ] Mobile works
[ ] Natural wrapping works
[ ] No horizontal overflow
[ ] Existing typography system is reused where possible
```

**Final visual target:**

```text
If something isn't working, we don't hide behind the numbers.

We find out why. Then we fix it.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      LARGER + #00C978 GREEN
```

The green sentence should visually read as a deliberate Commitment statement,
with the same scale and emphasis as the existing green statement:

```text
We don't promise magic. We build
accountability into the system.
```
------------------------------------------------------------------------

# 78. GROWTH PAGE — GREEN EMPHASIS ON "SERIOUS ABOUT GROWTH" + OUTCOME PHRASES

Apply the following exact visual/content changes shown in the supplied
screenshots.

## 78.1 Main heading — "Serious About Growth."

The current heading is:

```text
Built For Businesses
Serious About Growth
```

Change the second line to:

```text
Serious About Growth.
```

The full second line, including the final full stop, must be rendered in the
approved Pecunia green:

```css
color: var(--green);
```

Base value:

```css
#00C978
```

The first line remains the normal heading colour:

```text
Built For Businesses
```

Final visual treatment:

```text
Built For Businesses          → normal heading colour
Serious About Growth.         → #00C978 GREEN
```

Do not colour only individual words within "Serious About Growth.".

The complete phrase must be green.

## 78.2 Preserve exact capitalisation

Use:

```text
Built For Businesses
Serious About Growth.
```

Do not change the approved Title Case.

The full stop at the end of:

```text
Serious About Growth.
```

is required.

## 78.3 Growth statement list — green outcome phrases

In the following three statements:

```text
If the opportunity is there, we'll find it.
If the system is broken, we'll fix it.
If it works, we'll scale it.
```

the **complete phrase after the comma** must be green.

### Statement 1

Keep:

```text
If the opportunity is there,
```

in the normal heading/content colour.

Make:

```text
we'll find it.
```

green.

Result:

```text
If the opportunity is there, we'll find it.
                          ^^^^^^^^^^^^^^^^
                              GREEN
```

### Statement 2

Keep:

```text
If the system is broken,
```

in the normal heading/content colour.

Make:

```text
we'll fix it.
```

green.

Result:

```text
If the system is broken, we'll fix it.
                       ^^^^^^^^^^^^^
                           GREEN
```

### Statement 3

Keep:

```text
If it works,
```

in the normal heading/content colour.

Make:

```text
we'll scale it.
```

green.

Result:

```text
If it works, we'll scale it.
            ^^^^^^^^^^^^^^^
                 GREEN
```

## 78.4 Green treatment

All three outcome phrases use:

```css
var(--green)
```

with the approved base:

```css
#00C978
```

Do not create a new green.

Do not use different greens for the three statements.

## 78.5 Keep the typography unchanged

Do not change the existing typography, sizing, weight, line height or spacing
of these statements simply to apply the green emphasis.

The green portion should remain the same size and typographic treatment as
the surrounding statement.

The only requested visual change is the colour split.

## 78.6 Both themes

The green treatment applies consistently in:

```text
Light Theme
Dark Theme
```

Use the shared Pecunia green token.

The non-green portions should continue using the correct normal text colour
for the active theme.

## 78.7 Mobile and responsive behaviour

The colour split must remain correct when the sentences wrap across multiple
lines.

Do not assume the comma and green phrase will always remain on the same
physical line.

The semantic text span should determine the colour, not visual line position.

Example on mobile:

```text
If the opportunity is
there, we'll find it.
       ^^^^^^^^^^^^^
          GREEN
```

The complete phrase after the comma remains green even if it wraps.

## 78.8 No content changes elsewhere

Do not rewrite the surrounding page copy.

Preserve the existing:

```text
Built For Businesses
Serious About Growth.
```

and:

```text
If the opportunity is there, we'll find it.
If the system is broken, we'll fix it.
If it works, we'll scale it.
```

exactly apart from the explicitly requested full stop and colour treatment.

## 78.9 QA

Agent 4 must verify:

```text
[ ] "Serious About Growth." has a final full stop
[ ] "Serious About Growth." is entirely #00C978 green
[ ] "Built For Businesses" remains normal heading colour
[ ] "we'll find it." is entirely green
[ ] "we'll fix it." is entirely green
[ ] "we'll scale it." is entirely green
[ ] Text before each comma remains normal colour
[ ] All punctuation remains correct
[ ] Typography size/weight is unchanged
[ ] Green uses var(--green)
[ ] Base green is #00C978
[ ] Light Theme works
[ ] Dark Theme works
[ ] Mobile wrapping preserves the correct colour spans
[ ] Desktop works
[ ] No layout shift is introduced
```

**Final visual source of truth:**

```text
Built For Businesses
Serious About Growth.                 ← GREEN

If the opportunity is there, we'll find it.
                          └── GREEN

If the system is broken, we'll fix it.
                       └── GREEN

If it works, we'll scale it.
            └── GREEN
```
------------------------------------------------------------------------

# 79. CLARIFICATION — THE ENTIRE TEXT AFTER EACH COMMA MUST BE GREEN

Clarification to Change #78:

The green treatment must begin **immediately after the comma**, including the
comma itself if it is part of the highlighted text span.

The intended visual split for all three statements is:

## Statement 1

```text
If the opportunity is there, we'll find it.
                       └───────────────── GREEN
```

The green portion is:

```text
, we'll find it.
```

## Statement 2

```text
If the system is broken, we'll fix it.
                    └──────────────── GREEN
```

The green portion is:

```text
, we'll fix it.
```

## Statement 3

```text
If it works, we'll scale it.
          └─────────────── GREEN
```

The green portion is:

```text
, we'll scale it.
```

## Exact rule

For each sentence:

```text
BEFORE COMMA → normal colour
COMMA + EVERYTHING AFTER IT → #00C978 GREEN
```

Therefore the comma belongs to the green span.

Do NOT interpret the requirement as making only:

```text
we'll find it.
we'll fix it.
we'll scale it.
```

green.

The comma and the complete remainder of each sentence must be green.

### Final source of truth

```text
If the opportunity is there, we'll find it.
                       ^^^^^^^^^^^^^^^^^^^
                              GREEN

If the system is broken, we'll fix it.
                    ^^^^^^^^^^^^^^^^^
                           GREEN

If it works, we'll scale it.
          ^^^^^^^^^^^^^^^^
                 GREEN
```

Preserve the exact wording, punctuation and typography.

This clarification supersedes the narrower wording in Change #78 where
necessary.
------------------------------------------------------------------------

# 80. THE STANDARD — GREEN SECOND PHRASE

Update the **The Standard** section shown in the supplied screenshot.

Current heading:

```text
The Standard
If we can't measure it, we can't improve it.
```

The required visual treatment is:

```text
The Standard
If we can't measure it, we can't improve it.
                    └──────────────────── GREEN
```

## 80.1 Green text

Make the entire phrase:

```text
we can't improve it.
```

Pecunia green:

```css
color: var(--green);
```

Approved base:

```css
#00C978
```

The preceding text remains the normal heading colour:

```text
If we can't measure it,
```

Therefore the visual split is:

```text
If we can't measure it, we can't improve it.
                    ^^^^^^^^^^^^^^^^^^^^^^^
                              GREEN
```

The comma immediately before the green phrase should remain with the normal
preceding text unless the existing design convention requires punctuation to
be included in the highlighted span. The essential requirement is that
everything from **"we can't improve it."** onward is green.

## 80.2 Exact wording

Preserve the exact wording:

```text
If we can't measure it, we can't improve it.
```

Do not change:

- "can't"
- punctuation
- sentence structure
- capitalisation.

The final full stop must remain.

## 80.3 Typography

Keep the existing typography, font family, font weight, size, line height and
spacing.

Only introduce the requested colour emphasis.

The green phrase should remain visually the same size as the surrounding
statement.

## 80.4 Light and Dark Theme

Use the shared Pecunia green:

```css
var(--green)
```

with:

```css
#00C978
```

The treatment must work in both Light and Dark Theme.

## 80.5 Responsive behaviour

The colour split must remain correct if the heading wraps on mobile.

The colour must be applied to the semantic text span, not based on visual
line position.

For example, if mobile wrapping produces:

```text
If we can't measure it,
we can't improve it.
```

the second line remains completely green.

## 80.6 QA

```text
[ ] "we can't improve it." is entirely green
[ ] Green uses var(--green)
[ ] Base green is #00C978
[ ] "If we can't measure it," remains normal colour
[ ] Exact wording is preserved
[ ] Final full stop remains
[ ] Typography remains unchanged
[ ] Light Theme works
[ ] Dark Theme works
[ ] Mobile wrapping works correctly
[ ] No layout shift or overflow
```

**Final visual target:**

```text
The Standard

If we can't measure it, we can't improve it.
                    we can't improve it. ← GREEN
```
------------------------------------------------------------------------

# 81. THE STANDARD — GREEN MIDDLE TWO SENTENCES

Update the supporting paragraph in the **The Standard** section.

Current paragraph:

```text
Every engagement starts with understanding the numbers. Every system
is built with performance in mind. Every campaign produces data. Every
result informs the next decision.
```

Apply the following exact colour treatment:

### Normal / black text

Keep these two sentences in the normal content colour:

```text
Every engagement starts with understanding the numbers.
Every result informs the next decision.
```

### Green text

Make these two complete sentences Pecunia green:

```text
Every system is built with performance in mind.
Every campaign produces data.
```

Approved green:

```css
color: var(--green);
```

Base value:

```css
#00C978
```

### Final visual order

```text
Every engagement starts with understanding the numbers.   → BLACK

Every system is built with performance in mind.            → GREEN
Every campaign produces data.                              → GREEN

Every result informs the next decision.                    → BLACK
```

The two green sentences should be treated as one continuous green emphasis
within the paragraph, while remaining separate sentences.

## 81.1 Preserve exact wording

Do not rewrite, shorten, capitalise differently, or otherwise modify the
sentences.

Use exactly:

```text
Every engagement starts with understanding the numbers.
Every system is built with performance in mind.
Every campaign produces data.
Every result informs the next decision.
```

## 81.2 Typography

Do not change the existing paragraph typography.

Keep the same:

- font family;
- font size;
- font weight;
- line height;
- spacing;
- responsive behaviour.

Only change the colour of the specified sentences.

## 81.3 Light and Dark Theme

Use:

```css
var(--green)
```

for the two green sentences in both Light and Dark Theme.

The first and final sentences must continue using the normal content colour
appropriate to the active theme.

## 81.4 Responsive wrapping

Colour must be applied to the actual sentence spans, not based on line
position.

If the text wraps differently on mobile, the complete two middle sentences
must remain green.

## 81.5 QA

```text
[ ] "Every engagement starts with understanding the numbers." is BLACK
[ ] "Every system is built with performance in mind." is GREEN
[ ] "Every campaign produces data." is GREEN
[ ] "Every result informs the next decision." is BLACK
[ ] Green uses var(--green)
[ ] Base green is #00C978
[ ] Exact wording is preserved
[ ] Existing paragraph typography is unchanged
[ ] Light Theme works
[ ] Dark Theme works
[ ] Mobile wrapping preserves the correct colours
[ ] No layout shift or overflow
```

**Final source of truth:**

```text
BLACK:
Every engagement starts with understanding the numbers.

GREEN:
Every system is built with performance in mind.
Every campaign produces data.

BLACK:
Every result informs the next decision.
```
------------------------------------------------------------------------

# 82. THE STANDARD — UPDATED GREEN SENTENCE SELECTION

**Important correction to Change #81:** the previous green sentence selection
is superseded by this change.

For the supporting paragraph in **The Standard** section, the required colour
treatment is now:

### BLACK

```text
Every engagement starts with understanding the numbers.
```

### GREEN

```text
Every system is built with performance in mind.
```

### BLACK

```text
Every campaign produces data.
```

### GREEN

```text
Every result informs the next decision.
```

Therefore the complete paragraph must visually read as:

```text
Every engagement starts with understanding the numbers.   → BLACK

Every system is built with performance in mind.            → GREEN

Every campaign produces data.                              → BLACK

Every result informs the next decision.                    → GREEN
```

## 82.1 Exact wording

Preserve the exact four sentences:

```text
Every engagement starts with understanding the numbers.
Every system is built with performance in mind.
Every campaign produces data.
Every result informs the next decision.
```

Do not change spelling, punctuation, capitalisation or wording.

## 82.2 Green

The two green sentences must use the existing Pecunia green token:

```css
var(--green)
```

Base value:

```css
#00C978
```

Do not create a new green.

## 82.3 Typography

Keep the existing paragraph typography unchanged:

- font family;
- font size;
- font weight;
- line height;
- spacing;
- responsive sizing.

Only change the colour of the two specified sentences.

## 82.4 Responsive behaviour

Apply the colours to semantic sentence spans rather than visual lines.

If a sentence wraps on mobile, the entire sentence must retain its assigned
colour.

## 82.5 Theme support

The two specified sentences remain green in both:

```text
Light Theme
Dark Theme
```

The other two sentences use the normal content colour for the active theme.

## 82.6 QA

```text
[ ] "Every engagement starts with understanding the numbers." = BLACK
[ ] "Every system is built with performance in mind." = GREEN
[ ] "Every campaign produces data." = BLACK
[ ] "Every result informs the next decision." = GREEN
[ ] Green uses var(--green)
[ ] Base green is #00C978
[ ] Exact wording is preserved
[ ] Existing typography is unchanged
[ ] Light Theme works
[ ] Dark Theme works
[ ] Mobile wrapping preserves sentence colours
[ ] No layout shift or overflow
```

**Final source of truth:**

```text
BLACK  → Every engagement starts with understanding the numbers.
GREEN  → Every system is built with performance in mind.
BLACK  → Every campaign produces data.
GREEN  → Every result informs the next decision.
```

This Change #82 supersedes the sentence-colour instructions in Change #81.
------------------------------------------------------------------------

# 83. THE STANDARD — GREEN STATEMENT PARTIAL COLOUR UPDATE

Update the large green statement in the **The Standard** section.

Current statement:

```text
Because growth isn't a feeling. It's a
system of decisions.
```

The required colour split is:

### BLACK

```text
Because growth isn't a feeling.
```

### GREEN

```text
It's a system of decisions.
```

Final visual treatment:

```text
Because growth isn't a feeling. It's a
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
BLACK

system of decisions.
GREEN
```

More precisely, the complete sentence:

```text
Because growth isn't a feeling.
```

must be normal heading/content colour, while:

```text
It's a system of decisions.
```

must use the approved Pecunia green.

## 83.1 Exact wording

Preserve exactly:

```text
Because growth isn't a feeling. It's a system of decisions.
```

Do not change wording, punctuation or capitalisation.

## 83.2 Green

Use the existing shared token:

```css
var(--green)
```

Base:

```css
#00C978
```

Do not introduce another green.

## 83.3 Typography

Keep the existing statement typography completely unchanged.

Only split the colour treatment between the two sentence spans.

## 83.4 Responsive behaviour

The colour must be applied to semantic sentence spans so that if the text
wraps differently on mobile:

```text
Because growth isn't a
feeling.
```

remains black, while:

```text
It's a system of
decisions.
```

remains green.

## 83.5 Theme support

The first sentence uses the normal heading/content colour for the active
theme.

The second sentence remains Pecunia green in both Light and Dark Theme.

## 83.6 QA

```text
[ ] "Because growth isn't a feeling." = BLACK
[ ] "It's a system of decisions." = GREEN
[ ] Green uses var(--green)
[ ] Base green is #00C978
[ ] Exact wording is preserved
[ ] Existing typography is unchanged
[ ] Light Theme works
[ ] Dark Theme works
[ ] Mobile wrapping preserves sentence colours
[ ] No layout shift or overflow
```

**Final source of truth:**

```text
BLACK → Because growth isn't a feeling.
GREEN → It's a system of decisions.
```

This Change #83 supersedes any earlier instruction that treated the entire
statement as green.
------------------------------------------------------------------------

# 84. "START A GROWTH PROJECT" — ROUTE TO BOOKING PAGE

Update the homepage CTA shown beneath the main landing-page introduction.

Current CTA:

```text
Start A Growth Project →
```

## 84.1 Required destination

When the visitor clicks:

```text
Start A Growth Project →
```

it must take them directly to the **Booking / Book A Call page**.

Use the website's existing booking route/page rather than creating a duplicate
booking page.

The behaviour should be equivalent to clicking the main header:

```text
Book A Call
```

## 84.2 Navigation behaviour

The CTA must be a real navigational link/button and must work with:

- mouse click;
- keyboard activation;
- mobile tap.

Do not make it a visual-only element.

## 84.3 Preserve the CTA

Keep the exact displayed wording:

```text
Start A Growth Project →
```

Do not change the text, arrow or typography as part of this change.

## 84.4 Preserve existing booking functionality

Do not modify the existing booking form, booking logic, validation, submission
handling or backend functionality.

Only connect this CTA to the existing booking destination.

## 84.5 QA

```text
[ ] "Start A Growth Project →" is clickable
[ ] Clicking it opens the existing booking page
[ ] Destination matches the existing "Book A Call" destination
[ ] No duplicate booking page is created
[ ] Existing booking functionality is unchanged
[ ] Works on desktop
[ ] Works on mobile
[ ] Works with keyboard activation
[ ] CTA wording remains exactly "Start A Growth Project →"
```

**Final requirement:**

> Clicking **Start A Growth Project →** from the homepage must take the
> visitor directly to the existing Booking / Book A Call page.

================================================================================
CURSOR MASTER EXECUTION CONTRACT — FINAL / CANONICAL
================================================================================

THIS FILE IS THE CANONICAL IMPLEMENTATION INSTRUCTION.

Use THIS file as the single source of truth for the Pecunia Studios website
update. It contains the original specification plus all approved changes
through Change #84.

Do not use an older PecuniaStudios-Update-v*.md as the active instruction if
it conflicts with this file.

IMPORTANT:
- Actually implement the changes. Do not only analyse them or write a report.
- Do not rebuild the website.
- Do not replace working components unnecessarily.
- Do not change existing code unless required to implement an item in this file.
- Do not remove working functionality.
- Do not invent content, routes, services, pricing, statistics or integrations.
- Preserve all approved wording exactly unless a later numbered change in THIS
  file explicitly changes that wording.
- Inspect the existing repository before editing.
- Reuse existing components, tokens, routes, animation utilities and form logic
  wherever possible.
- Keep the implementation production-safe and responsive.

================================================================================
1. EXECUTION ORDER — FOUR CURSOR SUB-AGENTS
================================================================================

Run the four sub-agents SEQUENTIALLY, not as four independent parallel rewrites.

AGENT 1 — AUDIT + IMPLEMENTATION MAP
-------------------------------------

Responsibilities:
1. Inspect the entire repository/codebase.
2. Identify:
   - homepage/landing page;
   - Services page;
   - individual service detail pages;
   - About page/section;
   - Approach section;
   - Commitment section;
   - Standard section;
   - final CTA/booking page;
   - header/navigation;
   - footer;
   - theme implementation;
   - responsive/mobile navigation;
   - hero rotating text implementation;
   - existing animation/motion utilities;
   - existing green/theme tokens;
   - existing booking form and route;
   - existing service routes and back navigation.
3. Compare the current implementation against EVERY numbered requirement in
   this document.
4. Identify the smallest safe set of files/components that need modification.
5. Check for duplicated/legacy implementations so the later agents do not
   accidentally edit an obsolete component.
6. Produce an implementation map for Agents 2 and 3.

Agent 1 MUST NOT:
- rewrite the application;
- replace the framework;
- remove working functionality;
- create a parallel design system;
- invent replacement content.

Agent 1 may make only safe preparatory changes if genuinely required, but its
primary output is the verified implementation map and clear handoff.

AGENT 2 — CONTENT + STRUCTURE + ROUTING
---------------------------------------

Responsibilities:
1. Implement all content and structural requirements.
2. Implement all required pages/routes.
3. Implement homepage section ordering.
4. Implement About section + dedicated About page.
5. Implement Services list + dedicated service detail navigation.
6. Implement all service-page return/home routing requirements.
7. Implement booking CTA routing.
8. Implement the contact/booking form fields and exact labels required by this
   specification.
9. Implement the approved rotating hero text content and exact order.
10. Preserve all approved copy.

Agent 2 must work FROM Agent 1's audited repository state.

Before finishing:
- run the project's appropriate typecheck/lint/build/tests where available;
- verify that every changed route resolves;
- verify no existing route was accidentally removed.

AGENT 3 — VISUAL + MOTION + THEME + RESPONSIVE
----------------------------------------------

Responsibilities:
1. Implement all visual changes.
2. Implement Light Theme as the standard/default website presentation.
3. Implement Dark Theme and the theme toggle.
4. Implement the approved Pecunia green consistently.
5. Implement all requested green text spans.
6. Implement hero rotating-text motion.
7. Reuse/copy the existing successful hero motion language for the Commitment
   scroll-active 01–10 interaction.
8. Implement all requested spacing/gap reductions.
9. Implement footer CTA styling and placement.
10. Implement responsive/mobile presentation.
11. Ensure animations do not cause layout jumps.
12. Respect prefers-reduced-motion.

CRITICAL:
Do not create a second unrelated animation system when an existing animation
utility can be reused.

Green token:
    var(--green)

Approved base:
    #00C978

The latest colour-specific changes at the bottom of this document are
authoritative over earlier colour instructions.

AGENT 4 — FULL QA + FIX
-----------------------

Agent 4 is the final owner of verification.

Agent 4 MUST:
1. Inspect the final repository after Agents 2 and 3.
2. Run lint/typecheck/build/tests available in the project.
3. Test desktop and mobile layouts.
4. Test Light and Dark Theme.
5. Test every route.
6. Test every CTA.
7. Test every service detail page.
8. Test all back/home routing.
9. Test the booking form.
10. Test hero rotation.
11. Test Commitment scroll activation from 01 through the final item.
12. Test responsive wrapping of all colour-highlighted text.
13. Fix any defects found that are directly related to this specification.
14. Re-run verification after fixes.

Agent 4 must NOT perform unrelated refactoring.

================================================================================
2. HANDOFF RULE
================================================================================

Each agent must leave the repository in a usable state for the next agent.

Required sequence:

    Agent 1
       ↓
    verified implementation map
       ↓
    Agent 2
       ↓
    content / structure / routing implemented
       ↓
    Agent 3
       ↓
    visual / motion / theme implemented
       ↓
    Agent 4
       ↓
    QA + targeted fixes + final verification

Do not allow later agents to reset or discard correct work from earlier agents.

If Git is available, use small logical commits/checkpoints where appropriate.
Do not rewrite history or force-reset another agent's work.

================================================================================
3. CHANGE MANIFEST — LATEST APPROVED ITEMS
================================================================================

The complete requirements for Changes 1–84 are contained above in this file.

The latest approved change headings are:

- **65.** SERVICES HEADING — "THE GROWTH STACK" IN GREEN
- **66.** APPROACH SECTION — REDUCE EXCESSIVE VERTICAL GAP
- **67.** SERVICES / GROWTH STACK — SCROLL-ACTIVE GREEN HIGHLIGHT
- **68.** FOOTER — CLEANER CTA PLACEMENT + THINNER GREEN BOOK-A-CALL BUTTON
- **69.** FINAL CTA SECTION — "LET'S BUILD THE SYSTEM TO CAPTURE IT." IN GREEN
- **70.** CONTACT / GROWTH PROJECT FORM — FIELD, CAPITALISATION & CONTACT DETAILS
- **71.** HOMEPAGE HEADER + HERO CLEANUP — BOOK A CALL, BRAND LABEL & THEME TOGGLE
- **72.** HERO ROTATING TEXT — REPLACE WITH NEW ORDERED MESSAGES
- **73.** WHY PECUNIA SECTION — MAKE THE PECUNIA VISUAL BOXES PERMANENTLY VISIBLE
- **74.** SERVICE DETAIL → HOMEPAGE RETURN — LAND AT SERVICES SECTION
- **75.** ABOUT US — RESTORE SHORT HOMEPAGE SECTION + SEPARATE FULL ABOUT PAGE
- **76.** COMMITMENT SECTION — COPY THE HERO GREEN TEXT MOTION TO THE 01–10 LIST
- **77.** COMMITMENT INTRO COPY — GREEN SECOND SENTENCE + MATCH GREEN HEADLINE SIZE
- **78.** GROWTH PAGE — GREEN EMPHASIS ON "SERIOUS ABOUT GROWTH" + OUTCOME PHRASES
- **79.** CLARIFICATION — THE ENTIRE TEXT AFTER EACH COMMA MUST BE GREEN
- **80.** THE STANDARD — GREEN SECOND PHRASE
- **81.** THE STANDARD — GREEN MIDDLE TWO SENTENCES
- **82.** THE STANDARD — UPDATED GREEN SENTENCE SELECTION
- **83.** THE STANDARD — GREEN STATEMENT PARTIAL COLOUR UPDATE
- **84.** "START A GROWTH PROJECT" — ROUTE TO BOOKING PAGE

================================================================================
4. CONFLICT / PRECEDENCE RULE
================================================================================

This is particularly important because several later changes refine earlier
colour instructions.

When two instructions conflict:

    LATEST NUMBERED CHANGE WINS.

Known supersessions:

- Change #79 clarifies/supersedes the narrower green-span interpretation in
  Change #78 for the three growth statements.
- Change #82 supersedes Change #81 for The Standard supporting paragraph.
- Change #83 supersedes any earlier instruction treating the complete
  "Because growth isn't a feeling. It's a system of decisions." statement as
  green.
- Change #84 adds the Start A Growth Project → booking-page routing requirement.

Do not merge conflicting versions together.

================================================================================
5. FINAL COLOUR SOURCE OF TRUTH
================================================================================

Unless a later change explicitly says otherwise:

    var(--green) = #00C978

Use the shared token rather than hard-coding a new green throughout components.

Where a specific sentence is marked GREEN in this specification, colour the
actual semantic text span. Do not colour text based on its visual line
position.

This is especially important for responsive/mobile wrapping.

================================================================================
6. FINAL CONTENT PRESERVATION RULE
================================================================================

Do not "improve" the approved Pecunia copy.

Do not:
- rewrite sentences;
- alter approved titles;
- add marketing claims;
- remove approved descriptions;
- change punctuation;
- change capitalisation;
- substitute synonyms.

Only make content changes explicitly requested by a numbered change.

================================================================================
7. FINAL NAVIGATION RULE
================================================================================

Navigation must follow the explicit routing requirements in this document.

In particular:

- Homepage service item → service detail page.
- Service detail back/home control → homepage landing page at the Services
  section where specified.
- Every dedicated page requiring a Home/back control must route correctly.
- About homepage CTA → dedicated About page.
- Dedicated About page Home control → homepage at the About section.
- Start A Growth Project → existing Booking / Book A Call page.
- Existing header Book A Call destination remains the source of truth for the
  booking route.

Do not create duplicate booking or service systems.

================================================================================
8. FINAL ANIMATION RULE
================================================================================

Animations should enhance the existing design rather than replace it.

Hero:
- preserve the existing successful text rotation;
- use the approved ordered messages;
- preserve the smoother/slightly slower transition requested.

Commitment:
- copy the visual motion language of the hero;
- active item transitions into Pecunia green as the user scrolls;
- progression is 01 → 02 → 03 → ... → final item;
- scrolling upward reverses the active state naturally;
- normally one item is active;
- no layout jumping;
- mobile must work;
- reduced motion must be respected.

If an existing animation utility already implements the desired hero transition,
reuse it.

================================================================================
9. FINAL THEME RULE
================================================================================

Light Theme is the standard/default website presentation.

Requirements:
- white background, not cream;
- clean black/pure-black descriptive/content text where specified;
- vibrant Pecunia green for approved emphasis;
- green remains consistent in Dark Theme;
- theme toggle is present and functional;
- toggle text/icon must have correct contrast for its current state;
- mobile must initialise correctly and expose the theme control through the
  mobile navigation where appropriate.

Do not remove Dark Theme.

================================================================================
10. FINAL "DO NOT TOUCH" SAFETY RULE
================================================================================

Unless directly required by this specification, do not change:

- backend logic;
- database logic;
- API contracts;
- authentication;
- deployment configuration;
- unrelated dependencies;
- unrelated pages;
- unrelated components;
- working form submission logic;
- working analytics;
- existing production integrations.

If an implementation requires touching one of these areas, first determine
whether the same result can be achieved at the UI/routing/component level.

================================================================================
11. FINAL QA ACCEPTANCE CRITERIA
================================================================================

The task is complete only when:

[ ] All Changes 1–84 have been reviewed against the repository.
[ ] All applicable changes have been implemented.
[ ] Latest superseding instructions are respected.
[ ] Existing approved content is preserved.
[ ] Existing working functionality remains working.
[ ] Homepage is clean and responsive.
[ ] Light Theme is the default.
[ ] Dark Theme remains functional.
[ ] Green token is consistent.
[ ] Service navigation works.
[ ] Service detail back/home routing works.
[ ] About section and dedicated About page work.
[ ] About page returns to homepage at the About section.
[ ] Booking CTAs route correctly.
[ ] Contact form has all required fields/labels.
[ ] Hero rotating text has the approved order.
[ ] Hero transition remains smooth.
[ ] Commitment 01–10 scroll-green interaction works.
[ ] The Standard colour spans match Changes #82 and #83.
[ ] Growth-page colour spans match Changes #78/#79.
[ ] Footer CTA is correct.
[ ] Mobile navigation works.
[ ] Desktop layout works.
[ ] No unwanted horizontal overflow.
[ ] No significant layout jumping.
[ ] Reduced-motion behaviour is respected.
[ ] Lint/typecheck/build/tests pass where available.
[ ] Agent 4 has manually verified the important visual interactions.
[ ] No unrelated refactor has been introduced.

================================================================================
12. FINAL AGENT REPORT
================================================================================

Agent 4 must finish with a concise report containing:

1. Files changed.
2. Features implemented.
3. Tests/checks run.
4. Any issues fixed.
5. Any remaining issue that genuinely could not be resolved.
6. Confirmation that no unrelated functionality was intentionally changed.

Do not claim a feature is complete if it was only inspected.

================================================================================
END OF CANONICAL CURSOR EXECUTION CONTRACT
================================================================================
