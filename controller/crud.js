const axios = require("axios");

// function for get all data
const getAllData = async (req, res) => {
  try {
    const data = await axios.get("http://localhost:8080/data");
    res.status(200).json(data.data);
  } catch (error) {
    console.error(error);
  }
};

// function for create new data
const createData = async (req, res) => {
  try {
    const newData = req.body;
    console.log(newData);
    const data = await axios.post("http://localhost:8080/data", newData);
    res.status(200).json(data.data);
  } catch (error) {
    console.error(error);
  }
};

// function for update data
const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await axios.patch(`http://localhost:8080/data/${id}`, data);
    console.log(result.data);
    res.status(200).json(result.data);
  } catch (error) {
    console.error(error);
  }
};

// function for delete data
const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await axios.delete(`http://localhost:8080/data/${id}`);
    console.log(result.data);
    res.status(200).json({ message: "successful delete" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllData,
  createData,
  updateData,
  deleteData,
};
