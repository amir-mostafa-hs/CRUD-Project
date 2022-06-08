const express = require("express");
require("dotenv").config();
const axios = require("axios");
const runJsonServer = require("./data/runJsonServer");

const app = express();
runJsonServer();

app.get("/", async (req, res) => {
  const data = await axios.get("http://localhost:8080/data");
  res.send(data.data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server run in port:", PORT);
});
