import { GROWTH_PHILOSOPHY } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

const STATEMENT_GREEN = "We build the system behind growth.";
const statementInk = GROWTH_PHILOSOPHY.statement
  .slice(0, GROWTH_PHILOSOPHY.statement.indexOf(STATEMENT_GREEN))
  .trimEnd();

export function System() {
  return (
    <section
      id="system"
      className="px-[var(--pad)] pt-[min(6vw,64px)] pb-[min(6vw,64px)]"
    >
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">{GROWTH_PHILOSOPHY.heading}</p>
          <h2 className="display max-w-[18ch] text-[clamp(34px,5vw,58px)]">
            <span className="text-fg">{statementInk}</span>{" "}
            <span className="text-green">{STATEMENT_GREEN}</span>
          </h2>
          {GROWTH_PHILOSOPHY.copy.map((paragraph) => (
            <p key={paragraph} className="support">
              {paragraph}
            </p>
          ))}
          <p className="display mt-10 max-w-[16ch] text-[clamp(32px,4.4vw,52px)] text-green">
            {GROWTH_PHILOSOPHY.emphasis}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
