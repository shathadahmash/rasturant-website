function valid() {
  var first_name = document.getElementById("first_name");
  var last_name = document.getElementById("last_name");
  var email = document.getElementById("email2");
  var age = document.getElementById("age2");
  var phone = document.getElementById("phone");

  var alltest = new RegExp();
  alltest = /[@#!%^&()|_+=\[\]|\\/{}'";:.><,~`?1234567890]+/i;
  if (alltest.test(first_name.value) === true) {
    alert("unvalid firts name...");
  } else if (first_name.value === null || first_name.value === " ") {
    alert("numvalid first name");
  }

  if (alltest.test(last_name.value) === true) {
    alert("unvalid last name...");
  } else if (last_name.value === null || last_name.value === " ") {
    alert("numvalid last name");
  }
  alltest = /[a-z A_Z @#!%^&()|_+=\[\]|\\/{}'";:.><,~`?]/;
  if (alltest.test(age.value) === true) {
    alert("nuvalid age value");
  } else if (age.value === null || age.value > 100 || age.value < 18) {
    alert("nuvalid age value");
  }

  alltest = /[a-z 0-9._%+-]+@[a-z0-9.-]+\.(com|org|net)/;
  if (
    email.value === null ||
    email.value == " " ||
    alltest.test(email.value) === false
  ) {
    alert("nuvalid email.... ");
  }

  alltest = /[a-z A_Z @#!%^&()|_+=\[\]|\\/{}'";:.><,~`?]/;
  if (alltest.test(phone.value) == true) {
    alert("unvalid phone number.......");
  }

  if (phone.value === null || phone.value > 789999999) {
    alert("unvalid phone number.......");
  }
}
