const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type TurnstileResponse = { success: boolean };

export async function verifyTurnstileToken(
  token: string | undefined,
  clientIp: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token, remoteip: clientIp });
  const response = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body, cache: "no-store" });
  if (!response.ok) return false;

  const result = (await response.json()) as TurnstileResponse;
  return result.success;
}
