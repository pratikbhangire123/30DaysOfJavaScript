function checkNumberSign(number) {
  return number < 0
    ? console.log("Negative number")
    : console.log("Positive number");
}

checkNumberSign(3);
checkNumberSign(-5);
