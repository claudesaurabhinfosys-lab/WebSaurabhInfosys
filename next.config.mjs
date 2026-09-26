

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Dev only: lets a phone on the office LAN open `next dev` by IP for testing.
  allowedDevOrigins: ["192.168.1.13"],
};

export default nextConfig;
