const express = require("express");
const app = express();
const api = require("./api");

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api", api);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
