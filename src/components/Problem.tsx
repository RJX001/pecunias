"use client";

import { useEffect, useLayoutEffect, useRef, useState, type Ref } from "react";
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

const INTRO_ABOVE_DIAGRAM =
  "Too many businesses split their website, advertising, content and automation across different suppliers who don't understand the full customer journey.";

const RESULT_LABEL = "The result?";

const EMPHASIS_LINES = WHY_PECUNIA.emphasis.split(/(?<=\.)\s+/);

type Connector = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  length: number;
};

function PecuniaMark({ markRef }: { markRef: Ref<HTMLSpanElement> }) {
  return (
    <span
      ref={markRef}
      className="relative z-[1] border border-green bg-bg px-6 py-3 text-[18px] font-bold tracking-[0.08em] text-green"
    >
      PECUNIA
    </span>
  );
}

function ConvergenceDiagram() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pecuniaRef = useRef<HTMLSpanElement>(null);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [connectors, setConnectors] = useState<Connector[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [inView, setInView] = useState(false);
  const [connected, setConnected] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const measure = () => {
      const pecunia = pecuniaRef.current;
      if (!pecunia) return;
      const rootBox = root.getBoundingClientRect();
      const pecuniaBox = pecunia.getBoundingClientRect();
      const x2 = pecuniaBox.left - rootBox.left + pecuniaBox.width / 2;
      const y2 = pecuniaBox.top - rootBox.top;

      const next = CHIPS.map((_, index) => {
        const chip = chipRefs.current[index];
        if (!chip) return null;
        const box = chip.getBoundingClientRect();
        const x1 = box.left - rootBox.left + box.width / 2;
        const y1 = box.bottom - rootBox.top;
        return {
          x1,
          y1,
          x2,
          y2,
          length: Math.hypot(x2 - x1, y2 - y1),
        };
      }).filter((line): line is Connector => line !== null);

      setConnectors(next);
      setSize({ width: rootBox.width, height: rootBox.height });
    };

    const observer = new ResizeObserver(() => {
      measure();
    });
    observer.observe(root);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || connectors.length === 0 || connected) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cancelled = false;
    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (!cancelled) setConnected(true);
      });
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [inView, connectors.length, connected]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="relative mt-16 isolate md:mt-20"
    >
      <style>{`
        .why-connector {
          stroke: var(--fg);
          stroke-dashoffset: var(--why-len);
          transition:
            stroke-dashoffset 0.62s var(--ease),
            stroke 0.38s var(--ease) 0.34s;
        }
        .why-connector.is-connected {
          stroke: var(--green);
          stroke-dashoffset: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .why-connector,
          .why-connector.is-connected {
            stroke: var(--green);
            stroke-dashoffset: 0;
            transition: none;
          }
        }
      `}</style>

      {size.width > 0 && size.height > 0 ? (
        <svg
          className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${size.width} ${size.height}`}
          fill="none"
        >
          {connectors.map((line, index) => (
            <line
              key={CHIPS[index]}
              className={`why-connector${connected ? " is-connected" : ""}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              strokeWidth="1.25"
              strokeLinecap="butt"
              vectorEffect="non-scaling-stroke"
              strokeDasharray={line.length}
              style={{ ["--why-len" as string]: `${line.length}px` }}
            />
          ))}
        </svg>
      ) : null}

      <div className="relative z-[1] flex flex-wrap items-center justify-center gap-2 lg:flex-nowrap lg:justify-between lg:gap-3">
        {CHIPS.map((chip, index) => (
          <span
            key={chip}
            ref={(node) => {
              chipRefs.current[index] = node;
            }}
            className="whitespace-nowrap border border-green bg-bg px-3 py-2 text-[13px] font-medium text-fg md:px-4 md:text-[14px]"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="relative z-[1] mt-16 flex justify-center md:mt-24">
        <PecuniaMark markRef={pecuniaRef} />
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section id="why" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker" aria-hidden="true">
            {WHY_PECUNIA.heading}
          </p>
          <h2 className="display max-w-[16ch] text-[clamp(34px,5vw,58px)]">
            {WHY_PECUNIA.heading}
          </h2>
          <p className="mt-6 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] text-green md:text-[26px]">
            {WHY_PECUNIA.copy[0]}
          </p>
          <p className="support">{WHY_PECUNIA.copy[1]}</p>
          <p className="support">{INTRO_ABOVE_DIAGRAM}</p>
        </Reveal>

        <ConvergenceDiagram />

        <div className="mt-12">
          <p className="m-0 text-[17px] font-bold tracking-[-0.02em] text-fg">
            {RESULT_LABEL}
          </p>
          <div className="mt-4">
            {EMPHASIS_LINES.map((line) => (
              <p
                key={line}
                className="display m-0 text-[clamp(24px,3.4vw,40px)] text-green md:whitespace-nowrap"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="mt-8 m-0 max-w-[640px] text-[20px] font-bold tracking-[-0.02em] text-fg">
            {WHY_PECUNIA.then}
          </p>
          <p className="mt-6 m-0 text-[20px] font-bold tracking-[-0.02em] text-green">
            {WHY_PECUNIA.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
