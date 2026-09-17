import { WHY_PECUNIA } from "@/data/homepage-copy";
import { Reveal } from "./Reveal";

const CHIPS = [
  "Website",
  "Ads",
  "Social",
  "CRM",
  "Data",
  "Automation",
  "Marketplace",
] as const;

const CLUSTER_SLOTS = [
  { left: "30%", top: "28%" },
  { left: "70%", top: "28%" },
  { left: "22%", top: "50%" },
  { left: "78%", top: "50%" },
  { left: "32%", top: "72%" },
  { left: "68%", top: "72%" },
  { left: "50%", top: "20%" },
] as const;

function PecuniaMark() {
  return (
    <span className="relative z-10 border border-green bg-green-soft px-6 py-3 text-[18px] font-bold tracking-[0.08em] text-green">
      PECUNIA
    </span>
  );
}

export function Problem() {
  return (
    <section id="why" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[clamp(34px,5vw,58px)]">
            {WHY_PECUNIA.heading}
          </h2>
          <p className="mt-6 m-0 max-w-[36ch] text-[22px] font-bold tracking-[-0.02em] text-green md:text-[26px]">
            {WHY_PECUNIA.copy[0]}
          </p>
          <p className="support">{WHY_PECUNIA.copy[1]}</p>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:hidden">
          {CHIPS.slice(0, 3).map((chip) => (
            <span
              key={chip}
              aria-hidden="true"
              className="whitespace-nowrap border border-green px-3 py-2 text-[13px] font-medium text-fg"
            >
              {chip}
            </span>
          ))}
          <PecuniaMark />
          {CHIPS.slice(3).map((chip) => (
            <span
              key={chip}
              aria-hidden="true"
              className="whitespace-nowrap border border-green px-3 py-2 text-[13px] font-medium text-fg"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="relative mt-16 hidden min-h-[240px] items-center justify-center px-2 sm:flex">
          {CHIPS.map((chip, index) => {
            const cluster = CLUSTER_SLOTS[index];
            return (
              <span
                key={chip}
                aria-hidden="true"
                className="pointer-events-none absolute whitespace-nowrap border border-green px-4 py-2 text-[14px] font-medium text-fg"
                style={{
                  left: cluster.left,
                  top: cluster.top,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {chip}
              </span>
            );
          })}
          <PecuniaMark />
        </div>

        <div className="mt-12 max-w-[640px]">
          <p className="m-0 text-[17px] leading-relaxed text-content-text">
            {WHY_PECUNIA.copy[2]}
          </p>
          <p className="display mt-6 max-w-[18ch] text-[clamp(24px,3.4vw,40px)] text-green">
            {WHY_PECUNIA.emphasis}
          </p>
          <p className="mt-6 m-0 text-[17px] leading-relaxed text-content-text">
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
