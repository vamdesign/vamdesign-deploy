/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use static export for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    assetPrefix: '/', // Must start with a leading slash for next/font compatibility
    trailingSlash: true, // Helps with GitHub Pages compatibility
    basePath: '', // Empty for root domain deployment
  }),
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/',
            name: 'static/media/[name].[hash].[ext]'
          }
        }
      ]
    });

    return config;
  }
};

module.exports = nextConfig;