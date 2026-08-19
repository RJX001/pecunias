"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="ps-header sticky top-0 z-50 border-b border-line bg-ink/95 text-paper backdrop-blur-md">
      <div className="wrap ps-header-bar">
        <Link
          href="/"
          className="ps-header-logo font-display text-[13px] font-medium tracking-[0.22em] text-paper uppercase no-underline"
          onClick={closeMenu}
        >
          PECUNIA
          <span className="mx-[0.55em] text-brass" aria-hidden="true">
            ·
          </span>
          STUDIOS
        </Link>

        <nav className="ps-header-desktop" aria-label="Primary">
          <ul className="ps-header-links m-0 grid list-none p-0 font-sans">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-grid h-full place-items-center px-5 text-[12px] tracking-[0.12em] text-stone no-underline transition-colors hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn-solid inline-grid place-items-center rounded-[2px] bg-brass px-4 py-[0.55rem] font-sans text-[12px] font-medium tracking-[0.08em] text-ink no-underline transition-colors hover:bg-brass-dim"
          >
            Request a Quote
          </a>
        </nav>

        <button
          type="button"
          className="ps-header-toggle grid place-items-center border border-line bg-transparent text-paper"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`ps-header-burger${open ? " is-open" : ""}`}
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <button
        type="button"
        className={`ps-header-overlay${open ? " is-open" : ""}`}
        tabIndex={open ? 0 : -1}
        aria-hidden={!open}
        aria-label="Close menu"
        onClick={closeMenu}
      />

      <nav
        id={menuId}
        className={`ps-header-panel bg-ink-2${open ? " is-open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="wrap">
          <ul className="m-0 grid list-none p-0">
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className="border-b border-line"
              >
                <a
                  href={link.href}
                  className="grid py-4 font-sans text-[14px] tracking-[0.14em] text-paper no-underline"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn-solid mt-5 mb-6 inline-grid place-items-center rounded-[2px] bg-brass px-4 py-3 font-sans text-[12px] font-medium tracking-[0.08em] text-ink no-underline hover:bg-brass-dim"
            onClick={closeMenu}
          >
            Request a Quote
          </a>
        </div>
      </nav>
    </header>
  );
}
