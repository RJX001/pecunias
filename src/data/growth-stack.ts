/**
 * Growth Stack — six public services, in approved order.
 *
 * Visible names come from docs/batch-2026-10-23-seo-six-services/.
 * seoTitle and seoDescription are for the lead's metadata pass.
 * Do not duplicate this copy into src/data/services.ts.
 *
 * Existing slugs stay in place, including ai-automation-crm.
 * epos-crm is the new Tailored EPOS & CRM Systems route.
 */

import { SEARCH_VISIBILITY_PAGE } from "@/data/search-visibility";

export type GrowthSystemSlug =
  | "digital-ecommerce"
  | "organic-growth-content"
  | "paid-growth"
  | "search-visibility"
  | "ai-automation-crm"
  | "epos-crm";

export type GrowthImageKey = "studio" | "city" | "sunset";

export type GrowthFaq = {
  question: string;
  answer: readonly string[];
  link?: {
    href: string;
    label: string;
  };
};

export type GrowthDetail = {
  title: string;
  body: string;
};

export type GrowthReference = {
  before: string;
  href: string;
  label: string;
  after: string;
};

export type GrowthSystem = {
  slug: GrowthSystemSlug;
  /** Display number, e.g. "01". */
  number: string;
  /** Public-facing service name. */
  name: string;
  /** Page title for the lead's metadata. Not the visible card heading. */
  seoTitle: string;
  /** Meta description for the lead's metadata. */
  seoDescription: string;
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
  /** Visible cross-links. Copy stays in `before` / `after`. */
  references?: readonly GrowthReference[];
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
  "Six services spanning websites and apps, branding, advertising, SEO, automation, and EPOS and CRM.";

export const GROWTH_CONNECTED =
  "A project can use one service or combine website, app, brand, advertising, search, automation and EPOS or CRM work.";

export const GROWTH_CONTACT =
  "Tell us where you are, where you want to go and what's currently standing in the way. We'll identify the opportunities, build the strategy and show you what it would take to get there.";

export const growthStack: readonly GrowthSystem[] = [
  {
    slug: "digital-ecommerce",
    number: "01",
    name: "Premium Website and App",
    seoTitle: "Website Design & App Development · Pecunia Studios",
    seoDescription:
      "Premium websites, e-commerce and apps for iOS, Android and Windows. Plan your design, development and integrations with Pecunia Studios.",
    title: "01 — Premium Website and App",
    description:
      "Premium websites, e-commerce and apps for iOS, Android and Windows.",
    body: [
      "We design and build premium websites and e-commerce, and we design and develop apps for iOS, Android and Windows. Web apps, portals and dashboards can be included when the scope needs them.",
      "App work can cover interface design, user journeys, prototypes and development for the platforms you agree. Preparing a build is not store approval. Apple, Google and Microsoft decide whether an app is accepted.",
    ],
    whatWeDo: [
      "Premium websites",
      "E-commerce",
      "App UX and prototypes",
      "iOS, Android and Windows apps",
      "Web apps, portals and dashboards",
      "Custom development",
    ],
    highlights: [
      "Premium websites and e-commerce",
      "Apps for iOS, Android and Windows",
      "Web apps, portals and dashboards",
    ],
    readMore: "Read more about websites and apps",
    image: "studio",
    imagePosition: "50% 60%",
    artLabel:
      "Illustrative studio photograph for website and app design. The Premium Websites examples elsewhere on this site are websites, not delivered apps.",
    references: [
      {
        before: "Logo design and brand guidelines are part of",
        href: "/services/organic-growth-content",
        label: "Bespoke Branding & Creative Content",
        after: ".",
      },
      {
        before:
          "The Premium Websites examples are website projects. They are not evidence of a delivered iOS, Android or Windows app.",
        href: "/#work",
        label: "View Premium Websites",
        after: ".",
      },
    ],
    deliverables: [
      {
        title: "Premium websites",
        body: "Page structure, messaging and responsive layouts shaped around the people who will use the site. Motion is used where it helps explain the offer, not as decoration for its own sake.",
      },
      {
        title: "E-commerce",
        body: "Storefront design, product structure and the journey from browsing to purchase. Shopify can be the build route where it fits. Payment, fulfilment and other connections are included only when they are agreed in the scope.",
      },
      {
        title: "App UX and prototypes",
        body: "Interface design, user journeys and prototypes so the main screens can be reviewed before a full build. The prototype shows the agreed flows. It is not a store listing.",
      },
      {
        title: "iOS, Android and Windows apps",
        body: "Development for the platforms named in the scope, with the differences between them explained in plain English. We can prepare a build and describe the launch steps we are responsible for. We do not promise App Store, Google Play or Microsoft Store approval.",
      },
      {
        title: "Web apps, portals and dashboards",
        body: "Logged-in web apps, portals and dashboards where the brief needs them, with access suited to the people who will use them. What the screen shows is agreed from the decisions your team needs to make.",
      },
      {
        title: "Custom development",
        body: "Forms, booking journeys and connections to tools you already use. The technical approach follows the problem, the access available and the agreed scope.",
      },
    ],
    benefits: [
      { title: "A clear route to action", body: "" },
      { title: "Built around your operation", body: "" },
      { title: "Quality beyond the visuals", body: "" },
      { title: "Room to develop", body: "" },
    ],
    steps: [
      {
        title: "Discover and scope",
        body: "Map the audience, goals, existing systems and the platforms in play: website, e-commerce, iOS, Android, Windows, or a web app. Agree what this project needs to include, and what it does not.",
      },
      {
        title: "Design and prototype",
        body: "Review the structure, visual direction and key journeys before the full build. For an app, that includes the main screens and the path through them.",
      },
      {
        title: "Build and connect",
        body: "Develop the pages or app screens and the functionality that was agreed. Connect the services that are in scope, and test the main journeys on the relevant devices.",
      },
      {
        title: "Launch and hand over",
        body: "Check the release we are responsible for, explain how to manage it and agree any further support. If an app needs a store listing, submission follows that platform's process. Approval is the platform's decision.",
      },
    ],
    faqs: [
      {
        question: "What is included in a website or app project?",
        answer: [
          "The scope can cover discovery, page or screen structure, visual design, development, agreed connections and launch checks. We confirm pages, platforms, functionality, content responsibilities and handover before the project starts. E-commerce, portals and dashboards are included only where the brief needs them.",
        ],
      },
      {
        question: "Which app platforms can you work on?",
        answer: [
          "iOS, Android and Windows, as agreed for the project. We explain what is specific to each platform, including what you need to provide for a developer account or store listing. We do not add other operating systems unless that is confirmed in the scope.",
        ],
      },
      {
        question: "Can you guarantee an app will be approved?",
        answer: [
          "No. We can design, build and prepare the agreed app, and we can support the submission steps that sit with us. Apple, Google and Microsoft review their own stores. A finished build is not an approval, and we do not promise a listing, a review time or a particular outcome.",
        ],
      },
      {
        question: "Do you design the logo as part of the website?",
        answer: [
          "No. Logos, visual identity and brand guidelines belong with Bespoke Branding & Creative Content. A website or app can use an identity you already have, or the two services can be scoped together. Logos are not the main offer of this service.",
        ],
        link: {
          href: "/services/organic-growth-content",
          label: "Bespoke Branding & Creative Content",
        },
      },
      {
        question: "How much will it cost and how long will it take?",
        answer: [
          "That depends on the pages or screens, the platforms, the design work, the connections and how ready the content is. We provide a project-specific scope and quote after discovery. We do not publish a standard price or a fixed timetable here.",
        ],
      },
    ],
  },
  {
    slug: "organic-growth-content",
    number: "02",
    name: "Bespoke Branding & Creative Content",
    seoTitle: "Branding, Logo Design & Content · Pecunia Studios",
    seoDescription:
      "Build a consistent identity with logo design, brand guidelines, website copy and social content shaped around your audience.",
    title: "02 — Bespoke Branding & Creative Content",
    description:
      "Logos, visual identity, brand guidelines and creative content.",
    body: [
      "We create logos, visual identity and brand guidelines, then apply that direction to website copy, social content and campaign creative.",
      "This is digital creative work. Pecunia Studios does not provide in-person video production. Posting and community management are included only when they are written into the scope.",
    ],
    closing:
      "The same identity can then run through the logo, the website copy, the social content and the campaign creative you commission.",
    whatWeDo: [
      "Logo design",
      "Visual identity",
      "Brand guidelines",
      "Website copy",
      "Social content",
      "Campaign creative",
    ],
    readMore: "Read more about branding and content",
    image: "sunset",
    imagePosition: "50% 40%",
    artLabel: "Illustrative scene for branding and creative content",
    references: [
      {
        before: "Design and development of the website or app sits with",
        href: "/services/digital-ecommerce",
        label: "Premium Website and App",
        after: ".",
      },
      {
        before: "Search work is covered separately under",
        href: "/services/search-visibility",
        label: "SEO & AI Search Visibility",
        after: ".",
      },
    ],
    deliverables: [
      {
        title: "Logo design",
        body: "A logo suited to the business, supplied in the file formats agreed for web and other digital use. The number of routes and revisions is set in the scope.",
      },
      {
        title: "Visual identity",
        body: "Colour, type, imagery and a way of applying them so the business is recognisable from one digital touchpoint to the next. We work from your audience and any materials you already have.",
      },
      {
        title: "Brand guidelines",
        body: "Practical rules for using the identity: clear space, colour, type and examples of what to avoid. The document is as long as the scope needs, not a fixed page count.",
      },
      {
        title: "Website copy",
        body: "Page copy that explains the offer in plain language, written for the audience and the pages in the brief. We agree who supplies facts, proof and approvals.",
      },
      {
        title: "Social content",
        body: "Copy, digital graphics and content themes for the channels named in the scope. Volume, formats and the approval route are agreed before production. Publishing is a separate task unless it is included.",
      },
      {
        title: "Campaign creative",
        body: "Digital creative for a campaign: concepts, graphics and copy variations that match the identity. Suitable AI tools can help draft options. A person reviews them for accuracy and brand fit before they are used. We do not film on location or in a studio.",
      },
    ],
    benefits: [
      {
        title: "A recognisable identity",
        body: "Logo, colour, type and imagery can be applied in the same way across the pieces you commission.",
      },
      {
        title: "Guidelines people can follow",
        body: "The identity is written down, so later pages and posts are not guessed from a single logo file.",
      },
      {
        title: "Copy that explains the offer",
        body: "Website and social writing stays with the facts you provide and the audience you are speaking to.",
      },
      {
        title: "Creative for the channels you use",
        body: "Social and campaign assets are made for the formats in the brief, rather than a generic pack.",
      },
    ],
    steps: [
      {
        title: "Understand the brief",
        body: "Review the business, the audience, any existing identity and the list of assets you need.",
      },
      {
        title: "Set the direction",
        body: "Agree the logo route, the visual rules and the messages before production starts in volume.",
      },
      {
        title: "Create and review",
        body: "Produce the agreed logos, guidelines, copy and creative. Check accuracy and consistency before files are issued.",
      },
      {
        title: "Hand over",
        body: "Supply the agreed files and explain how to use them. Further design, writing or posting is only included if the scope says so.",
      },
    ],
    faqs: [
      {
        question: "What do you need from us before you start?",
        answer: [
          "A short description of the business, who it is for, any logo or colours you already use, and the list of assets you want. If the facts are still being decided, we wait for them rather than inventing claims.",
        ],
      },
      {
        question: "Do you design logos and write brand guidelines?",
        answer: [
          "Yes. Logo design, visual identity and brand guidelines are the core of this service. The proposal lists the formats, the number of concepts and how many rounds of revision are included.",
        ],
      },
      {
        question: "Can you write website copy and social content?",
        answer: [
          "Yes, when it is in the scope. That can include page copy, social captions and campaign lines. We agree the pages, channels, quantity and who approves the wording.",
        ],
      },
      {
        question: "Do you produce video?",
        answer: [
          "We do not provide in-person video production. There is no location filming and no studio shoot. Digital graphics, written content and AI-assisted drafts can be included where the scope allows, and a person reviews them before use.",
        ],
      },
      {
        question: "Does the service include posting and community management?",
        answer: [
          "Only where that work is written into the scope. Creating an asset, scheduling it, publishing it and replying to comments are different tasks. The proposal says which of those are included.",
        ],
      },
    ],
  },
  {
    slug: "paid-growth",
    number: "03",
    name: "Strategic Advertising & Campaigns",
    seoTitle: "Paid Advertising & Campaign Management · Pecunia Studios",
    seoDescription:
      "Plan and improve Google, Meta and TikTok advertising with campaign creative, landing pages, tracking and ongoing optimisation.",
    title: "03 — Strategic Advertising & Campaigns",
    description: "Google, Meta and TikTok advertising, with a defined scope.",
    body: [
      "We plan, launch and refine advertising on Google, Meta and TikTok. The work can cover campaign structure, creative, landing pages, tracking and optimisation for an objective agreed before spend starts.",
      "We do not advertise on other platforms as part of this service. Results depend on the offer, the market, the budget and the page people reach. We do not guarantee a return on ad spend, a cost per lead or a set number of enquiries.",
    ],
    closing:
      "A campaign needs an agreed objective, a measurement plan and a record of what the platforms actually report.",
    whatWeDo: [
      "Google Ads",
      "Meta Ads",
      "TikTok Ads",
      "Campaign strategy",
      "Paid ad creative",
      "Landing pages and measurement",
    ],
    readMore: "Read more about strategic advertising",
    image: "city",
    imagePosition: "50% 50%",
    artLabel: "Illustrative city photograph used with the advertising service",
    deliverables: [
      {
        title: "Google Ads",
        body: "Search campaigns built around existing demand: structure, keyword research, ad copy and a check that the landing page matches the advert. Account access and tracking are reviewed before launch.",
      },
      {
        title: "Meta Ads",
        body: "Facebook and Instagram campaigns around the offer, audience and creative in the brief. Messages and formats can be tested, then changed using the data the ad platform actually provides.",
      },
      {
        title: "TikTok Ads",
        body: "TikTok advertising where that platform fits the audience. It is not assumed for every business. Creative tests stay within the asset list you approve.",
      },
      {
        title: "Campaign strategy",
        body: "The objective, audience, offer, budget split and measurement plan, written down before spend starts. The objective is something you can observe, such as an enquiry or a purchase, not a promised return.",
      },
      {
        title: "Paid ad creative",
        body: "Digital visuals, copy and variations for the three platforms. In-person filming is not part of this service. Assets and approvals are agreed so the adverts stay consistent with your brand.",
      },
      {
        title: "Landing pages and measurement",
        body: "A check that the page matches the advert, plus the conversion events it is practical to record. Reporting explains what the platforms show and where attribution is incomplete.",
      },
    ],
    benefits: [
      {
        title: "A defined objective",
        body: "Campaign decisions are tied to an enquiry, a purchase or another action you have named. The objective is a measure, not a promise of volume.",
      },
      {
        title: "A joined-up journey",
        body: "The advert, the page it opens and the follow-up you give are planned as one path.",
      },
      {
        title: "Measurement you can read",
        body: "Tracking is set up where the platforms and the site allow it, and the gaps are explained rather than filled in with assumptions.",
      },
      {
        title: "Changes before more spend",
        body: "Creative, targeting and the landing page are reviewed against the agreed objective before the budget is increased.",
      },
    ],
    steps: [
      {
        title: "Agree the objective",
        body: "Review the offer, any existing accounts, the audience and the page people will reach. Confirm the budget and what a useful result looks like.",
      },
      {
        title: "Prepare the campaigns",
        body: "Plan the Google, Meta or TikTok activity you are using, prepare creative and check landing pages, tracking and approvals.",
      },
      {
        title: "Launch and learn",
        body: "Start the agreed campaigns, confirm the journey works and collect the first usable signals. Early delivery is not treated as a final result.",
      },
      {
        title: "Optimise and report",
        body: "Explain what the data shows, test practical changes and recommend how to use the next period of spend. Recommendations are not guarantees.",
      },
    ],
    faqs: [
      {
        question: "Which advertising platforms do you use?",
        answer: [
          "Google, Meta and TikTok only. Google can meet existing search demand. Meta and TikTok can introduce an offer with creative. You do not need all three. Other ad platforms are outside this service.",
        ],
      },
      {
        question: "Is the advertising spend included in your fee?",
        answer: [
          "No. Campaign management and the media budget are separate. The proposal sets out the fee, the suggested advertising budget and any extra creative or software cost before work begins. We do not publish a standard price.",
        ],
      },
      {
        question: "Do you make the adverts and the landing pages?",
        answer: [
          "We can scope ad copy, digital creative and landing-page work with the campaign management. The asset list and approvals come first. In-person filming is not included.",
        ],
      },
      {
        question: "How will we know whether a campaign is working?",
        answer: [
          "We agree the conversion events that matter and review the tracking available in the ad platform and on the site. Reporting connects activity to that objective and states what cannot be attributed.",
        ],
      },
      {
        question: "Can you guarantee leads or a return on ad spend?",
        answer: [
          "No. We do not guarantee leads, a cost per result or a return on ad spend. Performance depends on the offer, the market, the competition, the budget and the page people land on. We focus on clear measurement and practical changes.",
        ],
      },
    ],
  },
  {
    slug: "search-visibility",
    number: SEARCH_VISIBILITY_PAGE.number,
    name: SEARCH_VISIBILITY_PAGE.name,
    seoTitle: "SEO & AI Search Visibility · Pecunia Studios",
    seoDescription:
      "Technical, local and on-page SEO, e-commerce optimisation and clear content that helps people and search systems understand your business.",
    title: `${SEARCH_VISIBILITY_PAGE.number} — ${SEARCH_VISIBILITY_PAGE.name}`,
    description: SEARCH_VISIBILITY_PAGE.description,
    body: SEARCH_VISIBILITY_PAGE.body,
    closing: SEARCH_VISIBILITY_PAGE.closing,
    whatWeDo: SEARCH_VISIBILITY_PAGE.deliverables.map((item) => item.title),
    readMore: "Read more about SEO and AI search",
    graphic: "search",
    artLabel: SEARCH_VISIBILITY_PAGE.artLabel,
    references: [
      {
        before:
          "Paid advertising on Google, Meta and TikTok is a separate service:",
        href: "/services/paid-growth",
        label: "Strategic Advertising & Campaigns",
        after: ".",
      },
    ],
    deliverables: SEARCH_VISIBILITY_PAGE.deliverables,
    benefits: SEARCH_VISIBILITY_PAGE.benefits,
    steps: SEARCH_VISIBILITY_PAGE.steps,
    faqs: SEARCH_VISIBILITY_PAGE.faqs,
  },
  {
    slug: "ai-automation-crm",
    number: "05",
    name: "Intelligent AI & Business Automation",
    seoTitle: "AI Integration & Business Automation · Pecunia Studios",
    seoDescription:
      "Connect tools and reduce repeated work with practical AI integrations, workflow automation and dashboards built around your operations.",
    title: "05 — Intelligent AI & Business Automation",
    description:
      "AI integrations, workflow automation, data connections and dashboards.",
    body: [
      "We connect the tools you already use and reduce repeated work with practical AI integrations, workflow automation, data connections and dashboards. A person reviews the output where the task needs judgement.",
      "We do not name a software provider here, and we do not assume one. What can be connected depends on the access, interfaces and permissions your current tools allow.",
    ],
    closing:
      "Repeated work can move through an agreed workflow, with a person still able to review the steps that need judgement.",
    whatWeDo: [
      "AI integrations",
      "Workflow automation",
      "Data connections",
      "Dashboards",
      "Human review",
    ],
    readMore: "Read more about AI and automation",
    image: "studio",
    imagePosition: "50% 45%",
    artLabel:
      "Illustrative studio photograph for AI integration and automation planning",
    references: [
      {
        before:
          "Customer records, sales pipelines and EPOS setup are explained on",
        href: "/services/epos-crm",
        label: "Tailored EPOS & CRM Systems",
        after: ".",
      },
    ],
    deliverables: [
      {
        title: "AI integrations",
        body: "AI is introduced for a defined task, such as sorting enquiries, summarising information or helping someone find a documented answer. We agree the limits of the tool and where a person has to check the result.",
      },
      {
        title: "Workflow automation",
        body: "Repeated steps, such as a notification, a task or a handover, can be connected with a trigger. Exceptions and what should happen if a step fails are defined before the workflow is switched on.",
      },
      {
        title: "Data connections",
        body: "Compatible systems can be connected through the interfaces they already offer. We review permissions, how fields map and any technical limit. The provider is the one you already use. We do not introduce a named platform as part of this description.",
      },
      {
        title: "Dashboards",
        body: "An agreed set of operational information can be brought into one view, with filters and access for the people who need them. The dashboard shows what the brief asks for. It is not a fixed pack of reports.",
      },
      {
        title: "Human review",
        body: "Where a workflow drafts a message, classifies an enquiry or moves data that could be wrong, a person on your team can check it. Uncertain cases are routed to someone rather than left to an unrestricted reply.",
      },
    ],
    benefits: [
      {
        title: "Less repeated admin",
        body: "Routine information can move between the tools in scope without being typed again at every step.",
      },
      {
        title: "A visible next step",
        body: "A workflow can show who needs to act when an agreed trigger happens, instead of leaving that in an inbox.",
      },
      {
        title: "Information in one view",
        body: "A dashboard can show the figures you asked to see. It only includes data the connected systems can actually provide.",
      },
      {
        title: "People stay in control",
        body: "Review points, permissions and exception handling are part of the design where a mistake would matter.",
      },
    ],
    steps: [
      {
        title: "Map the work",
        body: "Identify the repeated task, the tools involved, the data and the point where time is being lost.",
      },
      {
        title: "Design the connection",
        body: "Agree triggers, actions, permissions and where a person reviews the result. Check that the tools can actually connect before building.",
      },
      {
        title: "Build and test",
        body: "Test with realistic examples, including a failed step, before the people who rely on the workflow start using it.",
      },
      {
        title: "Hand over",
        body: "Explain how the workflow runs, what it will not do and how you will hear about a failure. Further changes are scoped separately.",
      },
    ],
    faqs: [
      {
        question: "Can you connect the tools we already use?",
        answer: [
          "Often, where those tools offer a usable interface and you can grant the right access. We look at that first. If a connection is not available, we say so rather than naming a replacement provider.",
        ],
      },
      {
        question: "What is the difference between automation and AI?",
        answer: [
          "Automation follows a trigger and a rule you can write down. AI is useful when the task needs the tool to read or draft something a fixed rule cannot handle. Many workflows need only the rule. We choose from the task, not from a preference for AI.",
        ],
      },
      {
        question: "How do you handle access to our data?",
        answer: [
          "We agree which data is needed, where it will be processed and who should have access. Permissions stay limited to the task. Provider terms, retention and any sensitive data need a review during scoping. We do not copy data into a tool that was not agreed.",
        ],
      },
      {
        question: "Can AI reply to customers without our approval?",
        answer: [
          "Only if you explicitly agree that a narrow, defined reply may be sent. Otherwise the workflow can draft a response for a person to approve, or pass the case to someone on your team. An unrestricted system should not make commitments on your behalf.",
        ],
      },
      {
        question: "Where do CRM, pipelines and EPOS fit?",
        answer: [
          "This service does not set up your CRM, sales pipeline or electronic point of sale. Those records and that setup are explained on the EPOS and CRM service. A workflow here can connect to them only when that connection is in both scopes.",
        ],
        link: {
          href: "/services/epos-crm",
          label: "Tailored EPOS & CRM Systems",
        },
      },
    ],
  },
  {
    slug: "epos-crm",
    number: "06",
    name: "Tailored EPOS & CRM Systems",
    seoTitle: "EPOS & CRM Systems · Pecunia Studios",
    seoDescription:
      "Plan EPOS and CRM systems around your sales, customers and daily operations. Discuss your requirements and the right setup for your business.",
    title: "06 — Tailored EPOS & CRM Systems",
    description: "EPOS and CRM setup agreed from your requirements.",
    body: [
      "EPOS means electronic point of sale: the system that records a sale. CRM means the customer relationship records that sit around those sales and enquiries. We plan both from how your business actually works, then carry out the setup and customisation we have agreed with you.",
      "Hardware supply, payment processing, an offline mode, inventory features, a named provider and particular integrations are not part of this service as it is described. We do not assume any of them. The specific capabilities are agreed from your requirements, and that list is confirmed before work starts.",
    ],
    closing:
      "The useful result is a setup both sides have agreed, with sales and customer records that match the work you described.",
    whatWeDo: [
      "Requirements planning",
      "Agreed EPOS setup",
      "CRM setup and customisation",
      "Sales and customer records",
      "Workflow connections",
      "Handover",
    ],
    readMore: "Read more about EPOS and CRM",
    image: "studio",
    imagePosition: "50% 20%",
    artLabel:
      "Illustrative studio photograph beside the EPOS and CRM service. It does not show a till, a card machine or a customer database.",
    references: [
      {
        before:
          "AI integrations and workflow automation outside the agreed EPOS or CRM setup are covered under",
        href: "/services/ai-automation-crm",
        label: "Intelligent AI & Business Automation",
        after: ".",
      },
    ],
    deliverables: [
      {
        title: "Requirements planning",
        body: "We map how you take a sale today, what you need to know about a customer and which systems you already use. The written list of requirements is the boundary of the work.",
      },
      {
        title: "Agreed EPOS setup",
        body: "We configure the electronic point of sale behaviour that has been agreed, so a sale can be recorded in the way the brief describes. This is setup and customisation. It is not a supply of tills, card machines or other hardware.",
      },
      {
        title: "CRM setup and customisation",
        body: "We set up customer relationship records around the sales process you describe. Fields, steps and who can see them are taken from the agreed requirements, not from a generic pipeline.",
      },
      {
        title: "Sales and customer records",
        body: "The information the brief asks you to keep about sales and customers is given a place to live. We do not add stock control, payment taking or other modules that were not in the requirements.",
      },
      {
        title: "Workflow connections",
        body: "A connection between the agreed EPOS or CRM steps and the surrounding day-to-day work is included only when it is in the scope. Two products existing side by side is not itself a connection.",
      },
      {
        title: "Handover",
        body: "We explain what was set up, who can use it and what was left outside the agreement. Further changes, support or connections are a separate conversation.",
      },
    ],
    benefits: [
      {
        title: "Planned around the way you sell",
        body: "The setup starts from your sales and customer process. It is not a catalogue of features chosen in advance.",
      },
      {
        title: "A scope you can read",
        body: "Customisation stays inside the list both sides have agreed. Items that were not discussed are not treated as included.",
      },
      {
        title: "Records for sales and customers",
        body: "The brief can give sales and customer details a consistent place to be stored. That is the record. It is not a claim about revenue or a complete retail system.",
      },
      {
        title: "A clear handover",
        body: "You can see what was configured, who has access and what this piece of work did not include.",
      },
    ],
    steps: [
      {
        title: "Gather the requirements",
        body: "Talk through the sale, the customer information, the systems already in use and anything you know is out of bounds.",
      },
      {
        title: "Agree the setup",
        body: "Write down what will be configured and what will not. Specific capabilities come from that list. Nothing is added because it is common in other businesses.",
      },
      {
        title: "Configure and check",
        body: "Set up the agreed EPOS and CRM behaviour and check it with example records you are comfortable using. We do not invent a test integration that was not in scope.",
      },
      {
        title: "Hand over",
        body: "Walk through the setup, the access and the limits. Ongoing help is included only if the agreement says so.",
      },
    ],
    faqs: [
      {
        question: "What does EPOS mean?",
        answer: [
          "EPOS means electronic point of sale: the system used to record a sale. In this service that means planning and the agreed setup or customisation of that system. It does not mean we sell or install hardware.",
        ],
      },
      {
        question: "Do you supply tills, card machines or payment processing?",
        answer: [
          "No. Hardware supply and payment processing are not part of this service. We also do not describe an offline mode or inventory features, because those have not been specified. If your requirements mention them, we will say they sit outside the work described here.",
        ],
      },
      {
        question: "Which EPOS or CRM product do you use?",
        answer: [
          "We have not named one. If you already have a system, we start from that and from the changes you want. If you do not, choosing a system is part of planning, after the requirements are clear. We do not have a default provider to recommend on this page.",
        ],
      },
      {
        question: "Can you connect EPOS or CRM to our other software?",
        answer: [
          "A workflow connection can be discussed where it supports the setup you have agreed, and where the access exists. We do not assume an integration, and we do not list providers or ready-made connections. Anything of that kind has to be written into the requirements first.",
        ],
      },
      {
        question: "What do you need from us, and what does it cost?",
        answer: [
          "We need to understand how you record a sale, what you keep about a customer and which systems you use now. There is no standard price. After that conversation we confirm the work, your responsibilities and any third-party costs that belong to you. Ongoing support is included only when the scope says so.",
        ],
      },
    ],
  },
];

/** Shared "Why it matters" principles on service pages that keep the longer layout. */
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
