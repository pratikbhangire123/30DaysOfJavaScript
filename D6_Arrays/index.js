// Array Creation and Access

// Task1
const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

// Task 2
console.log(numbersArray[0]);
console.log(numbersArray[numbersArray.length - 1]);

// Array Methods (Basic)

// Task 3
numbersArray.push(6);
console.log(numbersArray);

// Task 4
numbersArray.pop();
console.log(numbersArray);

// Task 5
numbersArray.shift();
console.log(numbersArray);

// Task 6
numbersArray.unshift(1);
console.log(numbersArray);

// Array Methods (Intermediate)

// Task 7
const newArray = [];

numbersArray.map((number) => {
  newArray.push(number * 2);
});

console.log(newArray);

// Task 8
const evenNumbersArray = numbersArray.filter((number) => number % 2 === 0);
console.log(evenNumbersArray);

// Task 9
const sum = numbersArray.reduce((acc, number) => acc + number, 0);
console.log(sum);

// Array Iteration

// Task 10
for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

// Task 11
numbersArray.forEach((number) => console.log(number));

// Multi-dimensional Arrays

// Task 12
const twoDimensionalArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
];

console.log(twoDimensionalArray);

// Task 13
console.log(twoDimensionalArray[2][0]);
