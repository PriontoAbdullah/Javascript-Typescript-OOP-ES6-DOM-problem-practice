function sayHi(n) {
    if (n == 0) {
        return 0;
    }
    console.log('Hi..');
    sayHi(n - 1);
}

sayHi(5);

function sum(n) {
    if (n == 1) {
        return 1;
    }
    return n + sum(n - 1);
}

console.log(sum(5));

arr = [1, 2, 3, 4, 5];

function sumArr(arr, ls) {
    if (ls < 0) {
        return 0;
    }
    return arr[ls] + sumArr(arr, ls - 1);
}

console.log(sumArr(arr, arr.length - 1));