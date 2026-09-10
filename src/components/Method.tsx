"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const STEPS = [
  { name: "Diagnose", copy: "Find the actual constraint. Ignore the noise." },
  { name: "Build", copy: "Install the system the constraint needs." },
  { name: "Activate", copy: "Turn acquisition and conversion on together." },
  { name: "Optimise", copy: "Cut what doesn't pay. Double what does." },
  { name: "Scale", copy: "Raise the ceiling once the loop is closed." },
] as const;

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
    <section className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">Method</p>
          <h2 className="display max-w-[12ch] text-[clamp(34px,5vw,58px)]">
            How the system is installed.
          </h2>
        </Reveal>

        <div ref={ref} className="mt-14 grid border-t border-line">
          {STEPS.map((step, index) => {
            const isLast = index === STEPS.length - 1;
            return (
              <div
                key={step.name}
                className={`grid gap-4 border-b border-line py-6 md:grid-cols-[140px_1fr_180px] md:items-center ${
                  filled && isLast ? "shadow-[inset_0_0_80px_var(--green-soft)]" : ""
                }`}
              >
                <p className="m-0 text-[13px] font-semibold text-fg-faint">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="m-0 text-[20px] font-bold tracking-[-0.02em]">
                    {step.name}
                  </p>
                  <p className="mt-1 m-0 text-[15px] text-fg-dim">{step.copy}</p>
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
