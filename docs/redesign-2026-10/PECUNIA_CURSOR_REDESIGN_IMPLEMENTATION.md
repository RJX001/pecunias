# PECUNIA STUDIOS — CURSOR IMPLEMENTATION BRIEF

**Status:** Proposed work instructions for Cursor; not authorisation to publish.  
**Source:** `Pecunia_Studios_Cursor_Handoff.zip` (20 October 2026 handoff).  
**Objective:** Turn the approved redesign prototype into a maintainable, responsive production implementation, preserving its visual identity and interactions.  
**IMPORTANT — USER OVERRIDE:** **Do not work on the contact/enquiry/request form at all.** Do not add, remove, redesign, validate, wire up, or change form fields, APIs, submission handling, email notifications, CRM integrations or spam protection. This explicitly overrides the form-related instruction in the ZIP README and earlier specifications. Preserve any existing production form untouched. If a prototype-only form cannot be used as-is, leave it out of scope, report the blocker, and ask before editing it.

## 0. Non-negotiable working rules

1. **Do not edit, overwrite, recompress or delete the source ZIP or its approved reference files.** Treat the ZIP and `design-source/approved-design.html` as immutable design references. Work in the existing application/repository, on a dedicated branch where possible.
2. **Audit before coding:** inspect the repository, framework, routes, assets and current responsive behaviour; inspect the prototype in a local browser at desktop/tablet/mobile sizes. Produce a short file-level implementation plan and existing-vs-target gap list before editing code.
3. **Do not replace the approved design with a new concept.** No sweeping rewrite of copy, redesign of layout, new typography/palette, generic SaaS cards, extra sections, fabricated case studies, or changes to the approved animation concept.
4. Keep the existing framework and dependency conventions. If the repository is Next.js App Router, implement proper routes/components using its conventions. Do not initiate a framework migration without asking.
5. **No deployment, publishing, DNS, domain, production database or environment-variable changes** without explicit approval.
6. Preserve UK English. Do not insert public prices, package tiers or invented performance figures.
7. For uncertain or contradictory details, prefer the **latest approved prototype and explicit ZIP README decisions** over older specs. Document unresolved differences and ask before changing them.

## 1. Source-of-truth order

1. This brief, especially its form exclusion and safety constraints.
2. `Pecunia_Studios_Cursor_Handoff/README.md` for latest explicit approved decisions.
3. `Pecunia_Studios_Cursor_Handoff/design-source/approved-design.html` for latest design, actual composition and motion.
4. `Pecunia_Studios_Cursor_Handoff/reference/approved-services.png` for approved service-card appearance.
5. `Pecunia_Studios_Cursor_Handoff/design-source/service-page-data.json` and `service-copy.json` for existing content; reconcile conflicts with the visual/README sources instead of silently overriding the latest decisions.
6. `Pecunia_Studios_Cursor_Handoff/website-assets/` for original high-resolution imagery.
7. Older Pecunia specs only as historical guidance where the new handoff is silent; **do not reintroduce old six-service/ledger/brass/cream layout** simply because it appears in previous documents.

The root `index.html` is a preview and may contain a wrapper. Do **not** ship the preview iframe, environment-specific scripts, variant selectors or prototype route hacks. Port only approved design and interaction into normal application components.

## 2. Approved design direction — preserve exactly

- Brand green **`#00C978`**, light surfaces, dark readable text. **No black-filled cards, panels or buttons**; avoid introducing competing accent colours.
- Maintain hero headline, hierarchy, logo presence, spacing, approved image choices and copy from the latest prototype.
- Preserve the approved **Search → enquiry** animation only: green moving dots converge into the central Pecunia website card. Do not add a direction selector or alternative conceptual animations.
- Preserve the concepts shown in the animation: **Premium Website Design**, **Custom AI Integration**, **Custom Dashboards**, and **enquiry capture / AI Automation & CRM**.
- Keep the image tile called **Content Creation**, not **AI-Generated Content**. Note: an older item in `service-page-data.json` still says `AI-Generated Content`; investigate its exact UI use and align visible wording with the approved design without deleting unrelated data without reason.
- Preserve green service panels and About Us button with strong dark-text contrast.
- Read-more links appear beside their sideways arrows, rather than on separate lines; opening service descriptions are visually larger than supporting text.
- Keep case studies **directly after Services**.
- No thin green progress rail down the left page edge.
- Respect `prefers-reduced-motion`, keyboard navigation, focus-visible styles and pause/replay controls.

