"use strict";
const person = {
    name: 'Ritvik',
    age: 20,
    salary: Infinity,
    printDetails: (person) => {
        console.log(`Name: ${person.name}`);
        console.log(`Age: ${person.age}`);
        console.log(`Salary: ${person.salary}`);
    }
};
console.log(person.printDetails(person));
