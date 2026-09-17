"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { COMMITMENT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

const CLOSING_GREEN = "We find out why. Then we fix it.";
const RAIL_STEP_MS = 2800;
const RAIL_HOLD_MS = 4200;
const ITEM_COUNT = COMMITMENT.items.length;
const REDUCE_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCE_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(REDUCE_MOTION_QUERY).matches;
}

function getReducedMotionServer() {
  return false;
}

export function Why() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionServer,
  );
  const closingInk = COMMITMENT.closing
    .slice(0, COMMITMENT.closing.indexOf(CLOSING_GREEN))
    .trim();

  useEffect(() => {
    if (reduceMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    let cancelled = false;
    let running = false;
    let railId = 0;
    let railIndex = 0;

    const clearTimers = () => {
      window.clearTimeout(railId);
    };

    const scheduleRail = () => {
      const delay = railIndex >= ITEM_COUNT - 1 ? RAIL_HOLD_MS : RAIL_STEP_MS;
      railId = window.setTimeout(() => {
        if (cancelled) return;
        railIndex = (railIndex + 1) % ITEM_COUNT;
        setActive(railIndex);
        scheduleRail();
      }, delay);
    };

    const start = () => {
      if (running || cancelled) return;
      running = true;
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
  }, [reduceMotion]);

  return (
    <section id="commitment" ref={sectionRef} className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <h2 className="display max-w-[14ch] text-[clamp(34px,5vw,58px)]">
            {COMMITMENT.heading}
          </h2>
          <p className="mt-6 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] text-green md:text-[26px]">
            {COMMITMENT.statement}
          </p>
          <p className="support">{COMMITMENT.support}</p>
        </Reveal>

        <Reveal>
          <ol className="mt-14 m-0 grid list-none gap-0 border-t border-line p-0 sm:grid-cols-2">
            {COMMITMENT.items.map((item, index) => {
              const current = !reduceMotion && index === active;
              const done = reduceMotion || index < active;
              const reached = done || current;
              return (
                <li
                  key={item}
                  className="relative grid grid-cols-[auto_1fr] items-baseline gap-4 border-b border-line px-0 py-5 sm:px-6 sm:odd:border-r"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-px w-full origin-left bg-green transition-transform duration-700 ease-[var(--ease)] motion-reduce:duration-0"
                    style={{ transform: reached ? "scaleX(1)" : "scaleX(0)" }}
                  />
                  <span
                    className={`text-[13px] font-semibold transition-[color] duration-700 ease-[var(--ease)] motion-reduce:duration-0 ${
                      current
                        ? "text-green-text"
                        : done
                          ? "text-fg"
                          : "text-fg-faint"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[16px] font-semibold tracking-[-0.01em] transition-[color] duration-700 ease-[var(--ease)] motion-reduce:duration-0 ${
                      current ? "text-green" : done ? "text-fg" : "text-fg-faint"
                    }`}
                    aria-current={current ? "step" : undefined}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ol>

          <p className="support mt-10 max-w-[48ch]">{closingInk}</p>
          <p className="mt-4 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] text-green md:text-[26px]">
            {CLOSING_GREEN}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
