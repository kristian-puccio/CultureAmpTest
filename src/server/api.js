const express = require("express");
const indexData = require("./data/index.json");

const router = express.Router();

const Error404 = {
  message: "File not found",
};

router.get("/", (req, res) => {
  res.json(indexData);
});

router.get("/survey_results/:id.json", (req, res) => {
  const id = req.params.id;
  try {
    const data = require(`./data/survey_results/${id}.json`);
    res.json(data);
  } catch (error) {
    res.status(404).json(Error404);
  }
});

router.use((req, res, next) => {
  res.status(404).json(Error404);
});

module.exports = router;
