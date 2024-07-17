function logical() {
  const greaterThan = (number1, number2) => {
    console.log(`${number1} > ${number2}`, number1 > number2);
  };

  const lesserThan = (number1, number2) => {
    console.log(`${number1} < ${number2}`, number1 < number2);
  };

  const greaterThanOrEqual = (number1, number2) => {
    console.log(`${number1} >= ${number2}`, number1 >= number2);
  };

  const lessThanOrEqual = (number1, number2) => {
    console.log(`${number1} <= ${number2}`, number1 <= number2);
  };

  const checkBoth = (number1, number2) => {
    console.log(
      `${number1} < 10 && ${number2} > 10`,
      number1 < 10 && number2 > 10
    );
  };

  const checkEither = (number1, number2) => {
    console.log(
      `${number1} >= 10 || ${number2} <= 10`,
      number1 >= 10 || number2 <= 10
    );
  };

  const notEquals = (number1, number2) => {
    console.log(`${number1} !== ${number2}`, number1 !== number2);
  };

  return {
    greaterThan,
    lesserThan,
    greaterThanOrEqual,
    lessThanOrEqual,
    checkBoth,
    checkEither,
    notEquals,
  };
}

logical().greaterThan(1, 2);
logical().lesserThan(3, 4);
logical().greaterThanOrEqual(5, 5);
logical().lessThanOrEqual(6, 7);
logical().checkBoth(8, 9);
logical().checkEither(10, 11);
logical().notEquals(12, 13);
