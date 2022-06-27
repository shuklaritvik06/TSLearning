import { Hello } from "./otherFiles/Hello";
const greet = new Hello('World');
greet.sayHello();
class HelloTwo {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
const greetTwo = new HelloTwo('World');
