const myFunction = <T extends object>(obj: T) => {
  return obj;
};

myFunction({ name: "John" });

interface Human<T> {
  name: string;
  age: number;
  salary: number;
  kids: T;
}

const humanA: Human<number> = {
  name: "John",
  age: 20,
  salary: Infinity,
  kids: 2
};

function merge<T extends object, U>(obj: T, obj2: U) {
  return Object.assign(obj, obj2);
}

const cd = merge({ name: "rames" }, { age: 23 });
console.log(cd.age);

function hell<U extends { name: string }>(obj: U): U {
  console.log(obj.name);
  return obj;
}

function extractFromObject<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
