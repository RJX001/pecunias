"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

const CHIP_SLOTS = [
  { left: "22%", top: "20%" },
  { left: "78%", top: "18%" },
  { left: "16%", top: "50%" },
  { left: "84%", top: "48%" },
  { left: "26%", top: "80%" },
  { left: "74%", top: "82%" },
  { left: "50%", top: "12%" },
] as const;

const CLUSTER_SLOTS = [
  { left: "30%", top: "28%" },
  { left: "70%", top: "28%" },
  { left: "22%", top: "50%" },
  { left: "78%", top: "50%" },
  { left: "32%", top: "72%" },
  { left: "68%", top: "72%" },
  { left: "50%", top: "20%" },
] as const;

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const [merged, setMerged] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduceMotion(true);
      setMerged(true);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const node = ref.current;
    if (!node) return;
    let timeoutId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = window.setTimeout(() => setMerged(true), 400);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
    };
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
          className="relative mt-16 flex min-h-[240px] items-center justify-center overflow-hidden px-2 sm:min-h-[280px]"
        >
          {CHIPS.map((chip, index) => {
            const slot = CHIP_SLOTS[index];
            const cluster = CLUSTER_SLOTS[index];
            const stayVisible = reduceMotion && merged;
            return (
              <span
                key={chip}
                aria-hidden="true"
                className={`pointer-events-none absolute whitespace-nowrap border px-3 py-2 text-[13px] font-medium sm:px-4 sm:text-[14px] transition-[left,top,opacity,transform] duration-700 ease-[var(--ease)] ${
                  merged
                    ? "border-green-deep text-green"
                    : "border-line text-fg-dim"
                }`}
                style={{
                  left: merged
                    ? stayVisible
                      ? cluster.left
                      : "50%"
                    : slot.left,
                  top: merged
                    ? stayVisible
                      ? cluster.top
                      : "50%"
                    : slot.top,
                  opacity: merged && !stayVisible ? 0 : 1,
                  transform: merged && !stayVisible
                    ? "translate(-50%, -50%) scale(0.7)"
                    : "translate(-50%, -50%)",
                  transitionDelay: merged && !stayVisible ? `${index * 55}ms` : "0ms",
                }}
              >
                {chip}
              </span>
            );
          })}

          <span
            className={`relative z-10 border px-6 py-3 text-[18px] font-bold tracking-[0.08em] transition-[border-color,background-color,color] duration-700 ease-[var(--ease)] ${
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
