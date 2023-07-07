const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

const authenticate = async (req, res, next) => {
  try {
    token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secretKey);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Not authorized" });
  }
};

module.exports = authenticate;
