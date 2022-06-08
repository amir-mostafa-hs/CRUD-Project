const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is runs on port:", PORT);
});
