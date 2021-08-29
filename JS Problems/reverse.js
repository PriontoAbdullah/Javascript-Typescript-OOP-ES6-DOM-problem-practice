var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse().join('');
console.log(reverse)

function rev(str) {
    reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var str = "I am hardworking. I am serious. I am sure I will do it";
console.log(rev(str));