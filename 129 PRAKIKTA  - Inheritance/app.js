import Developer from "./Developer.js";
import Manager from "./Manager.js";

const manager = new Manager("Alisa", "ALoso", 2400, 34);

console.log(manager);
manager.work();

const developer = new Developer("Mehdi", "Aloso", 4500, 32, "JavaScript");

console.log(developer);

developer.code();
developer.work();
