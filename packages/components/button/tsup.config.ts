import { defineConfig } from 'tsup';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

export default defineConfig({
  clean: true,
  // TODO: TURN DTS BACK ON
  dts: false,
  entry: ['src/index.ts'],
  esbuildPlugins: [vanillaExtractPlugin()],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  splitting: false,
  sourcemap: true,
});
