const express = require("express");
const fs = require("fs");
const { spawnSync } = require("child_process");

const app = express();

const port = 5000;

app.use(express.json());

// API endpoint for metrics
app.get("/api/metrics", (req, res) => {
  // Retrieve metrics data from a JSON file (mock data)
  const metricsData = fs.readFileSync("metrics.json", "utf8");
  res.json(JSON.parse(metricsData));
});

app.get("/api/predictions", (req, res) => {
  // Run the Python script to generate predictions data
  const pythonProcess = spawnSync("python", ["predictions.py"]);
  const predictionsData = fs.readFileSync("predictions.json", "utf8");
  res.json(JSON.parse(predictionsData));
});

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
