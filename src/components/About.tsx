import Link from "next/link";
import { ABOUT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";
import styles from "./About.module.css";

const FOUNDING_EMPHASIS =
  "Modern businesses shouldn't have to choose between great marketing and great technology.";
const foundingEmphasisIndex = ABOUT.copy[0].indexOf(FOUNDING_EMPHASIS);
const foundingLead = ABOUT.copy[0].slice(0, foundingEmphasisIndex);
const foundingRest = ABOUT.copy[0].slice(
  foundingEmphasisIndex + FOUNDING_EMPHASIS.length,
);

export function About() {
  return (
    <section className={`ps-section ${styles.section}`}>
      <div className="ps-inner">
        <Reveal>
          <Link href="/#about" aria-label="Back to Home" className={styles.back}>
            ← Home
          </Link>
          <div className={styles.layout}>
            <header>
              <p className="ps-kicker">{ABOUT.subheading}</p>
              <h1 className={`ps-h2 ${styles.title}`}>{ABOUT.heading}</h1>
            </header>
            <div className={styles.body}>
              <p className={`ps-lead ${styles.lead}`}>
                {foundingLead}
                <span className={styles.emphasis}>{FOUNDING_EMPHASIS}</span>
                {foundingRest}
              </p>
              <p className={`ps-lead ${styles.lead}`}>{ABOUT.copy[1]}</p>
              {ABOUT.copy.slice(2).map((paragraph) => (
                <p key={paragraph} className="ps-support">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
