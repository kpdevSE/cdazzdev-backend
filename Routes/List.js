const express = require("express");
const router = express.Router();
const {
  getList,
  displayList,
  displayListbyId,
  updateData,
  deleteuser,
} = require("../Controller/Controller");

router.post("/todos/save", getList);
router.get("/todos/display", displayList);
router.get("/todos/display/:id", displayListbyId);
router.put("/todos/update/:id", updateData);
router.delete("/todos/delete/:id", deleteuser);

module.exports = router;
