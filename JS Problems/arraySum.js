function arraySum(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}

var num = [2, 34, 7, 3, 12, 43, 1, 4, 5, 67, 12, 4, 5, 6, 7, 3];
var total = arraySum(num);
console.log(total);