## 3. Service architecture and page content — high priority

The latest approved **four-group presentation** is:

1. **Premium Website Design**
2. **Paid Growth**
3. **Organic Growth & Content**
4. **AI, Automation & CRM**

The source `service-page-data.json` currently uses the first title `Digital & E-commerce` and key `digital-ecommerce`; **this is a known discrepancy**, not permission to revert the approved public-facing label. Check the approved prototype and nav against the README. Preserve routes/keys if needed for compatibility, but the visible service group wording must follow the final approved screen. If the exact intended first route slug is not settled, flag it and avoid breaking existing URLs.

### Required implementation

- Make each service's **Read more about…** link route to a real, accessible, direct-loadable service page (not an in-page stub or JavaScript-only faux route).
- Reuse the supplied title, intro, outcome and capability lists from `service-page-data.json` where they match the approved prototype; do not fabricate new promises or claims.
- Maintain consistent shared header, footer, theme, typography, responsive grid and back-navigation behaviour across home and service routes.
- Reuse a shared service-detail layout and structured data source, not four diverging copies of JSX.
- Use descriptive route titles/meta descriptions, correct canonical URLs, semantic headings, and internal links; generate a sitemap including the final routes.
- Keep the first group's highlighted capabilities: **Premium Website Design, Custom AI Integration, Custom Dashboards**.
- Use the supplied wide premium studio image for website service imagery; avoid blurry upscaling, stretching or destructive cropping. Use appropriate responsive asset handling and alt text.
- Audit all homepage cards, menu links, footer links and Read-more arrows for consistency with the four public-facing service groups; avoid links to old section anchors or placeholder external domains.
- Do **not** touch any form or enquiry submission feature; existing CTA destinations can remain unchanged pending a separate form task. Report any broken CTA separately without modifying the form.

## 4. Case studies and trust

- Preserve case-study positioning and approved slide/card design. Three illustrative covers mentioned in the prototype include **Legion Fitness, Card Chart, Bollard Company**. Their presence is not evidence of verified client work or results.
- Keep illustrative assets explicitly labelled as concepts/illustrative where appropriate. **Never represent a concept cover as a screenshot of a delivered client site**, or assert results, customer relationships or impact without verifiable evidence.
- Build the case-study carousel to work with pointer, touch, keyboard and screen readers, if present in approved design. Buttons need accessible labels and consistent disabled/wrap behaviour.
- Do not invent logos, awards, testimonials or performance metrics. Record which real screenshots, URLs and client permissions are still needed.

## 5. Motion and interaction polish — targeted, not a redesign

Preserve the prototype's distinctive animation choreography. Improve only clearly demonstrable rough edges:

- Hero/converging dots: consistent timing, smooth eased motion and proper final alignment with the central card; prevent jerky reset cycles or elements jumping on resize.
- Service content: restrained entry motion, consistent hover/focus treatment, no unnecessary animation on static decorative elements.
- Case-study slides: smooth transitions without layout shifts; predictable controls and no rapid uncontrolled autoplay. Pause auto-motion on interaction if applicable.
- Mobile: avoid heavy parallax, excessive painting, mouse-only interactions and forced horizontal scrolling.
- Reduced motion: deliver a complete, comprehensible static state, with functional navigation and readable content.
- Prefer CSS/transforms/opacity where suitable; avoid adding a heavyweight animation library unless the current stack already includes it or there is a proven need.

