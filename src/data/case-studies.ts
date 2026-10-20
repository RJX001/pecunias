/**
 * Homepage case-study carousel.
 *
 * Covers are illustrative concept artwork, not screenshots of delivered work.
 * Do not add descriptions, results, links or logos until real project
 * screenshots, URLs and client permission are supplied.
 */

/** Decorative outlined shape drawn on the green cover. */
export type CaseStudyCover = "ring" | "card" | "arch";

export type CaseStudy = {
  number: string;
  name: string;
  cover: CaseStudyCover;
};

export const caseStudies: readonly CaseStudy[] = [
  { number: "01", name: "Legion Fitness", cover: "ring" },
  { number: "02", name: "Card Chart", cover: "card" },
  { number: "03", name: "Bollard Company", cover: "arch" },
];
