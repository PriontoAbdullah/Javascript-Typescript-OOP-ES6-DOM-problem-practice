// Symbol() is a new data type with Unique data in every variable

let s1 = Symbol();
let s2 = Symbol('test symbol');

console.log(s1);
console.log(s2);

console.log(s1 == s2);


let toss = {
    head: Symbol('HEAD'),
    tail: Symbol('TAIL')
};

console.log(toss.head);