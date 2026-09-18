import Link from "next/link";
import {
  GROWTH_STACK_HEADING,
  GROWTH_STACK_INTRO,
  growthStack,
} from "@/data/growth-stack";
import { FINAL_CTA } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

const INTRO_GREEN = "Not four separate suppliers.";
const STACK_KICKER = GROWTH_STACK_HEADING.slice(
  0,
  GROWTH_STACK_HEADING.indexOf(" — "),
);
const introInk = GROWTH_STACK_INTRO.slice(
  0,
  GROWTH_STACK_INTRO.indexOf(INTRO_GREEN),
).trimEnd();

export function GrowthStack() {
  return (
    <section
      id="services"
      className="px-[var(--pad)] pt-[min(6vw,64px)] pb-[min(10vw,110px)]"
    >
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">{STACK_KICKER}</p>
          <h2
            id="growth-stack-heading"
            className="display max-w-[18ch] text-[clamp(34px,5vw,58px)]"
          >
            <span className="text-fg">
              {GROWTH_STACK_HEADING.slice(
                0,
                GROWTH_STACK_HEADING.indexOf("The Growth Stack"),
              )}
            </span>
            <span className="text-green">The Growth Stack</span>
          </h2>
          <p className="support">
            <span className="text-fg">{introInk}</span>{" "}
            <span className="text-green">{INTRO_GREEN}</span>
          </p>
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
                    <span className="mt-1 block text-[15px] text-content-text">
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

        <div className="service-cta">
          <a href={FINAL_CTA.href} className="btn btn-green">
            {FINAL_CTA.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
