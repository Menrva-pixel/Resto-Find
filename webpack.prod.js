/* eslint-disable import/no-unresolved */
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
  ],
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin({
        minify: [
          CssMinimizerPlugin.cssnanoMinify,
          CssMinimizerPlugin.cssoMinify,
          CssMinimizerPlugin.cleanCssMinify,
        ],
        minimizerOptions: {
          preset: [
            'advanced',
          ],
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    },
  },
});
