"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  HERO_CTA,
  HERO_HEADLINES,
  HERO_LEAD_IN,
  HERO_RAIL,
  HERO_SUPPORT,
} from "@/data/hero-headlines";
import { FINAL_CTA } from "@/data/homepage-copy";
import { HeroJourney } from "./HeroJourney";
import styles from "./Hero.module.css";

const HEADLINE_TYPE_MS = 50;
const HEADLINE_HOLD_MS = 1400;
const HEADLINE_EXIT_MS = 250;

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

type HeadlinePhase = "typing" | "hold" | "exiting";

function subscribeReduced(onStoreChange: () => void) {
  const query = window.matchMedia(REDUCED_QUERY);
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
}

function getReduced() {
  return window.matchMedia(REDUCED_QUERY).matches;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useSyncExternalStore(subscribeReduced, getReduced, () => false);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [typedCount, setTypedCount] = useState(0);
  const [headlinePhase, setHeadlinePhase] = useState<HeadlinePhase>("typing");

  useEffect(() => {
    if (reduced) return;

    const section = sectionRef.current;
    if (!section) return;

    let cancelled = false;
    let running = false;
    let typeId = 0;
    let headlineHoldId = 0;
    let headlineExitId = 0;
    let index = 0;
    let char = 0;

    const clearTimers = () => {
      window.clearTimeout(typeId);
      window.clearTimeout(headlineHoldId);
      window.clearTimeout(headlineExitId);
    };

    const typeNext = () => {
      const phrase = HERO_HEADLINES[index];
      typeId = window.setTimeout(() => {
        if (cancelled) return;
        char += 1;
        setTypedCount(char);
        if (char >= phrase.length) {
          setHeadlinePhase("hold");
          headlineHoldId = window.setTimeout(() => {
            if (cancelled) return;
            setHeadlinePhase("exiting");
            headlineExitId = window.setTimeout(() => {
              if (cancelled) return;
              index = (index + 1) % HERO_HEADLINES.length;
              char = 0;
              setHeadlineIndex(index);
              setTypedCount(0);
              setHeadlinePhase("typing");
              typeNext();
            }, HEADLINE_EXIT_MS);
          }, HEADLINE_HOLD_MS);
          return;
        }
        typeNext();
      }, HEADLINE_TYPE_MS);
    };

    const start = () => {
      if (running || cancelled) return;
      running = true;
      char = 0;
      setTypedCount(0);
      setHeadlineIndex(index);
      setHeadlinePhase("typing");
      typeNext();
    };

    const stop = () => {
      running = false;
      clearTimers();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.2 },
    );
    observer.observe(section);

    return () => {
      cancelled = true;
      stop();
      observer.disconnect();
    };
  }, [reduced]);

  const currentHeadline = HERO_HEADLINES[headlineIndex];
  const typedHeadline = reduced
    ? currentHeadline
    : currentHeadline.slice(0, typedCount);
  const phase: HeadlinePhase = reduced ? "hold" : headlinePhase;

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className="min-w-0">
        <p className={styles.lead}>{HERO_LEAD_IN}</p>
        <h1 className={`${styles.headline} display grid min-w-0`} aria-live="polite">
          {HERO_HEADLINES.map((headline) => (
            <span
              key={headline}
              className="invisible col-start-1 row-start-1 min-w-0 wrap-break-word"
              aria-hidden="true"
            >
              {headline}
            </span>
          ))}
          <span
            className={`col-start-1 row-start-1 min-w-0 wrap-break-word ${
              phase === "exiting"
                ? "opacity-0 transition-opacity duration-[250ms] ease-[var(--ease)]"
                : "opacity-100"
            }`}
            aria-hidden="true"
          >
            {typedHeadline}
          </span>
          <span className="sr-only">{currentHeadline}</span>
        </h1>
        {HERO_SUPPORT.map((paragraph) => (
          <p key={paragraph} className={styles.support}>
            {paragraph}
          </p>
        ))}
        <a href={FINAL_CTA.href} className="ps-button">
          {HERO_CTA}
        </a>
        <ol className={styles.rail}>
          {HERO_RAIL.map((node) => (
            <li key={node}>
              <p>{node}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className={styles.motion}>
        <HeroJourney />
      </div>
    </section>
  );
}
