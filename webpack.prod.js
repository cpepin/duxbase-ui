const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new CompressionPlugin(), new BundleAnalyzerPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});
