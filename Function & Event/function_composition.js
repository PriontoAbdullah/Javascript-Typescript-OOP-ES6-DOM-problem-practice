function print(msg) {
    console.log(msg);
}

function multi(n) {
    return n * 5;
}

function add(a, b) {
    return a + b;
}

print(multi(add(3, 5))); // composition means first function input is second function output