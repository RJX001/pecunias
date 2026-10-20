/**
 * Approved Growth Stack (four systems).
 *
 * Source of truth: Pecunia_Studios_Cursor_Handoff (20 October 2026) —
 * README decisions, design-source/approved-design.html and
 * design-source/service-page-data.json. Where older specs conflict, the
 * handoff wins (see .cursor/rules/redesign-priority.mdc).
 *
 * Single source of truth for the homepage service panels, `/services` index,
 * `/services/[slug]` pages, footer and navigation. Do not duplicate copy
 * elsewhere. Do NOT merge into or duplicate `src/data/services.ts`.
 *
 * The first route keeps the `digital-ecommerce` slug for URL compatibility;
 * its public-facing label is "Premium Website Design".
 */

export type GrowthSystemSlug =
  | "digital-ecommerce"
  | "paid-growth"
  | "organic-growth-content"
  | "ai-automation-crm";

export type GrowthImageKey = "studio" | "city" | "sunset";

export type GrowthFaq = {
  question: string;
  answer: readonly string[];
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
  /** Short "Read more about …" link label for the homepage panel. */
  readMore: string;
  /** Imagery used by the homepage panel and the service page hero. */
  image: GrowthImageKey;
  /** CSS object-position for the panel/hero crop. */
  imagePosition: string;
  /** Accessible description of the illustrative service imagery. */
  artLabel: string;
};

export const GROWTH_STACK_KICKER = "Our Services";

export const GROWTH_STACK_HEADING = "Our Services — The Growth Stack";

export const GROWTH_STACK_INTRO =
  "Four connected systems. Not four separate suppliers.";

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
  },
];

/** Shared "Why it matters" principles shown on every service page. */
export const SERVICE_PRINCIPLES = [
  "Clear commercial objectives",
  "Defined KPIs",
  "Transparent reporting",
] as const;

export function getServiceFaqs(system: GrowthSystem): GrowthFaq[] {
  const faqs: GrowthFaq[] = [
    {
      question: "What does this service focus on?",
      answer: [system.description, ...system.body],
    },
    {
      question: "How do you approach a growth project?",
      answer: [
        "Anyone can launch a campaign. Anyone can build a website. Anyone can generate content. The difference is whether those things actually contribute to growth. Our process starts with the commercial objective and works backwards.",
      ],
    },
    {
      question: "How does this connect with the other services?",
      answer: [GROWTH_CONNECTED],
    },
  ];
  if (system.slug === "organic-growth-content") {
    faqs.push({
      question: "Does Content Production include in-person filming?",
      answer: [
        "Pecunia Studios does not provide in-person video creation. Our services include Content Creation, Social Media Content, Content Strategy and Brand Content.",
      ],
    });
  }
  faqs.push({ question: "How do we start?", answer: [GROWTH_CONTACT] });
  return faqs;
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
