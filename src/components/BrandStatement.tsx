import { BUILT_FOR } from "@/data/homepage-copy";

export function BrandStatement() {
  return (
    <section className="section-pad border-t border-line">
      <div className="mx-auto max-w-[var(--maxw)]">
        <h2 className="display max-w-[16ch] text-[clamp(34px,5vw,72px)]">
          {BUILT_FOR.heading}
        </h2>
        {BUILT_FOR.copy.map((paragraph, index) => (
          <p
            key={paragraph}
            className={`m-0 max-w-[54ch] text-[17px] leading-relaxed text-fg-dim ${
              index === 0 ? "mt-10" : "mt-6"
            }`}
          >
            {paragraph}
          </p>
        ))}
        <div className="mt-12 grid gap-4 border-t border-line pt-10">
          {BUILT_FOR.statements.map((statement) => (
            <p
              key={statement}
              className="m-0 text-[clamp(22px,3.2vw,40px)] font-bold tracking-[-0.02em] leading-[1.15]"
            >
              {statement}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
