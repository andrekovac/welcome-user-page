// Getting hold of UI elements

const loginButton = document.getElementById("login-button");
const title = document.getElementById("title");

/**
 * Example of a simple function
 */
const root = (x) => x * x;

/**
 * function 1
 */
const getName = (i1, i2) => i1 + " " + i2;

/**
 * function 2 - the max function
 */
const addName = (a, b) => {
  const x = getName(a, b);
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
