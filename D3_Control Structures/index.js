// if-else Statements

// Task 1

function checkNumber(number) {
  if (number > 0) {
    console.log(`${number}: Positive Number`);
  } else if (number < 0) {
    console.log(`${number}: Negative Number`);
  } else {
    console.log(`${number}: Zero`);
  }
}

// Task 2
function checkVoterElegibility(age) {
  if (age >= 18) {
    console.log(`${age}: Voter is Eligible`);
  } else {
    console.log(`${age}: Voter is uneligible`);
  }
}

// Nested if-else Statements

// Task 3
function findLargestNumber(number1, number2, number3) {
  if (number1 > number2) {
    if (number1 > number3) {
      console.log(`${number} is largest`);
    }
  } else if (number2 > number3) {
    if (number2 > number3) {
      console.log(`${number2} is largest`);
    }
  } else {
    console.log(`${number3} is largest`);
  }
}

// Switch Case

// Task 4
function chooseDay(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log(`${dayNumber}: Monday`);
      break;

    case 2:
      console.log(`${dayNumber}: Tuesday`);
      break;

    case 3:
      console.log(`${dayNumber}: Wednesday`);
      break;

    case 4:
      console.log(`${dayNumber}: Thursday`);
      break;

    case 5:
      console.log(`${dayNumber}: Friday`);
      break;

    case 6:
      console.log(`${dayNumber}: Saturday`);
      break;

    case 7:
      console.log(`${dayNumber}: Sunday`);
      break;

    default:
      console.log(`${dayNumber}: Not a day`);
      break;
  }
}

// Task 5
function allotGrade(score) {
  switch (score) {
    case 90:
      console.log(`${score}: A`);
      break;

    case 80:
      console.log(`${score}: B`);
      break;

    case 70:
      console.log(`${score}: C`);
      break;

    case 60:
      console.log(`${score}: D`);
      break;

    case 50:
      console.log(`${score}: F`);
      break;

    default:
      console.log(`${score}: Failed`);
      break;
  }
}

// Conditional (Ternary) Operator

// Task 6
function checkEvenOrOdd(number) {
  number / 2 === 0
    ? console.log(`${number}: Even Number`)
    : console.log(`${number}: Odd Number`);
}

// Combining Conditions

// Task 7
function checkLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 400 === 0 && year % 100 === 0) {
      console.log(`${year}: Leap Year`);
    } else {
      console.log(`${year}: Not Leap Year`);
    }
  } else {
    console.log(`${year}: Not Leap Year`);
  }
}

checkNumber(0);
checkVoterElegibility(19);
findLargestNumber(1, 5, 7);
chooseDay(3);
allotGrade(80);
checkEvenOrOdd(3);
checkLeapYear(1900);
