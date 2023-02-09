// For every class only one instance can be created
class Hellos {
  private static instance: Hellos;
  private constructor() {}
  static getInstance() {
    if (Hellos.instance) {
      return Hellos.instance;
    }
  }
}

Hellos.getInstance();
