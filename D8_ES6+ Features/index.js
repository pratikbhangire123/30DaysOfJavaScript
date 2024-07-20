// Template Literals

// Task 1
const personName = "Prat";
const personAge = 19;

console.log(`Person Name: ${personName}, Age: ${personAge}`);

// Task 2
const multilineString = `lorem ipsum dolor sit amet, consectetur adipiscing 
lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor`;

console.log(multilineString);

// Destructuring

// Task 3
const [first, second] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(first, second);

// Task 4
const book = {
  title: "My name is book",
  author: "Author Bhai",
  year: "2024",
};

const { title, author } = book;

console.log(title, author);

// Spread and Rest Operators

// Task 5
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = [...array, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log(newArray);

// Task 6
function sum(...args) {
  return args.reduce((acc, number) => acc + number, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Default Parameters

// Task 7
function calculateProduct(number1, number2 = 1) {
  return number1 * number2;
}

console.log(calculateProduct(3, 5));
console.log(calculateProduct(3));

// Enhanced Object Literals

// Task 8
const name = "Prat";
const birthYear = "1998"
const calculateAge = function() {
    return 2024 - this.birthYear;
}

const person = {name, birthYear, calculateAge};

console.log(person);

// Task 9

const fruit = "banana";
const price = "50/dozen"

const fruits = {
    [fruit]: price,
}

console.log(fruits);
