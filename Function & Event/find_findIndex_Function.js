var arr = [5, 7, 8, 2, 1, 3, 4, 9, 6];

var result = arr.find(function(value) {
    return value == 9;
});

console.log(result);

var result2 = arr.findIndex(function(value) {
    return value == 9;
});

console.log(result2);

// Implementation this find function

function myFind(arr, callBack) {
    for (var i = 0; i < arr.length; i++) {
        if (callBack(arr[i])) {
            return arr[i];
        }
    }
}

console.log(myFind(arr, function(value) {
    return value == 9;
}));