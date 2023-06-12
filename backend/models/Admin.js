const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  adminID: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contactEmail: { type: String },
  control: { type: Boolean, default: false },
  inCharge: [{ type: String }],
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Admin", adminSchema);
