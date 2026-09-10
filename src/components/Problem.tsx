"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const CHIPS = [
  "Website",
  "Ads",
  "Social",
  "CRM",
  "Data",
  "Automation",
  "Marketplace",
] as const;

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const [merged, setMerged] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setMerged(true), 400);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad pt-0">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">The problem</p>
          <h2 className="display max-w-[16ch] text-[clamp(34px,5vw,58px)]">
            Tools without a system is just noise.
          </h2>
        </Reveal>

        <div
          ref={ref}
          className="relative mt-16 flex min-h-[280px] flex-wrap items-center justify-center gap-3"
        >
          {CHIPS.map((chip, index) => (
            <span
              key={chip}
              className={`border px-4 py-2 text-[14px] font-medium transition-all duration-700 ${
                merged
                  ? "absolute border-green-deep bg-green-soft text-green opacity-0"
                  : "relative border-line text-fg-dim"
              }`}
              style={{
                transitionDelay: merged ? `${index * 40}ms` : "0ms",
                transform: merged
                  ? "translate(0, 0) scale(0.6)"
                  : `translate(${(index - 3) * 4}px, ${(index % 2) * 8}px)`,
              }}
            >
              {chip}
            </span>
          ))}

          <span
            className={`relative z-10 border px-6 py-3 text-[18px] font-bold tracking-[0.08em] transition-all duration-700 ${
              merged
                ? "border-green-deep bg-green-soft text-green"
                : "border-line text-fg-faint"
            }`}
          >
            PECUNIA
          </span>
        </div>
      </div>
    </section>
  );
}
