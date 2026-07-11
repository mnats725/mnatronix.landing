"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
      void import("@sentry/browser").then((Sentry) => Sentry.captureException(error));
    }
  }, [error]);
  return (
    <html lang="ru">
      <body>
        <main className="error-page">
          <div>
            <p className="eyebrow">Ошибка</p>
            <h1>Что-то пошло не так</h1>
            <p>Мы уже получили информацию об ошибке. Попробуйте обновить страницу.</p>
            <button className="button button--primary" type="button" onClick={reset}>
              Попробовать снова
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
