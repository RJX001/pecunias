/**
 * Approved hero copy from PecuniaStudios-Cursor-4-SubAgent-Implementation.md
 * §§5–7. Agent 2 must render these strings exactly.
 */

export const HERO_IDENTITY = "Pecunia Studios";

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

export const HERO_RAIL = [
  "Strategy",
  "Build",
  "Acquire",
  "Convert",
  "Automate",
  "Scale",
] as const;

export type HeroHeadline = (typeof HERO_HEADLINES)[number];
export type HeroRailNode = (typeof HERO_RAIL)[number];
