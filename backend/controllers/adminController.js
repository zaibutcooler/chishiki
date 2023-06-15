const Model = require("../models/Admin");
const generateRandomID = require("../middlewares/randomID");

const getAll = async (req, res) => {
  try {
    const items = await Model.find().populate("user");
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getOne = async (req, res) => {
  try {
    const item = await Model.findById(req.params.id).populate("user");
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const createOne = async (req, res) => {
  const { user, firstName, lastName, contactEmail, control, inCharge } =
    req.body;

  try {
    const userExist = await Model.findOne({ user });
    console.log(userExist);
    if (userExist) {
      return res.status(400).json({ message: "Can't create 2 profiles." });
    }

    let adminID;
    let idExists = true;
    while (idExists) {
      adminID = generateRandomID("AD", 6);
      idExists = await Model.findOne({ adminID });
    }

    const item = new Model({
      user,
      adminID,
      firstName,
      lastName,
      contactEmail,
      control,
      inCharge,
    });
    const savedItem = await item.save();
    res.status(200).json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateOne = async (req, res) => {
  try {
    const { user, firstName, lastName, contactEmail, control, inCharge } =
      req.body;
    const item = await Model.findByIdAndUpdate(
      req.params.id,
      { user, adminID, firstName, lastName, contactEmail, control, inCharge },
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteOne = async (req, res) => {
  try {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
