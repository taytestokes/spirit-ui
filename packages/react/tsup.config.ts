import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig({
  clean: true,
  entry: ["components/index.ts"],
  format: ["cjs", "esm"],
  outDir: "dist",
  esbuildPlugins: [vanillaExtractPlugin()],
  splitting: true,
  sourcemap: true,
});
