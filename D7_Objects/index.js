// Object Creation and Access

// Task 1
const book = {
  title: "My name is book",
  author: "Author Bhai",
  year: "2024",
};

console.log(book);

// Task 2
console.log(book.title);
console.log(book.author);

// Object Methods

// Task 3
book.bookInfo = function () {
  return `Title: ${book.title}, Author: ${book.author}`;
};

console.log(book.bookInfo());

// Task 4
book.updateYear = function (year) {
  book.year = year;
};

book.updateYear(2020);
console.log(book);

// Nested Objects

// Task 5
const library = {
  name: "Most Famous Library",
  books: [
    {
      title: "My name is book",
      author: "Author Bhai",
      year: "2020",
    },
    {
      title: "My name is book (2nd Edition)",
      author: "Author Bhai",
      year: "2024",
    },
  ],
};

console.log(library);

// Task 6
const bookTitles = library.books.map((book) => book.title);
console.log("Library Name:", library.name, "Books:", bookTitles);

// The "this" Keyword

// Task 7
book.bookInfoWithThis = function () {
  return `Title: ${this.title}, Year: ${this.year}`;
};

console.log(book.bookInfoWithThis());

// Object Iteration

// Task 8
for (let bookInfo in book) {
  console.log(`${bookInfo}: ${book[bookInfo]}`);
}

// Task 9

Object.keys(book).forEach((key) => console.log(key));
Object.values(book).forEach((value) => console.log(value));
