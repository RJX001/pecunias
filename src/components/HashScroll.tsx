"use client";

import { useLayoutEffect } from "react";
import {
  jumpHomeToTop,
  scrollToAboutSection,
  takePendingHomeTop,
} from "./scroll-home";

function onAboutHash() {
  if (window.location.hash === "#about") {
    void scrollToAboutSection();
  }
}

export function HashScroll() {
  useLayoutEffect(() => {
    const logoLanding = takePendingHomeTop();
    const retries: number[] = [];

    if (logoLanding) {
      jumpHomeToTop();
      retries.push(window.setTimeout(() => jumpHomeToTop(), 0));
      retries.push(window.setTimeout(() => jumpHomeToTop(), 50));
      retries.push(window.setTimeout(() => jumpHomeToTop(), 150));
    } else if (window.location.hash === "#about") {
      void scrollToAboutSection();
    }

    if (!logoLanding) {
      retries.push(window.setTimeout(onAboutHash, 0));
      retries.push(window.setTimeout(onAboutHash, 100));
    }

    window.addEventListener("hashchange", onAboutHash);
    window.addEventListener("popstate", onAboutHash);

    return () => {
      retries.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("hashchange", onAboutHash);
      window.removeEventListener("popstate", onAboutHash);
    };
  }, []);

  return null;
}
