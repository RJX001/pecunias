import { COMMITMENT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

export function Why() {
  return (
    <section id="commitment" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <h2 className="display max-w-[14ch] text-[clamp(34px,5vw,58px)]">
            {COMMITMENT.heading}
          </h2>
          <p className="mt-6 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] md:text-[26px]">
            {COMMITMENT.statement}
          </p>
          <p className="support">{COMMITMENT.support}</p>
        </Reveal>

        <Reveal>
          <ol className="mt-14 m-0 grid list-none gap-0 border-t border-line p-0 sm:grid-cols-2">
            {COMMITMENT.items.map((item, index) => (
              <li
                key={item}
                className="grid grid-cols-[auto_1fr] items-baseline gap-4 border-b border-line px-0 py-5 sm:px-6 sm:odd:border-r"
              >
                <span className="text-[13px] font-semibold text-fg-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] font-semibold tracking-[-0.01em] text-fg">
                  {item}
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-10 m-0 max-w-[48ch] text-[17px] leading-relaxed text-fg-dim">
            {COMMITMENT.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
