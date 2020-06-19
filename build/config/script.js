module.exports = [
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
  }
];
