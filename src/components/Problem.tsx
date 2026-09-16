"use client";

import { useEffect, useRef, useState } from "react";
import { WHY_PECUNIA } from "@/data/homepage-copy";
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
    <section id="why" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[clamp(34px,5vw,58px)]">
            {WHY_PECUNIA.heading}
          </h2>
          <p className="mt-6 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] md:text-[26px]">
            {WHY_PECUNIA.copy[0]}
          </p>
          <p className="support">{WHY_PECUNIA.copy[1]}</p>
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

        <div className="mt-12 max-w-[640px]">
          <p className="m-0 text-[17px] leading-relaxed text-fg-dim">
            {WHY_PECUNIA.copy[2]}
          </p>
          <p className="display mt-6 max-w-[18ch] text-[clamp(24px,3.4vw,40px)] text-green">
            {WHY_PECUNIA.emphasis}
          </p>
          <p className="mt-6 m-0 text-[17px] leading-relaxed text-fg-dim">
            {WHY_PECUNIA.then}
          </p>
          <p className="mt-6 m-0 text-[20px] font-bold tracking-[-0.02em] text-fg">
            {WHY_PECUNIA.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
