# Pecunia: search visibility audit and six-service structure

Reviewed 23 October 2026. Latest owner additions supersede earlier instructions to retain exactly five services. Implement locally in Cursor only; no GitHub writes or publishing without separate owner authorisation.

## Scope and evidence

Read all eight live sitemap URLs, their server-rendered text, titles, descriptions, headings, canonical tags, JSON-LD, image attributes and internal page links. Read robots.txt and sitemap.xml. Checked non-www/HTTP destinations and one deliberately nonexistent URL. Evidence is in public-audit.json. This is a public HTML/content audit, not a Search Console, analytics, backlink, keyword-volume or Core Web Vitals audit. Do not claim an SEO score, rankings, indexed status, traffic opportunity sizes or measured speed from this review.

## Verified findings

| Priority | Finding | Required action |
|---|---|---|
| High | Homepage title is only `Pecunia Studios`; description is generic strategy/marketing language. | Name website design, app development and marketing in metadata and concise visible introductory copy. |
| High | Homepage H1 source includes repeated animated ambition slogans and duplicate phrases, without an explicit service summary. | Use a stable, descriptive primary H1 and keep the animated slogans as supporting display copy. Keep the centered brand wordmark and approved animation. Avoid duplicate accessible announcements and text clipping. Do not hide keyword lists for search engines. |
| High | Live first service remains Premium Website Design; app platforms and logo work are not explained there. | Apply SERVICES_UPDATE.md, then the latest six-service naming below. Include confirmed iOS, Android and Windows app work and clear links to branding. |
| High | Paid Growth and Organic Growth & Content are less explicit labels for a buyer than the actual work described within them. | Use descriptive service names, page titles, introductory text, cards and form choices consistently. |
| Medium | Services overview description is only `Five connected services. One growth system.`; About description is only a founding-year slogan. | Replace with informative, unique descriptions and update all five-count wording to six. |
| Medium | Service descriptions currently repeat long introductory paragraphs (roughly 200–300 characters), while much of the service process copy repeats across pages. | Write concise unique metadata. Retain useful content; shorten repeated generic process copy and prioritise service-specific deliverables and questions. There is no automatic duplicate-content penalty asserted here. |
| Medium | No JSON-LD found in the eight fetched pages. | Add accurate Organization/WebSite and relevant Service/BreadcrumbList markup matching visible information. This is an enhancement, not an indexing prerequisite or rich-result guarantee. |
| Medium | About explains two specialisms but does not name the people or provide concrete supporting credentials in fetched text. | Add owner-confirmed team names/roles and practical experience; no invented accreditations, addresses, awards or experience claims. |
| Medium | Homepage, About, services overview and SEO page have no OG image metadata in fetched HTML. | Add an appropriate owned brand share image; improve social previews without calling this a direct ranking fix. |
| Pass | All eight sitemap pages return 200, each has a matching canonical; robots.txt allows crawling and links the sitemap. No noindex found in inspected metadata/headers. | Preserve and retest after edits. This does not prove Google has indexed them. |
| Pass | HTTP/apex requests resolve to HTTPS www; nonexistent page returns 404. | Preserve canonical-host behaviour; check redirect status chains in final QA. |
| Pass | Main page content and service FAQs are present in fetched HTML, rather than only canvas graphics. Project preview images have descriptive alternatives. | Preserve server-rendered text and crawlable real links; do not move essential service information exclusively into animation. |

## Latest agreed service structure: exactly six

Keep this order consistently across cards, overview, service navigation, related services and enquiry choices. Existing stored form values must remain accepted/mapped so submissions do not break.

