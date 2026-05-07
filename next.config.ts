import type { NextConfig } from "next";

const repoName = "frontend"; // change if your repo name is different

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true
  }
};

export default nextConfig;