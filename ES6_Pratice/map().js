// map() is a data structure of key & value pair
// we can store any type of data in keys

let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
]);

map.set('d', 40); // add another keys & values

console.log(map);
console.log(map.size);

map.delete('c');
console.log(map);

console.log(map.get('b'));

console.log(map.keys());
console.log(map.values());

console.log(map.entries());

for (let [k, v] of map) {
    console.log(k, v);
}

map.forEach((v, k) => {
    console.log(k, v);
});

// we can store any type of data in keys
map.set({ name: 'Prionto' }, 23); // in map() hare key is anything of data type store
console.log(map);