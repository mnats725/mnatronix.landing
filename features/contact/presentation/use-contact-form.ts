"use client";

import { type FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { deliverContactRequest } from "@/features/contact/infrastructure/browser-contact-delivery";
import type { ContactRequest } from "@/features/contact/domain/contact-request";

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
      const delivery = await deliverContactRequest(createContactPayload(new FormData(form)));

      if (delivery.kind === "mail-client") {
        setState({
          status: "success",
          message: "Заявка подготовлена. Завершите отправку в открывшемся почтовом приложении.",
        });
        window.location.assign(delivery.mailtoHref);
        trackEvent("contact_form_success");
        return;
      }

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

function createContactPayload(formData: FormData): ContactRequest {
  return {
    name: readString(formData, "name"),
    contact: readString(formData, "contact"),
    email: readString(formData, "email"),
    projectType: readString(formData, "project-type"),
    message: readString(formData, "message"),
    budget: readString(formData, "budget"),
    privacy: true,
    website: readString(formData, "website"),
    turnstileToken: readString(formData, "cf-turnstile-response") || undefined,
  };
}

function readString(formData: FormData, fieldName: string): string {
  const value = formData.get(fieldName);
  return typeof value === "string" ? value : "";
}
