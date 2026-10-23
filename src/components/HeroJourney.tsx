"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { HERO_JOURNEY_LABEL, HERO_JOURNEY_STATUS } from "@/data/hero-headlines";
import styles from "./HeroJourney.module.css";

type Point = readonly [number, number];
type Path = { points: readonly Point[]; lengths: number[]; total: number };

type Scene = {
  phase: number;
  freshCycle: boolean;
  family: string;
  surface: string;
};

type Engine = {
  setPaused: (paused: boolean) => void;
  replay: () => void;
};

const LOGICAL_SIZE = 500;
const MAX_DPR = 2;
const MAX_DT = 0.05;
const PULSE_RATE = 0.14;
const PULSE_TRAVEL = 0.8;
const PULSE_FADE_IN = 0.06;
const STAGE_SECONDS = 3;
const STAGE_BLEND_SECONDS = 0.4;
/** Least common multiple of the 12s stage cycle and the 1/0.14s pulse cycle. */
const PHASE_WRAP = 300;
/** Static reduced-motion frame: "Create" active, every dot mid-travel on its path. */
const STATIC_PHASE = 1.43;

const GREEN = "#23FA6C";
const INK = "#181410";
const MUTED = "#777b73";
const CONNECTOR = "#dce1da";
const PILL = "#f2f3ef";
const PILL_TEXT = "#73786e";

const STAGES = ["Create", "Discover", "Convert", "Connect"] as const;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function measure(points: readonly Point[]): Path {
  const lengths: number[] = [];
  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    const length = Math.hypot(
      points[i][0] - points[i - 1][0],
      points[i][1] - points[i - 1][1],
    );
    lengths.push(length);
    total += length;
  }
  return { points, lengths, total };
}

const INCOMING = [
  [
    [153, 140],
    [158, 140],
    [158, 200],
    [206, 200],
    [206, 205],
  ],
  [
    [305, 149],
    [454, 149],
    [454, 219],
    [444, 219],
  ],
  [
    [305, 195],
    [305, 205],
  ],
].map((points) => measure(points as unknown as readonly Point[]));

const SERVICE_INPUTS = [
  [
    [94, 369],
    [94, 358],
    [276, 358],
    [276, 348],
  ],
  [
    [250, 369],
    [250, 348],
  ],
  [
    [406, 369],
    [406, 358],
    [276, 358],
    [276, 348],
  ],
  [
    [109, 474],
    [14, 474],
    [14, 330],
    [108, 330],
  ],
].map((points) => measure(points as unknown as readonly Point[]));

const SERVICE_CARDS = [
  [24, "Premium Website", "Design"],
  [180, "Custom AI", "Integration"],
  [336, "Custom", "Dashboards"],
] as const;

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionOnServer() {
  return false;
}

function easeInOutSine(value: number) {
  return -(Math.cos(Math.PI * value) - 1) / 2;
}

function mixHex(from: string, to: string, amount: number) {
  if (amount <= 0) return from;
  if (amount >= 1) return to;
  const a = Number.parseInt(from.slice(1), 16);
  const b = Number.parseInt(to.slice(1), 16);
  const channel = (shift: number) => {
    const start = (a >> shift) & 255;
    const end = (b >> shift) & 255;
    return Math.round(start + (end - start) * amount);
  };
  return `rgb(${channel(16)}, ${channel(8)}, ${channel(0)})`;
}

function pointAlong(path: Path, distance: number): Point {
  let remaining = distance;
  for (let i = 0; i < path.lengths.length; i += 1) {
    const length = path.lengths[i];
    if (remaining <= length || i === path.lengths.length - 1) {
      const f = length ? Math.min(1, remaining / length) : 1;
      const [ax, ay] = path.points[i];
      const [bx, by] = path.points[i + 1];
      return [ax + (bx - ax) * f, ay + (by - ay) * f];
    }
    remaining -= length;
  }
  return path.points[path.points.length - 1];
}

