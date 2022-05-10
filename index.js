const loginButton = document.getElementById("login-button");
const title = document.getElementById("title");

const y = (x) => x * x;

const getName = (i1, i2) => i1 + " " + i2;

const addName = (a, b) => {
  const x = getName(a, b);
  title.innerHTML = "Welcome, " + x;
};

/**
 * Waiting for a click
 */
loginButton.addEventListener("click", () => {
  addName("Andre", "Kovac");
});
