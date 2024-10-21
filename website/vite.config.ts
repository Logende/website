import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import {viteStaticCopy} from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  base: '/website/',
  plugins: [
    vue(),
    vueDevTools(),
    viteStaticCopy({
      structured: true,
      targets: [
        {
          src: 'src/assets/**/*',
          dest: ''
        }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    minify: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})