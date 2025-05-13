const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("users server is running");
});

const users = [
  { id: 1, name: "khaled", email: "khaled@gmail.xom" },
  { id: 2, name: "aziz", email: "aziz@gmail.xom" },
  { id: 3, name: "zaki", email: "zaki@gmail.xom" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("data received");

  const newUser = req.body;
  newUser.id = users.length + 1;

  users.push(newUser);

  res.send(newUser);
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`user server is running at ${port}`);
});
