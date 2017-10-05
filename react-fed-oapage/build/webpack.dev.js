const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.base');
const config = require('../config');

process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);

const env = process.env.NODE_ENV;

let devConfig

if (env === 'development'){
  devConfig = Object.assign(base,{
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor','manifest']
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  });
  devConfig.module.rules.push(
    {
      test: /\.css$/,
      use: ['style-loader','css-loader']
    }
  );
  devConfig.output.publicPath = 'http://127.0.0.1:8080/';
  devConfig.entry = Object.assign({
    index: [
      'webpack-dev-server/client?http://127.0.0.1:8080/',
      'webpack/hot/dev-server'
    ]
  },devConfig.entry);
}

module.exports = devConfig;