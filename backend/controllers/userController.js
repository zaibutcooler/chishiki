const Model = require("../models/User");
const Student = require("../models/Student");
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const alreadyExists = await Model.findOne({ email });
    if (alreadyExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Model({ email, password: hashedPassword });
    await newUser.save();
    res.status(200).json({ newUser, id: newUser._id });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const findUser = async (id, role) => {
  let user;
  try {
    if (role) {
      user = await Admin.findOne({ user: id });
    } else if (!role) {
      user = await Student.findOne({ user: id });
    }
  } catch (error) {
    console.error("Error finding user:", error);
    throw new Error("Failed to find user.");
  }

  return user || null;
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await Model.findOne({ email });
    if (!foundUser) {
      return res.status(401).json({ message: "Invalid email" });
    }
    const validPassword = await bcrypt.compare(password, foundUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ userId: foundUser._id }, secretKey, {
      expiresIn: "1h",
    });

    const user = await findUser(foundUser._id, foundUser.role);
    if (!user) {
      return res
        .status(404)
        .json({ token, message: "Please create your profile." });
    }
    res
      .status(200)
      .json({ token, user, profileID: foundUser._id, role: foundUser.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { register, login };
