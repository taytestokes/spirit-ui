import { defineConfig, Options } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

const DIST_PATH = "dist";

const config: Options = {
  format: ["cjs", "esm"],
  esbuildPlugins: [vanillaExtractPlugin()],
  splitting: true,
  dts: true,
};

export default defineConfig(
  (options: Options) =>
    [
      {
        entry: ["src/components/client/index.ts"],
        banner: {
          js: '"use client"',
        },
        outDir: `${DIST_PATH}/components/client`,
        clean: !options.watch,
        minify: !options.watch,
        ...config,
        ...options,
      },
      {
        entry: [
          "src/components/server/index.ts",
          "src/styles/index.ts",
          "src/styles/reset.ts",
          "src/tokens/index.ts",
        ],
        outDir: DIST_PATH,
        clean: !options.watch,
        minify: !options.watch,
        ...config,
        ...options,
      },
    ] as Options
);
