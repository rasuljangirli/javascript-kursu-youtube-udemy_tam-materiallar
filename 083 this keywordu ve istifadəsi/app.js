
//! this keyword


//? Global scope
// console.log(this);
// console.log(window);

//? Regular Function (Global)

// function name1() {
//     console.log(this);
// }
// name1();

//? Arrow Function (Global)

// const name1 = () => {
//     console.log(this);
// }
// name1();

//?  Object
// const obj = {
//     name: this
// }
// console.log(obj.name)

//?  Object Method (regular)
// const obj = {
//     firstName: "Nihan",

//     d: function () {
//         console.log(this.firstName);
//     }
// }
// obj.d();


//?  Object Method (arrow)
// const obj = {
//     firstName: "Nihan",

//     d: () => {

//         function t() {
//             console.log(this);
//         }

//         t();
//     }
// }
// obj.d();

//? Constructor Function

// const Person1 = function (firstName) {
//     this.firstName = firstName;
// }

// const person2 = new Person1("Mehdi");
// console.log(person2.firstName)

//? Constructor Function (regular)

// const Person = function (firstName) {
//     this.firstName = firstName;

//     this.method1 = function () {
//         console.log(this)
//     }
// }

// Person.prototype.method2 = function () {
//     console.log(this)
// }

// const person1 = new Person("Mehdi");
// person1.method1();
// const d = person1.method1;
// d();

// console.log("-------------")
// person1.method2();
// const t = person1.method2;
// t()


//? Constructor Function (arrow)

// const Person = function (firstName) {
//     this.firstName = firstName;

//     this.method1 = () => {
//         console.log(this.firstName)
//     }
// }

// Person.prototype.method2 = () => {
//     console.log(this)
// }

// const person1 = new Person("Mehdi");
// person1.method1();
// const d = person1.method1;
// d();
// console.log("-------------")
// person1.method2();
// const t = person1.method2;
// t()



//? Class

// class Person {

//     constructor(firstName) {
//         this.firstName = firstName;
//     }

//     method3 = () => {
//         console.log(this.firstName)
//     }
// }

// const person1 = new Person("Medine")
// console.log(person1.firstName)
// person1.method3();

//? call, apply, bind

// const Person = function (firstName) {
//     this.firstName = firstName;

//     this.method1 = function () {
//         console.log(this)
//     }
// }

// Person.prototype.method2 = function () {
//     console.log(this)
// }

// const person1 = new Person("Mehdi");
// person1.method1();
// const d = person1.method1.bind(person1);
// d();

// console.log("------------------------")

// person1.method2();
// const t = person1.method2.bind(person1);
// t()








