// Factory Pattern like a class in OOP
// But factory is a Function()
// With Return whole Object

var createRect = function(width, hight) { // factory pattern - Function - Return Object
    return {
        width: width,
        hight: hight,

        draw: function() {
            console.log('I am rectangle');
            this.printProperties();
            console.log(this);
        },

        printProperties: function() {
            console.log('My width is: ' + this.width);
            console.log('My hight is: ' + this.hight);
        }
    };
};

var rect1 = createRect(10, 8);
rect1.draw();

var rect2 = createRect(40, 30);
rect2.draw();