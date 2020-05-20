var arr = [1, 2, 3, 4, 5];
var sum = 0;

arr.forEach(function(value, index, arr) { // this is callBack function under forEach function
    console.log(value, index, arr);
    sum += value;
});

console.log(sum);
var sum = 0;

// Implementation this forEach function
function foreach(arr, callBack) {
    for (var i = 0; i < arr.length; i++) {
        callBack(arr[i], i, arr);
    }
}

foreach(arr, function(value, index, arr) {
    console.log(value, index, arr);
    sum += value;
});

console.log(sum);