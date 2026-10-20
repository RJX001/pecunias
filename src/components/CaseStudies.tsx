"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { caseStudies } from "@/data/case-studies";
import styles from "./CaseStudies.module.css";

const HEADING = "Case Studies";
const SWIPE_THRESHOLD = 48;

export function CaseStudies() {
  const windowRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const last = caseStudies.length - 1;

  useEffect(() => {
    const slide = slideRef.current;
    if (!slide) return;
    const measure = () => {
      const gap = 20;
      setStep(slide.getBoundingClientRect().width + gap);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(slide);
    return () => observer.disconnect();
  }, []);

  const go = (next: number) => {
    setIndex(Math.min(last, Math.max(0, next)));
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
  };

  const startX = useRef<number | null>(null);
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    startX.current = event.clientX;
  };
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const delta = event.clientX - startX.current;
    startX.current = null;
    if (delta <= -SWIPE_THRESHOLD) go(index + 1);
    else if (delta >= SWIPE_THRESHOLD) go(index - 1);
  };

  return (
    <section id="case-studies" className="ps-section" aria-labelledby="case-studies-heading">
      <div className="ps-inner">
        <p className="ps-kicker">{HEADING}</p>
        <div className={styles.heading}>
          <h2 id="case-studies-heading" className="ps-h2">
            {HEADING}
          </h2>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.control}
              aria-label="Previous case study"
              disabled={index === 0}
              onClick={() => go(index - 1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className={styles.control}
              aria-label="Next case study"
              disabled={index === last}
              onClick={() => go(index + 1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          ref={windowRef}
          className={styles.window}
          role="region"
          aria-roledescription="carousel"
          aria-label="Illustrative case studies"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            startX.current = null;
          }}
        >
          <div
            className={styles.track}
            style={{ transform: step ? `translateX(${-step * index}px)` : undefined }}
          >
            {caseStudies.map((study, slideIndex) => {
              const visible = slideIndex === index;
              return (
                <article
                  key={study.name}
                  ref={slideIndex === 0 ? slideRef : undefined}
                  className={styles.slide}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${slideIndex + 1} of ${caseStudies.length}: ${study.name}`}
                  aria-hidden={visible ? undefined : true}
                  inert={visible ? undefined : true}
                >
                  <div className={styles.cover} aria-hidden="true">
                    <div className={`${styles.shape} ${styles[study.cover]}`} />
                    <span className={styles.number}>{study.number}</span>
                  </div>
                  <h3 className={styles.name}>{study.name}</h3>
                </article>
              );
            })}
          </div>
        </div>
        <p className={styles.position} aria-live="polite">
          {index + 1} / {caseStudies.length}
        </p>
        <p className={styles.note}>Illustrative concept covers.</p>
      </div>
    </section>
  );
}
