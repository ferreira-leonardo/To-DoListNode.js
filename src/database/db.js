const mongoose = require("mongoose");
require("dotenv").config();

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

const conectToDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${USER}:${PASSWORD}@databasecenter.r6l2xvh.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDb conectado");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = conectToDB;
