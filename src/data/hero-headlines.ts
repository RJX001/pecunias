/**
 * Approved hero copy. Render these strings exactly.
 * The old rail and journey status are not part of the title flow.
 */

export const HERO_IDENTITY = "Pecunia Studios";

/** Stable homepage H1. Distinct from the animated slogans. */
export const HERO_TITLE =
  "Website design, app development and digital marketing.";

/** Short introduction directly under the stable H1. */
export const HERO_INTRO =
  "We help businesses, founders and individuals bring digital projects to life—from websites, apps and branding to advertising, SEO and connected business systems.";

export const HERO_LEAD_IN = "You're one move away from...";

export const HERO_HEADLINES = [
  "Turning Your Ambition Into Income.",
  "Being A Brand People Want To Buy From.",
  "Creating Financial Freedom.",
  "Building A 7-Figure Business.",
  "Making Your Business Work For You.",
] as const;

export const HERO_SUPPORT = [
  "Your business doesn't need more noise. It needs the right move.",
  "Pecunia brings strategy, marketing, technology and automation together to help ambitious businesses move beyond where they are now.",
] as const;

export const HERO_CTA = "Make The Move →";

export type HeroHeadline = (typeof HERO_HEADLINES)[number];
