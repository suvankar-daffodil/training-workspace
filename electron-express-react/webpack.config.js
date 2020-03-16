const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./app/index.js"
  },
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react",
            [
              "@babel/preset-env",
              {
                targets: {
                  node: "10"
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "file-loader?limit=8192&name=assets/[name].[ext]?[hash]"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),

    new HtmlWebpackPlugin({
      template: "./app/index.html"
    }),
    new CopyWebpackPlugin([
      { from: "./app/favicon.ico" },
      { from: "./app/assets", to: "assets" }
    ])
  ],
  devtool: "eval"
};
