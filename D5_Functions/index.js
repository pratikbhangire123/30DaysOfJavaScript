// Function Declaration

// Task 1
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number}: Even`);
  } else {
    console.log(`${number}: Odd`);
  }
}

// Task 2
function calculateSquare(number) {
  return `Square of ${number}:`, number * number;
}

// Function Expression

// Task 3
const findMaximum = function (number1, number2) {
  number1 > number2
    ? console.log(`${number1} is maximum`)
    : console.log(`${number2} is maximum`);
};

// Task 4
const concatStrings = function (string1, string2) {
  return string1 + string2;
};

// Arrow Functions

// Task 5
const calculateSum = (number1, number2) => {
  return number1 + number2;
};

// Task 6
const checkCharacterInString = (string, character) => {
  if (string.includes(character)) {
    return true;
  }

  return false;
};

// Function Parameters and Default Values

// Task 7
function calculateProduct(number1, number2 = 3) {
  return number1 * number2;
}

// Task 8
function sendGreetings(name, age = 18) {
  return `Hello ${name} with ${age}!`;
}

// Higher Order Functions

// Task 9
function callFunction(functionToCall, times) {
  while (times >= 1) {
    functionToCall();
    times--;
  }
}

// Task 10
function callTwoFunctions(functionToCall1, functionToCall2, value) {
  const result = functionToCall1(value);
  functionToCall2(result);
}

checkEvenOrOdd(2);
console.log(calculateSquare(3));
findMaximum(3, 5);
console.log(concatStrings("Pra", "tik"));
console.log(calculateSum(3, 5));
console.log(checkCharacterInString("Pratik", "k"));
console.log(calculateProduct(5, 5));
console.log(sendGreetings("Pratik"));
callFunction(() => console.log("I got called!"), 5);
callTwoFunctions(calculateSquare, checkEvenOrOdd, 3);
