import { ABOUT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="section-pad pt-32 md:pt-44">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">{ABOUT.subheading}</p>
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
