// function DoubleIt(num){
//     return num * 2;
// }

// const DoubleIt = function myFun(num){
//          return num * 2;
// }

//this is the best method i think.
const DoubleIt = num => num * 2; // single parameter
const add = (x, y) => x + y; // multiple parameter
const give5 = () => 5; // empty parameter


const result1 = add(50);
const result2 = add(50, 7);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
};

const result3 = doMath(12, 24);

let obj = {
    name: 'prionto',
    print: function() {
        setTimeout(() => {
            console.log(this);
            console.log(`Hello ${this.name}`);
        }, 1000);
    }
};

obj.print();