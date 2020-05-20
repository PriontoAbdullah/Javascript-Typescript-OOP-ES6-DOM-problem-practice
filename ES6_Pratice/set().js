// set() is a data structure

let set = new Set([1, 2, 3]);
set.add(5);
set.add(6);
set.add(1); // set doesn't add any duplicate data
set.add(2);
console.log(set);
console.log(set.size);

set.delete(5);
console.log(set);

console.log(set.has(6)); // check data in Set
console.log(set.values());
console.log(set.keys());

for (let v of set) {
    console.log(v);
}

console.log(set.entries());

console.log(set.clear());