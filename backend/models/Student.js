const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  studentID: { type: String, required: true },

  studentID: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date },
  completedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  currentCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  paid: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", studentSchema);
