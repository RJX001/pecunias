/**
 * Remaining approved homepage / chrome copy from
 * PecuniaStudios-Cursor-4-SubAgent-Implementation.md
 * (§4, §8, §12–18). Render exactly. Do not paraphrase.
 */

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/about", label: "About" },
] as const;

export const NAV_CTA = {
  href: "/#contact",
  label: "Book A Call",
} as const;

export const GROWTH_PHILOSOPHY = {
  heading: "Growth Philosophy",
  statement: "We don't just market businesses. We build the system behind growth.",
  copy: [
    "Growth rarely comes from one campaign, one website or one clever advert. It comes from having the right strategy, infrastructure, acquisition channels and systems working together.",
    "We combine marketing, technology, data, creative and automation to build growth systems designed around one objective:",
  ],
  emphasis: "Make the business perform better.",
} as const;

export const COMMITMENT = {
  heading: "Our Commitment",
  statement:
    "We don't promise magic. We build accountability into the system.",
  support:
    "Marketing isn't a vending machine. You can't put money in and guarantee exactly what comes out. Markets change. Customers change. Competition changes. What we can control is the process.",
  items: [
    "Clear commercial objectives",
    "Defined KPIs",
    "Transparent reporting",
    "Continuous testing",
    "Conversion optimisation",
    "Active campaign management",
    "Data-led decision making",
    "Rapid identification of problems",
    "Strategic recommendations",
    "Continuous optimisation",
  ],
  closing:
    "If something isn't working, we don't hide behind the numbers. We find out why. Then we fix it.",
} as const;

/** Concise Why section. Render these strings exactly. */
export const WHY_PECUNIA = {
  heading: "Why Pecunia?",
  support: "Because you don't need another marketing supplier.",
  explanation: "One team to connect your marketing, technology and growth.",
  statuses: [
    { from: "Disconnected systems.", to: "Connected systems." },
    { from: "Disconnected data.", to: "Connected data." },
    { from: "Disconnected decisions.", to: "Clearer decisions." },
  ],
  capabilities: [
    "Strategy",
    "Technology",
    "Creative",
    "Acquisition",
    "Conversion",
    "Automation",
  ],
  closing: "One team. One strategy. One growth system.",
} as const;

/** Compact audience note under Why. Not a second page heading. */
export const BUILT_FOR = {
  title: "Built for businesses serious about growth.",
  note: "For ambitious businesses ready to build, improve and scale.",
} as const;

export const ABOUT = {
  heading: "About Pecunia Studios",
  subheading: "Built in 2026. Built for what's next.",
  copy: [
    "Pecunia Studios was founded in 2026 by a marketing specialist and an AI specialist with a shared belief: Modern businesses shouldn't have to choose between great marketing and great technology.",
    "The agency was built to bring both together.",
    "Marketing creates demand. Technology creates leverage. Data creates clarity. Automation creates capacity. Our job is to connect them.",
    "Today, Pecunia Studios works with ambitious businesses to build stronger digital ecosystems, acquire better customers and create systems capable of scaling with them.",
    "We're not interested in being another name on your supplier list. We're here to build what's next.",
  ],
} as const;

export const STANDARD = {
  heading: "The Standard",
  statement: "If we can't measure it, we can't improve it.",
  support:
    "Every engagement starts with understanding the numbers. Every system is built with performance in mind. Every campaign produces data. Every result informs the next decision.",
  closing: "Because growth isn't a feeling. It's a system of decisions.",
} as const;

export const FINAL_CTA = {
  headline:
    "Your business has potential. Let's build the system to capture it.",
  support:
    "Tell us where you are, where you want to go and what's currently standing in the way. We'll identify the opportunities, build the strategy and show you what it would take to get there.",
  cta: "Start A Growth Project →",
  href: "/#contact",
} as const;

export const FOOTER = {
  brand: "PECUNIA STUDIOS",
  descriptor: "Strategy. Technology. Acquisition. Growth.",
  servicesLine:
    "Websites | E-commerce | Paid Media | SEO | Automation | CRM | AI | Creative | Growth Strategy",
  copyright: "© 2026 Pecunia Studios. Company registered in England & Wales.",
} as const;
