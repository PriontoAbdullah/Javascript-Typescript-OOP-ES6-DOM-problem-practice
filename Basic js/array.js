var friendsAge = [15, 14, 17, 16, 15];

var sum = 0;
for (var i = 0; i < friendsAge.length; i++) {
    sum += friendsAge[i];
}

console.log(sum);

console.log(friendsAge.indexOf(16));

var age = friendsAge[0];
console.log(age);

friendsAge[4] = 21;
console.log(friendsAge);

friendsAge.push(19);
friendsAge.unshift(20);
console.log(friendsAge);

friendsAge.pop();
friendsAge.shift();
console.log(friendsAge);

// Advance Method - splice()

friendsAge.splice(3, 0, 23, 29); // splice([index number], [remove element number], [add element..1], [add element..2])
console.log(friendsAge);

friendsAge.splice(3, 1); // splice([index number], [remove element number])
console.log(friendsAge);

friendsAge.splice(3, 1, 44); // splice([index number], [remove element number], [replace element])
console.log(friendsAge);

// Methods

console.log(friendsAge.join(', '));

var arr = Array.from(friendsAge);
console.log(arr);