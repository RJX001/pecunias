"use client";

import { useId, useState } from "react";
import {
  GROWTH_STACK_HEADING,
  GROWTH_STACK_INTRO,
  growthStack,
} from "@/data/growth-stack";
import { Reveal } from "./Reveal";

export function GrowthStack() {
  const baseId = useId();
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set([0]));

  function toggle(index: number) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

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
            const isOpen = open.has(index);
            const panelId = `${baseId}-panel-${index}`;
            const triggerId = `${baseId}-trigger-${index}`;
            return (
              <div
                key={row.title}
                className="border-b border-line last:border-b-0"
              >
                <button
                  type="button"
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-6 text-left sm:gap-6"
                >
                  <span className="min-w-0">
                    <span className="block text-[22px] font-bold tracking-[-0.02em] text-fg md:text-[28px]">
                      {row.title}
                    </span>
                    <span className="mt-1 block text-[15px] text-fg-dim">
                      {row.description}
                    </span>
                  </span>
                  <span
                    className={`inline-block text-green-text transition-transform duration-300 ease-[var(--ease)] ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="grid transition-[grid-template-rows] duration-500 ease-[var(--ease)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className={`max-w-[640px] pb-8 transition-opacity duration-300 ease-[var(--ease)] ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
