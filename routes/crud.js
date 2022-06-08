const { Router } = require("express");
const axios = require("axios");

const router = Router();

const getAllData = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8080/data");
    const data = response.data;
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
  }
};
// Router: /data
// method: GET
// PUBLIC
router.get("/", getAllData);

// const createData = async (req, res) => {
//   try {
//     const newData = req;
//     console.log(req);
//     // const data = await axios.post("http://localhost:8080/data", newData);
//     // res.status(200).json({ data });
//   } catch (error) {
//     console.error(error);
//   }
// };

// Router: /data
// method: POST
// PUBLIC
// router.post("/", createData);

const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    console.log(id);
  } catch (error) {
    console.error(error);
  }
};

// Router: /data/:id
// method: PATCH
// PUBLIC
router.patch("/:id", updateData);

module.exports = router;
