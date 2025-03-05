import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

// Plugins
import react from '@vitejs/plugin-react-swc'

// Types and interfaces
import type { UserConfig, UserConfigExport } from 'vite'

export default ({ mode }: UserConfig): UserConfigExport => {
  const env = { ...process.env, ...loadEnv(<string>mode, process.cwd()) }

  return defineConfig({
    appType: 'spa',
    publicDir: './public',
    plugins: [react()],
    clearScreen: true,
    build: {
      outDir: './dist',
      minify: true
    },
    server: {
      host: true,
      port: +env.VITE_PORT!
    },
    resolve: {
      alias: {
        '@config': resolve(__dirname, './src/config'),
        '@assets': resolve(__dirname, './src/assets'),
        '@layouts': resolve(__dirname, './src/layouts'),
        '@components': resolve(__dirname, './src/components'),
        '@icons': resolve(__dirname, './src/icons'),
        '@hooks': resolve(__dirname, './src/hooks'),
        '@pages': resolve(__dirname, './src/pages'),
        '@stores': resolve(__dirname, './src/stores'),
        '@helpers': resolve(__dirname, './src/helpers'),
        '@tests': resolve(__dirname, './tests')
      }
    }
  })
}
