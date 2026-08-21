# PecuniaStudios — Build Specification

> Source of truth: this document is derived directly from the approved static HTML mockup (`pecuniastudios-mockup.html`). It is the base for converting the site into a production Next.js build. Do not deviate from the design system, copy, or structure below without explicit sign-off — this has already been through design review.

---

## 1. Project Overview

**Brand:** PecuniaStudios
**Type:** UK-based digital services studio (web development, digital marketing, paid advertising, marketplace management, creative services, app development)
**Positioning:** Premium/headless-capable studio, differentiated from WordPress/template-based small agencies. Custom-quote pricing model only — no public prices anywhere on the site, ever.
**Concept:** "Pecunia" (Latin for money) expressed through a ledger/financial-statement visual metaphor — services are presented as a "Statement of Services," itemized with category codes, like line items in an account. This is a literal, deliberate design conceit tied to the brand name — do not soften it into a generic SaaS layout.

---

## 2. Tech Stack (Target Production Build)

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Hosting | Vercel |
| Database | Supabase or Neon (managed Postgres) — for future lead/contact storage |
| Images | `next/image` |
| E-commerce (future client work, not this marketing site) | Shopify Storefront API, headless |
| Monitoring | Vercel Analytics + Sentry |
| Styling | Recommend Tailwind CSS or CSS Modules, translating the CSS custom properties below 1:1 — do not introduce a new design system or default Tailwind palette |
| Forms | API route (`/api/contact` or similar), rate-limited, replacing the current `alert()` placeholder in the mockup |

**Rendering strategy:** This is a marketing site — statically generate all pages (SSG/ISR). Only the contact form submission needs a server round-trip (API route). No pricing data, no dynamic pricing logic, anywhere.

---

## 3. Design Tokens

Translate these CSS custom properties directly into whatever theming system is used (Tailwind config, CSS variables, etc.) — do not substitute similar-looking colours.

```css
--ink: #12181A;        /* primary background */
--ink-2: #181f22;       /* panel/card background, slightly lighter than ink */
--paper: #F6F0E4;       /* primary text on dark background */
--brass: #A9812E;       /* primary accent — darkened gold/bronze, NOT the lighter #BE9B5E used in an earlier draft */
--brass-dim: #7d611f;   /* accent hover/active state */
--ledger: #33473B;      /* secondary accent, muted deep green */
--ledger-light: #4c6858;/* secondary accent, lighter variant */
--wine: #6B2E3A;        /* tertiary accent, currently unused in mockup — reserved */
--stone: #9A9184;       /* secondary/muted text */
--line: rgba(246,240,228,0.14);        /* hairline dividers */
--line-strong: rgba(246,240,228,0.28); /* stronger borders */
```

**Typography:**
- Display / headings: `Fraunces` (serif, variable weight — used at 300/400/500/600, including italic for accent words)
- Body: `IBM Plex Sans`
- Utility / numeric / codes / mono elements: `IBM Plex Mono` (used for category codes, stats, form-adjacent utility text)

Load via Google Fonts:
```
Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,400
IBM Plex Sans:wght@400;500;600
IBM Plex Mono:wght@400;500
```

**Layout:**
- Max content width: `1180px`, centered, `32px` side padding
- Section vertical padding: `100px` top/bottom on desktop
- Hairline borders (`--line`) separate every major section — this is a deliberate ledger-page rhythm, keep it
- Grid-based, not flexbox-heavic — most components use CSS grid with fixed-width utility columns (e.g. `80px 1fr 2fr 40px` for the services table) to maintain the ledger/statement alignment

---

## 4. Page Structure & Copy (exact content, do not paraphrase)

### 4.1 Navigation (sticky header)
- Logo: `PECUNIA · STUDIOS` (the `·` rendered in brass)
- Links: Services, Work, About, Contact (Contact styled as a button: "Request a Quote")
- Mobile: hamburger toggle below 900px — **not yet functional in the mockup, needs a real implementation** (slide-out or dropdown menu)

