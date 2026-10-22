/**
 * Approved Growth Stack (five services).
 *
 * Source of truth: the 22 October 2026 implementation guide, then
 * design-source/service-page-data.json and
 * design-source/search-visibility-data.json. Supporting draft copy for
 * Premium Website Design, Paid Growth, Organic Growth & Content and
 * AI, Automation & CRM comes from implementation-reference/work/service-expansion.json,
 * reconciled with the approved introductions already on this file.
 *
 * Single source of truth for the homepage service panels, `/services` index
 * and `/services/[slug]` pages. Do not duplicate copy elsewhere. Do NOT merge
 * into or duplicate `src/data/services.ts`.
 *
 * The first route keeps the `digital-ecommerce` slug for URL compatibility;
 * its public-facing label is "Premium Website Design".
 *
 * Search Visibility is not added to the enquiry dropdown. Contact.tsx and
 * contact-schema.ts are protected and must keep their current options.
 */

import { SEARCH_VISIBILITY_PAGE } from "@/data/search-visibility";

export type GrowthSystemSlug =
  | "digital-ecommerce"
  | "paid-growth"
  | "organic-growth-content"
  | "ai-automation-crm"
  | "search-visibility";

export type GrowthImageKey = "studio" | "city" | "sunset";

export type GrowthFaq = {
  question: string;
  answer: readonly string[];
};

export type GrowthDetail = {
  title: string;
  body: string;
};

export type GrowthSystem = {
  slug: GrowthSystemSlug;
  /** Display number, e.g. "01". */
  number: string;
  /** Public-facing service group name. */
  name: string;
  /** Legacy "NN — Name" title, kept for existing consumers. */
  title: string;
  /** Short strap line (larger opening description). */
  description: string;
  body: readonly string[];
  closing?: string;
  whatWeDo: readonly string[];
  /** Capabilities highlighted on the homepage panel (first group only). */
  highlights?: readonly string[];
  /** Explained deliverables for the service page. Titles match whatWeDo. */
  deliverables: readonly GrowthDetail[];
  /** Service-specific reasons, shown with the approved closing line. */
  benefits: readonly GrowthDetail[];
  /** Service-specific process, in addition to the shared approach. */
  steps: readonly GrowthDetail[];
  faqs: readonly GrowthFaq[];
  /** Short "Read more about …" link label for the homepage panel. */
  readMore: string;
  /** Photograph used by the homepage panel and the service page hero. */
  image?: GrowthImageKey;
  /** CSS object-position for the panel/hero crop. */
  imagePosition?: string;
  /** Typographic artwork when the service has no photograph. */
  graphic?: "search";
  /** Accessible description of the illustrative service imagery. */
  artLabel: string;
};

export const GROWTH_STACK_KICKER = "Our Services";

export const GROWTH_STACK_HEADING = "Our Services — The Growth Stack";

export const GROWTH_STACK_INTRO =
  "Five connected services. One growth system.";

export const GROWTH_CONNECTED =
  "Pecunia brings strategy, technology, acquisition, conversion, creative and automation together.";

export const GROWTH_CONTACT =
  "Tell us where you are, where you want to go and what's currently standing in the way. We'll identify the opportunities, build the strategy and show you what it would take to get there.";

