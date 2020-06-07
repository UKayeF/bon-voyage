var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    //  new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'template.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'styles',
          to: 'styles',
        },
        {
          from: 'sprites',
          to: 'sprites',
        },
        {
          from: 'scripts',
          to: 'scripts',
        },
        {
          from: 'manifest.json',
          to: 'manifest.json',
        },
        {
          from: 'background',
          to: 'background',
        },
        {
          from: 'img/outer-space-mini.jpg',
          to: 'img/outer-space-mini.jpg',
        },
      ],
    }),
    new GenerateSW({
      swDest: 'workbox-sw.js',
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.map$/],
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
    ],
  },
};
