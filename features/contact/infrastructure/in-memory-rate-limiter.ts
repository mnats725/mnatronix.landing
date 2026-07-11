import type { RateLimiter, RateLimitResult } from "@/features/contact/application/rate-limiter";

type RateLimitEntry = { count: number; expiresAt: number };

export class InMemoryRateLimiter implements RateLimiter {
  private readonly entries = new Map<string, RateLimitEntry>();

  constructor(
    private readonly maximumRequests: number,
    private readonly windowMilliseconds: number,
  ) {}

  check(key: string): RateLimitResult {
    const now = Date.now();
    if (this.entries.size > 1_000) this.removeExpiredEntries(now);
    const entry = this.entries.get(key);

    if (!entry || entry.expiresAt <= now) {
      this.entries.set(key, { count: 1, expiresAt: now + this.windowMilliseconds });
      return { accepted: true, retryAfterSeconds: 0 };
    }

    if (entry.count >= this.maximumRequests) {
      return {
        accepted: false,
        retryAfterSeconds: Math.ceil((entry.expiresAt - now) / 1_000),
      };
    }

    entry.count += 1;
    return { accepted: true, retryAfterSeconds: 0 };
  }

  private removeExpiredEntries(now: number) {
    for (const [key, entry] of this.entries) {
      if (entry.expiresAt <= now) this.entries.delete(key);
    }
  }
}
