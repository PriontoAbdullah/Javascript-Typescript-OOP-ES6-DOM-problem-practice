var a = 5;
var b = 7;
console.log("Before SWAP a =", a, " b =", b);

var temp = a;
a = b;
b = temp;
console.log("After SWAP a =", a, " b =", b);

a = a + b;
b = a - b;
a = a - b;
console.log("After SWAP a =", a, " b =", b);

[a, b] = [b, a];
console.log("After SWAP a =", a, " b =", b);

// var i = 10;

// while (i-- > 0) {
//     console.log(i);
// }