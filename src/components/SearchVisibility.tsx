"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent,
} from "react";
import Link from "next/link";
import {
  SEARCH_VISIBILITY_EXPLORE,
  SEARCH_VISIBILITY_FOOTNOTE,
  SEARCH_VISIBILITY_HEADING,
  SEARCH_VISIBILITY_HREF,
  SEARCH_VISIBILITY_INTRO,
  SEARCH_VISIBILITY_KICKER,
  SEARCH_VISIBILITY_TOPIC_LABEL,
  SEARCH_VISIBILITY_TOPIC_LINK,
  SEARCH_VISIBILITY_TOPICS,
} from "@/data/search-visibility";
import styles from "./SearchVisibility.module.css";

const CYCLE_MS = 3500;
const REDUCE_MOTION = "(prefers-reduced-motion: reduce)";

function prefersReducedMotion() {
  return window.matchMedia(REDUCE_MOTION).matches;
}

export function SearchVisibility() {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reading, setReading] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [inView, setInView] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const readingTimer = useRef<number | null>(null);
  const baseId = useId();
  const panelId = `${baseId}-panel`;
  const topic = SEARCH_VISIBILITY_TOPICS[active];

  useEffect(() => {
    const media = window.matchMedia(REDUCE_MOTION);
    const apply = () => setReducedMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const apply = () => setHidden(document.hidden);
    apply();
    document.addEventListener("visibilitychange", apply);
    return () => document.removeEventListener("visibilitychange", apply);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setInView(entries.some((entry) => entry.isIntersecting));
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      reducedMotion ||
      prefersReducedMotion() ||
      userPaused ||
      focused ||
      reading ||
      hidden ||
      document.hidden ||
      !inView
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setActive(
        (current) => (current + 1) % SEARCH_VISIBILITY_TOPICS.length,
      );
    }, CYCLE_MS);

    return () => window.clearInterval(timer);
  }, [reducedMotion, userPaused, focused, reading, hidden, inView]);

  useEffect(() => {
    const list = listRef.current;
    const tab = tabRefs.current[active];
    if (!list || !tab) return;

    const reduce = reducedMotion || prefersReducedMotion();
    const top = tab.offsetTop - list.clientHeight / 2 + tab.clientHeight / 2;
    list.scrollTo({
      top: Math.max(0, top),
      behavior: reduce ? "auto" : "smooth",
    });
  }, [active, reducedMotion]);

  useEffect(() => {
    return () => {
      if (readingTimer.current !== null) {
        window.clearTimeout(readingTimer.current);
      }
    };
  }, []);

  function markReading(duration: number) {
    setReading(true);
    if (readingTimer.current !== null) {
      window.clearTimeout(readingTimer.current);
    }
    readingTimer.current = window.setTimeout(() => {
      readingTimer.current = null;
      setReading(false);
    }, duration);
  }

  function onPointerDown(event: ReactPointerEvent<HTMLElement>) {
    markReading(event.pointerType === "mouse" ? 1200 : 8000);
  }

  function onListWheel(event: WheelEvent<HTMLDivElement>) {
    if (event.deltaY !== 0) markReading(4000);
  }

  function selectFromKeyboard(index: number) {
    setUserPaused(true);
    setActive(index);
    tabRefs.current[index]?.focus({ preventScroll: true });
  }

  function onTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const count = SEARCH_VISIBILITY_TOPICS.length;
    let next: number | null = null;
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = (index + 1) % count;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = (index - 1 + count) % count;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = count - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    selectFromKeyboard(next);
  }

  return (
    <section
      ref={sectionRef}
      id="search-visibility"
      className={`ps-section ${styles.section}`}
      aria-labelledby="search-visibility-heading"
      onPointerDown={onPointerDown}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
          setFocused(false);
        }
      }}
    >
      <div className="ps-inner">
        <p className="ps-kicker">{SEARCH_VISIBILITY_KICKER}</p>
        <h2 id="search-visibility-heading" className={`ps-h2 ${styles.heading}`}>
          {SEARCH_VISIBILITY_HEADING.lead}
          <br />
          <span className={styles.accent}>{SEARCH_VISIBILITY_HEADING.accent}</span>
        </h2>
        <p className={`ps-support ${styles.intro}`}>{SEARCH_VISIBILITY_INTRO}</p>
        <Link href={SEARCH_VISIBILITY_HREF} className={styles.explore}>
          {SEARCH_VISIBILITY_EXPLORE}
          <span aria-hidden="true">→</span>
        </Link>

        <div className={styles.showcase}>
          <div className={styles.topics}>
            <p className={styles.topicLabel}>{SEARCH_VISIBILITY_TOPIC_LABEL}</p>
            <div
              ref={listRef}
              className={styles.list}
              role="tablist"
              aria-label="Search visibility services"
              aria-orientation="vertical"
              onWheel={onListWheel}
              onTouchMove={() => markReading(8000)}
            >
              {SEARCH_VISIBILITY_TOPICS.map((item, index) => {
                const selected = index === active;
                const tabId = `${baseId}-tab-${item.id}`;
                return (
                  <button
                    key={item.id}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    id={tabId}
                    type="button"
                    role="tab"
                    className={styles.tab}
                    aria-selected={selected}
                    aria-controls={panelId}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => {
                      setUserPaused(true);
                      setActive(index);
                    }}
                    onKeyDown={(event) => onTabKeyDown(event, index)}
                  >
                    <span>{item.label}</span>
                    <span className={styles.tabMark} aria-hidden="true">
                      ↗
                    </span>
                  </button>
                );
              })}
            </div>
            {reducedMotion ? null : (
              <button
                type="button"
                className={styles.pause}
                aria-pressed={userPaused}
                onClick={() => setUserPaused((current) => !current)}
              >
                {userPaused ? "Resume topic cycle" : "Pause topic cycle"}
              </button>
            )}
          </div>

          <div className={styles.stack}>
            <div
              id={panelId}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${topic.id}`}
              className={styles.card}
              onPointerDown={() => setUserPaused(true)}
            >
              <div className={styles.copy}>
                <p className={styles.copyLabel}>{topic.label}</p>
                <h3>{topic.heading}</h3>
                <p className={styles.copyBody}>{topic.body}</p>
                <Link href={SEARCH_VISIBILITY_HREF} className={styles.cardLink}>
                  {SEARCH_VISIBILITY_TOPIC_LINK}
                  <span className={styles.srOnly}>
                    : Search Visibility and SEO
                  </span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.footnote}>{SEARCH_VISIBILITY_FOOTNOTE}</p>
      </div>
    </section>
  );
}
