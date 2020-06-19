const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = [
  {
    test: /\.(css|less)$/,
    exclude: /\.module\.less$/,
    use: [
      !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: true, // contaion .map file, use extract-text-webpack-plugin handle
          importLoaders: 3 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
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
    test: /\.module\.less$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 3,
          modules: {
            mode: 'local',
            exportGlobals: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
            context: path.resolve(__dirname, 'src'),
            hashPrefix: 'my-custom-hash'
          }
        }
      },
      'resolve-url-loader',
      'postcss-loader',
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    ]
  }
];
