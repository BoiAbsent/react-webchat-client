const path = require('path')
// const webpack  = require('webpack')
const httpWebpackPlugin = require('html-webpack-plugin')

const path_src = path.resolve(__dirname, '../src')

module.exports = {
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css'],
    // alias: {
    //   '@': path_src
    // }
  },
  plugins: [
    new httpWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
        // loader: 'babel-loader',
        // options: {
        //   plugins: [
        //     [
        //       '@babel/plugin-transform-react-jsx'
        //     ]
        //   ]
        // },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader']
        // loader: 'babel-loader',
        // options: {
        //   plugins: [
        //     [
        //       '@babel/plugin-transform-react-jsx'
        //     ]
        //   ]
        // },
      },
    ]
  },
  devServer: {
    port: 8888,
    contentBase: path.resolve(__dirname, '../dist')
  }
}