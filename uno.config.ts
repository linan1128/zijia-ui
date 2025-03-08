import { defineConfig, presetIcons,presetUno } from 'unocss'
import from '@zijia-ui/preset-theme-default/src/index.ts'

export default defineConfig({
  // ...UnoCSS options
  shortcuts: [
    {
      'btn': 'rounded-lg transition active:scale-[0.97] border-transparent',
      'btn-default': 'bg-gray-300 text-black hover:bg-gray-200 shadow-gray-300/40',
    },
  ],
  presets: [presetUno(),presetIcons()],
})
