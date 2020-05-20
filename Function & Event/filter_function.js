var arr = [7, 8, 9, 3, 5, 2, 5, 7, 3, 6, 4, 3];

var filteredArr = arr.filter(function(value) {
    return value % 2 == 0; // filter true value in new array
});

console.log(filteredArr);

// Implementation this filter function

function myFilter(arr, callBack) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callBack(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(myFilter(arr, function(value) {
    return value % 2 == 0;
}));

console.log(myFilter(arr, function(value) {
    return value % 2 == 1;
}));

console.log(myFilter(arr, function(value) {
    return value > 5;
}));