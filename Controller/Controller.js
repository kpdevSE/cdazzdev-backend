const Model = require("../Models/Model");

const getList = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      res.status(400).json("input feild cant be empty");
    } else {
      const newData = await Model.create({
        name: name,
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

const displayList = async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({
      Message: "Error",
    });
  }
};

const displayListbyId = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Model.findById(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({
      Message: "Error",
    });
  }
};

const updateData = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const updateUser = await Model.findByIdAndUpdate(id, body);
    res.status(200).json("Data update successfully");
  } catch (err) {
    res.status(400).json({
      Message: "Error",
    });
  }
};

const deleteuser = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUser = await Model.findByIdAndDelete(id);
    res.status(200).json("Data Deleted successfully");
  } catch (err) {
    res.status(400).json("Data deleted unsuccessfully");
  }
};

module.exports = {
  getList,
  displayList,
  displayListbyId,
  updateData,
  deleteuser,
};
