"use strict";
class B {
    constructor(name) {
        this.name = name;
    }
    get GetName() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
}
let hd = new B("Ramesg");
hd.Name = "Eah";
console.log(hd.GetName);
//# sourceMappingURL=getters.js.map