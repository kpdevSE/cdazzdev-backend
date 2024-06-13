const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 5000;
const connection = require("../backend/Config/Config");
const routes = require("../backend/Routes/List");

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

const studentRouter = require("./Routes/StudentsRouter");
app.use("/api/v1/student", studentRouter);

app.get("*", (req, res) => {
  res.status(404).json("Page not found");
});

connection();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
