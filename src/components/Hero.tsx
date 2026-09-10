"use client";

import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";

const NODES = [
  "Strategy",
  "Build",
  "Acquire",
  "Convert",
  "Automate",
  "Scale",
] as const;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(NODES.length - 1);
      return;
    }
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % NODES.length);
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-svh items-end overflow-hidden pb-[min(10vw,110px)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #242629 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 70% 40%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 70% 40%, black 10%, transparent 70%)",
        }}
      />

      <div className="wrap relative grid w-full gap-12 pt-32">
        <div>
          <h1 className="display text-[clamp(38px,6.6vw,92px)] text-fg">
            Growth is a system,
            <br />
            not a stack of vendors.
          </h1>
          <p className="support">
            Pecunia builds the connected growth system — Digital, Acquisition,
            Automation, Commerce, Creative — under one team that already knows
            the business.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <a href="#contact" className="btn btn-solid">
                Start a project
              </a>
            </Magnetic>
            <a href="#system" className="btn btn-ghost">
              See the system
            </a>
          </div>
        </div>

        <ol className="m-0 grid list-none grid-cols-2 gap-0 border-t border-line p-0 sm:grid-cols-3 lg:grid-cols-6">
          {NODES.map((node, index) => {
            const done = index < active;
            const current = index === active;
            return (
              <li
                key={node}
                className="relative border-r border-b border-line px-3 py-4 last:border-r-0 sm:[&:nth-child(3n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(3n)]:border-r lg:last:border-r-0"
              >
                <span
                  className="absolute top-0 left-0 h-px origin-left bg-green transition-transform duration-500"
                  style={{
                    transform: done || current ? "scaleX(1)" : "scaleX(0)",
                    width: "100%",
                  }}
                />
                <p
                  className={`m-0 text-[13px] font-semibold ${
                    current
                      ? "text-green"
                      : done
                        ? "text-fg"
                        : "text-fg-faint"
                  }`}
                >
                  {node}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
