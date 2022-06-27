interface myInterface{
    name: string,
    age: number,
    salary: number,
    printDetails(person: myInterface): void
}

const person: myInterface = {
    name: 'Ritvik',
    age: 20,
    salary: Infinity,
    printDetails: (person: myInterface)=>{
        console.log(`Name: ${person.name}`);
        console.log(`Age: ${person.age}`);
        console.log(`Salary: ${person.salary}`);
    }
}

console.log(person.printDetails(person));
