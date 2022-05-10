// Getting hold of UI elements

const loginButton = document.getElementById("login-button");
const title = document.getElementById("title");

/**
 * Squaring a given number
 */
const square = (num) => num * num;

square(5);

/**
 * function 1
 */
const getFullName = (firstName, lastName) => firstName + " " + lastName;

/**
 * function 2 - the max function
 */
const addName = (a, b) => {
  const x = getFullName(a, b);
  title.innerHTML = "Welcome, " + x;
};

const handleValueChange = () => {
  var x = document.getElementById("fname").value;
  var y = document.getElementById("lname").value;
  addName(x, y);
};

/**
 * Waiting for a click
 */
loginButton.addEventListener("click", () => {
  addName("André", "Kovac");

  // Alternative:
  // handleValueChange();
});
