// { } block er vetor er variable access kora jay { } block er vetor tekei etai scope
// abar ekta function er { } block tar bahirer parent { } block er variable access pay
// mane child - tar parent er access pay, but parent tar child er access kokhoi nay na 

let bonus = 20; // global scope

function sum(first, second) {
    let result = first + second + bonus;
    if (result > 9) {
        let mood = 'happy'; // var mood; hare var is hoist, access any where
        mood = 'fishy';
        mood = 'cranky';
        console.log(mood); // block scope // child
    }

    // console.log(mood); // doesn't access outside of if block // parent
    return result;
}
const output = sum(7, 3);
console.log(bonus);
// console.log(result); // doesn't access outside of function
console.log(output);

console.log(day);
var day = 'friday'; // day variable deceleration hoy, but value boshbe na

// What is hoisting?
// ans: Scope er vitor e var likhe declare korle, tahole oi variable er declaration take oi scope er bahire giye
// tar parent je scope ase sekhane niye nibe
// kno value set korle, function er vahire tekheo value access kora jay,
// kintu let / const use korle access kora jay na, oi scope er vitor e tekhe jay, bahire tekhe hoisting hy na