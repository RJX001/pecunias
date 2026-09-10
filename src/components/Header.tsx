"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Magnetic } from "./Magnetic";

const NAV_LINKS = [
  { href: "/#system", label: "System" },
  { href: "/#stack", label: "Stack" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-[background-color,backdrop-filter,padding] duration-300 ${
        scrolled || open
          ? "bg-bg/92 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="wrap grid grid-cols-[1fr_auto] items-center gap-6 min-[960px]:grid-cols-[auto_1fr_auto]">
        <Link
          href="/"
          className="text-[13px] font-semibold tracking-[0.14em] text-fg no-underline"
          onClick={closeMenu}
        >
          PECUNIA
          <span aria-hidden="true">·</span>
          STUDIOS
        </Link>

        <nav
          className="hidden justify-self-end min-[960px]:block"
          aria-label="Primary"
        >
          <ul className="m-0 flex list-none items-center gap-8 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[14px] font-medium text-fg-dim no-underline transition-colors hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden min-[960px]:block">
          <Magnetic>
            <a href="/#contact" className="btn btn-solid">
              Start a project
            </a>
          </Magnetic>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center border border-line bg-transparent text-fg min-[960px]:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`block h-px bg-fg transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px bg-fg transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <nav
        id={menuId}
        className={`overflow-hidden bg-bg min-[960px]:hidden ${open ? "max-h-screen" : "max-h-0"}`}
        aria-label="Mobile"
        hidden={!open}
      >
        <ul className="m-0 grid list-none gap-1 px-[var(--pad)] pt-8 pb-10">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.href}
              style={{
                transitionDelay: open ? `${80 + index * 50}ms` : "0ms",
              }}
            >
              <Link
                href={link.href}
                className="block py-3 text-[28px] font-bold tracking-[-0.02em] text-fg no-underline"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-[var(--pad)] pb-12">
          <a href="/#contact" className="btn btn-solid" onClick={closeMenu}>
            Start a project
          </a>
        </div>
      </nav>
    </header>
  );
}
