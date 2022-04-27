const express = require("express");

let app = express();

//Create a database
let database = ["vadim", "dima", "toivo"];
let id = 100;

// using middle way to read json data
app.use(express.json());
// this is wrapp(express json) of app.use, check if the json-application
// httml//localhost:3000/api/contact (/contact is useful for client identification)
app.get("/api/contact", function (reg, res) {
  return res.status(200).json(database);
});

app.listen(3000);

console.log("Running in port:3000");
