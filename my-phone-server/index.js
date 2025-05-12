const express = require("express");
var cors = require("cors");
const phone = require("./phones.json");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("My Phone server coming soon11");
});

app.get("/phone", (req, res) => {
  res.send(phone);
});

app.get("/phone/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("i need data for id: ", id);
  const phones = phone.find((phones) => phones.id === id) || {};
  res.send(phones);
});

app.listen(port, () => {
  console.log(`My Phon server is running on port: ${port}`);
});
