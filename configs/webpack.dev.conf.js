const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TargetFile = path.resolve(__dirname, '..', 'src', 'index.md');
const OutputPath = path.resolve(__dirname, '..', 'dist');

const LoaderPath = path.resolve(__dirname, '..', 'loaders');
const MarkdownLoader = path.resolve(LoaderPath, 'marked.js');
const IFFELoader = path.resolve(LoaderPath, 'iffe.js');

const MarkdownToHtmlPlugin = require('../plugins/markdown-to-html');

const MarkdownRuleRegex = /\.md$/;

module.exports = {
  mode: 'development',
  entry: TargetFile,
  output: {
    filename: 'index.[hash].js',
    path: OutputPath,
  },
  resolveLoader: {
    modules: ['node_modules', LoaderPath],
  },
  module: {
    rules: [
      {
        test: MarkdownRuleRegex,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: IFFELoader,
          },
          {
            loader: MarkdownLoader,
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MarkdownToHtmlPlugin(),
    new HtmlWebpackPlugin(),
  ],
};
