function mixing(target, ...sources) { // Mixing Composition
    Object.assign(target, ...sources);
}

var canWalk = {
    walk: function() {
        console.log('Walking...');
    }
};

var canEat = {
    eat: function() {
        console.log('Eating...');
    }
};

var canSwim = {
    swim: function() {
        console.log('Swimming...');
    }
};

function Person(name) {
    this.name = name;
}

function Goldfish(name) {
    this.name = name;
}

mixing(Person.prototype, canEat, canWalk); // Composition Inheritance
mixing(Goldfish.prototype, canEat, canSwim);

Person.prototype.constructor = Person;
Goldfish.prototype.constructor = Goldfish;

var p1 = new Person('Abul');
var g1 = new Goldfish('Nimo');

console.log(p1);
console.log(g1);
p1.eat();
p1.walk();
g1.eat();
g1.swim();