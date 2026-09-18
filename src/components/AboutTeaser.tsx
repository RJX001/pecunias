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

const ABOUT_BODY =
  "m-0 max-w-[60ch] text-[19px] font-bold leading-[1.55] tracking-[-0.02em] text-content-text md:text-[20px]";

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
            <p className={`${ABOUT_BODY} mt-[18px]`}>
              {foundingInk}
              <span className="text-green">{FOUNDING_GREEN}</span>
              {foundingRest}
            </p>
            <p className={`${ABOUT_BODY} mt-[18px]`}>{ABOUT.copy[1]}</p>
          </div>
          <Link href="/about" className="btn btn-green mt-8">
            About Us →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
