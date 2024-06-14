const Course = require("../Models/Course");

const getCourses = async (req, res) => {
  try {
    const { name, price, duration, description } = req.body;
    if (!name || !price || !duration || !description) {
      res.status(400).json("input feild cant be empty");
    } else {
      const newData = await Course.create({
        name: name,
        price: price,
        duration: duration,
        description: description,
      });
      return newData;
    }
  } catch (error) {
    res.status(400).json({
      Message: "Bad Request",
    });
  }
};

const displayCourses = async (req, res) => {
  try {
    const data = await Course.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({
      Message: "Error something went wrong",
    });
  }
};

const displaCoursesById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Course.findById(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({
      Message: "Error",
    });
  }
};

const updateCourse = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const updateUser = await Course.findByIdAndUpdate(id, body);
    res.status(200).json("Data update successfully");
  } catch (err) {
    res.status(400).json({
      Message: "Error",
    });
  }
};

const deleteCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUser = await Course.findByIdAndDelete(id);
    res.status(200).json("Data Deleted successfully");
    Students;
  } catch (err) {
    res.status(400).json("Data deleted unsuccessfully");
  }
};

module.exports = {
  getCourses,
  displayCourses,
  displaCoursesById,
  updateCourse,
  deleteCourse,
};
