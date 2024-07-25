// Creating and Exporting Modules

// Task 2
export const person = {
  name: "Prat",
  age: "26",
  changeName(newName) {
    this.name = newName;
    return this.name;
  },
  changeAge(newAge) {
    this.age = newAge;
    return this.age;
  },
};
