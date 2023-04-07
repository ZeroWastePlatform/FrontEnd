const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/index.tsx",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(jpg|gif|png|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                // publicPath: "./dist/",
                name: "[name].[ext]",
                outputPath: "images",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: `빌드 날짜: ${new Date().toLocaleString()}`,
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.png",
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [{ from: "./public/_redirects", to: path.join(__dirname, "build") }],
      }),
      new Dotenv({ systemvars: true }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "build"),
      },
      port: 8080,
      open: true,
      client: {
        overlay: true,
        progress: true,
      },
      historyApiFallback: true,
    },
    output: {
      publicPath: "/",
      path: path.join(__dirname, "build"),
      filename: "[name].js",
    },
  };
};
