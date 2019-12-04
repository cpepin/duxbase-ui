const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common');

const copiedFiles = process.env.CORDOVA ? ['public/initCordova.js'] : ['public/_redirects'];

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CompressionPlugin(),
    new CopyPlugin(copiedFiles),
    /* , new BundleAnalyzerPlugin() */
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});
