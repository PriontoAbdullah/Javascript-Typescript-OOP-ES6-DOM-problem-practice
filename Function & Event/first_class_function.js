function add(a, b) {
    return a + b;
}

// Function can be stored in variable
var sum = add;
console.log(sum(4, 5));

// function can be stored in an Array
var arr = [];
arr.push(add);
console.log(arr[0](2, 3));

// function can be stored in Object
var obj = {
    sum: add
};

console.log(obj.sum(5, 7));

// Create function as Need
setTimeout(function() {
    console.log("I have created after 3 seconds...");
}, 3000);