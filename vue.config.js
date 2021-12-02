const path = require('path')

module.exports = {
  devServer: {
    port: 3001,
    host: process.env.VUE_APP_DOMIN,
    allowedHosts: [
      process.env.VUE_APP_DOMIN
    ]
    // proxy: {
    //   '/dev': {
    //     target: process.env.VUE_APP_PROXY_URL,
    //     pathRewrite: {
    //       '^/dev': '/v1'
    //     }
    //   }
    // }
  },
  css: {
    loaderOptions: {
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: '@import "~@/assets/scss/variable.scss";'
      },
      sass: {
        implementation: require('sass') // This line must in sass option
      },
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
