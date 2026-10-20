# Pecunia Studios — Cursor handoff

Open this entire folder in Cursor. The approved design is already implemented as a working HTML/CSS/JavaScript prototype.

## Start here
- `index.html`: working browser preview; use a local web server for reliable script loading.
- `design-source/approved-design.html`: editable source containing the latest approved layout, styles, animation and service-page templates, without the outer preview wrapper.
- `design-source/service-copy.json`: original service copy for reference.
- `design-source/service-page-data.json`: service content used by the prototype.
- `website-assets/`: supplied images and the new generated studio image at full resolution.
- `reference/approved-services.png`: screenshot of the latest approved service cards.

The preview imports fonts and JavaScript libraries from public CDNs, so it needs an internet connection. Much of its imagery is embedded in the HTML; original separate assets are also supplied.

## Instructions for Cursor
Build a maintainable production website from this approved design. First inspect `index.html` in a browser and read `design-source/approved-design.html`. Preserve the design and motion; do not invent a different homepage. Use the existing project's framework if one exists. Otherwise suggest an appropriate project structure before implementation.

### Approved decisions
- Pecunia green: #00C978. Light page surfaces and dark text. No black-filled cards, panels or buttons.
- Keep only the current Search to enquiry animation. No animation-direction selector or alternative animation concepts.
- Green moving dots flow into the central Pecunia website card.
- The image tile reads Content Creation, not AI-Generated Content.
- The animation includes Premium Website Design, Custom AI Integration, Custom Dashboards and enquiry capture / AI Automation & CRM.
- Four service groups: Premium Website Design; Paid Growth; Organic Growth & Content; AI, Automation & CRM.
- First service panel includes Premium Website Design, Custom AI Integration and Custom Dashboards.
- Use the generated wide studio image in the website service imagery. Preserve image sharpness and aspect ratio.
- Each service has a short Read more about... link with its sideways arrow directly beside the text. Opening service descriptions are larger than supporting text.
- Each service must have its own actual route/page in the production build.
- Case studies sit directly below Services. Current case-study covers are illustrative placeholders, not screenshots of delivered projects.
- About Us button and service panels use green. Keep readable dark text on green.
- Keep the original UK-English commercial copy except where the approved prototype changes it.
- No thin green progress line running down the left side of the page.
- Keep responsive behaviour, keyboard accessibility, pause/replay controls and reduced-motion support.

### Production work still required
The preview is not a deployed production application. Replace the iframe/variant-preview shell and any host-only controls with normal application code. The original external URLs and prototype route handling need proper production routes. Implement and test enquiry submission with the user's chosen backend, spam protection and validation. Never claim the current demonstration form sends messages. Check desktop/mobile layout and all links. Do not invent awards, client outcomes, statistics or testimonials. Obtain real project screenshots/links before representing illustrative covers as completed portfolio work. Confirm image usage rights before public launch.

Do not publish or deploy without the user's request.
