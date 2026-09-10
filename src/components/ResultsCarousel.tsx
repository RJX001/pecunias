"use client";

import { useEffect, useState } from "react";
import { caseStudies, type CaseStudy } from "@/data/work";

const AUTOPLAY_MS = 4500;

function featuredSlides(studies: CaseStudy[]): CaseStudy[] {
  const featured = studies.filter((s) => s.featured);
  return featured.length > 0 ? featured : studies;
}

function firstTag(tags: string): string {
  return tags.split("·")[0]?.trim() ?? tags;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function primaryCaption(study: CaseStudy): string {
  // Mockup frame 3 of 4 uses this exact Nightjar caption.
  if (study.name === "Nightjar App") {
    return "App installs, first quarter";
  }
  const clause =
    study.description.split(/\s+(?:following|after)\s+/i)[0] ??
    study.description;
  return clause.replace(/[.,;]+$/, "").trim();
}

function secondaryCaption(study: CaseStudy): string {
  return study.isPlaceholder ? `${study.name} — illustrative` : study.name;
}

export function ResultsCarousel() {
  const slides = featuredSlides(caseStudies);
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const paused = hovered || focused;

  const current = slides[index] ?? slides[0];

  useEffect(() => {
    if (paused || total < 2) return undefined;
    const id = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % total);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, total]);

  if (!current) return null;

  const counter = `${pad(index + 1)} / ${pad(total)}`;

  return (
    <aside
      aria-label="Results"
      aria-roledescription="carousel"
      className="ledger-card grid grid-rows-[auto_1fr_auto] gap-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Node && event.currentTarget.contains(next)) return;
        setFocused(false);
      }}
    >
      <header className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-dashed border-line pb-4">
        <p className="m-0 font-mono text-[11px] font-medium tracking-[0.18em] text-brass uppercase">
          PS · Results
        </p>
        <span className="font-mono text-[11px] tracking-[0.12em] text-stone tabular-nums">
          {counter}
        </span>
      </header>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="grid content-start gap-5"
      >
        <span className="inline-grid w-fit place-items-center rounded-[2px] border border-brass px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-brass">
          {firstTag(current.tags)}
        </span>
        <p className="m-0 font-display text-[clamp(2.75rem,5vw,3.75rem)] font-light leading-none tracking-tight text-ledger">
          {current.stat}
        </p>
        <div className="grid gap-1">
          <p className="m-0 font-sans text-[0.95rem] leading-snug text-stone">
            {primaryCaption(current)}
          </p>
          <p className="m-0 font-sans text-[0.95rem] leading-snug text-stone">
            {secondaryCaption(current)}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2" aria-label="Result slides">
        {slides.map((slide, slideIndex) => {
          const active = slideIndex === index;
          return (
            <button
              key={`${slide.name}-${slideIndex}`}
              type="button"
              aria-current={active ? "true" : undefined}
              aria-label={`Show result ${pad(slideIndex + 1)} of ${pad(total)}: ${slide.name}`}
              className={`size-2 rounded-full transition-colors ${
                active
                  ? "bg-brass"
                  : "border border-stone bg-transparent hover:border-brass"
              }`}
              onClick={() => setIndex(slideIndex)}
            />
          );
        })}
      </div>
    </aside>
  );
}
