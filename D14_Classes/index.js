// Class Definition

// Task 1
class Person {
  constructor() {
    this.name = "Prat";
    this.age = 50;
  }

  greeting() {
    return "Hello, " + this.name;
  }
}

const person = new Person();
console.log(person.greeting());

// Task 2 - Add Method
Person.prototype.updateAge = function (updatedAge) {
  this.age = updatedAge;
  return this.age;
};

console.log(person.updateAge(27));

// Class Inheritance

// Task 3
class Student extends Person {
  constructor() {
    super();
    this.studentId = "#111";
    Student.totalStudents += 1;
  }

  getStudentId() {
    return this.studentId;
  }
}

const student = new Student();
console.log(student.getStudentId());

// Task 4 - Override Method
Student.prototype.greeting = function () {
  return "Hello, " + this.studentId;
};

console.log(student.greeting());

// Static Methods and Properties

// Task 5 - Static Method
Person.genericGreeting = function () {
  return "Hello from Static Method";
};

console.log(Person.genericGreeting());

// Task 6 - Static Property
Student.totalStudents = 0;
const newStudent = new Student();
console.log(Student.totalStudents);

// Getters and Setters

// Task 7
Person.prototype.lastName = "Bhan";

Person.prototype.getter = function () {
  return `${this.name} ${this.lastName}`;
};

console.log(person.getter());

// Task 8
Person.prototype.setter = function (name, lastName) {
  this.name = name;
  this.lastName = lastName;
  return `${this.name} ${this.lastName}`;
};

console.log(person.setter("Firstrao", "Lastname"));

// Private Fields

// Task 9
class Account {
  #balance;

  constructor() {
    this.#balance = 0;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

// Task 10
const account = new Account();
account.deposit(5000);
console.log("Balance:", account.getBalance());
account.withdraw(3000);
console.log("Balance:", account.getBalance());
