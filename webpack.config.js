'use strict';

var config = require('config');
var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HOTLOAD = config.has('webpack.hotload') && config.get('webpack.hotload');

var loaders = {
  es6: {
    test: /\.(es6|jsx)$/,
    loaders: ['babel?stage=0'] },

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
  entry: ['./client/index.es6'],
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
    alias: {
        app: path.join(__dirname, "client"),
        components: path.join(__dirname, "client", "components"),
        entities: path.join(__dirname, "client", "entities"),
        systems: path.join(__dirname, "client", "systems"),
        styles: path.join(__dirname, "client", "styles")}
  }
};

if (HOTLOAD) {
  webpackConfig.devtool = 'eval-source-map'; // This is not as dirty as it looks. It just generates source maps without being crazy slow.
  webpackConfig.entry = [
    'webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/dev-server',
    './client/index.es6'
  ];

  webpackConfig.output.publicPath = 'http://localhost:8888/public/build/';
  loaders.es6.loaders = ['react-hot', 'babel?stage=0&optional=runtime'];
  loaders.less.loader = 'style!css!autoprefixer!less';

  webpackConfig.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ];
}

module.exports = webpackConfig;
