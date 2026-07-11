import { NextResponse, type NextRequest } from "next/server";
import { submitContactRequest } from "@/features/contact/application/submit-contact-request";
import { InMemoryRateLimiter } from "@/features/contact/infrastructure/in-memory-rate-limiter";
import { ResendContactMailer } from "@/features/contact/infrastructure/resend-contact-mailer";
import { verifyTurnstileToken } from "@/features/contact/infrastructure/turnstile-verifier";

const rateLimiter = new InMemoryRateLimiter(5, 15 * 60 * 1_000);
const MAXIMUM_REQUEST_SIZE = 12_000;

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);

  try {
    if (!hasAllowedOrigin(request)) {
      return NextResponse.json({ message: "Недопустимый источник запроса" }, { status: 403 });
    }

    const requestBody = await request.text();
    if (requestBody.length > MAXIMUM_REQUEST_SIZE) {
      return NextResponse.json({ message: "Слишком большой запрос" }, { status: 413 });
    }

    const payload = JSON.parse(requestBody) as Record<string, unknown>;
    const turnstileIsValid = await verifyTurnstileToken(
      typeof payload.turnstileToken === "string" ? payload.turnstileToken : undefined,
      clientIp,
    );

    if (!turnstileIsValid) {
      return NextResponse.json(
        { message: "Не удалось подтвердить, что вы не робот" },
        { status: 400 },
      );
    }

    const mailer = createMailer();
    if (!mailer) {
      return NextResponse.json(
        { message: "Отправка заявок временно не настроена. Напишите нам напрямую." },
        { status: 503 },
      );
    }

    const result = await submitContactRequest(payload, clientIp, { mailer, rateLimiter });
    if (result.ok) return NextResponse.json({ message: "Заявка отправлена" });

    const status = result.code === "rate-limited" ? 429 : 400;
    const headers =
      result.code === "rate-limited"
        ? { "Retry-After": String(result.retryAfterSeconds) }
        : undefined;
    return NextResponse.json({ message: result.message }, { status, headers });
  } catch (error) {
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
      const Sentry = await import("@sentry/nextjs");
      Sentry.captureException(error);
    }
    console.error(
      "Contact request failed",
      error instanceof Error ? error.message : "Unknown error",
    );
    return NextResponse.json(
      { message: "Не удалось отправить заявку. Попробуйте ещё раз или напишите нам напрямую." },
      { status: 500 },
    );
  }
}

function createMailer() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL_TO;
  return apiKey && from && to ? new ResendContactMailer({ apiKey, from, to }) : null;
}

function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function hasAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    return new URL(origin).host === request.nextUrl.host;
  } catch {
    return false;
  }
}
