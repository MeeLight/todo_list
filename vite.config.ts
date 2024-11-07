import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import { type UserConfig, type UserConfigExport } from 'vite'

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
        '@assets': resolve(__dirname, './src/assets'),
        '@components': resolve(__dirname, './src/components'),
        '@layouts': resolve(__dirname, './src/layouts'),
        '@router': resolve(__dirname, './src/router'),
        '@config': resolve(__dirname, './src/config'),
        '@pages': resolve(__dirname, './src/pages'),
        '@tests': resolve(__dirname, './tests')
      }
    }
  })
}
