import { caseStudies } from "@/data/case-studies";

const HEADING = "Case Studies";

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <p className="kicker">{HEADING}</p>
        <h2 className="display text-[clamp(34px,5vw,58px)]">{HEADING}</h2>

        <ul className="mt-14 m-0 list-none border-y border-line p-0">
          {caseStudies.map((study) => (
            <li
              key={study.name}
              className="border-b border-line last:border-b-0"
            >
              <article className="group grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-7 transition-colors hover:bg-bg-raised sm:gap-6 sm:py-8">
                <span className="min-w-0">
                  <span className="service-row-num block text-fg">
                    {study.number}
                  </span>
                  <span className="mt-1 block text-[22px] font-bold tracking-[-0.02em] text-fg md:text-[28px]">
                    {study.name}
                  </span>
                  <span
                    className="mt-1 block min-h-[1.5em] text-[15px]"
                    aria-hidden="true"
                  />
                </span>
                <span
                  className="inline-block text-green-text transition-transform duration-300 ease-[var(--ease)] motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  →
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
