"use client";

import { useEffect } from "react";
import { isAnalyticsEvent, trackEvent } from "@/lib/analytics";

export function AnalyticsProvider() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("[data-analytics-event]")
          : null;
      const eventName = target?.dataset.analyticsEvent;
      if (eventName && isAnalyticsEvent(eventName)) trackEvent(eventName);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Точка интеграции Яндекс Метрики. Намеренно не загружает внешние скрипты,
  // пока не передан и не согласован идентификатор счётчика.
  return null;
}
