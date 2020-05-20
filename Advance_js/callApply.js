const person = {
    firstName: 'Abul',
    lastName: 'Ali',
    age: 19,
    salary: 15000,
    getInfo: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    chargeBill: function(amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
};

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary: 25000
};



const normalPerson = {
    firstName: 'Jodu',
    lastName: 'Mia',
    salary: 10000
};
person.chargeBill(150, 15, 5);

console.log(person.getInfo());
console.log(person.salary);

const heroChargeBill = person.chargeBill.bind(heroPerson); //bind method inherit another object, Bind() = Jora dey

heroChargeBill(3000, 300, 30);
console.log(heroPerson.salary);

person.chargeBill.call(normalPerson, 500, 50, 5); // call inherit parent object, call() - call kore parent tekhei

console.log(normalPerson.salary);

person.chargeBill.apply(normalPerson, [2000, 200, 20]); // Apply also like call method, different only arguments in an array
console.log(normalPerson.salary);