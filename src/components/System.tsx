import { GROWTH_PHILOSOPHY } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";
import styles from "./System.module.css";

const STATEMENT_SECOND = "We build the system behind growth.";
const statementFirst = GROWTH_PHILOSOPHY.statement
  .slice(0, GROWTH_PHILOSOPHY.statement.indexOf(STATEMENT_SECOND))
  .trimEnd();

export function System() {
  return (
    <section
      id="system"
      aria-labelledby="system-heading"
      className="ps-section ps-section-raised"
    >
      <Reveal className={`ps-inner ${styles.grid}`}>
        <p className={`ps-kicker ${styles.full}`}>
          {GROWTH_PHILOSOPHY.heading}
        </p>
        <h2 id="system-heading" className={`ps-h2 ${styles.full}`}>
          <span className={styles.line}>{statementFirst}</span>{" "}
          <span className={styles.line}>{STATEMENT_SECOND}</span>
        </h2>
        {GROWTH_PHILOSOPHY.copy.map((paragraph) => (
          <p key={paragraph} className="ps-support">
            {paragraph}
          </p>
        ))}
        <p className={styles.emphasis}>{GROWTH_PHILOSOPHY.emphasis}</p>
      </Reveal>
    </section>
  );
}
