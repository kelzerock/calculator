const buildLoaders = () => {
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  };
  const loaders = [scssLoader];

  return loaders;
};

module.exports = { buildLoaders };
