const eslintPlugin = require('vite-plugin-eslint')

module.exports = {
  pluginOptions: {
    baseUrl: '/',
    vite: {
      /**
       * Plugin[]
       * @default []
       */
      plugins: [eslintPlugin.default({
        throwOnWarning: false,
        throwOnError: false
      })], // other vite plugins list, will be merge into this plugin\'s underlying vite.config.ts
      /**
       * Vite UserConfig.optimizeDeps options
       * recommended set `include` for speedup page-loaded time, e.g. include: ['vue', 'vue-router', '@scope/xxx']
       * @default {}
       */
      optimizeDeps: {
        include: []
      },
      /**
       * lint code by eslint
       * @default false
       */
      disabledLint: true
    }
  }
}
