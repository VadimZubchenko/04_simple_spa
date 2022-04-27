window.onload = function () {
  createForm();
};
// nuolifunktio
createForm = () => {
  let anchor = document.getElementById("anchor");
  let form = document.createElement("form");
  form.setAttribute("id", "form");

  //first name input
  let firstnameimput = document.createElement("input");
  firstnameimput.setAttribute("type", "text");
  firstnameimput.setAttribute("name", "firstnameinput");
  firstnameimput.setAttribute("id", "firstnaminput");
  let firstnamelabel = document.createElement("label");
  firstnamelabel.setAttribute("id", "firstnamelabel");
  firstnamelabel.setAttribute("for", "firstnameinput");
  let firstnamtext = document.createTextNode("First name");
  firstnamelabel.appendChild(firstnamtext);
};
