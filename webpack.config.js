/*eslint-disable */
var path = require('path');

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
