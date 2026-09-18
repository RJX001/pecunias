"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      suppressHydrationWarning
      className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-[2px] border border-fg bg-bg px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-fg transition-colors hover:opacity-80"
    >
      {isDark ? (
        <Sun className="size-3.5 shrink-0" aria-hidden="true" strokeWidth={1.75} />
      ) : (
        <Moon className="size-3.5 shrink-0" aria-hidden="true" strokeWidth={1.75} />
      )}
      <span suppressHydrationWarning>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
