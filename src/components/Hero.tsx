const SERVICE_CODES = ["WD", "DM", "PA", "MS", "CS", "AD"] as const;

export function Hero() {
  return (
    <section className="section bg-ink bg-[#12181A] py-[100px] max-[900px]:py-16">
      <div className="wrap mx-auto max-w-[1180px] px-8">
        <div className="grid grid-cols-1 items-center gap-12 min-[900px]:grid-cols-2 min-[900px]:gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid justify-items-start gap-6">
            <p className="eyebrow font-mono text-[11px] font-medium tracking-[0.18em] text-brass text-[#A9812E]">
              Digital Studio · Est. Quote-on-Request
            </p>

            <h1 className="font-display text-balance text-[clamp(2.35rem,5.2vw,4.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-paper text-[#F6F0E4]">
              Digital revenue,{" "}
              <em className="font-display font-normal italic text-brass text-[#A9812E] [font-synthesis:none]">
                engineered
              </em>{" "}
              and itemized.
            </h1>

            <p className="max-w-[34rem] font-sans text-[1.05rem] leading-[1.7] text-stone text-[#9A9184]">
              PecuniaStudios builds, markets, and manages the systems that turn
              attention into revenue — websites, ads, marketplaces, and the
              creative that fuels them. One studio, every line item accounted
              for.
            </p>

            <div className="mt-1 grid grid-cols-[auto_auto] justify-start gap-3">
              <a
                href="#contact"
                className="btn btn-solid inline-grid place-items-center rounded-[2px] bg-brass bg-[#A9812E] px-5 py-[0.85rem] font-sans text-sm font-medium text-ink text-[#12181A] no-underline transition-colors hover:bg-brass-dim hover:bg-[#7d611f]"
              >
                Request a Quote
              </a>
              <a
                href="#services"
                className="btn btn-outline inline-grid place-items-center rounded-[2px] border border-line border-[rgba(246,240,228,0.28)] bg-transparent px-5 py-[0.85rem] font-sans text-sm font-medium text-paper text-[#F6F0E4] no-underline transition-colors hover:border-brass hover:border-[#A9812E]"
              >
                View Services
              </a>
            </div>
          </div>

          <aside
            aria-label="Statement Preview"
            className="ledger-card grid overflow-hidden rounded-[2px] border border-line border-[rgba(246,240,228,0.14)] bg-ink-2 bg-[#181f22]"
          >
            <div
              aria-hidden="true"
              className="h-0.5 bg-brass bg-[#A9812E]"
            />
            <header className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line border-b-[rgba(246,240,228,0.14)] px-6 py-4">
              <p className="m-0 font-mono text-[11px] font-medium tracking-[0.18em] text-brass text-[#A9812E] uppercase">
                Statement Preview
              </p>
              <span className="font-mono text-[11px] tracking-[0.12em] text-stone text-[#9A9184]">
                PS · STMT
              </span>
            </header>

            <div className="grid">
              <div className="grid grid-cols-[3.5rem_1fr] gap-x-2 border-b border-line border-b-[rgba(246,240,228,0.14)] px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-stone text-[#9A9184]">
                <span>Ln</span>
                <span>Item</span>
              </div>
              <div className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-2 border-b border-line border-b-[rgba(246,240,228,0.14)] px-6 py-4">
                <span className="font-mono text-sm text-brass text-[#A9812E]">
                  01
                </span>
                <p className="m-0 font-sans text-[0.95rem] text-paper text-[#F6F0E4]">
                  6 service lines
                </p>
              </div>
              <div className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-2 border-b border-line border-b-[rgba(246,240,228,0.14)] px-6 py-4">
                <span className="font-mono text-sm text-brass text-[#A9812E]">
                  02
                </span>
                <p className="m-0 font-sans text-[0.95rem] text-paper text-[#F6F0E4]">
                  18 capabilities
                </p>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-2 px-6 py-5">
              {SERVICE_CODES.map((code) => (
                <span
                  key={code}
                  className="inline-grid place-items-center rounded-[2px] border border-line border-[rgba(246,240,228,0.14)] py-2 font-mono text-[11px] tracking-[0.08em] text-paper text-[#F6F0E4]"
                >
                  {code}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
