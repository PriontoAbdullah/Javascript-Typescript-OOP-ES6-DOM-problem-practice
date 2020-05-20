// rest operator = ...rest , Use in function parameter
// spread operator = ...spread , use any where..

const business = 650;
const minister = 450;
const sochib = 350;
const takapoisa = [850, 950, 650, 380];
// const maximum1 = Math.max(business, minister, sochib);
// console.log(maximum1);
const maximum = Math.max(...takapoisa);
console.log(maximum);

function sum(...rest) {
    return rest.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));

let a = [1, 2, 3];
console.log(...a);

let obj = {
    a: 10,
    b: 20,
    c: 30
};

let obj2 = {
    ...obj
};

console.log(obj2);
console.log(obj == obj2);