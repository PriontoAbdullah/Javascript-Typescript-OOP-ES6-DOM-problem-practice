function Shape(color) { // Super Class
    this.color = color;
}

Shape.prototype.common = function() {
    console.log('I am common method');
};


function Square(width, color) { // sub class
    Shape.call(this, color); // super call
    this.width = width;
}

// Inheritance -> s1 -> Square() -> Shape() -> Object
Square.prototype = Object.create(Shape.prototype); // Inherit Shape prototype in Square prototype

Square.prototype.constructor = Square; // for Reset Constructor Inheritance

Square.prototype.draw = function() { //add another property in Square Prototype // Extend with dot notation
    console.log('I am drawing');
};

Square.prototype.common = function() { // Method Override - Polymorphism
    console.log('I am calling from Square & Override');
};


function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

function extend(Parent, Child) {
    // Inheritance -> c1 -> Circle() -> Shape() -> Object
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Shape, Circle); // For don't repeat same code, So create a extend 

Circle.prototype.common = function() { // Method Override - Polymorphism
    Shape.prototype.common.call(this);
    console.log('I am calling from Circle & Override');
};

var shape = new Shape('purple');
var s1 = new Square(45, 'Green');
var c1 = new Circle(5, 'Red');

shape.common();
s1.common(); // Inherit from Shape()
c1.common(); // Inherit from Shape()

console.log(s1.width + ' ' + s1.color);
console.log(c1.radius + ' ' + c1.color);

console.log(c1 instanceof Circle); // instance Object form which class - Part of polymorphism
console.log(c1 instanceof Shape);
console.log(c1 instanceof Square);