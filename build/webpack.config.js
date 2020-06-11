const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ROOT = path.resolve(__dirname);

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    //React使用react-Router时多级路由刷新时报404的问题
    publicPath: '/',
    sourceMapFilename: '[name].bundle.map.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx)?$/, // 支持ts, tsx
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              emitError: true
            }
          }
        ]
      },
      { enforce: 'pre', test: /\.ts[x]$/, loader: 'source-map-loader' },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 20
            }
          }
        ]
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    stats: 'errors-only',
    compress: false,
    host: 'localhost',
    port: 8081,
    historyApiFallback: true,
    hot: true,
    open: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.png'],
    alias: {
      '@': ROOT + '/src'
    }
  },
  plugins: [
    new CheckerPlugin(),
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};