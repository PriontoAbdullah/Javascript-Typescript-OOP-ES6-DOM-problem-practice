var marks = [23, 37, 90, 13, 45, 84, 35, 89, 06, 35, 86, 23, 56, 09, 76, 86, 91];
var max = marks[0];

for (var i = 1; i < marks.length; i++) {
    if (max < marks[i]) {
        max = marks[i];
    }
}

console.log(max);