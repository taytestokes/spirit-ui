import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  // TODO: TURN DTS BACK ON
  dts: false,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  splitting: false,
  sourcemap: true,
});
