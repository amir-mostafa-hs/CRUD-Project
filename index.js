const express = require("express");
// import json server starter function
const runJsonServer = require("./data/runJsonServer");
// import route file
const crud = require("./routes/crud");

const app = express();
// run json server
runJsonServer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello friends");
});

// add route
app.use("/data", crud);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server run in port:", PORT);
});
