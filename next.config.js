/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "@/styles/variables";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tuanm.dev',
      },
    ],
  },
  env: {
    REACT_APP_BASE_URL: 'https://tuanm.dev/pb/',
  },
};

module.exports = nextConfig;
