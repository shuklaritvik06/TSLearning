function withTemplate(template: string, hook: string) {
  return function (constructor: Function) {
    const element = document.getElementById(hook);
    const data = constructor("Hello");
    if (element) {
      element.innerHTML = template;
      element.textContent = data.name;
    }
  };
}

@withTemplate("<h1>Hello</h1>", "para")
class Component {
  public name: string = "";
  constructor(_name: string) {
    this.name = _name;
  }
}

// Decorator is executing bottom to Top!
