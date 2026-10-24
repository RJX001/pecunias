

## LATEST OVERRIDE — SEO and exactly six services

Read SEO_AND_SERVICE_STRUCTURE.md before implementing. It supersedes all older five-service-count instructions and the previous first-service label. Use exactly: Website & App Design; Branding & Content Creation; Paid Advertising & Campaigns; SEO & AI Search Visibility; AI & Business Automation; EPOS & CRM Systems. Keep existing routes compatible; add /services/epos-crm. Preserve the earlier condensed first-service benefits. Do not invent EPOS hardware/payment/provider capabilities or local business locations. The audit includes verified findings from all eight current live sitemap pages and proposed titles/content for nine pages after the addition. Coordinate shared catalogue, metadata and form changes among agents 3, 4 and 5. All other approved changes remain in scope. No publishing without separate approval.

# Pecunia Studios — implementation guide for five Cursor agents

Date: 23 October 2026. Repository: https://github.com/RJX001/pecunias

## 1. Scope and starting point

Implement this batch in the existing application, preserving the owner's current changes. Read the repository's AGENTS.md, applicable Cursor rules and bundled Next.js documentation first. Inspect git status and current code before deciding what is missing. Do not replace the repository with this package or revert to an older prototype.

This document records later, explicit owner decisions. They supersede conflicting older design guidance only for the changes below. The earlier blanket exclusion on contact-form work is overridden for this requested form redesign and the minimal validation/delivery changes necessary to support it. Keep unrelated safeguards and application behaviour intact.

Do not push, merge, deploy, change DNS, change environment values or send client messages. Present a local preview and a concise change/test report. The owner must explicitly request publishing separately.

Known handover status, not a substitute for inspecting the owner's current checkout:

- PR #1 introduced brand updates, Knowledge Centre removal and the fixed SEO explanation panel.
- PR #2 removed the two hero photos and changed project preview fitting. Its height-based width restriction is now rejected and must be corrected.
- PR #3 (`codex/seo-auto-resume`, known head `9f491b4`) contains the SEO auto-resume fix. It was opened but not merged by Codex. Inspect current code before incorporating an equivalent change; do not merge the PR automatically.
- The approved title-to-stage layout, removed service list, removed billboard, slower animation/headline and redesigned form remain part of this batch. The localhost proxy is not committed application source.

## 2. Approved hero layout

Use `references/approved-title-flow.html` as the visual reference.

- Centre the large **PECUNIA ● STUDIOS** main wordmark. Both words use the same Montserrat ExtraBold weight and size. Keep the green separator tightly spaced like the supplied logo, without huge gaps.
- Place **Create / Discover / Convert / Connect** directly beneath the main wordmark, centred across the hero. Retain all four stages.
- Animate a restrained green connection from the main wordmark's green dot down into the active stage. Highlight one stage at a time in that same sequence.
- Remove the old busy HeroJourney diagram from this location: no separate Content Creation, Discover your brand, Paid Growth, Custom AI, Dashboards or Enquiry cards surrounding another Pecunia browser box.
- The separate Pecunia browser-box concept was superseded by the owner's request to connect the stages to the main title itself. Do not add a second main brand card above/below this title.
- **Remove the services bullet list beneath these stages completely.** Premium Website Design, App Creation, Custom AI Integration, Custom Dashboards, Paid Growth and Content Creation must not reappear as that compact hero list. Keep the actual services section elsewhere on the page.
- Preserve the approved headline copy and CTA below the animation. Keep the hero compact and responsive, with no giant empty placeholders or clipped text.
- Preserve useful image-reveal interactions in the main wordmark where practical without clutter or focus regressions. The new connector must not obstruct those controls.

### Slower timing

The owner asked for gentler green motion, slower typing and more reading time. These are proposed starting values, not exact timings dictated by the owner:

| Behaviour | Starting target |
| --- | --- |
| Stage interval | 4.2 seconds per stage |
| Green pulse travel | about 2.8 seconds |
| Headline typing | about 80 milliseconds per character |
| Hold after full phrase | at least 4.5 seconds |
| Headline exit | about 350 milliseconds |

Use named constants so timing can be tuned. Avoid flashing, repeated layout shifts or a blank hero when animations pause. Reserve sufficient responsive space for the longest headline without excessive gaps. Pause timers when the page is hidden/offscreen. Clean up timers, animation frames and observers on unmount. Respect reduced motion with a readable static phrase and manually selectable stages. Provide working pause/replay controls where retained.

## 3. Website previews must use page width

The owner rejected the narrow preview with large side gaps and the earlier shallow, cropped strip. The final screenshot must look good on the owner's laptop as well as wide desktop and mobile.

