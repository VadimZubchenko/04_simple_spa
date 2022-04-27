window.onload = function () {
  createForm();
};
// nuolifunktio
createForm = () => {
  let anchor = document.getElementById("anchor");
  let form = document.createElement("form");
  form.setAttribute("id", "form");

  //first name input <input type name id><input/>
  let firstnameinput = document.createElement("input");
  firstnameinput.setAttribute("type", "text");
  firstnameinput.setAttribute("name", "firstnameinput");
  firstnameinput.setAttribute("id", "firstnaminput");
  //<label type name id><label/>
  let firstnamelabel = document.createElement("label");
  firstnamelabel.setAttribute("id", "firstnamelabel");
  firstnamelabel.setAttribute("for", "firstnameinput");
  let firstnametext = document.createTextNode("First name");
  firstnamelabel.appendChild(firstnametext);

  //first name input <input type name id><input/>
  let lastnameinput = document.createElement("input");
  lastnameinput.setAttribute("type", "text");
  lastnameinput.setAttribute("name", "lastnameinput");
  lastnameinput.setAttribute("id", "lastnaminput");
  //<label type name id><label/>
  let lastnamelabel = document.createElement("label");
  lastnamelabel.setAttribute("id", "lastnamelabel");
  lastnamelabel.setAttribute("for", "lastnameinput");
  let lastnametext = document.createTextNode("Last name");
  lastnamelabel.appendChild(firstnametext);
};
