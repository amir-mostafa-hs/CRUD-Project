const { Router } = require("express");
const {
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../controller/crud");

const router = Router();

// Router: /data
// method: GET
// PUBLIC
router.get("/", getAllData);

// Router: /data
// method: POST
// PUBLIC
router.post("/", createData);

// Router: /data/:id
// method: PATCH
// PUBLIC
router.patch("/:id", updateData);

// Router: /data/:id
// method: DELETE
// PUBLIC
router.delete("/:id", deleteData);

module.exports = router;
