# PecuniaStudios — Redesign Update Spec (v2)

> **Companion document — not a replacement.** This sits on top of `pecuniastudios-build-spec.md` and `pecuniastudios-theme-spec.md`, derived from the new approved redesign mockup (`pecunia_redesign.pdf`). It covers **visual and layout changes only**. Where a section below is silent, the original build spec still governs — do not re-derive structure that isn't mentioned here.
>
> **Hard constraint:** do not touch form submission handling, API routes, data-fetching, database schema/queries, routing, or the services/case-study data *shapes* already defined in `pecuniastudios-build-spec.md`. The only new logic permitted is small, local, client-side UI state for the two new carousels described below (an index + optional autoplay timer) — no server round-trip, no persistence.

---

## 0. What changed, at a glance

| Area | Status |
|---|---|
| Default theme | **Changed** — light is now the default, not dark |
| Primary button colour | **Changed** — solid ink, not solid brass |
| Hero copy (H1, subhead) | **Changed** — new copy, new accent-word colour |
| Hero side panel | **Changed** — old static "Statement Preview" card is replaced by a new "Results" carousel |
| Work section | **Changed** — new "Clients on the books" strip added; case studies go from a static 3-card grid to a 5-slide carousel with controls |
| About copy | **Changed** — first paragraph reworded, intro clause dropped |
| Contact section | Unchanged — re-theme only |
| Services ("Statement of Services" accordion) | **Not shown in redesign — unchanged**, per build-spec §4.3 |
| Footer | **Not shown in redesign — unchanged**, per build-spec §4.7 |
| Mobile nav | **Not shown in redesign — still a known gap**, per build-spec §6 |

---

## 1. Global — Light theme is now the default

- Flip the root `data-theme` default from `"dark"` to `"light"`. Dark remains fully available via the existing toggle; the token values and swap mechanism in `pecuniastudios-theme-spec.md` are untouched — only the *initial* value changes.
- **Toggle label clarification:** the mockup shows the toggle reading **"Dark"** while the page is clearly rendering in its light/cream state. So the button always displays the label of the theme you'd switch *into*, not the one currently active. Confirm this reading is what's intended in the theme spec's icon/label wording (it was ambiguous there) and implement to match the screenshot: `"Dark"` shown when light is active, `"Light"` shown when dark is active.

---

## 2. Global — Primary CTA button colour

| Button | Old | New |
|---|---|---|
| "Request a Quote" (hero + nav) | Solid brass (`--brass`) background | Solid ink (`--dark-text` / near-black) background, paper-coloured text |
| "Submit Request" (contact form) | Solid brass background | Solid ink background, paper-coloured text |
| "View Services" (outline) | Unchanged | Unchanged — ink border/text |

Brass is **not removed as a token** — it's still used for eyebrows, the italic accent word in the H1, pill-tag borders, and active carousel dots. This is a button-specific colour swap only.

---

## 3. Hero section

### 3.1 Copy (replace verbatim)

- **Eyebrow:** unchanged — `Digital Studio · Est. Quote-on-Request`
- **H1 (replace):** `Turn attention into revenue.` — italicise `revenue.` in **ledger green** (`--ledger`), not brass. This replaces the old H1 and its brass-italic treatment of "engineered."
- **Subhead (replace):** `PecuniaStudios builds the websites, runs the ads, manages the marketplaces, and produces the creative that make growth actually happen — under one roof, with one team who knows your business.`
  - *Note: "creative that make" is grammatically singular/plural mismatched in the source mockup — reproducing verbatim per the "exact copy, don't paraphrase" rule from the base spec. Flag for RJ to confirm whether to fix to "creative that makes" before this goes live.*
- **CTAs:** same labels/links (`Request a Quote` → `#contact`, `View Services` → `#services`), restyled per §2.

### 3.2 NEW — Results carousel (replaces the old "Statement Preview" card)

The static chip card (`6 service lines`, `18 capabilities`, `WD · DM · PA · MS · CS · AD`) is gone. In its place:

- Header row: `PS · Results` (small-caps, left) — `0X / 0Y` slide counter (mono, right)
- Dashed hairline divider below the header
- Category pill tag (reuses existing pill-tag styling, e.g. `AD`)
- Large stat, ledger-green, serif or mono bold (e.g. `12,000`)
- Two caption lines below, muted/stone colour (e.g. `App installs, first quarter` / `Nightjar App — illustrative`)
- Dot pagination row at the bottom (active dot filled ledger-green/brass, others outline)

**Behaviour:** auto-advance every ~4–5s, pause on hover, dots are clickable to jump directly. Local `useState` for index + `setInterval`/`setTimeout` for autoplay, cleared on unmount — no server involvement.

**Data source:** don't create a second content source — pull `tags`, `name`, `stat`, `description` from the same case-study array already defined in build-spec §4.4 (add a `featured: true` flag to the entries you want in hero rotation rather than duplicating copy).

**⚠️ Flag:** the mockup only shows one frame (`AD` / `12,000` / Nightjar App, labelled frame **3 of 4**). The other three frames' exact copy isn't specified anywhere. Recommend populating the remaining slots from the existing case-study entries (Kindling & Co., Marrow Studio, and one new one — see §4.3) until RJ confirms exact ordering/copy.

---

## 4. "Our Work" section (replaces "Work — Statement Highlights")

### 4.1 Section header (replace)

