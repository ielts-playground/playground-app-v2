/* eslint-disable quotes */
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
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
    REACT_APP_BASE_URL: 'https://ieltsmastersource.com/',
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
