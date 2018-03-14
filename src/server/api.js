const express = require("express");
const indexData = require("./data/index.json");

const router = express.Router();

router.get("/", function(req, res) {
  res.json(indexData);
});

router.get("/survey_results/:id.json", function(req, res) {
  const id = req.params.id;
  const data = require(`./data/survey_results/${id}.json`);
  res.json(data);
});

module.exports = router;
