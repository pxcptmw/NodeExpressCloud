require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Test Change Hello World! On Cloud อยากลาออก :D");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
