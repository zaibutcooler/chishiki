const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const localDB = process.env.LOCAL_DB_URI;

mongoose
  .connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

const adminRoutes = require("./routes/adminRoutes");
app.use("/admin", adminRoutes);

const courseRoutes = require("./routes/courseRoutes");
app.use("/course", courseRoutes);

const studentRoutes = require("./routes/studentRoutes");
app.use("/student", studentRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

app.listen(5000, () => {
  console.log("Listening at port 5000");
});
