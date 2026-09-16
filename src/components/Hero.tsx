"use client";

import { useEffect, useState } from "react";
import {
  HERO_CTA,
  HERO_HEADLINES,
  HERO_IDENTITY,
  HERO_LEAD_IN,
  HERO_RAIL,
  HERO_SUPPORT,
} from "@/data/hero-headlines";
import { Magnetic } from "./Magnetic";

const HEADLINE_INTERVAL_MS = 4500;
const RAIL_INTERVAL_MS = 1400;

export function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(HERO_RAIL.length - 1);
      return;
    }

    const headlineId = window.setInterval(() => {
      setHeadlineIndex((current) => (current + 1) % HERO_HEADLINES.length);
    }, HEADLINE_INTERVAL_MS);

    const railId = window.setInterval(() => {
      setActive((current) => (current + 1) % HERO_RAIL.length);
    }, RAIL_INTERVAL_MS);

    return () => {
      window.clearInterval(headlineId);
      window.clearInterval(railId);
    };
  }, []);

  return (
    <section className="relative flex min-h-svh items-end overflow-hidden pb-[min(10vw,110px)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #242629 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 70% 40%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 70% 40%, black 10%, transparent 70%)",
        }}
      />

      <div className="wrap relative grid w-full gap-12 pt-32">
        <div>
          <p className="kicker">{HERO_IDENTITY}</p>
          <p className="m-0 text-[18px] font-medium text-fg-dim md:text-[20px]">
            {HERO_LEAD_IN}
          </p>
          <h1
            className="display mt-3 grid text-[clamp(38px,6.6vw,92px)] text-fg"
            aria-live="polite"
          >
            {HERO_HEADLINES.map((headline, index) => (
              <span
                key={headline}
                className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                  index === headlineIndex
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
            return (
              <li
                key={node}
                className="relative border-r border-b border-line px-3 py-4 last:border-r-0 sm:[&:nth-child(3n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(3n)]:border-r lg:last:border-r-0"
              >
                <span
                  className="absolute top-0 left-0 h-px origin-left bg-green transition-transform duration-500"
                  style={{
                    transform: done || current ? "scaleX(1)" : "scaleX(0)",
                    width: "100%",
                  }}
                />
                <p
                  className={`m-0 text-[13px] font-semibold ${
                    current
                      ? "text-green"
                      : done
                        ? "text-fg"
                        : "text-fg-faint"
                  }`}
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
