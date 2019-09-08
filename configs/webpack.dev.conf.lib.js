const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TargetFileOfCompile = path.resolve(
  __dirname,
  '..',
  'components/index.js',
);
const OutputOfDistFolder = path.resolve(__dirname, '..', 'dist');
// const TargetHtmlTemplate = path.resolve(__dirname, '..', 'template/index.html');

const TargetFileOfOutput = 'lambda.js';
const LibraryName = 'Lambda';

// const HtmlTemplateConfig = Object.assign(
//   {},
//   // 查询 inject 字段
//   { inject: 'head', template: TargetHtmlTemplate },
// );

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  entry: TargetFileOfCompile,

  output: {
    filename: TargetFileOfOutput,
    path: OutputOfDistFolder,
    libraryTarget: 'umd',
    globalObject: 'window',
    library: LibraryName,
  },

  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin(HtmlTemplateConfig),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
