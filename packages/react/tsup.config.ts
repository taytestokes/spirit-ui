import { defineConfig } from 'tsup';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

export default defineConfig({
  clean: true,
  // TODO: TURN DTS BACK ON
  dts: false,
  entry: ['index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  esbuildPlugins: [vanillaExtractPlugin()],
  splitting: false,
  sourcemap: true,
});
