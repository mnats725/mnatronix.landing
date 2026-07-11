import { Resend } from "resend";
import type { ContactMailer } from "@/features/contact/application/contact-mailer";
import type { ContactRequest } from "@/features/contact/domain/contact-request";

type ResendMailerConfig = {
  apiKey: string;
  from: string;
  to: string;
};

export class ResendContactMailer implements ContactMailer {
  private readonly resend: Resend;

  constructor(private readonly config: ResendMailerConfig) {
    this.resend = new Resend(config.apiKey);
  }

  async send(request: ContactRequest): Promise<void> {
    const { error } = await this.resend.emails.send({
      from: this.config.from,
      to: this.config.to,
      replyTo: request.email,
      subject: `Новая заявка: ${request.projectType} — ${request.name}`,
      text: createEmailText(request),
    });

    if (error) {
      throw new Error(`Resend rejected contact request: ${error.message}`);
    }
  }
}

function createEmailText(request: ContactRequest): string {
  return [
    `Имя: ${request.name}`,
    `Контакт: ${request.contact}`,
    `Email: ${request.email}`,
    `Тип проекта: ${request.projectType}`,
    `Бюджет: ${request.budget}`,
    "",
    "Описание:",
    request.message,
  ].join("\n");
}
