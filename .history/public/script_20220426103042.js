// luodaan lomakke
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
  firstnameinput.setAttribute("id", "firstnameinput");
  //<label type name id><label/>
  let firstnamelabel = document.createElement("label");
  firstnamelabel.setAttribute("id", "firstnamelabel");
  firstnamelabel.setAttribute("for", "firstnameinput");
  let firstnametext = document.createTextNode("First name");
  firstnamelabel.appendChild(firstnametext);

  //last name input <input type name id><input/>
  let lastnameinput = document.createElement("input");
  lastnameinput.setAttribute("type", "text");
  lastnameinput.setAttribute("name", "lastnameinput");
  lastnameinput.setAttribute("id", "lastnameinput");
  //<label type name id><label/>
  let lastnamelabel = document.createElement("label");
  lastnamelabel.setAttribute("id", "lastnamelabel");
  lastnamelabel.setAttribute("for", "lastnameinput");
  let lastnametext = document.createTextNode("Last name");
  lastnamelabel.appendChild(firstnametext);

  // email input
  let emailinput = document.createElement("input");
  emailinput.setAttribute("type", "email");
  emailinput.setAttribute("name", "emailinput");
  emailinput.setAttribute("id", "emailinput");
  //<label type name id><label/>
  let emaillabel = document.createElement("label");
  emaillabel.setAttribute("id", "emaillabel");
  emaillabel.setAttribute("for", "emailinput");
  let emailtext = document.createTextNode("Email");
  emaillabel.appendChild(emailtext);

  // phone input
  let phoneinput = document.createElement("input");
  phoneinput.setAttribute("type", "email");
  phoneinput.setAttribute("name", "emailinput");
  phoneinput.setAttribute("id", "emailinput");
  //<label type name id><label/>
  let phonelabel = document.createElement("label");
  phonelabel.setAttribute("id", "phonelabel");
  phonelabel.setAttribute("for", "phoneinput");
  let phonetext = document.createTextNode("Phone");
  phonelabel.appendChild(phonetext);

  //submit Button
  let submibutton = document.createElement("input");
  submibutton.setAttribute("type", "submit");
  submibutton.setAttribute("value", "Add");
  submibutton.setAttribute("id", "submitbutton");

  //Append to form
  let br = document.createElement("br");
  form.appendChild(firstnamelabel);
  form.appendChild(firstnameinput);
  form.appendChild(br);
  form.appendChild(lastnamelabel);
  form.appendChild(lastnameinput);
  form.appendChild(br.cloneNode());

  form.appendChild(emaillabel);
  form.appendChild(emailinput);
  form.appendChild(br.cloneNode());

  form.appendChild(phonelabel);
  form.appendChild(phoneinput);
  form.appendChild(br.cloneNode());

  form.appendChild(submitbutton);
  form.addEventListener("submit", function (event) {
    event.prenentDefault();
    console.log("Added a new contact");
  });
};
