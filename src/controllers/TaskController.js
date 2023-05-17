const TaskModel = require("../models/TaskModel");

const getAllTasks = async (req, res) => {
  try {
    const taskList = await TaskModel.find({});
    return res.render("index", { taskList });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task) {
    return res.redirect("/");
  }

  try {
    await TaskModel.create(task);
    return res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
};
