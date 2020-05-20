// New Object properties & object function declaration in ES6

let a = 10,
    b = 20;

let obj = {
    a,
    b,
    print() {
        console.log(this);
    }
};

obj.print();

// Destructuring Object

let person = {
    name: 'Prionto',
    email: 'prionto71@gmail.com',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};

let { name, email, address: { city, country } } = person; // ES6 trick, Old rules is exp. person.name, person.email

console.log(name, email, city, country);

// Destructuring Array

let arr = [1, 2, 3, 4, 5];

let [first, second, , , last] = arr;
console.log(first, second, last);

// Object from Entries

let obj1 = {
    a: 10,
    b: 20
};

console.log(Object.entries(obj1)); // convert array from object

let objArr = [
    ['a', 10],
    ['b', 20]
];

console.log(Object.fromEntries(objArr)); // convert object from array