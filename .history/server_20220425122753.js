const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

let app = express();

let port = process.env.port || 3000;
//Create a database
let database = [];
let id = 100;

// using middle way to read json data
app.use(express.json());
// this is wrapp(express json) of app.use, check if the json-application
// httml//localhost:3000/api/contact (/contact is useful for client identification)
app.get("/api/contact", function (reg, res) {
  return res.status(200).json(database);
});
// express made in like event, so it appier when it's required
app.post("/api/contact", function (req, res) {
  let contact = {
    id: id,
    firstname: req.body.firstname,
    email: req.body.phone,
  };
  id++;
  database.push(contact);
  return res.status(201).json(contact);
});

app.listen(port);

console.log("Running in port: " + port);
