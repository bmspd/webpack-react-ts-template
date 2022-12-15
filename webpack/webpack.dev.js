const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('DEVNAME'),
    }),
    new ReactRefreshWebpackPlugin(),
    new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }),
  ],
}