function drawJourney(ctx: CanvasRenderingContext2D, scene: Scene) {
  const { phase, family } = scene;

  const box = (
    x: number,
    y: number,
    w: number,
    h: number,
    fill = "#fff",
    radius = 12,
  ) => {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
    ctx.fillStyle = fill;
    ctx.fill();
  };

  const label = (
    text: string,
    x: number,
    y: number,
    size = 15,
    color = INK,
    maxWidth?: number,
  ) => {
    ctx.fillStyle = color;
    ctx.font = `800 ${size}px ${family}`;
    if (maxWidth) {
      while (ctx.measureText(text).width > maxWidth && size > 8) {
        size -= 0.25;
        ctx.font = `800 ${size}px ${family}`;
      }
    }
    ctx.fillText(text, x, y);
  };

  const card = (x: number, y: number, w: number, h: number) => {
    ctx.save();
    ctx.shadowColor = "#18141016";
    ctx.shadowBlur = 28;
    ctx.shadowOffsetY = 15;
    box(x, y, w, h);
    ctx.restore();
    ctx.strokeStyle = "#18141018";
    ctx.lineWidth = 1;
    ctx.stroke();
  };

  const strokeLine = (
    points: readonly Point[],
    colour = "#dedfd9",
    width = 1,
  ) => {
    ctx.beginPath();
    points.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.strokeStyle = colour;
    ctx.lineWidth = width;
    ctx.stroke();
  };

  const pulse = (path: Path, offset: number) => {
    const u = (((phase * PULSE_RATE + offset) % 1) + 1) % 1;
    const travelled = u < PULSE_TRAVEL ? easeInOutSine(u / PULSE_TRAVEL) : 1;
    const [x, y] = pointAlong(path, travelled * path.total);
    let alpha = 1;
    let radius = 4;
    if (u < PULSE_FADE_IN) {
      alpha = u / PULSE_FADE_IN;
    } else if (u > PULSE_TRAVEL) {
      const k = (u - PULSE_TRAVEL) / (1 - PULSE_TRAVEL);
      alpha = 1 - k;
      radius = 4 + 2.5 * Math.sin((k * Math.PI) / 2);
    }
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = GREEN;
    ctx.fill();
    ctx.restore();
  };

  INCOMING.forEach((path) => strokeLine(path.points, CONNECTOR, 1.4));

  const cycle = phase % (STAGES.length * STAGE_SECONDS);
  const active = Math.floor(cycle / STAGE_SECONDS);
  const previous = (active + STAGES.length - 1) % STAGES.length;
  const blend = scene.freshCycle
    ? 1
    : easeInOutSine(
        Math.min(1, (cycle - active * STAGE_SECONDS) / STAGE_BLEND_SECONDS),
      );
  STAGES.forEach((name, i) => {
    const weight = i === active ? blend : i === previous ? 1 - blend : 0;
    box(48 + i * 104, 32, 94, 29, mixHex(PILL, GREEN, weight), 15);
    label(name, 60 + i * 104, 51, 12, mixHex(PILL_TEXT, INK, weight));
  });

  card(39, 107, 114, 66);
  label("Content", 51, 134, 12, INK, 90);
  label("Creation", 51, 152, 12, INK, 90);

  card(166, 83, 278, 66);
  ctx.strokeStyle = GREEN;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(186, 106, 6, 0, Math.PI * 2);
  ctx.stroke();
  strokeLine(
    [
      [190, 111],
      [196, 117],
    ],
    GREEN,
    2,
  );
  label("Discover your brand", 209, 112, 14, INK, 220);
  label("SEO · Organic Growth", 209, 134, 11, MUTED, 220);

  card(166, 155, 278, 42);
  box(180, 170, 7, 7, GREEN, 4);
  label("Paid Growth", 199, 173, 12, INK, 230);
  label("Google · Meta · TikTok", 199, 189, 10, MUTED, 230);

  card(108, 205, 336, 143);
  box(108, 205, 336, 23, "#f1f3ee", 9);
  ["#cdd2c8", "#cdd2c8", GREEN].forEach((colour, i) =>
    box(120 + i * 10, 214, 5, 5, colour, 3),
  );
  box(120, 240, 312, 96, GREEN, 10);
  label("PECUNIA", 136, 268, 23, INK, 280);
  label("Your digital presence", 136, 290, 12, INK, 280);
  box(136, 305, 116, 20, "#fff", 3);
  label("Make The Move", 145, 319, 10, INK);

  box(20, 350, 460, 150, scene.surface, 0);
  strokeLine(
    [
      [276, 348],
      [276, 358],
      [94, 358],
      [94, 369],
    ],
    CONNECTOR,
    1.4,
  );
  strokeLine(
    [
      [276, 358],
      [406, 358],
      [406, 369],
    ],
    CONNECTOR,
    1.4,
  );
  strokeLine(
    [
      [250, 358],
      [250, 369],
    ],
    CONNECTOR,
    1.4,
  );

  SERVICE_CARDS.forEach(([x, first, second]) => {
    card(x, 369, 140, 63);
    box(x + 13, 382, 6, 6, GREEN, 3);
    label(first, x + 13, 404, 12, INK, 114);
    label(second, x + 13, 421, 12, INK, 114);
  });

  strokeLine(
    [
      [94, 432],
      [94, 444],
      [250, 444],
      [250, 452],
    ],
    CONNECTOR,
    1.4,
  );
  strokeLine(
    [
      [406, 432],
      [406, 444],
      [250, 444],
    ],
    CONNECTOR,
    1.4,
  );
  strokeLine(
    [
      [250, 432],
      [250, 452],
    ],
    CONNECTOR,
    1.4,
  );

  card(109, 452, 282, 43);
  box(123, 470, 7, 7, GREEN, 4);
  label("Enquiry captured", 142, 470, 12);
  label("AI Automation & CRM", 142, 486, 11, MUTED);

  SERVICE_INPUTS.forEach((path, i) => {
    strokeLine(path.points, CONNECTOR, 1.4);
    pulse(path, i * 0.19);
  });
  INCOMING.forEach((path, i) => pulse(path, i * 0.23));
}

