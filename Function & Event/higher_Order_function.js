// Pass Function as an Argument
// Return Function from another function

function add(a, b) {
    return a + b;
}

function multitask(a, b, task) { //task() as a argument function
    var c = a + b;
    var d = a - b;

    return function() { // closure arguments
        var m = task(a, b);
        return m * c * d;
    }; // return as a function
}

var multiply = multitask(3, 2, add);
console.log(multiply());