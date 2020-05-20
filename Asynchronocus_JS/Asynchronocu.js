console.log('I am Line 1');

setTimeout(() => {
    console.log('I am Line 2');
}, 3000);

setTimeout(() => {
    console.log('I am Line 3');
}, 0);

console.log('I am Line 4');

setTimeout(() => {
    console.log('I am Line 5');
}, 1000);

// when use asynchronous function, then doesn't store outside variable
// always store & output inside of asynchronous function