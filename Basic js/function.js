function jaan() {
    console.log("Jaan o baby... Sona moyna pakhi");
}

jaan();

function doubleleft(num) {
    var result = num * 2;
    return result;
}

var number = doubleleft(5);
var num1 = doubleleft(50);
console.log(number, num1);

function test() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

test(10, 20, 30);

var addition = function(a, b) { // function expression
    return a + b;
};

console.log(addition(5, 7));

var add = addition;
console.log(add(2, 2));