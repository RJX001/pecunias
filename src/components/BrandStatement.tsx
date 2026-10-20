import { BUILT_FOR } from "@/data/homepage-copy";

function splitAtComma(statement: string) {
  const index = statement.indexOf(",");
  if (index < 0) {
    return { lead: statement, resolve: "" };
  }
  return {
    lead: statement.slice(0, index),
    resolve: statement.slice(index),
  };
}

export function BrandStatement() {
  return (
    <section aria-labelledby="built-for-heading" className="ps-section">
      <div className="ps-inner">
        <h2 id="built-for-heading" className="ps-h2">
          <span className="block">{BUILT_FOR.headingInk}</span>{" "}
          <span className="block">{BUILT_FOR.headingGreen}</span>
        </h2>
        {BUILT_FOR.copy.map((paragraph, index) => (
          <p
            key={paragraph}
            className={`m-0 mb-5 text-[15px] ${index === 0 ? "text-fg" : "text-green-text"}`}
          >
            {paragraph}
          </p>
        ))}
        {BUILT_FOR.statements.map((statement) => {
          const { lead, resolve } = splitAtComma(statement);
          return (
            <p key={statement} className="m-0 mb-5 text-[15px] text-fg">
              {lead}
              <span className="text-green-text">{resolve}</span>
            </p>
          );
        })}
      </div>
    </section>
  );
}
