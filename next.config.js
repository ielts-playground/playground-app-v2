/* eslint-disable quotes */
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src', './public'],
    prependData: "@import '@/scss/variables';",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ieltsmastersource.com',
      },
    ],
  },
  env: {
    REACT_APP_BASE_URL: 'https://test.tuanm.dev/',
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  devServer: {
    historyApiFallback: {
      index: '/dist/index.html',
    },
  },
};

module.exports = nextConfig;
