const path = require("path");

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

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      include: path.resolve(__dirname, "/public/videos"), // Đường dẫn đến thư mục chứa các tệp MP4
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/videos/", // Đường dẫn công khai cho các tệp MP4
            outputPath: "static/videos/", // Thư mục đầu ra cho các tệp MP4 trong thư mục .next
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
