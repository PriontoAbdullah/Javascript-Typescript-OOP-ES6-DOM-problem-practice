var arr = [1, 2, 3, 4, 5];

var sqrArr = arr.map(function(value) { // this map function don't change the original array
    return value * value;
});

console.log(arr);
console.log(sqrArr);

// Implementation this map function
function myMap(arr, callBack) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = callBack(arr[i]);
        newArr.push(temp);
    }
    return newArr;
}

console.log(myMap(arr, function(value) {
    return value * value;
}));

var ten = myMap(arr, function(value) {
    return value * 10;
});
console.log(ten);