export class Hello{
    public name: string;
    readonly workingHours = 8;
    readonly compensationFactor = 1.5;
    private salary : number = this.workingHours*this.compensationFactor;
    constructor(name: string){
        this.name = name;
    }
    sayHello(){
        console.log(`Hello ${this.name}`);
    }
    getSalary(){
        return this.salary;
    }
}
