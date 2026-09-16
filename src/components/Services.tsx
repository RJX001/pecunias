import Link from "next/link";
import {
  GROWTH_STACK_HEADING,
  GROWTH_STACK_INTRO,
  growthStack,
  splitGrowthSystemTitle,
} from "@/data/growth-stack";
import { FINAL_CTA } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section className="section-pad pt-32 md:pt-44">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <h1 className="display max-w-[16ch] text-[clamp(40px,7vw,88px)]">
            {GROWTH_STACK_HEADING}
          </h1>
          <p className="support">{GROWTH_STACK_INTRO}</p>
        </Reveal>

        <nav aria-label={GROWTH_STACK_HEADING} className="mt-14 border-y border-line">
          {growthStack.map((system) => {
            const { code, name } = splitGrowthSystemTitle(system.title);
            return (
              <Link
                key={system.slug}
                href={`/services/${system.slug}`}
                className="group grid min-h-[72px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-line py-6 text-fg no-underline last:border-b-0 transition-colors hover:bg-bg-raised sm:min-h-[88px] sm:py-8"
              >
                <span className="min-w-0">
                  <span className="block font-mono text-[13px] font-semibold text-green-text">
                    {code}
                  </span>
                  <span className="mt-1 block font-display text-[22px] font-bold tracking-[-0.02em] text-fg md:text-[28px]">
                    {name}
                  </span>
                </span>
                <span
                  className="inline-block pr-1 text-[22px] leading-none text-green-text transition-transform duration-300 ease-[var(--ease)] group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-12">
          <a href={FINAL_CTA.href} className="btn btn-solid">
            {FINAL_CTA.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
