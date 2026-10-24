/**
 * Search Visibility copy from the 22 October 2026 handoff.
 *
 * Homepage topics: design-source/approved-design.html and
 * design-source/extracted-code/script-05.js.
 * Service page: design-source/search-visibility-data.json.
 *
 * The service page groups some overlapping topics. It does not repeat every
 * homepage selector label as its own deliverable.
 */

export type SearchVisibilityTopic = {
  id: string;
  label: string;
  heading: string;
  body: string;
};

export type SearchVisibilityDetail = {
  title: string;
  body: string;
};

export type SearchVisibilityFaq = {
  question: string;
  answer: readonly string[];
};

export const SEARCH_VISIBILITY_HREF = "/services/search-visibility";

export const SEARCH_VISIBILITY_KICKER = "Search visibility";

export const SEARCH_VISIBILITY_HEADING = {
  lead: "Be discovered.",
  accent: "Be understood.",
} as const;

export const SEARCH_VISIBILITY_INTRO =
  "Your next customer could start with a search, a map or a question. We connect SEO, local presence and useful answers to help them find a clearer path to your business.";

export const SEARCH_VISIBILITY_EXPLORE = "Explore SEO & AI Search Visibility";

export const SEARCH_VISIBILITY_TOPIC_LABEL = "One connected search strategy";

export const SEARCH_VISIBILITY_TOPIC_LINK = "Explore this service";

export const SEARCH_VISIBILITY_FOOTNOTE =
  "SEO · Local search · Helpful content · AI-assisted discovery";

export const SEARCH_VISIBILITY_TOPICS: readonly SearchVisibilityTopic[] = [
  {
    id: "ai-search",
    label: "AI Search Visibility",
    heading: "Make your expertise easier to understand.",
    body: "Clear, accessible information helps people and search systems understand what your business does. We review the foundations behind that visibility.",
  },
  {
    id: "aeo",
    label: "Answer Engine Optimisation",
    heading: "Answer the questions that matter.",
    body: "Turn useful knowledge into clear answers, supported by practical detail. Help customers evaluate your offer without searching through vague copy.",
  },
  {
    id: "geo",
    label: "Generative Engine Optimisation",
    heading: "Build a clearer source of information.",
    body: "Bring consistent business information and helpful explanations together. AI citations remain a platform decision, never a guaranteed outcome.",
  },
  {
    id: "technical",
    label: "Technical SEO",
    heading: "Give good content a strong foundation.",
    body: "Review crawling, indexing, site structure and page experience. Remove technical obstacles that can make your information harder to discover.",
  },
  {
    id: "local",
    label: "Local SEO",
    heading: "Connect your business with local intent.",
    body: "Make your locations, services and contact information clear across your website and relevant business listings.",
  },
  {
    id: "on-page",
    label: "On-page & Content SEO",
    heading: "Give every page a useful purpose.",
    body: "Align titles, headings, copy and internal links with the questions your customers ask and the decisions they need to make.",
  },
  {
    id: "ecommerce",
    label: "E-commerce SEO",
    heading: "Make products easier to discover.",
    body: "Improve product and category structure, useful product details, internal links and relevant product data. Connect search intent to a clear shopping journey.",
  },
  {
    id: "international",
    label: "International SEO",
    heading: "Help each market find the right pages.",
    body: "Review language and regional page structures, localisation and relevant hreflang signals so different audiences can reach the appropriate content.",
  },
  {
    id: "image-video",
    label: "Image & Video SEO",
    heading: "Help visual content tell its story.",
    body: "Review image descriptions, file handling, video pages and relevant metadata so useful visual content can be discovered and understood.",
  },
  {
    id: "off-page",
    label: "Off-page SEO & Digital PR",
    heading: "Build your presence beyond the website.",
    body: "Develop useful content, relevant outreach and consistent business mentions. Focus on genuine relevance and earned coverage rather than bulk link schemes.",
  },
  {
    id: "structured-data",
    label: "Structured Data & Entity SEO",
    heading: "Make your business information consistent.",
    body: "Connect clear business details with relevant structured data that matches visible content. Validate the implementation and keep information up to date.",
  },
  {
    id: "audits",
    label: "SEO Audits & Migration Support",
    heading: "Find the priorities. Protect the foundations.",
    body: "Audit your current site, prioritise fixes and plan redirects, indexing checks and monitoring when pages or platforms change.",
  },
];

