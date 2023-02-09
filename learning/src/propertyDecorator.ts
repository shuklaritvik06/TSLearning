function Log(target: any, propertyName: string) {
  console.log(target);
  console.log(propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, position: number) {
  console.log(target);
  console.log(name);
  console.log(position);
}

class BBC {
  @Log
  public name: string = "Ramesh";
  @Log2
  set setName(_name: string) {
    this.name = _name;
  }
  describe(@Log3 id: number) {}
}

// set and get are accessors
