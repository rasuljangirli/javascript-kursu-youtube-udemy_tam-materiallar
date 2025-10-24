export default class Employee {
  #firstName;
  #lastName;
  #salary;
  #age;

  constructor(firstName, lastName, salary, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#salary = salary;
    this.#age = age;
  }

  work() {
    console.log("işçi işləyir");
  }
}
