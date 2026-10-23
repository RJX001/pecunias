"use client";

import { Fragment, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { CITY_PHOTO, SUNSET_PHOTO, optimisedBackground } from "./hero-images";
import styles from "./Wordmark.module.css";

const WORDS = [
  { word: "PECUNIA", letters: ["P", "E", "C", "U", "N", "I", "A"] },
  { word: "STUDIOS", letters: ["S", "T", "U", "D", "I", "O", "S"] },
] as const;

const STAGES = ["Create", "Discover", "Convert", "Connect"] as const;

const STAGE_INTERVAL_MS = 4200;
const PULSE_TRAVEL_MS = 2800;

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

const CITY_BACKGROUND = optimisedBackground(CITY_PHOTO, 192);
const SUNSET_BACKGROUND = optimisedBackground(SUNSET_PHOTO, 192);

/** Same seven-step city/sunset cycle as the approved wordmark. */
const PHOTO_CYCLE = [
  CITY_BACKGROUND,
  SUNSET_BACKGROUND,
  CITY_BACKGROUND,
  SUNSET_BACKGROUND,
  CITY_BACKGROUND,
  SUNSET_BACKGROUND,
  CITY_BACKGROUND,
] as const;

type StageApi = {
  select: (index: number) => void;
  toggle: () => void;
  replay: () => void;
};

function subscribeReduced(onStoreChange: () => void) {
  const query = window.matchMedia(REDUCED_QUERY);
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
}

function getReduced() {
  return window.matchMedia(REDUCED_QUERY).matches;
}

function formatCoord(value: number) {
  return Number(value.toFixed(2)).toString();
}

export function Wordmark() {
  const frameRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const structureRef = useRef<SVGPathElement>(null);
  const activePathRef = useRef<SVGPathElement>(null);
  const pulseRef = useRef<SVGCircleElement>(null);
  const stageRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const apiRef = useRef<StageApi>({
    select: () => undefined,
    toggle: () => undefined,
    replay: () => undefined,
  });

  const reduced = useSyncExternalStore(subscribeReduced, getReduced, () => false);
  const [pinned, setPinned] = useState<string | null>(null);
  const [active, setActive] = useState(0);
  const [pausedOverride, setPausedOverride] = useState<boolean | null>(null);
  const paused = pausedOverride ?? reduced;

  useEffect(() => {
    const root = frameRef.current;
    if (!root) return;

    let disposed = false;
    let frameId = 0;
    let activeIndex = 0;
    let elapsed = 0;
    let stageStartedAt = 0;
    let userPaused = window.matchMedia(REDUCED_QUERY).matches;
    let inView = false;
    let pageVisible = document.visibilityState === "visible";

    const reducedNow = () => window.matchMedia(REDUCED_QUERY).matches;

    const hidePulse = () => {
      pulseRef.current?.setAttribute("data-hidden", "true");
    };

    const movePulse = (ms: number) => {
      const path = activePathRef.current;
      const pulse = pulseRef.current;
      if (!path || !pulse || !path.getAttribute("d")) return;
      const length = path.getTotalLength();
      if (!Number.isFinite(length) || length <= 0) return;
      const travel = Math.min(1, Math.max(0, ms) / PULSE_TRAVEL_MS);
      const point = path.getPointAtLength(length * travel);
      pulse.setAttribute("cx", formatCoord(point.x));
      pulse.setAttribute("cy", formatCoord(point.y));
      pulse.setAttribute("data-hidden", reducedNow() || userPaused ? "true" : "false");
    };

    const draw = () => {
      const svg = svgRef.current;
      const dot = dotRef.current;
      const structure = structureRef.current;
      const activePath = activePathRef.current;
      if (!svg || !dot || !structure || !activePath) return;

      const svgBox = svg.getBoundingClientRect();
      if (svgBox.width < 2 || svgBox.height < 2) return;

      const centers: number[] = [];
      for (let index = 0; index < STAGES.length; index += 1) {
        const button = stageRefs.current[index];
        if (!button) return;
        const rect = button.getBoundingClientRect();
        if (rect.width <= 0) return;
        centers.push(rect.left - svgBox.left + rect.width / 2);
      }

      const dotBox = dot.getBoundingClientRect();
      const titleBox = dot.parentElement?.getBoundingClientRect();
      const mid = dotBox.left - svgBox.left + dotBox.width / 2;
      const origin = dotBox.bottom - svgBox.top - 1;
      const width = svgBox.width;
      const height = svgBox.height;
      const titleBottom = titleBox ? titleBox.bottom - svgBox.top : origin;
      const end = height;
      const gap = Math.max(0, end - titleBottom);
      const trunk = Math.min(
        end - 14,
        Math.max(origin + 8, titleBottom + gap * 0.42),
      );
      const first = centers[0];
      const last = centers[centers.length - 1];
      const current = centers[activeIndex] ?? mid;

      svg.setAttribute("viewBox", `0 0 ${formatCoord(width)} ${formatCoord(height)}`);
      const middleDrops = centers
        .slice(1, -1)
        .map((x) => `M${formatCoord(x)},${formatCoord(trunk)} V${formatCoord(end)}`)
        .join(" ");
      structure.setAttribute(
        "d",
        `M${formatCoord(mid)},${formatCoord(origin)} V${formatCoord(trunk)} M${formatCoord(first)},${formatCoord(end)} V${formatCoord(trunk)} H${formatCoord(last)} V${formatCoord(end)} ${middleDrops}`,
      );
      activePath.setAttribute(
        "d",
        `M${formatCoord(mid)},${formatCoord(origin)} V${formatCoord(trunk)} H${formatCoord(current)} V${formatCoord(end)}`,
      );
    };

    const haltFrame = () => {
      if (!frameId) return;
      window.cancelAnimationFrame(frameId);
      frameId = 0;
      if (stageStartedAt) {
        elapsed = Math.max(0, performance.now() - stageStartedAt);
        stageStartedAt = 0;
      }
    };

    const tick = (now: number) => {
      if (disposed) return;
      if (document.visibilityState !== "visible") {
        pageVisible = false;
        frameId = 0;
        stageStartedAt = 0;
        hidePulse();
        return;
      }
      if (!stageStartedAt) stageStartedAt = now - elapsed;
      const nextElapsed = now - stageStartedAt;
      if (nextElapsed > elapsed + 250) {
        stageStartedAt = now - elapsed;
      } else {
        elapsed = nextElapsed;
      }
      if (elapsed >= STAGE_INTERVAL_MS) {
        activeIndex = (activeIndex + 1) % STAGES.length;
        elapsed = 0;
        stageStartedAt = now;
        setActive(activeIndex);
        draw();
      }
      movePulse(elapsed);
      frameId = window.requestAnimationFrame(tick);
    };

    const sync = () => {
      if (disposed) return;
      const run = !userPaused && inView && pageVisible;
      if (run) {
        if (!frameId) frameId = window.requestAnimationFrame(tick);
        return;
      }
      haltFrame();
      hidePulse();
    };

    const publishPaused = (next: boolean) => {
      userPaused = next;
      setPausedOverride(next);
    };

    apiRef.current = {
      select(index) {
        if (index < 0 || index >= STAGES.length) return;
        activeIndex = index;
        elapsed = 0;
        stageStartedAt = 0;
        setActive(index);
        draw();
        if (!userPaused && inView && pageVisible) movePulse(0);
        else hidePulse();
      },
      toggle() {
        publishPaused(!userPaused);
        draw();
        sync();
      },
      replay() {
        activeIndex = 0;
        elapsed = 0;
        stageStartedAt = 0;
        publishPaused(reducedNow());
        setActive(0);
        draw();
        sync();
      },
    };

    const resizeObserver = new ResizeObserver(() => {
      draw();
      if (!userPaused && inView && pageVisible) movePulse(elapsed);
    });
    resizeObserver.observe(root);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.2 },
    );
    intersectionObserver.observe(root);

    const onVisibility = () => {
      pageVisible = document.visibilityState === "visible";
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const motion = window.matchMedia(REDUCED_QUERY);
    const onMotion = () => {
      publishPaused(motion.matches);
      elapsed = 0;
      stageStartedAt = 0;
      draw();
      sync();
    };
    motion.addEventListener("change", onMotion);

    const redraw = () => {
      if (disposed) return;
      draw();
      if (!userPaused && inView && pageVisible) movePulse(elapsed);
    };
    document.fonts?.ready.then(redraw);

    publishPaused(userPaused);
    draw();
    hidePulse();
    sync();

    return () => {
      disposed = true;
      apiRef.current = {
        select: () => undefined,
        toggle: () => undefined,
        replay: () => undefined,
      };
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = 0;
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      motion.removeEventListener("change", onMotion);
    };
  }, []);

  return (
    <div ref={frameRef} className={styles.frame}>
      <div className={styles.flow}>
        <div className={styles.wordmark} role="group" aria-label="Pecunia Studios">
          {WORDS.map((entry, wordIndex) => (
            <Fragment key={entry.word}>
              {wordIndex > 0 && (
                <span ref={dotRef} className={styles.dot} aria-hidden="true" />
              )}
              <div className={styles.word}>
                {entry.letters.map((letter, letterIndex) => {
                  const id = `${entry.word}-${letterIndex}`;
                  const cycleIndex = wordIndex * entry.letters.length + letterIndex;
                  const isPinned = pinned === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      className={styles.letter}
                      aria-label={`Reveal city imagery in ${entry.word}, letter ${letterIndex + 1} ${letter}`}
                      aria-pressed={isPinned}
                      data-pinned={isPinned ? "" : undefined}
                      style={{
                        backgroundImage: PHOTO_CYCLE[cycleIndex % PHOTO_CYCLE.length],
                        backgroundPosition: `50% ${35 + (cycleIndex % 7) * 4}%`,
                      }}
                      onClick={() => setPinned(isPinned ? null : id)}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            </Fragment>
          ))}
        </div>
        <svg
          ref={svgRef}
          className={styles.connections}
          aria-hidden="true"
          focusable="false"
          overflow="visible"
          preserveAspectRatio="none"
        >
          <path ref={structureRef} className={styles.structure} />
          <path ref={activePathRef} className={styles.activeLine} />
          <circle
            ref={pulseRef}
            className={styles.pulse}
            r="3.5"
            data-hidden="true"
          />
        </svg>
        <div
          className={styles.stageRow}
          role="group"
          aria-label="Connected growth stages"
        >
          {STAGES.map((stage, index) => (
            <button
              key={stage}
              ref={(node) => {
                stageRefs.current[index] = node;
              }}
              type="button"
              className={styles.stage}
              aria-pressed={index === active}
              onClick={() => apiRef.current.select(index)}
            >
              {stage}
            </button>
          ))}
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.action}
            aria-pressed={paused}
            onClick={() => apiRef.current.toggle()}
          >
            {paused ? "Play animation" : "Pause animation"}
          </button>
          <button
            type="button"
            className={styles.action}
            onClick={() => apiRef.current.replay()}
          >
            Replay <span aria-hidden="true">↻</span>
          </button>
        </div>
      </div>
    </div>
  );
}
