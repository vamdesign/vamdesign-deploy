/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use static export for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
  }),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;