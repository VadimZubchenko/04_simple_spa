const express = require("express");

let app = express();

//Create a database
let database = [];
let id = 100;

// using middle way to read json data
app.use(express.json());
// this is wrapp of app.use, check if the json-application
app.get("/api/contact", function (reg, res) {
  return res.status(200).json(database);
});
