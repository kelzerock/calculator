const buildDevserver = (options) => {
  const config = {
    static: {
      directory: options.paths.public,
    },
    port: options.port,
  };

  return config;
};

module.exports = { buildDevserver };
