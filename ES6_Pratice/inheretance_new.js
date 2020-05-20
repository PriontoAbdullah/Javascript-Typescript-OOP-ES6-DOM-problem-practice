class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        console.log('Drawing...');
    }
}

class Rectangle extends Shape {
    constructor(color, width, hight) {
        super(color);
        this.width = width;
        this.hight = hight;
    }

    draw() {
        console.log('Drawing.. Rectangle.. Override');
    }

    calculate() {
        return this.width * this.hight;
    }
}

let r1 = new Rectangle('Green', 4, 5);
console.log(r1);
r1.draw();