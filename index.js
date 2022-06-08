const express = require("express");
require("dotenv").config();
const runJsonServer = require("./data/runJsonServer");
const crud = require("./routes/crud");

const app = express();
runJsonServer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello friends");
});

app.use("/data", crud);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server run in port:", PORT);
});
