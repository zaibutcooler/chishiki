const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
  adminID: { type: String, required: true },
  control: { type: Boolean, default: false },
  inCharge: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  name: { type: String, required: true },
  qualification: { type: String },
  experience: { type: Number },
  email: { type: String },
  contactNumber: { type: String },
  profileImg: { type: String },
  country: { type: String },
  city: { type: String },
  subject: { type: String },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Admin", adminSchema);
