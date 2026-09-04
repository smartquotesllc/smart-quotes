/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    qualities: [75, 90, 92, 95],
  },
};

export default nextConfig;
