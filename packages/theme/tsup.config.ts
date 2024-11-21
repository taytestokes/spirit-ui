import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig({
  clean: true,
  entry: ["theme.ts", "tokens.ts", "reset.ts"],
  format: ["cjs", "esm"],
  outDir: "dist",
  esbuildPlugins: [vanillaExtractPlugin()],
  splitting: true,
  sourcemap: true,
});
