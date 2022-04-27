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
  lastnamelabel.appendChild(lastnametext);

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
  phoneinput.setAttribute("type", "phone");
  phoneinput.setAttribute("name", "phoneinput");
  phoneinput.setAttribute("id", "phoneinput");
  //<label type name id><label/>
  let phonelabel = document.createElement("label");
  phonelabel.setAttribute("id", "phonelabel");
  phonelabel.setAttribute("for", "phoneinput");
  let phonetext = document.createTextNode("Phone");
  phonelabel.appendChild(phonetext);

  //submit Button
  let submitbutton = document.createElement("input");
  submitbutton.setAttribute("type", "submit");
  submitbutton.setAttribute("value", "Add");
  submitbutton.setAttribute("id", "submitbutton");

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
    addToList();
  });

  anchor.appendChild(form);
};

addToList = async () => {
  let firstname = document.getElementById("firstnameinput");
  let lastname = document.getElementById("lastnameinput");
  let email = document.getElementById("emailinput");
  let phone = document.getElementById("phoneinput");
  let contact = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    phone: phone.value,
  };
  // how to make basic request to server
  let method = "POST";
  let url = "/api/contact";
  // this is configuration for fetch
  let request = {
    method: method,
    mode: "cors",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(contact), // http-protocol requests text not binary.
  };
  // odotan vastausta serverilta async-lla
  let response = await fetch(url, request);
  if (response.ok) {
    // haluamme nyt tyhjenta forumia, että tuleville käytäjälle se tulee tyhjää.
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    phone.value = "";
  } else {
    console.log("Server responded with a status:", response.status);
  }

  getContactList = async () => {
    let request = {
      method: "GET",
      mode: "cors",
      headers: { "Content-type": "application/json" },
    };
    let response = await ("/api/contact", request);
    if (response.ok) {
      // this will take just text, cause there much more data
      let data = await response.json();
      //one more line
    } else {
      console.log(
        "Failed to load contacts. Server responded with a status:",
        response.status
      );
    }
  };

  populateTable = (data) => {
    let anchor = document.getElementById("anchor");
    let oldTable = document.getElementById("table");
    if (oldTable) {
      anchor.removeChild(oldTable);
    }
  };
  let table = document.createElement("table");
  //Table header
  let header = document.createElement("thead");
  let headerRow = document.createElement("tr");
  let firstnameheader = document.createElement("th");
  let firstnametext = document.createElement("First Name");
  firstnameheader.appendChild(firstnametext);

  let lastnameheader = document.createElement("th");
  let lasttnametext = document.createElement("First Name");
  lastnameheader.appendChild(lastnametext);
};
