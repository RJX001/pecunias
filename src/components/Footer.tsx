import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { FOOTER, NAV_CTA, NAV_LINKS } from "@/data/homepage-copy";
import { servicePath, type GrowthSystemSlug } from "@/data/growth-stack";

const SERVICE_SLUGS = {
  Websites: "digital-ecommerce",
  "E-commerce": "digital-ecommerce",
  "Paid Media": "paid-growth",
  SEO: "search-visibility",
  Automation: "ai-automation-crm",
  CRM: "ai-automation-crm",
  AI: "ai-automation-crm",
  Creative: "organic-growth-content",
  "Growth Strategy": null,
} as const satisfies Record<string, GrowthSystemSlug | null>;

type ServiceLabel = keyof typeof SERVICE_SLUGS;

const SERVICE_ITEMS = (FOOTER.servicesLine.split(" | ") as ServiceLabel[]).map(
  (label) => {
    const slug = SERVICE_SLUGS[label];
    return { label, href: slug ? servicePath(slug) : "/services" };
  },
);

const LINK = "no-underline underline-offset-4 hover:underline";

export function Footer() {
  return (
    <footer className="border-t border-line px-[6%] py-10 text-[12px] leading-[1.75] text-fg">
      <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[1fr_1.4fr_1fr] md:gap-12">
        <div>
          <p className="m-0 text-[22px] leading-[1.2] font-extrabold">
            <Link href="/" aria-label="Pecunia Studios" className="no-underline">
              <BrandMark />
            </Link>
          </p>
          <p className="mt-5 mb-0 max-w-[32ch]">{FOOTER.descriptor}</p>
        </div>

        <nav aria-label="Footer services">
          <p className="m-0 font-semibold">Services</p>
          <p className="mt-3 mb-0 max-w-[46ch]">
            {SERVICE_ITEMS.map((item, index) => (
              <span key={item.label}>
                {index > 0 ? " | " : null}
                <Link href={item.href} className={LINK}>
                  {item.label}
                </Link>
              </span>
            ))}
          </p>
        </nav>

        <nav aria-label="Company">
          <p className="m-0 font-semibold">Company</p>
          <a href={NAV_CTA.href} className="ps-button mt-3">
            {NAV_CTA.label}
          </a>
          <ul className="mt-3 mb-0 flex list-none flex-wrap gap-x-5 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${LINK} inline-flex min-h-8 items-center`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="mx-auto mt-10 mb-0 max-w-[1280px]">
        {FOOTER.copyright}
      </p>
    </footer>
  );
}
