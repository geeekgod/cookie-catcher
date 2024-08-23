const express = require("express");

const app = express();

// add cors

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/receive", (req, res) => {
  console.log("Received API request");
  const queryParams = req.query;
  console.log(queryParams);
  res.send("Received API request");
});

app.listen(4444, () => {
  console.log("Server is running on port 4444");
});
