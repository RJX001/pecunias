import type { GrowthDetail } from "@/data/growth-stack";
import styles from "./service/service.module.css";

export function WhatWeDo({ items }: { items: readonly GrowthDetail[] }) {
  return (
    <ul className={styles.deliverables}>
      {items.map((item, index) => (
        <li key={item.title}>
          <div className={styles.deliverableTitle}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.title}</strong>
          </div>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
