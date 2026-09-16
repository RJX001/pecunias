/**
 * Approved homepage Growth Stack (four systems) from
 * PecuniaStudios-Cursor-4-SubAgent-Implementation.md §9.
 *
 * This is marketing grouping for the homepage accordion.
 * Do NOT merge into or duplicate `src/data/services.ts` (6 codes / 18 items
 * for `/services`).
 */

export type GrowthSystem = {
  title: string;
  description: string;
  body: readonly string[];
  closing?: string;
  whatWeDo: readonly string[];
};

export const GROWTH_STACK_HEADING = "Our Services — The Growth Stack";

export const GROWTH_STACK_INTRO =
  "Four connected systems. Not four separate suppliers.";

export const growthStack: readonly GrowthSystem[] = [
  {
    title: "01 — Digital & E-commerce",
    description: "Digital infrastructure built to convert.",
    body: [
      "Your website should do more than look good. It should communicate your value, remove friction and turn interest into action. We design and build digital experiences around how your customers actually discover, evaluate and buy.",
      "From high-converting websites to scalable e-commerce platforms, we build digital infrastructure designed around performance.",
    ],
    whatWeDo: [
      "Web Design",
      "Custom Development",
      "Shopify & E-commerce Builds",
      "Product & Website Optimisation",
    ],
  },
  {
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
  },
  {
    title: "03 — Organic Growth & Content",
    description: "Build demand that compounds.",
    body: [
      "The strongest brands don't rely on one channel. We create organic growth strategies that increase visibility, authority and demand while building assets that continue working long after they are published.",
      "We don't create content to fill a calendar. We create content designed to capture attention, build trust and move customers closer to a decision.",
    ],
    whatWeDo: [
      "SEO",
      "Content Strategy",
      "Social Media Content",
      "AI-Generated Content",
      "Content Production",
      "Product Optimisation",
      "Organic Growth Strategy",
      "Brand Content",
    ],
  },
  {
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
  },
];
