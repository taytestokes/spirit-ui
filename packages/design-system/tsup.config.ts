import { defineConfig, Options } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

const DIST_PATH = "dist";

const config: Options = {
  format: ["cjs", "esm"],
  esbuildPlugins: [vanillaExtractPlugin()],
  splitting: true,
  dts: true,
};

/**
 * This config has to build config options, one designed for client components and the
 * other is designed for server components and other static assets (styles, etc). We
 * need to apply the "use client" directive banner at build time to allow consumers
 * to not have to wrap the client component in a client wrapper.
 *
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#advice-for-library-authors
 */
export default defineConfig(
  (options: Options) =>
    [
      {
        entry: ["src/components/index.ts"],
        banner: {
          js: '"use client"',
        },
        outDir: `${DIST_PATH}/components`,
        clean: !options.watch,
        minify: !options.watch,
        ...config,
        ...options,
      },
      {
        entry: ["src/styles/index.ts", "src/tokens/index.ts"],
        outDir: DIST_PATH,
        clean: !options.watch,
        minify: !options.watch,
        ...config,
        ...options,
      },
    ] as Options
);
