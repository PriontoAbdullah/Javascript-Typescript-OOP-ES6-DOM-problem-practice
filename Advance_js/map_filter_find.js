const numbers = [4, 5, 6, 7, 8];

const result = numbers.map(function(element) {
    return element * element;
});

// map = get all the value of a property from each object in an array

console.log(result);

const res = numbers.map(e => e * e);
console.log(res);

const bigger = numbers.filter(x => x > 5); // check filter
console.log(bigger);

const isThere = numbers.find(x => x > 5); // check only one first value
console.log(isThere);