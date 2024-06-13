const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(
      "mongodb+srv://kanishkapasindu:dbUserPassword@cluster0.7am3oxl.mongodb.net/"
    )
    .then(() => {
      console.log("DB is connected");
    })
    .catch(() => {
      console.log("DB is not connected");
    });
};
module.exports = connection;
