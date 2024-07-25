import { addTwoNumbers } from "./module-add-numbers.js";
import { person } from "./module-person.js";
import { getFirstName, getLastName } from "./module-named-exports.js";
import getFullName from "./module-default-export.js";
import { NAME, ID, greeting } from "./module-entire.js";
//TODO: Using package bundler.
// import { arrayIncludes } from "../node_modules/lodash/_arrayIncludes.js";
// import axios from "axios";

// Creating and Exporting Modules

// Task 1
console.log(addTwoNumbers(3, 5));

// Task 2
console.log(`Name: ${person.name}, Age: ${person.age}`);
console.log(
  `UpdatedName: ${person.changeName("Sank")}, UpdatedAge: ${person.changeAge(
    "27"
  )}`
);

// Named and Default Exports

// Task 3
console.log(getFirstName("Prat"), getLastName("Bhan"));
console.log();

// Task 4
console.log(getFullName());

// Importing Entire Modules

// Task 5
console.log(greeting(), NAME, ID);

// Using Third-party Modules

// Task 6
// console.log(arrayIncludes([1, 2, 3], 2));

// Task 7
// console.log(axios.get("https://jsonplaceholder.typicode.com/users"));
