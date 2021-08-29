function add(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    return sum;
}

const arr = add(1, 2, 3, 4, 5);
console.log(arr);