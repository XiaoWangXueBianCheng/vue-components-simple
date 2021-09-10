var path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.assetsPath = function (__path) {
  return path.posix.join('theme_package', __path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap,
      url: true
    }
  }

  var postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader, postcssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return loaders
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less', {
      lessOptions: {
        javascriptEnabled: true
      }
    }),
    sass: generateLoaders('sass', {
      indentedSyntax: true,
      prependData: '@import "~@/assets/scss/variable.scss";'
    }),
    scss: generateLoaders('sass', {
      prependData: '@import "~@/assets/scss/variable.scss";'
    }),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      loader = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          esModule: false,
          publicPath: '../'
        }
      }, ...loader]
    }
    if (extension === 'css' || extension === 'scss' || extension === 'less') {
      loader.unshift('style-loader')
    }
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.getNodeEnv = function () {
  const NODE_ENV = process.env.NODE_ENV
  return NODE_ENV || 'production'
}
