/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themes-themegoods.b-cdn.net",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "themes-themegoods.b-cdn.net",
        pathname: "**",
      },

      {
        protocol: "https",
        hostname: "live.staticflickr.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "live.staticflickr.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
