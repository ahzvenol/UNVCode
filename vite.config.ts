import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'
import { resolve } from 'path'

export default defineConfig(({ command }) => ({
  plugins: [vue(), importToCDN({
    modules: [
      {
        name: 'axios',
        var: 'axios',
        path: 'https://cdn.bootcdn.net/ajax/libs/axios/1.2.2/axios.min.js'
      },
    ]
  })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    port: 8888,
    strictPort: true
  },
  build: {
    target: 'esnext',
    sourcemap: false,
  },
  esbuild: {
    drop: command === 'build' ? ["console", "debugger"] : [],
  },
}))
