"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./WhyStatus.module.css";

export type WhyStatusItem = {
  from: string;
  to: string;
};

type WhyStatusProps = {
  items: readonly WhyStatusItem[];
};

/** Fade length for each status. Keep within 500–700ms. */
const FADE_MS = 600;
/** Delay between item starts. Keep within 700–900ms. */
const STAGGER_MS = 800;
const listStyle = { "--status-fade": `${FADE_MS}ms` } as CSSProperties;

export function WhyStatus({ items }: WhyStatusProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const [connected, setConnected] = useState<boolean[]>(() =>
    items.map(() => false),
  );

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let started = false;
    const timers: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        if (cancelled || started) return;
        const visible = entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.5,
        );
        if (!visible) return;
        started = true;
        observer.disconnect();
        items.forEach((_, index) => {
          const timer = window.setTimeout(() => {
            if (cancelled) return;
            setConnected((current) => {
              if (current[index]) return current;
              const next = current.slice();
              next[index] = true;
              return next;
            });
          }, index * STAGGER_MS);
          timers.push(timer);
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(list);

    return () => {
      cancelled = true;
      observer.disconnect();
      for (const timer of timers) window.clearTimeout(timer);
    };
  }, [items]);

  return (
    <ol ref={listRef} className={styles.list} style={listStyle}>
      {items.map((item, index) => {
        const number = String(index + 1).padStart(2, "0");
        return (
          <li
            key={item.from}
            className={connected[index] ? styles.connected : undefined}
          >
            <span className={styles.visual} aria-hidden="true">
              <span className={styles.prefix}>{number}&nbsp;—</span>
              <span className={styles.wording}>
                <span className={styles.from}>{item.from}</span>
                <span className={styles.to}>{item.to}</span>
              </span>
            </span>
            <span className={styles.accessible}>
              {number}. {item.to}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
