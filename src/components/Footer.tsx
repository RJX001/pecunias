import Link from "next/link";
import { FOOTER, NAV_CTA, NAV_LINKS } from "@/data/homepage-copy";
import { Magnetic } from "./Magnetic";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[var(--maxw)] gap-12 px-[var(--pad)] py-16 md:grid-cols-3">
        <div>
          <p className="m-0 text-[13px] font-semibold tracking-[0.14em]">
            {FOOTER.brand}
          </p>
          <p className="mt-4 m-0 max-w-[28ch] text-[14px] text-fg-dim">
            {FOOTER.descriptor}
          </p>
        </div>

        <div>
          <p className="m-0 text-[13px] text-fg-faint">Services</p>
          <p className="mt-4 m-0 max-w-[36ch] text-[14px] leading-relaxed text-fg-dim">
            {FOOTER.servicesLine}
          </p>
        </div>

        <div>
          <p className="m-0 text-[13px] text-fg-faint">Company</p>
          <ul className="mt-4 m-0 grid list-none gap-2 p-0 text-[14px]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-fg-dim no-underline hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Magnetic>
              <a href={NAV_CTA.href} className="btn btn-solid">
                {NAV_CTA.label}
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[var(--maxw)] flex-wrap items-center justify-between gap-3 px-[var(--pad)] py-5 text-[13px] text-fg-faint">
          <p className="m-0">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
