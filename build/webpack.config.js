const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const isProd = process.env.NODE_ENV === 'production';

const styleConfig = require('./config/style');
const scriptConfig = require('./config/script');
const fileConfig = require('./config/file');
const serverConfig = require('./config/server');
const pluginConfig = require('./config/plugin');

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
    rules: [...scriptConfig, ...styleConfig, ...fileConfig]
  },
  devtool: isProd ? false : 'inline-source-map',
  devServer: serverConfig,
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
  plugins: pluginConfig
};
