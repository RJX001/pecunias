"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  HERO_CTA,
  HERO_HEADLINES,
  HERO_LEAD_IN,
  HERO_SUPPORT,
} from "@/data/hero-headlines";
import { FINAL_CTA } from "@/data/homepage-copy";
import styles from "./Hero.module.css";

const HEADLINE_TYPE_MS = 80;
const HEADLINE_HOLD_MS = 4500;
const HEADLINE_EXIT_MS = 350;

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
  const [typedCount, setTypedCount] = useState(HERO_HEADLINES[0].length);

  useEffect(() => {
    if (reduced) return;

    const section = sectionRef.current;
    if (!section) return;

    let cancelled = false;
    let running = false;
    let timer = 0;
    let index = 0;
    let char = HERO_HEADLINES[0].length;
    let phase: HeadlinePhase = "hold";
    let remaining = HEADLINE_HOLD_MS;
    let startedAt = 0;
    let inView = false;
    let pageVisible = document.visibilityState === "visible";

    setHeadlineIndex(0);
    setTypedCount(char);

    const clearTimer = () => {
      window.clearTimeout(timer);
      timer = 0;
    };

    const arm = (delay: number, fn: () => void) => {
      remaining = delay;
      startedAt = performance.now();
      timer = window.setTimeout(fn, delay);
    };

    const step = () => {
      if (cancelled) return;
      const phrase = HERO_HEADLINES[index];

      if (phase === "typing") {
        char += 1;
        setTypedCount(char);
        if (char >= phrase.length) {
          phase = "hold";
          arm(HEADLINE_HOLD_MS, step);
        } else {
          arm(HEADLINE_TYPE_MS, step);
        }
        return;
      }

      if (phase === "hold") {
        phase = "exiting";
        arm(HEADLINE_EXIT_MS, step);
        return;
      }

      index = (index + 1) % HERO_HEADLINES.length;
      const next = HERO_HEADLINES[index];
      char = Math.min(1, next.length);
      phase = char >= next.length ? "hold" : "typing";
      setHeadlineIndex(index);
      setTypedCount(next.length === 0 ? 0 : Math.max(char, 1));
      arm(phase === "hold" ? HEADLINE_HOLD_MS : HEADLINE_TYPE_MS, step);
    };

    const halt = () => {
      if (!running) return;
      running = false;
      const waited = startedAt ? performance.now() - startedAt : 0;
      remaining = Math.max(0, remaining - waited);
      startedAt = 0;
      clearTimer();
    };

    const resume = () => {
      if (running || cancelled || !inView || !pageVisible) return;
      running = true;
      arm(remaining, step);
    };

    const sync = () => {
      if (inView && pageVisible) resume();
      else halt();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.2 },
    );
    observer.observe(section);

    const onVisibility = () => {
      pageVisible = document.visibilityState === "visible";
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      running = false;
      clearTimer();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  const currentHeadline = HERO_HEADLINES[headlineIndex] ?? HERO_HEADLINES[0];
  const shown =
    reduced || typedCount <= 0
      ? currentHeadline
      : currentHeadline.slice(0, typedCount);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <p className={styles.lead}>{HERO_LEAD_IN}</p>
      <h1 className={styles.headline}>
        {HERO_HEADLINES.map((headline) => (
          <span key={headline} className={styles.sizer} aria-hidden="true">
            {headline}
          </span>
        ))}
        <span className={styles.visible} aria-hidden="true">
          {shown}
        </span>
        <span className={styles.live} aria-live="polite">
          {currentHeadline}
        </span>
      </h1>
      {HERO_SUPPORT.map((paragraph) => (
        <p key={paragraph} className={styles.support}>
          {paragraph}
        </p>
      ))}
      <a href={FINAL_CTA.href} className="ps-button">
        {HERO_CTA}
      </a>
    </section>
  );
}
