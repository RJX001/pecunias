"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { STANDARD } from "@/data/homepage-copy";

const STATEMENT_GREEN = "we can't improve it.";
const CLOSING_GREEN = "It's a system of decisions.";
const SUPPORT_GREEN = [false, true, false, true] as const;

const SUPPORT_SENTENCES = STANDARD.support
  .match(/[^.]+?\./g)
  ?.map((sentence) => sentence.trim()) ?? [STANDARD.support];

const statementInk = STANDARD.statement
  .slice(0, STANDARD.statement.indexOf(STATEMENT_GREEN))
  .trimEnd();
const closingInk = STANDARD.closing
  .slice(0, STANDARD.closing.indexOf(CLOSING_GREEN))
  .trimEnd();

export function Philosophy() {
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [seen, setSeen] = useState<boolean[]>(() => [false, false, false]);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen([true, true, true]);
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

  const tone = (active: boolean, green: boolean) =>
    active ? (green ? "text-green" : "text-fg") : "text-fg-faint";

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <h2 className="display mb-16 max-w-[12ch] text-[clamp(34px,5vw,58px)]">
          {STANDARD.heading}
        </h2>
        <div className="grid gap-8">
          <p
            ref={(node) => {
              refs.current[0] = node;
            }}
            className="m-0 max-w-[28ch] text-[clamp(22px,3.2vw,40px)] font-bold tracking-[-0.02em] leading-[1.15]"
          >
            <span
              className={`transition-colors duration-500 ease-[var(--ease)] ${tone(seen[0], false)}`}
            >
              {statementInk}
            </span>{" "}
            <span
              className={`transition-colors duration-500 ease-[var(--ease)] ${tone(seen[0], true)}`}
            >
              {STATEMENT_GREEN}
            </span>
          </p>

          <p
            ref={(node) => {
              refs.current[1] = node;
            }}
            className="m-0 max-w-[54ch] text-[clamp(18px,2.2vw,24px)] font-medium leading-relaxed tracking-[-0.02em]"
          >
            {SUPPORT_SENTENCES.map((sentence, index) => (
              <span key={sentence}>
                {index > 0 ? " " : null}
                <span
                  className={`transition-colors duration-500 ease-[var(--ease)] ${tone(
                    seen[1],
                    SUPPORT_GREEN[index] ?? false,
                  )}`}
                >
                  {sentence}
                </span>
              </span>
            ))}
          </p>

          <p
            ref={(node) => {
              refs.current[2] = node;
            }}
            className="m-0 max-w-[28ch] text-[clamp(22px,3.2vw,40px)] font-bold tracking-[-0.02em] leading-[1.15]"
          >
            <span
              className={`transition-colors duration-500 ease-[var(--ease)] ${tone(seen[2], false)}`}
            >
              {closingInk}
            </span>{" "}
            <span
              className={`transition-colors duration-500 ease-[var(--ease)] ${tone(seen[2], true)}`}
            >
              {CLOSING_GREEN}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
