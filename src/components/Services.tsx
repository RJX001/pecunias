"use client";

import Link from "next/link";
import {
  GROWTH_STACK_HEADING,
  GROWTH_STACK_INTRO,
  growthStack,
  splitGrowthSystemTitle,
} from "@/data/growth-stack";
import { FINAL_CTA } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";
import { useScrollActive } from "./useScrollActive";

const CONNECTED_SPLIT = GROWTH_STACK_INTRO.indexOf(". ");
const CONNECTED_INK = GROWTH_STACK_INTRO.slice(0, CONNECTED_SPLIT + 1);
const CONNECTED_GREEN = GROWTH_STACK_INTRO.slice(CONNECTED_SPLIT + 2);

const COLOR_T =
  "transition-[color] duration-700 ease-[var(--ease)] motion-reduce:duration-0";

function ServicesNav() {
  const { listRef, active } = useScrollActive(growthStack.length);

  return (
    <nav
      ref={listRef}
      aria-label={GROWTH_STACK_HEADING}
      className="mt-14 border-y border-line"
    >
      {growthStack.map((system, index) => {
        const { code, name } = splitGrowthSystemTitle(system.title);
        const current = index === active;
        const done = index < active;
        const reached = done || current;
        return (
          <Link
            key={system.slug}
            href={`/services/${system.slug}`}
            className="group relative grid min-h-[72px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-line py-6 text-fg no-underline last:border-b-0 transition-colors hover:bg-bg-raised sm:min-h-[88px] sm:py-8"
          >
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 h-px w-full origin-left bg-green transition-transform duration-700 ease-[var(--ease)] motion-reduce:duration-0"
              style={{ transform: reached ? "scaleX(1)" : "scaleX(0)" }}
            />
            <span className="min-w-0">
              <span className="service-row-num block text-fg">{code}</span>
              <span
                className={`mt-1 block font-display text-[22px] font-bold tracking-[-0.02em] md:text-[28px] ${COLOR_T} ${
                  current ? "text-green" : done ? "text-fg" : "text-fg-faint"
                }`}
              >
                {name}
              </span>
            </span>
            <span
              className={`inline-block pr-1 text-[22px] leading-none transition-[color,transform] duration-300 ease-[var(--ease)] motion-reduce:duration-0 group-hover:translate-x-1 ${
                current ? "text-green" : done ? "text-fg" : "text-fg-faint"
              }`}
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

export function Services() {
  return (
    <section className="section-pad pt-32 md:pt-44">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <Link
            href="/"
            aria-label="Back to Home"
            className="inline-flex min-h-11 items-center text-[14px] font-medium text-fg-dim no-underline transition-colors hover:text-fg"
          >
            ← Home
          </Link>
          <h1 className="display mt-10 max-w-[16ch] text-[clamp(40px,7vw,88px)]">
            {GROWTH_STACK_HEADING}
          </h1>
          <p className="support text-fg">
            {CONNECTED_INK}{" "}
            <span className="text-green">{CONNECTED_GREEN}</span>
          </p>
        </Reveal>

        <ServicesNav />

        <div className="service-cta">
          <a href={FINAL_CTA.href} className="btn btn-green">
            {FINAL_CTA.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
