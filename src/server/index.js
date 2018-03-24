const express = require("express");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("../../webpack.config");
const api = require("./api");

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

const compiler = webpack(webpackConfig);

app.use(
  middleware(compiler, {
    // webpack-dev-middleware options
    hot: true,
    // noInfo: true,
    // publicPath: "http://0.0.0.0:5002/assets/",
  })
);

const wphmw = webpackHotMiddleware(compiler);
app.use(wphmw);

// this is where we hook our rest api up to.
app.use("/api", api);

// all other routes are dealt with via the front-end router.
// see: src/client/Routes.tsx
app.get("*", (req, res) =>
  res.render("index", {
    title: "Culture Amp",
  })
);

app.listen(3000, () => console.log("Listening on port 3000"));
