const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  studentID: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String },
  profilePhoto: { type: Buffer },
  birthDate: { type: Date },
  level: { type: String },
  pastDocuments: { type: Buffer },
  country: { type: String },
  city: { type: String },
  phoneNumber: { type: String },
  completedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  currentCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  paid: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", studentSchema);
