import { describe, expect, it, vi } from "vitest";
import type { ContactMailer } from "@/features/contact/application/contact-mailer";
import type { RateLimiter } from "@/features/contact/application/rate-limiter";
import { submitContactRequest } from "@/features/contact/application/submit-contact-request";

const validRequest = {
  name: "Иван",
  contact: "@ivan",
  email: "ivan@example.com",
  projectType: "Веб-сервис",
  message: "Нужен личный кабинет",
  budget: "300 000–700 000 ₽",
  privacy: true,
  website: "",
};

function createDependencies(accepted = true) {
  const send = vi.fn<ContactMailer["send"]>().mockResolvedValue(undefined);
  const mailer: ContactMailer = { send };
  const rateLimiter: RateLimiter = { check: () => ({ accepted, retryAfterSeconds: 60 }) };
  return { mailer, rateLimiter, send };
}

describe("submitContactRequest", () => {
  it("отправляет корректную заявку", async () => {
    const dependencies = createDependencies();
    const result = await submitContactRequest(validRequest, "127.0.0.1", dependencies);
    expect(result).toEqual({ ok: true });
    expect(dependencies.send).toHaveBeenCalledWith(validRequest);
  });

  it("не отправляет невалидную заявку", async () => {
    const dependencies = createDependencies();
    const result = await submitContactRequest(
      { ...validRequest, email: "wrong" },
      "127.0.0.1",
      dependencies,
    );
    expect(result.ok).toBe(false);
    expect(dependencies.send).not.toHaveBeenCalled();
  });

  it("останавливает заявку при превышении лимита", async () => {
    const dependencies = createDependencies(false);
    const result = await submitContactRequest(validRequest, "127.0.0.1", dependencies);
    expect(result).toMatchObject({ ok: false, code: "rate-limited" });
    expect(dependencies.send).not.toHaveBeenCalled();
  });
});
