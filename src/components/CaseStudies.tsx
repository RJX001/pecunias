"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies";
import styles from "./CaseStudies.module.css";

const HEADING = "Premium Websites.";
const INTRO =
  "Distinctive design. Seamless experiences. Explore the websites and digital platforms we've built for real businesses.";
const PIN_QUERY =
  "(min-width: 960px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
const PIN_FALLBACK = 108;
const SWIPE_THRESHOLD = 48;
const RUNWAY_MIN = 120;
/**
 * Scroll hint added only while the tall-desktop scrub is active.
 * The hint box is 24px; the extra pixels stop a 1px layout change
 * from turning the scrub on and off.
 */
const HINT_ALLOWANCE = 32;

/**
 * Natural pixel size of each file in public/images/projects.
 * All four VP8 keyframes measure 1265×712. The preview uses these
 * dimensions so the screenshot keeps its own ratio instead of a
 * clipping frame.
 */
const SHOT_SIZE: Record<string, { width: number; height: number }> = {
  "/images/projects/atlantis.webp": { width: 1265, height: 712 },
  "/images/projects/cardchart.webp": { width: 1265, height: 712 },
  "/images/projects/beckbury.webp": { width: 1265, height: 712 },
  "/images/projects/secured.webp": { width: 1265, height: 712 },
};

const SHOT_RATIO = Math.max(
  ...Object.values(SHOT_SIZE).map((size) => size.height / size.width),
);

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function scrollByInstant(top: number) {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollBy({ top, behavior: "auto" });
  root.style.scrollBehavior = previous;
}

