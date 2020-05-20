import Shape from './Shape.js';

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

export default Rectangle;