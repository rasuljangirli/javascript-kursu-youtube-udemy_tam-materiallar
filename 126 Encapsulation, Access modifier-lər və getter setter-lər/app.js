//

class Student {
  // firstName; // public
  #age; // private
  // #lastName;

  constructor(firstName, age) {
    this.firstName = firstName;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    if (age.length > 3) {
      this.#age = age;
    }
  }

  #seyHello() {
    console.log("Hello");
  }

  greet() {
    this.#seyHello();
  }
}

const st1 = new Student("Alisa", 23);

st1.greet();
// st1.#seyHello();

st1.age = "1234534";

console.log(st1.firstName);

console.log(st1);
