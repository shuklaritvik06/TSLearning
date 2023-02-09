interface myInterface {
  readonly name: string;
  age: number;
  salary: number;
  printDetails(person: myInterface): void;
}

type myInterface2 = {
  name: string;
  age: number;
  salary: number;
  printDetails(person: myInterface): void;
};

const person: myInterface = {
  name: "Ritvik",
  age: 20,
  salary: Infinity,
  printDetails: (person: myInterface) => {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Salary: ${person.salary}`);
  }
};

console.log(person.printDetails(person));

class HiBro implements myInterface {
  name: string;
  age: number;
  salary: number;
  constructor(naam: string, age: number, salary: number) {
    this.name = naam;
    this.age = age;
    this.salary = salary;
  }
  printDetails(obj: HiBro) {
    return this.name + this.age + this.salary;
  }
}

const sjsjsj = new HiBro("", 12, 12);

interface Hy {
  age2: string;
}
interface Hy2 extends Hy, myInterface {
  name: string;
}

type add = (a: number, b: number) => number;
const addFn: add = (a, b) => {
  return a + b;
};

addFn(1, 2);
