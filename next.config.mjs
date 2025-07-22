// next.config.js (or .next.config.mjs if you’re using ESM syntax)
import createNextIntlPlugin from "next-intl/plugin";

// локали
const withNextIntl = createNextIntlPlugin({
  locales: ["uk", "en"],
  defaultLocale: "uk",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // <-- simple option:
    domains: ["cdn.sanity.io"],

  },
};

export default withNextIntl(nextConfig);
