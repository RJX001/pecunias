import { ResultsCarousel } from "./ResultsCarousel";

export function Hero() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="grid grid-cols-1 items-center gap-12 min-[900px]:grid-cols-2 min-[900px]:gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid justify-items-start gap-6">
            <p className="eyebrow">Digital Studio · Est. Quote-on-Request</p>

            <h1 className="font-display text-balance text-[clamp(2.35rem,5.2vw,4.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-paper">
              Turn attention into{" "}
              <em className="font-display font-normal italic text-ledger [font-synthesis:none]">
                revenue.
              </em>
            </h1>

            {/* Subhead has "creative that make" (mockup grammar); do not "fix" it. */}
            <p className="max-w-[34rem] font-sans text-[1.05rem] leading-[1.7] text-stone">
              PecuniaStudios builds the websites, runs the ads, manages the
              marketplaces, and produces the creative that make growth actually
              happen — under one roof, with one team who knows your business.
            </p>

            <div className="mt-1 grid grid-cols-[auto_auto] justify-start gap-3">
              <a href="#contact" className="btn btn-solid">
                Request a Quote
              </a>
              <a href="#services" className="btn btn-outline">
                View Services
              </a>
            </div>
          </div>

          <ResultsCarousel />
        </div>
      </div>
    </section>
  );
}
