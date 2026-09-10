"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  "Stop buying more channels.",
  "Stop stacking more vendors.",
  "Stop making creative once and forgetting it.",
  "Build less noise.",
  "Connect the work.",
  "Keep the system running.",
  "Create more growth.",
] as const;

export function Philosophy() {
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [seen, setSeen] = useState<boolean[]>(() => LINES.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((node, index) => {
      if (!node) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSeen((current) => {
              if (current[index]) return current;
              const next = [...current];
              next[index] = true;
              return next;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.6 },
      );
      observer.observe(node);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <p className="kicker">Philosophy</p>
        <h2 className="display mb-16 max-w-[12ch] text-[clamp(34px,5vw,58px)]">
          Build less noise. Create more growth.
        </h2>
        <div className="grid gap-4">
          {LINES.map((line, index) => {
            const active = seen[index];
            const last = index === LINES.length - 1;
            return (
              <p
                key={line}
                ref={(node) => {
                  refs.current[index] = node;
                }}
                className={`m-0 text-[clamp(22px,3.2vw,40px)] font-bold tracking-[-0.02em] leading-[1.1] transition-colors duration-500 ${
                  active
                    ? last
                      ? "text-green"
                      : "text-fg"
                    : "text-fg-faint"
                }`}
              >
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
