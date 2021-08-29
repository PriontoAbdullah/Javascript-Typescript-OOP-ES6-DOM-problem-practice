var persons = [{
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 20
    },
    {
        name: 'C',
        age: 26
    }
];

var arr = [3, 6, 8, 0, 9, 1, 2, 5, 3, 4, 7, 6, -1];

arr.sort(function(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
});

console.log(arr);

persons.sort(function(a, b) {
    if (a.age > b.age) {
        return 1;
    } else if (a.age < b.age) {
        return -1;
    } else {
        return 0;
    }
});

console.log(persons);

var res = arr.every(function(value) {
    return value % 2 == 0;
});

console.log(res);

var res2 = arr.some(function(value) {
    return value < 0;
});

console.log(res2);