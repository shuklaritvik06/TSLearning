export class Hello {
    constructor(name) {
        this.workingHours = 8;
        this.compensationFactor = 1.5;
        this.salary = this.workingHours * this.compensationFactor;
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
    getSalary() {
        return this.salary;
    }
}
//# sourceMappingURL=Hello.js.map