export function HeroJourney() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Engine | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionOnServer,
  );
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? reducedMotion;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let disposed = false;
    let phase = getReducedMotion() ? STATIC_PHASE : 0;
    let sinceReset = 0;
    let paused = true;
    let inView = true;
    let pageVisible = document.visibilityState === "visible";
    let raf = 0;
    let last = 0;

    const scene: Scene = {
      phase,
      freshCycle: true,
      family: "Montserrat, sans-serif",
      surface: "#fff",
    };

    const readTheme = () => {
      const computed = getComputedStyle(canvas);
      scene.family = computed.fontFamily || scene.family;
      scene.surface = computed.getPropertyValue("--bg").trim() || "#fff";
    };

    const draw = () => {
      if (disposed || !canvas.width) return;
      scene.phase = phase;
      scene.freshCycle = sinceReset < STAGE_SECONDS;
      ctx.setTransform(
        canvas.width / LOGICAL_SIZE,
        0,
        0,
        canvas.height / LOGICAL_SIZE,
        0,
        0,
      );
      ctx.clearRect(0, 0, LOGICAL_SIZE, LOGICAL_SIZE);
      drawJourney(ctx, scene);
    };

    const tick = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, MAX_DT) : 0;
      last = now;
      phase = (phase + dt) % PHASE_WRAP;
      sinceReset += dt;
      draw();
      raf = window.requestAnimationFrame(tick);
    };

    const sync = () => {
      const shouldRun = !paused && inView && pageVisible && !disposed;
      canvas.dataset.motion = shouldRun ? "playing" : "paused";
      if (shouldRun && !raf) {
        last = 0;
        raf = window.requestAnimationFrame(tick);
      } else if (!shouldRun && raf) {
        window.cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const resize = (cssWidth: number) => {
      if (!cssWidth) return;
      const ratio = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const backing = Math.round(cssWidth * ratio);
      if (canvas.width !== backing || canvas.height !== backing) {
        canvas.width = backing;
        canvas.height = backing;
      }
      draw();
    };

    readTheme();
    resize(canvas.clientWidth);

    const resizeObserver = new ResizeObserver(([entry]) =>
      resize(entry.contentRect.width),
    );
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    intersectionObserver.observe(canvas);

    const onVisibility = () => {
      pageVisible = document.visibilityState === "visible";
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const themeObserver = new MutationObserver(() => {
      readTheme();
      draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    const redrawWithFonts = () => {
      if (disposed) return;
      readTheme();
      draw();
    };
    document.fonts?.ready.then(redrawWithFonts);
    document.fonts
      ?.load(`800 12px ${scene.family}`)
      .then(redrawWithFonts, () => undefined);

    engineRef.current = {
      setPaused(next) {
        paused = next;
        sync();
      },
      replay() {
        phase = 0;
        sinceReset = 0;
        draw();
      },
    };

    return () => {
      disposed = true;
      engineRef.current = null;
      window.cancelAnimationFrame(raf);
      raf = 0;
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    engineRef.current?.setPaused(paused);
  }, [paused]);

  const replay = () => {
    engineRef.current?.replay();
    if (!reducedMotion) setUserPaused(false);
  };

  return (
    <div className={styles.motion}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        role="img"
        aria-label={HERO_JOURNEY_LABEL}
      />
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.action}
          aria-pressed={paused}
          onClick={() => setUserPaused(!paused)}
        >
          {paused ? "Play motion" : "Pause motion"}
        </button>
        <button type="button" className={styles.action} onClick={replay}>
          Replay motion <span aria-hidden="true">↻</span>
        </button>
      </div>
      <p className={styles.status}>{HERO_JOURNEY_STATUS}</p>
    </div>
  );
}
