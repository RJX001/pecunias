import Image from "next/image";
import Link from "next/link";
import { ABOUT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";
import styles from "./AboutTeaser.module.css";

export function AboutTeaser() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`ps-section ps-on-green ${styles.section}`}
    >
      <div className="ps-inner">
        <div className={styles.layout}>
          <p className={`ps-kicker ${styles.kicker}`}>{ABOUT.subheading}</p>
          <h2 id="about-heading" className={styles.title}>
            {ABOUT.heading}
          </h2>
          <div className={styles.frame}>
            {/* 720×899 source, served as-is so Next does not invent a wider rendition. */}
            <Image
              src="/images/about-creative-studio.jpg"
              alt="A sunlit creative desk with a pencil landscape drawing on a tilted board, surrounded by art supplies."
              width={720}
              height={899}
              unoptimized
              className={styles.photo}
            />
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
      </div>
    </section>
  );
}
