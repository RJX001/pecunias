import Link from "next/link";
import { ABOUT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

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
            {ABOUT.copy.map((paragraph) => (
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
