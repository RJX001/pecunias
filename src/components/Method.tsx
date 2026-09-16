"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  APPROACH_HEADING,
  APPROACH_INTRO,
  APPROACH_SUPPORT,
  approachStages,
} from "@/data/approach";
import { Reveal } from "./Reveal";

const FILL_DURATION_MS = 900;
const FILL_STAGGER_MS = 160;

function isMobileViewport() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function activeZoneMargin() {
  return isMobileViewport() ? "-28% 0px -52% 0px" : "-38% 0px -42% 0px";
}

function activeZoneY() {
  return window.innerHeight * (isMobileViewport() ? 0.38 : 0.48);
}

export function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [filled, setFilled] = useState(false);
  const [complete, setComplete] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFilled(true);
      setComplete(true);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!filled || complete) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setComplete(true);
      return;
    }
    const id = window.setTimeout(
      () => setComplete(true),
      approachStages.length * FILL_STAGGER_MS + FILL_DURATION_MS,
    );
    return () => window.clearTimeout(id);
  }, [filled, complete]);

  useEffect(() => {
    const ratios = new Map<Element, number>();
    let observer: IntersectionObserver | null = null;

    const pickActive = () => {
      const zoneY = activeZoneY();
      let bestIndex = 0;
      let bestScore = Number.NEGATIVE_INFINITY;
      stageRefs.current.forEach((node, index) => {
        if (!node) return;
        const ratio = ratios.get(node) ?? 0;
        const rect = node.getBoundingClientRect();
        const mid = (rect.top + rect.bottom) / 2;
        const score = ratio * 10000 - Math.abs(mid - zoneY);
        if (score > bestScore) {
          bestScore = score;
          bestIndex = index;
        }
      });
      setActiveStage((current) => (current === bestIndex ? current : bestIndex));
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
          pickActive();
        },
        {
          root: null,
          rootMargin: activeZoneMargin(),
          threshold: [0, 0.15, 0.35, 0.5, 0.75, 1],
        },
      );
      stageRefs.current.forEach((node) => {
        if (node) observer?.observe(node);
      });
    };

    connect();
    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener("change", connect);
    return () => {
      mq.removeEventListener("change", connect);
      observer?.disconnect();
    };
  }, []);

  return (
    <section
      id="approach"
      className="section-pad"
      style={{ paddingTop: "min(7vw, 72px)" }}
    >
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[clamp(34px,5vw,58px)]">
            {APPROACH_HEADING}
          </h2>
          <p className="mt-6 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] text-green md:text-[26px]">
            {APPROACH_INTRO}
          </p>
          <p className="support">{APPROACH_SUPPORT}</p>
        </Reveal>

        <div ref={ref} className="mt-14 grid border-t border-line">
          {approachStages.map((stage, index) => {
            const isLast = index === approachStages.length - 1;
            const isActive = index === activeStage;
            return (
              <div
                key={stage.title}
                ref={(node) => {
                  stageRefs.current[index] = node;
                }}
                className="grid gap-4 border-b border-line py-6 md:grid-cols-[1fr_180px] md:items-center"
              >
                <div>
                  <p
                    className={`m-0 text-[20px] font-bold tracking-[-0.02em] transition-[color] duration-300 ease-[var(--ease)] motion-reduce:duration-0 ${
                      isActive ? "text-green" : "text-fg"
                    }`}
                  >
                    {stage.title}
                  </p>
                  {stage.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-2 m-0 text-[15px] leading-relaxed text-fg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="h-px overflow-hidden bg-line">
                  <span
                    className={`block h-full origin-left bg-green motion-reduce:!scale-x-100 ${
                      filled ? "scale-x-100" : "scale-x-0"
                    } ${
                      complete && isLast
                        ? "shadow-[0_0_14px_color-mix(in_srgb,var(--green)_70%,transparent)]"
                        : ""
                    }`}
                    style={{
                      transition: `transform ${FILL_DURATION_MS}ms var(--ease)`,
                      transitionDelay: filled
                        ? `${index * FILL_STAGGER_MS}ms`
                        : "0ms",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
