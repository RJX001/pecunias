import Link from "next/link";
import {
  GROWTH_STACK_HEADING,
  GROWTH_STACK_INTRO,
  growthStack,
  servicePath,
} from "@/data/growth-stack";
import { Breadcrumb } from "./service/Breadcrumb";
import { ServiceNav } from "./service/ServiceNav";
import styles from "./service/service.module.css";

const HEADING_SPLIT = GROWTH_STACK_HEADING.indexOf(" — ");

export function Services() {
  return (
    <>
      <ServiceNav />
      <div className={`${styles.page} ${styles.index}`}>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />
        <p className={styles.eyebrow}>Pecunia Studios</p>
        <h1 className={`${styles.title} ${styles.indexTitle}`}>
          {GROWTH_STACK_HEADING.slice(0, HEADING_SPLIT)} —
          <br />
          {GROWTH_STACK_HEADING.slice(HEADING_SPLIT + 3)}
        </h1>
        <p className={styles.strap}>{GROWTH_STACK_INTRO}</p>
        <ul className={styles.indexList}>
          {growthStack.map((system) => (
            <li key={system.slug}>
              <Link href={servicePath(system.slug)}>
                <span>{system.number}</span>
                <h2>{system.name}</h2>
                <p>{system.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
