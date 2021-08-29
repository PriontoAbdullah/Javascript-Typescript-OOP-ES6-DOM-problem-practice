var num = 2.45532;
var result1 = Math.floor(num);
console.log(result1);

var result2 = Math.ceil(num);
console.log(result2);

var result3 = Math.round(num);
console.log(result3);

for (var i = 0; i <= 10; i++) {
    var number = Math.random(number) * 10;
    var random = Math.round(number);
    console.log(random);
}

var result = 100 + Math.random() * 100;
console.log(result);

var a = 10,
    b = 20,
    c = 15;
console.log(Math.max(a, b, c));