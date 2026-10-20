import Link from "next/link";
import styles from "./service.module.css";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: readonly Crumb[] }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.label}>
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
