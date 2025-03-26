/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use static export for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '', // Empty to prevent any prefixing
    assetPrefix: '', // Empty to prevent any prefixing
    trailingSlash: true, // Helps with GitHub Pages compatibility
    // IMPORTANT: Explicitly disable any beta prefixing
    env: {
      BASE_PATH: '',
      ASSET_PREFIX: ''
    }
  }),
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Explicitly set public path for all assets
    config.output.publicPath = '/';
    
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