import Link from "next/link";
import { ABOUT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

const FOUNDING_GREEN =
  "Modern businesses shouldn't have to choose between great marketing and great technology.";
const foundingGreenIndex = ABOUT.copy[0].indexOf(FOUNDING_GREEN);
const foundingInk = ABOUT.copy[0].slice(0, foundingGreenIndex);
const foundingRest = ABOUT.copy[0].slice(
  foundingGreenIndex + FOUNDING_GREEN.length,
);

export function About() {
  return (
    <section className="section-pad section-page-top">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <Link
            href="/#about"
            aria-label="Back to Home"
            className="inline-flex min-h-11 items-center text-[14px] font-medium text-fg-dim no-underline transition-colors hover:text-fg"
          >
            ← Home
          </Link>
          <p className="kicker mt-10">{ABOUT.subheading}</p>
          <h1 className="display max-w-[12ch] text-[clamp(40px,7vw,88px)]">
            {ABOUT.heading}
          </h1>
          <div className="mt-6 md:mt-10">
            <p className="m-0 max-w-[60ch] text-[22px] font-bold tracking-[-0.02em] md:text-[26px]">
              {foundingInk}
              <span className="text-green">{FOUNDING_GREEN}</span>
              {foundingRest}
            </p>
            {ABOUT.copy.slice(1).map((paragraph) => (
              <p key={paragraph} className="support max-w-[60ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
