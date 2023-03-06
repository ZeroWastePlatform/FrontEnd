const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const dotenv = require("dotenv");

module.exports = env => {
  const { DEV } = env;
  if (DEV) {
    dotenv.config({ path: "./dev.env" });
  } else {
    dotenv.config({ path: "./.env" });
  }
  console.log(Object.keys(process.env));
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
        // favicon: "./public/favicon.ico",
      }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        // "process.env.API_SERVER": JSON.stringify(process.env.API_SERVER), // env에서 읽은 ip를 저장
        "process.env": JSON.stringify(dotenv.config().parsed),
      }),
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
