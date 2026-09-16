/**
 * Approved Pecunia Approach stages from
 * PecuniaStudios-Cursor-4-SubAgent-Implementation.md §11.
 * UK spelling retained (Strategise, Optimise).
 */

export type ApproachStage = {
  title: string;
  body: readonly string[];
};

export const APPROACH_HEADING = "The Pecunia Approach";

export const APPROACH_INTRO = "We don't sell activity. We build for outcomes.";

export const APPROACH_SUPPORT =
  "Anyone can launch a campaign. Anyone can build a website. Anyone can generate content. The difference is whether those things actually contribute to growth. Our process starts with the commercial objective and works backwards.";

export const APPROACH_RAIL = [
  "Diagnose",
  "Strategise",
  "Build",
  "Launch",
  "Optimise",
  "Scale",
] as const;

export const approachStages: readonly ApproachStage[] = [
  {
    title: "01 — Diagnose",
    body: [
      "We analyse the business, market, offer, customer journey, competitors and existing performance. We identify what's working. More importantly, we identify what's leaking.",
    ],
  },
  {
    title: "02 — Strategise",
    body: [
      "We establish the growth model. Who are we trying to acquire? Which channels should reach them? What should they see? Where should they land? What happens next? What needs to be true for acquisition to be profitable?",
      "Every decision starts with the numbers.",
    ],
  },
  {
    title: "03 — Build",
    body: [
      "We build the infrastructure required to execute the strategy. Websites. Landing pages. Funnels. CRM systems. Automations. Tracking. Creative. Campaigns. E-commerce systems.",
      "Everything has a role. Everything connects back to the objective.",
    ],
  },
  {
    title: "04 — Launch",
    body: [
      "Strategy means nothing until it meets the market. We launch. We measure. We collect real-world data. Then we use that data to understand what the market actually responds to.",
    ],
  },
  {
    title: "05 — Optimise",
    body: [
      "Launching is the beginning, not the finish line. We continuously analyse acquisition, conversion and customer behaviour. Creative gets tested. Offers get refined. Landing pages get improved. Campaigns get restructured. Budgets move towards what performs.",
    ],
  },
  {
    title: "06 — Scale",
    body: [
      "Once we identify what works, we build on it. More qualified traffic. More efficient acquisition. More conversions. More automation. More capacity.",
      "The objective isn't to make something work once. It's to build something that can scale.",
    ],
  },
];
