const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 5000;
const connection = require("../cdazzdev-backend/Config/Config");

app.use(cors());
app.use(bodyParser.json());

const studentRouter = require("./Routes/StudentsRouter");
const courseRouter = require("./Routes/CourseRouter");
app.use("/api/v1/student", studentRouter);
app.use("/api/v2/course", courseRouter);

app.get("*", (req, res) => {
  res.status(404).json("Page not found");
});

connection();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
