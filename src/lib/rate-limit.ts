/**
 * In-memory sliding-window limiter.
 * On Vercel this is per-instance (not shared across serverless isolates).
 */
const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;

const hits = new Map<string, number[]>();

export type RateLimitResult =
  | { ok: true }
  | { ok: false; retryAfterSeconds: number };

export function checkRateLimit(
  ip: string,
  limit = MAX_HITS,
  windowMs = WINDOW_MS,
): RateLimitResult {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= limit) {
    hits.set(ip, recent);
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((recent[0]! + windowMs - now) / 1000),
    );
    return { ok: false, retryAfterSeconds };
  }

  recent.push(now);
  hits.set(ip, recent);
  return { ok: true };
}
