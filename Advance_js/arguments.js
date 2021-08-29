function add(...rest) {
    console.log([...arguments]); // arguments is array like object
    return rest.reduce((a, b) => a + b);
}

const result = add(2, 3, 5, 7);
console.log(result);