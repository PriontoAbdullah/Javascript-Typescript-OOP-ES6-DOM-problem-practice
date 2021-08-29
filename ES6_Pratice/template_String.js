// ` ` = backtik

var s = `           kuchu macha kacha

hamba hamba hamba

hu hu hauuuu...`;

console.log(s.trim()); // trim() method remove before all spaces

var name = 'Prionto Abdullah';
var age = 23;

console.log(`My name is ${name} & I am ${age} years old. And I am ${age>18?'':'not '}adult.`);

console.log(name.padStart(20, '*'));
console.log(name.padEnd(20, '-'));
console.log('P'.repeat(5));