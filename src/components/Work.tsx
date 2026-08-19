import { caseStudies } from "@/data/work";

export function Work() {
  const hasPlaceholders = caseStudies.some((study) => study.isPlaceholder);

  return (
    <section id="work" className="section border-t border-line py-[64px] lg:py-[100px]">
      <div className="wrap mx-auto max-w-[1180px] px-8">
        <p className="eyebrow mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-brass">
          Statement Highlights
        </p>
        <h2 className="font-display mb-10 max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.15] tracking-tight text-paper lg:mb-14">
          Recent account performance.
        </h2>

        <div className="grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className="ledger-card relative grid grid-rows-[auto_auto_1fr_auto] gap-6 bg-ink-2 p-7 lg:p-8"
            >
              <header className="flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-brass">
                  {study.tags}
                </span>
                {study.isPlaceholder ? (
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                    Illustrative
                  </span>
                ) : null}
              </header>

              <p className="font-display text-[clamp(2.75rem,5vw,3.75rem)] font-light leading-none tracking-tight text-paper">
                {study.stat}
              </p>

              <h3 className="font-display text-xl font-normal tracking-tight text-paper">
                {study.name}
              </h3>

              <p className="font-sans text-[15px] leading-relaxed text-stone">
                {study.description}
              </p>
            </article>
          ))}
        </div>

        {hasPlaceholders ? (
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-stone">
            Illustrative figures
          </p>
        ) : null}
      </div>
    </section>
  );
}
