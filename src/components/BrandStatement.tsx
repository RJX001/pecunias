import { BUILT_FOR } from "@/data/homepage-copy";

function splitAtComma(statement: string) {
  const index = statement.indexOf(",");
  if (index < 0) {
    return { ink: statement, green: "" };
  }
  return {
    ink: statement.slice(0, index),
    green: statement.slice(index),
  };
}

export function BrandStatement() {
  return (
    <section className="section-pad section-pad-cluster">
      <div className="mx-auto max-w-[var(--maxw)]">
        <h2 className="display max-w-[24ch] text-[clamp(34px,5vw,72px)]">
          <span className="block">{BUILT_FOR.headingInk}</span>
          <span className="block text-green">{BUILT_FOR.headingGreen}</span>
        </h2>
        {BUILT_FOR.copy.map((paragraph, index) => (
          <p
            key={paragraph}
            className={
              index === 0
                ? "m-0 mt-10 max-w-[54ch] text-[17px] leading-relaxed text-content-text"
                : "m-0 mt-6 max-w-[54ch] text-[clamp(18px,2.1vw,22px)] font-extrabold leading-relaxed tracking-[-0.02em] text-green"
            }
          >
            {paragraph}
          </p>
        ))}
        <div className="mt-10 flex flex-col gap-3 text-left md:mt-12">
          {BUILT_FOR.statements.map((statement) => {
            const { ink, green } = splitAtComma(statement);
            return (
              <p
                key={statement}
                className="m-0 text-[clamp(22px,3.2vw,40px)] font-bold leading-[1.15] tracking-[-0.02em] text-fg"
              >
                <span>{ink}</span>
                <span className="text-green">{green}</span>
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
