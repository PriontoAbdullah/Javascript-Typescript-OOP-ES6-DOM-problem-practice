// generator means anything make iterator of return iterator object  

let obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function*() {
        let currentValue = this.start;
        while (currentValue <= this.end) {
            yield currentValue++;
        }
    }
};

let iterate = obj[Symbol.iterator]();

console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());


// simple generator

// function* generate() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

arr1 = [10, 20, 30];

function* generate(collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i];
    }
}

let it = generate(arr1);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());