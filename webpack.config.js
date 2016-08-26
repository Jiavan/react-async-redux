var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: {
    index: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      './src/index.js',
    ]
  },
  output: {
    path: './build',
    filename: '[name].js',
  },
  // devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react'],
      },
    }, {
      test: /\.less$/,
      loader: 'style!css!less',
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ]
};
