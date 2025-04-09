const { buildPlugins } = require('./build-plugins.js');

const { buildOutputPoint } = require('./build-output-point.js');
const { buildDevserver } = require('./build-devserver.js');
const { buildLoaders } = require('./build-loaders.js');

const buildConfig = (options) => {
  const isProd = options.mode === 'prod';

  const config = {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.js',
    devtool: isProd ? false : 'inline-source-map',
    output: buildOutputPoint(options),
    module: {
      rules: buildLoaders(),
    },
    plugins: buildPlugins(options),
    devServer: buildDevserver(options),
    resolve: {
      extensions: ['.js'],
    },
  };

  return config;
};

module.exports = { buildConfig };
