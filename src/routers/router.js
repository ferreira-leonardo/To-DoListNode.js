const TaskController = require("../controllers/TaskController");
const routes = require("express").Router();

routes.get("/", TaskController.getAll);

module.exports = routes;
