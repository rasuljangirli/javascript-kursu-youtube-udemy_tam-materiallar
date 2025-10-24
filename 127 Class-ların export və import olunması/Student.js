//

export default class Student {
  #firstName;

  constructor(firstName) {
    this.#firstName = firstName;
  }

  get firstName() {
    return this.#firstName;
  }
}
