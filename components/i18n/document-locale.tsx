import type { Locale } from "@/i18n/config";

export function DocumentLocale({ locale }: { locale: Locale }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang=${JSON.stringify(locale)}`,
      }}
    />
  );
}