- Let the preview fill the available content width with reasonable page gutters. Match the company heading's left edge to the preview.
- **Do not calculate preview width from viewport height.** Remove restrictions resembling `max-width: min(1040px, calc((100svh - ...)*1265/712))`.
- Show the industry/category and company name above the preview. Do not restore the right-side descriptive column or duplicate text links.
- Keep the screenshot's intrinsic proportions: `width: 100%`, natural height and/or the actual image aspect ratio. Do not stretch the image or crop the screenshot to a short strip.
- Permit the page to scroll naturally when a full-width screenshot is taller than the available viewport. Do not shrink the preview merely to fit the title, screenshot, arrows and progress on one screen.
- Preserve the four confirmed projects, their order and working destination links: Atlantis Linen Services, CardChart, Beckbury Chippy, Completely Secured.
- Keep previous/next controls, clear position/progress and mobile swipe if already supported.
- Preserve the requested scroll-through-project experience where feasible. On shorter screens, use a layout/fallback that keeps the full screenshot readable; do not introduce nested scrollbars, scroll traps or inaccessible controls. Update scroll-range calculations together with layout changes, and ensure the user can continue into the next section.
- Keep inactive slides out of keyboard/screen-reader navigation. When changing slides, do not leave focus on hidden content.

`references/wide-project-layout.html` demonstrates the width and image proportions. It is not a replacement app and does not implement the final pinned behaviour.

## 4. SEO topic automation

- Keep one fixed explanation box next to the vertically scrolling topic list. Its label, heading and body must always match the highlighted topic.
- Automatically cycle through all existing SEO topics and scroll the active item towards the middle of the list.
- No rotating image cards, decorative illustration or stacked backing cards in the explanation panel.
- Clicking a topic or its description must not permanently stop autoplay. Give a short reading pause, then resume without requiring Resume. Proposed starting behaviour: 2.5-second selection pause followed by the normal approximately 3.5-second cycle interval.
- Distinguish mouse focus from keyboard reading. Retain keyboard navigation and keep focus stable. Pause while keyboard users are reading/interacting; resume appropriately once they leave unless explicitly paused.
- Explicit Pause should stay paused until resumed. Respect reduced-motion preferences, hidden tabs and offscreen sections. Keep a single source of truth for the active topic and clear all timers/observers.
- Preserve the SEO service page, topic content and links. Do not invent ranking guarantees or outcomes.

## 5. Remove the Why Pecunia billboard

Completely remove the moving strip repeating **STRATEGY / TECHNOLOGY / ACQUISITION / CONVERSION / CREATIVE / AUTOMATION** with arrows. Remove its unused markup, animation and styles rather than simply hiding it in production. Close the resulting spacing cleanly.

Keep the useful surrounding Why Pecunia, disconnected systems/data/decisions and Built For Businesses Serious About Growth content.

## 6. Redesign the contact / booking form

Use `references/booking-form-reference.png` for the clean field arrangement. Use Pecunia's typography and colours, not the reference website's identity or copy.

Desktop layout:

1. Two columns: **Your name** / **Business name**.
2. Two columns: **Email** / **Phone**.
3. Full width: **Website or Instagram**.
4. Full width: **What do you need?** service selector.
5. Full width: **Tell us more** message textarea.
6. Clear submit button, pending feedback and success/error feedback.

**Do not include Budget Range, price estimates or a required budget field.** Keep all the other sections above. Stack fields on small screens, with readable labels and comfortable touch targets. Use a clean underline/spacing treatment inspired by the reference while preserving visible keyboard focus and light/dark readability.

The inspected app schema contained `name`, `businessName`, `mobile`, `service`, `details`, `socialLinks`, and no email field. Check the current version; if email is missing, add it through the entire path: controlled form state, payload, Zod schema, validated email delivery text and local/dev persistence. Do not just draw a field that silently loses the address. Preserve existing field keys where practical, including `mobile` for the Phone label and `socialLinks` for Website or Instagram.

Keep name, a valid email and a service choice required. Retain optionality for other current optional fields unless existing owner requirements say otherwise. Do not add budget validation. Keep rate limiting, error handling, sender/recipient settings and the current email provider. Do not change environment variables or provider configuration. Avoid duplicate submissions and preserve entered data on errors.

Align service choices with the actual approved catalogue, including Search Visibility & SEO and a Not sure yet option. Inspect existing aliases/integrations before renaming stored service values.

## 7. Testimonials — updated by the latest owner request

Keep the prepared stacked testimonial cards alongside the booking form's left introduction on desktop and in a sensible order on mobile. Cards should support arrows and swipe, preserve focus and respect reduced motion.

