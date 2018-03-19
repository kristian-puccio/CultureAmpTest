const webpack = require("webpack");
const path = require("path");

// This defines how webpack builds our app.
// see https://webpack.js.org/concepts/ for more details.

module.exports = {
  target: "web",

  // TODO: Source maps that are fast to generate but
  devtool: "cheap-module-eval-source-map",

  // TODO: set and explain this
  mode: "development",

  // Allow webpack to find files without having to use an extension.
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },

  // The start of the javascript tree that is our app.
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    path.resolve(__dirname, "src/client/index.tsx"),
  ],

  // This is where our built file will end up and what it will be named.
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    publicPath: "/",
  },

  // These define how we process our files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
              plugins: ["react-hot-loader/babel"],
            },
          },
          "ts-loader",
        ],
      },
    ],
  },

  plugins: [
    // This plugin will cause the relative path of the module to
    // be displayed when HMR is enabled. Suggested for use in development.
    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
