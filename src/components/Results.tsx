"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const METRICS = [
  { label: "Revenue lift", suffix: "" },
  { label: "Pipeline", suffix: "" },
  { label: "CAC", suffix: "" },
  { label: "Conversion", suffix: "" },
  { label: "Cycle time", suffix: "" },
] as const;

function Counter({ run }: { run: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    const target = 0;
    let frame = 0;
    const tick = () => {
      setValue(target);
      frame = requestAnimationFrame(tick);
      if (target === 0) cancelAnimationFrame(frame);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run]);

  return <span>{value}</span>;
}

export function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">Results</p>
          <h2 className="display max-w-[14ch] text-[clamp(34px,5vw,58px)]">
            Numbers go here when they are real.
          </h2>
        </Reveal>

        <div
          ref={ref}
          className="results-grid mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5"
        >
          {METRICS.map((metric) => (
            <article key={metric.label} className="bg-bg px-5 py-8">
              <p className="m-0 text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-0.03em] text-green">
                <Counter run={run} />
                {metric.suffix}
              </p>
              <p className="mt-3 m-0 text-[13px] text-fg-faint">{metric.label}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 border border-dashed border-line px-4 py-3 text-[13px] text-fg-faint">
          Illustrative structure — live client figures are not published yet.
        </p>
      </div>
    </section>
  );
}
