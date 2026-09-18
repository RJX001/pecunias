import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { FOOTER, NAV_CTA, NAV_LINKS } from "@/data/homepage-copy";
import { Magnetic } from "./Magnetic";

const SERVICE_HREFS = {
  Websites: "/services/digital-ecommerce",
  "E-commerce": "/services/digital-ecommerce",
  "Paid Media": "/services/paid-growth",
  SEO: "/services/organic-growth-content",
  Automation: "/services/ai-automation-crm",
  CRM: "/services/ai-automation-crm",
  AI: "/services/ai-automation-crm",
  Creative: "/services/organic-growth-content",
  "Growth Strategy": "/services",
} as const;

type ServiceLabel = keyof typeof SERVICE_HREFS;

const SERVICE_ITEMS = FOOTER.servicesLine.split(" | ") as ServiceLabel[];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[var(--maxw)] gap-12 px-[var(--pad)] py-16 md:grid-cols-3">
        <div>
          <p className="m-0 text-[13px] font-semibold tracking-[0.14em]">
            <Link
              href="/"
              aria-label="Pecunia Studios"
              className="text-fg no-underline"
            >
              <BrandMark />
            </Link>
          </p>
          <p className="mt-4 m-0 max-w-[28ch] text-[14px] text-content-text">
            {FOOTER.descriptor}
          </p>
        </div>

        <div>
          <p className="m-0 text-[13px] text-fg-faint">Services</p>
          <p className="mt-4 m-0 max-w-[36ch] text-[14px] leading-relaxed text-content-text">
            {SERVICE_ITEMS.map((label, index) => (
              <span key={label}>
                {index > 0 ? " | " : null}
                <Link
                  href={SERVICE_HREFS[label]}
                  className="text-content-text no-underline hover:text-fg"
                >
                  {label}
                </Link>
              </span>
            ))}
          </p>
        </div>

        <div>
          <p className="m-0 text-[13px] text-fg-faint">Company</p>
          <div className="mt-4">
            <Magnetic>
              <a href={NAV_CTA.href} className="btn btn-green btn-compact">
                {NAV_CTA.label}
              </a>
            </Magnetic>
          </div>
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
