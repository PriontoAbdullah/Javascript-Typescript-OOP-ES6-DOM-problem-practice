function add(name, age, task) {
    console.log("Hello ", name);
    console.log("age is: ", age);
    task();
}

function hand() {
    console.log("Wash your Hand");
}

function shower() {
    console.log("Take Shower");
}

add('Abul cha', 56, hand);
add('kutkut mia', 34, shower);

function sample(a, b, callBack) {
    var c = a + b;
    var d = a - b;
    var result = callBack(c, d);
    return result;
}

function sum(a, b) {
    return a + b;
}

var result = sample(5, 8, sum);
console.log(result);

var result2 = sample(5, 8, function(a, b) {
    return a - b;
});

console.log(result2);