class C {
  static readonly hello: number = 19;
}

class Hello extends C {
  constructor() {
    super();
  }
  getHello() {
    return C.hello;
  }
}

let chd = new Hello();
chd.getHello();
