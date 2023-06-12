const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
app.use(cors());

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

app.listen(5000, () => {
  console.log("Listening at port 5000");
});
