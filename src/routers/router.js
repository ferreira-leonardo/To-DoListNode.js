const TaskController = require("../controllers/TaskController");
const routes = require("express").Router();

routes.get("/", TaskController.getAllTasks);

routes.post('/create', TaskController.createTask)

module.exports = routes;