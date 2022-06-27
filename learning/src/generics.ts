const myFunction = <T extends object>(obj: T)=>{
    return obj;
}

myFunction({name: 'John'});

interface Human<T>{
    name: string,
    age: number,
    salary: number,
    kids: T
}

const humanA: Human<number> = {
    name: 'John',
    age: 20,
    salary: Infinity,
    kids: 2
}