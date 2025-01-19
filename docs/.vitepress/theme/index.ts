import type { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme'
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import ComponentPreview from '../components/ComponentPreview.vue'
// import './style.css'
import '@unocss/reset/normalize.css'
import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  // eslint-disable-next-line unused-imports/no-unused-vars
  enhanceApp({ app, router, siteData }) {
    app.component('ComponentPreview', ComponentPreview)
  },
} satisfies Theme
