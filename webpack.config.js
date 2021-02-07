const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.ts',
  },
  devServer: { contentBase: 'dist-code' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.handlebars',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        include: [path.resolve(__dirname, 'src/assets/img')],
        use: ['file-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [path.resolve(__dirname, 'src/assets/fonts')],
        use: ['file-loader'],
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader',
        query: { inlineRequires: '/img/' },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'sass-loader', //1. Turns sass into css
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.handlebars', '.png'],
  },
}
