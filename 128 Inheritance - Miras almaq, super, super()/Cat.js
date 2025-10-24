import Animal from "./Animal.js";

//
export default class Cat extends Animal {
  #color;

  constructor(animalName, color) {
    super(animalName);
    this.#color = color;
  }

  helloAnimal() {
    // owerride
    super.helloAnimal(); // istifade edile biler
    console.log("Hello Cat");
  }

  get color() {
    return this.#color;
  }
}
