import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  shortcuts: [
    {
      'btn': 'rounded-lg transition active:scale-[0.97] border-transparent',
      'btn-default': 'bg-gray-300 text-black hover:bg-gray-200 shadow-gray-300/40',
    },
  ],
  presets: [presetUno()],
})
