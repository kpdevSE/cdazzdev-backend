const express = require("express");
const router = express.Router();

const {
  getCourses,
  displayCourses,
  displaCoursesById,
  updateCourse,
  deleteCourse,
} = require("../Controller/CourseController");

router.post("/save", getCourses);
router.get("/get-courses", displayCourses);
router.get("/get-course/:id", displaCoursesById);
router.put("/course-update/:id", updateCourse);
router.delete("/delete-course/:id", deleteCourse);

module.exports = router;
