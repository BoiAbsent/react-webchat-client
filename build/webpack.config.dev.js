const path = require('path')
// const webpack  = require('webpack')
const httpWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  mode: 'development',
  plugins: [
    new httpWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          plugins: [
            [
              '@babel/plugin-transform-react-jsx'
            ]
          ]
        },
      },
    ]
  },
  devServer: {
    port: 8888
  }
}