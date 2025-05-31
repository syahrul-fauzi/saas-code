import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    watch: false,
    include: ['tests/**/*.{test,spec}.ts'],
    setupFiles: ['./vitest.setup.ts'],
    exclude: ['tests/unit/lib/helper/appUrl.test.ts'],
  },
});