const FOOTER_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-8 py-12 md:grid-cols-[1fr_auto_auto] md:items-end md:gap-12 md:py-14">
        <p className="font-display m-0 text-[clamp(1.25rem,2.4vw,1.75rem)] font-normal italic leading-snug text-paper [font-synthesis:none]">
          &quot;Balance carried forward: your growth.&quot;
        </p>

        <nav aria-label="Footer">
          <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[12px] tracking-[0.12em] text-stone no-underline transition-colors hover:text-brass"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="m-0 font-mono text-[12px] tracking-[0.08em] text-stone">
          © 2026 PecuniaStudios.
        </p>
      </div>
    </footer>
  );
}
