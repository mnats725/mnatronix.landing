# MNATRONIX LABS

Production-ready landing page built with Next.js, React and TypeScript.

## Development

```bash
npm install
copy .env.example .env.local
npm run dev
```

## Contact form

The form sends email through Resend. Configure `RESEND_API_KEY`, `CONTACT_EMAIL_FROM` and
`CONTACT_EMAIL_TO`. Without these variables the API returns `503` and never reports a false
success to the visitor.

Cloudflare Turnstile is optional. Set both `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and
`TURNSTILE_SECRET_KEY` to enable it.

## Monitoring and analytics

Set `NEXT_PUBLIC_SENTRY_DSN` to enable Sentry. Analytics events are routed through
`lib/analytics.ts`; `AnalyticsProvider` is the intentional integration point for a future
Yandex Metrica counter.

## Quality checks

```bash
npm run check
npm run test:unit
npm run test:e2e
npm run build
```

GitHub Actions runs these checks for pushes and pull requests. Husky and lint-staged format and
lint changed files before every commit.
