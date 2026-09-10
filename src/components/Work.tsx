import { clientsOnTheBooks } from "@/data/clients";
import { caseStudies } from "@/data/work";
import { WorkCarousel } from "@/components/WorkCarousel";

export function Work() {
  return (
    <section id="work" className="section border-t border-line py-[64px] lg:py-[100px]">
      <div className="wrap mx-auto max-w-[1180px] px-8">
        <p className="eyebrow mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-brass">
          Our Work
        </p>
        <h2 className="font-display mb-5 max-w-[22ch] text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.15] tracking-tight text-paper">
          Trusted by teams who needed a system, not more noise.
        </h2>
        <p className="mb-10 max-w-[42rem] font-sans text-[0.95rem] leading-relaxed text-stone md:mb-12 md:text-base">
          A running account of who we work with, and what we&apos;ve built for
          them.
        </p>

        <div className="mb-10 border border-line px-5 py-5 lg:mb-12 lg:px-8 lg:py-6">
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-stone">
            Clients on the books
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-6 lg:justify-between">
            {clientsOnTheBooks.map((client) => (
              <li
                key={client.name}
                className="flex shrink-0 items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-stone"
              >
                <span
                  aria-hidden="true"
                  className="size-1 shrink-0 rounded-full bg-stone"
                />
                <span>{client.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-stone">
          Selected Case Studies
        </p>
        <WorkCarousel studies={caseStudies} />
      </div>
    </section>
  );
}
