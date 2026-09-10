"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const STAGES = [
  {
    name: "Strategy",
    copy: "Diagnose the commercial bottleneck before anything is built.",
  },
  {
    name: "Build",
    copy: "Stand up the site, store, tracking and creative system as one piece.",
  },
  {
    name: "Acquire",
    copy: "Turn demand on — paid, organic, marketplace — against a real offer.",
  },
  {
    name: "Convert",
    copy: "Fix the path from attention to revenue. Pages, offers, checkout.",
  },
  {
    name: "Automate",
    copy: "Connect CRM, data and ops so the system keeps running without chase.",
  },
  {
    name: "Scale",
    copy: "Increase spend, output and coverage only once the loop is closed.",
  },
] as const;

export function System() {
  const [active, setActive] = useState(0);

  return (
    <section id="system" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">One team, one system</p>
          <h2 className="display max-w-[14ch] text-[clamp(34px,5vw,58px)]">
            Every lever, run as one account.
          </h2>
          <p className="support">
            Not a roster of specialists you have to coordinate. One operating
            system for how the business grows.
          </p>
        </Reveal>

        <div className="mt-14 grid border-t border-line lg:grid-cols-6">
          {STAGES.map((stage, index) => {
            const isActive = index === active;
            return (
              <button
                key={stage.name}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`grid gap-3 border-b border-line px-4 py-5 text-left transition-colors lg:border-r lg:border-b-0 lg:last:border-r-0 ${
                  isActive ? "bg-bg-raised" : "bg-transparent"
                }`}
              >
                <span
                  className={`text-[13px] font-semibold ${isActive ? "text-green" : "text-fg-faint"}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] font-semibold text-fg">
                  {stage.name}
                </span>
                <span
                  className={`overflow-hidden text-[14px] leading-relaxed text-fg-dim transition-[max-height,opacity] duration-500 ${
                    isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0 lg:max-h-40 lg:opacity-100"
                  }`}
                >
                  {stage.copy}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
