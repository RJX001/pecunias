"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Monitor,
  Smartphone,
} from "lucide-react";
import type { CaseStudy } from "@/data/work";

type WorkCarouselProps = {
  studies: readonly CaseStudy[];
};

const DECOR = [
  { Primary: Monitor, Secondary: Globe, Tertiary: Smartphone },
  { Primary: Globe, Secondary: Monitor, Tertiary: Smartphone },
  { Primary: Smartphone, Secondary: Monitor, Tertiary: Globe },
  { Primary: Globe, Secondary: Smartphone, Tertiary: Monitor },
  { Primary: Monitor, Secondary: Smartphone, Tertiary: Globe },
] as const;

function statCaption(description: string): string {
  const afterSplit = description.split(/\s+(?:following|after)\s+/i);
  if (afterSplit.length > 1) return afterSplit[0];
  const dashSplit = description.split(/\s+[—–]\s+/);
  if (dashSplit.length > 1 && dashSplit[0].length < 48) return dashSplit[0];
  return description;
}

export function WorkCarousel({ studies }: WorkCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = studies.length;
  const study = studies[index];
  const caption = statCaption(study.description);
  const showCaption =
    study.stat !== "TBC" && caption !== study.description;
  const Decor = DECOR[index % DECOR.length];

  function go(direction: -1 | 1) {
    setIndex((current) => (current + direction + total) % total);
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected case studies"
      className="grid overflow-hidden border border-line bg-ink-2"
    >
      <div
        key={study.name}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${total}: ${study.name}`}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        <div
          aria-hidden="true"
          className="relative grid min-h-[220px] place-items-center overflow-hidden border-b border-line bg-ledger/20 lg:min-h-[380px] lg:border-b-0 lg:border-r"
        >
          <div className="relative size-[168px] lg:size-[200px]">
            <Decor.Primary
              className="absolute inset-0 size-full text-ledger-light/55"
              strokeWidth={1}
            />
            <Decor.Secondary
              className="absolute left-1/2 top-[42%] size-16 -translate-x-1/2 -translate-y-1/2 text-ledger/45 lg:size-20"
              strokeWidth={1}
            />
            <Decor.Tertiary
              className="absolute bottom-3 right-1 size-11 text-ledger-light/35 lg:size-12"
              strokeWidth={1}
            />
          </div>
        </div>

        <div className="grid content-start gap-5 p-7 lg:gap-6 lg:p-10">
          <span className="inline-grid w-fit place-items-center rounded-[2px] border border-brass px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-brass">
            {study.tags}
          </span>

          <h3 className="font-display text-[1.65rem] font-normal tracking-tight text-paper lg:text-[2rem]">
            {study.name}
          </h3>

          <p className="font-display text-[clamp(2.75rem,6vw,4.25rem)] font-light leading-none tracking-tight text-ledger">
            {study.stat}
          </p>

          {showCaption ? (
            <p className="font-sans text-sm leading-snug text-stone">
              {caption}
            </p>
          ) : null}

          <p className="max-w-[38ch] font-sans text-[15px] leading-relaxed text-stone">
            {study.description}
          </p>

          {study.isPlaceholder ? (
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
              Illustrative figure
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] items-center gap-4 border-t border-line px-5 py-4 lg:px-8">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous case study"
            onClick={() => go(-1)}
            className="grid size-10 place-items-center rounded-full border border-line text-paper transition-colors hover:border-brass hover:text-brass"
          >
            <ChevronLeft className="size-4" strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next case study"
            onClick={() => go(1)}
            className="grid size-10 place-items-center rounded-full border border-line text-paper transition-colors hover:border-brass hover:text-brass"
          >
            <ChevronRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <div className="flex items-center justify-end gap-2" aria-label="Case study slides">
          {studies.map((item, i) => {
            const active = i === index;
            return (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active ? "true" : undefined}
                onClick={() => setIndex(i)}
                className={
                  active
                    ? "size-2 rounded-full bg-brass"
                    : "size-2 rounded-full border border-stone bg-transparent"
                }
              />
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-dotted border-line px-5 py-3 lg:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone">
          Cumulative illustrative impact viewed
        </p>
        <p
          className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone"
          aria-live="polite"
        >
          Slide {index + 1} of {total}
        </p>
      </div>
    </div>
  );
}
