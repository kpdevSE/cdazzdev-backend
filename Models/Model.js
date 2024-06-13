const mongoose = require("mongoose");

const todo = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Todo", todo);
