"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  HERO_CTA,
  HERO_HEADLINES,
  HERO_IDENTITY,
  HERO_LEAD_IN,
  HERO_RAIL,
  HERO_SUPPORT,
} from "@/data/hero-headlines";
import { Magnetic } from "./Magnetic";

const HEADLINE_HOLD_MS = 4500;
const HEADLINE_FADE_MS = 400;
const RAIL_STEP_MS = 2800;
const RAIL_HOLD_MS = 4200;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [headlineVisible, setHeadlineVisible] = useState(true);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(HERO_RAIL.length - 1);
      setHeadlineVisible(true);
      setHeadlineIndex(0);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    let cancelled = false;
    let running = false;
    let headlineHoldId = 0;
    let headlineFadeId = 0;
    let railId = 0;
    let railIndex = 0;

    const clearTimers = () => {
      window.clearTimeout(headlineHoldId);
      window.clearTimeout(headlineFadeId);
      window.clearTimeout(railId);
    };

    const scheduleHeadline = () => {
      headlineHoldId = window.setTimeout(() => {
        if (cancelled) return;
        setHeadlineVisible(false);
        headlineFadeId = window.setTimeout(() => {
          if (cancelled) return;
          setHeadlineIndex((current) => (current + 1) % HERO_HEADLINES.length);
          setHeadlineVisible(true);
          scheduleHeadline();
        }, HEADLINE_FADE_MS);
      }, HEADLINE_HOLD_MS);
    };

    const scheduleRail = () => {
      const delay =
        railIndex >= HERO_RAIL.length - 1 ? RAIL_HOLD_MS : RAIL_STEP_MS;
      railId = window.setTimeout(() => {
        if (cancelled) return;
        railIndex = (railIndex + 1) % HERO_RAIL.length;
        setActive(railIndex);
        scheduleRail();
      }, delay);
    };

    const start = () => {
      if (running || cancelled) return;
      running = true;
      setHeadlineVisible(true);
      scheduleHeadline();
      scheduleRail();
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh items-end overflow-hidden pb-[min(10vw,110px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--line-strong) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 70% 40%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 70% 40%, black 10%, transparent 70%)",
        }}
      />

      <div className="wrap relative grid w-full min-w-0 gap-12 pt-32">
        <div className="min-w-0">
          <p className="kicker">{HERO_IDENTITY}</p>
          <p className="m-0 text-[18px] font-medium text-fg-dim md:text-[20px]">
            {HERO_LEAD_IN}
          </p>
          <h1
            className="display mt-3 grid min-w-0 text-[clamp(36px,8vw,92px)] text-fg"
            aria-live="polite"
          >
            {HERO_HEADLINES.map((headline, index) => (
              <span
                key={headline}
                className={`col-start-1 row-start-1 min-w-0 wrap-break-word transition-opacity duration-[400ms] ease-[var(--ease)] ${
                  index === headlineIndex && headlineVisible
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
                aria-hidden={index !== headlineIndex}
              >
                {headline}
              </span>
            ))}
          </h1>
          {HERO_SUPPORT.map((paragraph) => (
            <p key={paragraph} className="support">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <a href="/#contact" className="btn btn-solid">
                {HERO_CTA}
              </a>
            </Magnetic>
          </div>
        </div>

        <ol className="m-0 grid list-none grid-cols-2 gap-0 border-t border-line p-0 sm:grid-cols-3 lg:grid-cols-6">
          {HERO_RAIL.map((node, index) => {
            const done = index < active;
            const current = index === active;
            const reached = done || current;
            return (
              <li
                key={node}
                className="relative border-r border-b border-line px-3 py-4 last:border-r-0 sm:[&:nth-child(3n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(3n)]:border-r lg:last:border-r-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-px w-full origin-left bg-green transition-transform duration-700 ease-[var(--ease)]"
                  style={{ transform: reached ? "scaleX(1)" : "scaleX(0)" }}
                />
                <span
                  aria-hidden="true"
                  className={`mb-2 block h-1.5 w-1.5 ${
                    current ? "bg-green" : done ? "bg-green opacity-50" : "bg-line"
                  }`}
                />
                <p
                  className={`m-0 text-[13px] font-semibold ${
                    current ? "text-green" : done ? "text-fg" : "text-fg-faint"
                  }`}
                  aria-current={current ? "step" : undefined}
                >
                  {node}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
