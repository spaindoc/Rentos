// next.config.js
import createNextIntlPlugin from "next-intl/plugin";

// Здесь указываем все ваши локали и дефолтную
const withNextIntl = createNextIntlPlugin({
  locales: ["uk", "en"],
  defaultLocale: "uk",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default withNextIntl(nextConfig);