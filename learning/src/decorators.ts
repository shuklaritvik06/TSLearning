function Logger(constructor: Function) {
  console.log("Logging the data");
}

@Logger
class Decorator {
  public name: string = "Ritvik";
  constructor() {
    console.log("Creating the objects...");
  }
}
const dec = new Decorator();
