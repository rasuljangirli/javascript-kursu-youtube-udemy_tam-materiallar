
//? new keyword


const Person = function (firstName) {
    this.firstName = firstName;
};

Person.prototype.seyHello = function () {
    console.log("Hello : " + this.firstName)
}


const person1 = new Person("Nihan");

console.log(person1);


person1.seyHello();
console.log(person1.__proto__ == Person.prototype)





// const person1 = Object.create(Person.prototype);
// Person.call(person1, "Nihan");
// console.log(person1);
// person1.seyHello();

// const person2 = Object.create(Person.prototype);
// Person.apply(person2, ["Mehdi"]);
// console.log(person2.firstName);
// person2.seyHello();
// console.log(person2.__proto__ == Person.prototype);













