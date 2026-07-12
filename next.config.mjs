import { withSentryConfig } from "@sentry/nextjs";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1"],
  images: { unoptimized: true },
  experimental: { inlineCss: true },
};

export default withSentryConfig(withNextIntl(nextConfig), {
  silent: true,
  webpack: { treeshake: { removeDebugLogging: true } },
});
