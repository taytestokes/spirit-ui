import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  /**
   * Nextjs 15 uses turbopack as the bundler for dev mode
   * so we need to transpile the next-mdx-remote package.
   * https://github.com/hashicorp/next-mdx-remote?tab=readme-ov-file#installation
   */
  transpilePackages: ["next-mdx-remote", "@spirit-ui/design-system"],
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/installation",
        permanent: true,
      },
    ];
  },
};

export default withVanillaExtract(withContentlayer(nextConfig));
