var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

var relativePublicPath = 'assets/';

var baseConfig = require('./base');
baseConfig.output.publicPath = relativePublicPath;

var config = _.merge({
  entry: path.join(__dirname, '../src/components/run'),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: path.join(__dirname, '/../src')
});

module.exports = config;
