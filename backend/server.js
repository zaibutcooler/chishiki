const express = require("express");
const app = express.app();
const mysql = requre("mysql");

app.listen(5000, () => {
  console.log("Listening at port 5000");
});
