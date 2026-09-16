import { ABOUT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">{ABOUT.subheading}</p>
          <h2 className="display max-w-[14ch] text-[clamp(34px,5vw,58px)]">
            {ABOUT.heading}
          </h2>
          {ABOUT.copy.map((paragraph) => (
            <p key={paragraph} className="support">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
