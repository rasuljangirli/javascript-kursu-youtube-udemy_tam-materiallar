//

import Employee from "./Employee.js";

export default class Developer extends Employee {
  #language;

  constructor(firstName, lastName, salary, age, language) {
    super(firstName, lastName, salary, age);
    this.#language = language;
  }

  code() {
    console.log("Developer kod yazir");
  }
}
