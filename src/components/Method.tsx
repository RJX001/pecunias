"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import {
  APPROACH_HEADING,
  APPROACH_INTRO,
  APPROACH_SUPPORT,
  approachStages,
} from "@/data/approach";
import { Reveal } from "./Reveal";
import styles from "./Method.module.css";

export function Method() {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const steps = Array.from(list.children) as HTMLElement[];
    const pending = steps.filter((step) => {
      if (step.getBoundingClientRect().top < window.innerHeight) {
        step.dataset.drawn = "true";
        return false;
      }
      return true;
    });
    list.dataset.armed = "true";
    if (pending.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.drawn = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    pending.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="ps-section"
    >
      <div className="ps-inner">
        <Reveal>
          <p className="ps-kicker" aria-hidden="true">
            {APPROACH_HEADING}
          </p>
          <h2 id="approach-heading" className="ps-h2">
            {APPROACH_HEADING}
          </h2>
          <p className="ps-lead">{APPROACH_INTRO}</p>
          <p className="ps-support">{APPROACH_SUPPORT}</p>
        </Reveal>

        <ol ref={listRef} className={styles.steps}>
          {approachStages.map((stage, index) => (
            <li
              key={stage.title}
              className={styles.step}
              style={{ "--step-column": index % 2 } as CSSProperties}
            >
              <h3 className={styles.title}>{stage.title}</h3>
              {stage.body.map((paragraph) => (
                <p key={paragraph} className={styles.body}>
                  {paragraph}
                </p>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
