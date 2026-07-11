import type { ContactMailer } from "@/features/contact/application/contact-mailer";
import type { RateLimiter } from "@/features/contact/application/rate-limiter";
import { contactRequestSchema } from "@/features/contact/domain/contact-request";

export type SubmitContactResult =
  | { ok: true }
  | { ok: false; code: "invalid"; message: string }
  | { ok: false; code: "rate-limited"; message: string; retryAfterSeconds: number };

type SubmitContactDependencies = {
  mailer: ContactMailer;
  rateLimiter: RateLimiter;
};

export async function submitContactRequest(
  input: unknown,
  clientKey: string,
  dependencies: SubmitContactDependencies,
): Promise<SubmitContactResult> {
  const parsedRequest = contactRequestSchema.safeParse(input);

  if (!parsedRequest.success) {
    return {
      ok: false,
      code: "invalid",
      message: parsedRequest.error.issues[0]?.message ?? "Проверьте заполнение формы",
    };
  }

  const rateLimit = dependencies.rateLimiter.check(clientKey);
  if (!rateLimit.accepted) {
    return {
      ok: false,
      code: "rate-limited",
      message: "Слишком много запросов. Попробуйте отправить форму немного позже.",
      retryAfterSeconds: rateLimit.retryAfterSeconds,
    };
  }

  await dependencies.mailer.send(parsedRequest.data);
  return { ok: true };
}
