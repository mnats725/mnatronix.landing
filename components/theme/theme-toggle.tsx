"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const nextThemeLabel = theme === "dark" ? "Включить светлую тему" : "Включить тёмную тему";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={theme ? nextThemeLabel : "Переключить цветовую тему"}
      aria-pressed={theme === "dark"}
      title={nextThemeLabel}
    >
      <Sun className="theme-toggle__sun" aria-hidden="true" />
      <Moon className="theme-toggle__moon" aria-hidden="true" />
    </button>
  );
}
