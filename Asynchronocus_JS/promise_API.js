// delay promise function

const delay = s => new Promise(resolve => setTimeout(resolve, s * 1000));

delay(2).then(() => console.log('2 Seconds Delay'));
delay(1).then(() => console.log('1 Seconds Delay'));
delay(3).then(() => console.log('3 Seconds Delay'));
delay(2).then(() => console.log('2 Seconds Delay'));
delay(5).then(() => console.log('5 Seconds Delay'));

let p1 = Promise.resolve('Test');
p1.then(v => console.log(v));

let p2 = Promise.reject('Reject');
p2.catch(e => console.log(e));

let p3 = Promise.resolve('One');
let p4 = Promise.resolve('Two');
let p5 = Promise.resolve('Three');

let PromiseArr = [p3, p4, p5];
Promise.all(PromiseArr)
    .then(arr => {
        console.log(arr);
    });

let p6 = new Promise(resolve => {
    setTimeout(resolve, 5000, '5000 Milliseconds');
});

let p7 = new Promise(resolve => {
    setTimeout(resolve, 3000, '3000 Milliseconds');
});

let p8 = new Promise(resolve => {
    setTimeout(resolve, 4000, '4000 Milliseconds');
});

let PromiseSecArr = [p6, p7, p8];

Promise.all(PromiseSecArr)
    .then(v => console.log(v));

Promise.race(PromiseSecArr)
    .then(v => console.log(v));