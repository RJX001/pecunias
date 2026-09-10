"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export function Magnetic({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  }

  function onLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate(0, 0)";
  }

  return (
    <div
      ref={ref}
      className={`magnetic inline-block ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 180ms var(--ease)" }}
    >
      {children}
    </div>
  );
}
