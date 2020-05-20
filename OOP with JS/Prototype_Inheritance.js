var person = {
    name: 'Prionto'
};

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name');
// console.log(descriptor);

Object.defineProperty(person, 'name', { // For Override any Object / Function
    configurable: false,
    enumerable: false,
    value: "Prionto Abdullah",
    writable: false
});

var descriptor = Object.getOwnPropertyDescriptor(person, 'name'); // For show property of any Object / Function
console.log(descriptor);

function Person(name) {
    this.name = name;
}

Person.prototype.PI = 3.1416; // Inherit prototype of any Constructor

var p1 = new Person("Abul");
var p2 = new Person("ali"); // Every Object has common prototype PI = 3.1416

console.log(p1);
console.log(p2);

function Square(width) { // Instance Member
    this.width = width;

    this.getWidth = function() {
        console.log('Width is: ' + this.width);
    };
}

Square.prototype = { // Inherit prototype of any Constructor
    draw: function() {
        console.log('Draw');
        this.getWidth(); // access in prototype from instance member
    },
    // Prototype Member
    toString: function() {
        return 'My width is: ' + this.width; // access in prototype from instance member
    }
};

var sqr1 = new Square(10);
var sqr2 = new Square(5);

sqr1.draw();
sqr2.draw();
// sqr1.toString(); // Output Show only Browser Console
// sqr2.toString();
// sqr1.hasOwnProperty('draw');   // Output Show only Browser Console
console.log(Object.keys(sqr1)); // Show Constructor Own Property