import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    VitePluginSitemap({
      hostname: 'https://yourdomain.com', // 可以先写成 https://example.com
      outDir: './dist', // sitemap 输出目录
    }),
  ],
})
