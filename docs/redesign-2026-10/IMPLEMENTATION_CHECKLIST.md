# October 2026 redesign — implementation checklist

Source: `Pecunia_Studios_Cursor_Handoff.zip` (20 October 2026) + `PECUNIA_CURSOR_REDESIGN_IMPLEMENTATION.md`.
**The handoff takes priority over all older Pecunia specs wherever they conflict** (see `.cursor/rules/redesign-priority.mdc`).

Branch: `redesign/oct-2026-handoff`. Source ZIP SHA-256 at start: `894BB06B85AED489225916BF588AC3052BFCCFD02B42E23AA328C40A434E713C`.

## Owner decisions (20 Oct 2026)

| Topic | Decision |
| --- | --- |
| "The Standard" homepage section (not in prototype) | Remove from homepage |
| Hero headline treatment | Leave the current typing behaviour and styling as-is for now (owner will revisit). No "Next headline" button. |
| "AI-Generated Content" vs "Content Creation" | Rename to **Content Creation** everywhere visible |
| Light/Dark theme toggle | Keep site-wide; light is default |
| First service slug | Keep `/services/digital-ecommerce`; visible name **Premium Website Design** |

## Baseline audit (before this pass)

Framework: Next.js 16.3 App Router, React 19.2, Tailwind 4, TypeScript. Routes: `/`, `/about`, `/services`, `/services/[slug]` (4 static params), `/api/contact`.

### Already implemented
- [x] Brand green `#00C978`; light default with dark alternative; tokens already match the prototype ink `#181410`, muted `#6e6558`, raised `#f7f7f5`.
- [x] Four service routes, direct-loadable via `generateStaticParams`.
- [x] Approved UK-English copy for every homepage section.
- [x] Why Pecunia convergence diagram (the prototype embeds the same `.why-connector` CSS).
- [x] Case-study names (Legion Fitness, Card Chart, Bollard Company) — as a plain list, placed before Contact.
- [x] Reduced-motion handling, mobile menu, keyboard-accessible header.
- [x] Contact form with validation, rate limiting and API route (**out of scope — untouched**).

### Gaps to close
- [ ] Interactive PECUNIA / STUDIOS wordmark above the hero (letters reveal photography on hover/focus/click).
- [ ] Hero becomes two-column: copy + static rail on the left, **Search → enquiry** canvas animation on the right, with Pause/Play and Replay controls and a status line.
- [ ] Remove dot-grid backgrounds (`HomeDots`, hero dots).
- [ ] Homepage services: four green accordion panels with imagery (studio, city, sunset, studio), intro column on the right, "Read more about …" links with inline arrows, larger opening description; first panel lists Premium Website Design / Custom AI Integration / Custom Dashboards.
- [ ] First service group renamed to **Premium Website Design** across nav, cards, footer, service pages.
- [ ] Case studies move **directly below Services** and become a carousel (prev/next, position, keyboard/touch/screen-reader friendly); covers labelled as illustrative concepts.
- [ ] Section order: Wordmark, Hero, Growth Philosophy, Services, Case Studies, Approach, About, Commitment, Why Pecunia, Built For Businesses, Contact.
- [ ] Typography: Montserrat 400–900, 15px/1.75 body, 11px uppercase kickers, muted support copy; heading green emphasis becomes ink except where the prototype keeps green.
- [ ] Approach → two-column steps with green top rules. Commitment → two-column numbered list.
- [ ] About → green section, media window (city image) that expands on scroll, outlined dark "About Us →" button.
- [ ] Header/Footer restyled to the prototype (sticky white header with rule; footer columns), theme toggle and mobile menu retained.
- [ ] `/services` index rebuilt as the four-group index (breadcrumb, heading, cards) — no six-service catalogue.
- [ ] `/services/[slug]` rebuilt on the prototype template: breadcrumb, service pills, hero with service imagery, What we do grid, Why it matters + principles, Approach accordions, FAQ, related services, enquiry CTA block (link only).
- [ ] SEO: metadataBase, canonical URLs, OG, `sitemap.ts`, `robots.ts`.
- [ ] "AI-Generated Content" → "Content Creation" in visible UI.
- [ ] Remove "The Standard" from homepage.
- [ ] No thin green progress rail, no preview shell/variant selector.

## Agent ownership

| Agent | Scope | Files |
| --- | --- | --- |
| Main | Data layer, assets, rules, page composition, globals primitives, integration & QA | `src/data/growth-stack.ts`, `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, `public/images/*`, docs |
| 1 Chrome | Header, footer, brand mark, `/about` page styling, sitemap/robots | `Header.tsx`, `Footer.tsx`, `BrandMark.tsx`, `theme/ThemeToggle.tsx`, `About.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/about/page.tsx` |
| 2 Hero | Wordmark, hero layout, Search → enquiry canvas | `Wordmark.tsx`, `Hero.tsx`, `HeroJourney.tsx`, `src/data/hero-headlines.ts`, `*.module.css` |
| 3 Services + Case studies | Homepage service panels, case-study carousel | `GrowthStack.tsx`, `CaseStudies.tsx`, `src/data/case-studies.ts`, `*.module.css` |
| 4 Service routes | `/services`, `/services/[slug]` | `src/app/services/**`, `Services.tsx`, `ServiceDetail.tsx`, `WhatWeDo.tsx`, new `service-*` components |
| 5 Homepage sections | Growth Philosophy, Approach, About teaser, Commitment, Why Pecunia, Built For | `System.tsx`, `Method.tsx`, `AboutTeaser.tsx`, `Why.tsx`, `Problem.tsx`, `BrandStatement.tsx` |

**Never touched:** `Contact.tsx`, `src/app/api/contact/route.ts`, `src/lib/contact-schema.ts`, `src/lib/rate-limit.ts`, `.field` / `.btn*` styles.

## Outstanding owner items (not blocking this pass)
- Real project screenshots, URLs and client permission before case-study covers represent delivered work.
- Image usage rights for supplied photography and the generated studio image before public launch.
- Contact form's "Service Needed" options still list the old six categories — form is out of scope; flag for the separate form task.