- **Eyebrow:** `Our Work`
- **H2:** `Trusted by teams who needed a system, not more noise.`
- **Subhead:** `A running account of who we work with, and what we've built for them.`

### 4.2 NEW — "Clients on the books" strip

A hairline-bordered horizontal band between the section header and the case-study carousel:

- Small-caps label above the row: `Clients on the books`
- Row of client names, each preceded by a small bullet dot, muted/stone colour, letter-spaced small-caps or mono styling, evenly spaced across the row

```json
[
  "Fieldnote",
  "Bramble & Son",
  "Tidewater Co.",
  "Orison",
  "Kindling & Co."
]
```

**⚠️ Flag:** these are new names not present anywhere else in the business docs — treat as `isPlaceholder: true`, same convention already used for case studies, pending real client names (and logos, if that's the eventual direction instead of text).

### 4.3 "Selected Case Studies" — now a carousel (was a static 3-card grid)

- Label: `Selected Case Studies`
- Each slide is a two-panel card:
  - **Left panel:** tinted background (ledger-light tint), containing a simple line-art illustrative graphic (device/browser outline icons) — purely decorative
  - **Right panel:** category pill tag → case-study name (serif heading) → large stat (ledger-green) → stat caption → 1–2 sentence description → small `Illustrative figure` note
- **Controls:** circular prev/next arrow buttons, bottom-left. Dot pagination, bottom-right, dot count = slide count, active dot filled.
- Below a dotted divider, a meta row:
  - Left: fixed disclaimer caption — `Cumulative illustrative impact viewed`
  - Right: `Slide X of N` counter

**Slide count changes from 3 → 5** to match the mockup (`Slide 2 of 5`). Slides 1–3 are the existing entries from build-spec §4.4, unchanged:

1. Kindling & Co. (`WD · DM`, `+140%`)
2. Marrow Studio (`MS`, `3.2×`) — confirmed matches the mockup frame exactly
3. Nightjar App (`AD`, `12,000`)

Slides 4–5 are **new and not specified beyond frame 2 of the mockup**. Proposed placeholders, using two names from the new client strip, flagged the same way as the existing three:

```json
[
  { "tags": "DM · SEO", "name": "Fieldnote", "stat": "TBC", "description": "Placeholder — pending real result and copy.", "isPlaceholder": true },
  { "tags": "CS", "name": "Orison", "stat": "TBC", "description": "Placeholder — pending real result and copy.", "isPlaceholder": true }
]
```

**⚠️ Flag:** confirm these two before launch — they're guesses to fill out the 5-slide carousel shape, not sourced from the mockup.

---

## 5. About section

### 5.1 First paragraph — replace

**Old (build-spec §4.5):**
> PecuniaStudios was built on a simple idea: most businesses don't need more marketing noise — they need a system. A website that converts. A marketplace presence that's actually managed. Creative that doesn't get made once and forgotten.

**New (from mockup, verbatim):**
> Most businesses don't need more marketing noise — they need a system that works. A website that converts. A marketplace presence that's actually managed, not just set up and forgotten. Creative that gets made and maintained.

Note the opening clause ("PecuniaStudios was built on a simple idea:") is dropped entirely in the new version — confirm that's intentional rather than a mockup omission.

### 5.2 Second paragraph — unchanged (assumed)

Not visible in the redesign screenshot crop. Assume it carries over unchanged from build-spec §4.5:
> We work as an extension of your team, across the full stack of what makes a digital business run — not as a vendor you have to chase for updates.

### 5.3 Stat list — unchanged (assumed)

The `Service lines: 6 / Capabilities: 18 / Based in: United Kingdom` list isn't visible in the redesign crop (the right column appears blank above the fold in that screenshot). Assume it's still present, just below the visible crop — **do not remove it** without confirmation.

---

## 6. Contact section

No structural or copy differences identified versus the original spec. Re-theme only (light default, ink-coloured submit button per §2). Fields, validation, and the (still-pending) API route are untouched.

---

## 7. Sections not covered by this redesign pass

Not shown in the new mockup — leave exactly as specified in the base build spec:

- Services / "Statement of Services" accordion — build-spec §4.3
- Footer — build-spec §4.7
- Mobile nav — build-spec §6 (still an open gap, not addressed here)

---

## 8. Constraints carried over (still binding)

1. No pricing anywhere on the public site — no numbers, no "from £X", no price tiers.
2. No WordPress Website Development or eBay Marketplace Management.
3. Custom-quote-only — every CTA still leads to the contact form.
4. Retainer/project account types stay internal-only, not public copy.
5. Ledger/statement visual metaphor stays intact — the new carousels should still read as "statement" components (pill tags, mono numerics, hairline/dashed dividers), not generic slider UI.

---

## 9. Implementation notes for Cursor

- Everything in this document is presentation-layer: JSX/TSX markup, CSS/Tailwind classes, static copy strings, and two small pieces of local UI state (carousel index + optional autoplay) for the hero Results panel and the case-study carousel.
- **Do not modify:** form submission handling, API route logic, services data-fetching, database schema/queries, or routing.
- Both carousels are independent, self-contained client components — no shared state, no server round-trip.
- Treat `pecunia_redesign.pdf` as the pixel-accurate visual reference for spacing, colour, and proportions not fully captured in prose above, the same way the original mockup HTML was treated as reference in the base spec.
