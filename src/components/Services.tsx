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
    <section className="section-pad pt-32">
      <div className="mx-auto max-w-[var(--maxw)]">
        <p className="kicker">Growth stack</p>
        <h2 className="display mt-2 text-[clamp(34px,5vw,58px)]">
          Five lines. One system.
        </h2>
        <p className="support">
          Each engagement is scoped and quoted individually. Select a category
          to see what&apos;s included.
        </p>

        <div className="mt-14 border-y border-line">
          <div
            className={`${COLS} border-b border-line py-3 text-[12px] font-medium text-fg-faint`}
          >
            <span>Code</span>
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

        <div className="mt-12">
          <a href="/#contact" className="btn btn-solid">
            Start a project
          </a>
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
        className={`${COLS} cursor-pointer py-5 text-left transition-colors hover:bg-bg-raised focus-visible:bg-bg-raised focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="text-[13px] font-semibold text-green">
          {category.code}
        </span>
        <span className="text-[0.95rem] font-medium text-fg">
          {category.name}
        </span>
        <span className="text-sm leading-relaxed text-fg-dim">
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
        className="overflow-hidden transition-[max-height] duration-500"
        style={{
          maxHeight: open ? `${category.items.length * 9}rem` : "0px",
        }}
      >
        {category.items.map((item) => (
          <div key={item.code} className={`${COLS} border-t border-line py-4`}>
            <span className="text-[12px] text-green">{item.code}</span>
            <span className="text-sm font-medium text-fg">{item.name}</span>
            <span className="text-sm leading-relaxed text-fg-dim">
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
      className={`text-green transition-transform duration-500 ${
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
