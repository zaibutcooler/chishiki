const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");

mongoose.plugin(autopopulate);

const courseSchema = mongoose.Schema({
  title: { type: String },
  teachers: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Admin", autopopulate: true },
  ],
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      autopopulate: true,
    },
  ],
  outline: [{ type: String }],
  startDate: { type: Date },
  endDate: { type: Date },
  time: [{ type: String }],
  zoomLink: { type: String },
  zoomPassword: { type: String },
  classroomLink: { type: String },
  classroomType: { type: String },
  classroomPassword: { type: String },
  limit: { type: Number },
  paid: { type: Boolean },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", courseSchema);
