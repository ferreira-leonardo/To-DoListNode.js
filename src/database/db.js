const mongoose = require("mongoose");

const conectToDB = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:17200118@databasecenter.r6l2xvh.mongodb.net/?retryWrites=true&w=majority",
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
