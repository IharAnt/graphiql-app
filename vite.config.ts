/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/graphiql-app',
  plugins: [react(), svgr()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/global";`,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.ts'],
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
      include: ['src//'],
      exclude: [
        ...configDefaults.exclude,
        '**/types.ts',
        '**/types/interfaces/',
        '**/types/state/',
        '**/*.d.ts',
        '**/*.test.tsx',
        '**/*.test.ts',
        'src//main.tsx',
      ],
    },
  },
});
