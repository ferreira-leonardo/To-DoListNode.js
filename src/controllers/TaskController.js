const TaskModel = require("../models/TaskModel");

let message = "";
let type = "";

const getAllTasks = async (req, res) => {
  try {
    setTimeout(() => {
      message = "";
    }, 2000);
    const taskList = await TaskModel.find({});
    return res.render("index", {
      task: null,
      taskDelete: null,
      taskList,
      message,
      type,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    message = "Insira um texto antes de adicionar a tarefa";
    type = "danger";
    return res.redirect("/");
  }

  try {
    await TaskModel.create(task);
    message = "Tarefa criada com sucesso";
    type = "success";
    return res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const taskList = await TaskModel.find();
    if (req.params.metod == "update") {
      const task = await TaskModel.findOne({ _id: req.params.id });
      return res.render("index", {
        task,
        taskDelete: null,
        taskList,
        message,
        type,
      });
    } else {
      const taskDelete = await TaskModel.findOne({ _id: req.params.id });
      return res.render("index", {
        task: null,
        taskDelete,
        taskList,
        message,
        type,
      });
    }
  } catch (error) {
    console.log("deu ruim");
    res.status(500).send({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = req.body;
    await TaskModel.updateOne(
      {
        _id: req.params.id,
      },
      task
    );
    message = "Tarefa atualizada com sucesso";
    type = "success";
    return res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    await TaskModel.deleteOne({ _id: req.params.id });
    message = "Tarefa apagada com sucesso";
    type = "success";
    return res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const taskCheck = async (req, res) => {
  try {
    const task = await TaskModel.findOne({ _id: req.params.id });

    task.check ? (task.check = false) : (task.check = true);

    await TaskModel.updateOne(
      {
        _id: req.params.id,
      },
      task
    );
    return res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateTask,
  deleteOneTask,
  taskCheck,
};