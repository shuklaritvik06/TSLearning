function Logger(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

@Logger("")
class Bh {
  public name: string = "";
  constructor(_name: string) {
    this.name = _name;
  }
}
