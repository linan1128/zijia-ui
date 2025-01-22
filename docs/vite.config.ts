import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UnoCSS()],
  resolve: {
    alias: [
      {
        find: /^.*\/base\.css$/,
        replacement: fileURLToPath(
          new URL('./.vitepress/theme/base.css', import.meta.url),
        ),
      },
    ],
  },
})
