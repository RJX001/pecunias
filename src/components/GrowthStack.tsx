"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const ROWS = [
  {
    name: "Digital",
    summary: "The properties the business actually runs on.",
    detail:
      "Websites, product, tracking and the technical layer underneath. Built to convert, not to look busy.",
  },
  {
    name: "Acquisition",
    summary: "Demand, switched on against a real offer.",
    detail:
      "Paid, organic and marketplace acquisition — one plan, one reporting line, no channel theatre.",
  },
  {
    name: "Automation",
    summary: "The loop that keeps running when nobody is in Slack.",
    detail:
      "CRM, data, ops and the connective tissue between them. Less chase, more closed loops.",
  },
  {
    name: "Commerce",
    summary: "Store, catalogue, checkout, aftercare.",
    detail:
      "Marketplace and store operations as a managed system, not a one-off setup.",
  },
  {
    name: "Creative",
    summary: "Assets that get made and then kept alive.",
    detail:
      "Creative production tied to the same system as the ads, the site and the offer. Not a one-and-done drop.",
  },
] as const;

export function GrowthStack() {
  const [open, setOpen] = useState(0);

  return (
    <section id="stack" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">Growth stack</p>
          <h2 className="display max-w-[12ch] text-[clamp(34px,5vw,58px)]">
            Five lines. One system.
          </h2>
        </Reveal>

        <div className="mt-14 border-y border-line">
          {ROWS.map((row, index) => {
            const isOpen = open === index;
            return (
              <div key={row.name} className="border-b border-line last:border-b-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(index)}
                  className="grid w-full grid-cols-[1fr_auto] items-baseline gap-6 py-6 text-left"
                >
                  <span>
                    <span className="block text-[22px] font-bold tracking-[-0.02em] text-fg md:text-[28px]">
                      {row.name}
                    </span>
                    <span className="mt-1 block text-[15px] text-fg-dim">
                      {row.summary}
                    </span>
                  </span>
                  <span
                    className={`text-green transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height,opacity] duration-500"
                  style={{
                    maxHeight: isOpen ? "12rem" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="max-w-[540px] pb-8 text-[15px] leading-relaxed text-fg-dim">
                    {row.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
