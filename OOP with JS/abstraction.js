var CreateRect = function(width, hight) {

    this.width = width;
    this.hight = hight;

    var position = { // this object is private data for declare variable inside function
        x: 54,
        y: -90
    };

    var printProperties = function() { // this method is now private for local variable inside function
        console.log('My width is: ' + this.width);
        console.log('My hight is: ' + this.hight);
    }.bind(this);

    this.draw = function() {
        console.log('I am rectangle');
        printProperties();
        console.log('Position x = ' + position.x + ' ' + 'Position y = ' + position.y);
    };

    Object.defineProperty(this, 'position', { //getter & setter for Get , Set  private attribute values
        get: function() {
            return position;
        },
        set: function(value) {
            position = value;
        }
    });

};

var rect1 = new CreateRect(50, 80);
rect1.draw();

rect1.position = { // for set  private attribute values
    x: 34,
    y: 21
};

console.log(rect1.position); // for get private attribute values