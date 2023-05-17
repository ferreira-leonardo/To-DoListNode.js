const express = require("express");
const path = require("path");
const routes = require("./src/routers/router");
const conectToDB = require("./src/database/db")
const app = express();

conectToDB()

// configura o motor de visualização e o caminho das views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.urlencoded({ extended: true }));

// config json response
app.use(express.json())

app.use(express.static(path.join(__dirname, "src/public")));
app.use(routes);

module.exports = app;
