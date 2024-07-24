// Basic Error Handling with Try-Catch

// Task 1
function throwError() {
  try {
    throw new Error("Intentional error");
  } catch (error) {
    console.log(error);
  }
}

throwError();

// Task 2
function division(number1, number2) {
  try {
    if (number2 === 0) {
      throw new Error("A number cannot divide by zero");
    }

    console.log(number1 / number2);
  } catch (error) {
    console.log(error);
  }
}

division(2, 0);

// Finally Block

// Task 3
function finallyBlock() {
  try {
    console.log("Try Executed!");
    throw new Error("Catch Executed!");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally Executed!");
  }
}

finallyBlock();

// Custom Error Objects

// Task 4
class TimepassError extends Error {
  constructor(message) {
    super(message);
    this.name = "TimePassError";
  }
}

function throwCustomError() {
  try {
    throw new TimepassError("Find a better Way to Do Timepass!");
  } catch (error) {
    console.log(error);
  }
}

throwCustomError();

// Task 5
class CapitalLetterError extends Error {
  constructor(message) {
    super(message);
    this.name = "CapitalLetterError";
  }
}

function enterName(name) {
  try {
    if (/^[a-z]/.test(name[0])) {
      throw new CapitalLetterError("First Letter must be a Capital Letter");
    }

    console.log("Name:", name);
  } catch (error) {
    console.log(error);
  }
}

enterName("pratik");

// Error Handling in Promises

// Task 6
let counter = 1;

function randomPromiseResult() {
  new Promise((resolve, reject) => {
    if (counter % 2 === 0) {
      resolve("RandomResult: Resolved " + counter);
    } else {
      reject("RandomResult: Rejected " + counter);
    }
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  counter += 1;
}

randomPromiseResult();
randomPromiseResult();

// Task 7
async function randomAsyncResult() {
  try {
    const res = await new Promise((resolve, reject) => {
      if (counter % 2 === 0) {
        resolve("RandomAsyncResult:Resolved " + counter);
      } else {
        reject(new Error("RandomAsyncResult:Rejected " + counter));
      }
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }

  counter += 1;
}

randomAsyncResult();

// Graceful Error Handling in Fetch

// Task 8

function gracefulPromiseFetch() {
  fetch("invalid_url")
    .then((res) => {
      if (res.ok) {
        console.log("Promise Fetched Successfully");
      } else if (res.status === 404) {
        throw new Error("404: Not Found | Invalid URL");
      } else {
        throw new Error(res.status);
      }
    })
    .catch((err) => console.log("Promise Fetch:", err));
}

gracefulPromiseFetch();

// Task 9

async function gracefulAsyncFetch() {
  try {
    const response = await fetch("invalid_url");

    if (response.ok) {
      console.log("Async Fetched Successfully!");
    } else if (response.status === 404) {
      throw new Error("404: Not Found | Invalid URL");
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.log("Async Fetch:", error);
  }
}

gracefulAsyncFetch();
