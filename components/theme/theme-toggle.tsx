"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";

type ThemeToggleProps = {
  labels: { switch: string; light: string; dark: string };
};

export function ThemeToggle({ labels }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const nextThemeLabel = theme === "dark" ? labels.light : labels.dark;

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={theme ? nextThemeLabel : labels.switch}
      aria-pressed={theme === "dark"}
      title={nextThemeLabel}
    >
      <Sun className="theme-toggle__sun" aria-hidden="true" />
      <Moon className="theme-toggle__moon" aria-hidden="true" />
    </button>
  );
}
