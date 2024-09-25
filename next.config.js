/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "atlas-cms.atlascorp.io" }],
  },
};

module.exports = nextConfig;
