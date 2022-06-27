let myFunc: (a: number, b: number) => number;

myFunc= function(a: number, b:number): number {
    return a + b;
}

let myFunc2: (a: { c: number; d: number }, b: number) => number;

myFunc2= function(a: { c: number; d: number }, b: number): number {
    return a.c + a.d + b;
}