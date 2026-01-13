import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@proj/utils': path.resolve(__dirname, '../../packages/utils/src'),
      '@proj/grid': path.resolve(__dirname, '../../packages/grid/src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      scopeBehaviour: 'local',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  build: {
    sourcemap: true,
  },
  server: {
    port: 1234,
    open: true,
  },
});
