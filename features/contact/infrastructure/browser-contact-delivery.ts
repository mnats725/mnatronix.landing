import { siteConfig } from "@/config/site-config";
import type { ContactRequest } from "@/features/contact/domain/contact-request";

export type ContactDeliveryResult =
  | { kind: "endpoint" }
  | { kind: "mail-client"; mailtoHref: string };

export async function deliverContactRequest(
  request: ContactRequest,
): Promise<ContactDeliveryResult> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
  if (!endpoint) return { kind: "mail-client", mailtoHref: createMailtoHref(request) };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });
  const result = (await response.json().catch(() => null)) as { message?: string } | null;
  if (!response.ok) throw new Error(result?.message || "Не удалось отправить заявку");

  return { kind: "endpoint" };
}

function createMailtoHref(request: ContactRequest): string {
  const subject = `Заявка на ${request.projectType} — ${request.name}`;
  const body = [
    `Имя: ${request.name}`,
    `Контакт: ${request.contact}`,
    `Email: ${request.email}`,
    `Тип проекта: ${request.projectType}`,
    `Бюджет: ${request.budget}`,
    "",
    request.message,
  ].join("\n");

  return `mailto:${siteConfig.contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
