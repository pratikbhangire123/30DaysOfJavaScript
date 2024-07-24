// Understanding Promises

// Task 1
let resolvedPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Resolved..."), 2000);
});

resolvedPromise.then((res) => console.log(res));

// Task 2
let rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Rejected...")), 2000);
});

rejectedPromise.catch((err) => console.log(err));

// Chaining Promises

// Task 3
new Promise((resolve) => {
  setTimeout(() => resolve("Fetched data 1"), 2000);
}).then((res) => {
  console.log(res);

  new Promise((resolve) => {
    setTimeout(() => resolve("Fetched data 2"), 2000);
  }).then((res2) => {
    console.log(res2);

    new Promise((resolve) => {
      setTimeout(() => resolve("Fetched data 3"), 2000);
    }).then((res3) => console.log(res3));
  });
});

// Using Async/Await

// Task 4
async function asyncResolved(promise) {
  const result = await promise;
  console.log("asyncResolved:", result);
}

asyncResolved(resolvedPromise);

// Task 5
async function asyncRejected(promise) {
  try {
    await promise;
  } catch (error) {
    console.log("asyncRejected", error);
  }
}

asyncRejected(rejectedPromise);

// Fetching Data from API

// Task 6
const fetchUsers = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

fetchUsers.then((users) => console.log(users)).catch((err) => console.log(err));

// Task 7
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();

// Concurrent Promises

// Task 8
const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise1 reolved!"), 4000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise2 reolved!"), 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise3 reolved!"), 3000);
});

Promise.all([promise1, promise2, promise3]).then((res) =>
  console.log("All:", res)
);

// Task 9

Promise.race([promise1, promise2, promise3]).then((res) =>
  console.log("Race:", res)
);
