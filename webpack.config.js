'use strict';

var config = require('config');
var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HOTLOAD = config.has('webpack.hotload') && config.get('webpack.hotload');

var loaders = {
  es6: {
    test: /\.(es6|jsx)$/,
    loaders: ['babel?experimental'] },

  json: { test: /\.json$/, loaders: ['json'] },

  less: {
    test: /\.less$/,
    exclude: /\.useable\.less$/,
    loader:
      ExtractTextPlugin.extract(
        'css!autoprefixer!less', { publicPath: './public/build/' }) },

  lessUsable: {
    test: /\.useable\.less$/, loader: "style/useable!css!autoprefixer!less"
  }
}

var webpackConfig = {
  cache: true,
  entry: ['./client/index.js'],
  module: {
    loaders: [
      loaders.es6,
      loaders.json,
      loaders.less,
      loaders.lessUsable ] },
  output: {
    path: path.join(__dirname, '/public/build/'),
    publicPath: '/public/',
    filename: 'client.js' },
  plugins: [
    // Adds support for 'require(*.less)' from '.jsx' files
    new ExtractTextPlugin(
        'style', 'main.css', { disable: false, allChunks: true })],
  resolve: {
    extensions: ['', '.js', '.jsx', '.es', '.es6'],
    alias: {app: path.join(__dirname, "client")}
  }
};

if (HOTLOAD) {
  webpackConfig.devtool = 'eval-source-map'; // This is not as dirty as it looks. It just generates source maps without being crazy slow.
  webpackConfig.entry = [
    'webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/dev-server',
    './client/index.js'
  ];

  webpackConfig.output.publicPath = 'http://localhost:8888/public/build/';
  loaders.es6.loaders = ['react-hot', 'babel?experimental&optional=runtime'];
  loaders.less.loader = 'style!css!autoprefixer!less';

  webpackConfig.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ];
}

module.exports = webpackConfig;
