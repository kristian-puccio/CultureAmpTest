const express = require("express");
const api = require("./api");

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => res.render("index", { title: "Culture Amp" }));

app.use("/api", api);

app.listen(3000, () => console.log("Listening on port 3000"));
