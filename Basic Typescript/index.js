// const myName: string = 'John';
var id = 123;
id = '123';
var myName = 'John';
var person1 = {
    name: 'John',
    age: 30,
    isMarried: false
};
var person2 = {
    name: 'Jane',
    age: 25
};
var roll = [1, '2', 3, '4', 5, '6', 7, '0'];
var persons = [
    {
        name: 'John',
        age: 30,
        isMarried: false
    },
    {
        name: 'Jane',
        age: 25
    },
];
var greetings = function (name) {
    return "Hello ".concat(name);
};
greetings('John');
var gameDirection = 'left';
// generics
var getArray = function (items) {
    return new Array().concat(items);
};
var myNumArr = getArray([100, 200, 300]);
var myRolls = getArray(['1', '2', '3', '4', '5', '6', '7', '0']);
// enum
var Week;
(function (Week) {
    Week[Week["Monday"] = 1] = "Monday";
    Week[Week["Tuesday"] = 2] = "Tuesday";
    Week[Week["Wednesday"] = 3] = "Wednesday";
    Week[Week["Thursday"] = 4] = "Thursday";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Saturday"] = 6] = "Saturday";
    Week[Week["Sunday"] = 7] = "Sunday";
})(Week || (Week = {}));
console.log("Week ".concat(Week.Monday));
// tuple
var myTuple = ['John', 30, true];
