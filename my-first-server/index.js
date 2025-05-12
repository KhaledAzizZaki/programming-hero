const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello from my first server");
});

app.get("/data", (req, res) => {
  res.send("More data coming soon");
});

app.listen(port, () => {
  console.log(`My first server is running on port: ${port}`);
});
