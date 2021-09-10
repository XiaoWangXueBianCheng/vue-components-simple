const path = require('path')
const version = require('../package.json').version
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const utils = require('./utils')
const entry = require('./entry')

const resolve = dir => path.resolve(__dirname, dir)

function readEnv (mode) {
  const fs = require('fs')
  const dotenv = require('dotenv')
  try {
    // 读取.env.${mode}文件配置
    const file = fs.readFileSync('.env.' + mode)
    const envConfig = dotenv.parse(file)
    try {
      // 读取.env.${mode}.local文件配置
      const fileLocal = fs.readFileSync('.env.' + mode + '.local')
      const envLocalConfig = dotenv.parse(fileLocal)
      if (fileLocal) {
        // 与.env.${mode}文件配置合并并返回
        return Object.assign({}, envConfig, envLocalConfig)
      }
    } catch (err) {
      // 返回.env.${mode}文件配置
      return envConfig
    }
  } catch (err) {
    console.error(err)
  }
}

function formatEnvConf (envConf) {
  for (const key in envConf) {
    if (Object.hasOwnProperty.call(envConf, key)) {
      const element = envConf[key]
      envConf[key] = JSON.stringify(element)
    }
  }
  return envConf
}

module.exports = (env, options) => {
  let envConf = {}
  if (env.mode) {
    envConf = readEnv(env.mode)
    envConf = formatEnvConf(envConf)
  }
  const config = {
    mode: 'production',
    entry: entry,
    output: {
      path: path.resolve(__dirname, './lib'),
      filename: '[name].js',
      libraryTarget: 'commonjs2',
      globalObject: 'this',
      library: 'Ui',
      publicPath: env.mode === 'production'
        ? JSON.parse(envConf.VUE_APP_PUBLIC_PATH)
        : JSON.parse(envConf.VUE_APP_PUBLIC_PATH) + version + '/'
    },
    externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
      },
      vue: 'vue'
    },
    resolve: {
      modules: ['node_modules'],
      alias: {
        '@': resolve('src'),
        vue$: 'vue/dist/vue.runtime.esm.js'
      },
      extensions: [
        '.mjs',
        '.js',
        '.jsx',
        '.vue',
        '.json',
        '.wasm'
      ]
    },
    module: {
      rules: [{
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        include: [resolve('src')],
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'theme_package/img/[name].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'theme_package/media/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      },
      ...utils.styleLoaders({
        extract: true
      })
      ]
    },
    optimization: {
      minimize: true
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': envConf
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: utils.assetsPath('[name].css')
      })
    ]
  }
  return config
  // const smp = new SpeedMeasurePlugin({
  //   disable: env.mode !== 'production'
  // })
  // return smp.wrap(config)
}
