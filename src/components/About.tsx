const stats = [
  { label: "Service lines", value: "6" },
  { label: "Capabilities", value: "18" },
  { label: "Based in", value: "United Kingdom" },
] as const;

export function About() {
  return (
    <section id="about" className="section border-t border-line py-[64px] lg:py-[100px]">
      <div className="wrap mx-auto max-w-[1180px] px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start">
          <div className="lg:border-r lg:border-line lg:pr-16">
            <p className="eyebrow mb-4">About</p>
            <h2 className="font-display mb-8 max-w-[14ch] text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.15] tracking-tight text-paper">
              A studio, not a vendor.
            </h2>
            <div className="grid max-w-[54ch] gap-5 font-sans text-[17px] leading-[1.7] text-stone">
              {/* Opening clause "PecuniaStudios was built on a simple idea:" dropped per redesign v2 mockup. */}
              <p>
                Most businesses don&apos;t need more marketing noise — they
                need a system that works. A website that converts. A
                marketplace presence that&apos;s actually managed, not just
                set up and forgotten. Creative that gets made and maintained.
              </p>
              <p>
                We work as an extension of your team, across the full stack of
                what makes a digital business run — not as a vendor you have to
                chase for updates.
              </p>
            </div>
          </div>

          <dl className="mt-12 border-t border-line lg:mt-0 lg:border-t-0 lg:pl-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-line py-5 font-mono"
              >
                <dt className="text-[12px] uppercase tracking-[0.16em] text-stone">
                  {stat.label}
                </dt>
                <dd className="text-[15px] tracking-wide text-paper">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