### 4.2 Hero
- Eyebrow: `Digital Studio · Est. Quote-on-Request`
- H1: `Digital revenue, engineered and itemized.` (the word "engineered" is italicized and brass-colored)
- Subhead: `PecuniaStudios builds, markets, and manages the systems that turn attention into revenue — websites, ads, marketplaces, and the creative that fuels them. One studio, every line item accounted for.`
- CTAs: "Request a Quote" (solid brass button, links to `#contact`), "View Services" (outline button, links to `#services`)
- Side panel ("ledger card"): Statement Preview — `6 service lines`, `18 capabilities`, and six code chips: `WD · DM · PA · MS · CS · AD`

### 4.3 Services — "Statement of Services"
- Eyebrow: `Statement of Services`
- H2: `Every line item, accounted for.`
- Subhead: `Each engagement is scoped and quoted individually — no line item priced the same twice, because no two businesses are. Select a category to see what's included.`
- Rendered as an accordion table. Header row: `Code | Category | Description | (chevron)`.
- **6 category blocks, 18 total service items.** Each category expands/collapses independently on click (chevron rotates 90° when open, `max-height` transition).

**Full data set (implement as a typed array/JSON, not hardcoded markup):**

```json
[
  {
    "code": "WD",
    "name": "Website Development",
    "description": "The storefront and structure your business runs on.",
    "items": [
      { "code": "WD-01", "name": "E-commerce Website Development", "description": "Professional online stores optimised for sales and conversions." },
      { "code": "WD-02", "name": "Custom Coded Website Development", "description": "Fully bespoke, hand-coded sites tailored to exact requirements." }
    ]
  },
  {
    "code": "DM",
    "name": "Digital Marketing",
    "description": "Strategy and search, compounding over time.",
    "items": [
      { "code": "DM-01", "name": "Digital Marketing Strategy", "description": "Full-funnel strategy to grow online presence and increase sales." },
      { "code": "DM-02", "name": "SEO", "description": "Search engine optimisation for higher rankings and organic traffic." }
    ]
  },
  {
    "code": "PA",
    "name": "Paid Advertising",
    "description": "Demand generation on the platforms your customers already use.",
    "items": [
      { "code": "PA-01", "name": "Google Ads", "description": "Targeted search and shopping campaigns built for conversions." },
      { "code": "PA-02", "name": "Meta Ads", "description": "Facebook and Instagram advertising, managed end to end." },
      { "code": "PA-03", "name": "TikTok Ads", "description": "Campaigns built for brand awareness and short-form conversion." },
      { "code": "PA-04", "name": "Pinterest Ads", "description": "Advertising for e-commerce and niche visual-search audiences." }
    ]
  },
  {
    "code": "MS",
    "name": "Marketplace & Store Setup",
    "description": "Where the sale actually happens.",
    "items": [
      { "code": "MS-01", "name": "Google Merchant Center Setup", "description": "Complete GMC setup and product feed integration." },
      { "code": "MS-02", "name": "Amazon Marketplace Management", "description": "Listings, SEO, inventory and support — fully managed." },
      { "code": "MS-03", "name": "Etsy Marketplace Management", "description": "Store setup and ongoing optimisation for growth." },
      { "code": "MS-04", "name": "Temu Marketplace Management", "description": "Complete marketplace handling and setup." },
      { "code": "MS-05", "name": "Winning Product Research", "description": "Research and analysis to identify high-potential products." }
    ]
  },
  {
    "code": "CS",
    "name": "Creative Services",
    "description": "The content that makes the rest convert.",
    "items": [
      { "code": "CS-01", "name": "Social Media Content Creation", "description": "Professional content built for how each platform actually performs." },
      { "code": "CS-02", "name": "Graphic Designing", "description": "Custom graphics, branding, banners and promotional design." },
      { "code": "CS-03", "name": "Video Editing", "description": "Professional editing for ads, reels and promotional content." },
      { "code": "CS-04", "name": "AI Image & Video Generation", "description": "AI-generated visuals and video for branding and marketing." }
    ]
  },
  {
    "code": "AD",
    "name": "App Development",
    "description": "Custom software, when the web isn't enough.",
    "items": [
      { "code": "AD-01", "name": "App Development", "description": "Custom mobile and web application development, end to end." }
    ]
  }
]
```

