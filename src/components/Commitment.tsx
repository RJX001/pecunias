import { COMMITMENT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";
import styles from "./Commitment.module.css";

const CLOSING_RESOLVE = "We find out why. Then we fix it.";
const closingLead = COMMITMENT.closing
  .slice(0, COMMITMENT.closing.indexOf(CLOSING_RESOLVE))
  .trim();

export function Commitment() {
  return (
    <section
      id="commitment"
      aria-labelledby="commitment-heading"
      className="ps-section"
    >
      <div className="ps-inner">
        <Reveal>
          <p className="ps-kicker" aria-hidden="true">
            {COMMITMENT.heading}
          </p>
          <h2 id="commitment-heading" className="ps-h2">
            {COMMITMENT.heading}
          </h2>
          <p className="ps-lead">{COMMITMENT.statement}</p>
          <p className="ps-support">{COMMITMENT.support}</p>
        </Reveal>

        <Reveal>
          <ol className={styles.list}>
            {COMMITMENT.items.map((item, index) => (
              <li key={item} className={styles.item}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <p className="ps-support">{closingLead}</p>
          <p className="ps-lead">{CLOSING_RESOLVE}</p>
        </Reveal>
      </div>
    </section>
  );
}
