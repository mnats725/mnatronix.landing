import type { ContactRequest } from "@/features/contact/domain/contact-request";

export interface ContactMailer {
  send(request: ContactRequest): Promise<void>;
}
