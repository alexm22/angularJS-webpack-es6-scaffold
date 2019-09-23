module.exports = () => ({
  module: {
    rules: [
      {
        // set webpack to read sass files //
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // set webpack to read any HTML templates created for angularJS components
      { test: /\.html$/, use: ['raw-loader'] },
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  }
});
