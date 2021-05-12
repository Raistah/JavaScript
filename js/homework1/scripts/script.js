var age;
var fname;

while (true) {
  fname = prompt("Напишіть своє ім'я");
  if (fname == "" || isNaN(fname) == false) {
    alert("попробуйте еще");
  } else {
    break;
  }
}
while (true) {
  age = prompt("Напишіть свой вік");
  if (age == "" || isNaN(age) == true) {
    alert("попробуйте еще");
  } else {
    break;
  }
}

if (age < 18) {
  alert("You are not allowed to visit this website");
} else if (age >= 18 && age <= 22) {
  if (confirm("Are you sure you want to continue?")) {
    alert("Welcome, " + fname + "!");
  } else {
    alert("You are not allowed to visit this website");
  }
} else {
  alert("Welcome, " + fname + "!");
}
