class Static {
  static readonly Hello: string = "Ramesh";
  static greet() {
    return Hello;
  }
}
console.log(Static.Hello);
Static.greet();
