/**
 * Knowledge Centre guides.
 *
 * Transcribed from design-source/knowledge-centre-content.json
 * (22 October 2026 handoff). Each record is category, title,
 * introduction, sections and relatedServiceKey. Do not add guides.
 *
 * Related links use the stored key: `/services/{key}`.
 * The packaged key `services` is the services overview in the
 * prototype (`?service=services`), which is `/services` on this site.
 * Names are the public service labels. This file does not import
 * growth-stack types.
 */

export type KnowledgeSection = {
  heading: string;
  body: string;
};

export type KnowledgeGuide = {
  category: string;
  title: string;
  introduction: string;
  sections: readonly KnowledgeSection[];
  relatedServiceKey: string;
};

export type RelatedServiceLink = {
  href: string;
  name: string;
};

export const KNOWLEDGE_CENTRE_EYEBROW = "The Pecunia Knowledge Centre";

export const KNOWLEDGE_CENTRE_TITLE = "Understand the possibilities.";

export const KNOWLEDGE_CENTRE_TITLE_ACCENT = "Choose your next step.";

export const KNOWLEDGE_CENTRE_DESCRIPTION =
  "Practical explanations of websites, branding, content, search and automation. Explore what the work involves, how the services fit together and what to prepare for your project.";

export const KNOWLEDGE_CENTRE_CLOSING = {
  heading: "Have a question about your business?",
  body: "Tell us what you want to achieve. We’ll help you understand which services fit.",
  linkLabel: "Start a conversation",
  href: "/#contact",
} as const;

export const ALL_TOPICS = "All topics";

export const NO_MATCH_MESSAGE =
  "No guides match yet. Try a broader search or choose All topics.";

const RELATED_SERVICES: Record<string, RelatedServiceLink> = {
  "digital-ecommerce": {
    href: "/services/digital-ecommerce",
    name: "Premium Website Design",
  },
  "organic-growth-content": {
    href: "/services/organic-growth-content",
    name: "Organic Growth & Content",
  },
  "search-visibility": {
    href: "/services/search-visibility",
    name: "Search Visibility & SEO",
  },
  "paid-growth": {
    href: "/services/paid-growth",
    name: "Paid Growth",
  },
  "ai-automation-crm": {
    href: "/services/ai-automation-crm",
    name: "AI, Automation & CRM",
  },
  services: {
    href: "/services",
    name: "Services",
  },
};

