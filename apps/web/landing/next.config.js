import { createJiti } from "jiti";
import createNextIntlPlugin from "next-intl/plugin";

const jiti = createJiti(import.meta.url);

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
await jiti.import("./src/env");

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import("next").NextConfig} */
const config = {
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    // "@trading-platform/api",
    // "@trading-platform/auth",
    // "@trading-platform/db",
    "@trading-platform/ui",
    "@trading-platform/validators",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  typescript: { ignoreBuildErrors: true },

  /** Allow external images from Figma */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },

  /** This is required to support PostHog trailing slash API requests */
  skipTrailingSlashRedirect: true,
};

export default withNextIntl(config);
