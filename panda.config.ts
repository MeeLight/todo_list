import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  strictTokens: false,
  outdir: 'styled-system',
  include: [
    './src/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/stories/**/*.{ts,tsx}'
  ],
  exclude: [],
  theme: {
    extend: {}
  }
})
