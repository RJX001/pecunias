"use client";

import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_CTA, NAV_LINKS } from "@/data/homepage-copy";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { jumpHomeToTop, markPendingHomeTop } from "./scroll-home";
import styles from "./Header.module.css";

const DESKTOP_QUERY = "(min-width: 960px)";

function isCurrent(pathname: string, href: string) {
  if (href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const onLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (pathname === "/") {
      jumpHomeToTop();
      requestAnimationFrame(() => jumpHomeToTop());
      return;
    }

    markPendingHomeTop();
  };

  return (
    <header className={styles.header} data-site-header="">
      <div className={styles.bar}>
        <Link
          href="/"
          scroll={false}
          aria-label="Pecunia Studios"
          className={styles.brand}
          onClick={onLogoClick}
        >
          <BrandMark />
        </Link>

        <nav className={styles.primary} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.navLink}
                  aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <a href={NAV_CTA.href} className={`ps-button ${styles.cta}`}>
            {NAV_CTA.label}
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={styles.menuLines} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <nav
        id={menuId}
        className={styles.mobile}
        aria-label="Mobile"
        hidden={!open}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.mobileLink}
                aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileCta}>
          <a href={NAV_CTA.href} className="ps-button" onClick={closeMenu}>
            {NAV_CTA.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
