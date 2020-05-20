var rect = {
    width: 100,
    hight: 50,

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

rect.draw();

rect.hight = 100;

rect.draw();

var another = {
    width: 47,
    hight: 56,
    print: rect.printProperties // this refer her before executional context
};

console.log(another.print);

another.print();