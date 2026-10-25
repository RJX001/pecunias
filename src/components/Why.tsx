import { BUILT_FOR, WHY_PECUNIA } from "@/data/homepage-copy";
import { WhyStatus } from "./WhyStatus";
import styles from "./Why.module.css";

export function Why() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className={`ps-section ps-section-raised ${styles.section}`}
    >
      <div className="ps-inner">
        <div className={styles.intro}>
          <h2 id="why-heading" className="ps-h2">
            {WHY_PECUNIA.heading}
          </h2>
          <p className={styles.support}>{WHY_PECUNIA.support}</p>
          <p className={styles.explanation}>{WHY_PECUNIA.explanation}</p>
        </div>

        <WhyStatus items={WHY_PECUNIA.statuses} />

        <ul className={styles.capabilities}>
          {WHY_PECUNIA.capabilities.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>

        <p className={styles.closing}>{WHY_PECUNIA.closing}</p>

        <div className={styles.audience}>
          <p className={styles.audienceTitle}>{BUILT_FOR.title}</p>
          <p className={styles.audienceNote}>{BUILT_FOR.note}</p>
        </div>
      </div>
    </section>
  );
}
