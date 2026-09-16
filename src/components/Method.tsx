"use client";

import { useEffect, useRef, useState } from "react";
import {
  APPROACH_HEADING,
  APPROACH_INTRO,
  APPROACH_SUPPORT,
  approachStages,
} from "@/data/approach";
import { Reveal } from "./Reveal";

export function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
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

  return (
    <section id="approach" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[clamp(34px,5vw,58px)]">
            {APPROACH_HEADING}
          </h2>
          <p className="mt-6 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] md:text-[26px]">
            {APPROACH_INTRO}
          </p>
          <p className="support">{APPROACH_SUPPORT}</p>
        </Reveal>

        <div ref={ref} className="mt-14 grid border-t border-line">
          {approachStages.map((stage, index) => {
            const isLast = index === approachStages.length - 1;
            return (
              <div
                key={stage.title}
                className={`grid gap-4 border-b border-line py-6 md:grid-cols-[1fr_180px] md:items-center ${
                  filled && isLast
                    ? "shadow-[inset_0_0_80px_var(--green-soft)]"
                    : ""
                }`}
              >
                <div>
                  <p className="m-0 text-[20px] font-bold tracking-[-0.02em]">
                    {stage.title}
                  </p>
                  {stage.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-2 m-0 text-[15px] leading-relaxed text-fg-dim"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="h-px overflow-hidden bg-line">
                  <span
                    className={`block h-full origin-left bg-green transition-transform duration-1000 ${
                      filled ? "scale-x-100" : "scale-x-0"
                    } ${filled && isLast ? "animate-pulse" : ""}`}
                    style={{ transitionDelay: `${index * 120}ms` }}
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
