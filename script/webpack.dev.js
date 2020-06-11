const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpackConfig = merge(webpackBaseConfig, {
  mode: 'development',
  entry: {
    vendor: './examples/index.js'
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './examples/index.html',
      inject: true
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],
  resolve: {
    // mainFields: ['main:epage', 'main']
  },
  devServer: {
    port: 8084,
    open: true
  }
})

module.exports = webpackConfig
