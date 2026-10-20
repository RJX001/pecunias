import styles from "./service/service.module.css";

export function WhatWeDo({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.deliverables}>
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
        </li>
      ))}
    </ul>
  );
}
