const path = require('path');
const { buildConfig } = require('./webpack-config/build-config');

const webpackConfigurator = (env) => {
  const { mode } = env;
  const options = {
    mode,
    paths: {
      build: path.resolve(__dirname, 'build'),
      public: path.resolve(__dirname, 'public'),
    },
    port: 8000,
  };

  return buildConfig(options);
};

module.exports = webpackConfigurator;
