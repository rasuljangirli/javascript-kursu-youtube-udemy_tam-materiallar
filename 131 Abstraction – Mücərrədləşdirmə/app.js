//

class Employee {
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    if (new.target == Employee) {
      throw new Error("Employeden obj yaratmaq olmaz");
    }
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  work() {
    console.log("Employee isleyir");
  }
}

class Developer extends Employee {}

const e = new Developer("Alisa", "Aloso", 25);

console.log(e);
