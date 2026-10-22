"use client";

import {
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GROWTH_STACK_HEADING,
  GROWTH_STACK_INTRO,
  GROWTH_STACK_KICKER,
  growthStack,
  servicePath,
  type GrowthImageKey,
} from "@/data/growth-stack";
import { FINAL_CTA } from "@/data/homepage-copy";
import styles from "./GrowthStack.module.css";

const IMAGES: Record<GrowthImageKey, string> = {
  studio: "/images/premium-studio.png",
  city: "/images/city.jpg",
  sunset: "/images/sunset.jpg",
};

/** Matches the horizontal accordion layout in GrowthStack.module.css. */
const HOVER_ACTIVATE_QUERY = "(min-width: 601px)";

const HEADING_SPLIT = GROWTH_STACK_HEADING.indexOf(" — ");
const HEADING_LEAD = GROWTH_STACK_HEADING.slice(0, HEADING_SPLIT);
const HEADING_TAIL = GROWTH_STACK_HEADING.slice(HEADING_SPLIT + 3);

const ART_SIZES = "(max-width: 600px) 88vw, (max-width: 999px) 80vw, 620px";

export function GrowthStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onPanelPointerEnter = (
    event: PointerEvent<HTMLElement>,
    index: number,
  ) => {
    if (event.pointerType !== "mouse") return;
    if (!window.matchMedia(HOVER_ACTIVATE_QUERY).matches) return;
    setActiveIndex(index);
  };

  const onTriggerKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const count = growthStack.length;
    let target: number;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        target = (index + 1) % count;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        target = (index - 1 + count) % count;
        break;
      case "Home":
        target = 0;
        break;
      case "End":
        target = count - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    triggerRefs.current[target]?.focus();
  };

  return (
    <section
      id="services"
      className={styles.section}
      aria-labelledby="growth-stack-heading"
    >
      <div className={`ps-inner ${styles.grid}`}>
        <div className={styles.intro}>
          <p className="ps-kicker">{GROWTH_STACK_KICKER}</p>
          <h2 id="growth-stack-heading" className={`ps-h2 ${styles.heading}`}>
            {HEADING_LEAD} —<br />
            {HEADING_TAIL}
          </h2>
          <p className={`ps-support ${styles.support}`}>{GROWTH_STACK_INTRO}</p>
          <a href={FINAL_CTA.href} className="ps-button">
            {FINAL_CTA.cta}
          </a>
        </div>

        <div className={styles.panels}>
          {growthStack.map((service, index) => {
            const active = index === activeIndex;
            const bodyId = `growth-panel-${service.slug}`;
            const hasHighlights = Boolean(service.highlights?.length);
            return (
              <article
                key={service.slug}
                className={styles.panel}
                data-active={active ? "true" : undefined}
                onPointerEnter={(event) => onPanelPointerEnter(event, index)}
              >
                <h3 className={styles.panelHeading}>
                  <button
                    ref={(node) => {
                      triggerRefs.current[index] = node;
                    }}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={active}
                    aria-controls={bodyId}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => onTriggerKeyDown(event, index)}
                  >
                    <span className={styles.number} aria-hidden="true">
                      {service.number}
                    </span>
                    <span className={styles.title}>{service.name}</span>
                    <span className={styles.indicator} aria-hidden="true">
                      {active ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={bodyId}
                  className={styles.bodyWrap}
                  inert={!active}
                  aria-hidden={active ? undefined : true}
                >
                  <div className={styles.body}>
                    <div className={styles.art}>
                      {service.graphic === "search" ? (
                        <div
                          className={styles.searchArt}
                          role="img"
                          aria-label={service.artLabel}
                        >
                          <span aria-hidden="true">Search visibility</span>
                          <strong aria-hidden="true">
                            Search. Find. Connect.
                          </strong>
                          <p aria-hidden="true">SEO · Local · AI search</p>
                        </div>
                      ) : service.image ? (
                        <Image
                          src={IMAGES[service.image]}
                          alt={service.artLabel}
                          fill
                          sizes={ART_SIZES}
                          className={styles.artImage}
                          style={{ objectPosition: service.imagePosition }}
                        />
                      ) : null}
                    </div>
                    <p
                      className={`${styles.lead} ${
                        hasHighlights ? styles.leadCompact : ""
                      }`}
                    >
                      {service.description}
                    </p>
                    {hasHighlights ? (
                      <ul className={styles.highlights}>
                        {service.highlights?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    <Link
                      href={servicePath(service.slug)}
                      className={`${styles.readMore} ${
                        hasHighlights ? styles.readMoreCompact : ""
                      }`}
                    >
                      <span className={styles.readMoreText}>
                        {service.readMore}
                      </span>
                      <span className={styles.arrow} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
