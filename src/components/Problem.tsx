"use client";

import { useEffect, useLayoutEffect, useRef, useState, type Ref } from "react";
import { WHY_PECUNIA } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

const SYSTEMS = [
  "Website",
  "Ads",
  "Social",
  "Data",
  "Marketplace",
  "CRM / Automation",
] as const;

const INTRO_ABOVE_DIAGRAM =
  "Too many businesses split their website, advertising, content and automation across different suppliers who don't understand the full customer journey.";

const RESULT_LABEL = "The result?";

const EMPHASIS_LINES = WHY_PECUNIA.emphasis.split(/(?<=\.)\s+/);

const ARROW_COUNT = 3;
const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 9;
const FLOW_HOLD_MS = 180;
const FLOW_MS = 980;

type Connector = {
  id: string;
  d: string;
  length: number;
  tipX?: number;
  tipY?: number;
};

type Origin = {
  index: number;
  fromX: number;
  fromY: number;
  top: number;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function PecuniaCloud({ markRef }: { markRef: Ref<HTMLDivElement> }) {
  return (
    <div
      ref={markRef}
      className="relative z-[1] flex h-[6.75rem] w-[15.5rem] items-center justify-center sm:h-[7.5rem] sm:w-[17.5rem] md:h-[8.25rem] md:w-[19.5rem]"
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-green"
        viewBox="0 0 280 140"
        preserveAspectRatio="xMidYMid meet"
      >
        <g fill="currentColor">
          <ellipse cx="78" cy="90" rx="58" ry="36" />
          <ellipse cx="202" cy="90" rx="58" ry="36" />
          <ellipse cx="140" cy="92" rx="90" ry="38" />
          <ellipse cx="106" cy="58" rx="50" ry="42" />
          <ellipse cx="176" cy="54" rx="56" ry="44" />
        </g>
      </svg>
      <span className="relative z-[1] translate-y-[6px] text-[16px] font-bold tracking-[0.12em] text-dark-text sm:text-[18px] md:text-[20px]">
        PECUNIA
      </span>
    </div>
  );
}

function addPoint(
  points: { x: number; y: number }[],
  x: number,
  y: number,
) {
  const last = points[points.length - 1];
  if (last && Math.abs(last.x - x) < 0.5 && Math.abs(last.y - y) < 0.5) return;
  points.push({ x, y });
}

function polylinePath(points: { x: number; y: number }[]) {
  return points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
}

function polylineLength(points: { x: number; y: number }[]) {
  let length = 0;
  for (let index = 1; index < points.length; index += 1) {
    const prev = points[index - 1];
    const next = points[index];
    length += Math.abs(next.x - prev.x) + Math.abs(next.y - prev.y);
  }
  return Math.max(length, 1);
}

function connectorFromPoints(
  id: string,
  points: { x: number; y: number }[],
  tip?: { x: number; y: number },
): Connector {
  return {
    id,
    d: polylinePath(points),
    length: polylineLength(points),
    tipX: tip?.x,
    tipY: tip?.y,
  };
}

function columnKey(x: number) {
  return Math.round(x / 8) * 8;
}

function clusterOrigins(origins: Origin[]): Origin[][] {
  const columns = new Map<number, Origin[]>();
  for (const origin of origins) {
    const key = columnKey(origin.fromX);
    const column = columns.get(key) ?? [];
    column.push(origin);
    columns.set(key, column);
  }

  const orderedColumns = [...columns.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, column]) => [...column].sort((a, b) => a.fromY - b.fromY));

  if (orderedColumns.length === ARROW_COUNT) {
    return orderedColumns;
  }

  if (orderedColumns.length === 6) {
    const flat = orderedColumns.flat();
    return [flat.slice(0, 2), flat.slice(2, 4), flat.slice(4, 6)];
  }

  if (orderedColumns.length === 2) {
    const rows = new Map<number, Origin[]>();
    for (const origin of origins) {
      const key = Math.round(origin.fromY / 8) * 8;
      const row = rows.get(key) ?? [];
      row.push(origin);
      rows.set(key, row);
    }
    return [...rows.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([, row]) => [...row].sort((a, b) => a.fromX - b.fromX));
  }

  const sorted = [...origins].sort((a, b) => a.fromX - b.fromX);
  const size = Math.ceil(sorted.length / ARROW_COUNT);
  return [0, 1, 2]
    .map((index) => sorted.slice(index * size, index * size + size))
    .filter((group) => group.length > 0);
}

