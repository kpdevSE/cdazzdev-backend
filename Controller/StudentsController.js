const Students = require("../Models/Students");

const getStudents = async (req, res) => {
  try {
    const { name, email, age, course } = req.body;
    if (!name || !email || !age || !course) {
      res.status(400).json("input feild cant be empty");
    } else {
      const newData = await Students.create({
        name: name,
        email: email,
        age: age,
        course: course,
      });
      return newData;
    }
  } catch (error) {
    res.status(400).json({
      Message: "Bad Request",
    });
  }
};

const displayStudents = async (req, res) => {
  try {
    const data = await Students.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({
      Message: "Error something went wrong",
    });
  }
};

const displayStudentById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Students.findById(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({
      Message: "Error",
    });
  }
};

const studentUpdate = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const updateUser = await Students.findByIdAndUpdate(id, body);
    res.status(200).json("Data update successfully");
  } catch (err) {
    res.status(400).json({
      Message: "Error",
    });
  }
};

const deleteStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUser = await Students.findByIdAndDelete(id);
    res.status(200).json("Data Deleted successfully");
  } catch (err) {
    res.status(400).json("Data deleted unsuccessfully");
  }
};

module.exports = {
  getStudents,
  displayStudents,
  displayStudentById,
  studentUpdate,
  deleteStudent,
};
