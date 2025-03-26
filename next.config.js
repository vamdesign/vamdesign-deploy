/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove all path prefixing for custom domain
  trailingSlash: true,
};

module.exports = nextConfig;