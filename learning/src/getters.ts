class B {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  get GetName() {
    return this.name;
  }
  set Name(name: string) {
    this.name = name;
  }
}

let hd = new B("Ramesh");
hd.Name = "Eah";
console.log(hd.GetName);
