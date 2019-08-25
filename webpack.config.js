const path = require("path");
const webpack = require("webpack");



module.exports = {
  // entry: "./src/index.js",
  entry: ['@babel/polyfill', './src/index.js'],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
              // mozjpeg: {
              //   progressive: true,
              //   quality: 65
              // },
              // // optipng.enabled: false will disable optipng
              // optipng: {
              //   enabled: false,
              // },
              // pngquant: {
              //   quality: '65-90',
              //   speed: 4
              // },
              // gifsicle: {
              //   interlaced: false,
              // },
              // // the webp option will enable WEBP
              // webp: {
              //   quality: 75
              // }
            },
          },
        ],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
