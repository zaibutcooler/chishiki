const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");

const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/adminController");

router.use(express.json());

router.get("/", authenticate, getAll);

router.get("/:id", authenticate, getOne);

router.post("/", authenticate, createOne);

router.patch("/:id", authenticate, updateOne);

router.delete("/:id", authenticate, deleteOne);

module.exports = router;
