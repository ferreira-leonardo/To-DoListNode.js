const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("Servidor iniciado http://localhost:3000");
});