| Service label | Route | Coverage and boundaries |
|---|---|---|
| Website & App Design | `/services/digital-ecommerce` (retain) | Premium website design/development, e-commerce, app UX/prototypes and development for iOS, Android and Windows; web apps, portals and dashboards where scoped. Explain platform-specific delivery and launch support; never promise app-store approval. Link to branding for logos/guidelines. |
| Branding & Content Creation | `/services/organic-growth-content` (retain) | Logos, visual identity, brand guidelines, website copy, social content and campaign creative. Preserve the existing restriction: no in-person video production. Posting/community management only where actually scoped. |
| Paid Advertising & Campaigns | `/services/paid-growth` (retain) | Existing supported Google, Meta and TikTok advertising, campaign planning/creative, landing pages, tracking and optimisation. Explain scope and measurement; no guaranteed ROAS/leads. |
| SEO & AI Search Visibility | `/services/search-visibility` (retain) | Technical, local, on-page and e-commerce SEO, audits, useful content and AI-search foundations. Explain AEO/GEO in plain English. Distinguish organic discovery from paid campaigns and avoid promises of AI citations or rankings. |
| AI & Business Automation | `/services/ai-automation-crm` (retain for compatibility) | AI integrations, workflow automation, data connections, dashboards and human review. Move primary CRM setup/pipeline explanation to EPOS & CRM; cross-link where workflows integrate. Do not change the existing URL simply because its slug still contains CRM. |
| EPOS & CRM Systems | `/services/epos-crm` (new) | EPOS means electronic point of sale. Explain point-of-sale and customer relationship systems, requirements planning, agreed setup/customisation, sales/customer records and workflow connections. Owner confirmed EPOS/CRM as offerings but has not specified hardware supply, providers, payment processing, offline modes, inventory features or integrations. Do not invent any of these. Clarify supported deliverables before making specific claims. |

All six need substantive visible service explanations and useful enquiry routes. The new page should follow the existing service template. No Knowledge Centre, no extra top-level services and no automatically generated city/platform pages. Preserve the earlier condensed first-service benefits: three objective labels then four short benefits without paragraphs. The concise display name above overrides earlier `Premium Websites & Apps`; premium positioning remains in body copy. Portfolio heading `Premium Websites` remains accurate and unchanged.

## Page-by-page search intent and proposed metadata

These are editorial targets, not measured keyword-volume claims. Write naturally rather than repeating keyword variants. Titles/descriptions are suggestions to review in the rendered context, not character-count ranking rules.

| URL | Proposed title | Proposed meta description |
|---|---|---|
| `/` | Website Design, Apps & Digital Marketing · Pecunia Studios | Websites, apps, branding, advertising, SEO, automation and EPOS & CRM systems. Talk to Pecunia Studios about your next business or personal project. |
| `/services` | Web, App & Marketing Services · Pecunia Studios | Explore six services spanning websites and apps, branding and content, advertising, SEO, AI automation, and EPOS & CRM systems. |
| `/about` | About Our Design & Marketing Team · Pecunia Studios | Meet Pecunia Studios and learn how our marketing and technology specialists approach website, app and business growth projects. |
| `/services/digital-ecommerce` | Website Design & App Development · Pecunia Studios | Premium websites, e-commerce and apps for iOS, Android and Windows. Plan your design, development and integrations with Pecunia Studios. |
| `/services/organic-growth-content` | Branding, Logo Design & Content · Pecunia Studios | Build a consistent identity with logo design, brand guidelines, website copy and social content shaped around your audience. |
| `/services/paid-growth` | Paid Advertising & Campaign Management · Pecunia Studios | Plan and improve Google, Meta and TikTok advertising with campaign creative, landing pages, tracking and ongoing optimisation. |
| `/services/search-visibility` | SEO & AI Search Visibility · Pecunia Studios | Technical, local and on-page SEO, e-commerce optimisation and clear content that helps people and search systems understand your business. |
| `/services/ai-automation-crm` | AI Integration & Business Automation · Pecunia Studios | Connect tools and reduce repeated work with practical AI integrations, workflow automation and dashboards built around your operations. |
| `/services/epos-crm` | EPOS & CRM Systems · Pecunia Studios | Plan EPOS and CRM systems around your sales, customers and daily operations. Discuss your requirements and the right setup for your business. |

Suggested homepage stable H1: `Website design, app development and digital marketing.`
Suggested short supporting introduction: `We help businesses, founders and individuals bring digital projects to life—from websites, apps and branding to advertising, SEO and connected business systems.`
Keep the existing approved animated copy as supporting visual text; no full hero redesign needed for this SEO change.

For each service, describe who it suits, what can be delivered, the process, scope boundaries and the next step. Add specific FAQs about brief requirements, platform choice, existing systems and ongoing support, with honest scope-dependent answers. Link website/app work to real portfolio examples without pretending website examples prove mobile-app delivery. Refer to exact confirmed project contributions, not invented commercial results.

## Competitor review

