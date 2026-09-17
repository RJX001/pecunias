"use client";

import { useEffect, useRef, useState } from "react";
import { COMMITMENT } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

const CLOSING_GREEN = "We find out why. Then we fix it.";

function isMobileViewport() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function isTwoColViewport() {
  return window.matchMedia("(min-width: 640px)").matches;
}

function activeZoneMargin() {
  return isMobileViewport() ? "-28% 0px -52% 0px" : "-38% 0px -42% 0px";
}

function activeZoneY() {
  return window.innerHeight * (isMobileViewport() ? 0.38 : 0.48);
}

function itemActivationY(node: HTMLElement, index: number, twoCol: boolean) {
  const rect = node.getBoundingClientRect();
  const mid = (rect.top + rect.bottom) / 2;
  if (!twoCol) return mid;
  const offset = rect.height * 0.28;
  return index % 2 === 0 ? mid - offset : mid + offset;
}

export function Why() {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeItem, setActiveItem] = useState(0);
  const closingInk = COMMITMENT.closing
    .slice(0, COMMITMENT.closing.indexOf(CLOSING_GREEN))
    .trim();

  useEffect(() => {
    const ratios = new Map<Element, number>();
    let observer: IntersectionObserver | null = null;

    const pickActive = () => {
      const zoneY = activeZoneY();
      const twoCol = isTwoColViewport();
      let bestIndex = 0;
      let bestScore = Number.NEGATIVE_INFINITY;
      itemRefs.current.forEach((node, index) => {
        if (!node) return;
        const ratio = ratios.get(node) ?? 0;
        const mid = itemActivationY(node, index, twoCol);
        const score = ratio * 10000 - Math.abs(mid - zoneY);
        if (score > bestScore) {
          bestScore = score;
          bestIndex = index;
        }
      });
      setActiveItem((current) => (current === bestIndex ? current : bestIndex));
    };

    const connect = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            ratios.set(
              entry.target,
              entry.isIntersecting ? entry.intersectionRatio : 0,
            );
          }
          pickActive();
        },
        {
          root: null,
          rootMargin: activeZoneMargin(),
          threshold: [0, 0.15, 0.35, 0.5, 0.75, 1],
        },
      );
      itemRefs.current.forEach((node) => {
        if (node) observer?.observe(node);
      });
    };

    connect();
    const mobileMq = window.matchMedia("(max-width: 767px)");
    const twoColMq = window.matchMedia("(min-width: 640px)");
    mobileMq.addEventListener("change", connect);
    twoColMq.addEventListener("change", connect);
    return () => {
      mobileMq.removeEventListener("change", connect);
      twoColMq.removeEventListener("change", connect);
      observer?.disconnect();
    };
  }, []);

  return (
    <section id="commitment" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <h2 className="display max-w-[14ch] text-[clamp(34px,5vw,58px)]">
            {COMMITMENT.heading}
          </h2>
          <p className="mt-6 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] text-green md:text-[26px]">
            {COMMITMENT.statement}
          </p>
          <p className="support">{COMMITMENT.support}</p>
        </Reveal>

        <Reveal>
          <ol className="mt-14 m-0 grid list-none gap-0 border-t border-line p-0 sm:grid-cols-2">
            {COMMITMENT.items.map((item, index) => {
              const isActive = index === activeItem;
              return (
                <li
                  key={item}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-4 border-b border-line px-0 py-5 sm:px-6 sm:odd:border-r"
                >
                  <span
                    className={`text-[13px] font-semibold transition-[color] duration-300 ease-[var(--ease)] motion-reduce:duration-0 ${
                      isActive ? "text-green" : "text-fg-faint"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[16px] font-semibold tracking-[-0.01em] transition-[color] duration-300 ease-[var(--ease)] motion-reduce:duration-0 ${
                      isActive ? "text-green" : "text-fg"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ol>

          <p className="support mt-10 max-w-[48ch]">{closingInk}</p>
          <p className="mt-4 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] text-green md:text-[26px]">
            {CLOSING_GREEN}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
