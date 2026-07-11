"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import { isTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

type ThemeContextValue = {
  theme: Theme | null;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const THEME_CHANGE_EVENT = "mnatronix-theme-change";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      toggleTheme() {
        const currentTheme = theme ?? getDocumentTheme();
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
      },
    }),
    [theme],
  );

  return <ThemeContext value={value}>{children}</ThemeContext>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

function getDocumentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getThemeSnapshot(): Theme | null {
  const theme = document.documentElement.dataset.theme;
  return isTheme(theme) ? theme : null;
}

function getServerThemeSnapshot(): null {
  return null;
}

function subscribeToTheme(onThemeChange: () => void) {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  function handleSystemThemeChange(event: MediaQueryListEvent) {
    if (localStorage.getItem(THEME_STORAGE_KEY)) return;
    applyTheme(event.matches ? "dark" : "light");
  }

  window.addEventListener(THEME_CHANGE_EVENT, onThemeChange);
  colorScheme.addEventListener("change", handleSystemThemeChange);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onThemeChange);
    colorScheme.removeEventListener("change", handleSystemThemeChange);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}
