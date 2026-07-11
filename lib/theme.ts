export const THEME_STORAGE_KEY = "mnatronix-theme";

export const themes = ["light", "dark"] as const;
export type Theme = (typeof themes)[number];

export function isTheme(value: unknown): value is Theme {
  return typeof value === "string" && themes.includes(value as Theme);
}

export function getThemeBootstrapScript(): string {
  return `(() => {
    try {
      const key = ${JSON.stringify(THEME_STORAGE_KEY)};
      const savedTheme = localStorage.getItem(key);
      const theme = savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch {
      document.documentElement.dataset.theme = "light";
    }
  })();`;
}
