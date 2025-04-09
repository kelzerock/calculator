const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const webpackConfigurator = (env) => {
  const { mode } = env;
  const config = {
    mode: mode === 'prod' ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      filename: 'main-[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'public'),
      },
      port: 8000,
    },
  };

  return config;
};

export default webpackConfigurator;
