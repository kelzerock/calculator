const buildLoaders = () => {
  const scssLoader = {
    test: /^(?!.*\.module\.s[ac]ss$).*\.s[ac]ss$/i, // Для файлов SCSS или SASS
    use: ['style-loader', 'css-loader', 'sass-loader'],
  };

  const cssModuleLoader = {
    test: /\.module\.s[ac]ss$/i, // Для CSS-модулей
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            namedExport: false,
            localIdentName: '[name]__[local]___[hash:base64:5]', // Читабельные классы
          },
        },
      },
    ],
  };

  return [scssLoader, cssModuleLoader];
};

module.exports = { buildLoaders };
