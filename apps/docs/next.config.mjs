import { withContentlayer } from "next-contentlayer2";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  /**
   * Nextjs 15 uses turbopack as the bundler for dev mode
   * so we need to transpile the next-mdx-remote package.
   * https://github.com/hashicorp/next-mdx-remote?tab=readme-ov-file#installation
   */
  transpilePackages: ["next-mdx-remote", "@spirit-ui/design-system"],

  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs/getting-started",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/docs/getting-started",
        permanent: true,
      },
    ];
  },
};

export default withVanillaExtract(withContentlayer(nextConfig));
