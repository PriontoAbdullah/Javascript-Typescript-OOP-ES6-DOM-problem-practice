var num = [3, 2, 3, 4, 5, 6, 8, 9, 5, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 4, 0, 8, 4, 2, 1];
var empty = [];

for (var i = 0; i < num.length; i++) {
    var element = num[i];
    var index = empty.indexOf(element);
    if (index == -1) {
        empty.push(element);
    }
}

console.log(empty);