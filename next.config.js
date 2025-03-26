/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use static export for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    // Use empty string for asset prefix at GitHub Pages URL
    assetPrefix: '',
    // Use repository name as basePath for GitHub Pages
    basePath: '/vamdesign-deploy',
    trailingSlash: true,
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
            publicPath: '/vamdesign-deploy/',
            name: 'static/media/[name].[hash].[ext]'
          }
        }
      ]
    });

    return config;
  }
};

module.exports = nextConfig;