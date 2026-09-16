"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { STANDARD } from "@/data/homepage-copy";

const BLOCKS = [
  STANDARD.statement,
  STANDARD.support,
  STANDARD.closing,
] as const;

export function Philosophy() {
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [seen, setSeen] = useState<boolean[]>(() => BLOCKS.map(() => false));

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(BLOCKS.map(() => true));
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = refs.current.indexOf(
            entry.target as HTMLParagraphElement,
          );
          if (index < 0) return;
          setSeen((current) => {
            if (current[index]) return current;
            const next = [...current];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.6 },
    );

    refs.current.forEach((node) => {
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <h2 className="display mb-16 max-w-[12ch] text-[clamp(34px,5vw,58px)]">
          {STANDARD.heading}
        </h2>
        <div className="grid gap-8">
          {BLOCKS.map((block, index) => {
            const active = seen[index];
            const last = index === BLOCKS.length - 1;
            const first = index === 0;
            return (
              <p
                key={block}
                ref={(node) => {
                  refs.current[index] = node;
                }}
                className={`m-0 font-bold tracking-[-0.02em] leading-[1.15] transition-colors duration-500 ${
                  first || last
                    ? "max-w-[28ch] text-[clamp(22px,3.2vw,40px)]"
                    : "max-w-[54ch] text-[clamp(18px,2.2vw,24px)] font-medium leading-relaxed"
                } ${
                  active
                    ? last
                      ? "text-green"
                      : "text-fg"
                    : "text-fg-faint"
                }`}
              >
                {block}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
