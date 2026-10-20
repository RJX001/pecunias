"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ABOUT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";
import styles from "./AboutTeaser.module.css";

export function AboutTeaser() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => setExpanded(entry.intersectionRatio > 0.5),
      { threshold: [0, 0.25, 0.5, 0.51, 0.75, 1] },
    );
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`ps-section ps-on-green ${styles.section}`}
    >
      <div className="ps-inner">
        <p className={`ps-kicker ${styles.kicker}`}>{ABOUT.subheading}</p>

        <div
          ref={sceneRef}
          className={styles.scene}
          data-expanded={expanded ? "true" : undefined}
        >
          <div className={styles.window}>
            <Image
              src="/images/city.jpg"
              alt=""
              fill
              sizes="(min-width: 1455px) 1280px, 88vw"
              className={styles.photo}
            />
            <h2 id="about-heading" className={styles.title}>
              {ABOUT.heading}
            </h2>
          </div>
        </div>

        <Reveal className={styles.body}>
          <p>{ABOUT.copy[0]}</p>
          <p>{ABOUT.copy[1]}</p>
          <Link
            href="/about"
            className={`ps-button ps-button-outline ${styles.button}`}
          >
            About Us →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
