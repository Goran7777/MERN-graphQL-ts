const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env) => {
  return {
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        components: path.resolve(__dirname, './src/components/'),
      },
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'build.js',
      publicPath: '/',
    },
    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:9000',
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
          },
          exclude: /dist/,
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.development': !!(env && !env.production),
      }),
      new ForkTsCheckerWebpackPlugin({ eslint: true }),
    ],
    devtool: 'inline-source-maps',
  };
};
