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

  let firstnamelabel = document.createElement("label");
  firstnamelabel.setAttribute("id", "firstnamelabel");
  firstnamelabel.setAttribute("for", "firstnameinput");
  let firstnametext = document.createTextNode("First name");
  firstnamelabel.appendChild(firstnametext);
};
