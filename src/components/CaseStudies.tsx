"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies";
import styles from "./CaseStudies.module.css";

const HEADING = "Premium Websites.";
const INTRO =
  "Distinctive design. Seamless experiences. Explore the websites and digital platforms we've built for real businesses.";
const PIN_QUERY =
  "(min-width: 960px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
const PIN_FALLBACK = 108;
const SWIPE_THRESHOLD = 48;

function pinnedRunway() {
  return window.matchMedia(PIN_QUERY).matches;
}

function scrollByInstant(top: number) {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollBy({ top, behavior: "auto" });
  root.style.scrollBehavior = previous;
}

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const pinTopRef = useRef(PIN_FALLBACK);
  const startX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const last = caseStudies.length - 1;
  const project = caseStudies[index];

  useEffect(() => {
    const slide = slideRef.current;
    const frame = windowRef.current;
    if (!slide || !frame) return;
    const measure = () => {
      const width = slide.getBoundingClientRect().width;
      setStep(width > 0 ? width : frame.getBoundingClientRect().width);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(slide);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const media = window.matchMedia(PIN_QUERY);
    const header = document.querySelector("[data-site-header]");

    const measurePin = () => {
      const height = header?.getBoundingClientRect().height ?? PIN_FALLBACK - 16;
      const next = Math.ceil(height) + 16;
      if (next === pinTopRef.current && section.style.getPropertyValue("--pin-top")) return;
      pinTopRef.current = next;
      section.style.setProperty("--pin-top", `${next}px`);
    };

    const sync = () => {
      if (!media.matches) return;
      const pin = pinTopRef.current;
      const rect = section.getBoundingClientRect();
      const count = caseStudies.length;
      if (rect.top > pin) {
        setIndex(0);
        return;
      }
      if (rect.bottom < window.innerHeight) {
        setIndex(count - 1);
        return;
      }
      const run = section.offsetHeight - window.innerHeight + pin;
      const progress = Math.max(0, Math.min(1, (pin - rect.top) / Math.max(run, 1)));
      setIndex(Math.min(count - 1, Math.floor(progress * count)));
    };

    const onResize = () => {
      measurePin();
      sync();
    };

    measurePin();
    sync();
    media.addEventListener("change", onResize);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    const observer = new ResizeObserver(onResize);
    observer.observe(section);
    if (header) observer.observe(header);
    return () => {
      media.removeEventListener("change", onResize);
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  const scrollToIndex = (target: number) => {
    const section = sectionRef.current;
    if (!section || !pinnedRunway()) return;
    const pin = pinTopRef.current;
    const run = section.offsetHeight - window.innerHeight + pin;
    if (run <= 0) return;
    const rect = section.getBoundingClientRect();
    const desiredTop = pin - ((target + 0.5) / caseStudies.length) * run;
    scrollByInstant(rect.top - desiredTop);
  };

  const go = (next: number) => {
    const clamped = Math.min(last, Math.max(0, next));
    if (clamped === index) return;
    const active = document.activeElement;
    const slides = windowRef.current?.querySelectorAll("article");
    const current = slides?.[index];
    if (clamped !== index && active instanceof HTMLElement && current?.contains(active)) {
      windowRef.current?.focus({ preventScroll: true });
    }
    setIndex(clamped);
    scrollToIndex(clamped);
  };

  const skip = () => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    scrollByInstant(rect.bottom - pinTopRef.current);
    setIndex(last);
    endRef.current?.focus({ preventScroll: true });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      target.closest("input, textarea, select")
    ) {
      return;
    }
    event.preventDefault();
    go(event.key === "ArrowRight" ? index + 1 : index - 1);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (pinnedRunway()) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    startX.current = event.clientX;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const delta = event.clientX - startX.current;
    startX.current = null;
    if (pinnedRunway()) return;
    if (delta <= -SWIPE_THRESHOLD) go(index + 1);
    else if (delta >= SWIPE_THRESHOLD) go(index - 1);
  };

  return (
    <section
      ref={sectionRef}
      id="premium-websites"
      className={`ps-section ${styles.section}`}
      aria-labelledby="premium-websites-heading"
      onKeyDown={onKeyDown}
    >
      <div className={`ps-inner ${styles.sectionHeading}`}>
        <p className="ps-kicker">Selected work</p>
        <h2 id="premium-websites-heading" className="ps-h2">{HEADING}</h2>
        <p className={styles.intro}>{INTRO}</p>
      </div>
      <div className={styles.pin}>
        <div className={`ps-inner ${styles.pinInner}`}>

          <div className={styles.heading}>
            <div className={styles.controls}>
              <button
                type="button"
                className={styles.control}
                aria-label="Previous website"
                disabled={index === 0}
                onClick={() => go(index - 1)}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className={styles.control}
                aria-label="Next website"
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
            aria-label="Premium websites"
            tabIndex={0}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              startX.current = null;
            }}
          >
            <div
              className={styles.track}
              style={{ transform: `translate3d(${-step * index}px, 0, 0)` }}
            >
              {caseStudies.map((study, slideIndex) => {
                const visible = slideIndex === index;
                return (
                  <article
                    key={study.url}
                    ref={slideIndex === 0 ? slideRef : undefined}
                    className={styles.slide}
                    aria-hidden={visible ? undefined : true}
                    inert={visible ? undefined : true}
                    aria-label={`${slideIndex + 1} of ${caseStudies.length}: ${study.name}`}
                  >
                    <p className={styles.category}>{study.category}</p>
                    <h3 className={styles.name}>{study.name}</h3>
                    <a
                      className={styles.screen}
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${study.name} website (opens in a new tab)`}
                    >
                      <span className={styles.browser} aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <small>{study.host}</small>
                      </span>
                      <span className={styles.shotFrame}>
                        <Image
                          src={study.image}
                          alt={study.imageAlt}
                          fill
                          sizes="(min-width: 1200px) 1040px, 90vw"
                          className={styles.shot}
                        />
                      </span>
                      <span className={styles.open} aria-hidden="true">
                        Visit website <span aria-hidden="true">↗</span>
                      </span>
                    </a>
                  </article>
                );
              })}
            </div>
          </div>

          <div className={styles.meta}>
            <p className={styles.position} aria-live="polite">
              <span className={styles.meter} aria-hidden="true">
                {caseStudies.map((study, meterIndex) => (
                  <span
                    key={study.url}
                    data-on={meterIndex <= index ? "true" : "false"}
                  />
                ))}
              </span>
              <span aria-hidden="true">
                {index + 1} / {caseStudies.length}
              </span>
              <span className={styles.srOnly}>
                {project.name}, {index + 1} of {caseStudies.length}
              </span>
            </p>
            <button type="button" className={styles.skip} onClick={skip}>
              Skip previews <span aria-hidden="true">↓</span>
            </button>
          </div>
          <p className={styles.hint}>Scroll to explore the websites</p>
        </div>
      </div>
      <div ref={endRef} tabIndex={-1} className={styles.endMark}>
        End of website previews
      </div>
    </section>
  );
}
