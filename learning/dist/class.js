"use strict";
class Dept {
    constructor(name, employe, age) {
        this.age = age;
        this.employee = [];
        this.hello = 3;
        this.ag = "";
        this.name = name;
        this.employee.push(employe);
    }
    describe() {
        console.log(this.name);
    }
}
class D extends Dept {
    constructor(name, employe, age) {
        super(name, employe, age);
        this.age = age;
    }
    sayAge() { }
}
let naam = new Dept("Jello", "je", 3);
console.log(naam.name);
naam.describe();
naam.hello;
//# sourceMappingURL=class.js.map