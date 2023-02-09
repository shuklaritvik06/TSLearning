class Dept {
  name: string;
  private employee: string[] = [];
  public hello: number = 3;
  private ag: string = "";

  constructor(name: string, employe: string, public readonly age: number) {
    this.name = name;
    this.employee.push(employe);
  }
  describe(this: Dept) {
    console.log(this.name);
  }
}

class D extends Dept {
  constructor(name: string, employe: string, public readonly age: number) {
    super(name, employe, age);
  }
  sayAge() {}
}

let naam = new Dept("Jello", "je", 3);
console.log(naam.name);
naam.describe();
naam.hello;
