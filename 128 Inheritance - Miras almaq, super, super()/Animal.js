//
export default class Animal {
  #animalName;

  constructor(animalName) {
    this.#animalName = animalName;
  }

  helloAnimal() {
    console.log("Salam : animal");
  }

  get animalName() {
    return this.#animalName;
  }
}
