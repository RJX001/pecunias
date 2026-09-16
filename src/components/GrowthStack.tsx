"use client";

import { useState } from "react";
import {
  GROWTH_STACK_HEADING,
  GROWTH_STACK_INTRO,
  growthStack,
} from "@/data/growth-stack";
import { Reveal } from "./Reveal";

export function GrowthStack() {
  const [open, setOpen] = useState(0);

  return (
    <section id="stack" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <h2 className="display max-w-[18ch] text-[clamp(34px,5vw,58px)]">
            {GROWTH_STACK_HEADING}
          </h2>
          <p className="support">{GROWTH_STACK_INTRO}</p>
        </Reveal>

        <div className="mt-14 border-y border-line">
          {growthStack.map((row, index) => {
            const isOpen = open === index;
            return (
              <div
                key={row.title}
                className="border-b border-line last:border-b-0"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(index)}
                  className="grid w-full grid-cols-[1fr_auto] items-baseline gap-6 py-6 text-left"
                >
                  <span>
                    <span className="block text-[22px] font-bold tracking-[-0.02em] text-fg md:text-[28px]">
                      {row.title}
                    </span>
                    <span className="mt-1 block text-[15px] text-fg-dim">
                      {row.description}
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
                    maxHeight: isOpen ? "80rem" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="max-w-[640px] pb-8">
                    {row.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-0 mb-4 text-[15px] leading-relaxed text-fg-dim last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {row.closing ? (
                      <p className="mt-4 mb-0 text-[15px] font-semibold leading-relaxed text-fg">
                        {row.closing}
                      </p>
                    ) : null}
                    <p className="mt-6 mb-3 text-[13px] font-semibold tracking-[0.04em] text-fg-faint">
                      What we do
                    </p>
                    <ul className="m-0 grid list-none gap-1 p-0">
                      {row.whatWeDo.map((item) => (
                        <li
                          key={item}
                          className="text-[15px] leading-relaxed text-fg-dim"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
