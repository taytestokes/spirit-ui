import { defineConfig, Options } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig(
  (options: Options) =>
    ({
      bundle: true,
      entry: [
        "src/components/index.ts",
        "src/styles/index.ts",
        "src/styles/reset.ts",
        "src/tokens/index.ts",
      ],
      format: ["cjs", "esm"],
      outDir: "dist",
      esbuildPlugins: [vanillaExtractPlugin()],
      sourcemap: false,
      clean: !options.watch,
      minify: !options.watch,
      ...options,
    }) as Options
);
