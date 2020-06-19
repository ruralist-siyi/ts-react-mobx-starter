const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV === 'development';
const isReport = process.env.REPORT === 'true';

const plugins = [
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
];

isReport && plugins.push(new BundleAnalyzerPlugin());
isDev && plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = plugins;
