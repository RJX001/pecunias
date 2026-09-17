import Link from "next/link";
import { ABOUT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

const TEASER_COPY = ABOUT.copy.slice(0, 2);

export function AboutTeaser() {
  return (
    <section id="about" className="section-pad section-pad-cluster">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">{ABOUT.subheading}</p>
          <h2 className="display max-w-[12ch] text-[clamp(40px,7vw,88px)]">
            {ABOUT.heading}
          </h2>
          <div className="mt-6 md:mt-10">
            {TEASER_COPY.map((paragraph) => (
              <p key={paragraph} className="support max-w-[60ch]">
                {paragraph}
              </p>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex min-h-11 items-center text-[18px] font-semibold text-green-text no-underline transition-colors hover:text-fg"
          >
            About Us →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
