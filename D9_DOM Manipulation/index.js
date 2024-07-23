// Selecting and Manipulating Elements

// Task 1
document.getElementById("title").textContent = "30DaysOfJavaScript";

// Task 2
document.getElementsByClassName("body")[0].style.backgroundColor = "grey";

// Creating and Appending Elements

// Task 3
const newDiv = document.createElement("div");
newDiv.textContent = "New Element";
document.body.appendChild(newDiv);

// Task 4
const languages = document.getElementById("languages");
const newLi = document.createElement("li");
newLi.textContent = "CSS";
languages.appendChild(newLi);

// Removing Elements

// Task 5
document.body.removeChild(newDiv);

// Task 6
languages.removeChild(languages.lastElementChild);

// Modifying Attributes and Classes

// Task 7
document.getElementById("js-logo").src =
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";

// Task 8
languages.classList.add("list");
languages.classList.remove("lang");

// Event Handling

// Task 9
const para = document.getElementById("paragraph");
const changeButton = document.getElementById("change");

changeButton.addEventListener(
  "click",
  () => (para.textContent = "Changed Para")
);

// Other way
// changeButton.onclick = () => (para.textContent = "Change Para");

// Task 10
changeButton.onmouseover = () => (changeButton.style.borderColor = "red");
