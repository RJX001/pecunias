"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * Map a list box through the viewport onto indices 0..n-1.
 * Copied from Why.tsx (Commitment). Do not observe cells: a 2-column
 * grid would otherwise stall on the first row.
 *
 * start = 72% down the viewport, end = 28% down.
 * As the list travels from start→end, t goes 0→1 and the active row
 * advances. Scroll back up and the highlight reverses.
 */
export function activeIndexFromList(list: HTMLElement, count: number): number {
  if (count < 1) return 0;
  const rect = list.getBoundingClientRect();
  const vh = window.innerHeight;
  const start = vh * 0.72;
  const end = vh * 0.28;
  const travel = rect.height + (start - end);
  if (travel <= 1) return 0;
  const t = (start - rect.top) / travel;
  const clamped = Math.min(1, Math.max(0, t));
  return Math.min(count - 1, Math.floor(clamped * count));
}

export function useScrollActive<T extends HTMLElement = HTMLElement>(count: number) {
  const listRef = useRef<T | null>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    if (count < 1) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(count - 1);
      return;
    }

    const list = listRef.current;
    if (!list) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const next = activeIndexFromList(list, count);
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
  }, [count]);

  return { listRef, active };
}
