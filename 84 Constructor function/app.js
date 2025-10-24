//! Nədir Bu Constructor Function

// const obj = {
//     firstName: "Alisa",
//     lastName: "Aloso",
//     salary: 5000
// }

// console.log(obj)

// const person1 = {};
// person1.firstName = "Alisa";
// person1.lastName = "Aloso";
// person1.salary = 3000;
// console.log(person1)

// const person2 = {};
// person2.firstName = "A";
// person2.lastName = "B";
// person2.salary = 1000;
// console.log(person2)

// function person(firstName, lastName, salary) {
//     const obj = {};

//     obj.firstName = firstName;
//     obj.lastName = lastName;
//     obj.salary = salary;

//     return obj;
// };

// const person1 = person("Alisa", "Aloso", 1200);

// console.log(person1)

// const person2 = person("Ehmed", "Turkmen", 6000);
// console.log(person2)

const Person = function (firstName, lastName, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
};

const person1 = new Person("Alisa", "Aloso", 1200);

console.log(person1);
