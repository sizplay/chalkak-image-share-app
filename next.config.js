const withLinaria = require("next-with-linaria");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = withLinaria(nextConfig);
