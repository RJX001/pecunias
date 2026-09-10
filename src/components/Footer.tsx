import Link from "next/link";
import { Magnetic } from "./Magnetic";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[var(--maxw)] gap-12 px-[var(--pad)] py-16 md:grid-cols-3">
        <div>
          <p className="m-0 text-[13px] font-semibold tracking-[0.14em]">
            PECUNIA
            <span aria-hidden="true">·</span>
            STUDIOS
          </p>
          <p className="mt-4 m-0 max-w-[28ch] text-[14px] text-fg-dim">
            A growth systems company. One connected system for commercial
            growth.
          </p>
        </div>

        <div>
          <p className="m-0 text-[13px] text-fg-faint">Services</p>
          <ul className="mt-4 m-0 grid list-none gap-2 p-0 text-[14px] text-fg-dim">
            <li>Digital</li>
            <li>Acquisition</li>
            <li>Automation</li>
            <li>Commerce</li>
            <li>Creative</li>
          </ul>
        </div>

        <div>
          <p className="m-0 text-[13px] text-fg-faint">Company</p>
          <ul className="mt-4 m-0 grid list-none gap-2 p-0 text-[14px]">
            <li>
              <Link href="/#system" className="text-fg-dim no-underline hover:text-fg">
                System
              </Link>
            </li>
            <li>
              <Link href="/#work" className="text-fg-dim no-underline hover:text-fg">
                Work
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-fg-dim no-underline hover:text-fg">
                Stack
              </Link>
            </li>
          </ul>
          <div className="mt-6">
            <Magnetic>
              <a href="/#contact" className="btn btn-solid">
                Start a project
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[var(--maxw)] flex-wrap items-center justify-between gap-3 px-[var(--pad)] py-5 text-[13px] text-fg-faint">
          <p className="m-0">© 2026 Pecunia Studios.</p>
          <p className="m-0">One growth system.</p>
        </div>
      </div>
    </footer>
  );
}
