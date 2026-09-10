"use client";

import { useState } from "react";
import { services, type ServiceCategory } from "@/data/services";

const COLS =
  "grid w-full grid-cols-[56px_minmax(0,1fr)_minmax(0,1.5fr)_32px] items-start gap-x-3 sm:grid-cols-[80px_1fr_2fr_40px] sm:gap-x-4";

export function Services() {
  const [openCodes, setOpenCodes] = useState<ReadonlySet<string>>(
    () => new Set(),
  );

  function toggle(code: string) {
    setOpenCodes((prev) => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  }

  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brass">
          Statement of Services
        </p>
        <h2 className="font-display mt-4 text-[2rem] font-light leading-[1.15] tracking-tight text-paper md:text-[2.75rem]">
          Every line item, accounted for.
        </h2>
        <p className="mt-4 max-w-[42rem] font-sans text-[0.95rem] leading-relaxed text-stone md:text-base">
          Each engagement is scoped and quoted individually — no line item
          priced the same twice, because no two businesses are. Select a
          category to see what&apos;s included.
        </p>

        <div className="mt-12 border-y border-line">
          <div
            className={`${COLS} border-b border-line py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-stone`}
          >
            <span className="font-mono">Code</span>
            <span>Category</span>
            <span>Description</span>
            <span className="sr-only">Expand</span>
          </div>

          {services.map((category) => (
            <ServiceRow
              key={category.code}
              category={category}
              open={openCodes.has(category.code)}
              onToggle={() => toggle(category.code)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  category,
  open,
  onToggle,
}: {
  category: ServiceCategory;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `service-panel-${category.code}`;
  const headerId = `service-header-${category.code}`;

  return (
    <div className="border-b border-line last:border-b-0">
      <button
        type="button"
        id={headerId}
        className={`${COLS} cursor-pointer py-5 text-left transition-colors hover:bg-ink-2 focus-visible:bg-ink-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="font-mono text-[13px] font-medium tracking-wide text-brass">
          {category.code}
        </span>
        <span className="font-sans text-[0.95rem] font-medium text-paper">
          {category.name}
        </span>
        <span className="font-sans text-sm leading-relaxed text-stone">
          {category.description}
        </span>
        <span className="flex justify-end pt-0.5">
          <Chevron open={open} />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        aria-hidden={!open}
        className="overflow-hidden transition-[max-height] duration-[400ms] ease-in-out"
        style={{
          maxHeight: open ? `${category.items.length * 9}rem` : "0px",
        }}
      >
        {category.items.map((item) => (
          <div key={item.code} className={`${COLS} border-t border-line py-4`}>
            <span className="font-mono text-[12px] tracking-wide text-brass">
              {item.code}
            </span>
            <span className="font-sans text-sm font-medium text-paper">
              {item.name}
            </span>
            <span className="font-sans text-sm leading-relaxed text-stone">
              {item.description}
            </span>
            <span aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      className={`text-brass transition-transform duration-[400ms] ease-in-out ${
        open ? "rotate-90" : "rotate-0"
      }`}
      aria-hidden="true"
    >
      <path
        d="M6 3.5 11 8 6 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}
