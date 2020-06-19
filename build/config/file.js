const isProd = process.env.NODE_ENV === 'production';

module.exports = [
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
];
