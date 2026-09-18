"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { COMMITMENT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

const CLOSING_GREEN = "We find out why. Then we fix it.";
const ITEM_COUNT = COMMITMENT.items.length;

function activeIndexFromList(list: HTMLElement, count: number): number {
  const rect = list.getBoundingClientRect();
  const vh = window.innerHeight;
  // Map the list box through the viewport onto 0–9. Do not observe cells:
  // a 2-column grid would otherwise stall on the first row.
  const start = vh * 0.72;
  const end = vh * 0.28;
  const travel = rect.height + (start - end);
  if (travel <= 1) return 0;
  const t = (start - rect.top) / travel;
  const clamped = Math.min(1, Math.max(0, t));
  return Math.min(count - 1, Math.floor(clamped * count));
}

export function Why() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const closingInk = COMMITMENT.closing
    .slice(0, COMMITMENT.closing.indexOf(CLOSING_GREEN))
    .trim();

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const next = activeIndexFromList(list, ITEM_COUNT);
      setActive((prev) => (prev === next ? prev : next));
    };

    const onScrollOrResize = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const resizeObserver = new ResizeObserver(onScrollOrResize);
    resizeObserver.observe(list);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      resizeObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="commitment" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">{COMMITMENT.heading}</p>
          <h2 className="display max-w-[14ch] text-[clamp(34px,5vw,58px)]">
            {COMMITMENT.heading}
          </h2>
          <p className="mt-6 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] text-green md:text-[26px]">
            {COMMITMENT.statement}
          </p>
          <p className="support">{COMMITMENT.support}</p>
        </Reveal>

        <Reveal>
          <ol
            ref={listRef}
            className="mt-14 m-0 grid list-none gap-0 border-t border-line p-0 sm:grid-cols-2"
          >
            {COMMITMENT.items.map((item, index) => {
              const current = index === active;
              const done = index < active;
              const reached = done || current;
              return (
                <li
                  key={item}
                  className="relative grid grid-cols-[auto_1fr] items-baseline gap-4 border-b border-line px-0 py-5 sm:px-6 sm:odd:border-r"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-px w-full origin-left bg-green transition-transform duration-700 ease-[var(--ease)] motion-reduce:duration-0"
                    style={{ transform: reached ? "scaleX(1)" : "scaleX(0)" }}
                  />
                  <span
                    className={`text-[13px] font-semibold transition-[color] duration-700 ease-[var(--ease)] motion-reduce:duration-0 ${
                      current
                        ? "text-green-text"
                        : done
                          ? "text-fg"
                          : "text-fg-faint"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[16px] font-semibold tracking-[-0.01em] transition-[color] duration-700 ease-[var(--ease)] motion-reduce:duration-0 ${
                      current ? "text-green" : done ? "text-fg" : "text-fg-faint"
                    }`}
                    aria-current={current ? "step" : undefined}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ol>

          <p className="support mt-10 max-w-[48ch]">{closingInk}</p>
          <p className="mt-4 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] text-green md:text-[26px]">
            {CLOSING_GREEN}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
