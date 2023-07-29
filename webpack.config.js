const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
  mode: 'development',
  entry: {
    app: './src/index.ts',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  devtool: argv.mode === 'production' ? 'none' : 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: 'node_modules/@webcomponents/webcomponentsjs',
          from: 'webcomponents-loader.js',
          to: 'webcomponents',
        },
        {
          context: 'node_modules/lit',
          from: 'polyfill-support.js',
          to: 'lit',
        },
        {
          context: 'node_modules/lit',
          from: 'polyfill-support.js.map',
          to: 'lit',
        },
        { from: 'src/assets', to: 'assets' },
      ],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        generator: {
          filename: 'assets/styles/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
});
