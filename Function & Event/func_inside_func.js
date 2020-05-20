function oddOrEven(result) {
    if (result % 2 == 0) {
        return result;
    } else {
        return result * 2;
    }
}

function loop(num) {
    even_array = [];
    for (var i = 0; i < num.length; i++) {
        var result = num[i];
        var res = oddOrEven(result);
        even_array.push(res);
    }
    return even_array;
}

var num = [2, 3, 5, 6, 7, 8, 2, 3, 4, 5];
var nums = loop(num);
console.log(nums);


function something(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(' ')[0];
        }
    }

    var message = greet + ' ' + getFirstName();
    console.log(message);
}

something('Good Morning', 'Prionto Abdullah');