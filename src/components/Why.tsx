import { BUILT_FOR, WHY_PECUNIA } from "@/data/homepage-copy";
import styles from "./Why.module.css";

function emphasisItems(emphasis: string) {
  return emphasis
    .split(".")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => `${part}.`);
}

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

export function Why() {
  const items = emphasisItems(WHY_PECUNIA.emphasis);

  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className={`ps-section ps-section-raised ${styles.section}`}
    >
      <div className="ps-inner">
        <p className="ps-kicker" aria-hidden="true">
          {WHY_PECUNIA.heading}
        </p>
        <div className={styles.top}>
          <div>
            <h2 id="why-heading" className="ps-h2">
              {WHY_PECUNIA.heading}
            </h2>
            <p className={styles.lead}>{WHY_PECUNIA.copy[0]}</p>
          </div>
          <div className={styles.copy}>
            <p>{WHY_PECUNIA.copy[1]}</p>
            <p>{WHY_PECUNIA.copy[2]}</p>
          </div>
        </div>

        <ol className={styles.disconnected}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <p className={styles.bridge}>{WHY_PECUNIA.then}</p>
        <p className={styles.closingLine}>{WHY_PECUNIA.closing}</p>

        <div className={styles.audience}>
          <h2 id="built-for-heading" className="ps-h2">
            <span className={styles.headingLine}>{BUILT_FOR.headingInk}</span>
            <span className={styles.headingLine}>{BUILT_FOR.headingGreen}</span>
          </h2>
          {BUILT_FOR.copy.map((paragraph, paragraphIndex) => (
            <p
              key={paragraph}
              className={
                paragraphIndex === 0 ? styles.audienceCopy : styles.audienceEmphasis
              }
            >
              {paragraph}
            </p>
          ))}
          <ul className={styles.statements}>
            {BUILT_FOR.statements.map((statement) => {
              const { lead, resolve } = splitAtComma(statement);
              return (
                <li key={statement}>
                  {lead}
                  <span className={styles.resolve}>{resolve}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
