import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/youth", destination: "/programs/youth", permanent: false }];
  },
};

export default nextConfig;
