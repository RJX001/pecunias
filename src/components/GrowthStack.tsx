"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  GROWTH_STACK_HEADING,
  GROWTH_STACK_INTRO,
  growthStack,
  splitGrowthSystemTitle,
} from "@/data/growth-stack";
import { FINAL_CTA } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

const INTRO_GREEN = "Not four separate suppliers.";
const STACK_KICKER = GROWTH_STACK_HEADING.slice(
  0,
  GROWTH_STACK_HEADING.indexOf(" — "),
);
const introInk = GROWTH_STACK_INTRO.slice(
  0,
  GROWTH_STACK_INTRO.indexOf(INTRO_GREEN),
).trimEnd();

const COLOR_T =
  "transition-[color] duration-700 ease-[var(--ease)] motion-reduce:duration-0";

function isMobileViewport() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function activeZoneMargin() {
  return isMobileViewport() ? "-28% 0px -52% 0px" : "-38% 0px -42% 0px";
}

function activeZoneY() {
  return window.innerHeight * (isMobileViewport() ? 0.38 : 0.48);
}

function useServiceScrollGreen(count: number) {
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (count < 1) return;

    const ratios = new Map<Element, number>();
    let observer: IntersectionObserver | null = null;
    let frame = 0;

    const pickActive = () => {
      frame = 0;
      const zoneY = activeZoneY();
      let bestIndex = -1;
      let bestScore = Number.NEGATIVE_INFINITY;
      itemRefs.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
        const mid = (rect.top + rect.bottom) / 2;
        const ratio = ratios.get(node) ?? 0;
        const score = ratio * 10000 - Math.abs(mid - zoneY);
        if (score > bestScore) {
          bestScore = score;
          bestIndex = index;
        }
      });
      setActive((current) => (current === bestIndex ? current : bestIndex));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(pickActive);
    };

    const connect = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            ratios.set(
              entry.target,
              entry.isIntersecting ? entry.intersectionRatio : 0,
            );
          }
          if (frame) return;
          frame = window.requestAnimationFrame(pickActive);
        },
        {
          root: null,
          rootMargin: activeZoneMargin(),
          threshold: [0, 0.15, 0.35, 0.5, 0.75, 1],
        },
      );
      itemRefs.current.forEach((node) => {
        if (node) observer?.observe(node);
      });
    };

    connect();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", connect);
    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener("change", connect);

    return () => {
      mq.removeEventListener("change", connect);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", connect);
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [count]);

  return { itemRefs, active };
}

export function GrowthStack() {
  const { itemRefs, active } = useServiceScrollGreen(growthStack.length);

  return (
    <section
      id="services"
      className="px-[var(--pad)] pt-[min(6vw,64px)] pb-[min(10vw,110px)]"
    >
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">{STACK_KICKER}</p>
          <h2
            id="growth-stack-heading"
            className="display max-w-[18ch] text-[clamp(34px,5vw,58px)]"
          >
            <span className="text-fg">
              {GROWTH_STACK_HEADING.slice(
                0,
                GROWTH_STACK_HEADING.indexOf("The Growth Stack"),
              )}
            </span>
            <span className="text-green">The Growth Stack</span>
          </h2>
          <p className="support">
            <span className="text-fg">{introInk}</span>{" "}
            <span className="text-green">{INTRO_GREEN}</span>
          </p>
        </Reveal>

        <nav aria-labelledby="growth-stack-heading">
          <ul className="mt-14 m-0 list-none border-y border-line p-0">
            {growthStack.map((row, index) => {
              const { code, name } = splitGrowthSystemTitle(row.title);
              const current = index === active;
              return (
                <li
                  key={row.title}
                  className="border-b border-line last:border-b-0"
                >
                  <Link
                    href={`/services/${row.slug}`}
                    ref={(node) => {
                      itemRefs.current[index] = node;
                    }}
                    className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-7 text-left no-underline transition-colors hover:bg-bg-raised sm:gap-6 sm:py-8"
                  >
                    <span className="min-w-0">
                      <span className="block text-[22px] font-bold tracking-[-0.02em] md:text-[28px]">
                        <span className="text-fg">{code} — </span>
                        <span
                          className={`${COLOR_T} ${
                            current ? "text-green" : "text-fg"
                          }`}
                        >
                          {name}
                        </span>
                      </span>
                      <span className="mt-1 block text-[15px] text-content-text">
                        {row.description}
                      </span>
                    </span>
                    <span
                      className="inline-block text-green-text transition-transform duration-300 ease-[var(--ease)] motion-safe:group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="service-cta">
          <a href={FINAL_CTA.href} className="btn btn-green">
            {FINAL_CTA.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
