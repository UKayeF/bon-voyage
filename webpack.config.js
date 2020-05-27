var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  //devtool: 'eval',
  entry: [
    //  'react-hot-loader/patch',
    //  'webpack-dev-server/client?http://localhost:3000',
    //  'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
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
    new CopyWebpackPlugin(
      {
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
        ],
      },
    ),
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
