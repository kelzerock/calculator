const buildOutputPoint = (options) => {
  const config = {
    filename: 'main-[contenthash].js',
    path: options.paths.build,
    clean: true,
  };

  return config;
};

module.exports = { buildOutputPoint };
