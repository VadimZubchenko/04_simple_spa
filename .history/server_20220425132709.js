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
// express made in like event, so it appear when it's required
app.post("/api/contact", function (req, res) {
  let contact = {
    id: id,
    firstname: req.body.firstname,
    email: req.body.email,
    phone: req.body.phone,
  };
  id++;
  database.push(contact);
  // return what ever we created
  return res.status(201).json(contact);
});

app.delete("/api/contact/:id", function (req, res) {
  // its get in text and parse into integer
  let tempId = parseInt(req.params.id, 10);
  // this return 'contact =>....' if tempDatabase is 'true',
  // it returns contact, else doesn't take
  let tempDatabase = database.filter((contact) => contact.id !== tempId);
  database = tempDatabase;
  return res.status(200).json({ message: "success!" });
});

app.put("/api/contact/:id", function (req, res) {
  let tempId = parseInt(req.params.id, 10);
  for (let i = 0; i < database.length; i++) {
    let contact = {
      id: tempId,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
    };
    database.splice(i, 1, contact);
    return res.status(200).json({ message: "success!" });
  }
});

app.listen(port);

console.log("Running in port: " + port);
