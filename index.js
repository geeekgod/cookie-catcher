const express = require("express");
const fs = require("fs");

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
  // Store the Query Params in a file with Timestamp
  const fileString = `\n=========================
Timestamp: ${new Date().toISOString()}
Query Params: ${JSON.stringify(queryParams)}
=========================\n`;

  fs.appendFile("query-logs.txt", fileString, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send("Received API request");
});

app.listen(4444, () => {
  console.log("Server is running on port http://localhost:4444");
});
