var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        loaders: ['react-hot', 'babel'],
        // query: {
        //   presets: ['es2015', 'react']
        // }
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, 'client'),
        exclude: /node_modules/
      }
    ],
  },
  devtools: 'source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
