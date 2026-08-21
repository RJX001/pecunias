# PecuniaStudios — Light / Dark Theme Specification

> Companion document to `pecuniastudios-build-spec.md`. This covers the theming system only. It does not introduce, remove, or alter any backend logic, data structures, API routes, or component behaviour — this is a presentation-layer addition on top of the existing design system.

---

## 1. Principle

Dark theme is the **original approved design** and remains the default. Light theme is an **additive alternate view of the same design**, built from the same colour palette — no new colours were introduced. The two themes are produced by swapping which palette values act as "background" versus "text", not by designing a second colour scheme.

**Constraint for implementation:** do not touch component logic, data fetching, form handling, or the services/case-study data structures defined in `pecuniastudios-build-spec.md` while implementing this. This is a CSS/theming-layer change only.

---

## 2. Colour Tokens

### Shared across both themes (do not change per theme)
```
--brass:       #A9812E   /* primary accent */
--brass-dim:   #7d611f   /* accent hover/active state */
--ledger:      #33473B   /* secondary accent, muted green */
--ledger-light:#4c6858   /* secondary accent, lighter variant */
--wine:        #6B2E3A   /* tertiary accent, reserved/unused */
--dark-text:   #12181A   /* constant — used for text sitting on brass-coloured buttons in BOTH themes, so contrast never breaks */
```

### Dark theme (default)
```
--ink:          #12181A                  /* base background */
--ink-2:        #181f22                  /* panel/card background */
--paper:        #F6F0E4                  /* primary text colour */
--stone:        #9A9184                  /* secondary/muted text */
--line:         rgba(246,240,228,0.14)   /* hairline dividers */
--line-strong:  rgba(246,240,228,0.28)   /* stronger borders */
--header-bg:    rgba(18,24,26,0.92)      /* sticky nav translucent background */
--recessed-bg:  rgba(0,0,0,0.15)         /* subtle depth, e.g. expanded accordion rows */
```

### Light theme
```
--ink:          #F6F0E4                  /* base background — was --paper in dark theme */
--ink-2:        #ECE2CC                  /* panel/card background, slightly darker than base */
--paper:        #181410                  /* primary text colour — was --ink in dark theme */
--stone:        #6E6558                  /* secondary/muted text — darkened for contrast on light bg */
--line:         rgba(24,20,16,0.12)      /* hairline dividers */
--line-strong:  rgba(24,20,16,0.24)      /* stronger borders */
--header-bg:    rgba(246,240,228,0.92)   /* sticky nav translucent background */
--recessed-bg:  rgba(24,20,16,0.045)     /* subtle depth, matching opacity role of dark theme */
```

**Why this works:** throughout the design system, `--ink` is used semantically as "background colour" and `--paper` as "text colour" — never referenced for their literal hex value. Swapping their assigned values per theme therefore flips the whole page correctly without touching any component's CSS rules.

---

## 3. The One Exception — Buttons on Brass

Any element with a **brass background** (the solid "Request a Quote" button, "Submit Request" button) must use `--dark-text` for its text colour, **not** `--paper` or `--ink`. These buttons need dark text for contrast in both themes — light-coloured text on a brass background fails contrast in light mode if it's tied to the theme-swapped variable. This is the only deliberate exception to "everything follows the token swap."

---

## 4. Implementation Approach

- Set the active theme via a `data-theme` attribute on the root element (`<html data-theme="dark">` / `<html data-theme="light">`), with dark as the default on first load.
- In Next.js: implement as a small theme context/provider (React state, `useEffect` to sync the `data-theme` attribute), or via `next-themes` if that's already part of the stack — either is fine, but **do not persist theme choice to localStorage inside any Claude-generated artifact preview**; standard `localStorage` is fine in the actual Next.js production app, this restriction only applied to the static HTML mockup used for design review.
- All existing component styles should reference the CSS custom properties as already defined — no component-level colour overrides should be needed if the tokens above are wired up correctly.
- Toggle control: a small button/switch in the site header, showing a sun icon + "Dark" label in dark mode, moon icon + "Light" label in light mode (or equivalent iconography — match your existing icon set, e.g. `lucide-react`, rather than inline SVG paths from the mockup).
- Transition: apply a short `background-color`/`color`/`border-color` transition (around 0.2–0.25s) on theme switch for a smooth toggle rather than an instant snap.

---

## 5. Reference

The static mockup `pecuniastudios-mockup.html` already has a working implementation of this exact system (CSS custom properties + `data-theme` attribute + JS toggle) — treat it as the working reference for exact values and transition behaviour, not just this document.
