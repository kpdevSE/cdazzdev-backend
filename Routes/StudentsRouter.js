const express = require("express");
const router = express.Router();

const {
  getStudents,
  displayStudents,
  displayStudentById,
  studentUpdate,
  deleteStudent,
} = require("../Controller/StudentsController");

router.post("/save", getStudents);
router.get("/get-students", displayStudents);
router.get("/get-student/:id", displayStudentById);
router.put("/student-update/:id", studentUpdate);
router.delete("/delete-student/:id", deleteStudent);

module.exports = router;
