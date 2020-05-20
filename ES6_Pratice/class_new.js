class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.test = function() {
            console.log('This class property function');
        };
    }

    draw() {
        console.log('Drawing...');
    }
}

let r1 = new Rectangle(10, 15);

console.log(r1);
r1.draw();