export const SEARCH_VISIBILITY_PAGE: {
  name: string;
  number: string;
  description: string;
  body: readonly string[];
  closing: string;
  artLabel: string;
  deliverables: readonly SearchVisibilityDetail[];
  benefits: readonly SearchVisibilityDetail[];
  steps: readonly SearchVisibilityDetail[];
  faqs: readonly SearchVisibilityFaq[];
} = {
  name: "SEO & AI Search Visibility",
  number: "04",
  description: "Help the right people discover your business.",
  body: [
    "Search visibility starts with a website people can use and search engines can understand. We bring technical SEO, local presence and useful content together to help customers discover and evaluate your business.",
    "We also review how clearly your business and expertise are represented in AI-assisted search. The foundations remain the same: accessible pages, reliable information and answers that serve a real customer need.",
  ],
  closing:
    "Build a clearer route from a customer\u2019s question to your business.",
  artLabel:
    "Illustrative search interface connecting website structure, local presence and helpful answers",
  deliverables: [
    {
      title: "Technical SEO",
      body: "Audit crawling, indexability, site structure, redirects, internal linking and page experience. Prioritise fixes that remove barriers to discovering and using your content.",
    },
    {
      title: "Local SEO",
      body: "Review Google Business Profile information, location pages and consistency across relevant listings. Help customers understand where you operate and what you offer.",
    },
    {
      title: "On-page & Content SEO",
      body: "Research customer questions and search intent. Improve titles, headings, copy and page connections so each page has a clear purpose.",
    },
    {
      title: "Structured Data & Business Identity",
      body: "Make your business details consistent and implement relevant structured data that matches the visible content. Validate the implementation rather than adding markup without a reason.",
    },
    {
      title: "AI Search Visibility",
      body: "Review whether important information is accessible, accurate and clearly organised for AI-assisted discovery. Strengthen the same helpful content and technical foundations used for conventional search.",
    },
    {
      title: "Answer-led Content: AEO & GEO",
      body: "Create concise answers supported by useful explanations and evidence. AEO and GEO describe overlapping approaches to answer-led and generative search; neither guarantees a recommendation or citation.",
    },
    {
      title: "E-commerce SEO",
      body: "Improve product and category structure, useful product details, internal links and relevant product data. Connect search intent to a clear shopping journey.",
    },
    {
      title: "International SEO",
      body: "Review language and regional page structures, localisation and relevant hreflang signals so different audiences can reach the appropriate content.",
    },
    {
      title: "Image & Video SEO",
      body: "Review image descriptions, file handling, video pages and relevant metadata so useful visual content can be discovered and understood.",
    },
    {
      title: "Off-page SEO & Digital PR",
      body: "Develop useful content, relevant outreach and consistent business mentions. Focus on genuine relevance and earned coverage rather than bulk link schemes.",
    },
    {
      title: "SEO Audits & Migration Support",
      body: "Audit your current site, prioritise fixes and plan redirects, indexing checks and monitoring when pages or platforms change.",
    },
  ],
  benefits: [
    {
      title: "Relevant discovery",
      body: "Focus on the questions, services and locations that matter to your customers.",
    },
    {
      title: "Stronger foundations",
      body: "Resolve technical and content issues before adding more pages or activity.",
    },
    {
      title: "A joined-up presence",
      body: "Connect your website, local listings and business information with consistent messaging.",
    },
    {
      title: "Useful measurement",
      body: "Review relevant impressions, visits and enquiries, with clear explanations of what can and cannot be attributed.",
    },
  ],
  steps: [
    {
      title: "Audit & prioritise",
      body: "Review the website, content, local presence and available search data. Agree a practical list of opportunities.",
    },
    {
      title: "Improve the foundations",
      body: "Address agreed technical issues, page structure, business details and relevant structured data.",
    },
    {
      title: "Create helpful answers",
      body: "Develop or refine service pages and content around real audience questions, with human review for accuracy.",
    },
    {
      title: "Measure & refine",
      body: "Monitor agreed indicators, explain the results and adjust priorities as the site and market change.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between SEO, AEO and GEO?",
      answer: [
        "SEO improves how your website can be discovered and understood in search. AEO focuses on clear answers to questions, while GEO is commonly used to describe visibility within generative search experiences. The work overlaps substantially: useful content, technical accessibility and reliable information support all three.",
      ],
    },
    {
      question: "Can you guarantee first-page rankings or AI recommendations?",
      answer: [
        "No. Search rankings, indexing and AI citations are controlled by the platforms and can change. We focus on improving the foundations, content and measurement, with transparent reporting rather than guaranteed positions or recommendations.",
      ],
    },
    {
      question: "How long does search optimisation take?",
      answer: [
        "It depends on your starting position, the changes required and the level of competition. Some updates can be reflected quickly; others take months to assess. We agree priorities and review points after the audit rather than promising a fixed timetable.",
      ],
    },
    {
      question: "Does this include local SEO and Google Maps?",
      answer: [
        "Local work can include a Google Business Profile review, consistent contact details, relevant location content and practical recommendations. Eligibility, verification and ranking remain subject to the platform\u2019s rules. We confirm the included locations and tasks in the scope.",
      ],
    },
    {
      question: "What does it cost, and can we begin with an audit?",
      answer: [
        "We can scope a focused audit, a defined improvement project or ongoing optimisation. The quote depends on site size, competition, technical work and content needs. Deliverables, reporting and any ongoing costs are agreed before work starts.",
      ],
    },
  ],
};