export const growthStack: readonly GrowthSystem[] = [
  {
    slug: "digital-ecommerce",
    number: "01",
    name: "Premium Website Design",
    title: "01 — Premium Website Design",
    description: "Digital infrastructure built to convert.",
    body: [
      "Your website should do more than look good. It should communicate your value, remove friction and turn interest into action. We design and build digital experiences around how your customers actually discover, evaluate and buy.",
    ],
    closing:
      "From high-converting websites to scalable e-commerce platforms, we build digital infrastructure designed around performance.",
    whatWeDo: [
      "Premium Website Design",
      "Custom AI Integration",
      "Custom Dashboards",
      "Custom Development",
      "Shopify & E-commerce Builds",
      "Product & Website Optimisation",
    ],
    highlights: [
      "Premium Website Design",
      "Custom AI Integration",
      "Custom Dashboards",
    ],
    readMore: "Read more about premium websites",
    image: "studio",
    imagePosition: "50% 60%",
    artLabel: "Illustrative premium website design studio",
    deliverables: [
      {
        title: "Premium Website Design",
        body: "Brand-led layouts, clear messaging and responsive pages shaped around your audience. Thoughtful motion and interaction help explain your offer and guide visitors towards the next step.",
      },
      {
        title: "Custom AI Integration",
        body: "Connect suitable AI tools to your website or internal workflows, from knowledge-based assistants to content and information processing. We define the use case, review the data and build in human oversight where needed.",
      },
      {
        title: "Custom Dashboards",
        body: "Bring relevant business data into one usable interface. We build views, filters and reporting around the decisions your team needs to make, with access suited to each user.",
      },
      {
        title: "Custom Development",
        body: "Bespoke functionality such as portals, forms, booking journeys and API connections. The technical approach follows the problem, the tools you already use and the agreed scope.",
      },
      {
        title: "Shopify & E-commerce Builds",
        body: "Storefront design, product structure and customer journeys that help people find, evaluate and buy. Payment, fulfilment and third-party connections are scoped around your operation.",
      },
      {
        title: "Product & Website Optimisation",
        body: "Review page structure, accessibility, performance and conversion friction. Improve what matters through prioritised changes and measurement rather than adding features without a clear purpose.",
      },
    ],
    benefits: [
      {
        title: "A clear route to action",
        body: "Give visitors the information and confidence to enquire, book or buy, with fewer confusing steps.",
      },
      {
        title: "Built around your operation",
        body: "Connect the public-facing website to the AI tools, dashboards and workflows your team needs.",
      },
      {
        title: "Quality beyond the visuals",
        body: "Responsive layouts, accessible interaction and performance checks form part of the technical build.",
      },
      {
        title: "Room to develop",
        body: "A documented structure makes future pages, features and integrations easier to plan.",
      },
    ],
    steps: [
      {
        title: "Discover & scope",
        body: "Map your audience, goals, existing systems and required features. Agree what the website or software needs to achieve.",
      },
      {
        title: "Design & prototype",
        body: "Review the structure, visual direction and key interactions before committing to the full build.",
      },
      {
        title: "Build & connect",
        body: "Develop the pages and agreed functionality, connect relevant services and test the main user journeys.",
      },
      {
        title: "Launch & hand over",
        body: "Check the release, explain how to manage the system and agree any ongoing support or improvement work.",
      },
    ],
    faqs: [
      {
        question: "What is included in a premium website project?",
        answer: [
          "The scope can cover discovery, page structure, visual design, responsive development, agreed integrations and launch checks. We confirm the pages, functionality, content responsibilities and handover before the project starts. AI integrations, dashboards and e-commerce can be included where they support the brief.",
        ],
      },
      {
        question:
          "Can you build an AI integration or dashboard without rebuilding our website?",
        answer: [
          "Yes. We can scope a standalone integration or internal dashboard alongside your existing tools. We first review access, APIs, data quality and technical constraints to establish what is practical.",
        ],
      },
      {
        question: "How much will it cost and how long will it take?",
        answer: [
          "That depends on the number of pages, design requirements, integrations and content readiness. We provide a project-specific scope, quote and delivery plan after discovery. External software, hosting and maintenance requirements are identified as part of that discussion.",
        ],
      },
      {
        question: "Will the website work on mobile and be ready for search?",
        answer: [
          "Responsive layouts, clear page structure, relevant metadata and performance checks are considered during the build. Search visibility also depends on content, competition and ongoing work; a new website does not guarantee rankings.",
        ],
      },
      {
        question: "Can we update the website after launch?",
        answer: [
          "We can include an appropriate content management setup for the pages you need to edit. Access, documentation and handover are agreed in the scope, together with any maintenance, hosting or future development support.",
        ],
      },
    ],
  },
  {
    slug: "paid-growth",
    number: "02",
    name: "Paid Growth",
    title: "02 — Paid Growth",
    description: "Put your offer in front of the right people.",
    body: [
      "Paid media isn't about spending more. It's about understanding who to reach, what to say, where to send them and how to turn attention into action. We build, launch and optimise acquisition campaigns around your audience, offer and commercial objectives.",
    ],
    closing: "Every campaign has a purpose. Acquire. Convert. Learn. Improve. Scale.",
    whatWeDo: [
      "Google Ads",
      "Meta Ads",
      "TikTok Ads",
      "Campaign Strategy",
      "Paid Ad Creative",
      "Performance Optimisation",
    ],
    readMore: "Read more about paid growth",
    image: "city",
    imagePosition: "50% 50%",
    artLabel: "Illustrative paid campaign and creative system",
    deliverables: [
      {
        title: "Google Ads",
        body: "Reach relevant search demand with campaign structure, keyword research, ad copy and landing-page alignment. Account setup and tracking are reviewed before launch.",
      },
      {
        title: "Meta Ads",
        body: "Develop Facebook and Instagram campaigns around your offer, audience and creative. Test messages and formats, then refine activity using the available performance data.",
      },
      {
        title: "TikTok Ads",
        body: "Plan platform-appropriate advertising and creative tests where TikTok fits your audience. The channel choice follows the brief rather than an assumption that every business needs every platform.",
      },
      {
        title: "Campaign Strategy",
        body: "Define the commercial objective, target audience, offer, budget allocation and measurement approach before spending begins.",
      },
      {
        title: "Paid Ad Creative",
        body: "Create and adapt campaign visuals, copy and variations for testing. Agree the required assets and approvals so the creative remains consistent with your brand.",
      },
      {
        title: "Performance Optimisation",
        body: "Review delivery, conversion signals and landing-page behaviour. Prioritise practical changes to creative, targeting, spend and customer journeys.",
      },
    ],
    benefits: [
      {
        title: "Spend with a purpose",
        body: "Connect campaign decisions to enquiries, purchases or another clearly defined business objective.",
      },
      {
        title: "A joined-up journey",
        body: "Align what people see in an advert with the page they visit and the follow-up they receive.",
      },
      {
        title: "Learn from real signals",
        body: "Use reliable tracking and meaningful conversion events to inform decisions, where technically available.",
      },
      {
        title: "Improve before scaling",
        body: "Test the assumptions behind a campaign before committing more budget.",
      },
    ],
    steps: [
      {
        title: "Audit & agree objectives",
        body: "Review the offer, account history, audience and conversion journey. Establish the target outcome and budget.",
      },
      {
        title: "Prepare & build",
        body: "Plan campaigns, develop creative and review landing pages, tracking and approval requirements.",
      },
      {
        title: "Launch & learn",
        body: "Monitor delivery and collect initial signals while checking that the customer journey works as intended.",
      },
      {
        title: "Optimise & report",
        body: "Explain what the data shows, test improvements and recommend the next allocation of effort and spend.",
      },
    ],
    faqs: [
      {
        question: "Which advertising platform should we use?",
        answer: [
          "We choose channels around your audience, offer, demand and budget. Google can capture existing search intent, while Meta and TikTok can introduce an offer through suitable creative. You do not need to use every platform.",
        ],
      },
      {
        question: "Is advertising spend included in your fee?",
        answer: [
          "Campaign management and media spend are scoped separately. The proposal explains the service fee, recommended advertising budget and any additional creative or software costs before work begins.",
        ],
      },
      {
        question: "Do you create the adverts and landing pages?",
        answer: [
          "We can scope ad copy, digital creative and landing-page work alongside campaign management. We agree the asset list and approvals first. In-person filming is not part of our service.",
        ],
      },
      {
        question: "How will we know whether the campaigns are working?",
        answer: [
          "We agree useful conversion measures and review the tracking available across the advertising platform, website and CRM. Reporting should connect activity to the commercial objective and explain any gaps or attribution limits.",
        ],
      },
      {
        question: "Can you guarantee leads or a particular return?",
        answer: [
          "No fixed result is guaranteed. Performance depends on the offer, market, competition, budget and conversion journey. We focus on clear measurement, testing and accountable recommendations rather than promised numbers.",
        ],
      },
    ],
  },
  {
    slug: "organic-growth-content",
    number: "03",
    name: "Organic Growth & Content",
    title: "03 — Organic Growth & Content",
    description: "Build demand that compounds.",
    body: [
      "The strongest brands don't rely on one channel. We create organic growth strategies that increase visibility, authority and demand while building assets that continue working long after they are published.",
    ],
    closing:
      "We don't create content to fill a calendar. We create content designed to capture attention, build trust and move customers closer to a decision.",
    whatWeDo: [
      "SEO",
      "Content Strategy",
      "Social Media Content",
      "Content Creation",
      "Content Production",
      "Product Optimisation",
      "Organic Growth Strategy",
      "Brand Content",
    ],
    readMore: "Read more about organic growth & content",
    image: "sunset",
    imagePosition: "50% 40%",
    artLabel: "Illustrative digital content and creative system",
    deliverables: [
      {
        title: "SEO",
        body: "Review search intent, page content and technical issues, then prioritise improvements that help customers and search engines understand your offer.",
      },
      {
        title: "Content Strategy",
        body: "Define audiences, topics, messages and formats with a purpose. Build a practical plan around what people need to know before making a decision.",
      },
      {
        title: "Social Media Content",
        body: "Develop platform-appropriate copy, visual assets and content themes. Agree the channels, asset volume and approval process within the scope.",
      },
      {
        title: "Content Creation",
        body: "Use suitable AI tools to develop digital imagery, concepts and content variations. Review outputs for brand fit, quality and factual accuracy before publication.",
      },
      {
        title: "Content Production",
        body: "Turn agreed ideas into digital assets, from written content to graphics and AI-assisted visuals. Deliverables and formats are defined before production.",
      },
      {
        title: "Product Optimisation",
        body: "Improve product descriptions, structure and supporting content so customers can understand the offer and compare their options.",
      },
      {
        title: "Organic Growth Strategy",
        body: "Connect search and content activity to your audience and commercial priorities. Identify where consistent work can build useful visibility over time.",
      },
      {
        title: "Brand Content",
        body: "Create a consistent voice and visual direction across digital touchpoints, helping people recognise and understand your business.",
      },
    ],
    benefits: [
      {
        title: "Be easier to discover",
        body: "Build useful pages and content around the questions your audience actually asks.",
      },
      {
        title: "Explain your value",
        body: "Replace vague messaging with clear information that helps people evaluate your offer.",
      },
      {
        title: "Create with consistency",
        body: "Use a shared direction for search, social and brand content instead of disconnected posts.",
      },
      {
        title: "Build reusable assets",
        body: "Plan content that can be adapted across relevant channels and stages of the customer journey.",
      },
    ],
    steps: [
      {
        title: "Research & audit",
        body: "Review the audience, existing content, search opportunities and brand direction.",
      },
      {
        title: "Plan the content",
        body: "Agree priorities, formats, responsibilities and a realistic publishing or delivery schedule.",
      },
      {
        title: "Create & review",
        body: "Produce the agreed assets and review messaging, accuracy and visual consistency before release.",
      },
      {
        title: "Measure & refine",
        body: "Review relevant engagement, search and conversion signals, then adjust the plan around what is useful.",
      },
    ],
    faqs: [
      {
        question: "What types of content can you create?",
        answer: [
          "We scope written website content, social copy, digital graphics, brand assets and AI-assisted imagery or video. The proposal sets out the exact formats and quantities.",
          "Pecunia Studios does not provide in-person video creation. Our services include Content Creation, Social Media Content, Content Strategy and Brand Content.",
        ],
      },
      {
        question: "Do you use AI for every piece of content?",
        answer: [
          "No. The method follows the brief. AI tools can support ideation and asset creation where useful, while messaging, selection and quality review remain deliberate parts of the process. We agree any restrictions before production.",
        ],
      },
      {
        question: "How long does organic growth take?",
        answer: [
          "There is no universal timetable. Your starting position, competition, content quality and publishing consistency all matter. We agree priorities and milestones, then review progress without promising a fixed ranking or traffic increase.",
        ],
      },
      {
        question: "Can you work with our existing brand and content?",
        answer: [
          "Yes. We can use your existing guidelines and assets, review what is already working and identify the gaps. If the direction needs refinement, that can be scoped before new content is produced.",
        ],
      },
      {
        question: "Does the service include posting and ongoing management?",
        answer: [
          "Content creation, scheduling, publishing and community management are different responsibilities. We make the included tasks and approval process explicit in the scope so your team knows what it needs to handle.",
        ],
      },
    ],
  },
  {
    slug: "ai-automation-crm",
    number: "04",
    name: "AI, Automation & CRM",
    title: "04 — AI, Automation & CRM",
    description: "Turn manual processes into growth infrastructure.",
    body: [
      "The businesses that scale efficiently aren't necessarily doing more. They're building systems that allow them to achieve more with less friction. We connect your marketing, sales and operations through intelligent technology and automation.",
      "From the first interaction to the final conversion, we identify where time, leads and opportunities are being lost. Then we build the systems to capture them.",
    ],
    closing: "Less manual work. More control. More opportunities captured.",
    whatWeDo: [
      "AI Automation",
      "Lead Management",
      "CRM Systems",
      "Workflow Automation",
      "Data & Integrations",
      "Lead Capture",
      "Lead Qualification",
    ],
    readMore: "Read more about AI, automation & CRM",
    image: "studio",
    imagePosition: "50% 45%",
    artLabel: "Illustrative connected automation and CRM system",
    deliverables: [
      {
        title: "AI Automation",
        body: "Introduce AI where it can support a defined task such as classifying enquiries, summarising information or assisting with knowledge retrieval. Review outputs, limits and human approval requirements.",
      },
      {
        title: "Lead Management",
        body: "Create a clear path from the first enquiry to the next action, with ownership, status and follow-up steps that suit your team.",
      },
      {
        title: "CRM Systems",
        body: "Scope CRM configuration, pipelines and contact records around your sales process. Agree the required fields, access and reporting rather than collecting data without a purpose.",
      },
      {
        title: "Workflow Automation",
        body: "Connect repeated steps such as notifications, task creation and handovers. Define triggers, exceptions and failure handling before switching a workflow on.",
      },
      {
        title: "Data & Integrations",
        body: "Connect compatible systems through APIs or appropriate integration tools. Review permissions, data mapping and technical constraints, including any need for a custom dashboard.",
      },
      {
        title: "Lead Capture",
        body: "Connect forms and relevant entry points to a usable lead record. Validate information and route enquiries to the right place.",
      },
      {
        title: "Lead Qualification",
        body: "Agree useful qualification criteria and routing rules so the team can prioritise follow-up. Keep important decisions reviewable by a person.",
      },
    ],
    benefits: [
      {
        title: "Less repeated admin",
        body: "Move routine information between systems without asking people to re-enter it at every stage.",
      },
      {
        title: "Clearer follow-up",
        body: "Make responsibility and the next action visible when an enquiry arrives.",
      },
      {
        title: "Better operational visibility",
        body: "Use consistent records and relevant reporting to see where work or opportunities are getting stuck.",
      },
      {
        title: "People stay in control",
        body: "Build review points, permissions and exception handling into workflows that need oversight.",
      },
    ],
    steps: [
      {
        title: "Map the workflow",
        body: "Identify the repeated task, current tools, data and points where time or opportunities are lost.",
      },
      {
        title: "Design the connection",
        body: "Agree triggers, actions, permissions and human review, then check integration feasibility.",
      },
      {
        title: "Build & test",
        body: "Test realistic records and failure cases before releasing the workflow to the people who use it.",
      },
      {
        title: "Document & improve",
        body: "Provide a clear handover and agree monitoring, maintenance and future adjustments.",
      },
    ],
    faqs: [
      {
        question: "Can you connect the tools we already use?",
        answer: [
          "Often, yes, where suitable APIs, integrations and permissions are available. We audit the systems first and explain any restrictions, subscription requirements or custom development needed before promising a connection.",
        ],
      },
      {
        question: "What is the difference between automation and AI?",
        answer: [
          "Automation follows defined triggers and rules. AI can help interpret or generate information where a fixed rule is insufficient. Many useful workflows need only straightforward automation; we choose the approach around the task.",
        ],
      },
      {
        question: "How do you handle access and business data?",
        answer: [
          "We agree which data is needed, where it will be processed and who should have access. Credentials should be handled securely and permissions kept appropriate to the task. Provider terms, retention and sensitive data requirements need review during scoping.",
        ],
      },
      {
        question: "Can AI respond to customers without our approval?",
        answer: [
          "That depends on the agreed use case and risk. We can design draft-only responses, human approval or narrowly defined automated replies. Uncertain cases should be routed to a person rather than allowing an unrestricted system to make commitments.",
        ],
      },
      {
        question: "What happens if a workflow fails or a tool changes?",
        answer: [
          "We agree error notifications, fallback steps and the level of monitoring required. Ongoing support and third-party software costs are scoped separately, since APIs, subscriptions and business processes can change after launch.",
        ],
      },
    ],
  },
  {
    slug: "search-visibility",
    number: SEARCH_VISIBILITY_PAGE.number,
    name: SEARCH_VISIBILITY_PAGE.name,
    title: `${SEARCH_VISIBILITY_PAGE.number} — ${SEARCH_VISIBILITY_PAGE.name}`,
    description: SEARCH_VISIBILITY_PAGE.description,
    body: SEARCH_VISIBILITY_PAGE.body,
    closing: SEARCH_VISIBILITY_PAGE.closing,
    whatWeDo: SEARCH_VISIBILITY_PAGE.deliverables.map((item) => item.title),
    readMore: "Read more about search visibility & SEO",
    graphic: "search",
    artLabel: SEARCH_VISIBILITY_PAGE.artLabel,
    deliverables: SEARCH_VISIBILITY_PAGE.deliverables,
    benefits: SEARCH_VISIBILITY_PAGE.benefits,
    steps: SEARCH_VISIBILITY_PAGE.steps,
    faqs: SEARCH_VISIBILITY_PAGE.faqs,
  },
];

/** Shared "Why it matters" principles on the original service pages. */
export const SERVICE_PRINCIPLES = [
  "Clear commercial objectives",
  "Defined KPIs",
  "Transparent reporting",
] as const;

export function getServiceFaqs(system: GrowthSystem): readonly GrowthFaq[] {
  return system.faqs;
}

export function getGrowthSystem(slug: string): GrowthSystem | undefined {
  return growthStack.find((system) => system.slug === slug);
}

export function servicePath(slug: GrowthSystemSlug) {
  return `/services/${slug}`;
}

const TITLE_SEPARATOR = " — ";

export function splitGrowthSystemTitle(title: string): {
  code: string;
  name: string;
} {
  const at = title.indexOf(TITLE_SEPARATOR);
  if (at === -1) {
    return { code: title, name: title };
  }
  return {
    code: title.slice(0, at),
    name: title.slice(at + TITLE_SEPARATOR.length),
  };
}
