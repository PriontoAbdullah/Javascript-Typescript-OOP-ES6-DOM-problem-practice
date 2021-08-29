// Constructor Pattern like a class in OOP
// But Constructor is a Function()
// Without any Object
// Remove every ' , '
// Replace ' : ' with ' = '

var CreateRect = function(width, hight) { // Constructor pattern - Function - Always name with Capital letter   

    this.width = width;
    this.hight = hight;

    this.draw = function() {
        console.log('I am rectangle');
        this.printProperties();
        console.log(this);
    };

    this.printProperties = function() {
        console.log('My width is: ' + this.width);
        console.log('My hight is: ' + this.hight);
    };

};

var rect1 = new CreateRect(50, 80);
rect1.draw();