/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Temporary redirect for development - remove when done
  async redirects() {
    return [
      {
        source: '/',
        destination: '/uc/clara',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig;