Read `TESTIMONIALS_ADDENDUM.md` and `TESTIMONIAL_DRAFTS.json`. The owner has now supplied four client identities and several feedback themes. Draft wording is included for approval; it is not confirmed verbatim feedback. Keep drafts visibly labelled in local review mode and exclude them from the public component until approved. No star ratings were supplied. Follow the supplied card-stack reference for the deck beside the form. Do not copy Xsaite review text or invent ratings, roles or outcomes.

## 8. Preserve these decisions

- Brand accent: **#23FA6C**. Typography: **Montserrat ExtraBold, weight 800**, as explicitly requested by the owner. Keep neutral body/label colours where needed for contrast; derive decorative green tints from the brand accent.
- Header order: **Services / Approach / About**. Knowledge Centre has been removed; do not reintroduce it, its page or sitemap entry.
- Keep the existing five-service structure, SEO detail page, real projects, working pages and light/dark themes.
- Do not invent awards, testimonials, statistics, results or pricing.
- Do not ship the localhost proxy, prototype controls, CSS-module hash selectors, iframe wrappers or DOM-injection scripts as application code. Translate the approved visuals into native components and scoped styles.

## 9. Five agents: ownership and coordination

Use **five agents total**, with agent 5 acting as lead/integrator. The owner plans to configure **Grok 4.7, High** in Cursor. Do not claim to have changed Cursor's model setting; use that configuration if available. If parallel agents are unavailable, say so and follow the same ownership plan sequentially.

| Agent | Owns | Boundaries |
| --- | --- | --- |
| 1 — Hero & motion | Wordmark/stage integration, Hero/HeroJourney replacement or removal, related scoped styles, headline timing | No contact, project carousel, SEO or global stylesheet edits without lead coordination. |
| 2 — Project previews | CaseStudies component and scoped styles, screenshot sizing and scroll/swipe behaviour | Preserve project data/assets unless a verified asset problem requires a coordinated change. |
| 3 — Booking form | Contact component, contact-specific styles, schema and API changes required for email/service choices | Preserve rate limiting and provider configuration. Agent 3 owns Contact exclusively, including any testimonial mount requested by agent 4. |
| 4 — SEO, Why & testimonials | SearchVisibility component/styles, Why billboard removal, testimonial component/data/styles | Do not edit Contact; send mount requirements to agent 3. Do not invent reviews. |
| 5 — Lead & QA | Starting-state audit, shared-file ownership, integration, global/style coordination, regression checks and final local preview | Exactly this fifth agent is the coordinator; do not create an extra sixth lead. Do not overwrite other agents' in-progress files. |

Before parallel edits, agree file ownership and shared interfaces. Each agent reports changed files, validation, remaining risks and any integration request. Shared global styles, metadata/configuration and cross-cutting edits belong to the lead. Do not introduce duplicate packages or independent implementations of the same component.

Do not reset, clean, stash or discard the owner's uncommitted work. Use the repository's normal branch/worktree policy and safe reversible changes. Do not automatically cherry-pick old branches or merge GitHub PRs.

## 10. Acceptance checks

- Run the repository's appropriate lint, TypeScript and production-build checks. Record commands/results, and distinguish pre-existing warnings from regressions.
- View the full homepage locally, not just an isolated component. Check both themes at widths 375, 870, 1191 and 1440px, including the short laptop viewport **1191 x 668**. Add a wider desktop check if available.
- Confirm no horizontal page overflow, overlapped labels, clipped wordmark, giant empty hero gaps or duplicate old/new hero diagram.
- Observe all four stages with slowed timing; confirm the green flow originates at the logo dot. Confirm the service bullet list and Why billboard are absent.
- Observe a completed headline for at least 4.5 seconds and verify slower typing. Verify static reduced-motion output.
- Verify all four project screenshots use available page width and full proportions, with controls reachable and an exit from the scroll sequence.
- Click an SEO topic, leave the pointer there and confirm the list/description resume automatically. Check explicit pause/resume and keyboard selection separately.
- Test valid and invalid email, missing service, success, server failure and repeated-submit handling using mocked delivery or local test transport. Confirm email survives schema, payload and persistence/delivery formatting. Do not send real test enquiries through production.
- Confirm no budget field or requirement remains, and no fake testimonial appears.
- Finish with a local preview URL, a short owner-facing summary, changed-file list, test results and any genuinely unresolved issue. Stop before publishing.


## 11. Latest service-page update

Read `SERVICES_UPDATE.md`. Rename the first service to **Premium Websites & Apps**, cover app design/build for iOS, Android and Windows plus logo/brand identity/guidelines, and simplify its Why it matters section to the three objective labels and four short benefit labels. Preserve its existing route and the five-service catalogue. Agent 4 owns the service content/section styles after agent 5 assigns shared catalogue-file ownership; agent 3 coordinates booking selector compatibility.
