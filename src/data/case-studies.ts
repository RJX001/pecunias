/**
 * Confirmed Premium Websites projects.
 * Descriptions are factual notes from the approved prototype.
 * Do not add results, awards, testimonials or unconfirmed projects.
 */

export type PremiumWebsite = {
  name: string;
  url: string;
  host: string;
  image: string;
  imageAlt: string;
  category: string;
  description: string;
};

export const caseStudies: readonly PremiumWebsite[] = [
  {
    name: "Atlantis Linen Services",
    url: "https://atlantislinenservices.co.uk/",
    host: "atlantislinenservices.co.uk",
    image: "/images/projects/atlantis.webp",
    imageAlt: "Homepage preview of Atlantis Linen Services",
    category: "Hospitality & commercial laundry",
    description:
      "A cinematic service website bringing linen hire, product choices and quotation journeys together.",
  },
  {
    name: "CardChart",
    url: "https://www.cardchart.co.uk/",
    host: "www.cardchart.co.uk",
    image: "/images/projects/cardchart.webp",
    imageAlt: "Homepage preview of CardChart",
    category: "Trading card platform",
    description:
      "A card-market interface connecting search, pricing, collection tools and market insights.",
  },
  {
    name: "Beckbury Chippy",
    url: "https://beckburychippy.food2go.co.uk/",
    host: "beckburychippy.food2go.co.uk",
    image: "/images/projects/beckbury.webp",
    imageAlt: "Homepage preview of Beckbury Chippy",
    category: "Restaurant & online ordering",
    description:
      "A branded takeaway storefront giving customers a clear route to the menu and online ordering.",
  },
  {
    name: "Completely Secured",
    url: "https://completelysecured.co.uk/",
    host: "completelysecured.co.uk",
    image: "/images/projects/secured.webp",
    imageAlt: "Homepage preview of Completely Secured",
    category: "Security & e-commerce",
    description:
      "A security product storefront showcasing bollards, installation services and online shopping.",
  },
];
