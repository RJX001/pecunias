"use client";

import { useEffect, useRef } from "react";
import { BUILT_FOR, WHY_PECUNIA } from "@/data/homepage-copy";
import styles from "./Why.module.css";

const DISCIPLINES = [
  "Strategy",
  "Technology",
  "Acquisition",
  "Conversion",
  "Creative",
  "Automation",
] as const;

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

function DisciplineSequence({ leadMark = false }: { leadMark?: boolean }) {
  return (
    <span className={styles.sequence}>
      {leadMark ? <span className={styles.mark}>↗</span> : null}
      {DISCIPLINES.map((word, index) => (
        <span key={word} className={styles.word}>
          {index > 0 ? <span className={styles.mark}>↗</span> : null}
          {word}
        </span>
      ))}
    </span>
  );
}

export function Why() {
  const sectionRef = useRef<HTMLElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const items = emphasisItems(WHY_PECUNIA.emphasis);

  useEffect(() => {
    const section = sectionRef.current;
    const band = bandRef.current;
    if (!section || !band) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (media.matches) {
        band.style.transform = "";
        return;
      }
      const rect = section.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)),
      );
      band.style.transform = `translateX(${-progress * 35}%)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    media.addEventListener("change", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      media.removeEventListener("change", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
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

        <div className={styles.billboard}>
          <div ref={bandRef} className={styles.band} aria-hidden="true">
            <DisciplineSequence />
            <DisciplineSequence leadMark />
          </div>
        </div>

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
