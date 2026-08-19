export type ServiceItem = {
  code: string;
  name: string;
  description: string;
};

export type ServiceCategory = {
  code: string;
  name: string;
  description: string;
  items: ServiceItem[];
};

export const services: ServiceCategory[] = [
  {
    code: "WD",
    name: "Website Development",
    description: "The storefront and structure your business runs on.",
    items: [
      {
        code: "WD-01",
        name: "E-commerce Website Development",
        description:
          "Professional online stores optimised for sales and conversions.",
      },
      {
        code: "WD-02",
        name: "Custom Coded Website Development",
        description:
          "Fully bespoke, hand-coded sites tailored to exact requirements.",
      },
    ],
  },
  {
    code: "DM",
    name: "Digital Marketing",
    description: "Strategy and search, compounding over time.",
    items: [
      {
        code: "DM-01",
        name: "Digital Marketing Strategy",
        description:
          "Full-funnel strategy to grow online presence and increase sales.",
      },
      {
        code: "DM-02",
        name: "SEO",
        description:
          "Search engine optimisation for higher rankings and organic traffic.",
      },
    ],
  },
  {
    code: "PA",
    name: "Paid Advertising",
    description: "Demand generation on the platforms your customers already use.",
    items: [
      {
        code: "PA-01",
        name: "Google Ads",
        description:
          "Targeted search and shopping campaigns built for conversions.",
      },
      {
        code: "PA-02",
        name: "Meta Ads",
        description: "Facebook and Instagram advertising, managed end to end.",
      },
      {
        code: "PA-03",
        name: "TikTok Ads",
        description:
          "Campaigns built for brand awareness and short-form conversion.",
      },
      {
        code: "PA-04",
        name: "Pinterest Ads",
        description:
          "Advertising for e-commerce and niche visual-search audiences.",
      },
    ],
  },
  {
    code: "MS",
    name: "Marketplace & Store Setup",
    description: "Where the sale actually happens.",
    items: [
      {
        code: "MS-01",
        name: "Google Merchant Center Setup",
        description: "Complete GMC setup and product feed integration.",
      },
      {
        code: "MS-02",
        name: "Amazon Marketplace Management",
        description: "Listings, SEO, inventory and support — fully managed.",
      },
      {
        code: "MS-03",
        name: "Etsy Marketplace Management",
        description: "Store setup and ongoing optimisation for growth.",
      },
      {
        code: "MS-04",
        name: "Temu Marketplace Management",
        description: "Complete marketplace handling and setup.",
      },
      {
        code: "MS-05",
        name: "Winning Product Research",
        description:
          "Research and analysis to identify high-potential products.",
      },
    ],
  },
  {
    code: "CS",
    name: "Creative Services",
    description: "The content that makes the rest convert.",
    items: [
      {
        code: "CS-01",
        name: "Social Media Content Creation",
        description:
          "Professional content built for how each platform actually performs.",
      },
      {
        code: "CS-02",
        name: "Graphic Designing",
        description:
          "Custom graphics, branding, banners and promotional design.",
      },
      {
        code: "CS-03",
        name: "Video Editing",
        description:
          "Professional editing for ads, reels and promotional content.",
      },
      {
        code: "CS-04",
        name: "AI Image & Video Generation",
        description:
          "AI-generated visuals and video for branding and marketing.",
      },
    ],
  },
  {
    code: "AD",
    name: "App Development",
    description: "Custom software, when the web isn't enough.",
    items: [
      {
        code: "AD-01",
        name: "App Development",
        description:
          "Custom mobile and web application development, end to end.",
      },
    ],
  },
];
