/// <reference types='vitest' />
/// <reference types='vite/client' />

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    api: 51204,
    include: [
      './tests/*.test.tsx',
      './tests/*.spec.tsx',
      './tests/**/*.test.tsx',
      './tests/**/*.spec.tsx'
    ],
    exclude: ['./src', 'node_modules', 'dist', '.git'],
    coverage: {
      provider: 'v8',
      reporter: ['html', 'json', 'text']
    }
  }
})
