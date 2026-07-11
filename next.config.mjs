import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1"],
  images: { unoptimized: true },
  experimental: { inlineCss: true },
};

export default withSentryConfig(nextConfig, {
  silent: true,
  webpack: { treeshake: { removeDebugLogging: true } },
});
