// Private data in Class by Symbol()

const _radius = Symbol();
const _name = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius, name) {
        this[_radius] = radius;
        this[_name] = name;
    }

    [_draw]() {
        console.log('Drawing...');
    }
}

let c1 = new Circle(2, 'CRED');
console.log(c1);


// Private data in Class by WeakMap()

const _radius1 = new WeakMap();
const _name1 = new WeakMap();
const _resize = new WeakMap();

class Circle1 {
    constructor(radius, name) {
        this.size = 100;
        _radius1.set(this, radius);
        _name1.set(this, name);

        _resize.set(this, () => {
            console.log(this.size);
        });
    }

    get radius() {
        return _radius1.get(this);
    }

    set radius(v) {
        _radius1.set(this, v);
    }

    draw() {
        console.log('Drawing...');
        console.log(_radius1.get(this), _name1.get(this));
        _resize.get(this)();
    }
}

let c2 = new Circle1(2, 'CRED');
console.log(c2);

c2.draw();

c2.radius = 50;
console.log(c2.radius);