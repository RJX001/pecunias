import Link from "next/link";
import {
  growthStack,
  servicePath,
  type GrowthSystemSlug,
} from "@/data/growth-stack";
import styles from "./service.module.css";

export function ServiceNav({ current }: { current?: GrowthSystemSlug }) {
  return (
    <nav className={styles.serviceNav} aria-label="Our Services">
      <ul>
        {growthStack.map((system) => (
          <li key={system.slug}>
            <Link
              href={servicePath(system.slug)}
              aria-current={system.slug === current ? "page" : undefined}
            >
              {system.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
