import { Reveal } from "./Reveal";

const BLOCKS = [
  {
    title: "One owner",
    copy: "One team accountable for the whole loop. No vendor ping-pong.",
  },
  {
    title: "Commercial first",
    copy: "If it doesn't move revenue, pipeline or margin, it doesn't ship.",
  },
  {
    title: "Built as a system",
    copy: "Digital, acquisition, automation, commerce and creative share one plan.",
  },
  {
    title: "Quote on the work",
    copy: "Scoped to the business. No public price list to guess from.",
  },
  {
    title: "Kept running",
    copy: "Install is the start. The system is managed, not handed over and forgotten.",
  },
] as const;

export function Why() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">Why Pecunia</p>
          <h2 className="display max-w-[14ch] text-[clamp(34px,5vw,58px)]">
            A growth system, not another agency.
          </h2>
        </Reveal>

        <div className="why-grid mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {BLOCKS.map((block) => (
            <article key={block.title} className="bg-bg p-7">
              <h3 className="m-0 text-[20px] font-bold tracking-[-0.02em]">
                {block.title}
              </h3>
              <p className="mt-3 m-0 max-w-[36ch] text-[15px] leading-relaxed text-fg-dim">
                {block.copy}
              </p>
            </article>
          ))}
          <article className="bg-bg-raised p-7 sm:col-span-2 lg:col-span-1">
            <p className="m-0 text-[20px] font-bold tracking-[-0.02em] text-green">
              One growth system.
            </p>
            <p className="mt-3 m-0 max-w-[36ch] text-[15px] leading-relaxed text-fg-dim">
              That is the product. Everything else is a line inside it.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