function shotSize(src: string) {
  return SHOT_SIZE[src] ?? { width: 1265, height: 712 };
}

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const pinTopRef = useRef(PIN_FALLBACK);
  const pinnedRef = useRef(false);
  const indexRef = useRef(0);
  const startX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [pinned, setPinned] = useState(false);
  const last = caseStudies.length - 1;
  const project = caseStudies[index];

  const releaseSlideFocus = (fromIndex: number) => {
    const frame = windowRef.current;
    const active = document.activeElement;
    const slide = frame?.querySelectorAll("article")[fromIndex];
    if (!(active instanceof HTMLElement) || !slide?.contains(active)) return;
    frame?.focus({ preventScroll: true });
    if (document.activeElement === active) active.blur();
  };

  const applyIndex = (next: number) => {
    const clamped = Math.min(last, Math.max(0, next));
    if (clamped === indexRef.current) return;
    releaseSlideFocus(indexRef.current);
    indexRef.current = clamped;
    setIndex(clamped);
  };

  const readRunway = () => {
    const section = sectionRef.current;
    const pinEl = pinRef.current;
    const headingEl = headingRef.current;
    if (!section || !pinEl || !headingEl || !pinnedRef.current) return null;
    const lead = headingEl.offsetHeight;
    const travel = section.offsetHeight - lead - pinEl.offsetHeight;
    if (travel < RUNWAY_MIN) return null;
    return {
      travel,
      startTop: pinTopRef.current - lead,
      rect: section.getBoundingClientRect(),
    };
  };

  const syncRef = useRef<() => void>(() => {});

  useIsoLayoutEffect(() => {
    syncRef.current = () => {
      const runway = readRunway();
      if (!runway) return;
      const count = caseStudies.length;
      if (runway.rect.top > runway.startTop) {
        applyIndex(0);
        return;
      }
      const travelled = runway.startTop - runway.rect.top;
      if (travelled >= runway.travel) {
        applyIndex(count - 1);
        return;
      }
      applyIndex(
        Math.min(count - 1, Math.floor((travelled / runway.travel) * count)),
      );
    };
  });

  useIsoLayoutEffect(() => {
    const slide = slideRef.current;
    const frame = windowRef.current;
    if (!slide || !frame) return;
    const measure = () => {
      const width = slide.getBoundingClientRect().width;
      setStep(width > 0 ? width : frame.getBoundingClientRect().width);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(slide);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useIsoLayoutEffect(() => {
    const section = sectionRef.current;
    const pinEl = pinRef.current;
    if (!section || !pinEl) return;
    const media = window.matchMedia(PIN_QUERY);
    const header = document.querySelector("[data-site-header]");
    let frame = 0;
    let flips = 0;

    const measurePinTop = () => {
      const height = header?.getBoundingClientRect().height ?? PIN_FALLBACK - 16;
      const next = Math.ceil(height) + 16;
      pinTopRef.current = next;
      if (section.style.getPropertyValue("--pin-top") !== `${next}px`) {
        section.style.setProperty("--pin-top", `${next}px`);
      }
    };

    const contentFits = () => {
      if (!media.matches) return false;
      const frameEl = windowRef.current;
      const available = window.innerHeight - pinTopRef.current;
      const width = frameEl?.clientWidth ?? 0;
      const estimated = width * SHOT_RATIO;
      const rendered =
        frameEl?.querySelector("img")?.getBoundingClientRect().height ?? 0;
      const shot = Math.max(estimated, rendered);
      if (available <= 0 || shot <= 0 || shot > available) return false;
      const missingImage = Math.max(0, estimated - rendered);
      const extra = pinnedRef.current ? 0 : HINT_ALLOWANCE;
      return pinEl.offsetHeight + missingImage + extra <= available;
    };

    const evaluate = (reset: boolean) => {
      if (reset) flips = 0;
      measurePinTop();
      const next = contentFits();
      if (next !== pinnedRef.current) {
        flips += 1;
        if (flips > 2) {
          if (pinnedRef.current) {
            pinnedRef.current = false;
            setPinned(false);
          }
          return;
        }
        pinnedRef.current = next;
        setPinned(next);
        frame = requestAnimationFrame(() => evaluate(false));
        return;
      }
      flips = 0;
      if (next) syncRef.current();
    };

    const onScroll = () => syncRef.current();
    const onViewport = () => evaluate(true);

    evaluate(true);
    media.addEventListener("change", onViewport);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onViewport, { passive: true });
    const observer = new ResizeObserver(() => evaluate(false));
    observer.observe(section);
    observer.observe(pinEl);
    if (header) observer.observe(header);
    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener("change", onViewport);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onViewport);
      observer.disconnect();
    };
  }, []);

  const scrollToIndex = (target: number) => {
    const runway = readRunway();
    if (!runway) return;
    const desiredTop =
      runway.startTop - ((target + 0.5) / caseStudies.length) * runway.travel;
    scrollByInstant(runway.rect.top - desiredTop);
  };

  const go = (next: number) => {
    const clamped = Math.min(last, Math.max(0, next));
    if (clamped === indexRef.current) return;
    applyIndex(clamped);
    scrollToIndex(clamped);
  };

  const skip = () => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    scrollByInstant(rect.bottom - pinTopRef.current);
    applyIndex(last);
    endRef.current?.focus({ preventScroll: true });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      target.closest("input, textarea, select")
    ) {
      return;
    }
    event.preventDefault();
    go(event.key === "ArrowRight" ? indexRef.current + 1 : indexRef.current - 1);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (pinnedRef.current) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    startX.current = event.clientX;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const delta = event.clientX - startX.current;
    startX.current = null;
    if (pinnedRef.current) return;
    if (delta <= -SWIPE_THRESHOLD) go(index + 1);
    else if (delta >= SWIPE_THRESHOLD) go(index - 1);
  };

  return (
    <section
      ref={sectionRef}
      id="premium-websites"
      className={`ps-section ${styles.section}`}
      data-pinned={pinned ? "true" : "false"}
      aria-labelledby="premium-websites-heading"
      onKeyDown={onKeyDown}
    >
      <div ref={headingRef} className={`ps-inner ${styles.sectionHeading}`}>
        <p className="ps-kicker">Selected work</p>
        <h2 id="premium-websites-heading" className="ps-h2">{HEADING}</h2>
        <p className={styles.intro}>{INTRO}</p>
      </div>
      <div ref={pinRef} className={styles.pin}>
        <div className={`ps-inner ${styles.pinInner}`}>

          <div className={styles.heading}>
            <div className={styles.controls}>
              <button
                type="button"
                className={styles.control}
                aria-label="Previous website"
                disabled={index === 0}
                onClick={() => go(index - 1)}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className={styles.control}
                aria-label="Next website"
                disabled={index === last}
                onClick={() => go(index + 1)}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div
            ref={windowRef}
            className={styles.window}
            role="region"
            aria-roledescription="carousel"
            aria-label="Premium websites"
            tabIndex={0}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              startX.current = null;
            }}
          >
            <div
              className={styles.track}
              style={{ transform: `translate3d(${-step * index}px, 0, 0)` }}
            >
              {caseStudies.map((study, slideIndex) => {
                const visible = slideIndex === index;
                const size = shotSize(study.image);
                return (
                  <article
                    key={study.url}
                    ref={slideIndex === 0 ? slideRef : undefined}
                    className={styles.slide}
                    aria-hidden={visible ? undefined : true}
                    inert={visible ? undefined : true}
                    aria-label={`${slideIndex + 1} of ${caseStudies.length}: ${study.name}`}
                  >
                    <p className={styles.category}>{study.category}</p>
                    <h3 className={styles.name}>{study.name}</h3>
                    <a
                      className={styles.screen}
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${study.name} website (opens in a new tab)`}
                    >
                      <span className={styles.browser} aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <small>{study.host}</small>
                      </span>
                      <span className={styles.shotFrame}>
                        <Image
                          src={study.image}
                          alt={study.imageAlt}
                          width={size.width}
                          height={size.height}
                          sizes="(min-width: 1455px) 1280px, 88vw"
                          draggable={false}
                          className={styles.shot}
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                          }}
                        />
                      </span>
                      <span className={styles.open} aria-hidden="true">
                        Visit website <span aria-hidden="true">↗</span>
                      </span>
                    </a>
                  </article>
                );
              })}
            </div>
          </div>

          <div className={styles.meta}>
            <p className={styles.position} aria-live="polite">
              <span className={styles.meter} aria-hidden="true">
                {caseStudies.map((study, meterIndex) => (
                  <span
                    key={study.url}
                    data-on={meterIndex <= index ? "true" : "false"}
                  />
                ))}
              </span>
              <span aria-hidden="true">
                {index + 1} / {caseStudies.length}
              </span>
              <span className={styles.srOnly}>
                {project.name}, {index + 1} of {caseStudies.length}
              </span>
            </p>
            <button type="button" className={styles.skip} onClick={skip}>
              Skip previews <span aria-hidden="true">↓</span>
            </button>
          </div>
          <p className={styles.hint}>Scroll to explore the websites</p>
        </div>
      </div>
      <div ref={endRef} tabIndex={-1} className={styles.endMark}>
        End of website previews
      </div>
    </section>
  );
}
