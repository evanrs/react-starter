'use strict';

var config = require('config');
var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HOTLOAD = config.has('webpack.hotload') && config.get('webpack.hotload');

var loaders = {
  transform: {
    test: /\.(es6|jsx)$/, loader: 'transform?brfs'},

  es6: {
    test: /\.(es6|jsx)$/,
    loaders: ['babel?experimental'] },

  file: { test: /\.png$/, loaders: ['url?limit=10000&mimetype=image/png'] },
  json: { test: /\.json$/, loaders: ['json'] },

  less: {
    test: /\.less$/,
    exclude: /\.useable\.less$/,
    loader:
      ExtractTextPlugin.extract(
        'css!autoprefixer!less', { publicPath: './public/build/' }) },


  lessUsable: {
    test: /\.useable\.less$/, loader: "style/useable!css!autoprefixer!less"
  },

  sass: {
    test: /\.(sass|scss)$/,
    exclude: /\.useable\.(sass|scss)$/,
    loader:
      ExtractTextPlugin.extract(
        'css!autoprefixer!sass'  + '?' +
            "includePaths[]=" + (path.resolve(__dirname, "./rubix/node_modules")) + "&" +
            "includePaths[]=" + (path.resolve(__dirname, "./rubix/global"))
      ,  { publicPath: './public/build/' }) },

  sassUsable: {
    test: /\.useable\.(sass|scss)$/, loader: "style/useable!css!autoprefixer!sass"
  }
}

var webpackConfig = {
  cache: true,
  entry: ['./client/index.es6'],
  module: {
    loaders: [
      loaders.transform,
      loaders.es6,
      loaders.file,
      loaders.json,
      loaders.less,
      loaders.lessUsable,
      loaders.sass,
      loaders.sassUsable ] },
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
        client: path.join(__dirname, "client"),
        server: path.join(__dirname, "server"),
        rubix: path.join(__dirname, "rubix")}
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
  loaders.es6.loaders = ['react-hot', 'babel?experimental&optional=runtime'];
  loaders.less.loader = 'style!css!autoprefixer!less';
  loaders.sass.loader = 'style!css!autoprefixer!sass'   + '?' +
    "includePaths[]=" + (path.resolve(__dirname, "./rubix/node_modules")) + "&" +
    "includePaths[]=" + (path.resolve(__dirname, "./rubix/global"));

  webpackConfig.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ];
}

module.exports = webpackConfig;