**Explicitly excluded (do not add back):** WordPress Website Development, eBay Marketplace Management. These were removed from scope deliberately.

### 4.4 Work — "Statement Highlights"
- Eyebrow: `Statement Highlights`
- H2: `Recent account performance.`
- 3 case study cards (currently placeholder/mock data — flag clearly as such in the codebase, e.g. a `isPlaceholder: true` field, so it's obvious these need replacing with real client results before launch):

```json
[
  { "tags": "WD · DM", "name": "Kindling & Co.", "stat": "+140%", "description": "Organic traffic growth in 6 months following an e-commerce rebuild and SEO retainer." },
  { "tags": "MS", "name": "Marrow Studio", "stat": "3.2×", "description": "Marketplace revenue increase after full Amazon and Etsy management handover." },
  { "tags": "AD", "name": "Nightjar App", "stat": "12,000", "description": "Installs in the first quarter following custom app development and launch support." }
]
```

### 4.5 About
- Eyebrow: `About`
- H2: `A studio, not a vendor.`
- Body copy (two paragraphs):
  > PecuniaStudios was built on a simple idea: most businesses don't need more marketing noise — they need a system. A website that converts. A marketplace presence that's actually managed. Creative that doesn't get made once and forgotten.
  >
  > We work as an extension of your team, across the full stack of what makes a digital business run — not as a vendor you have to chase for updates.
- Stat list (mono-styled key/value rows):
  - Service lines: `6`
  - Capabilities: `18`
  - Based in: `United Kingdom`

### 4.6 Contact — "New Account Application"
- Eyebrow: `New Account Application`
- H2: `Request a quote.`
- Subhead: `Tell us what you need and we'll come back with a scoped proposal — no obligation, no public price list to guess from.`
- Form fields:
  1. Name (text, required)
  2. Business name (text, optional)
  3. Service needed (select): Website Development / Digital Marketing / Paid Advertising / Marketplace & Store Setup / Creative Services / App Development / Not sure yet
  4. Project details (textarea, placeholder: "What are you trying to achieve?")
  5. Submit button: "Submit Request"
- **Current mockup behaviour:** `event.preventDefault()` + `alert()`. This must be replaced with a real submission handler — POST to an API route, validate server-side, rate-limit, and either email the lead or store it (Supabase/Neon table: `leads` or similar).
- **No budget/price field** — this was deliberately removed. Do not add one back.

### 4.7 Footer
- Signature line (italic serif): `"Balance carried forward: your growth."`
- Links: Services, Work, Contact
- Copyright: `© 2026 PecuniaStudios.`

---

## 5. Explicit Constraints (do not violate these)

1. **No pricing anywhere** — no numbers, no "from £X", no budget fields, no price tiers, no "Custom Quote" tags on individual line items. This was actively stripped out of the mockup and must stay out.
2. **No WordPress Website Development or eBay Marketplace Management** — excluded from scope entirely.
3. **Custom-quote-only model** — every CTA leads to the contact form, never to a checkout or a priced package.
4. **Retainer + project-based engagement types exist conceptually** (per business context) but are **not described publicly on the site** — that positioning lives in internal docs / sales conversations, not the marketing site copy.
5. Keep the ledger/statement visual metaphor intact — it's the brand's signature design element, not decorative filler.

---

## 6. Known Gaps to Resolve During Build

- Mobile nav (hamburger menu) is visually present but non-functional in the mockup — needs real implementation.
- Contact form has no real backend — needs an API route + validation + rate limiting + storage/notification.
- Case study cards use placeholder/mock content — needs real client data before launch (or clear "coming soon" treatment if launching before case studies exist).
- Leftover unused CSS in the mockup for an `.accounts` / `.account-card` / `.model-note` pricing-tier component (from an earlier "Project Account vs Retainer Account" section) — this section was removed from the HTML but its CSS remains in the source file. Do not port this CSS or the concept into the production build; pricing tiers/account types should not appear as public content.

---

## 7. Reference File

Original approved static mockup: `pecuniastudios-mockup.html` — treat as the pixel-accurate visual reference for spacing, hover states, and responsive behaviour not fully captured in prose above.
