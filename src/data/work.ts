export type CaseStudy = {
  tags: string;
  name: string;
  stat: string;
  description: string;
  /** Mock figures — replace with real client results before launch. */
  isPlaceholder: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    tags: "WD · DM",
    name: "Kindling & Co.",
    stat: "+140%",
    description:
      "Organic traffic growth in 6 months following an e-commerce rebuild and SEO retainer.",
    isPlaceholder: true,
  },
  {
    tags: "MS",
    name: "Marrow Studio",
    stat: "3.2×",
    description:
      "Marketplace revenue increase after full Amazon and Etsy management handover.",
    isPlaceholder: true,
  },
  {
    tags: "AD",
    name: "Nightjar App",
    stat: "12,000",
    description:
      "Installs in the first quarter following custom app development and launch support.",
    isPlaceholder: true,
  },
];
