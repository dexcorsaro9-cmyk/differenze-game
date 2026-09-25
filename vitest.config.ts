import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Data and pure-rule suites run in node; component suites opt into jsdom with a
    // `// @vitest-environment jsdom` docblock, so the fast majority stays fast.
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    setupFiles: ['src/__tests__/setup.ts'],
    reporters: ['default'],
  },
});
