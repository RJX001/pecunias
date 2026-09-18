"use client";

import { useScrollActive } from "./useScrollActive";

export function WhatWeDo({ items }: { items: readonly string[] }) {
  const { listRef, active } = useScrollActive<HTMLUListElement>(items.length);

  return (
    <div className="what-we-do">
      <p className="what-we-do-label text-fg font-bold">WHAT WE DO</p>
      <ul ref={listRef} className="what-we-do-list">
        {items.map((item, index) => {
          const current = index === active;
          const reached = index <= active;
          return (
            <li key={item} className="what-we-do-row relative">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-px w-full origin-left bg-green transition-transform duration-700 ease-[var(--ease)] motion-reduce:duration-0"
                style={{ transform: reached ? "scaleX(1)" : "scaleX(0)" }}
              />
              <span className="service-row-num text-fg">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className="what-we-do-name text-green"
                aria-current={current ? "step" : undefined}
              >
                {item}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
