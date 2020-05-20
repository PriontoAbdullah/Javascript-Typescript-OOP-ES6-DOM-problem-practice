class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Alom', 20000);
console.log(heroPerson);

const normalPerson = new Person('Judu', 'Mia', 25000);
console.log(normalPerson);