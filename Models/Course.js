const mongoose = require("mongoose");

const courses = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  duration: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Courses", courses);
