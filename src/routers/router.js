const TaskController = require("../controllers/TaskController");
const routes = require("express").Router();

routes.get("/", TaskController.getAllTasks);

routes.post("/create", TaskController.createTask);

routes.get("/getbyid/:id/:metod", TaskController.getById);

routes.post("/updatetask/:id", TaskController.updateTask);

routes.get("/deleteonetask/:id", TaskController.deleteOneTask);

routes.get("/check/:id", TaskController.taskCheck);

module.exports = routes;
