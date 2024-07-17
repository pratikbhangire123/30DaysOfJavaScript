// for Loops

// Task 1
function oneToTen() {
  console.log("1 to 10");
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
}

// Task 2
function tableOfFive() {
  console.log("Table of 5");
  for (let i = 5; i < 51; i = i + 5) {
    console.log(i);
  }
}

// While Loop

// Task 3
function calculateSum() {
  let sum = 0;
  let number = 1;

  while (number < 11) {
    sum += number;
    number++;
  }

  console.log("Sum:", sum);
}

// Task 4
function tenToOne() {
  let num = 10;

  console.log("10 to 1");

  while (num > 0) {
    console.log(num);
    num--;
  }
}

// do...while Loop

// Task 5
function oneToFive() {
  let numb = 1;

  console.log("1 to 5");
  do {
    console.log(numb);
    numb++;
  } while (numb < 6);
}

// Task 6

function calculateFactorial(number) {
  let factorial = number;

  if (number == 0 || number == 1) {
    return 1;
  }

  do {
    factorial *= number - 1;
    number -= 1;
  } while (number > 1);

  console.log(`Factorial is ${factorial}`);
}

//Nested Loops

// Task 7
function printPattern() {
  let pattern = "";

  for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }

    pattern += "\n";
  }

  console.log(pattern);
}

// Loop Control Statements

// Task 8
function skipFive() {
  console.log(`SkipFive`);

  for (let i = 1; i < 11; i++) {
    if (i === 5) continue;

    console.log(i);
  }
}

function breakAtSeven() {
  console.log(`BreakAtSeven`);

  for (let i = 1; i < 11; i++) {
    if (i === 7) break;

    console.log(i);
  }
}

oneToTen();
tableOfFive();
calculateSum();
tenToOne();
oneToFive();
calculateFactorial(5);
printPattern();
skipFive();
breakAtSeven();
