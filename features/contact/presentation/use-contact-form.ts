"use client";

import { type FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  status: "idle" | "submitting" | "error" | "success";
  message: string;
};

const initialState: FormState = { status: "idle", message: "" };

export function useContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setState({ status: "error", message: "Проверьте заполнение обязательных полей." });
      form.reportValidity();
      trackEvent("contact_form_validation_error");
      return;
    }

    setState({ status: "submitting", message: "Отправляем заявку…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createContactPayload(new FormData(form))),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Не удалось отправить заявку");

      form.reset();
      setState({
        status: "success",
        message: "Спасибо! Заявка отправлена. Мы свяжемся с вами в течение рабочего дня.",
      });
      trackEvent("contact_form_success");
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "Не удалось отправить заявку",
      });
      trackEvent("contact_form_submit_error");
    }
  }

  return { state, submit };
}

function createContactPayload(formData: FormData) {
  return {
    name: formData.get("name"),
    contact: formData.get("contact"),
    email: formData.get("email"),
    projectType: formData.get("project-type"),
    message: formData.get("message"),
    budget: formData.get("budget"),
    privacy: formData.get("privacy") === "on",
    website: formData.get("website") ?? "",
    turnstileToken: formData.get("cf-turnstile-response") ?? undefined,
  };
}
