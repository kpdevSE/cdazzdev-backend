const mongoose = require("mongoose");

const students = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
  studentId: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Students", students);
