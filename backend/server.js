const express = require("express");
const app = express();
port = 3000;

app.get("/", (req, res) => {
  res.send("Server alive");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
