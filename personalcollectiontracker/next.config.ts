import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GRAPHQL_HOST: process.env.GRAPHQL_HOST,
  },
};

export default nextConfig;
