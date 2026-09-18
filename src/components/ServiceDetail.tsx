import Link from "next/link";
import {
  GROWTH_STACK_INTRO,
  growthStack,
  splitGrowthSystemTitle,
  type GrowthSystem,
} from "@/data/growth-stack";
import { FINAL_CTA } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";
import { WhatWeDo } from "./WhatWeDo";

const SUBHEADLINE = "text-[22px] font-bold tracking-[-0.02em] md:text-[26px]";
const CONNECTED_GREEN = "Not four separate suppliers.";
const connectedInk = GROWTH_STACK_INTRO.slice(
  0,
  GROWTH_STACK_INTRO.indexOf(CONNECTED_GREEN),
).trimEnd();

export function ServiceDetail({ system }: { system: GrowthSystem }) {
  const { code, name } = splitGrowthSystemTitle(system.title);
  const others = growthStack.filter((item) => item.slug !== system.slug);

  return (
    <section className="section-pad pt-32 md:pt-44">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <Link
            href="/#services"
            aria-label="Back to Home"
            className="inline-flex min-h-11 items-center text-[14px] font-medium text-fg-dim no-underline transition-colors hover:text-fg"
          >
            ← Home
          </Link>

          <p className="kicker mt-10 font-mono service-row-num text-fg">{code}</p>
          <h1 className="display max-w-[16ch] text-[clamp(40px,7vw,88px)]">
            {name}
          </h1>
          <p className={`mt-6 m-0 max-w-[36ch] ${SUBHEADLINE} text-green`}>
            {system.description}
          </p>
          <div className="mt-6 md:mt-10">
            {system.body.map((paragraph) => (
              <p key={paragraph} className="support max-w-[60ch]">
                {paragraph}
              </p>
            ))}
          </div>
          {system.closing ? (
            <p className={`mt-8 m-0 max-w-[48ch] ${SUBHEADLINE} text-fg`}>
              {system.closing}
            </p>
          ) : null}
        </Reveal>

        <Reveal>
          <WhatWeDo items={system.whatWeDo} />
        </Reveal>

        <Reveal>
          <p className="mt-16 m-0 max-w-[28ch] text-[clamp(22px,3.2vw,40px)] font-bold tracking-[-0.02em] leading-[1.15]">
            <span className="text-fg">{connectedInk}</span>{" "}
            <span className="text-green">{CONNECTED_GREEN}</span>
          </p>

          <nav
            aria-label={GROWTH_STACK_INTRO}
            className="mt-10 border-t border-line"
          >
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group grid min-h-[56px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-line py-4 text-fg no-underline transition-colors hover:bg-bg-raised"
              >
                <span className="min-w-0 text-[16px] font-semibold tracking-[-0.01em]">
                  {item.title}
                </span>
                <span
                  className="inline-block text-green-text transition-transform duration-300 ease-[var(--ease)] group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </nav>
        </Reveal>

        <div className="service-cta">
          <a href={FINAL_CTA.href} className="btn btn-green">
            {FINAL_CTA.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
