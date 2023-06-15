const Model = require("../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();

const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const alreadyExists = await Model.findOne({ email });
    if (alreadyExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed");
    const newUser = new Model({ email, password: hashedPassword, role });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {};

module.exports = { register, login };
