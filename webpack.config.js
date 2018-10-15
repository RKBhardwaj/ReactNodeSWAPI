require('babel-polyfill');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevMode = process.env.NODE_ENV !== 'production';
const babelLoader = {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  };

module.exports = {
    entry: {
        index: ['babel-polyfill', './client/index.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            exclude: /node_modules/
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                babelLoader
            ]
        },{
            test: /\.scss$/,
            use: [
                isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDevMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css',
        }),
        new webpack.ProvidePlugin({
          React: 'react'
        }),
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ],
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        https: false,
        inline: true,
        port: 5001,
        proxy: {
            '/api/': {
              target: 'http://localhost:5000',
              secure: false
            }
          }
    }
}