export const knowledgeGuides: readonly KnowledgeGuide[] = [
  {
    category: "Websites",
    title: "What makes a website work for your business?",
    introduction: "A clear purpose comes before visual effects.",
    sections: [
      {
        heading: "Start with the customer journey",
        body: "Decide who the website serves and what they need to do: understand your offer, compare options, request a quote or buy. Organise pages around those tasks. Clear headings, useful detail and visible next steps make a design easier to use.",
      },
      {
        heading: "Design and development work together",
        body: "Design sets the hierarchy, layout, typography and interactions. Development turns that into working pages, forms and integrations. Responsive layouts, accessible controls and sensible image sizes should be considered throughout the project.",
      },
      {
        heading: "What to prepare",
        body: "Bring your business goals, existing website, service information, brand assets and examples you like. Identify who will approve content and how enquiries should reach your team. The agreed scope should explain pages, features, responsibilities and handover.",
      },
    ],
    relatedServiceKey: "digital-ecommerce",
  },
  {
    category: "Branding",
    title: "A logo, a brand identity and brand guidelines",
    introduction:
      "Understand logos, identity systems and the different parts of a consistent brand.",
    sections: [
      {
        heading: "Your logo is one part of the system",
        body: "A logo identifies the business. A wider identity includes the colour palette, typography, imagery and layout choices used around it. These elements should work together across your website, social content, documents and marketing.",
      },
      {
        heading: "What guidelines are for",
        body: "Brand guidelines explain how to use the identity consistently. A practical guide can cover logo versions and spacing, colour values, font choices, image direction and examples of correct use. Agree the depth of the guide and required file formats in the brief.",
      },
      {
        heading: "How Pecunia can help",
        body: "We offer logo design, brand identity and brand guidelines. We start by understanding your audience, positioning and intended applications, then agree the deliverables and review stages before design begins.",
      },
    ],
    relatedServiceKey: "organic-growth-content",
  },
  {
    category: "SEO & Local Search",
    title: "Technical SEO and on-page SEO explained",
    introduction: "Make your pages easier to find, understand and use.",
    sections: [
      {
        heading: "Technical foundations",
        body: "Technical SEO reviews whether search engines can access and index your important pages. Common checks include site structure, redirects, internal links and indexing instructions. A useful audit prioritises the problems and explains which fixes matter for your site.",
      },
      {
        heading: "Useful pages for real questions",
        body: "On-page work improves the purpose and clarity of individual pages: headings, titles, descriptions, content and links. Write for the customer first, describe your services accurately and avoid repeating keywords without adding useful information.",
      },
      {
        heading: "How we approach the work",
        body: "Pecunia combines technical checks with a review of your services, content and customer questions. We agree priorities and meaningful measures. Search positions and traffic can change, so results should be assessed in context rather than treated as guaranteed outcomes.",
      },
    ],
    relatedServiceKey: "search-visibility",
  },
  {
    category: "SEO & Local Search",
    title: "Helping nearby customers find your business",
    introduction: "Local search starts with accurate business information.",
    sections: [
      {
        heading: "Keep the essentials consistent",
        body: "Your business name, contact details, opening hours, location and service area should be accurate wherever customers find them. Review your website and relevant business listings when these details change.",
      },
      {
        heading: "Build useful local information",
        body: "Location and service pages should explain what you actually offer in that area. Add practical details a customer needs rather than creating many near-identical pages. Use genuine customer feedback and keep information current.",
      },
      {
        heading: "Our local search support",
        body: "We review your local presence, relevant website pages and Google Business Profile information as part of Search Visibility. The scope depends on whether you have one location, several locations or a service-area business.",
      },
    ],
    relatedServiceKey: "search-visibility",
  },
  {
    category: "AI Search",
    title: "SEO, AEO and GEO: what do they mean?",
    introduction: "A plain-English guide to search terminology.",
    sections: [
      {
        heading: "SEO",
        body: "Search engine optimisation helps people and search engines discover and understand your website. It includes technical foundations, useful content and a clear description of your business.",
      },
      {
        heading: "AEO and GEO",
        body: "Answer engine optimisation is a term for making information clear and useful when someone asks a question. Generative engine optimisation describes work concerned with discovery in AI-generated responses. These terms overlap with existing SEO and content practices; they are not separate guarantees of exposure.",
      },
      {
        heading: "What matters for your business",
        body: "Focus on accessible pages, reliable information and answers grounded in your expertise. Pecunia reviews these foundations together. No agency controls whether a search engine or AI assistant chooses to display or cite a page.",
      },
    ],
    relatedServiceKey: "search-visibility",
  },
  {
    category: "Paid Growth",
    title: "What needs to be ready before you run ads?",
    introduction: "Connect the campaign to a clear offer and next step.",
    sections: [
      {
        heading: "Define the objective",
        body: "Choose the action that matters, such as a qualified enquiry or a purchase. Explain who the offer is for, why they should care and where they should go after clicking. The campaign and landing page should tell a consistent story.",
      },
      {
        heading: "Agree measurement and responsibilities",
        body: "Before launch, agree the budget, campaign scope, creative requirements and how enquiries will be handled. Decide which actions will be measured and check that any tracking is configured appropriately for your consent choices and setup.",
      },
      {
        heading: "Learn and improve",
        body: "Review enquiry quality alongside campaign activity. Testing creative, audiences and landing pages can help identify what to improve, but advertising spend does not guarantee a particular number of leads or sales.",
      },
    ],
    relatedServiceKey: "paid-growth",
  },
  {
    category: "Content",
    title: "Planning content that supports your services",
    introduction: "Give every piece of content a useful job.",
    sections: [
      {
        heading: "Start with questions",
        body: "List the questions customers ask before, during and after buying. Use them to plan service explanations, comparisons, practical guides and social content. Each piece should be useful on its own and connect naturally to the relevant next step.",
      },
      {
        heading: "Use a consistent identity",
        body: "Apply your brand voice, colours, typography and visual direction. Agree the formats and channels before production. A reusable content plan helps your team review and maintain material instead of simply filling a calendar.",
      },
      {
        heading: "Keep ownership clear",
        body: "Agree who supplies source information, who approves claims and which assets are included. Review published information when services change. We help connect content planning and creation to your wider website and growth activity.",
      },
    ],
    relatedServiceKey: "organic-growth-content",
  },
  {
    category: "AI & Automation",
    title: "Where can automation help your team?",
    introduction: "Start with a repeated task and a clear handover.",
    sections: [
      {
        heading: "Choose a practical workflow",
        body: "Look for repeated work such as routing enquiries, updating records or sending an internal notification. Map the current steps, the information involved and where human review is needed before choosing tools.",
      },
      {
        heading: "Define boundaries",
        body: "Decide what the workflow may do automatically, what requires approval and what happens when information is missing or a tool fails. Access should match the task. Test realistic cases and make it clear who owns the process.",
      },
      {
        heading: "Pecunia’s role",
        body: "We scope custom AI integrations, dashboards and CRM workflows around the systems you use. The brief should cover access, data handling, testing, support and handover. A useful automation has a clear purpose and an understandable fallback.",
      },
    ],
    relatedServiceKey: "ai-automation-crm",
  },
  {
    category: "Working Together",
    title: "From the first conversation to handover",
    introduction: "Know what to bring and what to agree.",
    sections: [
      {
        heading: "The initial brief",
        body: "Tell us about your business, audience, current challenges and desired outcome. Share existing assets and any constraints. You do not need a technical specification to start; a clear description of the problem is useful.",
      },
      {
        heading: "The agreed scope",
        body: "Before work begins, agree the deliverables, responsibilities, review points, price and schedule for your project. Make assumptions visible, including content supply, integrations and any ongoing services.",
      },
      {
        heading: "Launch and beyond",
        body: "Agree the checks needed before launch and what handover includes. This can cover asset files, access, documentation and training. Ongoing support and optimisation should be defined in the scope rather than assumed.",
      },
    ],
    relatedServiceKey: "services",
  },
];

export function knowledgeCategories(
  guides: readonly KnowledgeGuide[] = knowledgeGuides,
): string[] {
  const categories: string[] = [];
  for (const guide of guides) {
    if (!categories.includes(guide.category)) categories.push(guide.category);
  }
  return categories;
}

export function relatedService(key: string): RelatedServiceLink {
  return (
    RELATED_SERVICES[key] ?? {
      href: `/services/${key}`,
      name: key,
    }
  );
}

export function guideMatches(
  guide: KnowledgeGuide,
  query: string,
  topic: string,
): boolean {
  if (topic !== ALL_TOPICS && guide.category !== topic) return false;
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  const service = relatedService(guide.relatedServiceKey);
  const haystack = [
    guide.category,
    guide.title,
    guide.introduction,
    ...guide.sections.flatMap((section) => [section.heading, section.body]),
    service.name,
  ]
    .join("\n")
    .toLowerCase();
  return haystack.includes(needle);
}
