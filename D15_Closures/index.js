// Understanding Closures

// Task 1
function outerFunction() {
  const outerVariable = "This is outer function variable";

  return function innerFunction() {
    return outerVariable;
  };
}

const resultedFunction = outerFunction();
console.log(resultedFunction());

// Task 2
function counter() {
  let counter = 0;

  function increment() {
    counter++;
    return counter;
  }

  return increment;
}

const increment = counter();
console.log(increment());
console.log(increment());

// Practical Closures

// Task 3
function generateUniqueId(prefix = "UID") {
  let lastId = 0;

  return function () {
    lastId += 1;
    return `${prefix}-${lastId}`;
  };
}

const uniqueId = generateUniqueId();
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());

// Task 4
function getUser(name) {
  return function () {
    return `Hello ${name}`;
  };
}

const greetUser = getUser("Pratrao");
console.log(greetUser());

// Closures in Loop

// Task 5
function createFunctions() {
  const functionsArray = [];

  for (let i = 1; i < 4; i++) {
    functionsArray.push(function () {
      console.log(i);
    });
  }

  return functionsArray;
}

const functions = createFunctions();
functions[0]();
functions[1]();
functions[2]();

// Module Pattern

// Task 6
function manageCollection() {
  const items = [];

  const addItem = (item) => {
    items.push(item);
    console.log("Items Added:", item);
  };

  const removeItem = (item) => {
    const itemIndex = items.indexOf(item);
    items.splice(itemIndex, 1);
    console.log("Items Removed:", item);
  };

  const listItems = () => {
    console.table(items);
  };

  return { addItem, removeItem, listItems };
}

const { addItem, removeItem, listItems } = manageCollection();
addItem("Apple");
addItem("Banana");
addItem("Watermelon");
listItems();
removeItem("Apple");
listItems();

// Memoization

// Task 7
function addTwoNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function memoize(func) {
  const cachedResult = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cachedResult.has(key)) {
      return `From Cache: ${cachedResult.get(key)}`;
    }

    const result = func(...args);

    cachedResult.set(key, result);

    return `From Function Execution: ${result}`;
  };
}

const memoizedAddTwoNumbers = memoize(addTwoNumbers);
console.log("\nAdding Two Numbers:");
console.log(memoizedAddTwoNumbers(2, 3));
console.log(memoizedAddTwoNumbers(5, 4));
console.log(memoizedAddTwoNumbers(2, 3));
console.log(memoizedAddTwoNumbers(5, 4));

// Task 8
function calculateFactorial(number) {
  return number == 1 ? number : number * calculateFactorial(number - 1);
}

const memoizedCalculateFactorial = memoize(calculateFactorial);
console.log("\nFinding Factorial:");
console.log(memoizedCalculateFactorial(5));
console.log(memoizedCalculateFactorial(6));
console.log(memoizedCalculateFactorial(5));
