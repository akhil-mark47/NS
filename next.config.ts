/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in newer Next.js versions
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    };
    return config;
  },
};

export default nextConfig;