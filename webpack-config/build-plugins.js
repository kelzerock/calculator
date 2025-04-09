const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPlugins = (options) => {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(options.paths.public, 'index.html'),
    }),
  ];
};

module.exports = { buildPlugins };
