// Basic Event Handling

// Task 1
const para = document.getElementById("paragraph");
const changeButton = document.getElementById("change");

changeButton.onclick = () => (para.textContent = "Changed Paragraph");

// Task 2
const logoImage = document.getElementById("js-logo");
const originalSrc =
  "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_1280.png";
const newSrc =
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";

logoImage.ondblclick = () => {
  if (logoImage.src === originalSrc) {
    logoImage.src = newSrc;
  } else {
    logoImage.src = originalSrc;
  }
};

// Mouse Events

// Task 3
changeButton.onmouseover = () => (changeButton.style.backgroundColor = "red");

// Task 4
changeButton.onmouseout = () =>
  (changeButton.style.backgroundColor = "buttonface");

// Keyboard Events

// Task 5
const inputField = document.getElementById("input");

inputField.onkeydown = (e) => console.log(e.key);

// Task 6
const displayPara = document.getElementById("displayInput");
inputField.onkeyup = (e) => (displayPara.textContent = e.target.value);

// Form Events

// Task 7
const form = document.getElementById("form");
const nameField = document.getElementById("name");

form.onsubmit = (e) => {
  e.preventDefault();
  console.log(nameField.value);
};

// Task 8
const dropdown = document.getElementById("dropdown");
const selectedValue = document.getElementById("selectedValue");

dropdown.onchange = (e) => (selectedValue.textContent = e.target.value);

// Event Delegation

// Task 9
const languages = document.getElementById("languages");

languages.onclick = (e) => console.log(e.target.textContent);

// Task 10
const dynamicUl = document.getElementById("dynamicUl");
const addItem = document.getElementById("addItem");
let counter = 2;

dynamicUl.onclick = (e) => console.log(e.target.textContent);

addItem.onclick = () => {
  const li = document.createElement("li");
  li.textContent = `${counter} Item`;
  dynamicUl.appendChild(li);
  counter += 1;
};
