import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom', 'ag-grid-community', 'ag-grid-react'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
