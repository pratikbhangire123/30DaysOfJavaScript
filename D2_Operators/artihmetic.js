function artithmetic() {
  const addition = (number1, number2) => {
    console.log(`${number1} + ${number2}`, number1 + number2);
  };

  const subtraction = (number1, number2) => {
    console.log(`${number1} - ${number2}`, number1 - number2);
  };

  const multiplication = (number1, number2) => {
    console.log(`${number1} * ${number2}`, number1 * number2);
  };

  const division = (number1, number2) => {
    console.log(`${number1} / ${number2}`, number1 / number2);
  };

  const remainder = (number1, number2) => {
    console.log(`${number1} % ${number2}`, number1 % number2);
  };

  return { addition, subtraction, multiplication, division, remainder };
}

artithmetic().addition(1, 2);
artithmetic().subtraction(3, 4);
artithmetic().multiplication(5, 6);
artithmetic().division(7, 8);
artithmetic().remainder(9, 10);
