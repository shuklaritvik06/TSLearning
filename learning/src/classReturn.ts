function BSC() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super("Ramesh");
      }
    };
  };
}

@BSC()
class BFD {
  public name: string = "";
  constructor(_name: string) {
    this.name = _name;
  }
}
