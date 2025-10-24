//

// class Person {
//   name;
//   cauntry;

//   constructor(name, cauntry) {
//     this.name = name;
//     this.cauntry = cauntry;
//   }
// }

// const person1 = new Person("Alisa", "Azerbaycan");
// console.log(person1);

// const person2 = new Person("Nihan", "Turkiyye");
// console.log(person2);

// const person3 = new Person("Nihan");
// console.log(person3);

class Car {
  marka;
  model;
  color;
  price;

  constructor(marka, model, color, price) {
    this.marka = marka;
    this.model = model;
    this.color = color;
    this.price = price;
  }

  go() {
    console.log(`Markası ${this.marka} olan masin gedir`);
  }
}

const car1 = new Car("Mersedes", "E200", "red", "25000");
car1.go();
console.log(car1);

const car2 = new Car("BMW", "00", "white", "25000");
car2.go();
console.log(car2);
