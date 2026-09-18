"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "pecunia-theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const listeners = new Set<() => void>();

function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
}

function readDomTheme(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  if (isTheme(attr)) return attr;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isTheme(stored)) return stored;
  } catch {
    // localStorage unavailable
  }
  return "light";
}

function emitTheme() {
  listeners.forEach((listener) => listener());
}

function persistTheme(theme: Theme) {
  applyTheme(theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore quota / private mode
  }
  emitTheme();
}

function subscribeTheme(onStoreChange: () => void) {
  listeners.add(onStoreChange);

  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY && event.key !== null) return;
    if (isTheme(event.newValue)) {
      applyTheme(event.newValue);
    } else if (event.key === STORAGE_KEY) {
      applyTheme("light");
    }
    emitTheme();
  };

  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getThemeSnapshot(): Theme {
  return readDomTheme();
}

function getThemeServerSnapshot(): Theme {
  return "light";
}

/**
 * Inline before `</head>` (or as first child of `<html>`) to avoid a flash of
 * the wrong theme. Layout already sets `data-theme="light"` on `<html>` as the
 * SSR default; this script restores a persisted choice before paint. If nothing
 * is stored, the SSR light default is left in place — do not force dark.
 *
 * ```html
 * <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
 * ```
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t);document.documentElement.style.colorScheme=t;}}catch(e){}})();`;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );

  const setTheme = useCallback((next: Theme) => {
    persistTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    persistTheme(readDomTheme() === "dark" ? "light" : "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
