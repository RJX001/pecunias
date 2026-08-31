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
      className="inline-flex items-center gap-1.5 rounded-[2px] border border-line bg-transparent px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-stone transition-colors hover:border-brass hover:text-brass"
    >
      {isDark ? (
        <Sun className="size-3.5 shrink-0" aria-hidden="true" strokeWidth={1.75} />
      ) : (
        <Moon className="size-3.5 shrink-0" aria-hidden="true" strokeWidth={1.75} />
      )}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
