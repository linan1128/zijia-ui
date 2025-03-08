import { defineConfig, definePreset, Preset, presetIcons, presetUno } from 'unocss'

export default definePreset(() => {
  return {
    name: 'zijia-preset',
    rules: [
      // ...
    ],
    variants: [
      // ...
    ],
    presets: [presetUno(), presetIcons()],
    // it supports most of the configuration you could have in the root config
  }
})
