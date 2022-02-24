const path = require('path')

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '>>': path.resolve(__dirname, 'tests/'),
    },
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'vquery.js',
    library: 'vQuery',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    umdNamedDefine: true,
    clean: true,
  },
  mode: 'development',
}
