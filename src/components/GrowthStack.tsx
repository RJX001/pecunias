import Link from "next/link";
import {
  GROWTH_STACK_HEADING,
  GROWTH_STACK_INTRO,
  growthStack,
} from "@/data/growth-stack";
import { Reveal } from "./Reveal";

export function GrowthStack() {
  return (
    <section id="stack" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <h2
            id="growth-stack-heading"
            className="display max-w-[18ch] text-[clamp(34px,5vw,58px)]"
          >
            {GROWTH_STACK_HEADING}
          </h2>
          <p className="support">{GROWTH_STACK_INTRO}</p>
        </Reveal>

        <nav aria-labelledby="growth-stack-heading">
          <ul className="mt-14 m-0 list-none border-y border-line p-0">
            {growthStack.map((row) => (
              <li
                key={row.title}
                className="border-b border-line last:border-b-0"
              >
                <Link
                  href={`/services/${row.slug}`}
                  className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-7 text-left no-underline transition-colors hover:bg-bg-raised sm:gap-6 sm:py-8"
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
                    className="inline-block text-green-text transition-transform duration-300 ease-[var(--ease)] motion-safe:group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
