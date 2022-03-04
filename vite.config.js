import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import stypleImport, { VantResolve } from 'vite-plugin-style-import'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    stypleImport({
      resolve: [VantResolve()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
