const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT = path.resolve(__dirname, '../');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
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
        test: /\.(js|ts|tsx|jsx)?$/,
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
      {
        test: /\.(css|less)$/,
        use: [
          !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true, // contaion .map file, use extract-text-webpack-plugin handle
              importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            }
          },
          'resolve-url-loader', // 解决样式中的url引用相对路径不会自动变化的问题。
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true //antd styles dynamic import must true
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|bmp|svg|png|webp|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '8192',
              name: '[name].[ext]?[hash]',
              outputPath: function (fileName) {
                return 'static/images/' + fileName;
              },
              publicPath: 'static/images/'
            }
          },
          {
            loader: 'image-webpack-loader', //压缩图片
            options: {
              bypassOnDebug: isProd
            }
          }
        ]
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].min.[ext]',
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: 'static/fonts/', //编译目录而已（/build/js/），不能用于html中的js引用。
              outputPath: 'static/fonts/' //虚拟目录，自动指向path编译目录（/assets/ => /build/js/）。html中引用js文件时，必须引用此虚拟路径.
            }
          }
        ]
      }
    ]
  },
  devtool: isProd ? false : 'inline-source-map',
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
    extensions: ['.ts', '.tsx', '.js', '.json', '.png', '.less'],
    alias: {
      '@': ROOT + '/src/components',
      '@utils': ROOT + '/src/utils',
      '@models': ROOT + '/src/models',
      '@views': ROOT + '/src/views',
      '@router': ROOT + '/src/router',
      '@types': ROOT + '/src/types',
      '@assets': ROOT + '/src/assets',
      '@constants': ROOT + '/src/constants'
    }
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
    new HardSourceWebpackPlugin(),
    new HardSourceWebpackPlugin.ExcludeModulePlugin([
      {
        // HardSource works with mini-css-extract-plugin but due to how
        // mini-css emits assets, assets are not emitted on repeated builds with
        // mini-css and hard-source together. Ignoring the mini-css loader
        // modules, but not the other css loader modules, excludes the modules
        // that mini-css needs rebuilt to output assets every time.
        test: /mini-css-extract-plugin[\\/]dist[\\/]loader/
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css', //根据entry中的名字来命名，是静态的。
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css' //chunkFilename是构建应用的时候生成的（用户也可以指定名字）
    })
  ]
};
