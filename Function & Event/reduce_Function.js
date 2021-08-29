var arr = [1, 2, 3, 4, 5, 6];

var sum = arr.reduce(function(prev, curr) { // hare 2 values need, 1. previous data 2.current data
    return prev + curr;
}, 100); //hare 100 is initial value

var max = arr.reduce(function(prev, curr) {
    return Math.max(prev, curr);
});

console.log(sum);
console.log(max);

// Implementation this reduce function

function myReduce(arr, callBack, init) {
    for (var i = 0; i < arr.length; i++) {
        init = callBack(init, arr[i]);
    }
    return init;
}

console.log(myReduce(arr, function(prev, curr) {
    return prev + curr;
}, 100));

console.log(myReduce(arr, function(prev, curr) {
    return Math.max(prev, curr);
}, 0));