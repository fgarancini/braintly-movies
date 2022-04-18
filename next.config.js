/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    OMDB_API_KEY: process.env.OMDB_API_KEY,
  },
};

module.exports = nextConfig;