- Xsaite (https://xsaite.co.uk/), public HTML fetched 23 Oct: explicit labels Premium Websites, Brand Identity, Content Creation, Advertising and Search Visibility, plus cinematic/media offerings; linked service pages include premium-websites, brand-identity and search-visibility. Useful pattern: concise service labels with deeper pages and examples. Do not copy its text, Bedford location, awards, media/drone services or client claims.
- Make (https://makeagency.co.uk/): groups expertise into Social Media, Growth Marketing, Web design & development, Creative Studio and AI Services. Useful pattern: a short navigable set of categories supported by specific disciplines. Do not adopt its outcome guarantees.
- Nucleus (https://www.nucleus.co.uk/): clearly connects branding and digital work, including websites and apps. Useful pattern: name brand identity as a real deliverable, rather than hiding logos in vague growth wording.
- ORIGIN (https://originagency.uk/): names branding, websites, ads, content/social, CRM/workflows and apps/SaaS in buyer-facing language. Useful pattern: make each kind of commission understandable and explain that customers can commission one service. This is public positioning evidence, not proof of competitor SEO performance.

Pecunia's proposed six categories reflect its own confirmed work, especially EPOS and CRM. They are not a clone of another agency's catalogue. No keyword volume or competitor ranking comparison was available.

## Technical implementation and acceptance checks

1. Preserve existing canonical routes and their links. Add only the new EPOS/CRM service route and sitemap entry. All nine intended content pages return 200; unknown routes remain real 404s. Removed Knowledge Centre stays removed.
2. Ensure each page has a unique meaningful title/description, self-canonical, readable headings and a clear main topic. Check fetched HTML before JS as well as rendered output. Avoid title-template double branding.
3. Add crawlable service links in the overview/footer and contextual cross-links. Update all six names in booking UI, validation mappings, confirmation content and any mail payload labels. Never rename persistence keys blindly.
4. Add accurate JSON-LD with one consistent business identity. Use real supplied name, URL, logo and verified social profiles only. Confirm local business location/eligibility before LocalBusiness or local targeting. No unapproved reviews, aggregate ratings or invented schema properties. Service markup does not guarantee a Google rich result. Visible FAQs are useful without promising FAQ rich results.
5. Measure mobile/desktop performance with Lighthouse/PageSpeed and report actual measurements separately from estimates. Check LCP, INP and CLS where field data exists. Targets: LCP <=2.5s, INP <=200ms, CLS <=0.1; lack of field data is not a pass. Verify responsive image `sizes`, reserved aspect ratios and font loading. Missing HTML width/height on fill images alone does not establish layout shift; inspect the container.
6. Keep slower animation, pauses, reduced-motion and offscreen cleanup from the earlier brief. Avoid scroll traps and clipped content. Test 375px, 870px, 1191x668 and 1440px layouts in both themes. Check readable text contrast for #23FA6C on light backgrounds and use dark text on bright green controls without replacing the agreed brand colour.
7. Test metadata/share-image URLs and internal links. Run type/lint/build checks and form tests without production emails. No automatic submit of live forms during auditing.
8. Search Console verification, sitemap submission, URL Inspection, Bing Webmaster Tools and real enquiry tracking are follow-up account actions requiring the relevant access. Do not claim they have been done. Measure qualified enquiry completions, not just button clicks, and avoid sending names/emails/project details into analytics.
9. No automatic DNS, hosting, consent, analytics-account or live-site changes. Show the complete local website and a concise audit/change log before separate publish approval.

## Local search and measurement limits

Do not infer Pecunia's city from Xsaite's Bedford location or a UK domain. Ask the owner for genuine operating/service locations before local-page or Business Profile changes. Avoid near-identical town pages. Do not infer UK-wide delivery unless confirmed. There is no universal SEO compliance certificate and no guarantee of rankings or leads. This batch improves technical eligibility, relevance and the path to enquiry; Search Console and ongoing performance data are needed to judge results.

## Five Cursor agents: additional ownership

Retain five TOTAL agents and existing roles. Agent 4 owns service copy, SEO content and this six-service catalogue; agent 5 owns integration/metadata/schema/sitemap QA and coordinates shared files. Agent 3 owns enquiry-option/schema compatibility. Agents 1/2 preserve readable static hero meaning and accessible performance while implementing their existing motion/preview work. Agree file ownership before edits; do not independently overwrite the shared catalogue.

## Primary guidance consulted

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/fundamentals/get-started-developers
- https://developers.google.com/search/docs/appearance/core-web-vitals
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

Google's guidance favours useful original content, understandable titles, accessible text and sound technical foundations. AI-search visibility builds on these foundations rather than requiring special promises or keyword stuffing.
