"use client";

import { useEffect } from "react";

export function ClientMonitor() {
  useEffect(() => {
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    if (!dsn) return;

    void import("@sentry/nextjs").then((Sentry) => {
      Sentry.init({ dsn, tracesSampleRate: 0.1, sendDefaultPii: false });
    });
  }, []);

  return null;
}
