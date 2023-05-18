const TaskModel = require("../models/TaskModel");

const getAllTasks = async (req, res) => {
  try {
    const taskList = await TaskModel.find({});
    return res.render("index", {task: null, taskDelete: null, taskList });
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

const getById = async (req, res) => {
  try {
    const taskList = await TaskModel.find()
    if(req.params.metod == 'update') {
      const task = await TaskModel.findOne({ _id: req.params.id });
      return res.render("index", { task, taskDelete: null, taskList });
    } else{
      const taskDelete  = await TaskModel.findOne({ _id: req.params.id });
      return res.render("index", { task: null, taskDelete, taskList });
    }

  } catch (error) {
    console.log('deu ruim')
    res.status(500).send({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  const task = req.body

  if (!task) {
    return res.redirect("/");
  }

  try {
    await TaskModel.updateOne({
      _id: req.params.id}, task)
    return res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }

}

const deleteOneTask = async (req, res) => {
  try {
    await TaskModel.deleteOne({_id: req.params.id},)
    return res.redirect("/")
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateTask,
  deleteOneTask
};
