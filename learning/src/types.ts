let a = 34;
let b = 'hello';

let c: number = 23;
let d: string = 'hello';
let e: boolean = true;
let f: any = 'hello';  // Dynamic type

let g:string[]=[];
g = ['hello','world'];

let h: any[] = [1, true, 'hello'];

let i: number[] = [1, 2, 3];

let k: Function = function(a: number, b: number,c?:number): number {
    return a + b;
}

let obj: object = {
    name: 'hello',
    age: 23
};

let obj2:{
    name: string,
    age: number
};

obj2 = {
    name: 'hello',
    age: 23
}

type myType = string | number | boolean;

let myarray: myType[] = [1, 'hello', true];

let mytuple: [string, number, boolean] = ['hello', 23, true];

let unionArray: (string|number | boolean)[] = [1, 'hello', true];