**Do not copy Xsaite's branding, text, original images, unique illustrations or proprietary assets.** You may evaluate generic design techniques (rhythm, hierarchy, spacing, restrained transitions, polish), but use Pecunia's own approved visual language. If browsing Xsaite or the live Pecunia website is unavailable, say so rather than pretending the comparison is complete.

## 6. Production conversion and implementation quality

- Audit the existing app's structure first; make minimal, reversible changes.
- Remove preview-only shell/iframe mechanics and test controls from production output; preserve legitimate animation pause/replay controls.
- Extract components for header/navigation, hero/system animation, service cards, service-detail template, case studies, approach, About, Why Pecunia and footer only where this improves maintainability.
- Keep one source of truth for repeated service titles, descriptions, routes and cards.
- Preserve supplied images and provide responsive `srcset` / framework image optimisation without compromising image quality.
- Ensure page titles, meta descriptions, OG preview, favicon/branding, semantic landmarks, alt text, descriptive link labels and logical heading structure.
- Check responsive layout at **390, 768, 1024 and 1440 px**, plus at least one narrow mobile width; inspect nav/menu overlays and long service titles.
- Check no horizontal overflow, broken fonts, CLS-heavy media, missing assets, dead links, console errors or hydration errors.
- Verify WCAG-minded interaction: keyboard-only navigation, visible focus, accessible disclosure states, colour contrast and touch targets.
- Check performance with a production build and Lighthouse or equivalent; keep motion smooth and avoid unnecessary JS, layout thrashing and giant above-the-fold imagery.
- Respect any analytics/error-monitoring setup already present; do not add new trackers or services without approval.
- **Form exclusion applies throughout: no form markup, processing, validation, submission, API, data or email changes.**

## 7. Acceptance criteria

- [ ] Source ZIP and original approved reference assets remain unchanged.
- [ ] Existing repository inspected and a brief before/after gap report supplied.
- [ ] Production homepage matches the latest approved prototype at desktop and mobile.
- [ ] Four approved service groups shown consistently across cards and navigation.
- [ ] All four service detail pages are direct-loadable; Read-more links work; back/navigation links work.
- [ ] First group shows its three explicitly approved capabilities.
- [ ] The `Content Creation` / `AI-Generated Content` conflict is resolved in visible UI per approved wording, with any remaining data mismatch reported.
- [ ] Approved Search → enquiry dot animation, pause/replay and reduced-motion behaviour work.
- [ ] Case studies sit below Services and contain no unverified client/outcome claims.
- [ ] New code contains no preview shell, route simulations or stray selector controls.
- [ ] Responsive, keyboard, motion, accessibility and build checks pass.
- [ ] **No contact/enquiry form-related files or logic were intentionally altered.**
- [ ] No deployment or production configuration changes occurred.

## 8. Required Cursor workflow and final response

**Step 1 — Inspect:** report current framework, routes/components, locations of source files, and the specific gaps to fix. Mark ambiguity explicitly.

**Step 2 — Plan:** give a succinct ordered implementation plan and identify which files will change. Flag any conflicts requiring the owner's confirmation before proceeding.

**Step 3 — Implement:** make focused changes *only in the live project/worktree*, never inside the source ZIP. Avoid unrelated refactors. Do not modify the enquiry form.

**Step 4 — Test:** run the repository's existing lint/typecheck/build/test scripts where available, check direct service-route navigation and test representative responsive sizes. Report actual results, not assumptions.

**Step 5 — Handover:** summarise changed files, completed tasks, remaining blockers, tests and screenshots/preview links where supported. Provide a short owner-approval checklist. Do not deploy until asked.

### Scope exclusions for this pass

**No contact form changes whatsoever.** No site publishing. No client statistics or testimonials invented. No public pricing. No new site identity, wholesale redesign, or unsanctioned content rewrite.
