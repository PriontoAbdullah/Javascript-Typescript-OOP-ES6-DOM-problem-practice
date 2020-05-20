// garbage collection of set & map
// Weak Set
let a = { a: 10 },
    b = { b: 20 };
let set = new Set([a, b]);

a = null; // null means remove the value

console.log(set);

let arr = [...set];
console.log(arr[0]);


let c = { a: 10 },
    d = { b: 20 };

let weakSet = new WeakSet([c, d]); // only store object in WeakSet

c = null;

console.log(weakSet.has(c));


// Weak Map
{
    let weakMap = new WeakMap([
        [a, 45],
        [b, 75]
    ]);

    a = null;

    console.log(weakMap.get(a)); //false
    console.log(weakMap.has(a)); //false
    console.log(weakMap.has(b)); //true
}