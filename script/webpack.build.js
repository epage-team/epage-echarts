const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const pkg = require('../package.json')

const banner = `epage-echarts v${pkg.version}
(c) 2020-present Chengzi
Released under the MIT License.`

const webpackConfig = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    'epage-echarts': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
    filename: '[name].min.js',
    library: 'EpageEcharts',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    iview: 'iview',
    vuex: {
      root: 'Vuex',
      commonjs: 'vuex',
      commonjs2: 'vuex',
      amd: 'vuex'
    },
    echarts: 'echarts',
    vuedraggable: 'vuedraggable',
    epage: {
      root: 'Epage',
      commonjs: 'epage',
      commonjs2: 'epage',
      amd: 'epage'
    },
    'epage-iview': {
      root: 'EpageIview',
      commonjs: 'epage-iview',
      commonjs2: 'epage-iview',
      amd: 'epage-iview'
    },
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      parallel: true,
      sourceMap: false,
      uglifyOptions: {
        ecma: 8,
        warnings: false
      }
    })]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(__dirname, '../dist')
    }),
    new webpack.BannerPlugin(banner),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './examples/index.html',
    //   inject: true
    // }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
})

if (process.env.npm_config_report) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
