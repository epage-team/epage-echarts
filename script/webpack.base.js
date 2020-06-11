const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// const epagePath = path.resolve(__dirname, '../node_modules/epage/src')
const scriptPath = [
  path.resolve(__dirname, '../src'),
  path.resolve(__dirname, '../examples')
]

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: scriptPath
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: scriptPath,
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                esmodules: true
              }
            }],
            '@vue/babel-preset-jsx']
        }
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'less-loader',
              options: { javascriptEnabled: true }
            }
          ]
        })
      }, {
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'static/img/[name].[ext]'
        }
      }, {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'static/font/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    symlinks: false,
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  stats: {
    children: false
  }
}
