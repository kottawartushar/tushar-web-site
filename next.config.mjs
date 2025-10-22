/** next.config.mjs */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // allow images from these domains if you host screenshots/avatars elsewhere
    domains: ["images.unsplash.com", "vercel.com"],
  },
  // Enable future-proof features if needed (safe defaults)
  experimental: {
    appDir: true
  }
};

export default nextConfig;
