export type AnalyticsEvent =
  | "contact_form_validation_error"
  | "contact_form_success"
  | "contact_form_submit_error"
  | "project_discussion_click"
  | "portfolio_view"
  | "mobile_menu_open";

const analyticsEvents = new Set<AnalyticsEvent>([
  "contact_form_validation_error",
  "contact_form_success",
  "contact_form_submit_error",
  "project_discussion_click",
  "portfolio_view",
  "mobile_menu_open",
]);

export function isAnalyticsEvent(value: string): value is AnalyticsEvent {
  return analyticsEvents.has(value as AnalyticsEvent);
}

export function trackEvent(event: AnalyticsEvent, parameters?: Record<string, string | number>) {
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics-placeholder]", event, parameters ?? {});
  }
}