function ConvergenceDiagram() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pecuniaRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [connectors, setConnectors] = useState<Connector[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [inView, setInView] = useState(false);
  const [connected, setConnected] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const measure = () => {
      const pecunia = pecuniaRef.current;
      if (!pecunia) return;
      const rootBox = root.getBoundingClientRect();
      const pecuniaBox = pecunia.getBoundingClientRect();
      const chipBoxes = SYSTEMS.map((_, index) => chipRefs.current[index]);
      if (chipBoxes.some((chip) => !chip)) return;

      const origins: Origin[] = chipBoxes.map((chip, index) => {
        const box = chip!.getBoundingClientRect();
        const fromX = box.left - rootBox.left + box.width / 2;
        const fromY = box.bottom - rootBox.top;
        return {
          index,
          fromX,
          fromY,
          top: box.top - rootBox.top,
        };
      });

      const lowestBottom = Math.max(...origins.map((origin) => origin.fromY));
      const pecuniaTop = pecuniaBox.top - rootBox.top;
      const pecuniaLeft = pecuniaBox.left - rootBox.left;
      const gap = pecuniaTop - lowestBottom;
      const channelY = lowestBottom + Math.max(18, gap * 0.42);
      const inset = Math.min(36, pecuniaBox.width * 0.22);
      const span = Math.max(pecuniaBox.width - inset * 2, 1);
      const tipY = pecuniaTop + 10;
      const lineEndY = tipY - ARROW_HEIGHT;
      const clusters = clusterOrigins(origins);
      const next: Connector[] = [];

      clusters.forEach((cluster, clusterIndex) => {
        if (cluster.length === 0) return;
        const landingX =
          pecuniaLeft + inset + (span * (clusterIndex + 0.5)) / clusters.length;
        const stacked = cluster.every(
          (origin) => Math.abs(origin.fromX - cluster[0].fromX) < 12,
        );

        if (stacked) {
          const column = [...cluster].sort((a, b) => a.fromY - b.fromY);
          for (let index = 0; index < column.length - 1; index += 1) {
            const from = column[index];
            const to = column[index + 1];
            next.push(
              connectorFromPoints(`union-${from.index}-${to.index}`, [
                { x: from.fromX, y: from.fromY },
                { x: from.fromX, y: to.top },
              ]),
            );
          }
          const lowest = column[column.length - 1];
          const points: { x: number; y: number }[] = [
            { x: lowest.fromX, y: lowest.fromY },
          ];
          addPoint(points, lowest.fromX, channelY);
          addPoint(points, landingX, channelY);
          addPoint(points, landingX, lineEndY);
          next.push(
            connectorFromPoints(`arrow-${clusterIndex}`, points, {
              x: landingX,
              y: tipY,
            }),
          );
          return;
        }

        const trunkX =
          cluster.reduce((sum, origin) => sum + origin.fromX, 0) / cluster.length;
        const mergeY = Math.min(
          Math.max(...cluster.map((origin) => origin.fromY)) + 8,
          channelY,
        );

        cluster.forEach((origin) => {
          const points: { x: number; y: number }[] = [
            { x: origin.fromX, y: origin.fromY },
          ];
          addPoint(points, origin.fromX, mergeY);
          addPoint(points, trunkX, mergeY);
          next.push(connectorFromPoints(`feed-${origin.index}`, points));
        });

        const arrowPoints: { x: number; y: number }[] = [
          { x: trunkX, y: mergeY },
        ];
        addPoint(arrowPoints, trunkX, channelY);
        addPoint(arrowPoints, landingX, channelY);
        addPoint(arrowPoints, landingX, lineEndY);
        next.push(
          connectorFromPoints(`arrow-${clusterIndex}`, arrowPoints, {
            x: landingX,
            y: tipY,
          }),
        );
      });

      setConnectors(next);
      setSize({ width: rootBox.width, height: rootBox.height });
    };

    measure();
    const observer = new ResizeObserver(() => {
      measure();
    });
    observer.observe(root);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (prefersReducedMotion()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || connectors.length === 0 || connected) return;
    if (prefersReducedMotion()) {
      return;
    }

    let cancelled = false;
    const hold = window.setTimeout(() => {
      if (!cancelled) setConnected(true);
    }, FLOW_HOLD_MS);
    return () => {
      cancelled = true;
      window.clearTimeout(hold);
    };
  }, [inView, connectors.length, connected]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="relative mt-16 w-full min-w-0 overflow-x-clip isolate md:mt-20"
    >
      <style>{`
        .why-connector,
        .why-connector-flow {
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: butt;
          stroke-linejoin: miter;
          stroke-miterlimit: 4;
        }
        .why-connector {
          stroke: var(--fg);
        }
        .why-connector-flow {
          stroke: var(--green);
          stroke-dashoffset: var(--why-len);
          transition: stroke-dashoffset ${FLOW_MS}ms var(--ease);
        }
        .why-connector-flow.is-connected {
          stroke-dashoffset: 0;
        }
        .why-arrowhead {
          fill: var(--fg);
          transition: fill 220ms var(--ease) ${FLOW_MS - 220}ms;
        }
        .why-arrowhead.is-connected {
          fill: var(--green);
        }
        @media (prefers-reduced-motion: reduce) {
          .why-connector {
            stroke: var(--green);
          }
          .why-connector-flow,
          .why-connector-flow.is-connected {
            stroke-dashoffset: 0;
            transition: none;
          }
          .why-arrowhead,
          .why-arrowhead.is-connected {
            fill: var(--green);
            transition: none;
          }
        }
      `}</style>

      {size.width > 0 && size.height > 0 ? (
        <svg
          className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${size.width} ${size.height}`}
          fill="none"
        >
          {connectors.map((line) => (
            <g key={line.id}>
              <path
                className="why-connector"
                d={line.d}
                vectorEffect="non-scaling-stroke"
              />
              <path
                className={`why-connector-flow${connected ? " is-connected" : ""}`}
                d={line.d}
                vectorEffect="non-scaling-stroke"
                strokeDasharray={line.length}
                style={{ ["--why-len" as string]: `${line.length}px` }}
              />
              {line.tipX !== undefined && line.tipY !== undefined ? (
                <polygon
                  className={`why-arrowhead${connected ? " is-connected" : ""}`}
                  points={`${line.tipX},${line.tipY} ${line.tipX - ARROW_WIDTH / 2},${line.tipY - ARROW_HEIGHT} ${line.tipX + ARROW_WIDTH / 2},${line.tipY - ARROW_HEIGHT}`}
                />
              ) : null}
            </g>
          ))}
        </svg>
      ) : null}

      <div className="relative z-[1] grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4 lg:gap-y-3">
        {SYSTEMS.map((system, index) => (
          <span
            key={system}
            ref={(node) => {
              chipRefs.current[index] = node;
            }}
            className="flex min-h-[44px] min-w-0 items-center justify-center border border-line-strong bg-bg px-2 py-2.5 text-center text-[12px] font-medium leading-tight text-fg sm:px-3 sm:text-[13px] lg:px-3 lg:text-[14px] lg:whitespace-nowrap"
          >
            {system}
          </span>
        ))}
      </div>

      <div className="relative z-[1] mt-16 flex justify-center md:mt-24">
        <PecuniaCloud markRef={pecuniaRef} />
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section id="why" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker" aria-hidden="true">
            {WHY_PECUNIA.heading}
          </p>
          <h2 className="display max-w-[16ch] text-[clamp(34px,5vw,58px)]">
            {WHY_PECUNIA.heading}
          </h2>
          <p className="mt-6 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] text-green md:text-[26px]">
            {WHY_PECUNIA.copy[0]}
          </p>
          <p className="support">{WHY_PECUNIA.copy[1]}</p>
          <p className="support">{INTRO_ABOVE_DIAGRAM}</p>
        </Reveal>

        <ConvergenceDiagram />

        <div className="mt-12">
          <p className="m-0 text-[17px] font-bold tracking-[-0.02em] text-fg">
            {RESULT_LABEL}
          </p>
          <div className="mt-4">
            {EMPHASIS_LINES.map((line) => (
              <p
                key={line}
                className="display m-0 text-[clamp(24px,3.4vw,40px)] text-green md:whitespace-nowrap"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="mt-8 m-0 max-w-[640px] text-[20px] font-bold tracking-[-0.02em] text-fg">
            {WHY_PECUNIA.then}
          </p>
          <p className="mt-6 m-0 text-[20px] font-bold tracking-[-0.02em] text-green">
            {WHY_PECUNIA.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
