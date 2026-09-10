import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";

export function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">Case study</p>
          <h2 className="display max-w-[16ch] text-[clamp(34px,5vw,58px)]">
            From [the problem] to [the outcome].
          </h2>
        </Reveal>

        <article className="mt-14 border border-line bg-bg-raised">
          <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-line px-6 py-4 text-[13px] text-fg-faint">
            <p className="m-0">Template · pending live account</p>
            <p className="m-0">Illustrative</p>
          </div>

          <div className="case-columns grid gap-px bg-line lg:grid-cols-3">
            <div className="bg-bg-raised p-6">
              <p className="m-0 text-[13px] font-medium text-fg-faint">Challenge</p>
              <p className="mt-3 m-0 text-[15px] leading-relaxed text-fg-dim">
                [the problem]
              </p>
            </div>
            <div className="bg-bg-raised p-6">
              <p className="m-0 text-[13px] font-medium text-fg-faint">
                Intervention
              </p>
              <p className="mt-3 m-0 text-[15px] leading-relaxed text-fg-dim">
                The connected system — not a one-off campaign.
              </p>
            </div>
            <div className="bg-bg-raised p-6">
              <p className="m-0 text-[13px] font-medium text-fg-faint">Outcome</p>
              <p className="mt-3 m-0 text-[15px] leading-relaxed text-fg-dim">
                [the outcome]
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
            <p className="m-0 text-[13px] text-fg-faint">Results row · 0 / 0 / 0</p>
            <Magnetic>
              <a href="#contact" className="btn btn-ghost">
                Request a scoped proposal
              </a>
            </Magnetic>
          </div>
        </article>
      </div>
    </section>
  );
}
